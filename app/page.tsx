import Hero from '@/components/Home/Hero';
import BuildAmazing from '@/components/Home/Build-Amazing'
import WorkGrow from '@/components/Home/work-grow';
import Counter from '@/components/Home/Counter';
import FaqQuestion from '@/components/Home/faq';

export default function Home() {
  return (
    <main>
      <Hero />
      <BuildAmazing isSpace={true} />
      <WorkGrow />
      <Counter />
      <FaqQuestion />
    </main>
  )
}
