import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "안승찬 · 프론트엔드 개발자",
  description:
    "렌더링·WebView·모노레포 쪽을 주로 해온 프론트엔드 개발자. 골드앤컴퍼니 재직, 케어마인더·리케어랩 경력.",
  openGraph: {
    title: "안승찬 · 프론트엔드 개발자",
    description: "WebView랑 성능, 숫자로 확인하고 고칩니다.",
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
