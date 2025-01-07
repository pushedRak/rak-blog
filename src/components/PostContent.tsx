/** @jsxImportSource @emotion/react */

'use client'

import { MDXRemote } from "next-mdx-remote/rsc";
import { components } from '@/components/MDXComponents';
import styled from "@emotion/styled";
import { PostMetadata } from "@/utils/mdx";
import PostTitle from "./PostTitle";

interface PostContentProps {  
  content: string
  metadata: PostMetadata
}

export default function PostContent({content, metadata}: PostContentProps) {
  return (
    <Container>
      <PostTitle thumbnailUrl={metadata.thumbnail} title={metadata.title} createdAt={metadata.createdAt} />
      <ContentWrapper>
        <MDXRemote source={content} components={components} />
      </ContentWrapper>
    </Container>
  )
}

const Container = styled.article`
  width: 1024px;
  margin: 0 auto;
  padding-bottom: 80px;
  background-color: white;
`

const ContentWrapper = styled.div`
  padding: 0 32px;
`