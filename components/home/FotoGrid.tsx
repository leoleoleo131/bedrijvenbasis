import Image from 'next/image'

// Bento grid: grid1 + grid2 groot (diagonaal), grid3–8 klein
// Layout desktop (4 kolommen):
//   [  grid1 (2×2)  ][ grid3 ][ grid4 ]
//   [               ][ grid5 ][ grid6 ]
//   [ grid7 ][ grid8 ][  grid2 (2×2)  ]
//   [       ][       ][               ]

const fotos = [
  { src: '/images/grid/grid1.webp', alt: 'Bedrijfsverzamelgebouw de Basis exterieur' },
  { src: '/images/grid/grid3.webp', alt: 'Kantoorruimte de Basis' },
  { src: '/images/grid/grid4.webp', alt: 'Werkruimte de Basis' },
  { src: '/images/grid/grid5.webp', alt: 'Gang de Basis' },
  { src: '/images/grid/grid6.webp', alt: 'Vergaderruimte de Basis' },
  { src: '/images/grid/grid7.webp', alt: 'Kantoorplek de Basis' },
  { src: '/images/grid/grid8.webp', alt: 'Impressie de Basis' },
  { src: '/images/grid/grid2.webp', alt: 'Interieur de Basis Leeuwarden' },
]

export default function FotoGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container-basis">
        <h2 className="text-2xl font-bold mb-2 text-center">Een kijkje op de Basis</h2>
        <p className="text-sm text-muted text-center mb-8">Van buiten tot binnen — zo ziet de Basis eruit</p>

        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
          style={{ gridAutoRows: '160px' }}
        >
          {/* grid1 — groot, linksboven */}
          <div className="col-span-2 row-span-2 relative rounded-card overflow-hidden">
            <Image
              src={fotos[0].src}
              alt={fotos[0].alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* grid3 t/m grid8 — 6 kleine cellen (auto-fill rechts en linksonder) */}
          {fotos.slice(1, 7).map((foto, i) => (
            <div key={i} className="relative rounded-card overflow-hidden">
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}

          {/* grid2 — groot, rechtsonder */}
          <div className="col-span-2 row-span-2 relative rounded-card overflow-hidden">
            <Image
              src={fotos[7].src}
              alt={fotos[7].alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
