import dynamic from 'next/dynamic'
import HeroSection from '@/components/HeroSection'
import ValueProps from '@/components/ValueProps'
import ProcessSection from '@/components/ProcessSection'
import ServicesSection from '@/components/ServicesSection'
import GalleryPreview from '@/components/GalleryPreview'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'

/**
 * The homepage composes several modular sections to tell the brand story
 * and guide visitors toward requesting a free estimate. All copy is
 * original and on brand for Pip’s Christmas Lights.
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValueProps />
      <ProcessSection />
      <ServicesSection />
      <GalleryPreview />
      <Testimonials />
      <CTASection />
    </>
  )
}