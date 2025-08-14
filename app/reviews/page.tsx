import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Reviews | Pip’s Christmas Lights',
  description: 'Read reviews from satisfied clients of Pip’s Christmas Lights and see why we are Northwest Arkansas’s trusted holiday lighting company.',
}

const reviews = [
  {
    name: 'Michael B.',
    title: 'Homeowner – Bella Vista',
    content:
      'The quality of lights and professionalism exceeded our expectations. Our house was the talk of the neighbourhood!',
  },
  {
    name: 'Jennifer L.',
    title: 'Restaurant Owner – Fort Smith',
    content:
      'Pip’s made our patio look magical. We saw a noticeable increase in foot traffic thanks to their beautiful lighting.',
  },
  {
    name: 'Carlos G.',
    title: 'Property Manager – Fayetteville',
    content:
      'Working with Pip’s was seamless from start to finish. They took care of everything and our tenants were thrilled with the results.',
  },
  {
    name: 'Amanda P.',
    title: 'Event Planner – Rogers',
    content:
      'Their custom lighting solutions elevated our holiday event. I appreciated their attention to detail and flexibility.',
  },
]

export default function ReviewsPage() {
  return (
    <div>
      <header className="py-16 bg-forest text-offwhite text-center">
        <div className="container">
          <h1 className="font-serif text-4xl font-semibold">Reviews & Testimonials</h1>
          <p className="mt-4 text-md max-w-2xl mx-auto text-offwhite/90">
            Hear from our delighted customers and learn how Pip’s Christmas Lights has brightened homes and businesses across Northwest Arkansas.
          </p>
        </div>
      </header>
      <section className="py-16 bg-offwhite">
        <div className="container grid gap-8 md:grid-cols-2">
          {reviews.map(({ name, title, content }, idx) => (
            <div key={idx} className="p-6 bg-white border border-forest/10 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <p className="text-sm text-forest/80 italic leading-relaxed">“{content}”</p>
              <div className="mt-4">
                <p className="font-serif font-semibold text-forest">{name}</p>
                <p className="text-xs text-forest/60 mt-1">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTASection />
    </div>
  )
}