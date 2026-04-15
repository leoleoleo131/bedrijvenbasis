import type { Metadata } from 'next'
import { getPost, getAllPosts } from '@/lib/blog'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug)
  if (!post) return {}
  return {
    title: post.meta_title,
    description: post.meta_description,
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  if (!post) notFound()

  return (
    <article className="section-padding bg-white">
      <div className="container-basis max-w-2xl">
        <p className="text-xs text-muted mb-4">{post.date}{post.author ? ` · ${post.author}` : ''}</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-8">{post.title}</h1>
        <div className="prose prose-slate max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </article>
  )
}
