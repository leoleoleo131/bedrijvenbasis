import Image from 'next/image'

// Voeg foto's toe in public/images/grid/ om ze hier te tonen
// Bestandsnamen: grid1.jpg t/m grid8.jpg (of .webp)
const fotos = [
  { src: '/images/pand.webp', alt: 'Bedrijfsverzamelgebouw de Basis exterieur' },
  { src: '/images/office_1.jpg', alt: 'Kantoor de Basis interieur' },
  { src: '/images/office_2.jpg', alt: 'Werkruimte de Basis' },
  { src: '/images/WhatsApp-Image-2025-09-18-at-10.52.17-11.jpeg', alt: 'Gang de Basis' },
  { src: '/images/WhatsApp-Image-2025-09-18-at-10.52.18-2.jpeg', alt: 'Vergaderruimte de Basis' },
  { src: '/images/WhatsApp-Image-2025-09-18-at-10.52.18-3.jpeg', alt: 'Kantoorruimte de Basis' },
  { src: '/images/WhatsApp-Image-2025-09-18-at-10.52.18-4.jpeg', alt: 'Werkplek de Basis' },
  { src: '/images/WhatsApp-Image-2025-09-18-at-10.52.17-12.jpeg', alt: 'Ruimte de Basis' },
]

export default function FotoGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container-basis">
        <h2 className="text-2xl font-bold mb-2 text-center">Een kijkje op de Basis</h2>
        <p className="text-sm text-muted text-center mb-8">Van buiten tot binnen — zo ziet de Basis eruit</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {fotos.map((foto, i) => (
            <div
              key={i}
              className={`relative rounded-card overflow-hidden ${i === 0 || i === 4 ? 'col-span-2 row-span-2 h-64 md:h-80' : 'h-32 md:h-40'}`}
            >
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
