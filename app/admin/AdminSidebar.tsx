'use client';

import Link from "next/link";
import LogoutButton from "./LogoutButton";

export default function AdminSidebar() {
    return (
        <aside className="w-[250px] bg-[#1a1a1a] text-white p-8">
            <h2 className="mb-8 text-2xl font-bold">PUAR Admin</h2>
            <nav className="flex flex-col gap-4">
                <Link 
                    href="/admin" 
                    className="text-[#ddd] no-underline py-2 px-4 rounded transition-colors hover:bg-[#333]"
                >
                    Projeler
                </Link>
                <Link 
                    href="/admin/projects/new" 
                    className="text-[#ddd] no-underline py-2 px-4 rounded transition-colors hover:bg-[#333]"
                >
                    Yeni Proje Ekle
                </Link>
                <div className="mt-8 pt-8 border-t border-[#444]">
                    <Link 
                        href="/" 
                        target="_blank" 
                        className="text-[#888] no-underline py-2 px-4 block rounded transition-colors hover:bg-[#333]"
                    >
                        Siteyi Görüntüle
                    </Link>
                    <LogoutButton />
                </div>
            </nav>
        </aside>
    );
}


