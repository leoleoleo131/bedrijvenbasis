// Markdown-versies voor AI-agents (ChatGPT, Claude, Perplexity lezen liever
// markdown en voeren geen JavaScript uit). Statische export → we schrijven de
// bestanden bij de build weg in public/, zodat /blog/<slug>.md en /index.md
// naast de HTML bestaan. Draait als `prebuild`.
import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const root = process.cwd()
const bron = path.join(root, 'content/blog')
const doel = path.join(root, 'public/blog')
const site = 'https://bedrijvenbasis.nl'

fs.mkdirSync(doel, { recursive: true })

let n = 0
for (const f of fs.readdirSync(bron).filter((x) => x.endsWith('.md'))) {
  const { data, content } = matter(fs.readFileSync(path.join(bron, f), 'utf8'))
  const slug = data.slug || f.replace(/\.md$/, '')
  const kop = [
    '---',
    `title: ${JSON.stringify(data.title ?? '')}`,
    `description: ${JSON.stringify(data.meta_description ?? '')}`,
    `date: ${data.date ?? ''}`,
    `canonical: ${site}/blog/${slug}`,
    '---',
    '',
  ].join('\n')
  fs.writeFileSync(path.join(doel, `${slug}.md`), kop + content.trimStart())
  n++
}

// index.md = de llms.txt: dezelfde samenvatting, op het pad dat agents proberen.
const llms = path.join(root, 'public/llms.txt')
if (fs.existsSync(llms)) fs.copyFileSync(llms, path.join(root, 'public/index.md'))

console.log(`markdown-export: ${n} blog(s) → public/blog/*.md, plus public/index.md`)
