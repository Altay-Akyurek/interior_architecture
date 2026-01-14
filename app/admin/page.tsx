import Link from 'next/link';
import { prisma } from '@/lib/prisma';

export default async function AdminDashboard() {
    const projects = await prisma.project.findMany({
        orderBy: { createdAt: 'desc' },
    });

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1>Projeler</h1>
                <Link href="/admin/projects/new" style={{ padding: '10px 20px', background: '#333', color: '#fff', borderRadius: '4px' }}>
                    + Yeni Proje
                </Link>
            </div>

            <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ textAlign: 'left', borderBottom: '1px solid #eee' }}>
                            <th style={{ padding: '1rem' }}>Başlık</th>
                            <th style={{ padding: '1rem' }}>Kategori</th>
                            <th style={{ padding: '1rem' }}>Tarih</th>
                            <th style={{ padding: '1rem' }}>İşlemler</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project: { id: string; title: string; category: string; createdAt: Date }) => (
                            <tr key={project.id} style={{ borderBottom: '1px solid #f9f9f9' }}>
                                <td style={{ padding: '1rem' }}>{project.title}</td>
                                <td style={{ padding: '1rem' }}>{project.category}</td>
                                <td style={{ padding: '1rem' }}>{new Date(project.createdAt).toLocaleDateString('tr-TR')}</td>
                                <td style={{ padding: '1rem' }}>
                                    <Link href={`/admin/projects/${project.id}`} style={{ marginRight: '1rem', color: '#1358D8', textDecoration: 'none' }}>Düzenle</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
