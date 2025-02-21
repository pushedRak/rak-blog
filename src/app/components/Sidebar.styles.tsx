import styled from "@emotion/styled";
import Image from "next/image";

export const Container = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 224px;
  padding: 16px;
  background-color: white;
  border-radius: 8px;
`

export const InfoWrapper = styled.div`
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

export const Photo = styled(Image)`
  width: 100%;
  height: 100%;
`

export const CategoryTitle = styled.div`
  padding: 0 0.5rem;
  margin-bottom: 0.75rem;
  color: #567;
  font-size: 0.8rem;
  font-weight: 600;
`

export const Category = styled.button<{selected: boolean}>`
  width: 100%;
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: start;
  transition: background-color 0.3s ,font-weight 0.3s;
  cursor: pointer;
  word-spacing: 0.25em;

  ${props => props.selected && 'background-color: #f2f4f6;'}

  &:hover {
    background-color: #f2f4f6;
  }
`

export const SidebarFooter = styled.footer`
  margin-top: 6rem;
  color: #999;
  font-size: 0.6rem;
  line-height: 1.5;
  text-align: center;
`

export const ProfileLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.25rem;
`

export const ProfileLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  width: 50%;
  color: #191919;
  font-size: 0.75rem;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`