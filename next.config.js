/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  transpilePackages: ['three'],
  async redirects() {
    return [{
      source: '/:path*',
      has: [{ type: 'host', value: 'www.umajalogistics.online' }],
      destination: 'https://umajalogistics.online/:path*',
      permanent: true,
    }];
  },
};

module.exports = nextConfig;
