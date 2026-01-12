import Image from 'next/image';

export const metadata = {
    title: 'Hakkımda | PUAR İç Mimarlık',
    description: 'PUAR İç Mimarlık hakkında bilgi, biyografi ve çalışma yaklaşımı.',
};

export default function AboutPage() {
    return (
        <main className="container section">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <Image
                        src="/assets/logo-icon.jpg"
                        alt="PUAR Icon"
                        width={60}
                        height={60}
                        style={{ objectFit: 'contain', borderRadius: '50%' }}
                    />
                    <h1>Hakkımda</h1>
                </div>

                <section style={{ marginBottom: '4rem' }}>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'var(--foreground-muted)' }}>
                        Merhaba, ben [Adınız]. İç mimarlığı sadece bir meslek olarak değil, yaşam alanlarına ruh kazandıran bir sanat olarak görüyorum.
                        Her projemde fonksiyonelliği estetikle harmanlayarak, kullanıcıların içinde huzurlu ve mutlu hissedeceği mekanlar tasarlıyorum.
                    </p>
                    <p style={{ fontSize: '1.1rem', color: 'var(--foreground-muted)' }}>
                        [Üniversite Adı] İç Mimarlık bölümünden mezun olduktan sonra, konut ve ticari projelerde deneyim kazandım ve kendi markam
                        olan PUAR İç Mimarlık ile yolculuğuma devam ediyorum.
                    </p>
                </section>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem' }}>
                    <section>
                        <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>Uzmanlık Alanları</h3>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li style={{ padding: '8px 0', borderBottom: '1px solid var(--border)' }}>Konut & Villa Tasarımı</li>
                            <li style={{ padding: '8px 0', borderBottom: '1px solid var(--border)' }}>Ofis & Çalışma Alanları</li>
                            <li style={{ padding: '8px 0', borderBottom: '1px solid var(--border)' }}>Kafe & Restoran (Horeca)</li>
                        </ul>
                    </section>

                    <section>
                        <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>Çalışma Yaklaşımı</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <h4 style={{ marginBottom: '0.5rem' }}>01. Dinleme & Analiz</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--foreground-muted)' }}>Sizi dinliyor, ihtiyaçlarınızı ve hayallerinizi analiz ediyorum.</p>
                            </div>
                            <div>
                                <h4 style={{ marginBottom: '0.5rem' }}>02. Fonksiyonel Estetik</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--foreground-muted)' }}>Sadece güzel değil, aynı zamanda kullanışlı çözümler üretiyorum.</p>
                            </div>
                            <div>
                                <h4 style={{ marginBottom: '0.5rem' }}>03. Detaycı Uygulama</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--foreground-muted)' }}>Malzeme seçiminden aydınlatmaya kadar her detayı planlıyorum.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
