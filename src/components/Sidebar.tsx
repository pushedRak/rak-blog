/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useSearchParams, useRouter } from "next/navigation";
import { GithubIcon } from './icons/GithubIcon';

interface SidebarProps {
  categories: string[]
}

const categoryNames: { [key: string]: string } = {
  all: '📚 전체',
  algorithm: '📘 알고리즘',
  develop: '📕 개발',
}

export default function Sidebar({ categories }: SidebarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category');

  const handleCategoryClick = (category: string | null) => {
    const newParams = new URLSearchParams(searchParams.toString())
    
    if (category) {
      newParams.set('category', category)
    } else {
      newParams.delete('category')
    }
    
    router.push(`/?${newParams.toString()}`)
  };

  return (
    <Container>
      <InfoWrapper>
        <Name>락</Name>
        <Photo alt='' src='/images/profilePhoto.webp' />
      </InfoWrapper>
      <div css={css`
        padding: 0 0.5rem;
        margin-bottom: 0.75rem;
        color: #567;
        font-size: 0.8rem;
        font-weight: 600;
      `}>
        카테고리
      </div>
      <Category
        selected={!currentCategory}
        onClick={() => handleCategoryClick(null)}
      >
        {categoryNames.all}
      </Category>
      {categories.map((category) => (
        <Category 
          key={category} 
          selected={currentCategory === category}
          onClick={() => handleCategoryClick(category)}
        >
          {categoryNames[category] || category}
        </Category>
      ))}
      <footer
        css={css`
          margin-top: 96px;
          color: #999;
          font-size: 0.6rem;
          line-height: 1.5;
          text-align: center;
        `}
      >
        <a 
          href="https://github.com/pushedRak/" 
          target="_blank"
          rel="noopener noreferrer"
          css={css`
            display: flex;
            align-items: center;
            gap: 0.3rem;
            width: 50%;
            padding: 16px;
            color: #191919;
            font-size: 0.75rem;
            transition: opacity 0.2s ease;
            
            &:hover {
              opacity: 0.7;
            }
          `}
        >
          <GithubIcon color="#555" size={20} />
          <span>Github</span>
        </a>
        <div>Copyright 2025.</div>
        <div>손민락 All rights reserved.</div>
      </footer>
    </Container>
  )
}

const Container = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 224px;
  padding: 16px;
  background-color: white;
  border-radius: 8px;
`

const InfoWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  aspect-ratio: 0.85;
  margin: 8px 0 24px;
  border-radius: 8px;
  overflow: hidden;
`

const Name = styled.div`
  position: absolute;
  z-index: 1;
  top: 8px;
  left: 8px;
  @font-face {
      font-family: 'MYArirang-Medium';
      src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/MYArirang-Medium.woff2') format('woff2');
      font-weight: normal;
      font-style: normal;
  }
  font-family: 'MYArirang-Medium';
  font-size: 1.75rem;
`

const Photo = styled.img`
  width: 100%;
  height: 100%;
`

const Category = styled.button<{selected: boolean}>`
  width: 100%;
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: start;
  transition: background-color 0.3s ,font-weight 0.3s;
  cursor: pointer;
  word-spacing: 0.25em;

  ${props => props.selected && 'font-weight: 800; background-color: #f2f4f6;'}

  &:hover {
    background-color: #f2f4f6;
  }
`