'use client'
import { useState } from 'react'
import { units } from '@/data/units'
import { Unit } from '@/data/units'
import UnitCard from './UnitCard'
import UnitModal from './UnitModal'

export default function UnitsGrid() {
  const [selected, setSelected] = useState<Unit | null>(null)
  return (
    <section className="section-padding bg-white">
      <div className="container-basis">
        <h2 className="text-3xl font-bold mb-2">Beschikbare kantoorruimtes</h2>
        <p className="text-muted mb-10">Klik op een unit voor meer informatie.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {units.filter(u => u.status === 'beschikbaar').map(unit => (
            <UnitCard key={unit.id} unit={unit} onClick={setSelected} />
          ))}
        </div>
      </div>
      <UnitModal unit={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
