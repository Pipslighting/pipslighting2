import StepCard from './StepCard'

const steps = [
  {
    number: 1,
    title: 'Consultation & Design',
    description: 'We meet with you to understand your vision and design a custom lighting plan that complements your property.',
  },
  {
    number: 2,
    title: 'Professional Installation',
    description: 'Our experienced team measures, cuts and installs each light strand for a flawless fit with minimal disruption.',
  },
  {
    number: 3,
    title: 'Season‑Long Support',
    description: 'We monitor your lights throughout the season and promptly handle any maintenance issues.',
  },
  {
    number: 4,
    title: 'Takedown & Storage',
    description: 'After the holidays we remove, label and safely store your lights until next year.',
  },
]

export default function ProcessSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-10">Our Process</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {steps.map((step) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}