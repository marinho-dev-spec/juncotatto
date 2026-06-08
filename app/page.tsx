import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import FloatingCTA from '@/components/common/FloatingCTA';
import MobileBottomBar from '@/components/common/MobileBottomBar';
import BackToTop from '@/components/common/BackToTop';
import ProgressiveBlur from '@/components/ProgressiveBlur';
import ScrollReveal from '@/components/ScrollReveal';

import Hero from '@/components/home/Hero';
import ProofBar from '@/components/home/ProofBar';
import Gallery from '@/components/home/Gallery';
import TattooCube from '@/components/home/TattooCube';
import Reviews from '@/components/home/Reviews';
import Safety from '@/components/home/Safety';
import About from '@/components/home/About';
import Team from '@/components/home/Team';
import BeforeAfter from '@/components/home/BeforeAfter';
import Steps from '@/components/home/Steps';
import FAQ from '@/components/home/FAQ';
import CtaUrgency from '@/components/home/CtaUrgency';
import Contact from '@/components/home/Contact';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProofBar />

        <ScrollReveal direction="up">
          <Gallery />
        </ScrollReveal>

        <ScrollReveal direction="up">
          <TattooCube />
        </ScrollReveal>

        <ScrollReveal direction="up">
          <Reviews />
        </ScrollReveal>

        <ScrollReveal direction="up">
          <Safety />
        </ScrollReveal>

        <ScrollReveal direction="up">
          <About />
        </ScrollReveal>

        <ScrollReveal direction="up">
          <Team />
        </ScrollReveal>

        <ScrollReveal direction="up">
          <BeforeAfter />
        </ScrollReveal>

        <ScrollReveal direction="up">
          <Steps />
        </ScrollReveal>

        <ScrollReveal direction="up">
          <FAQ />
        </ScrollReveal>

        <ScrollReveal direction="up">
          <CtaUrgency />
        </ScrollReveal>

        <ScrollReveal direction="up">
          <Contact />
        </ScrollReveal>
      </main>
      <Footer />

      <MobileBottomBar context="geral" label="Agendar Consulta" />
      <FloatingCTA context="geral" label="Agendar" />
      <BackToTop />
      <ProgressiveBlur height={160} zIndex={40} />
    </>
  );
}
