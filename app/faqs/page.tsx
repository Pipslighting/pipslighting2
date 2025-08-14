import { faqSchema } from '@/lib/schema'

export const metadata = {
  title: 'FAQs | Pip’s Christmas Lights',
  description: 'Frequently asked questions about our holiday lighting services, pricing, installation and more.',
}

const faqs = [
  {
    question: 'Do you provide the lights?',
    answer:
      'Yes! We supply commercial‑grade LED lights that are custom cut for your home or business. The lights remain yours for future seasons.',
  },
  {
    question: 'Do you take the lights down?',
    answer:
      'Absolutely. Takedown and off‑season storage are included in every package. We label each strand so next year’s reinstallation is seamless.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'Pricing varies based on the size and complexity of your property. Contact us for a free custom estimate tailored to your needs.',
  },
  {
    question: 'Are you insured?',
    answer:
      'Yes, we are fully licensed and insured. Our team is trained to install lights safely and securely.',
  },
]

export default function FAQPage() {
  const schema = faqSchema(faqs)
  return (
    <div>
      <header className="py-16 bg-forest text-offwhite text-center">
        <div className="container">
          <h1 className="font-serif text-4xl font-semibold">Frequently Asked Questions</h1>
          <p className="mt-4 text-md max-w-2xl mx-auto text-offwhite/90">
            Everything you want to know about our services, pricing and process.
          </p>
        </div>
      </header>
      <section className="py-16 bg-offwhite">
        <div className="container space-y-8">
          {faqs.map(({ question, answer }, idx) => (
            <div key={idx} className="bg-white border border-forest/10 rounded-lg p-6 shadow-sm">
              <h2 className="font-serif text-xl font-semibold text-forest">{question}</h2>
              <p className="text-forest/80 mt-2 leading-relaxed">{answer}</p>
            </div>
          ))}
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  )
}