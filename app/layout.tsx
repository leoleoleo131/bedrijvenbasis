import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { contact } from '@/data/contact'

export const metadata: Metadata = {
  title: {
    default: 'Bedrijfsverzamelgebouw de Basis Leeuwarden',
    template: '%s | de Basis',
  },
  description: 'Kantoorruimte huren in Leeuwarden. Flexibele contracten, all-inclusive prijzen, gratis parkeren. Meer dan 30 bedrijven kozen voor de Basis.',
  openGraph: {
    images: ['/images/gebouw_1.jpg'],
    locale: 'nl_NL',
    type: 'website',
  },
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Bedrijfsverzamelgebouw de Basis',
  url: 'https://www.bedrijvenbasis.nl',
  telephone: contact.telefoonRaw,
  email: contact.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: contact.adres,
    postalCode: contact.postcode,
    addressLocality: contact.stad,
    addressCountry: 'NL',
  },
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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
