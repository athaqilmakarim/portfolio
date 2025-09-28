/** @type {import('next').NextConfig} */
const nextConfig = {
  // Basic Next.js configuration for Vercel
  images: {
    unoptimized: true
  },
  // Disable experimental features that might cause issues
  experimental: {},
  // Ensure proper static generation
  trailingSlash: false,
  // Disable CSS optimization that requires critters
  optimizeCss: false
}

module.exports = nextConfig
