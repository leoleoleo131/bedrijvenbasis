'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-3">
      <header
        className={`mx-auto max-w-[1140px] rounded-xl transition-all duration-300 ${
          scrolled
            ? 'bg-white/85 backdrop-blur-xl shadow-lg border border-white/60'
            : 'bg-white/65 backdrop-blur-xl shadow-sm border border-white/40'
        }`}
      >
        <div className="flex items-center justify-between h-14 px-4">
          <Link href="/" className="flex-shrink-0 px-3 py-2">
            <Image src="/images/basis_logo.svg" alt="de Basis" width={115} height={38} priority />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-5 pr-2">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-black/70 hover:text-black transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact/"
              className="bg-primary text-black text-sm font-semibold px-5 py-2 rounded-btn hover:bg-primary-hover transition-colors ml-1"
            >
              Boek bezichtiging
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 mr-1 text-black/70 hover:text-black transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menu openen"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile overlay + slide-in panel */}
      <AnimatePresence>
        {open && (
          <>
            {/* Dark backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setOpen(false)}
            />

            {/* Slide-in panel from right */}
            <motion.div
              key="panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-3/4 z-50 bg-white/80 backdrop-blur-xl border-l border-black/10 flex flex-col px-8 pt-20 pb-8"
            >
              {/* Close button */}
              <button
                className="absolute top-4 right-5 text-black/50 hover:text-black transition-colors"
                onClick={() => setOpen(false)}
                aria-label="Menu sluiten"
              >
                <X size={24} />
              </button>

              {/* Nav links */}
              <nav className="flex flex-col gap-2 flex-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block text-base font-medium text-black/70 hover:text-black py-3 border-b border-black/10 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <Link
                  href="/contact/"
                  onClick={() => setOpen(false)}
                  className="block bg-primary text-black text-sm font-semibold px-4 py-3 rounded-btn text-center"
                >
                  Boek bezichtiging
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
