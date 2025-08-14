interface StepCardProps {
  number: number
  title: string
  description: string
}

/**
 * A simple card component for displaying a step in the installation process.
 */
export default function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white border border-forest/10 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="h-12 w-12 flex items-center justify-center rounded-full bg-gold text-offwhite font-semibold text-lg">
        {number}
      </div>
      <h3 className="font-serif text-xl mt-4 text-forest">{title}</h3>
      <p className="text-sm text-forest/80 mt-2 leading-relaxed">{description}</p>
    </div>
  )
}