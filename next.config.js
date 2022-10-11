/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.imweb.me"],
    // domains: ['images.unsplash.com']
  },
  env: {
    API_URL: process.env.API_URL,
  },
};

module.exports = nextConfig;
