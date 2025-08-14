export const metadata = {
  title: 'Blog | Pip’s Christmas Lights',
  description: 'Tips, inspiration and behind‑the‑scenes stories from Pip’s Christmas Lights. Check back for new posts during the holiday season.',
}

export default function BlogPage() {
  return (
    <div>
      <header className="py-16 bg-forest text-offwhite text-center">
        <div className="container">
          <h1 className="font-serif text-4xl font-semibold">Blog</h1>
          <p className="mt-4 text-md max-w-2xl mx-auto text-offwhite/90">
            Our blog is coming soon. In the meantime, explore our services and gallery to start planning your holiday display.
          </p>
        </div>
      </header>
      <section className="py-16 bg-offwhite">
        <div className="container text-center text-forest/80">
          <p>We’re working on seasonal articles and inspiration. Check back closer to the holidays!</p>
        </div>
      </section>
    </div>
  )
}