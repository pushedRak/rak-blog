import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

export const Container = styled(Link)`
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

export const ThumbnailWrapper = styled.div`
  position: relative;
  width: 45%;
  height: 100%;
  min-width: 328px;
  overflow: hidden;

  @media (max-width: 1024px) {
    width: 35%;
    min-width: 272px;
  }
`

export const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  transition: transform 0.3s;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
`

export const Title = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  transition: color 0.3s;
`

export const Description = styled.div`
 font-size: 0.95rem;  
`

export const TagsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: auto;
`;

export const TagsContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const Tag = styled.div`
  background-color: #f2f4f6;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
`;

export const Date = styled.div`
  color: #666;
  font-size: 0.75rem;
`;