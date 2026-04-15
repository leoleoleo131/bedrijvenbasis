import type { Metadata } from 'next'
import UnitsGrid from '@/components/home/UnitsGrid'
import ContactCta from '@/components/home/ContactCta'

export const metadata: Metadata = {
  title: 'Kantoorruimte huren Leeuwarden | Flexibel contract',
  description: 'Kantoorruimtes in Leeuwarden. All-inclusive prijzen, flexibel maandelijks contract, gratis parking & WiFi.',
}

export default function KantorenPage() {
  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-basis max-w-3xl">
          <h1 className="text-4xl font-bold mb-6">Kantoorruimte huren Leeuwarden</h1>
          <p className="text-muted text-lg mb-4">
            Professionele kantoorruimtes in een modern bedrijfsverzamelgebouw. All-inclusive prijs, flexibel contract, gratis parkeren.
          </p>
          <ul className="space-y-2 text-sm text-muted mb-6">
            {['Alles inbegrepen: WiFi, stroom, schoonmaak, parkeren',
              'Maandelijks opzegbaar — geen lange binding',
              'Gemeubileerd beschikbaar',
              '24/7 toegang met eigen sleutel',
              'Sterke community van 30+ ondernemers'].map(item => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <UnitsGrid />
      <ContactCta />
    </>
  )
}
