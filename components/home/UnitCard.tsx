import Badge from '@/components/ui/Badge'
import { Unit } from '@/data/units'

type Props = {
  unit: Unit
  onClick: (unit: Unit) => void
}

export default function UnitCard({ unit, onClick }: Props) {
  return (
    <div
      className="bg-white rounded-card shadow-card p-6 flex flex-col gap-3 cursor-pointer hover:shadow-lg transition-shadow"
      onClick={() => onClick(unit)}
    >
      <div className="flex justify-between items-start">
        <h3 className="font-semibold text-base">{unit.naam}</h3>
        <Badge status={unit.status} />
      </div>
      <div className="flex flex-wrap gap-3 text-sm text-muted">
        <span>{unit.oppervlakte} m²</span>
        <span>·</span>
        <span>{unit.personen}</span>
        <span>·</span>
        <span className="capitalize">{unit.verdieping.replace(/-/g, ' ')}</span>
      </div>
      <p className="text-2xl font-semibold">
        € {unit.prijs.toLocaleString('nl-NL')}
        <span className="text-sm font-normal text-muted">/maand</span>
      </p>
      <p className="text-sm text-muted line-clamp-2">{unit.omschrijving}</p>
      <span className="mt-auto text-sm font-medium text-black hover:text-primary transition-colors">
        Meer informatie →
      </span>
    </div>
  )
}
