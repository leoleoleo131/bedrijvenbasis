export type UnitStatus = 'beschikbaar' | 'verhuurd'

export type Unit = {
  id: string
  naam: string
  oppervlakte: number
  prijs: number
  status: UnitStatus
  verdieping: 'begane-grond' | 'bovenverdieping'
  omschrijving: string
  faciliteiten: string[]
  personen: string
  foto?: string
}

export const units: Unit[] = [
  {
    id: 'unit-4',
    naam: 'Unit 4',
    oppervlakte: 16,
    prijs: 375,
    status: 'beschikbaar',
    verdieping: 'begane-grond',
    omschrijving: 'Nette kantoorruimte met veel lichtinval — ideaal voor 1-2 personen.',
    faciliteiten: ['Internet/WiFi', 'Veel lichtinval', 'Gemeubileerd beschikbaar', 'Gratis parkeren', '24/7 toegang'],
    personen: '1-2 personen',
  },
  {
    id: 'unit-7',
    naam: 'Unit 7',
    oppervlakte: 50,
    prijs: 795,
    status: 'verhuurd',
    verdieping: 'begane-grond',
    omschrijving: 'Ruime kantoorunit met veel mogelijkheden — ideaal voor een team.',
    faciliteiten: ['Internet/WiFi', 'Veel lichtinval', 'Gemeubileerd beschikbaar', 'Gratis parkeren', '24/7 toegang'],
    personen: '4-6 personen',
  },
  {
    id: 'unit-11',
    naam: 'Unit 11',
    oppervlakte: 7,
    prijs: 295,
    status: 'verhuurd',
    verdieping: 'begane-grond',
    omschrijving: "Compacte kantoorruimte — perfect voor een ZZP'er of thuiswerker.",
    faciliteiten: ['Internet/WiFi', 'Gemeubileerd beschikbaar', 'Gratis parkeren', '24/7 toegang'],
    personen: '1 persoon',
  },
  {
    id: 'unit-13',
    naam: 'Unit 13',
    oppervlakte: 12,
    prijs: 355,
    status: 'beschikbaar',
    verdieping: 'begane-grond',
    omschrijving: 'Prettige kantoorruimte met goede lichtinval en rustige ligging.',
    faciliteiten: ['Internet/WiFi', 'Gemeubileerd beschikbaar', 'Gratis parkeren', '24/7 toegang'],
    personen: '1-2 personen',
  },
  {
    id: 'unit-14',
    naam: 'Unit 14',
    oppervlakte: 8,
    prijs: 295,
    status: 'beschikbaar',
    verdieping: 'begane-grond',
    omschrijving: "Efficiënte werkruimte voor de ZZP'er die professioneel wil werken.",
    faciliteiten: ['Internet/WiFi', 'Gemeubileerd beschikbaar', 'Gratis parkeren', '24/7 toegang'],
    personen: '1 persoon',
  },
  {
    id: 'unit-23',
    naam: 'Unit 23',
    oppervlakte: 60,
    prijs: 825,
    status: 'beschikbaar',
    verdieping: 'bovenverdieping',
    omschrijving: 'De grootste unit van de Basis — ruim en licht, ideaal voor een groeiend team.',
    faciliteiten: ['Internet/WiFi', 'Veel lichtinval', 'Uitzicht', 'Gemeubileerd beschikbaar', 'Gratis parkeren', '24/7 toegang'],
    personen: '5-8 personen',
  },
]
