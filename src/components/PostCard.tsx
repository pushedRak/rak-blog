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
    <Container href={`/posts/${post.slug}`}>
      <div
        css={css`
          width: 45%;
          overflow: hidden;
          `}
          >
        <Image src={post.thumbnail ? post.thumbnail : ''} alt='' />
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 55%;
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
        <div>
          {post.description}
        </div>
        <div
          css={css`
            margin-top: auto;
            color: #666;
            font-size: 0.8rem;
          `}
        >
          {post.createdAt}
        </div>
      </div>
    </Container>
  )
}