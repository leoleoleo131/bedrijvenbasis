import Button from '@/components/ui/Button'
import { contact } from '@/data/contact'

export default function ContactCta() {
  return (
    <section className="py-20 bg-primary">
      <div className="container-basis text-center">
        <h2 className="text-3xl font-bold mb-4">Klaar om te starten?</h2>
        <p className="text-black/70 mb-8 max-w-md mx-auto">
          Plan een vrijblijvende bezichtiging — binnen één werkdag reactie.
        </p>
        <Button href="/contact/" variant="ghost-dark">Neem contact op</Button>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-6 text-sm">
          <a href={`tel:${contact.telefoonRaw}`} className="font-medium hover:underline">
            ☎ {contact.telefoon}
          </a>
          <a href={`mailto:${contact.email}`} className="font-medium hover:underline">
            ✉ {contact.email}
          </a>
        </div>
      </div>
    </section>
  )
}
