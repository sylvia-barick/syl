import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,

  // 👇 REQUIRED for GitHub Pages + custom domain
  basePath: '',
  assetPrefix: '/',

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
