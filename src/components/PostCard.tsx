/** @jsxImportSource @emotion/react */

import { PostMetadata } from "@/utils/mdx";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";

const Container = styled(Link)`
  display: flex;
  height: 200px;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;

  &:hover > div:first-of-type > img {
    transform: scale(1.05);
  }

  &:hover > div:last-of-type > div:first-of-type {
    color: #1a6dff;
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 0.3s;
`

interface PostCardProps {
  post: PostMetadata;
}

export default function PostCard({post}: PostCardProps) {
  return (
    <Container href={`/${post.category}/${post.slug}`}>
      <div
        css={css`
          width: 45%;
          min-width: 328px;
          overflow: hidden;
          @media (max-width: 1024px) {
            width: 35%;
            min-width: 272px;
          }
          `}
          >
        <Image src={post.thumbnail ? post.thumbnail : ''} alt='' />
      </div>
      <div
        css={css`
          display: flex;
          flex: 1;
          flex-direction: column;
          gap: 16px;
          padding: 24px;
        `}
      >
        <div
          css={css`
            font-size: 1.1rem;
            font-weight: 600;
            transition: color 0.3s;
          `}
        >
          {post.title}
        </div>
        <div
          css={css`
            font-size: 0.95rem;  
          `}
        >
          {post.description}
        </div>
        <div
          css={css`
            margin-top: auto;
            color: #666;
            font-size: 0.75rem;
          `}
        >
          {post.createdAt}
        </div>
      </div>
    </Container>
  )
}