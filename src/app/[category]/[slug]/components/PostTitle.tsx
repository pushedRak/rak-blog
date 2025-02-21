/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import Image from 'next/image';
import { BackArrowIcon, Container, GoBackButton, ImageWrapper, Title, TitleContainer } from './PostTitle.styles';

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
    <Container>
      <ImageWrapper>
        <Image src={thumbnailUrl ? thumbnailUrl : ''} alt='' fill />
      </ImageWrapper>
      <TitleContainer>
        <GoBackButton onClick={handleBackButton}>
          <BackArrowIcon src="/icons/leftArrowIcon.svg" alt="Left Arrow Icon" />
        </GoBackButton>
        <div>
          <Title>{title}</Title>
          <time css={css`font-weight: 500; color: #f2f4f6;`}>{createdAt}</time>
        </div>
      </TitleContainer>
    </Container>
  )
}