'use client'
import { useState } from 'react'
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
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-basis flex items-center justify-between h-16">
        <Link href="/">
          <Image src="/images/basis_logo.svg" alt="de Basis" width={120} height={40} priority />
        </Link>
        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href}
              className="text-sm font-medium text-black hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
          <Link href="/contact/"
            className="bg-primary text-black text-sm font-medium px-4 py-2 rounded-btn hover:bg-primary-hover transition-colors">
            Boek bezichtiging
          </Link>
        </nav>
        {/* Mobile toggle */}
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t px-4 py-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
              className="text-sm font-medium text-black">
              {link.label}
            </Link>
          ))}
          <Link href="/contact/" onClick={() => setOpen(false)}
            className="bg-primary text-black text-sm font-medium px-4 py-2 rounded-btn text-center">
            Boek bezichtiging
          </Link>
        </div>
      )}
    </header>
  )
}
