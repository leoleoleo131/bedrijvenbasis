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
    status: 'verhuurd',
    verdieping: 'begane-grond',
    omschrijving: 'Nette kantoorruimte met veel lichtinval — ideaal voor 1-2 personen.',
    faciliteiten: ['Internet/WiFi', 'Veel lichtinval', 'Gemeubileerd beschikbaar', 'Gratis parkeren', '24/7 toegang'],
    personen: '1-2 personen',
  },
  {
    id: 'unit-6',
    naam: 'Unit 6',
    oppervlakte: 23,
    prijs: 525,
    status: 'verhuurd',
    verdieping: 'begane-grond',
    omschrijving: 'Ruime kantoorunit met uitstekende lichtinval — perfect voor 1-2 personen die comfortabel willen werken.',
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
    prijs: 350,
    status: 'beschikbaar',
    verdieping: 'begane-grond',
    omschrijving: 'Prettige kantoorruimte met goede lichtinval en rustige ligging. Beschikbaar per 1 november.',
    faciliteiten: ['Internet/WiFi', 'Gemeubileerd beschikbaar', 'Gratis parkeren', '24/7 toegang'],
    personen: '1-2 personen',
  },
  {
    id: 'unit-14',
    naam: 'Unit 14',
    oppervlakte: 8,
    prijs: 295,
    status: 'verhuurd',
    verdieping: 'begane-grond',
    omschrijving: "Efficiënte werkruimte voor de ZZP'er die professioneel wil werken.",
    faciliteiten: ['Internet/WiFi', 'Gemeubileerd beschikbaar', 'Gratis parkeren', '24/7 toegang'],
    personen: '1 persoon',
  },
  {
    id: 'unit-18',
    naam: 'Unit 18',
    oppervlakte: 80,
    prijs: 1600,
    status: 'beschikbaar',
    verdieping: 'begane-grond',
    omschrijving: 'Ruime kantoorruimte vooraan in het pand met een eigen keuken en veel raampartijen. Dit is de eerste ruimte die je vanaf de Troelstraweg ziet. Beschikbaar per 1 april 2027, in overleg eventueel eerder of later.',
    faciliteiten: ['Eigen keuken', 'Veel lichtinval', 'Eigen airco voor verwarmen en koelen', 'Internet/WiFi', 'Gratis parkeren', '24/7 toegang'],
    personen: '6-10 personen',
  },
  {
    id: 'unit-19',
    naam: 'Unit 19',
    oppervlakte: 34,
    prijs: 450,
    status: 'beschikbaar',
    verdieping: 'begane-grond',
    omschrijving: 'Praktische vierkante kantoorruimte, centraal aan de voorkant van het pand. De lichtkoepel in het dak zorgt voor natuurlijk daglicht. Beschikbaar rond 1 april 2027, in overleg eventueel eerder of later.',
    faciliteiten: ['Lichtkoepel', 'Eigen airco voor verwarmen en koelen', 'Internet/WiFi', 'Gratis parkeren', '24/7 toegang'],
    personen: '2-4 personen',
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
  {
    id: 'unit-26',
    naam: 'Unit 26',
    oppervlakte: 19,
    prijs: 450,
    status: 'beschikbaar',
    verdieping: 'bovenverdieping',
    omschrijving: 'Mooie kantoorruimte op de bovenverdieping met veel lichtinval en ruim uitzicht. Beschikbaar per 1 november. De huurprijs is €450 per maand exclusief btw.',
    faciliteiten: ['Internet/WiFi', 'Veel lichtinval', 'Uitzicht', 'Gemeubileerd beschikbaar', 'Gratis parkeren', '24/7 toegang'],
    personen: '1-2 personen',
  },
]
