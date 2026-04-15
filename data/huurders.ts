export type Huurder = {
  naam: string
  logo: string
  website?: string
  beschrijving?: string
  actief: boolean
}

export const huurders: Huurder[] = [
  { naam: 'JPZ', logo: '/images/jpz.png', actief: true },
  { naam: 'NoardCode', logo: '/images/noardcode.png', actief: true },
  { naam: 'Krik', logo: '/images/krik.png', actief: true },
  { naam: 'CYB', logo: '/images/cyb.png', actief: true },
]
