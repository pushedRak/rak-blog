import nextMDX from '@next/mdx';
import type { NextConfig } from 'next';

const withMDX = nextMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig: NextConfig = {
  compiler: {
    emotion: true
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    domains: ['github.com'],
    remotePatterns: [
      {
        protocol: 'https',  // 'string' 대신 리터럴 'https' 사용
        hostname: 'github.com',
        pathname: '/user-attachments/**',
      },
    ],
  },
};

export default withMDX(nextConfig);