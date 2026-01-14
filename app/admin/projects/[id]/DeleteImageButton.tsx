'use client';

import { deleteImage } from '../../actions';
import { useRouter } from 'next/navigation';

export default function DeleteImageButton({ imageId }: { imageId: string }) {
    const router = useRouter();
    
    const handleDelete = async () => {
        if (confirm('Bu görseli silmek istediğinizden emin misiniz?')) {
            const result = await deleteImage(imageId);
            if (result?.success) {
                router.refresh();
            } else {
                alert(result?.error || 'Görsel silinirken bir hata oluştu.');
            }
        }
    };

    return (
        <button
            onClick={handleDelete}
            style={{
                position: 'absolute',
                top: '0.5rem',
                right: '0.5rem',
                padding: '0.25rem 0.5rem',
                background: '#dc3545',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: 600
            }}
        >
            ×
        </button>
    );
}

