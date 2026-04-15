import type { Metadata } from 'next'
import UnitsGrid from '@/components/home/UnitsGrid'
import ContactCta from '@/components/home/ContactCta'
import Faq from '@/components/ui/Faq'

export const metadata: Metadata = {
  title: 'Kantoorruimte huren Leeuwarden | Flexibel, all-inclusive',
  description: 'Kantoorruimte huren in Leeuwarden vanaf €295/mnd. All-inclusive: WiFi, stroom, parkeren. Flexibel maandelijks contract, 7–60 m², direct beschikbaar.',
  alternates: { canonical: 'https://www.bedrijvenbasis.nl/kantoren/' },
}

const faqItems = [
  {
    vraag: 'Wat kost kantoorruimte huren in Leeuwarden?',
    antwoord: 'Bij de Basis huur je een all-inclusive kantoor vanaf €295 per maand. Kleine units (7–8 m²) kosten €295/mnd, middelgrote units (12–16 m²) €355–€375/mnd en grote units (50–60 m²) voor teams €750–€790/mnd. Alle kosten zijn inbegrepen — geen extra servicekosten.',
  },
  {
    vraag: 'Welke maten kantoorruimtes zijn er beschikbaar?',
    antwoord: 'We hebben units van 7 m² tot 60 m². Compacte units voor 1 persoon (€295/mnd), middelgrote kantoren voor 1–2 personen (€355–€375/mnd) en ruime units voor teams van 4–8 personen (€750–€790/mnd). Bekijk de actuele beschikbaarheid hierboven.',
  },
  {
    vraag: 'Kan ik een kantoor maandelijks opzeggen?',
    antwoord: 'Ja. Alle kantoorruimtes zijn maandelijks opzegbaar met één maand opzegtermijn. Je zit nergens langdurig aan vast — ideaal voor groeiende bedrijven en ZZP\'ers.',
  },
  {
    vraag: 'Wat is er inbegrepen in de huurprijs?',
    antwoord: 'De huurprijs is volledig all-inclusive: snelle glasvezel internet/WiFi, elektra, verwarming, schoonmaak van gemeenschappelijke ruimtes, gratis parkeren en 24/7 toegang met eigen sleutel. Geen verborgen kosten.',
  },
  {
    vraag: 'Is het kantoor gemeubileerd te huren?',
    antwoord: 'Ja. Alle units kunnen volledig gemeubileerd worden opgeleverd. Dit wordt besproken bij de bezichtiging. Gemeubileerde oplevering is mogelijk tegen een kleine toeslag.',
  },
  {
    vraag: 'Hoe snel kan ik intrekken?',
    antwoord: 'Doorgaans binnen 1 à 2 weken na ondertekening van het huurcontract. Neem contact op voor een vrijblijvende bezichtiging — we kijken samen wat er direct beschikbaar is.',
  },
  {
    vraag: 'Kan ik ook de vergaderruimte gebruiken als kantoorhuurder?',
    antwoord: 'Ja. Als kantoorhuurder bij de Basis kun je gebruik maken van de vergaderruimte (apart te reserveren) en alle gemeenschappelijke ruimtes. Koffie en thee zijn altijd beschikbaar.',
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

export default function KantorenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="section-padding bg-white">
        <div className="container-basis max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">Kantoorruimte huren Leeuwarden</h1>
          <p className="text-muted text-lg mb-6">
            Professionele kantoorruimtes in een modern bedrijfsverzamelgebouw. All-inclusive prijs, flexibel maandelijks contract, gratis parkeren.
          </p>
          <ul className="space-y-2 text-sm text-muted">
            {[
              'Alles inbegrepen: WiFi, stroom, schoonmaak, parkeren',
              'Maandelijks opzegbaar — geen lange binding',
              'Gemeubileerd beschikbaar',
              '24/7 toegang met eigen sleutel',
              'Sterke community van 30+ ondernemers',
            ].map(item => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <UnitsGrid />
      <Faq items={faqItems} title="Veelgestelde vragen over kantoorruimte huren" />
      <ContactCta />
    </>
  )
}
