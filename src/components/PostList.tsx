/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import PostCard from "./PostCard";
import { PostMetadata } from "@/utils/mdx";

interface PostListProps {
  posts: PostMetadata[];
}

export default function PostList({posts}: PostListProps) {
  return (
    <div
        css={css`
          display: flex;
          flex-direction: column;
          width: 744px;
          gap: 24px;
        `}
      >
        <div
          css={css`
            font-size: 2.5rem;
            font-weight: 900;
          `}
        >
          개발
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            gap: 24px;  
          `}
        >
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
      </div>
  )
}