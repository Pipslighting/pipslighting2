interface Testimonial {
  name: string
  content: string
  title?: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah M.',
    title: 'Bentonville Homeowner',
    content:
      'Pip’s transformed our home into a winter wonderland! The team was professional, quick and the results were stunning. We will never hang lights ourselves again.',
  },
  {
    name: 'Daniel T.',
    title: 'Shop Owner – Fayetteville',
    content:
      'Our storefront has never looked better. We received so many compliments from customers. Pip’s handled everything from start to finish.',
  },
  {
    name: 'Kimberly R.',
    title: 'HOA President – Rogers',
    content:
      'We hired Pip’s to light our neighborhood entrance. They exceeded expectations and even helped us coordinate power usage. Highly recommend!',
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-offwhite">
      <div className="container">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-10">What Our Clients Say</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map(({ name, title, content }, idx) => (
            <div key={idx} className="p-6 bg-white border border-forest/10 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <p className="text-sm text-forest/80 italic leading-relaxed">“{content}”</p>
              <div className="mt-4">
                <p className="font-serif font-semibold text-forest">{name}</p>
                {title && <p className="text-xs text-forest/60 mt-1">{title}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}