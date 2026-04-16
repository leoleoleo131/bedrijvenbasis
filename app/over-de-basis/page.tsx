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
    tekst: 'Je situatie verandert, je kantoorsituatie ook. Naast jaarcontracten bieden wij ook flexibele contracten die maandelijks opzegbaar zijn.',
  },
  {
    titel: 'Community',
    tekst: 'Samenwerking, netwerken en elkaar helpen is wat we doen. Geen eenzame kantoren.',
  },
  {
    titel: 'Kwaliteit',
    tekst: 'Snel contact en meldingen worden altijd direct opgepakt. Goed onderhouden, compleet gerenoveerd en verduurzaamd pand met eigen conciërge.',
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
  {
    titel: 'Flexibele contracten',
    tekst: 'Standaard jaarcontract. Wil je meer vrijheid? Flexibel contract met 15% toeslag: al vanaf de eerste maand opzegbaar met 3 maanden opzegtermijn.',
  },
  {
    titel: 'Echt all-in-één',
    tekst: 'WiFi, energie (stroom + verwarming), gemeentelijke heffingen, schoonmaak van alle algemene ruimtes en toiletten, servicekosten en beheer — alles inbegrepen. Geen verrassingen, geen extra facturen.',
  },
  {
    titel: 'Modern en duurzaam',
    tekst: 'Volledig gerenoveerd en verduurzaamd gebouw: extra isolatie, zonnepanelen, moderne airco\'s en klimaatbeheersing. Professioneel, schoon en energiezuinig.',
  },
  {
    titel: 'Community',
    tekst: 'Netwerken met andere ondernemers. Kennis delen. Groeien. Meer dan 20 bedrijven onder één dak.',
  },
  {
    titel: 'Alles onder één dak',
    tekst: 'Kantoorruimte, vergaderruimte en virtueel kantoor — allemaal op één locatie, precies wat je nodig hebt.',
  },
  {
    titel: 'Goed bereikbaar',
    tekst: 'Hart van Leeuwarden, vlakbij de A31. Makkelijk bereikbaar vanuit Drachten, Sneek, Harlingen en heel Friesland.',
  },
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
              src="/images/pand.webp"
              alt="Bedrijfsverzamelgebouw de Basis Leeuwarden"
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

      {/* Locatie */}
      <section className="section-padding bg-white">
        <div className="container-basis">
          <h2 className="text-2xl font-bold mb-2 text-center">Hoe vind je ons?</h2>
          <p className="text-sm text-muted text-center mb-8">Mr. P.J. Troelstraweg 149, 8919AA Leeuwarden — vlakbij de A31</p>
          <div className="rounded-card overflow-hidden shadow-card">
            <iframe
              src="https://maps.google.com/maps?q=Mr.+P.J.+Troelstraweg+149,+8919+AA+Leeuwarden,+Nederland&hl=nl&z=16&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locatie de Basis Leeuwarden"
            />
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  )
}
