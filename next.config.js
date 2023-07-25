/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    scrollRestoration: true,
  },
  images: {
    domains: ["github.com"],
  },
};

module.exports = nextConfig;
