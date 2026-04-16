'use client'

import Image from 'next/image'
import Link from 'next/link'
import { huurders } from '@/data/huurders'

export default function LogoCarousel() {
  const actief = huurders.filter(h => h.actief)
  // Duplicate for seamless infinite loop
  const logos = [...actief, ...actief]

  return (
    <section className="py-12 bg-surface overflow-hidden">
      <div className="container-basis mb-6">
        <p className="text-center text-sm font-medium text-muted uppercase tracking-wider">
          Meer dan 20 bedrijven gekozen voor de Basis
        </p>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div className="flex gap-16 animate-scroll w-max">
          {logos.map((h, i) => (
            <div
              key={`${h.naam}-${i}`}
              className="relative h-24 w-56 flex-shrink-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all"
            >
              <Image src={h.logo} alt={h.naam} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="container-basis mt-8 text-center">
        <Link
          href="/huurders/"
          className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
        >
          Bekijk alle huurders →
        </Link>
      </div>
    </section>
  )
}
