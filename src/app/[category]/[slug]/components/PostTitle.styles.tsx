import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 272px;
  margin-bottom: 48px;
  color: white;

  &::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* 검정색 오버레이 */
`

export const ImageWrapper = styled.div`
  position: absolute;
  height: 100%;
  aspect-ratio: 1.6;  
  left: 50%;
  transform: translateX(-50%);
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  padding: 32px;
`

export const Title = styled.h1`
  margin-bottom: 0.5rem;
  font-size: 3rem;  
`

export const GoBackButton = styled.button`
  width: 32px;
  height: 32px;
`

export const BackArrowIcon = styled.img`
  width: 24px;
  height: 24px;
`