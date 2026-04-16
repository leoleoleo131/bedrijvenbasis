import type { Metadata } from 'next'
import Image from 'next/image'
import ContactCta from '@/components/home/ContactCta'
import Faq from '@/components/ui/Faq'
import CalBooking from '@/components/ui/CalBooking'

export const metadata: Metadata = {
  title: 'Vergaderruimte huren Leeuwarden | 35m², hybride, catering',
  description: 'Vergaderruimte huren in Leeuwarden. Moderne zaal van 35m² voor groepen tot 12 personen. Hybride camera, LCD scherm, catering. Per dagdeel of dag te reserveren.',
  alternates: { canonical: 'https://www.bedrijvenbasis.nl/vergaderruimte/' },
}

const dagdelen = [
  { naam: 'Vroege ochtend', tijd: '08:00 – 10:00' },
  { naam: 'Late ochtend', tijd: '10:00 – 12:00' },
  { naam: 'Begin middag', tijd: '12:00 – 15:00' },
  { naam: 'Namiddag', tijd: '15:00 – 17:00' },
  { naam: 'Hele middag', tijd: '12:00 – 17:00' },
  { naam: 'Hele dag', tijd: '08:00 – 17:00' },
  { naam: 'Avond', tijd: '17:00 – 21:00' },
]

const faciliteiten = [
  '35m² vergaderruimte',
  'LCD scherm met HDMI & VGA',
  'Hybride vergaderingscamera',
  'Koffie, thee en water inbegrepen',
  'Catering op aanvraag',
  'Gratis parkeren',
  'Compatibel met Teams, Zoom en Google Meet',
]

const faqItems = [
  {
    vraag: 'Hoeveel personen passen er in de vergaderruimte?',
    antwoord: 'De vergaderruimte is 35 m² groot en geschikt voor groepen tot 12 personen. De ruimte is comfortabel ingericht voor zakelijke vergaderingen, trainingen en workshops.',
  },
  {
    vraag: 'Is de vergaderruimte geschikt voor hybride vergaderen?',
    antwoord: 'Ja. De ruimte beschikt over een professionele hybride vergaderingscamera, groot LCD scherm en microfoon array. Volledig compatible met Microsoft Teams, Zoom en Google Meet.',
  },
  {
    vraag: 'Kan ik catering bestellen voor mijn vergadering?',
    antwoord: 'Ja, catering is beschikbaar op aanvraag. Koffie, thee en water zijn standaard inbegrepen bij elke reservering. Voor uitgebreidere catering neemt u bij reservering contact met ons op.',
  },
  {
    vraag: 'Hoe reserveer ik de vergaderruimte?',
    antwoord: 'Bel ons op (+31) 58 203 00 88 of mail naar info@bedrijvenbasis.nl. We plannen de reservering direct voor je in en bevestigen per e-mail.',
  },
  {
    vraag: 'Is er gratis parkeren bij de vergaderruimte?',
    antwoord: 'Ja. Rondom het gebouw zijn ruim voldoende gratis parkeerplaatsen beschikbaar voor vergaderingsgasten. Parkeren hoef je nooit te betalen of te reserveren.',
  },
  {
    vraag: 'Kan ik de vergaderruimte ook op avond of weekend huren?',
    antwoord: 'Avondverhuur is beschikbaar (17:00–21:00). Neem contact op voor beschikbaarheid en dagdeeltarieven. We denken graag mee over een oplossing die bij jouw planning past.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(item => ({
    '@type': 'Question',
    name: item.vraag,
    acceptedAnswer: { '@type': 'Answer', text: item.antwoord },
  })),
}

export default function VergaderruimtePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
            <p className="text-white/80 mt-2 text-sm md:text-base">
              35m² — tot 12 personen — hybride vergaderen — gratis parkeren
            </p>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="section-padding bg-white">
        <div className="container-basis grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Over de vergaderruimte</h2>
            <p className="text-muted mb-6">
              Een moderne vergaderruimte van 35m² — volledig ingericht voor professionele vergaderingen,
              trainingen en workshops. Geschikt voor groepen tot 12 personen, met alle faciliteiten
              voor hybride samenwerken.
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
            <h2 className="text-2xl font-bold mb-4">Beschikbare dagdelen</h2>
            <div className="space-y-1">
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

      {/* Booking */}
      <section className="section-padding bg-surface">
        <div className="container-basis">
          <h2 className="text-2xl font-bold mb-2 text-center">Reserveer de vergaderruimte</h2>
          <p className="text-sm text-muted text-center mb-2">
            Kies een dagdeel en boek direct online.
          </p>
          <p className="text-sm text-center mb-8 bg-white border border-black/10 rounded-card px-4 py-3 max-w-xl mx-auto">
            <strong>Huurder van de Basis?</strong> De 50% huurderkorting wordt verrekend op de factuur.
          </p>
          <CalBooking />
        </div>
      </section>

      <Faq items={faqItems} title="Veelgestelde vragen over de vergaderruimte" />
      <ContactCta />
    </>
  )
}
