'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join } from 'path';

async function uploadFile(file: File): Promise<string> {
    try {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Unique filename
        const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '')}`;
        const uploadsDir = join(process.cwd(), 'public', 'uploads');
        const filePath = join(uploadsDir, filename);

        // Ensure uploads directory exists
        if (!existsSync(uploadsDir)) {
            await mkdir(uploadsDir, { recursive: true });
        }

        await writeFile(filePath, buffer);
        return `/uploads/${filename}`;
    } catch (error) {
        console.error('uploadFile error:', error);
        throw new Error('Dosya yüklenirken bir hata oluştu.');
    }
}

export async function createProject(formData: FormData) {
    try {
        const title = formData.get('title') as string;
        const category = formData.get('category') as string;
        const description = formData.get('description') as string;
        const coverFile = formData.get('coverImage') as File | null;

        if (!title || !category || !description) {
            throw new Error('Lütfen tüm zorunlu alanları doldurun.');
        }

        // Basic Slug Generation
        const slug = title
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '');

        let coverImageUrl = '';
        if (coverFile && coverFile.size > 0) {
            try {
                coverImageUrl = await uploadFile(coverFile);
            } catch (uploadError) {
                console.error('File upload error:', uploadError);
                throw new Error('Kapak görseli yüklenirken bir hata oluştu.');
            }
        }

        // Create Project
        let project;
        try {
            project = await prisma.project.create({
                data: {
                    title,
                    slug,
                    category,
                    description,
                    coverImage: coverImageUrl,
                },
            });
        } catch (dbError: any) {
            console.error('Database error:', dbError);
            throw new Error('Proje veritabanına kaydedilirken bir hata oluştu.');
        }

        // Handle Gallery Images
        const galleryFiles = formData.getAll('galleryImages') as File[];

        for (const file of galleryFiles) {
            if (file && file.size > 0) {
                try {
                    const url = await uploadFile(file);
                    await prisma.image.create({
                        data: {
                            url,
                            type: 'gallery',
                            projectId: project.id,
                        },
                    });
                } catch (imageError) {
                    console.error('Gallery image upload error:', imageError);
                    // Continue with other images even if one fails
                }
            }
        }

        revalidatePath('/portfolio');
        revalidatePath('/admin');
        
        // Return success instead of redirect
        return { success: true, projectId: project.id };
    } catch (error: any) {
        console.error('createProject error:', error);
        return { 
            success: false, 
            error: error?.message || 'Proje oluşturulurken bir hata oluştu.' 
        };
    }
}

export async function updateProject(projectId: string, formData: FormData) {
    try {
        const title = formData.get('title') as string;
        const category = formData.get('category') as string;
        const description = formData.get('description') as string;
        const coverFile = formData.get('coverImage') as File | null;

        if (!title || !category || !description) {
            throw new Error('Lütfen tüm zorunlu alanları doldurun.');
        }

        // Basic Slug Generation
        const slug = title
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '');

        const updateData: any = {
            title,
            slug,
            category,
            description,
        };

        // Upload new cover image if provided
        if (coverFile && coverFile.size > 0) {
            try {
                updateData.coverImage = await uploadFile(coverFile);
            } catch (uploadError) {
                console.error('File upload error:', uploadError);
                throw new Error('Kapak görseli yüklenirken bir hata oluştu.');
            }
        }

        // Update Project
        try {
            await prisma.project.update({
                where: { id: projectId },
                data: updateData,
            });
        } catch (dbError: any) {
            console.error('Database error:', dbError);
            throw new Error('Proje güncellenirken bir hata oluştu.');
        }

        // Handle Gallery Images
        const galleryFiles = formData.getAll('galleryImages') as File[];

        for (const file of galleryFiles) {
            if (file && file.size > 0) {
                try {
                    const url = await uploadFile(file);
                    await prisma.image.create({
                        data: {
                            url,
                            type: 'gallery',
                            projectId: projectId,
                        },
                    });
                } catch (imageError) {
                    console.error('Gallery image upload error:', imageError);
                    // Continue with other images even if one fails
                }
            }
        }

        revalidatePath('/portfolio');
        revalidatePath('/admin');
        revalidatePath(`/admin/projects/${projectId}`);
        
        return { success: true };
    } catch (error: any) {
        console.error('updateProject error:', error);
        return { 
            success: false, 
            error: error?.message || 'Proje güncellenirken bir hata oluştu.' 
        };
    }
}

export async function deleteProject(projectId: string) {
    try {
        // Delete images first (cascade should handle this, but being explicit)
        await prisma.image.deleteMany({
            where: { projectId },
        });

        // Delete project
        await prisma.project.delete({
            where: { id: projectId },
        });

        revalidatePath('/portfolio');
        revalidatePath('/admin');
        
        return { success: true };
    } catch (error: any) {
        console.error('deleteProject error:', error);
        return { 
            success: false, 
            error: error?.message || 'Proje silinirken bir hata oluştu.' 
        };
    }
}

export async function deleteImage(imageId: string) {
    try {
        await prisma.image.delete({
            where: { id: imageId },
        });
        
        revalidatePath('/admin');
        return { success: true };
    } catch (error: any) {
        console.error('deleteImage error:', error);
        return { 
            success: false, 
            error: error?.message || 'Görsel silinirken bir hata oluştu.' 
        };
    }
}