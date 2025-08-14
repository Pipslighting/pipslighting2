/**
 * Utilities for generating Schema.org JSON‑LD snippets.
 *
 * These functions produce plain objects that can be injected into the
 * page using `<script type="application/ld+json">` tags. Structuring
 * your content according to Schema.org helps search engines
 * understand your business, services and frequently asked questions.
 */

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: "Pip’s Christmas Lights",
    url: 'https://pipslighting.com',
    telephone: '940-368-1353',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Northwest Arkansas',
      addressRegion: 'AR',
      addressCountry: 'US',
    },
    areaServed: 'Northwest Arkansas',
    priceRange: '$$'
  }
}

export function serviceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Holiday Lighting Installation and Sales',
    provider: {
      '@type': 'LocalBusiness',
      name: "Pip’s Christmas Lights",
      url: 'https://pipslighting.com',
    },
    description:
      'Custom holiday lighting sales, installation, takedown and storage for residential and commercial clients in Northwest Arkansas.',
    areaServed: 'Northwest Arkansas',
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  }
}