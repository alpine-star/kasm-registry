/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'My Kasm Registry',
    description: 'Kasm registry with private docker registry',
    icon: '/img/logo.svg',
    listUrl: 'https://alpine-star.github.io/kasm-registry ',
    contactUrl: 'https://github.com/alpine-star/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
