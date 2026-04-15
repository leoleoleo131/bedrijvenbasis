/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/dagkantoor',
        destination: '/kantoren',
        permanent: true,
      },
      {
        source: '/dagkantoor/',
        destination: '/kantoren/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
