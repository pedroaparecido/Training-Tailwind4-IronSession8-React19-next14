/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
      appDir: true,
    },
    crossOrigin: 'anonymous',
    headers: () => {
      return [
        {
          source: '/api/(.*)',
          headers: [
            { key: 'Access-Control-Allow-Origin', value: '*' },
            { key: 'Access-Control-Allow-Methods', value: '*' },
            { key: 'Access-Control-Allow-Headers', value: '*' },
          ],
        },
      ];
    },
  }

module.exports = nextConfig