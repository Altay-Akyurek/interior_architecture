import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/admin/login");
    }

    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            <aside style={{ width: '250px', background: '#1a1a1a', color: '#fff', padding: '2rem' }}>
                <h2 style={{ marginBottom: '2rem' }}>PUAR Admin</h2>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Link href="/admin" style={{ color: '#ddd' }}>Projeler</Link>
                    <Link href="/admin/projects/new" style={{ color: '#ddd' }}>Yeni Proje Ekle</Link>
                    <Link href="/" target="_blank" style={{ color: '#888', marginTop: '2rem' }}>Siteyi Görüntüle</Link>
                </nav>
            </aside>
            <main style={{ flex: 1, padding: '2rem', background: '#f4f4f4' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
                    <span>Hoşgeldin, {session.user?.name}</span>
                </div>
                {children}
            </main>
        </div>
    );
}
