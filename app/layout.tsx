import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bedrijfsverzamelgebouw de Basis Leeuwarden',
  description: 'Kantoorruimte huren in Leeuwarden. Flexibele contracten, all-inclusive prijzen, gratis parkeren.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600&family=Roboto+Slab:wght@400&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
