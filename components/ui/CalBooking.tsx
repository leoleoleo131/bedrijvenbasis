'use client'

import { useEffect } from 'react'

export default function CalBooking() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://app.cal.com/embed/embed.js'
    script.async = true
    script.onload = () => {
      // @ts-ignore
      const Cal = window.Cal
      if (!Cal) return
      Cal('init', 'debasis', { origin: 'https://cal.com' })
      Cal.ns['debasis']('inline', {
        elementOrSelector: '#cal-booking',
        calLink: 'debasis',
        layout: 'month_view',
      })
      Cal.ns['debasis']('ui', {
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    }
    document.head.appendChild(script)
    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <div
      id="cal-booking"
      style={{ width: '100%', height: '700px', overflow: 'scroll' }}
    />
  )
}
