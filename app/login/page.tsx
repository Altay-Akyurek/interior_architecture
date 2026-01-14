'use client';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        
        try {
            const result = await signIn('credentials', {
                redirect: false,
                username,
                password,
            });

            if (result?.error) {
                setError('Giriş başarısız. Kullanıcı adı veya şifre hatalı.');
            } else if (result?.ok) {
                router.push('/admin');
                router.refresh();
            }
        } catch (err) {
            setError('Bir hata oluştu. Lütfen tekrar deneyin.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-AliceBlue dark:bg-darkmode py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                {/* Logo ve Başlık */}
                <div className="text-center">
                    <Link href="/" className="inline-block mb-6">
                        <Image
                            src="/assets/logo-text.png"
                            alt="PUAR İç Mimarlık"
                            width={200}
                            height={80}
                            className="mx-auto h-16 w-auto"
                            unoptimized
                        />
                    </Link>
                    <h2 className="text-3xl font-bold text-secondary dark:text-darktext">
                        Yönetici Paneli
                    </h2>
                    <p className="mt-2 text-sm text-SlateBlue dark:text-darktext">
                        Lütfen giriş bilgilerinizi girin
                    </p>
                </div>

                {/* Form */}
                <form className="mt-8 space-y-6 bg-white dark:bg-darklight p-8 rounded-xl shadow-lg" onSubmit={handleSubmit}>
                    {error && (
                        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg text-sm">
                            {error}
                        </div>
                    )}

                    <div className="space-y-4">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-secondary dark:text-darktext mb-2">
                                Kullanıcı Adı
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="appearance-none relative block w-full px-4 py-3 border border-border dark:border-dark_border rounded-lg placeholder-gray-400 text-secondary dark:text-darktext bg-white dark:bg-darkmode focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                placeholder="Kullanıcı adınızı girin"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-secondary dark:text-darktext mb-2">
                                Şifre
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="appearance-none relative block w-full px-4 py-3 border border-border dark:border-dark_border rounded-lg placeholder-gray-400 text-secondary dark:text-darktext bg-white dark:bg-darkmode focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                placeholder="Şifrenizi girin"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-darkprimary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <span className="flex items-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Giriş yapılıyor...
                                </span>
                            ) : (
                                'Giriş Yap'
                            )}
                        </button>
                    </div>

                    <div className="text-center">
                        <Link href="/" className="text-sm text-primary hover:text-darkprimary dark:text-LightApricot dark:hover:text-accent transition-colors">
                            ← Ana sayfaya dön
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

