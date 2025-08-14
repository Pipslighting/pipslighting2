import ProcessSection from '@/components/ProcessSection'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Process | Pip’s Christmas Lights',
  description: 'Learn about our four‑step process for designing, installing and maintaining holiday lighting. See how we make your season stress‑free.',
}

export default function ProcessPage() {
  return (
    <div>
      <header className="py-16 bg-forest text-offwhite text-center">
        <div className="container">
          <h1 className="font-serif text-4xl font-semibold">Our Process</h1>
          <p className="mt-4 text-md max-w-2xl mx-auto text-offwhite/90">
            Discover how we turn your lighting dreams into reality with a simple four‑step approach designed for convenience and quality.
          </p>
        </div>
      </header>
      <ProcessSection />
      <section className="py-16 bg-white">
        <div className="container space-y-8 text-forest/80">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-forest mb-2">Step 1: Consultation & Design</h2>
            <p>
              We start with a friendly consultation to discuss your ideas, preferences and budget. Our designers then craft a lighting plan that accentuates the best features of your property while staying true to your vision.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-semibold text-forest mb-2">Step 2: Professional Installation</h2>
            <p>
              Our trained technicians measure and custom cut each strand to ensure a perfect fit. We install the lights using clips and fasteners that won’t damage your roof or trim, and we test every bulb before we leave.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-semibold text-forest mb-2">Step 3: Season‑Long Support</h2>
            <p>
              Throughout the holiday season we monitor your display and provide free service calls if something needs adjusting. You can relax knowing we are just a phone call away.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-semibold text-forest mb-2">Step 4: Takedown & Storage</h2>
            <p>
              When it’s time to take the lights down we handle everything quickly and carefully. We label each strand so next year’s installation is even more efficient. Off‑season storage is included so your garage stays clutter‑free.
            </p>
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  )
}