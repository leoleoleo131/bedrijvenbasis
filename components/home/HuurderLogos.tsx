import Image from 'next/image'
import { huurders } from '@/data/huurders'

export default function HuurderLogos() {
  const actief = huurders.filter(h => h.actief)
  return (
    <section className="py-12 bg-surface">
      <div className="container-basis">
        <p className="text-center text-sm font-medium text-muted uppercase tracking-wider mb-8">
          Meer dan 20 bedrijven kozen voor de Basis
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10">
          {actief.map(h => (
            <div
              key={h.naam}
              className="relative h-10 w-28 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
            >
              <Image src={h.logo} alt={h.naam} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
