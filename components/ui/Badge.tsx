type BadgeProps = {
  status: 'beschikbaar' | 'verhuurd'
  beschikbaarVanaf?: string
}

export default function Badge({ status, beschikbaarVanaf }: BadgeProps) {
  const isBinnenkortBeschikbaar = status === 'beschikbaar' && beschikbaarVanaf

  return (
    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium text-white ${
      isBinnenkortBeschikbaar ? 'bg-upcoming' : status === 'beschikbaar' ? 'bg-available' : 'bg-rented'
    }`}>
      {isBinnenkortBeschikbaar ? beschikbaarVanaf : status === 'beschikbaar' ? 'Beschikbaar' : 'Verhuurd'}
    </span>
  )
}
