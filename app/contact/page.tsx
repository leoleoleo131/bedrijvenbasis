import type { Metadata } from 'next'
import { contact } from '@/data/contact'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact | de Basis Leeuwarden',
  description: 'Neem contact op met de Basis. Bel, mail of stuur een bericht. We reageren binnen één werkdag.',
}

export default function ContactPage() {
  return (
    <>
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
                  <p className="text-muted">Maandag – vrijdag: 08:00 – 17:00</p>
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

      {/* Google Maps */}
      <section className="bg-surface pb-16">
        <div className="container-basis">
          <div className="rounded-card overflow-hidden shadow-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2351.7!2d5.8167!3d53.2015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c8ffe7b3e4a34d%3A0x1a2b3c4d5e6f7890!2sMr.%20P.J.%20Troelstraweg%20149%2C%208919%20AA%20Leeuwarden!5e0!3m2!1snl!2snl!4v1700000000000!5m2!1snl!2snl"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locatie de Basis Leeuwarden"
            />
          </div>
        </div>
      </section>
    </>
  )
}
