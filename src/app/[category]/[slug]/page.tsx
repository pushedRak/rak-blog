import { getPostBySlug, getAllPosts } from '@/utils/mdx';
import PostContent from '@/components/PostContent';

export function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    category: post.category,
    slug: post.slug,
  }))
}

interface PostPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const resolvedParams = await params;
  const { content, metadata } = getPostBySlug(
    resolvedParams.category,
    resolvedParams.slug
  );
  
  return <PostContent content={content} metadata={metadata} />;
}