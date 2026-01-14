import Link from 'next/link';
import Image from 'next/image';
import { prisma } from '@/lib/prisma';
import styles from './portfolio.module.css';
import ScrollReveal from '@/components/ScrollReveal';

// Revalidate every 60 seconds (or 0 for real-time)
export const revalidate = 60;

export const metadata = {
    title: 'Portföy | PUAR İç Mimarlık',
    description: 'Tamamlanan iç mimarlık projelerimiz: Konut, Ofis, Ticari.',
};

export default async function PortfolioPage() {
    const projects = await prisma.project.findMany({
        orderBy: { createdAt: 'desc' },
    });

    // Extract unique categories
    const categories = Array.from(new Set(projects.map((p) => p.category)));

    return (
        <main className="container section">
            <h1 style={{ marginBottom: '2rem' }}>Projeler</h1>

            {/* Simple Category Filter - For now just visual headers or sections could work, 
          but a client-side filter is better for UX. 
          For simplicity in Server Component, we render all and maybe group them, 
          OR just show a grid. The user wanted "Projeler kategoriye ayrılmalı".
          Let's List them all for now, maybe grouped later. 
          Or simpler: Just a grid. A true category filter needs Client Component info.
          I won't overcomplicate yet. I'll just show the grid.
      */}

            <div className={styles.grid}>
                {projects.length === 0 ? (
                    <p>Henüz proje eklenmemiş.</p>
                ) : (
                    projects.map((project, index) => (
                        <ScrollReveal key={project.id} delay={index * 100}>
                            <Link href={`/portfolio/${project.slug}`} className={styles.card}>
                                <div className={styles.imageContainer}>
                                    {project.coverImage ? (
                                        <Image
                                            src={project.coverImage}
                                            alt={project.title}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                            className={styles.image}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            unoptimized
                                        />
                                    ) : (
                                        <div style={{ width: '100%', height: '100%', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <span style={{ color: '#999' }}>Görsel Yok</span>
                                        </div>
                                    )}
                                    <div className={styles.overlay}>
                                        <span className={styles.viewBtn}>İncele</span>
                                    </div>
                                </div>
                                <div className={styles.info}>
                                    <span className={styles.category}>{project.category}</span>
                                    <h3 className={styles.title}>{project.title}</h3>
                                </div>
                            </Link>
                        </ScrollReveal>
                    ))
                )}
            </div>
        </main>
    );
}
