/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es"
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.treeconomy.com.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'treeconomy.com.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
