import type { Metadata } from 'next'
import Image from 'next/image'
import { huurders } from '@/data/huurders'
import ContactCta from '@/components/home/ContactCta'

export const metadata: Metadata = {
  title: 'Onze huurders | de Basis Leeuwarden',
  description: 'Meer dan 30 bedrijven zijn gevestigd op Bedrijfsverzamelgebouw de Basis in Leeuwarden.',
}

export default function HuurderPage() {
  const actief = huurders.filter(h => h.actief)
  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-basis">
          <h1 className="text-4xl font-bold mb-4">Onze huurders</h1>
          <p className="text-muted max-w-xl mb-12">
            Meer dan 30 bedrijven — van IT tot marketing, van coaches tot consultants — zijn thuis op de Basis.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {actief.map(h => (
              <div key={h.naam} className="flex flex-col items-center gap-3">
                <div className="relative h-16 w-full">
                  <Image src={h.logo} alt={h.naam} fill className="object-contain grayscale hover:grayscale-0 transition-[filter] duration-200" />
                </div>
                <span className="text-sm font-medium text-center">{h.naam}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactCta />
    </>
  )
}
