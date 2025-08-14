import Image from 'next/image'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'About Us | Pip’s Christmas Lights',
  description: 'Learn about the story, mission and values behind Pip’s Christmas Lights, a family‑run holiday lighting company serving Northwest Arkansas.',
}

export default function AboutPage() {
  return (
    <div>
      <header className="py-16 bg-forest text-offwhite text-center">
        <div className="container">
          <h1 className="font-serif text-4xl font-semibold">About Pip’s</h1>
          <p className="mt-4 text-md max-w-2xl mx-auto text-offwhite/90">
            We are a locally owned and family‑operated business dedicated to bringing joy to our community through premium holiday lighting.
          </p>
        </div>
      </header>
      <section className="py-16 bg-offwhite">
        <div className="container grid gap-8 md:grid-cols-2 items-center">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-md">
            <Image
              src="/images/about.webp"
              alt="Friendly team installing holiday lights"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-3xl font-semibold text-forest mb-4">Our Story</h2>
            <p className="text-forest/80 leading-relaxed">
              Pip’s Christmas Lights began as a passion project when our founder, who grew up stringing lights with his grandfather, saw an opportunity to combine craftsmanship with community spirit. Today we are proud to serve Northwest Arkansas with the same love and attention to detail that started it all.
            </p>
            <h2 className="font-serif text-3xl font-semibold text-forest mt-8 mb-4">Our Mission</h2>
            <p className="text-forest/80 leading-relaxed">
              Our mission is simple: make the holidays brighter by providing high‑quality, worry‑free lighting services. We take pride in our work and treat each property as if it were our own, ensuring safety, beauty and durability in every installation.
            </p>
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  )
}