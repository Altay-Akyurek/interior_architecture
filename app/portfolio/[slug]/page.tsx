import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import styles from './project.module.css';

export const revalidate = 60;

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const project = await prisma.project.findUnique({
        where: { slug },
    });
    if (!project) return { title: 'Proje Bulunamadı' };
    return {
        title: `${project.title} | PUAR İç Mimarlık`,
        description: project.description.substring(0, 160),
    };
}

export default async function ProjectDetailPage({ params }: Props) {
    const { slug } = await params;
    const project = await prisma.project.findUnique({
        where: { slug },
        include: { images: true },
    });

    if (!project) notFound();

    const galleryImages = project.images.filter((img: { type: string }) => img.type === 'gallery');

    return (
        <main className="container section">
            <Link href="/portfolio" className={styles.backLink}>← Portföye Dön</Link>

            <header className={styles.header}>
                <span className={styles.category}>{project.category}</span>
                <h1 className={styles.title}>{project.title}</h1>
            </header>

            <div className={styles.heroImage}>
                {project.coverImage ? (
                    <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                        unoptimized
                    />
                ) : (
                    <div style={{ width: '100%', height: '100%', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span>Görsel Yok</span>
                    </div>
                )}
            </div>

            <div className={styles.content}>
                <div className={styles.description}>
                    <h3>Proje Hakkında</h3>
                    <p>{project.description}</p>
                </div>

                <div className={styles.details}>
                    <div className={styles.detailItem}>
                        <span className={styles.label}>Tarih</span>
                        <span>{new Date(project.createdAt).getFullYear()}</span>
                    </div>
                    {/* Add more static or dynamic fields if schema expands */}
                </div>
            </div>

            {galleryImages.length > 0 && (
                <section className={styles.gallery}>
                    <h3>Galeri</h3>
                    <div className={styles.galleryGrid}>
                        {galleryImages.map((img: { id: string; url: string; caption: string | null }) => (
                            <div key={img.id} className={styles.galleryItem}>
                                <Image
                                    src={img.url}
                                    alt={img.caption || project.title}
                                    width={800}
                                    height={600}
                                    style={{ width: '100%', height: 'auto', borderRadius: '2px' }}
                                />
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </main>
    );
}
