'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/kantoren/', label: 'Kantoren' },
  { href: '/vergaderruimte/', label: 'Vergaderruimte' },
  { href: '/virtueel-kantoor/', label: 'Virtueel Kantoor' },
  { href: '/huurders/', label: 'Huurders' },
  { href: '/over-de-basis/', label: 'Over ons' },
  { href: '/contact/', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-3">
      <header
        className={`mx-auto max-w-[1140px] rounded-xl transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-lg border border-white/60'
            : 'bg-white/75 backdrop-blur-sm shadow-md border border-white/40'
        }`}
      >
        <div className="flex items-center justify-between h-14 px-6">
          <Link href="/" className="flex-shrink-0 py-1">
            <Image src="/images/basis_logo.svg" alt="de Basis" width={115} height={38} priority />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-black/75 hover:text-black transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact/"
              className="bg-primary text-black text-sm font-medium px-5 py-2 rounded-btn hover:bg-primary-hover transition-colors ml-1"
            >
              Boek bezichtiging
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-1"
            onClick={() => setOpen(!open)}
            aria-label="Menu openen"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-black/10 px-6 py-4 flex flex-col gap-3">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-black/80 py-1"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact/"
              onClick={() => setOpen(false)}
              className="bg-primary text-black text-sm font-medium px-4 py-2 rounded-btn text-center mt-1"
            >
              Boek bezichtiging
            </Link>
          </div>
        )}
      </header>
    </div>
  )
}
