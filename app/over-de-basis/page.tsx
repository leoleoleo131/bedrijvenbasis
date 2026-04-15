import type { Metadata } from 'next'
import Image from 'next/image'
import ContactCta from '@/components/home/ContactCta'

export const metadata: Metadata = {
  title: 'Over de Basis - Bedrijfsverzamelgebouw Leeuwarden',
  description: 'Over de Basis. Missie: inspirerende kantoorruimtes voor ondernemers in Leeuwarden. Community, innovatie, samenwerkingsruimte.',
}

const waarden = [
  {
    titel: 'Transparantie',
    tekst: 'Wat je ziet is wat je krijgt. Geen verrassingkosten, geen kleine lettertjes.',
  },
  {
    titel: 'Flexibiliteit',
    tekst: 'Je situatie verandert, je kantoorsituatie ook. Maandelijks opzegbare contracten.',
  },
  {
    titel: 'Community',
    tekst: 'Samenwerking, netwerken en elkaar helpen is wat we doen. Geen eenzame kantoren.',
  },
  {
    titel: 'Kwaliteit',
    tekst: 'Modern, schoon, goed onderhouden. Je verdient het.',
  },
  {
    titel: 'Betaalbaarheid',
    tekst: 'Kantoorruimte moet voor iedereen bereikbaar zijn. Dat is onze missie.',
  },
]

const gebouwFeatures = [
  'Nieuwe vloeren en afwerking',
  'Duurzame verwarmings- en koelingssystemen',
  'Veel raampartijen voor natuurlijk licht',
  'Moderne elektra en internet-infrastructuur',
  'Gratis parkeerplaatsen',
  'Groen en rustige tuin',
]

const onderscheid = [
  { titel: 'Geen lange contracten', tekst: 'Maandelijks opzegbaar. Risicovrij groeien.' },
  { titel: 'All-in-één', tekst: 'Internet, WiFi, schoonmaak, onderhoud, parkeren — alles inbegrepen.' },
  { titel: 'Modern en schoon', tekst: 'Gerenoveerd gebouw met alle gemakken.' },
  { titel: 'Community', tekst: 'Netwerken met andere ondernemers. Kennis delen. Groeien.' },
  { titel: 'Flexibel', tekst: 'Kantoor, dagkantoor, vergaderruimte, virtueel kantoor — wat je nodig hebt.' },
  { titel: 'Goed bereikbaar', tekst: 'Hart van Leeuwarden, makkelijk van Drachten, Sneek en omgeving.' },
]

export default function OverDeBasisPage() {
  return (
    <>
      {/* Hero image */}
      <section className="relative h-64 md:h-96">
        <Image
          src="/images/pand.webp"
          alt="Bedrijfsverzamelgebouw de Basis Leeuwarden exterieur"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-end">
          <div className="container-basis pb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Over de Basis
            </h1>
          </div>
        </div>
      </section>

      {/* Missie & visie */}
      <section className="section-padding bg-white">
        <div className="container-basis max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Onze missie</h2>
          <p className="text-muted mb-6">
            De Basis is een bedrijfsverzamelgebouw waar ondernemers, freelancers en bedrijven samen kunnen
            werken in een inspirerende, professionele omgeving. We geloven dat goede werkruimtes,
            flexibiliteit en community bedrijven laten groeien.
          </p>
          <p className="text-muted mb-10">
            Startups tot gevestigde bedrijven — iedereen verdient een plek waar ze zich thuis voelen.
          </p>

          <h2 className="text-2xl font-bold mb-4">Onze visie</h2>
          <p className="text-muted mb-4">
            Wij creëren een omgeving waar ondernemers elkaar helpen, inspireren en sterker maken. Waar
            kantoorruimte betaalbaar is, geen gedoe heeft, en waar community prioriteit is.
          </p>
          <p className="text-muted mb-6">
            Een bedrijfsverzamelgebouw moet meer zijn dan alleen kantoren. Het is een plek waar flexibiliteit
            prioriteit is, alles all-in-één werkt, community bloeit en innovatie gebeurt.
          </p>
        </div>
      </section>

      {/* Waarden */}
      <section className="section-padding bg-surface">
        <div className="container-basis">
          <h2 className="text-2xl font-bold mb-8 text-center">Onze waarden</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {waarden.map(w => (
              <div key={w.titel} className="bg-white rounded-card p-6 shadow-card">
                <h3 className="font-bold mb-2">{w.titel}</h3>
                <p className="text-sm text-muted">{w.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Het gebouw */}
      <section className="section-padding bg-white">
        <div className="container-basis grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Het gebouw</h2>
            <p className="text-muted mb-2 font-medium">Mr. P.J. Troelstraweg 149, Leeuwarden</p>
            <p className="text-muted mb-6">
              Het pand is volledig gerenoveerd tot een modern bedrijfsverzamelgebouw. Niet alleen kantoren,
              maar een plek waar je graag bent.
            </p>
            <ul className="space-y-2 text-sm text-muted">
              {gebouwFeatures.map(f => (
                <li key={f} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-64 md:h-80 rounded-card overflow-hidden">
            <Image
              src="/images/WhatsApp-Image-2025-09-18-at-10.52.17-11.jpeg"
              alt="Interieur de Basis"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Onderscheid */}
      <section className="section-padding bg-surface">
        <div className="container-basis">
          <h2 className="text-2xl font-bold mb-8 text-center">Waarom kiezen ondernemers voor de Basis?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {onderscheid.map(o => (
              <div key={o.titel} className="bg-white rounded-card p-6 shadow-card">
                <h3 className="font-bold mb-2">{o.titel}</h3>
                <p className="text-sm text-muted">{o.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Huurders */}
      <section className="section-padding bg-white">
        <div className="container-basis max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-4">Onze huurders</h2>
          <p className="text-muted">
            Meer dan 20 bedrijven vertrouwen op de Basis. Van IT-bedrijven en consultants tot
            marketingbureaus, coaches en startups. Ze werken hier omdat ze kunnen groeien zonder lange
            contracten, samenwerken met andere gemotiveerde ondernemers en community voelen.
          </p>
        </div>
      </section>

      <ContactCta />
    </>
  )
}
