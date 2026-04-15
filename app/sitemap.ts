import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

const baseUrl = 'https://www.bedrijvenbasis.nl'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: baseUrl, priority: 1.0 },
    { url: `${baseUrl}/kantoren/`, priority: 0.9 },
    { url: `${baseUrl}/vergaderruimte/`, priority: 0.9 },
    { url: `${baseUrl}/virtueel-kantoor/`, priority: 0.8 },
    { url: `${baseUrl}/huurders/`, priority: 0.6 },
    { url: `${baseUrl}/over-de-basis/`, priority: 0.6 },
    { url: `${baseUrl}/contact/`, priority: 0.7 },
    { url: `${baseUrl}/blog/`, priority: 0.7 },
  ].map(p => ({ ...p, lastModified: new Date(), changeFrequency: 'monthly' as const }))

  const blogPages = getAllPosts().map(post => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: new Date(post.date || Date.now()),
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }))

  return [...staticPages, ...blogPages]
}
