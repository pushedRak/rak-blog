import styled from "@emotion/styled";

export const Container = styled.main`
  display: flex;
  gap: 40px;
  max-width: 1024px;
  padding: 64px 16px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    gap: 0;
    padding: 24px 16px;
  }
`

export const SidebarWrapper = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`