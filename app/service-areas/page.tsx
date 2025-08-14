import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Service Areas | Pip’s Christmas Lights',
  description: 'Pip’s Christmas Lights proudly serves Northwest Arkansas, including Fort Smith, Fayetteville, Springdale, Rogers, Bentonville, Pea Ridge and the surrounding communities.',
}

const cities = [
  'Fort Smith',
  'Van Buren',
  'Alma',
  'Fayetteville',
  'Springdale',
  'Rogers',
  'Bentonville',
  'Pea Ridge',
  'Bella Vista',
  'Lowell',
  'Cave Springs',
  'Centerton',
  'Siloam Springs',
]

export default function ServiceAreasPage() {
  return (
    <div>
      <header className="py-16 bg-forest text-offwhite text-center">
        <div className="container">
          <h1 className="font-serif text-4xl font-semibold">Service Areas</h1>
          <p className="mt-4 text-md max-w-2xl mx-auto text-offwhite/90">
            We bring holiday cheer to homes and businesses throughout Northwest Arkansas. If you don’t see your community listed, reach out and we’ll do our best to accommodate you.
          </p>
        </div>
      </header>
      <section className="py-16 bg-offwhite">
        <div className="container">
          <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {cities.map((city) => (
              <li
                key={city}
                className="p-4 border border-forest/10 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow text-center font-serif text-lg text-forest"
              >
                {city}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CTASection />
    </div>
  )
}