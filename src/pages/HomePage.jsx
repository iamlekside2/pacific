import Hero from '../components/Hero'
import HowToKnow from '../components/HowToKnow'
import Services from '../components/Services'
import ParallaxSection from '../components/ParallaxSection'
import Situations from '../components/Situations'
import Trust from '../components/Trust'
import Process from '../components/Process'
import CTA from '../components/CTA'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import BlogPreview from '../components/BlogPreview'

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowToKnow />
      <Services />
      <ParallaxSection />
      <Situations />
      <Trust />
      <Process />
      <CTA />
      <About />
      <Testimonials />
      <FAQ />
      <BlogPreview />
    </>
  )
}
