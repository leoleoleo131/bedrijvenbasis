import type { Metadata } from 'next'
import Image from 'next/image'
import { contact } from '@/data/contact'
import ContactCta from '@/components/home/ContactCta'

export const metadata: Metadata = {
  title: 'Vergaderruimte huren Leeuwarden | de Basis',
  description: 'Moderne vergaderruimte van 35m² in Leeuwarden. Hybride camera, LCD scherm, catering. Per dagdeel of hele dag te reserveren.',
}

const dagdelen = [
  { naam: 'Ochtend', tijd: '08:30 – 12:00' },
  { naam: 'Begin middag', tijd: '12:00 – 15:00' },
  { naam: 'Namiddag', tijd: '15:00 – 17:00' },
  { naam: 'Hele middag', tijd: '12:00 – 17:00' },
  { naam: 'Hele dag', tijd: '08:30 – 17:00' },
  { naam: 'Avond', tijd: '17:00 – 21:00' },
]

const faciliteiten = [
  '35m² vergaderruimte',
  'LCD scherm met HDMI & VGA',
  'Hybride vergaderingscamera',
  'Koffie/thee/water inbegrepen',
  'Catering op aanvraag',
  'Gratis parkeren',
]

export default function VergaderruimtePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-64 md:h-96">
        <Image
          src="/images/WhatsApp-Image-2025-09-18-at-10.52.18-2.jpeg"
          alt="Vergaderruimte de Basis Leeuwarden"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-end">
          <div className="container-basis pb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Vergaderruimte huren in Leeuwarden
            </h1>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="section-padding bg-white">
        <div className="container-basis grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Over de vergaderruimte</h2>
            <p className="text-muted mb-6">
              Een moderne vergaderruimte van 35m² — volledig ingericht voor professionele vergaderingen.
              Geschikt voor groepen tot 12 personen.
            </p>
            <ul className="space-y-3 text-sm text-muted">
              {faciliteiten.map(f => (
                <li key={f} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Dagdelen</h2>
            <div className="space-y-3">
              {dagdelen.map(d => (
                <div key={d.naam} className="flex justify-between py-3 border-b border-surface text-sm">
                  <span className="font-medium">{d.naam}</span>
                  <span className="text-muted">{d.tijd}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder booking */}
      <section className="section-padding bg-surface">
        <div className="container-basis max-w-2xl">
          <div className="bg-white rounded-card shadow-card p-10 text-center">
            <h2 className="text-2xl font-bold mb-4">Reserveer de vergaderruimte</h2>
            <p className="text-muted mb-6">
              Binnenkort kunt u hier direct online reserveren.<br />
              Voor nu: neem contact op voor een reservering.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={`tel:${contact.telefoonRaw}`}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary rounded-btn font-medium text-sm hover:bg-primary-hover transition-colors"
              >
                ☎ {contact.telefoon}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center justify-center px-6 py-3 border border-black rounded-btn font-medium text-sm hover:bg-black hover:text-white transition-colors"
              >
                ✉ {contact.email}
              </a>
            </div>
          </div>
        </div>
      </section>
      <ContactCta />
    </>
  )
}
