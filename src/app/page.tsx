import HomeContent from "@/components/HomeContent";
import { getAllCategories, getAllPosts } from "@/utils/mdx";

export default function Home() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return <HomeContent posts={posts} categories={categories} />
}
