/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.libraryiksu.kg'
      }
    ]
  },
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig
