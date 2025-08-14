import Image from 'next/image'
import Link from 'next/link'

const images = [
  { src: '/images/gallery-1.webp', alt: 'Elegant home with warm holiday lights' },
  { src: '/images/gallery-2.webp', alt: 'Festive storefront in downtown area' },
  { src: '/images/gallery-3.webp', alt: 'Custom cut lights on a modern house' },
]

export default function GalleryPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-10">Gallery Preview</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {images.map(({ src, alt }, idx) => (
              <div key={idx} className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center rounded-full bg-gold px-6 py-3 text-sm font-medium text-offwhite shadow hover:bg-forest hover:text-offwhite transition-colors"
            >
              View Full Gallery
            </Link>
          </div>
      </div>
    </section>
  )
}