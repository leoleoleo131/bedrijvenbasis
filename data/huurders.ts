export type Huurder = {
  naam: string
  logo: string
  website?: string
  beschrijving?: string
  actief: boolean
}

export const huurders: Huurder[] = [
  { naam: 'NoardCode',  logo: '/images/logos/logo-noardcode.webp',  actief: true },
  { naam: 'Flowzz',    logo: '/images/logos/logo-flowzz.webp',      actief: true },
  { naam: 'Hacklab',   logo: '/images/logos/logo-hacklab.webp',      actief: true },
  { naam: 'EQ Finance',logo: '/images/logos/logo-eq-finance.webp',   actief: true },
  { naam: 'Imazzo',    logo: '/images/logos/logo-imazzo.webp',        actief: true },
  { naam: 'PFS',       logo: '/images/logos/logo-pfs.webp',           actief: true },
  { naam: 'Zesay',     logo: '/images/logos/logo-zesay.webp',         actief: true },
  // Namen nog onbekend — pas aan zodra je ze herkent
  { naam: '?',         logo: '/images/logos/logo-a.webp',             actief: true },
  { naam: '?',         logo: '/images/logos/logo-b.webp',             actief: true },
  { naam: '?',         logo: '/images/logos/logo-c.webp',             actief: true },
  { naam: '?',         logo: '/images/logos/logo-d.webp',             actief: true },
  { naam: '?',         logo: '/images/logos/logo-e.webp',             actief: true },
  { naam: '?',         logo: '/images/logos/logo-f.webp',             actief: true },
  { naam: '?',         logo: '/images/logos/logo-g.webp',             actief: true },
  { naam: '?',         logo: '/images/logos/logo-h.webp',             actief: true },
  { naam: '?',         logo: '/images/logos/logo-i.webp',             actief: true },
]
