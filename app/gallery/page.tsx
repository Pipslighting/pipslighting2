import Image from 'next/image'

export const metadata = {
  title: 'Gallery | Pip’s Christmas Lights',
  description: 'Browse our portfolio of beautiful holiday lighting installations across Northwest Arkansas, featuring homes and businesses alike.',
}

const galleryImages = Array.from({ length: 12 }, (_, idx) => ({
  src: `/images/gallery-${idx + 1}.webp`,
  alt: `Gallery image ${idx + 1}`,
}))

export default function GalleryPage() {
  return (
    <div>
      <header className="py-16 bg-forest text-offwhite text-center">
        <div className="container">
          <h1 className="font-serif text-4xl font-semibold">Gallery</h1>
          <p className="mt-4 text-md max-w-2xl mx-auto text-offwhite/90">
            A glimpse at some of our favourite installations. Each display is custom designed and installed by our team.
          </p>
        </div>
      </header>
      <section className="py-16 bg-offwhite">
        <div className="container">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {galleryImages.map(({ src, alt }, idx) => (
              <div key={idx} className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}