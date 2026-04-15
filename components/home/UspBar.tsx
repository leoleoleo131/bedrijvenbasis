import { Wifi, CalendarDays, ParkingSquare, KeyRound } from 'lucide-react'

const usps = [
  { icon: Wifi, title: 'All-inclusive', text: 'WiFi, energie, schoonmaak, heffingen — alles zit erin' },
  { icon: CalendarDays, title: 'Flexibel contract', text: 'Jaarcontract of flexibel, jij kiest' },
  { icon: ParkingSquare, title: 'Gratis parkeren', text: 'Ruim parkeren + laadpalen beschikbaar' },
  { icon: KeyRound, title: '24/7 toegang', text: 'Met eigen sleutel altijd naar binnen' },
]

export default function UspBar() {
  return (
    <section className="bg-surface py-12">
      <div className="container-basis grid grid-cols-2 lg:grid-cols-4 gap-8">
        {usps.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Icon size={22} className="text-black" />
            </div>
            <h3 className="font-semibold text-sm">{title}</h3>
            <p className="text-muted text-sm">{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
