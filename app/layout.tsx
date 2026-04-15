import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { contact } from '@/data/contact'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bedrijvenbasis.nl'),
  title: {
    default: 'Bedrijfsverzamelgebouw de Basis Leeuwarden',
    template: '%s | de Basis',
  },
  description: 'Kantoorruimte huren in Leeuwarden. Flexibele contracten, all-inclusive prijzen, gratis parkeren. Meer dan 20 bedrijven kozen voor de Basis.',
  openGraph: {
    images: ['/images/post_headerfoto11.jpg'],
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.bedrijvenbasis.nl/#organization',
  name: 'Bedrijfsverzamelgebouw de Basis',
  alternateName: 'de Basis Leeuwarden',
  url: 'https://www.bedrijvenbasis.nl',
  telephone: contact.telefoonRaw,
  email: contact.email,
  description: 'Modern bedrijfsverzamelgebouw in Leeuwarden met flexibele kantoorruimtes van 7–60 m², vergaderruimte en virtueel kantoor. All-inclusive tarieven, maandelijks opzegbaar, gratis parkeren.',
  image: 'https://www.bedrijvenbasis.nl/images/post_headerfoto11.jpg',
  logo: { '@type': 'ImageObject', url: 'https://www.bedrijvenbasis.nl/images/basis_logo.svg' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: contact.adres,
    postalCode: contact.postcode,
    addressLocality: contact.stad,
    addressRegion: 'Friesland',
    addressCountry: 'NL',
  },
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'],
    opens: '08:00',
    closes: '17:00',
  }],
  priceRange: '€€',
  sameAs: [
    'https://www.linkedin.com/company/73222085',
    'https://share.google/MPTpedkHzPm7ZiNLa',
    'https://www.facebook.com/bedrijvenbasis',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600&family=Roboto+Slab:wght@400&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
