import { HomeIcon, BuildingStorefrontIcon, WrenchScrewdriverIcon, CubeTransparentIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const services = [
  {
    title: 'Residential Lighting',
    description: 'Create holiday magic at your home with custom‑cut roofline, tree and landscape lighting.',
    icon: HomeIcon,
  },
  {
    title: 'Commercial Lighting',
    description: 'Make your business stand out with tasteful, professional lighting installations.',
    icon: BuildingStorefrontIcon,
  },
  {
    title: 'Takedown & Storage',
    description: 'After the season we carefully remove, label and store your lights for next year.',
    icon: CubeTransparentIcon,
  },
  {
    title: 'Custom Solutions',
    description: 'We design and cut lights to fit any architectural style or creative vision.',
    icon: WrenchScrewdriverIcon,
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 bg-offwhite">
      <div className="container">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-10">Our Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {services.map(({ title, description, icon: Icon }) => (
            <div key={title} className="flex flex-col items-start p-6 rounded-lg border border-forest/10 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forest">
                <Icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-semibold mt-4 text-forest">{title}</h3>
              <p className="text-sm text-forest/80 mt-2 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center rounded-full bg-gold px-6 py-3 text-sm font-medium text-offwhite shadow hover:bg-forest hover:text-offwhite transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}