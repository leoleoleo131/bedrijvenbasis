import type { Metadata } from 'next'
import Image from 'next/image'
import UnitsGrid from '@/components/home/UnitsGrid'
import ContactCta from '@/components/home/ContactCta'
import Faq from '@/components/ui/Faq'

export const metadata: Metadata = {
  title: 'Kantoorruimte huren Leeuwarden | Flexibel, all-inclusive',
  description: 'Kantoorruimte huren in Leeuwarden vanaf €295/mnd. All-inclusive: WiFi, stroom, parkeren. Flexibel of jaarcontract, 7–60 m², direct beschikbaar. Community van 25+ ondernemers.',
  alternates: { canonical: 'https://www.bedrijvenbasis.nl/kantoren/' },
}

const usps = [
  { icon: '⚡', label: 'Snel internet', sub: 'WiFi door het hele gebouw' },
  { icon: '☀️', label: 'Zonnepanelen', sub: 'Duurzaam pand' },
  { icon: '📬', label: 'Eigen postvak', sub: 'Post centraal ontvangen en gesorteerd' },
  { icon: '🚗', label: 'Gratis parkeren', sub: 'Ruim parkeerdek + laadpalen' },
  { icon: '🌿', label: 'Buitenwerkplek', sub: 'Terras voor in de zomer' },
  { icon: '💡', label: 'LED-verlichting', sub: 'Strakke, moderne afwerking' },
  { icon: '🏷️', label: 'Reclamezuil', sub: 'Zichtbaar bij de ingang' },
  { icon: '🔑', label: '24/7 toegang', sub: 'Met eigen sleutel' },
]

const kantoorfotoGrid = [
  { src: '/images/kantoor-2.webp', alt: 'Kantoorruimte de Basis Leeuwarden' },
  { src: '/images/kantoor-3.webp', alt: 'Kantoor interieur de Basis' },
  { src: '/images/kantoor-4.webp', alt: 'Werkruimte de Basis' },
  { src: '/images/kantoor-5.webp', alt: 'Werkplek de Basis Leeuwarden' },
]

