export const site = {
  name: "안승찬",
  title: "안승찬 · 프론트엔드 개발자",
  description:
    "안승찬 프론트엔드 개발자 포트폴리오. Next.js·React Native·WebView 아키텍처·성능 최적화. 골드앤컴퍼니, 케어마인더, 리케어랩 경력.",
  jobTitle: "프론트엔드 개발자",
  locale: "ko_KR",
  email: "omnipoo@naver.com",
  phone: "+82-10-4035-0672",
  github: "https://github.com/Ahnseungc",
  velog: "https://velog.io/@omnipo",
  linkedin: "https://www.linkedin.com/in/seungchan-ahn",
  keywords: [
    "안승찬",
    "프론트엔드 개발자",
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "WebView",
    "성능 최적화",
    "포트폴리오",
    "이력서",
    "골드앤컴퍼니",
    "케어마인더",
    "리케어랩",
    "Frontend Developer",
  ],
} as const;

const DEFAULT_SITE_URL = "https://portfolio-ahn.vercel.app";

export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;

  const vercel = process.env.VERCEL_URL;
  if (vercel) return `https://${vercel.replace(/\/$/, "")}`;

  return DEFAULT_SITE_URL;
}

export function absoluteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalized}`;
}
