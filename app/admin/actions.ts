'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { writeFile } from 'fs/promises';
import { join } from 'path';

async function uploadFile(file: File): Promise<string> {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Unique filename
    const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '')}`;
    const path = join(process.cwd(), 'public', 'uploads', filename);

    await writeFile(path, buffer);
    return `/uploads/${filename}`;
}

export async function createProject(formData: FormData) {
    const title = formData.get('title') as string;
    const category = formData.get('category') as string;
    const description = formData.get('description') as string;
    const coverFile = formData.get('coverImage') as File;

    // Basic Slug Generation
    const slug = title
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');

    let coverImageUrl = '';
    if (coverFile && coverFile.size > 0) {
        coverImageUrl = await uploadFile(coverFile);
    }

    // Create Project
    const project = await prisma.project.create({
        data: {
            title,
            slug,
            category,
            description,
            coverImage: coverImageUrl,
        },
    });

    // Handle Gallery Images
    const galleryFiles = formData.getAll('galleryImages') as File[];

    for (const file of galleryFiles) {
        if (file.size > 0) {
            const url = await uploadFile(file);
            await prisma.image.create({
                data: {
                    url,
                    type: 'gallery',
                    projectId: project.id,
                },
            });
        }
    }

    revalidatePath('/portfolio');
    revalidatePath('/admin');
    redirect('/admin');
}
