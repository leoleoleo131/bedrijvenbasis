import type { Metadata } from 'next'
import ContactCta from '@/components/home/ContactCta'

export const metadata: Metadata = {
  title: 'Virtueel Kantoor Leeuwarden | de Basis',
  description: 'Zakelijk postadres in Leeuwarden zonder fysieke ruimte. Ideaal voor thuiswerkers, freelancers en online bedrijven.',
}

const plannen = [
  {
    naam: 'Post ophalen',
    prijs: '€39/maand',
    punten: [
      'Eigen zakelijk postadres (KVK-geschikt)',
      'Post wordt gesorteerd en veilig opgeborgen in je postkluis',
      'Je haalt post op tijdens openingstijden (ma–vr 08:30–17:00)',
      'Gratis WiFi en gebruik van openbare werkplekken',
      'Maandelijks opzegbaar',
      'Ideaal als je in de buurt woont',
    ],
  },
  {
    naam: 'Post verzenden',
    prijs: '€76/maand',
    punten: [
      'Eigen zakelijk postadres (KVK-geschikt)',
      'Post wordt gesorteerd en om de week naar je opgestuurd',
      'Gratis WiFi en gebruik van openbare werkplekken',
      'Maandelijks opzegbaar',
      'Ideaal als je verder weg woont',
      'We kunnen ook reclame voor je filteren',
    ],
  },
]

const voordelen = [
  'Scheiding privé en zakelijk – Je thuisadres blijft privé',
  'Professionele uitstraling – Een kantorengebouw ziet er professioneler uit dan thuis',
  'KVK-geschikt – Het adres voldoet volledig aan de eisen van de Kamer van Koophandel',
  'Flexibel werken – Jij bepaalt waar je werkt: thuis, café, dagkantoor of openbare ruimte',
]

const doelgroep = [
  'Thuiswerkers – Scheiding privé en zakelijk adres',
  'Freelancers – Professioneel zakelijk postadres',
  'Startups – Laagdrempelig kantoorgebouw adres',
  'E-commerce – Post centraal geregeld',
  'Coaches – Adres voor inschrijving, klanten ontvangen op afspraak',
  'Consultants – Flexibel werken met professioneel imago',
  'Online bedrijven – Zakelijk postadres voor rechtmatigheid',
]

export default function VirtueelKantoorPage() {
  return (
    <>
      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-basis max-w-3xl">
          <h1 className="text-4xl font-bold mb-6">Virtueel Kantoor Leeuwarden</h1>
          <p className="text-muted text-lg mb-4">
            Heb je geen vaste werkruimte nodig, maar wil je wel een zakelijk postadres? Virtueel kantoor
            op de Basis is ideaal voor thuiswerkers, freelancers, online bedrijven en flexwerkers.
          </p>
          <p className="text-muted mb-4">
            Je krijgt een professioneel bedrijfsadres, wij sorteren je post, en je hebt gratis toegang tot
            onze openbare ruimtes en WiFi. Al voor €39 per maand.
          </p>
          <p className="text-muted mb-8">
            Virtueel kantoor betekent dat jij met je bedrijf officieel staat ingeschreven op het adres van
            de Basis, in plaats van op je privéadres.
          </p>

          {/* Voordelen */}
          <h2 className="text-2xl font-bold mb-4">De voordelen</h2>
          <ul className="space-y-2 text-sm text-muted mb-8">
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
          <h2 className="text-2xl font-bold mb-8 text-center">Twee serviceplannen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plannen.map(plan => (
              <div key={plan.naam} className="bg-white rounded-card shadow-card p-8">
                <div className="flex items-baseline justify-between mb-6">
                  <h3 className="text-xl font-bold">{plan.naam}</h3>
                  <span className="text-primary font-semibold">{plan.prijs}</span>
                </div>
                <ul className="space-y-3 text-sm text-muted">
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
          <p className="text-center text-sm text-muted mt-6">
            Extra optie: reclame filteren voordat we versturen — geen extra kosten.
          </p>
        </div>
      </section>

      {/* Doelgroep */}
      <section className="section-padding bg-white">
        <div className="container-basis max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Wie kiest voor virtueel kantoor?</h2>
          <ul className="space-y-2 text-sm text-muted">
            {doelgroep.map(d => (
              <li key={d} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                {d}
              </li>
            ))}
          </ul>

          <div className="mt-10 p-6 bg-surface rounded-card">
            <h3 className="font-bold mb-2">Snel geregeld</h3>
            <p className="text-sm text-muted">
              Binnen één werkdag actief. We hebben je bedrijfsgegevens nodig (naam, KVK-nummer,
              contactgegevens) en je bent klaar. Maandelijks opzegbaar, geen lange contracten.
            </p>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  )
}
