'use client';

import { createProject } from '../../actions';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewProjectPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const formData = new FormData(e.currentTarget);
            const result = await createProject(formData);
            
            if (result?.success) {
                router.push('/admin');
                router.refresh();
            } else {
                setError(result?.error || 'Proje oluşturulurken bir hata oluştu. Lütfen tekrar deneyin.');
                setLoading(false);
            }
        } catch (err: any) {
            console.error('Error creating project:', err);
            setError(err?.message || 'Proje oluşturulurken bir hata oluştu. Lütfen tekrar deneyin.');
            setLoading(false);
        }
    };

    return (
        <div>
            <h1 style={{ marginBottom: '2rem' }}>Yeni Proje Ekle</h1>

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
                    <input type="text" name="title" required style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Kategori</label>
                    <select name="category" required style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}>
                        <option value="Konut">Konut</option>
                        <option value="Ofis">Ofis</option>
                        <option value="Ticari">Ticari</option>
                        <option value="Kafe / Restoran">Kafe / Restoran</option>
                    </select>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Açıklama</label>
                    <textarea name="description" rows={5} required style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}></textarea>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Kapak Görseli</label>
                    <input type="file" name="coverImage" accept="image/*" required style={{ width: '100%' }} />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Galeri Görselleri (Çoklu Seçim)</label>
                    <input type="file" name="galleryImages" accept="image/*" multiple style={{ width: '100%' }} />
                </div>

                <button 
                    type="submit" 
                    disabled={loading}
                    style={{ 
                        padding: '12px 24px', 
                        background: loading ? '#666' : '#000', 
                        color: '#fff', 
                        border: 'none', 
                        borderRadius: '4px', 
                        cursor: loading ? 'not-allowed' : 'pointer', 
                        fontWeight: 600 
                    }}
                >
                    {loading ? 'Kaydediliyor...' : 'Projeyi Kaydet'}
                </button>

            </form>
        </div>
    );
}
