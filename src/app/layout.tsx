import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "안승찬 · 프론트엔드 개발자",
  description:
    "변화를 기본값으로 삼는 프론트엔드 개발자. 익숙한 구조를 부수고 더 나은 것으로 다시 짓습니다.",
  openGraph: {
    title: "안승찬 · 프론트엔드 개발자",
    description: "Change by Default — 구조를 바꾸고, 경험을 다시 씁니다.",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        {modal}
      </body>
    </html>
  );
}
