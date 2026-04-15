import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative h-[600px] md:h-[680px] flex items-center">
      <Image
        src="/images/gebouw_1.jpg"
        alt="Bedrijfsverzamelgebouw de Basis Leeuwarden"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative container-basis text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl leading-tight mb-6">
          Kantoorruimte huren in Leeuwarden —<br className="hidden md:block" />
          all-inclusive, flexibel
        </h1>
        <p className="text-lg text-white/80 max-w-xl mb-8">
          Meer dan 30 bedrijven kozen al voor de Basis. Flexibel contract, all-inclusive prijs, gratis parkeren en 24/7 toegang.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button href="/kantoren/" variant="primary">Bekijk beschikbare kantoren</Button>
          <Button href="/vergaderruimte/" variant="ghost-light">Reserveer Vergaderruimte</Button>
        </div>
      </div>
    </section>
  )
}
