import PostCard from "./PostCard";
import { PostMetadata } from "@/utils/mdx";
import { useSearchParams } from "next/navigation";
import { CategoryName, Container, PostsContainer } from "./PostList.styles";

interface PostListProps {
  posts: PostMetadata[];
}

const categoryNames: { [key: string]: string } = {
  all: '전체',
  algorithm: '알고리즘',
  develop: '개발',
}

export default function PostList({posts}: PostListProps) {
  const searchParams = useSearchParams();
  const category = searchParams.get('category') || 'all';
  
  return (
    <Container>
        <CategoryName>{categoryNames[category]}</CategoryName>
        <PostsContainer>
          {posts
            .filter(post => post.category === category || category === 'all')
            .map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </PostsContainer>
      </Container>
  )
}