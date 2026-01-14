import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';
import DeleteProjectButton from './DeleteProjectButton';
import EditProjectForm from './EditProjectForm';

export default async function EditProjectPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const project = await prisma.project.findUnique({
        where: { id },
        include: {
            images: true,
        },
    });

    if (!project) {
        redirect('/admin');
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1>Projeyi Düzenle</h1>
                <DeleteProjectButton projectId={project.id} />
            </div>

            <EditProjectForm project={project} />
        </div>
    );
}

