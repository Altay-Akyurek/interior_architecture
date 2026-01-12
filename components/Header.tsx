'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    <div style={{ position: 'relative', width: '240px', height: '80px' }}>
                        <Image
                            src="/assets/logo-text.png"
                            alt="PUAR Logo"
                            fill
                            style={{ objectFit: 'contain', objectPosition: 'left' }}
                            priority
                            quality={100}
                        />
                    </div>
                </Link>
                <nav className={styles.nav}>
                    {[
                        { name: 'Ana Sayfa', path: '/' },
                        { name: 'Hakkımda', path: '/about' },
                        { name: 'Portföy', path: '/portfolio' },
                        { name: 'İletişim', path: '/contact' },
                    ].map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            className={`${styles.link} ${isActive(link.path) ? styles.active : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/contact" className={styles.cta}>
                        Teklif Al
                    </Link>
                </nav>
            </div>
        </header>
    );
}
