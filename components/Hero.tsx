"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const hero = heroRef.current;
        if (!hero) return;

        const handleMouseMove = (e: MouseEvent) => {
            if (!bgRef.current || !gridRef.current) return;

            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            // Calculate mouse position as percentage (-1 to 1)
            const x = (clientX / innerWidth - 0.5) * 2;
            const y = (clientY / innerHeight - 0.5) * 2;

            // Parallax Logic: Layers move at different speeds
            // Background moves opposite to mouse (Depth)
            bgRef.current.style.transform = `scale(1.1) translate(${x * -15}px, ${y * -15}px)`;

            // Grid moves more (Middle ground sensation)
            gridRef.current.style.transform = `perspective(500px) rotateX(60deg) translateY(0) translateZ(-200px) translate(${x * -30}px, ${y * -30}px)`;
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className={styles.hero} ref={heroRef}>
            <div className={styles.background}>
                {/* Image Wrapper for smooth transform without affecting layout */}
                <div ref={bgRef} className={styles.imageWrapper}>
                    <Image
                        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2500&auto=format&fit=crop"
                        alt="Interior Architecture"
                        fill
                        className={styles.backgroundImage}
                        priority
                        quality={90}
                    />
                </div>

                {/* Grid Overlay */}
                <div ref={gridRef} className={styles.gridOverlay} />

                {/* Darkening Overlay */}
                <div className={styles.overlay} />
            </div>

            <div className={`container ${styles.content}`}>
                <h1 className={`${styles.slogan} animate-fade-in-up`}>
                    Fonksiyonel, estetik ve <br />
                    <span className={styles.highlight}>zamansız mekânlar.</span>
                </h1>
                <div className={`${styles.actions} animate-fade-in-up delay-200`}>
                    <Link href="/contact" className={styles.primaryBtn}>
                        Teklif Al
                    </Link>
                    <Link href="/portfolio" className={styles.secondaryBtn}>
                        Projeleri İncele
                    </Link>
                </div>
            </div>
        </section>
    );
}
