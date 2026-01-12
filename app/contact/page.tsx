import Image from 'next/image';

export const metadata = {
    title: 'İletişim | PUAR İç Mimarlık',
    description: 'Teklif alın veya ücretsiz ön görüşme için iletişime geçin.',
};

export default function ContactPage() {
    return (
        <main className="container section">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>

                {/* Contact Info */}
                <div>
                    <h1 style={{ marginBottom: '2rem' }}>İletişime Geçin</h1>
                    <p style={{ fontSize: '1.2rem', marginBottom: '3rem', color: 'var(--foreground-muted)' }}>
                        Projeniz için ücretsiz ön görüşme yapalım. Hayalinizdeki mekanı birlikte tasarlayalım.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div>
                            <h3 style={{ marginBottom: '0.5rem' }}>Telefon / WhatsApp</h3>
                            <p style={{ fontSize: '1.1rem' }}>+90 555 000 00 00</p>
                        </div>
                        <div>
                            <h3 style={{ marginBottom: '0.5rem' }}>E-posta</h3>
                            <p style={{ fontSize: '1.1rem' }}>info@puaricmimarlik.com</p>
                        </div>
                        <div>
                            <h3 style={{ marginBottom: '0.5rem' }}>Sosyal Medya</h3>
                            <a href="#" style={{ textDecoration: 'underline' }}>Instagram: @puaricmimarlik</a>
                        </div>
                        <div>
                            <h3 style={{ marginBottom: '0.5rem' }}>Ofis</h3>
                            <p style={{ color: 'var(--foreground-muted)' }}>
                                İstanbul, Türkiye<br />(Konum bilgisi eklenecek)
                            </p>
                            {/* Maps Placeholder */}
                            <div style={{ width: '100%', height: '200px', background: '#EEE', marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                Google Maps Placeholder
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div style={{ background: 'var(--background-alt)', padding: '3rem', borderRadius: '4px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <Image
                            src="/assets/logo-text.png"
                            alt="PUAR"
                            width={200}
                            height={60}
                            style={{ objectFit: 'contain' }}
                            quality={100}
                        />
                        <h3 style={{ margin: 0 }}>Teklif Formu</h3>
                    </div>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label htmlFor="name" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Ad Soyad</label>
                            <input type="text" id="name" style={{ padding: '12px', borderRadius: '4px', border: '1px solid var(--border)' }} placeholder="Adınız" />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label htmlFor="phone" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Telefon</label>
                            <input type="tel" id="phone" style={{ padding: '12px', borderRadius: '4px', border: '1px solid var(--border)' }} placeholder="0555..." />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label htmlFor="type" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Proje Tipi</label>
                            <select id="type" style={{ padding: '12px', borderRadius: '4px', border: '1px solid var(--border)' }}>
                                <option>Konut</option>
                                <option>Ofis</option>
                                <option>Ticari / Mağaza</option>
                                <option>Kafe / Restoran</option>
                                <option>Diğer</option>
                            </select>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label htmlFor="message" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Mesajınız</label>
                            <textarea id="message" rows={5} style={{ padding: '12px', borderRadius: '4px', border: '1px solid var(--border)', resize: 'vertical' }} placeholder="Projenizden bahsedin..."></textarea>
                        </div>

                        <button type="button" style={{
                            padding: '16px',
                            background: 'var(--foreground)',
                            color: 'var(--background)',
                            border: 'none',
                            fontWeight: 600,
                            cursor: 'pointer',
                            marginTop: '1rem'
                        }}>
                            GÖNDER
                        </button>
                    </form>
                </div>

            </div>
        </main>
    );
}
