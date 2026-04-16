import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import UspBar from '@/components/home/UspBar'
import UnitsGrid from '@/components/home/UnitsGrid'
import VergaderruimteTeaser from '@/components/home/VergaderruimteTeaser'
import OverDeBasis from '@/components/home/OverDeBasis'
import LogoCarousel from '@/components/home/LogoCarousel'
import ContactCta from '@/components/home/ContactCta'
import Faq from '@/components/ui/Faq'
import Testimonials from '@/components/home/Testimonials'
import FotoGrid from '@/components/home/FotoGrid'

export const metadata: Metadata = {
  title: 'Kantoorruimte huren Leeuwarden | Bedrijfsverzamelgebouw de Basis',
  description: 'Kantoorruimte huren in Leeuwarden. All-inclusive, flexibel maandelijks contract, gratis parkeren & WiFi. Meer dan 25 bedrijven kozen voor de Basis.',
}

const faqItems = [
  {
    vraag: 'Welke diensten biedt de Basis?',
    antwoord: 'De Basis biedt kantoorruimte (7–60 m²), een moderne vergaderruimte van 35 m² voor maximaal 16 personen, virtueel kantoor en flexibele werkplekken. Alle huurprijzen zijn volledig all-inclusive: WiFi, stroom, verwarming, schoonmaak van gemeenschappelijke ruimtes en toiletten, servicekosten, beheer en gratis parkeren zijn standaard inbegrepen. Geen gemeentelijke heffingen, geen extra kosten achteraf. Gewoon één vast bedrag per maand.',
  },
  {
    vraag: 'Kan ik de kantoorruimte maandelijks opzeggen?',
    antwoord: 'Ja. Met ons flexibele contract ben je al vanaf de eerste maand opzegbaar — met een opzegtermijn van 3 maanden. Hiervoor betaal je een toeslag van 15% op de maandprijs. Wil je liever zekerheid? Met een standaard jaarcontract betaal je de laagste prijs zonder toeslag.',
  },
  {
    vraag: 'Zijn parkeerplaatsen gratis?',
    antwoord: 'Ja. Rondom het gebouw zijn ruim voldoende gratis parkeerplaatsen voor huurders en bezoekers. Er zijn ook elektrische laadpalen aanwezig.',
  },
  {
    vraag: 'Wat is er inbegrepen in de huurprijs?',
    antwoord: 'De maandprijs is volledig all-inclusive: snelle glasvezel internet/WiFi, elektra, verwarming, schoonmaak van gemeenschappelijke ruimtes, gratis parkeren en 24/7 toegang met eigen sleutel. Geen extra servicekosten of verborgen kosten.',
  },
  {
    vraag: 'Waar ligt de Basis precies?',
    antwoord: 'Mr. P.J. Troelstraweg 149, 8919AA Leeuwarden — vlakbij het centrum, uitstekend bereikbaar via de A31. Goed te bereiken vanuit Drachten, Sneek, Harlingen en de rest van Friesland.',
  },
  {
    vraag: 'Hoeveel bedrijven zitten er op de Basis?',
    antwoord: 'Meer dan 25 bedrijven zijn gevestigd op de Basis — van IT-bedrijven, consultants en coaches tot marketingbureaus en ZZP\'ers uit heel Friesland.',
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

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Hero />
      <UspBar />
      <UnitsGrid />
      <VergaderruimteTeaser />
      <OverDeBasis />
      <FotoGrid />
      <LogoCarousel />
      <Testimonials />
      <Faq items={faqItems} />
      <ContactCta />
    </>
  )
}
