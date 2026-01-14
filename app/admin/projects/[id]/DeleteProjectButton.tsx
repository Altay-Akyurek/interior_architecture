'use client';

import { deleteProject } from '../../actions';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DeleteProjectButton({ projectId }: { projectId: string }) {
    const router = useRouter();
    const [isConfirming, setIsConfirming] = useState(false);

    const handleDelete = async () => {
        if (isConfirming) {
            const result = await deleteProject(projectId);
            if (result?.success) {
                router.push('/admin');
                router.refresh();
            } else {
                alert(result?.error || 'Proje silinirken bir hata oluştu.');
                setIsConfirming(false);
            }
        } else {
            setIsConfirming(true);
            setTimeout(() => setIsConfirming(false), 3000);
        }
    };

    return (
        <button
            onClick={handleDelete}
            style={{
                padding: '10px 20px',
                background: isConfirming ? '#dc3545' : '#6c757d',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 600
            }}
        >
            {isConfirming ? 'Silmek için tekrar tıklayın' : 'Projeyi Sil'}
        </button>
    );
}

