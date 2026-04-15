const reviews = [
  {
    naam: 'Kevin Tadema',
    functie: 'Local Guide',
    tekst: 'Wij hebben meerdere bedrijfsverzamelgebouwen gehad maar de Basis was verreweg de beste! Alles wordt snel opgepakt, feedback wordt serieus genomen en de verhuurder neemt echt moeite om alles mooi en in orde te houden.',
    sterren: 5,
  },
  {
    naam: 'Marcel Klaver',
    functie: 'NoardCode',
    tekst: 'We zitten als NoardCode inmiddels twee jaar in de Basis. Het bevalt ons erg goed en we zijn zeer tevreden over de verhuurder. Het contact is makkelijk, snel en ze zijn altijd bereid mee te denken.',
    sterren: 5,
  },
  {
    naam: 'Chris Hagg',
    functie: 'Huurder',
    tekst: 'Uitstekende keus om ons bedrijf hier te vestigen. Fijne kantoren, flexibiliteit en alles goed op orde. Goede faciliteiten en fijne beheerder die afspraken nakomt. Bereikbaarheid per fiets, OV en auto is ook perfect.',
    sterren: 5,
  },
]

function Sterren({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5 mb-3" aria-label={`${n} sterren`}>
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-primary fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-basis">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
          Wat huurders zeggen
        </h2>
        <p className="text-muted text-sm text-center mb-10">
          Echte ervaringen van ondernemers die bij de Basis werken
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map(r => (
            <div
              key={r.naam}
              className="bg-surface rounded-card p-6 flex flex-col"
            >
              <Sterren n={r.sterren} />
              <p className="text-sm text-muted leading-relaxed flex-1 mb-5">
                &ldquo;{r.tekst}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-sm">{r.naam}</p>
                <p className="text-xs text-muted">{r.functie}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