const faqItems = [
  {
    vraag: 'Wat kost kantoorruimte huren in Leeuwarden?',
    antwoord: 'Bij de Basis huur je een all-inclusive kantoor vanaf €295 per maand. Kleine units (7–8 m²) kosten €295/mnd, middelgrote units (12–16 m²) €355–€375/mnd en grote units (50–60 m²) voor teams €750–€825/mnd. Alle kosten zijn inbegrepen — geen extra servicekosten.',
  },
  {
    vraag: 'Welke maten kantoorruimtes zijn er beschikbaar?',
    antwoord: 'We hebben units van 7 m² tot 60 m². Compacte units voor 1 persoon (7–8 m², vanaf €295/mnd), middelgrote kantoren voor 1–2 personen (12–16 m², €355–€375/mnd) en ruime units voor teams van 4–8 personen (50–60 m², €750–€825/mnd). Bekijk de actuele beschikbaarheid hierboven.',
  },
  {
    vraag: 'Kan ik een kantoor maandelijks opzeggen?',
    antwoord: 'Dat kan met een flexibel contract. Je betaalt dan een toeslag van 15% op de kale huurprijs, maar je kunt al vanaf de eerste maand opzeggen — met een opzegtermijn van drie maanden. Ideaal als je net start, snel wil groeien of gewoon flexibel wil blijven. Liever zekerheid? Dan kiezen veel huurders voor een jaarcontract, wat bij grotere units of meerdere units ook gebruikelijk is. We kijken altijd samen wat het beste bij jou past.',
  },
  {
    vraag: 'Wat is er inbegrepen in de huurprijs?',
    antwoord: 'De huurprijs is volledig all-inclusive: snel internet via WiFi, elektra, verwarming, schoonmaak van publieke ruimtes, gratis parkeren met laadpalen en 24/7 toegang met eigen sleutel. Jaloezieen zijn aanwezig, vloeren zijn geïsoleerd en afgewerkt. Geen verborgen kosten.',
  },
  {
    vraag: 'Is het kantoor gemeubileerd te huren?',
    antwoord: 'Meubilair is beschikbaar en kan worden besproken bij de bezichtiging. De units zijn al voorzien van mooie vloeren (PVC beton gietvloerlook of laminaat), strakke afwerking en LED-verlichting. Jij hoeft alleen je computer mee te nemen. Er is ook ruimte om zelf wat op te hangen of de wanden te sauzen — alles is bespreekbaar.',
  },
  {
    vraag: 'Hoe snel kan ik intrekken?',
    antwoord: 'Is de ruimte leeg? Dan kun je er direct in. We sturen het contract digitaal toe — vaak nog dezelfde dag — en zodra jij tekent kun je aan de slag. Zit er nog een huurder in? Dan is de verwachte beschikbaarheidsdatum te zien bij de betreffende unit hierboven.',
  },
  {
    vraag: 'Kan ik ook de vergaderruimte gebruiken als kantoorhuurder?',
    antwoord: 'Jazeker! Als kantoorhuurder reserveer je de vergaderruimte (bedrijvenbasis.nl/vergaderruimte) gewoon via de website — en op de factuur krijg je automatisch 50% korting op de normale prijs. Super handig als je een klein kantoor hebt maar af en toe klanten wil ontvangen, een training wil organiseren of met je team wil vergaderen. Je combineert zo een betaalbare vaste werkplek met een professionele vergaderzaal wanneer je die nodig hebt.',
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

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-basis max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">Kantoorruimte huren in Leeuwarden</h1>
          <p className="text-muted text-lg mb-6">
            Professionele kantoorruimtes in een compleet gerenoveerd bedrijfsverzamelgebouw —
            all-inclusive prijs, sterke community van 25+ ondernemers, gratis parkeren.
          </p>
          <ul className="space-y-2 text-sm text-muted mb-6">
            {[
              'Alles inbegrepen: WiFi, stroom, schoonmaak publieke ruimtes, parkeren',
              '24/7 toegang met eigen sleutel',
              'Gemeubileerd beschikbaar — alleen je computer mee',
              'Sterke community van 25+ ondernemers',
            ].map(item => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <ul className="space-y-2 text-sm text-muted">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
              <span>
                <strong>Jaarcontract — meest gekozen.</strong> Zekerheid en na een jaar maandelijks opzegbaar met 3 maanden opzegtermijn. Bij de grootste units of meerdere units wordt een passend voorstel op maat gemaakt.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
              <span>
                <strong>Flexibel contract</strong> — al vanaf de eerste maand opzegbaar. Bekijk de voorwaarden bij de veelgestelde vragen hieronder.
                Perfect voor beginnende ondernemers of ondernemers die gewoon flexibel willen blijven.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Kantoor foto grid (4 foto's) */}
      <section className="pb-12 bg-white">
        <div className="container-basis">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3" style={{ gridAutoRows: '200px' }}>
            {kantoorfotoGrid.map((foto, i) => (
              <div
                key={i}
                className={`relative rounded-card overflow-hidden ${i === 0 ? 'col-span-2 row-span-2 md:row-span-1' : ''}`}
              >
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Units */}
      <UnitsGrid />

      {/* All-inclusive verhaal */}
      <section className="section-padding bg-surface">
        <div className="container-basis">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold mb-4">Alles geregeld. Jij hoeft alleen te werken.</h2>
              <p className="text-muted text-sm leading-relaxed mb-4">
                De Basis is de afgelopen jaren volledig gerenoveerd — van vloer tot dak. Het pand is
                goed geïsoleerd, heeft een wit dak dat de warmte reflecteert en zonnepanelen die
                recent zijn geplaatst. Een duurzaam gebouw waar je je prettig voelt.
              </p>
              <p className="text-muted text-sm leading-relaxed mb-4">
                Op warme dagen zorgt airco (in de daarvoor uitgeruste ruimtes) voor verkoeling.
                In de winter zit je er lekker warm bij. Ritscreens weren de zon, vloeren zijn
                geïsoleerd en jaloezieen zijn aanwezig in elke unit.
              </p>
              <p className="text-muted text-sm leading-relaxed mb-4">
                Buiten is er een mooie buitenplek — ideaal om op warme zomerdagen even buiten te
                werken of te lunchen. De locatie is rustig, maar uitstekend bereikbaar per auto,
                fiets en bus. Gratis parkeren en elektrische laadpalen zijn aanwezig.
              </p>
              <p className="text-muted text-sm leading-relaxed mb-4">
                De kantoren zelf zijn afgewerkt met moderne PVC, beton gietvloerlook of laminaatvloer,
                strakke wanden en LED-verlichting. Representatief én prettig om in te werken.
                Er is ruimte om zelf wat op te hangen of een wand te sauzen — alles is bespreekbaar.
              </p>
              <p className="text-muted text-sm leading-relaxed">
                Buiten bij de ingang staat een mooie reclamezuil waarop jij als huurder zichtbaar
                bent. Daarnaast zijn er ingangsbordjes bij jouw kantoorunit mogelijk — zodat klanten
                en bezoekers je direct kunnen vinden. Een representatieve, professionele uitstraling
                vanaf de eerste dag.
              </p>
            </div>

            {/* USP blokjes */}
            <div className="grid grid-cols-2 gap-3">
              {usps.map(usp => (
                <div key={usp.label} className="bg-white rounded-card p-4 shadow-card">
                  <div className="text-2xl mb-2">{usp.icon}</div>
                  <p className="font-semibold text-sm mb-0.5">{usp.label}</p>
                  <p className="text-xs text-muted">{usp.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Faq items={faqItems} title="Veelgestelde vragen over kantoorruimte huren" />
      <ContactCta />
    </>
  )
}
