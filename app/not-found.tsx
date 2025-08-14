import Link from 'next/link'

export const metadata = {
  title: 'Page Not Found | Pip’s Christmas Lights',
}

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[60vh] bg-offwhite py-20">
      <div className="text-center space-y-4">
        <h1 className="font-serif text-6xl font-bold text-forest">404</h1>
        <p className="text-forest/80 text-lg">Sorry, the page you are looking for does not exist.</p>
        <Link href="/" className="inline-flex items-center rounded-full bg-gold px-6 py-3 text-sm font-medium text-offwhite shadow hover:bg-forest hover:text-offwhite transition-colors">
          Back to Home
        </Link>
      </div>
    </div>
  )
}