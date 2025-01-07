/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface PostTitleProps {
  thumbnailUrl?: string;
  title: string;
  createdAt: string;
}

export default function PostTitle({thumbnailUrl, title, createdAt}: PostTitleProps) {
  function handleBackButton() {
    history.back();
  }

  return (
    <Container thumbnailUrl={thumbnailUrl}>
      <TitleContainer>
        <GoBackButton onClick={handleBackButton}>
          <BackArrowIcon src="/icons/leftArrowIcon.svg" alt="Left Arrow Icon" />
        </GoBackButton>
        <div>
          <Title>{title}</Title>
          <time css={css`font-weight: 500`}>{createdAt}</time>
        </div>
      </TitleContainer>
    </Container>
  )
}

const Container = styled.div<{ thumbnailUrl?: string }>`
  display: flex;
  position: relative;
  width: 100%;
  height: 272px;
  background: url("${props => props.thumbnailUrl}") no-repeat center center;
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
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  padding: 32px;
`

const Title = styled.h1`
  margin-bottom: 0.5rem;
  font-size: 2.5rem;  
`

const GoBackButton = styled.button`
  width: 32px;
  height: 32px;
`

const BackArrowIcon = styled.img`
  width: 24px;
  height: 24px;
`