'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

export default function ConditionalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isAdminLogin = pathname === '/login';

    if (isAdminLogin) {
        return <>{children}</>;
    }

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

