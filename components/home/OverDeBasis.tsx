import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function OverDeBasis() {
  return (
    <section className="section-padding bg-white">
      <div className="container-basis grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Meer dan een kantoor — een community</h2>
          <p className="text-muted mb-4">
            De Basis is een plek waar ondernemers elkaar ontmoeten, samenwerken en groeien.
            Meer dan 20 bedrijven van allerlei sectoren zijn hier gevestigd.
          </p>
          <p className="text-muted mb-8">
            Gelegen aan de Mr. P.J. Troelstraweg 149 in Leeuwarden — vlakbij het centrum en
            uitstekend bereikbaar via de A31.
          </p>
          <Button href="/over-de-basis/" variant="ghost-dark">Meer over ons</Button>
        </div>
        <div className="relative h-72 md:h-96 rounded-card overflow-hidden">
          <Image
            src="/images/impressie3.jpg"
            alt="Gang de Basis met logo op de vloer"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
