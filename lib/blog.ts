import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDir = path.join(process.cwd(), 'content/blog')

export type BlogPost = {
  slug: string
  title: string
  meta_title: string
  meta_description: string
  date: string
  author?: string
  content: string
}

export function getAllPosts(): Omit<BlogPost, 'content'>[] {
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'))
  return files
    .map(file => {
      const slug = file.replace(/\.md$/, '')
      const raw = fs.readFileSync(path.join(postsDir, file), 'utf8')
      const { data } = matter(raw)
      return {
        slug: data.slug || slug,
        title: data.title,
        meta_title: data.meta_title || data.title,
        meta_description: data.meta_description || '',
        date: data.date || '',
        author: data.author,
      }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'))
  const file = files.find(f => {
    const raw = fs.readFileSync(path.join(postsDir, f), 'utf8')
    const { data } = matter(raw)
    return (data.slug || f.replace(/\.md$/, '')) === slug
  })
  if (!file) return null

  const raw = fs.readFileSync(path.join(postsDir, file), 'utf8')
  const { data, content } = matter(raw)
  const processed = await remark().use(html).process(content)

  return {
    slug,
    title: data.title,
    meta_title: data.meta_title || data.title,
    meta_description: data.meta_description || '',
    date: data.date || '',
    author: data.author,
    content: processed.toString(),
  }
}
