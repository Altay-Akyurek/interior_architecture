import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LogoutButton from "./LogoutButton";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/login");
    }

    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            <aside style={{ width: '250px', background: '#1a1a1a', color: '#fff', padding: '2rem' }}>
                <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem', fontWeight: 'bold' }}>PUAR Admin</h2>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Link href="/admin" style={{ color: '#ddd', textDecoration: 'none', padding: '0.5rem', borderRadius: '4px', transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.background = '#333'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>Projeler</Link>
                    <Link href="/admin/projects/new" style={{ color: '#ddd', textDecoration: 'none', padding: '0.5rem', borderRadius: '4px', transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.background = '#333'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>Yeni Proje Ekle</Link>
                    <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #444' }}>
                        <Link href="/" target="_blank" style={{ color: '#888', textDecoration: 'none', padding: '0.5rem', display: 'block', borderRadius: '4px', transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.background = '#333'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>Siteyi Görüntüle</Link>
                        <LogoutButton />
                    </div>
                </nav>
            </aside>
            <main style={{ flex: 1, padding: '2rem', background: '#f4f4f4' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', background: '#fff', padding: '1rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                    <span style={{ fontWeight: 500 }}>Hoşgeldin, {session.user?.name}</span>
                </div>
                {children}
            </main>
        </div>
    );
}
