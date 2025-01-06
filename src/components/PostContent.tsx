/** @jsxImportSource @emotion/react */

'use client'

import { MDXRemote } from "next-mdx-remote/rsc";
import { components } from '@/components/MDXComponents';
import styled from "@emotion/styled";
import { PostMetadata } from "@/utils/mdx";
import { css } from "@emotion/react";

const Container = styled.article`
  width: 1024px;
  margin: 0 auto;
  padding-bottom: 80px;
  background-color: white;
`

const GoBackButton = styled.button`
  width: 32px;
  height: 32px;
`

const BackArrowIcon = styled.img`
  width: 24px;
  height: 24px;
  color: white;
`

interface PostContentProps {  
  content: string
  metadata: PostMetadata
}

export default function PostContent({content, metadata}: PostContentProps) {
  
  function handleBackButton() {
    console.log("뒤로가기")
  }

  return (
    <Container>
      <div
        css={css`
          display: flex;
          position: relative;
          width: 100%;
          height: 272px;
          background: url("${metadata.thumbnail}") no-repeat center center;
          background-size: contain;
          color: white;
          
           &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5); /* 검정색 오버레이 */
            pointer-events: none; /* 오버레이가 클릭 이벤트를 방해하지 않도록 설정 */
          }
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: relative;
            z-index: 1;
            padding: 32px;
          `}
        >
          <GoBackButton onClick={handleBackButton}>
            <BackArrowIcon
              src="/icons/leftArrowIcon.svg" 
              alt="Left Arrow Icon" 
            />
          </GoBackButton>
          <div>
            <h1
              css={css`
                margin-bottom: 0.5rem;
                font-size: 2rem;  
              `}
            >
              {metadata.title}
            </h1>
            <time>{metadata.createdAt}</time>
          </div>
        </div>
      </div>
      <div
        css={css`
          padding: 0 32px;  
        `}
      >
        <MDXRemote source={content} components={components} />
      </div>
    </Container>
  )
}