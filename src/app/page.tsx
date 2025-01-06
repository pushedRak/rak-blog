import HomeContent from "@/components/HomeContent";
import { getAllPosts } from "@/utils/mdx";

export default async function Home() {
  const posts = await getAllPosts();

  return <HomeContent posts={posts} />
}
