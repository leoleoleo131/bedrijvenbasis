'use client'
import { Unit } from '@/data/units'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { X, Check } from 'lucide-react'
import { contact } from '@/data/contact'

type Props = {
  unit: Unit | null
  onClose: () => void
}

export default function UnitModal({ unit, onClose }: Props) {
  if (!unit) return null
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-card max-w-lg w-full p-8 relative max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-muted hover:text-black">
          <X size={20} />
        </button>
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl font-semibold">{unit.naam}</h2>
          <Badge status={unit.status} />
        </div>
        <div className="flex gap-4 text-sm text-muted mb-4">
          <span>{unit.oppervlakte} m²</span>
          <span>·</span>
          <span>{unit.personen}</span>
        </div>
        <p className="text-2xl font-semibold mb-4">
          € {unit.prijs.toLocaleString('nl-NL')}
          <span className="text-sm font-normal text-muted">/maand</span>
        </p>
        <p className="text-sm text-muted mb-6">{unit.omschrijving}</p>
        {unit.faciliteiten.length > 0 && (
          <>
            <h4 className="font-semibold text-sm mb-3">Faciliteiten</h4>
            <ul className="grid grid-cols-2 gap-2 mb-8">
              {unit.faciliteiten.map(f => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted">
                  <Check size={14} className="text-available flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </>
        )}
        {unit.status === 'beschikbaar' ? (
          <Button href={`/contact/?unit=${unit.id}`} variant="primary" className="w-full justify-center">
            Boek een bezichtiging
          </Button>
        ) : (
          <p className="text-sm text-muted text-center">
            Deze unit is momenteel verhuurd.{' '}
            <a href={`tel:${contact.telefoonRaw}`} className="underline">Bel ons</a> voor beschikbaarheid.
          </p>
        )}
      </div>
    </div>
  )
}
