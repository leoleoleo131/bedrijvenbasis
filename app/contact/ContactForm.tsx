'use client'

import { useState } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_URL
    if (!endpoint) {
      setState('error')
      return
    }

    setState('submitting')
    const data = new FormData(e.currentTarget)

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setState('success')
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className="bg-primary/10 rounded-card p-8 text-center">
        <h3 className="text-xl font-bold mb-2">Bericht ontvangen!</h3>
        <p className="text-muted text-sm">We nemen binnen één werkdag contact met je op.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="naam" className="block text-sm font-medium mb-1">
            Naam <span className="text-red-500">*</span>
          </label>
          <input
            id="naam"
            name="naam"
            type="text"
            required
            className="w-full border border-surface rounded-btn px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Jan de Vries"
          />
        </div>
        <div>
          <label htmlFor="bedrijf" className="block text-sm font-medium mb-1">
            Bedrijf
          </label>
          <input
            id="bedrijf"
            name="bedrijf"
            type="text"
            className="w-full border border-surface rounded-btn px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Mijn Bedrijf BV"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            E-mail <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full border border-surface rounded-btn px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="jan@voorbeeld.nl"
          />
        </div>
        <div>
          <label htmlFor="telefoon" className="block text-sm font-medium mb-1">
            Telefoon
          </label>
          <input
            id="telefoon"
            name="telefoon"
            type="tel"
            className="w-full border border-surface rounded-btn px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="+31 6 12 34 56 78"
          />
        </div>
      </div>

      <div>
        <label htmlFor="bericht" className="block text-sm font-medium mb-1">
          Bericht <span className="text-red-500">*</span>
        </label>
        <textarea
          id="bericht"
          name="bericht"
          required
          rows={5}
          className="w-full border border-surface rounded-btn px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          placeholder="Vertel ons wat je zoekt..."
        />
      </div>

      {state === 'error' && (
        <p className="text-red-500 text-sm">
          Er ging iets mis. Probeer het opnieuw of neem direct contact op.
        </p>
      )}

      <button
        type="submit"
        disabled={state === 'submitting'}
        className="w-full sm:w-auto px-8 py-3 bg-primary rounded-btn font-medium text-sm hover:bg-primary-hover transition-colors disabled:opacity-60"
      >
        {state === 'submitting' ? 'Versturen...' : 'Verstuur bericht'}
      </button>
    </form>
  )
}
