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
      <body>{children}</body>
    </html>
  )
}
