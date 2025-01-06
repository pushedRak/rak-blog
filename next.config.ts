import nextMDX from '@next/mdx';

  const withMDX = nextMDX({
    options: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  });

  const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    reactStrictMode: true,
  };

  export default withMDX(nextConfig);