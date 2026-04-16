import type { Metadata } from 'next'
import Image from 'next/image'
import { huurders } from '@/data/huurders'
import ContactCta from '@/components/home/ContactCta'

export const metadata: Metadata = {
  title: 'Onze huurders | de Basis Leeuwarden',
  description: 'Meer dan 20 bedrijven zijn gevestigd op Bedrijfsverzamelgebouw de Basis in Leeuwarden.',
}

export default function HuurderPage() {
  const actief = huurders.filter(h => h.actief)
  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-basis">
          <h1 className="text-4xl font-bold mb-12">Alle bazen op de Basis</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {actief.map(h => (
              <div key={h.naam} className="relative h-24 w-full overflow-hidden">
                <Image
                  src={h.logo}
                  alt={h.naam}
                  fill
                  className="object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactCta />
    </>
  )
}
