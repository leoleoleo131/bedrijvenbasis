export const contact = {
  telefoon: '(+31) 58 203 00 88',
  telefoonRaw: '+31582030088',
  whatsapp: '+31615141548',
  whatsappUrl: 'https://wa.me/31615141548',
  email: 'info@bedrijvenbasis.nl',
  adres: 'Mr. P.J. Troelstraweg 149',
  postcode: '8919AA',
  stad: 'Leeuwarden',
  provincie: 'Friesland',
  get volledigAdres() {
    return `${this.adres}, ${this.postcode} ${this.stad}`
  },
}
