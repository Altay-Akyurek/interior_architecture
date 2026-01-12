'use client';

import { createProject } from '../../actions';

export default function NewProjectPage() {
    return (
        <div>
            <h1 style={{ marginBottom: '2rem' }}>Yeni Proje Ekle</h1>

            <form action={createProject} style={{ background: '#fff', padding: '2rem', borderRadius: '8px', maxWidth: '800px' }}>

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

                <button type="submit" style={{ padding: '12px 24px', background: '#000', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 600 }}>
                    Projeyi Kaydet
                </button>

            </form>
        </div>
    );
}
