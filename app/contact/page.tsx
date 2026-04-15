import type { Metadata } from 'next'
import { contact } from '@/data/contact'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact | de Basis Leeuwarden',
  description: 'Neem contact op met de Basis. Bel, mail of stuur een bericht. We reageren binnen één werkdag.',
}

export default function ContactPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-basis">
        <h1 className="text-4xl font-bold mb-10">Contact</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* Left: contact info */}
          <div>
            <h2 className="text-xl font-bold mb-6">Neem contact op</h2>
            <p className="text-muted text-sm mb-8">
              Heb je een vraag, wil je een bezichtiging inplannen of meer weten over onze ruimtes?
              We reageren binnen één werkdag.
            </p>

            <div className="space-y-5 text-sm">
              <div>
                <p className="font-medium mb-1">Adres</p>
                <p className="text-muted">{contact.adres}</p>
                <p className="text-muted">{contact.postcode} {contact.stad}</p>
                <p className="text-muted">{contact.provincie}</p>
              </div>

              <div>
                <p className="font-medium mb-1">Telefoon</p>
                <a
                  href={`tel:${contact.telefoonRaw}`}
                  className="text-muted hover:text-black transition-colors"
                >
                  {contact.telefoon}
                </a>
              </div>

              <div>
                <p className="font-medium mb-1">E-mail</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-muted hover:text-black transition-colors"
                >
                  {contact.email}
                </a>
              </div>

              <div>
                <p className="font-medium mb-1">Openingstijden</p>
                <p className="text-muted">Maandag – vrijdag: 08:30 – 17:00</p>
              </div>
            </div>
          </div>

          {/* Right: contact form */}
          <div>
            <h2 className="text-xl font-bold mb-6">Stuur een bericht</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
