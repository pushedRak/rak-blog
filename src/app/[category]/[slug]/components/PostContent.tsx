/** @jsxImportSource @emotion/react */

'use client'

import { MDXRemote } from "next-mdx-remote/rsc";
import { components } from '@/components/MDXComponents';
import { PostMetadata } from "@/utils/mdx";
import PostTitle from "./PostTitle";
import { Suspense } from "react";
import { Container, ContentWrapper } from "./PostContent.styles";

interface PostContentProps {  
  content: string
  metadata: PostMetadata
}

export default function PostContent({content, metadata}: PostContentProps) {
  return (
    <Container>
      <PostTitle 
        thumbnailUrl={metadata.thumbnail} 
        title={metadata.title} 
        createdAt={metadata.createdAt}
      />
      <ContentWrapper>
        <Suspense>
          <MDXRemote source={content} components={components} />
        </Suspense>
      </ContentWrapper>
    </Container>
  )
}