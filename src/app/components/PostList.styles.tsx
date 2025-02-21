import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 1024px) {
    width: 100%;
  }
`

export const CategoryName = styled.div`
  font-size: 3.25rem;
  font-weight: 900;
`

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;  
`