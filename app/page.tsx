import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import UspBar from '@/components/home/UspBar'
import UnitsGrid from '@/components/home/UnitsGrid'
import VergaderruimteTeaser from '@/components/home/VergaderruimteTeaser'
import OverDeBasis from '@/components/home/OverDeBasis'
import HuurderLogos from '@/components/home/HuurderLogos'
import ContactCta from '@/components/home/ContactCta'

export const metadata: Metadata = {
  title: 'Kantoorruimte huren Leeuwarden | Bedrijfsverzamelgebouw de Basis',
  description: 'Kantoorruimte huren in Leeuwarden. All-inclusive, flexibel maandelijks contract, gratis parkeren & WiFi. Vergader- en virtuele kantoren beschikbaar.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <UspBar />
      <UnitsGrid />
      <VergaderruimteTeaser />
      <OverDeBasis />
      <HuurderLogos />
      <ContactCta />
    </>
  )
}
