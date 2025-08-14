import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

/**
 * Site header with logo, primary navigation and a call-to-action button.
 * On mobile the navigation collapses into a hamburger menu. This component
 * is lightweight and does not rely on external state management.
 */
export default function Header() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/process', label: 'Process' },
    { href: '/service-areas', label: 'Service Areas' },
    { href: '/about', label: 'About' },
    { href: '/faqs', label: 'FAQs' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-offwhite/90 backdrop-blur supports-[backdrop-filter]:bg-offwhite/70 shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="Pip’s Christmas Lights logo"
            width={40}
            height={40}
            priority
          />
          <span className="font-serif text-xl font-semibold text-forest">Pip’s</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-forest hover:text-gold transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-gold px-5 py-2 text-sm font-medium text-offwhite shadow hover:bg-forest hover:text-offwhite transition-colors"
          >
            Get Estimate
          </Link>
        </div>
        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 text-forest hover:text-gold focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile nav */}
      {open && (
        <div className="md:hidden bg-offwhite shadow-inner">
          <nav className="space-y-1 px-4 py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-forest hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-gold px-5 py-2 text-sm font-medium text-offwhite shadow hover:bg-forest hover:text-offwhite transition-colors"
            >
              Get Estimate
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}