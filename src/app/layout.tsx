import EmotionRegistry from "@/lib/registry";
import { GlobalStyle } from "@/styles/GlobalStyle";
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "rak blog",
  description: "프론트엔드 개발자 손민락의 블로그입니다.",
  icons: {
		icon: "/icons/favicon.ico",
	},
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <EmotionRegistry>
          <GlobalStyle />
          {children}
        </EmotionRegistry>
      </body>
    </html>
  )
}