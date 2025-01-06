/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

export default function Sidebar() {
  return (
    <div 
        css={css`
          width: 240px;
          padding: 16px;
          background-color: white;
          border-radius: 8px;
        `}
      >
        좌측 메뉴
      </div>
  )
}