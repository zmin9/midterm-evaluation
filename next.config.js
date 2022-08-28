/**
 * @type {import('next').NextConfig}
 */

const isProduction = process.env.NODE_ENV === 'production';

export default {
  compiler: {
    styledComponents: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    loader: 'akamai',
    path: isProduction ? 'https://zmin9.github.io' : 'http://localhost:3000',
  },
  assetPrefix: isProduction ? '/premium-page' : '',
};
