import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog | de Basis Leeuwarden',
  description: 'Tips en inspiratie voor ondernemers in Leeuwarden. Blog van Bedrijfsverzamelgebouw de Basis.',
}

export default function BlogPage() {
  const posts = getAllPosts()
  return (
    <section className="section-padding bg-white">
      <div className="container-basis">
        <h1 className="text-4xl font-bold mb-10">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}/`}
              className="block bg-white border border-surface rounded-card p-6 hover:shadow-card transition-shadow">
              <p className="text-xs text-muted mb-3">{post.date}</p>
              <h2 className="font-semibold text-base mb-2 leading-snug">{post.title}</h2>
              <p className="text-sm text-muted line-clamp-3">{post.meta_description}</p>
              <span className="mt-4 inline-block text-sm font-medium text-black hover:text-primary">
                Lees meer →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
