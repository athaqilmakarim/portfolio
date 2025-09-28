/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: 'export' for Vercel deployment
  // Vercel handles static generation automatically
  images: {
    domains: [],
    unoptimized: false
  },
  // Enable static optimization
  trailingSlash: false,
  // Optimize for production
  compress: true,
  // Enable experimental features
  experimental: {
    optimizeCss: true
  }
}

module.exports = nextConfig
