import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contact | Pip’s Christmas Lights',
  description: 'Request a free estimate or ask us a question. Fill out our contact form and we will be in touch promptly.',
}

export default function ContactPage() {
  return (
    <div>
      <header className="py-16 bg-forest text-offwhite text-center">
        <div className="container">
          <h1 className="font-serif text-4xl font-semibold">Get in Touch</h1>
          <p className="mt-4 text-md max-w-2xl mx-auto text-offwhite/90">
            Ready to start your holiday lighting project or have questions? Complete the form below and our team will get back to you within one business day.
          </p>
        </div>
      </header>
      <section className="py-16 bg-offwhite">
        <div className="container grid gap-12 md:grid-cols-2 items-start">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-forest mb-4">Request an Estimate</h2>
            <ContactForm />
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-xl font-semibold text-forest">Phone</h3>
              <p className="text-forest/80"><a href="tel:9403681353" className="hover:text-gold">940‑368‑1353</a></p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-forest">Service Area</h3>
              <p className="text-forest/80">Northwest Arkansas</p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-forest">Business Hours</h3>
              <p className="text-forest/80">Monday–Friday: 8am–6pm<br />Saturday: 9am–3pm</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}