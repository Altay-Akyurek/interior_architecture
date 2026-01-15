import Image from 'next/image';

export const metadata = {
    title: 'İletişim | PUAR İç Mimarlık',
    description: 'Teklif alın veya ücretsiz ön görüşme için iletişime geçin.',
};

export default function ContactPage() {
    return (
        <main className="container section">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">

                {/* Contact Info */}
                <div className="flex flex-col gap-8">
                    <div>
                        <h1 className="mb-8">İletişime Geçin</h1>
                        <p className="text-lg mb-12 text-[var(--foreground-muted)]">
                            Projeniz için ücretsiz ön görüşme yapalım. Hayalinizdeki mekanı birlikte tasarlayalım.
                        </p>

                        <div className="flex flex-col gap-8">
                            <div>
                                <h3 className="mb-2">Telefon / WhatsApp</h3>
                                <p className="text-lg">+90 555 000 00 00</p>
                            </div>
                            <div>
                                <h3 className="mb-2">E-posta</h3>
                                <p className="text-lg">info@puaricmimarlik.com</p>
                            </div>
                            <div>
                                <h3 className="mb-2">Sosyal Medya</h3>
                                <a href="#" className="underline">Instagram: @puaricmimarlik</a>
                            </div>
                            <div>
                                <h3 className="mb-2">Ofis</h3>
                                <p className="text-[var(--foreground-muted)]">
                                    İstinye mah. İstinye Cad. No: 66, Da:6<br />Sarıyer / İstanbul / Türkiye
                                </p>
                                {/* Maps Integration */}
                                <div className="w-full h-[300px] mt-4 rounded-lg overflow-hidden border border-[var(--border)]">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.914835425793!2d29.054672!3d41.11455099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab6269cae66cd%3A0x55fde11c29785e27!2zUHVhciDEsMOnIE1pbWFybMSxayB2ZSBUYXNhcsSxbSBUaWMuIEx0ZC4gxZ50aS4!5e0!3m2!1str!2str!4v1768422409753!5m2!1str!2str"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-[var(--background-alt)] p-6 md:p-12 rounded-sm h-fit">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="relative w-12 h-12 flex-shrink-0">
                            <Image
                                src="/assets/logo-icon.jpg"
                                alt="PUAR Logo"
                                fill
                                className="object-cover rounded-full"
                                quality={100}
                                unoptimized
                            />
                        </div>
                        <h3 className="m-0">Teklif Formu</h3>
                    </div>
                    <form className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-sm font-medium">Ad Soyad</label>
                            <input type="text" id="name" className="p-3 rounded-sm border border-[var(--border)] bg-transparent" placeholder="Adınız" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="phone" className="text-sm font-medium">Telefon</label>
                            <input type="tel" id="phone" className="p-3 rounded-sm border border-[var(--border)] bg-transparent" placeholder="0555..." />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="type" className="text-sm font-medium">Proje Tipi</label>
                            <select id="type" className="p-3 rounded-sm border border-[var(--border)] bg-transparent">
                                <option>Konut</option>
                                <option>Ofis</option>
                                <option>Ticari / Mağaza</option>
                                <option>Kafe / Restoran</option>
                                <option>Diğer</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-sm font-medium">Mesajınız</label>
                            <textarea id="message" rows={5} className="p-3 rounded-sm border border-[var(--border)] bg-transparent resize-vertical" placeholder="Projenizden bahsedin..."></textarea>
                        </div>

                        <button type="button" className="p-4 bg-[var(--foreground)] text-[var(--background)] border-none font-semibold cursor-pointer mt-4 hover:opacity-90 transition-opacity">
                            GÖNDER
                        </button>
                    </form>
                </div>

            </div>
        </main>
    );
}
