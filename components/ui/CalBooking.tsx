'use client'

import { useEffect } from 'react'

export default function CalBooking() {
  useEffect(() => {
    // Cal.com official embed initialization
    ;(function (C: any, A: string, L: string) {
      const p = (a: any, ar: any) => { a.q.push(ar) }
      const d = C.document
      C.Cal = C.Cal || function (...args: any[]) {
        const cal = C.Cal
        if (!cal.loaded) {
          cal.ns = {}
          cal.q = cal.q || []
          d.head.appendChild(d.createElement('script')).src = A
          cal.loaded = true
        }
        if (args[0] === L) {
          const api: any = (...a: any[]) => { p(api, a) }
          const namespace = args[1]
          api.q = api.q || []
          if (typeof namespace === 'string') {
            cal.ns[namespace] = cal.ns[namespace] || api
            p(cal.ns[namespace], args)
            p(cal, [L, namespace, ...Array.from(args).slice(2)])
          } else {
            p(cal, args)
          }
          return
        }
        p(cal, args)
      }
    })(window, 'https://app.cal.com/embed/embed.js', 'init')

    const Cal = (window as any).Cal
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
  }, [])

  return (
    <div className="relative">
      <div
        id="cal-booking"
        style={{ width: '100%', height: '700px', overflow: 'scroll' }}
      />
      <style>{`
        a[href^="https://cal.com"]:not([href*="debasis"]),
        a[href^="https://app.cal.com"],
        .cal-embed-badge,
        [data-testid="cal-embed-badge"] {
          display: none !important;
        }
      `}</style>
    </div>
  )
}
