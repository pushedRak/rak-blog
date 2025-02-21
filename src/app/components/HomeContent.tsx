'use client'

import PostList from "./PostList";
import Sidebar from "./Sidebar";
import { PostMetadata } from "@/utils/mdx";
import { Suspense } from "react";
import { Container, SidebarWrapper } from "./HomeContent.styles";

interface HomeContentProps {
  posts: PostMetadata[]
  categories: string[]
}

export default function HomeContent({posts, categories}: HomeContentProps) {
  return (
    <Container>
      <Suspense>
        <SidebarWrapper>
          <Sidebar categories={categories} />
        </SidebarWrapper>
        <PostList posts={posts} />
      </Suspense>
    </Container>
  )
}