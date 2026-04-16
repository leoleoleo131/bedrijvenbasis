import Link from 'next/link'
import Image from 'next/image'
import { contact } from '@/data/contact'

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container-basis py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <Image src="/images/basis_logo_wit.svg" alt="de Basis" width={100} height={34} className="mb-4" />
          <p className="text-muted text-sm leading-relaxed">
            Bedrijfsverzamelgebouw in Leeuwarden.<br />
            All-inclusive kantoorruimte voor ondernemers.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-mid">Navigatie</h4>
          <ul className="space-y-2 text-sm text-muted">
            {[
              ['Kantoorruimtes', '/kantoren/'],
              ['Vergaderruimte', '/vergaderruimte/'],
              ['Virtueel Kantoor', '/virtueel-kantoor/'],
              ['Huurders', '/huurders/'],
              ['Over de Basis', '/over-de-basis/'],
              ['Contact', '/contact/'],
              ['Blog', '/blog/'],
            ].map(([label, href]) => (
              <li key={href}><Link href={href} className="hover:text-white transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-mid">Contact</h4>
          <ul className="space-y-2 text-sm text-muted">
            <li>{contact.adres}</li>
            <li>{contact.postcode} {contact.stad}</li>
            <li><a href={`tel:${contact.telefoonRaw}`} className="hover:text-white">{contact.telefoon}</a></li>
            <li><a href={contact.whatsappUrl} className="hover:text-white">WhatsApp: {contact.whatsapp}</a></li>
            <li><a href={`mailto:${contact.email}`} className="hover:text-white">{contact.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4">
        <p className="container-basis text-xs text-muted">
          © {new Date().getFullYear()} Bedrijfsverzamelgebouw de Basis — Leeuwarden
        </p>
      </div>
    </footer>
  )
}
