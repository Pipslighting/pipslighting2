import ServicesSection from '@/components/ServicesSection'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Services | Pip’s Christmas Lights',
  description: 'Learn about our residential and commercial holiday lighting services, takedown and storage and custom solutions in Northwest Arkansas.',
}

export default function ServicesPage() {
  return (
    <div className="">
      <header className="py-16 bg-forest text-offwhite text-center">
        <div className="container">
          <h1 className="font-serif text-4xl font-semibold">Our Services</h1>
          <p className="mt-4 text-md max-w-2xl mx-auto text-offwhite/90">
            From cosy cottages to bustling storefronts, we create bespoke lighting displays that capture the magic of the holidays. Discover what we can do for you.
          </p>
        </div>
      </header>
      <ServicesSection />
      <section className="py-16 bg-white">
        <div className="container space-y-8">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-forest mb-4">Residential Lighting</h2>
            <p className="text-forest/80 leading-relaxed">
              We specialise in transforming homes into elegant holiday showpieces. Our custom‑cut lights accentuate rooflines, windows, trees and landscaping, all while being energy‑efficient and safe. After installation you get to sit back and enjoy the glow while we handle maintenance throughout the season.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-semibold text-forest mb-4">Commercial Lighting</h2>
            <p className="text-forest/80 leading-relaxed">
              Make your business stand out with tasteful, professional lighting. We help storefronts, restaurants and office buildings attract attention and spread cheer. Our installations are code‑compliant and designed to operate seamlessly with your schedule.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-semibold text-forest mb-4">Takedown & Storage</h2>
            <p className="text-forest/80 leading-relaxed">
              When the season ends we carefully remove your lights, label them by location and store them in our climate‑controlled facility. Next year your lights will be ready to reinstall without fuss.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-semibold text-forest mb-4">Custom Solutions</h2>
            <p className="text-forest/80 leading-relaxed">
              Have a unique vision? We welcome challenges! Whether you need lighting for a special event, a grand estate or an unconventional structure, our team will design and execute a solution that fits your needs and wows your guests.
            </p>
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  )
}