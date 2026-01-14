import HeroSub from '@/components/SharedComponent/HeroSub';
import AboutHero from '@/components/About/AboutHero';
import Expertise from '@/components/About/Expertise';
import Process from '@/components/About/Process';
import Counter from '@/components/Home/Counter';

export const metadata = {
    title: 'Hakkımızda | PUAR İç Mimarlık',
    description: 'PUAR İç Mimarlık hakkında bilgi, uzmanlık alanları ve çalışma yaklaşımı.',
};

export default function AboutPage() {
    return (
        <main>
            <HeroSub 
                title="Hakkımızda" 
                description="İç mekanlara ruh kazandıran tasarımlar yapıyoruz. Fonksiyonellik ve estetiği bir araya getirerek, yaşam alanlarınızı dönüştürüyoruz."
            />
            <AboutHero />
            <Expertise />
            <Process />
            <Counter />
        </main>
    );
}
