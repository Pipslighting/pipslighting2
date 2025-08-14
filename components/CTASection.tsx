import Link from 'next/link'

/**
 * A call‑to‑action section that invites visitors to request a free
 * estimate. It uses a contrasting background and large typography
 * to stand out on the page.
 */
export default function CTASection() {
  return (
    <section className="py-20 bg-forest text-offwhite text-center">
      <div className="container">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold">Ready to Shine This Holiday Season?</h2>
        <p className="mt-4 text-md md:text-lg max-w-xl mx-auto text-offwhite/90">
          Let Pip’s handle the lights so you can focus on what matters most. Reach out today for a custom quote.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-gold px-8 py-4 text-base font-medium text-offwhite shadow hover:bg-offwhite hover:text-forest transition-colors"
          >
            Get My Free Estimate
          </Link>
        </div>
      </div>
    </section>
  )
}