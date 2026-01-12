import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="container section">
        <h2 style={{ marginBottom: '2rem' }}>Öne Çıkan Projeler</h2>
        <p style={{ color: 'var(--foreground-muted)' }}>Proje galerisi yakında eklenecek...</p>
      </div>
    </main>
  );
}
