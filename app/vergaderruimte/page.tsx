import type { Metadata } from 'next'
import Image from 'next/image'
import ContactCta from '@/components/home/ContactCta'
import Faq from '@/components/ui/Faq'
import CalBooking from '@/components/ui/CalBooking'

export const metadata: Metadata = {
  title: 'Vergaderruimte huren Leeuwarden | 35m², hybride, catering',
  description: 'Vergaderruimte huren in Leeuwarden. Moderne zaal van 35m² voor groepen tot 16 personen. Hybride camera, LCD scherm, catering. Snel online te reserveren.',
  alternates: { canonical: 'https://www.bedrijvenbasis.nl/vergaderruimte/' },
}

const faciliteiten = [
  '35m² vergaderruimte',
  'LCD scherm met HDMI & VGA',
  'Hybride vergaderingscamera',
  'Koffie, thee en water inbegrepen — self service',
  'Catering op aanvraag',
  'Gratis parkeren + laadpalen aanwezig',
  'Compatibel met Teams, Zoom en Google Meet',
]

const faqItems = [
  {
    vraag: 'Hoeveel personen passen er in de vergaderruimte?',
    antwoord: 'De vergaderruimte is 35 m² groot en geschikt voor groepen tot 16 personen. De ruimte is comfortabel ingericht voor zakelijke vergaderingen, trainingen en workshops.',
  },
  {
    vraag: 'Is de vergaderruimte geschikt voor hybride vergaderen?',
    antwoord: 'Ja. De ruimte beschikt over een professionele hybride vergaderingscamera, groot LCD scherm en microfoon array. Volledig compatible met Microsoft Teams, Zoom en Google Meet.',
  },
  {
    vraag: 'Kan ik catering bestellen voor mijn vergadering?',
    antwoord: 'Koffie, thee en water zijn standaard inbegrepen bij elke reservering — self service, zodat je altijd wat bij de hand hebt. Voor uitgebreidere catering neemt u bij reservering contact met ons op.',
  },
  {
    vraag: 'Hoe reserveer ik de vergaderruimte?',
    antwoord: 'Reserveren gaat eenvoudig via het boekingsvenster bovenaan deze pagina. Kies een datum, dagdeel en vul je gegevens in — je ontvangt direct een bevestiging. Heb je een vraag of speciale wens? Bel ons op (+31) 58 203 00 88 of mail naar info@bedrijvenbasis.nl.',
  },
  {
    vraag: 'Is er gratis parkeren bij de vergaderruimte?',
    antwoord: 'Ja. Rondom het gebouw zijn ruim voldoende gratis parkeerplaatsen beschikbaar voor vergaderingsgasten. Elektrische laadpalen zijn ook aanwezig.',
  },
  {
    vraag: 'Waar vind ik de vergaderruimte in het gebouw?',
    antwoord: 'Loop na binnenkomst door de hoofdingang de lange gang in. Aan het einde kom je bij de grote kantine — de vergaderruimte bevindt zich direct aan je rechterhand.',
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
              35m² — tot 16 personen — hybride vergaderen — gratis parkeren
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
              trainingen en workshops. Geschikt voor groepen tot 16 personen, met alle faciliteiten
              voor hybride samenwerken.
            </p>
            <ul className="space-y-3 text-sm text-muted mb-8">
              {faciliteiten.map(f => (
                <li key={f} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#reserveren"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary rounded-btn font-medium text-sm hover:bg-primary-hover transition-colors"
            >
              Reserveer nu
            </a>
          </div>
          <div className="relative h-64 md:h-full min-h-64 rounded-card overflow-hidden">
            <Image
              src="/images/vergaderr.webp"
              alt="Vergaderruimte de Basis Leeuwarden"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="reserveren" className="section-padding bg-surface">
        <div className="container-basis">
          <h2 className="text-2xl font-bold mb-2 text-center">Reserveer de vergaderruimte</h2>
          <p className="text-sm text-muted text-center mb-2">
            Kies een dagdeel en boek direct online.
          </p>
          <p className="text-sm text-center bg-white border border-black/10 rounded-card px-4 py-3 max-w-xl mx-auto">
            <strong>Huurder van de Basis?</strong> De 50% huurderkorting wordt verrekend op de factuur.
          </p>
          <p className="text-sm text-center text-muted mb-8 max-w-xl mx-auto mt-2">
            Prijzen zijn excl. btw.
          </p>
          <CalBooking />
        </div>
      </section>

      <Faq items={faqItems} title="Veelgestelde vragen over de vergaderruimte" />
      <ContactCta />
    </>
  )
}
