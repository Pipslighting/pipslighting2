import Link from 'next/link'

/**
 * The site footer contains quick links, contact information and a small
 * copyright notice. It uses a responsive grid layout that collapses on
 * small screens.
 */
export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-forest text-offwhite py-8 mt-12">
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-serif text-lg font-semibold mb-2">Pip’s Christmas Lights</h4>
          <p className="text-sm">Premium holiday lighting in Northwest Arkansas.</p>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Quick Links</h5>
          <ul className="space-y-1 text-sm">
            <li><Link href="/services" className="hover:text-gold">Services</Link></li>
            <li><Link href="/gallery" className="hover:text-gold">Gallery</Link></li>
            <li><Link href="/process" className="hover:text-gold">Process</Link></li>
            <li><Link href="/faqs" className="hover:text-gold">FAQs</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Company</h5>
          <ul className="space-y-1 text-sm">
            <li><Link href="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link href="/reviews" className="hover:text-gold">Reviews</Link></li>
            <li><Link href="/service-areas" className="hover:text-gold">Service Areas</Link></li>
            <li><Link href="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Get in Touch</h5>
          <p className="text-sm">
            Phone: <a href="tel:9403681353" className="hover:text-gold">940‑368‑1353</a>
          </p>
          <p className="text-sm mt-1">Northwest Arkansas</p>
        </div>
      </div>
      <div className="container mt-8 border-t border-forest pt-4 text-center text-xs text-gold">
        © {year} Pip’s Christmas Lights. All rights reserved.
      </div>
    </footer>
  )
}