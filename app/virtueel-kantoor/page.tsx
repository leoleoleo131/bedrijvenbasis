import type { Metadata } from 'next'
import ContactCta from '@/components/home/ContactCta'
import Faq from '@/components/ui/Faq'

export const metadata: Metadata = {
  title: 'Virtueel Kantoor Leeuwarden | KVK-geschikt vanaf €49/mnd',
  description: 'Zakelijk postadres in Leeuwarden zonder fysieke werkruimte. KVK-geschikt, post inscannen en doormailen. Vanaf €49/mnd. Binnen één werkdag actief.',
  alternates: { canonical: 'https://www.bedrijvenbasis.nl/virtueel-kantoor/' },
}

const plannen = [
  {
    naam: 'Post ophalen',
    prijs: '€49/mnd',
    badge: 'Meest gekozen',
    info: 'Minimaal 1 jaar, daarna per kwartaal opzegbaar. Betaling per kwartaal.',
    punten: [
      'Eigen zakelijk postadres (KVK-geschikt)',
      'Post gesorteerd en opgeborgen in je postkluis',
      'Post ophalen tijdens openingstijden (ma–vr 08:00–17:00)',
      'Gratis WiFi en gebruik van openbare werkplekken',
      'Ideaal als je in de buurt woont of werkt',
    ],
  },
  {
    naam: 'Inscannen & doormailen',
    prijs: '€69/mnd',
    badge: null,
    info: 'Minimaal 1 jaar, daarna per kwartaal opzegbaar. Betaling per kwartaal.',
    punten: [
      'Eigen zakelijk postadres (KVK-geschikt)',
      'Post direct ingescand en doorgestuurd naar je e-mail',
      'Gratis WiFi en gebruik van openbare werkplekken',
      'Reclame filteren op verzoek',
      'Ideaal als je verder weg woont of veel onderweg bent',
    ],
  },
]

const voordelen = [
  'Scheiding privé en zakelijk — je thuisadres blijft privé',
  'Professionele uitstraling — een kantorengebouw ziet er professioneler uit dan thuis',
  'KVK-geschikt — het adres voldoet volledig aan de eisen van de Kamer van Koophandel',
  'Flexibel werken — jij bepaalt waar je werkt: thuis, onderweg of op een werkplek',
]

const doelgroep = [
  'Thuiswerkers — scheiding privé en zakelijk adres',
  'Freelancers — professioneel zakelijk postadres',
  'Startups — laagdrempelig kantooradres zonder vaste kosten',
  'E-commerce — post centraal geregeld',
  'Coaches — adres voor inschrijving, klanten ontvangen op afspraak',
  'Consultants — flexibel werken met professioneel imago',
  'Online bedrijven — zakelijk postadres voor rechtmatigheid',
]

const faqItems = [
  {
    vraag: 'Wat is een virtueel kantoor precies?',
    antwoord: 'Een virtueel kantoor geeft je een zakelijk postadres zonder dat je een vaste werkruimte huurt. Je bedrijf staat officieel ingeschreven op het adres van de Basis (Mr. P.J. Troelstraweg 149, 8919AA Leeuwarden). Je werkt zelf waar je wilt — thuis, onderweg of elders.',
  },
  {
    vraag: 'Is het adres geschikt voor KVK-inschrijving?',
    antwoord: 'Ja. Het adres is volledig KVK-geschikt. Je kunt je bedrijf officieel inschrijven bij de Kamer van Koophandel op Mr. P.J. Troelstraweg 149, 8919AA Leeuwarden. Het adres voldoet aan alle vereisten.',
  },
  {
    vraag: 'Hoe snel is het virtueel kantoor actief?',
    antwoord: 'Binnen één werkdag. Stuur ons je bedrijfsnaam, KVK-nummer en contactgegevens, en je bent klaar om te starten. Geen lange procedures of wachttijden.',
  },
  {
    vraag: 'Wat kost een virtueel kantoor bij de Basis?',
    antwoord: 'Post ophalen kost €49 per maand — je haalt zelf je post op tijdens openingstijden. Inscannen & doormailen kost €69 per maand — wij scannen je post in en sturen hem direct naar je e-mail. Beide opties hebben een minimumlooptijd van 1 jaar, daarna per kwartaal opzegbaar. Betaling gaat per kwartaal vooruit.',
  },
  {
    vraag: 'Kan ik ook de vergaderruimte gebruiken als virtueel kantoor huurder?',
    antwoord: 'Ja. Als virtueel kantoor huurder kun je gebruik maken van de vergaderruimte (apart te reserveren) en de openbare werkplekken met gratis WiFi in het gebouw.',
  },
  {
    vraag: 'Blijft mijn privéadres echt privé?',
    antwoord: 'Ja. Zodra je een virtueel kantoor afneemt bij de Basis, staat je bedrijf ingeschreven op ons adres. Je privéadres hoeft niet publiek te zijn voor de KVK of voor klanten.',
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

export default function VirtueelKantoorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-basis max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">Virtueel Kantoor Leeuwarden</h1>
          <p className="text-muted text-lg mb-4">
            Een zakelijk postadres in Leeuwarden zonder vaste werkruimte. KVK-geschikt, professioneel.
            Al vanaf <strong>€49 per maand</strong>.
          </p>
          <p className="text-muted mb-8">
            Je bedrijf staat officieel ingeschreven op het adres van de Basis. Wij regelen je post —
            jij werkt waar je wilt.
          </p>

          <h2 className="text-2xl font-bold mb-4">De voordelen</h2>
          <ul className="space-y-2 text-sm text-muted">
            {voordelen.map(v => (
              <li key={v} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                {v}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Plannen */}
      <section className="section-padding bg-surface">
        <div className="container-basis">
          <h2 className="text-2xl font-bold mb-2 text-center">Kies je plan</h2>
          <p className="text-sm text-muted text-center mb-8">Minimaal 1 jaar, daarna per kwartaal opzegbaar — betaling per kwartaal vooruit.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plannen.map((plan, i) => (
              <div
                key={plan.naam}
                className={`bg-white rounded-card shadow-card p-8 flex flex-col ${i === 0 ? 'ring-2 ring-primary' : ''}`}
              >
                {plan.badge && (
                  <span className="inline-block bg-primary text-xs font-semibold px-2 py-1 rounded mb-4 w-fit">
                    {plan.badge}
                  </span>
                )}
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-xl font-bold">{plan.naam}</h3>
                  <span className="text-primary font-semibold">{plan.prijs}</span>
                </div>
                <p className="text-xs text-muted mb-6">{plan.info}</p>
                <ul className="space-y-3 text-sm text-muted flex-1">
                  {plan.punten.map(p => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doelgroep */}
      <section className="section-padding bg-white">
        <div className="container-basis max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Wie kiest voor virtueel kantoor?</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted">
            {doelgroep.map(d => (
              <li key={d} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                {d}
              </li>
            ))}
          </ul>

          <div className="mt-10 p-6 bg-surface rounded-card">
            <h3 className="font-bold mb-2">Binnen één werkdag actief</h3>
            <p className="text-sm text-muted">
              Stuur ons je bedrijfsnaam, KVK-nummer en contactgegevens — je virtueel kantoor is
              dezelfde of volgende werkdag actief.
            </p>
          </div>
        </div>
      </section>

      <Faq items={faqItems} title="Veelgestelde vragen over virtueel kantoor" />
      <ContactCta />
    </>
  )
}
