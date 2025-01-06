/** @jsxImportSource @emotion/react */
'use client'

import { css } from "@emotion/react";
import PostList from "./PostList";
import Sidebar from "./Sidebar";
import { PostMetadata } from "@/utils/mdx";

interface HomeContentProps {
  posts: PostMetadata[];
}

export default function HomeContent({posts}: HomeContentProps) {
  return (
    <main 
      css={css`
        display: flex;
        gap: 40px;
        width: 1024px;
        padding: 80px 0;
        margin: 0 auto;
      `}
    >
      <Sidebar />
      <PostList posts={posts} />
    </main>
  )
}