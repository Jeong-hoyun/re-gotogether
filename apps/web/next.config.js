/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "cdn.imweb.me",
      "go-together-bucket.s3.ap-northeast-2.amazonaws.com",
    ],
    // domains: ['images.unsplash.com']
  },
}

module.exports = nextConfig
