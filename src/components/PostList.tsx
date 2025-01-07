/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import PostCard from "./PostCard";
import { PostMetadata } from "@/utils/mdx";
import { useSearchParams } from "next/navigation";

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
    <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 24px;

          @media (max-width: 1024px) {
            width: 100%;
          }
        `}
      >
        <div
          css={css`
            font-size: 3.25rem;
            font-weight: 900;
          `}
        >
          {categoryNames[category]}
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            gap: 24px;  
          `}
        >
          {posts
            .filter(post => post.category === category || category === 'all')
            .map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
      </div>
  )
}