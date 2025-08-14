import { AcademicCapIcon, CheckCircleIcon, ClockIcon, SparklesIcon } from '@heroicons/react/24/outline'

interface PropItem {
  title: string
  description: string
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
}

const propsList: PropItem[] = [
  {
    title: 'Custom‑Cut Lights',
    description: 'Every strand is measured and cut to perfectly fit your home or business. No loose wires, no unsightly gaps.',
    icon: CheckCircleIcon,
  },
  {
    title: 'Premium LEDs',
    description: 'We use high‑quality, energy‑efficient LEDs that shine brighter and last longer than off‑the‑shelf kits.',
    icon: SparklesIcon,
  },
  {
    title: 'Hassle‑Free Service',
    description: 'From design to installation, takedown and storage, we handle everything so you can enjoy the season.',
    icon: ClockIcon,
  },
  {
    title: 'Licensed & Insured',
    description: 'Our team is fully insured and trained, giving you peace of mind while we work on your property.',
    icon: AcademicCapIcon,
  },
]

export default function ValueProps() {
  return (
    <section className="py-16 bg-offwhite">
      <div className="container">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-10">Why Choose Pip’s?</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {propsList.map(({ title, description, icon: Icon }) => (
            <div key={title} className="flex flex-col items-start p-6 rounded-lg border border-forest/10 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forest">
                <Icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-semibold mt-4 text-forest">{title}</h3>
              <p className="text-sm text-forest/80 mt-2 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}