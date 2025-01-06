'use client'

import styled from '@emotion/styled';

const StyledH1 = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 2rem 0 1rem;
`

const StyledH2 = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin: 1.5rem 0 1rem;
`

const StyledP = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin: 1rem 0;
`

const StyledUl = styled.ul`
  margin: 1rem 0;
  padding-left: 2rem;
`

const StyledLi = styled.li`
  margin: 0.5rem 0;
  line-height: 1.6;
`

const StyledBlockquote = styled.blockquote`
  border-left: 4px solid #3498db;
  padding-left: 1rem;
  margin: 1rem 0;
  color: #7f8c8d;
`

const StyledCode = styled.code`
  background-color: #f7f9fa;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-family: monospace;
`

const StyledPre = styled.pre`
  background-color: #f7f9fa;
  padding: 1rem;
  border-radius: 5px;
  overflow-x: auto;
  margin: 1rem 0;
`

export const components = {
  h1: StyledH1,
  h2: StyledH2,
  p: StyledP,
  ul: StyledUl,
  li: StyledLi,
  blockquote: StyledBlockquote,
  code: StyledCode,
  pre: StyledPre,
}