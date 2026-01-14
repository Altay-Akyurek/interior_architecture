'use client';

import { updateProject } from '../../actions';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import DeleteImageButton from './DeleteImageButton';

export default function EditProjectForm({ project }: { project: any }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const formData = new FormData(e.currentTarget);
            const result = await updateProject(project.id, formData);

            if (result?.success) {
                router.push('/admin');
                router.refresh();
            } else {
                setError(result?.error || 'Proje güncellenirken bir hata oluştu.');
                setLoading(false);
            }
        } catch (err: any) {
            console.error('Error updating project:', err);
            setError(err?.message || 'Proje güncellenirken bir hata oluştu.');
            setLoading(false);
        }
    };

    return (
        <>
            {error && (
                <div style={{
                    background: '#fee',
                    border: '1px solid #fcc',
                    color: '#c33',
                    padding: '1rem',
                    borderRadius: '4px',
                    marginBottom: '1rem'
                }}>
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} style={{ background: '#fff', padding: '2rem', borderRadius: '8px', maxWidth: '800px' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Proje Başlığı</label>
                    <input
                        type="text"
                        name="title"
                        defaultValue={project.title}
                        required
                        style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
                    />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Kategori</label>
                    <select name="category" defaultValue={project.category} required style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}>
                        <option value="Konut">Konut</option>
                        <option value="Ofis">Ofis</option>
                        <option value="Ticari">Ticari</option>
                        <option value="Kafe / Restoran">Kafe / Restoran</option>
                    </select>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Açıklama</label>
                    <textarea
                        name="description"
                        rows={5}
                        defaultValue={project.description}
                        required
                        style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
                    ></textarea>
                </div>

                {project.coverImage && (
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Mevcut Kapak Görseli</label>
                        <Image
                            src={project.coverImage}
                            alt={project.title}
                            width={300}
                            height={200}
                            style={{ objectFit: 'cover', borderRadius: '8px' }}
                            unoptimized
                        />
                    </div>
                )}

                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Yeni Kapak Görseli (Değiştirmek için)</label>
                    <input type="file" name="coverImage" accept="image/*" style={{ width: '100%' }} />
                </div>

                {project.images.length > 0 && (
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Mevcut Galeri Görselleri</label>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem' }}>
                            {project.images.map((image: any) => (
                                <div key={image.id} style={{ position: 'relative' }}>
                                    <Image
                                        src={image.url}
                                        alt={image.caption || 'Gallery image'}
                                        width={150}
                                        height={150}
                                        style={{ objectFit: 'cover', borderRadius: '8px', width: '100%', height: '150px' }}
                                        unoptimized
                                    />
                                    <DeleteImageButton imageId={image.id} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Yeni Galeri Görselleri Ekle (Çoklu Seçim)</label>
                    <input type="file" name="galleryImages" accept="image/*" multiple style={{ width: '100%' }} />
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            padding: '12px 24px',
                            background: loading ? '#666' : '#1358D8',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: loading ? 'not-allowed' : 'pointer',
                            fontWeight: 600
                        }}
                    >
                        {loading ? 'Kaydediliyor...' : 'Değişiklikleri Kaydet'}
                    </button>
                    <a
                        href="/admin"
                        style={{ padding: '12px 24px', background: '#6c757d', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}
                    >
                        İptal
                    </a>
                </div>
            </form>
        </>
    );
}

