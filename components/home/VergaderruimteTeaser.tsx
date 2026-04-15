import Image from 'next/image'
import Button from '@/components/ui/Button'
import { Monitor, Video, Coffee, ParkingSquare } from 'lucide-react'

const specs = [
  { icon: Monitor, text: 'LCD scherm met HDMI & VGA' },
  { icon: Video, text: 'Hybride vergaderingscamera' },
  { icon: Coffee, text: 'Catering op aanvraag' },
  { icon: ParkingSquare, text: 'Gratis parkeren' },
]

export default function VergaderruimteTeaser() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-basis grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative h-72 md:h-96 rounded-card overflow-hidden">
          <Image
            src="/images/WhatsApp-Image-2025-09-18-at-10.52.18-2.jpeg"
            alt="Vergaderruimte de Basis Leeuwarden"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div className="w-1 h-12 bg-primary mb-6" />
          <h2 className="text-3xl font-bold mb-4">Vergaderruimte huren in Leeuwarden</h2>
          <p className="text-muted mb-6">
            Moderne vergaderruimte van 35m² — volledig uitgerust voor hybride vergaderen.
            Per dagdeel of hele dag te reserveren.
          </p>
          <ul className="space-y-3 mb-8">
            {specs.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-sm text-muted">
                <Icon size={16} className="text-black flex-shrink-0" />
                {text}
              </li>
            ))}
          </ul>
          <Button href="/vergaderruimte/" variant="primary">Reserveer Vergaderruimte</Button>
        </div>
      </div>
    </section>
  )
}
