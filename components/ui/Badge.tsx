type BadgeProps = {
  status: 'beschikbaar' | 'verhuurd'
}

export default function Badge({ status }: BadgeProps) {
  return (
    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium text-white ${
      status === 'beschikbaar' ? 'bg-available' : 'bg-rented'
    }`}>
      {status === 'beschikbaar' ? 'Beschikbaar' : 'Verhuurd'}
    </span>
  )
}
