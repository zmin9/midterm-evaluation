export default {
  assetPrefix: process.env.NEXT_PUBLIC_PREFIX,
  basePath: process.env.NEXT_PUBLIC_PREFIX,
  compiler: {
    styledComponents: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};
