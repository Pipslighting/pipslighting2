import Image from 'next/image'
import Link from 'next/link'

/**
 * The hero section introduces the brand with a striking background image,
 * a large heading and a brief subheading. A call‑to‑action button
 * encourages visitors to request an estimate.
 */
export default function HeroSection() {
  return (
    <section className="relative h-[70vh] min-h-[500px] w-full flex items-center justify-center bg-forest">
      <Image
        src="/images/hero.webp"
        alt="Warm holiday lights on a home"
        fill
        priority
        className="object-cover object-center opacity-80"
      />
      <div className="absolute inset-0 bg-forest/40" aria-hidden="true" />
      <div className="relative z-10 text-center px-4">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-offwhite drop-shadow-md">
          Illuminate Your Holidays
        </h1>
        <p className="mt-4 text-lg md:text-xl text-offwhite/90 max-w-2xl mx-auto">
          Custom‑cut holiday lights designed, installed and maintained by professionals in Northwest Arkansas.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-gold px-8 py-4 text-base font-medium text-offwhite shadow hover:bg-offwhite hover:text-forest transition-colors"
          >
            Get Your Free Estimate
          </Link>
        </div>
      </div>
    </section>
  )
}