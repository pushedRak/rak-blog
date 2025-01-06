import { getPostBySlug, getAllPosts } from '@/utils/mdx';
import PostContent from '@/components/PostContent';

export function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { content, metadata } = getPostBySlug((await params).slug)
  
  return <PostContent content={content} metadata={metadata} />
}