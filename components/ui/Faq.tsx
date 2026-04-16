'use client'
import { useState } from 'react'
import type React from 'react'
import { ChevronDown } from 'lucide-react'

export type FaqItem = {
  vraag: string
  antwoord: string | React.ReactNode
}

function FaqRow({ vraag, antwoord }: FaqItem) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-black/10 last:border-0">
      <button
        className="w-full flex items-center justify-between py-4 text-left gap-4"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-medium text-sm md:text-base">{vraag}</span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 text-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="text-sm text-muted leading-relaxed pb-4 pr-8">{antwoord}</div>
      )}
    </div>
  )
}

export default function Faq({ items, title = 'Veelgestelde vragen' }: { items: FaqItem[]; title?: string }) {
  return (
    <section className="section-padding bg-surface">
      <div className="container-basis max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">{title}</h2>
        <div className="bg-white rounded-card shadow-card divide-y divide-black/5 px-6">
          {items.map((item) => (
            <FaqRow key={item.vraag} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
