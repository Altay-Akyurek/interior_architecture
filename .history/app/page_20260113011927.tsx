import Hero from '@/components/Home/Hero';
import BuildAmazing from '@/components/Home/Build-Amazing'
import WorkGrow from '@/components/Home/work-grow';
import Preferred from '@/components/Home/preferred-plan';
import Counter from '@/components/Home/Counter';
import FaqQuestion from '@/components/Home/faq';

export default function Home() {
  return (
    <main>
      <Hero />
      <BuildAmazing isSpace={true} />
      <WorkGrow />
      <Preferred />
      <Counter />
      <FaqQuestion />
    </main>
  )
}
