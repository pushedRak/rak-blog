'use client'

import { Global, css } from '@emotion/react'

export function GlobalStyle() {

const baseStyle = css`
  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Thin.woff2') format('woff2');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-ExtraLight.woff2') format('woff2');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Light.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-SemiBold.woff2') format('woff2');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-ExtraBold.woff2') format('woff2');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Black.woff2') format('woff2');
    font-weight: 900;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
      font-family: 'Pretendard', system-ui, -apple-system, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: #f0f0f0;
      color: #222426;
    }

  a {
    color: inherit;
    text-decoration: none;
  }

  button, input, select, textarea {
    background-color: transparent;
    border: none;
    outline: none;
  }

  button {
    cursor: pointer;
  }

  ul, ol {
    list-style: none;
  }
`

  return <Global styles={baseStyle} />
}