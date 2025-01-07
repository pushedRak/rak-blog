/** @jsxImportSource @emotion/react */
'use client'

import { css } from "@emotion/react";
import PostList from "./PostList";
import Sidebar from "./Sidebar";
import { PostMetadata } from "@/utils/mdx";
import { Suspense } from "react";

interface HomeContentProps {
  posts: PostMetadata[]
  categories: string[]
}

export default function HomeContent({posts, categories}: HomeContentProps) {
  return (
    <main 
      css={css`
        display: flex;
        gap: 40px;
        max-width: 1024px;
        padding: 64px 16px;
        margin: 0 auto;

        @media (max-width: 1024px) {
          gap: 0;
          padding: 24px 16px;
        }
      `}
    >
      <Suspense>
        <div
          css={css`
            @media (max-width: 1024px) {
              display: none;
            }
          `}
        >
          <Sidebar categories={categories} />
        </div>
        <PostList posts={posts} />
      </Suspense>
    </main>
  )
}