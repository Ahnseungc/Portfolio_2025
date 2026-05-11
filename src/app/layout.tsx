import type { Metadata, Viewport } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Suspense } from "react";
import GlobalNav from "@/components/layout/GlobalNav";
import JsonLd from "@/components/seo/JsonLd";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();

export const viewport: Viewport = {
  themeColor: "#f5f5f7",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "안승찬 — 0→1과 1→100을 잇는 프론트엔드",
    template: "%s | 안승찬",
  },
  description:
    "0에서 1을 만들고, 1에서 100을 만드는 경험을 이어가는 프론트엔드·프로덕트 빌더. Next.js, React Native, Flutter, 웹뷰 브릿지. FinTech·헬스케어·플랫폼.",
  applicationName: "안승찬 포트폴리오",
  authors: [{ name: "안승찬", url: siteUrl }],
  creator: "안승찬",
  publisher: "안승찬",
  keywords: [
    "안승찬",
    "프론트엔드",
    "포트폴리오",
    "Next.js",
    "React",
    "TypeScript",
    "React Native",
    "Flutter",
    "WebView",
    "FinTech",
    "헬스케어",
    "웹뷰 브릿지",
    "Ahn Seungchan",
    "Frontend Developer",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName: "안승찬 포트폴리오",
    title: "안승찬 — 0→1과 1→100을 잇는 프론트엔드",
    description:
      "첫 출항(0→1)과 스케일(1→100) 사이를 오가며 제품과 팀의 속도를 맞춥니다. Next.js, RN, Flutter, 웹뷰 브릿지.",
  },
  twitter: {
    card: "summary_large_image",
    title: "안승찬 — 0→1과 1→100을 잇는 프론트엔드",
    description:
      "0→1 출항과 1→100 스케일. Next.js, RN, Flutter, 웹뷰 브릿지. FinTech·헬스케어.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-apple-parchment font-apple text-apple-ink antialiased")}>
        <JsonLd />
        <GlobalNav />
        <Suspense>{children}</Suspense>
      </body>
    </html>
  );
}
