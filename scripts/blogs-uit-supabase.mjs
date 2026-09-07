// Haalt gepubliceerde blogs van De Basis uit Supabase (view `site_blogs`) en
// schrijft ze als markdown in content/blog/, in hetzelfde formaat als de
// handgeschreven blogs. Draait als prebuild vóór markdown-export.mjs.
//
// - Alleen status 'gepubliceerd' komt via de view binnen; concepten nooit.
// - Bestaande repo-blogs met dezelfde slug worden niet overschreven.
// - Faalt Supabase, dan bouwt de site gewoon met wat er lokaal staat.
import fs from 'node:fs'
import path from 'node:path'

const SUPABASE_URL = 'https://hskdbhlharwmkdhhqdab.supabase.co'
const PUBLISHABLE_KEY = 'sb_publishable_8nYvS1P9BmfvAi7ckU7miQ_AKAizPCZ' // publiek, alleen lezen via RLS/view
const KLANT_SLUG = 'debasis'

const doel = path.join(process.cwd(), 'content/blog')
fs.mkdirSync(doel, { recursive: true })

const q = (s) => JSON.stringify(String(s ?? ''))

try {
  const url = `${SUPABASE_URL}/rest/v1/site_blogs?klant_slug=eq.${KLANT_SLUG}&select=slug,titel,meta_description,body_markdown,publiceer_op,faq&order=publiceer_op.desc`
  const res = await fetch(url, { headers: { apikey: PUBLISHABLE_KEY, Authorization: `Bearer ${PUBLISHABLE_KEY}` } })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const blogs = await res.json()

  const bestaand = new Set(
    fs.readdirSync(doel).filter((f) => f.endsWith('.md')).map((f) => {
      const m = fs.readFileSync(path.join(doel, f), 'utf8').match(/^slug:\s*"?([^"\n]+)"?/m)
      return m ? m[1] : f.replace(/\.md$/, '')
    }),
  )

  let n = 0
  for (const b of blogs) {
    if (!b.slug || !b.body_markdown || bestaand.has(b.slug)) continue
    const datum = (b.publiceer_op ?? '').slice(0, 10)
    const faq = Array.isArray(b.faq) && b.faq.length
      ? '\n\n## Veelgestelde vragen\n\n' + b.faq.map((f) => `### ${f.vraag}\n\n${f.antwoord}`).join('\n\n')
      : ''
    const md = [
      '---',
      `title: ${q(b.titel)}`,
      `meta_title: ${q(b.titel)}`,
      `meta_description: ${q(b.meta_description)}`,
      `slug: ${q(b.slug)}`,
      `date: ${q(datum)}`,
      'author: "Bedrijfsverzamelgebouw de Basis"',
      '---',
      '',
      b.body_markdown.trim() + faq,
      '',
    ].join('\n')
    fs.writeFileSync(path.join(doel, `${b.slug}.md`), md)
    n++
  }
  console.log(`blogs-uit-supabase: ${blogs.length} gepubliceerd in Supabase, ${n} nieuw weggeschreven`)
} catch (e) {
  console.warn(`blogs-uit-supabase: overgeslagen (${e.message}) — bouw gaat door met lokale blogs`)
}
