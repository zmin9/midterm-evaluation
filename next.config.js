/**
 * @type {import('next').NextConfig}
 */

export default {
  assetPrefix: process.env.NEXT_PUBLIC_PREFIX,
  compiler: {
    styledComponents: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    loader: 'akamai',
    path: "",
  }
};
