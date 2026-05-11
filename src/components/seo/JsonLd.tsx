import { getSiteUrl } from "@/lib/site";

/** Schema.org Person + WebSite — 검색·지식 패널 보조 */
export default function JsonLd() {
  const url = getSiteUrl();

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "안승찬 포트폴리오",
    url,
    inLanguage: "ko-KR",
    description:
      "안승찬 — 0→1과 1→100을 잇는 프론트엔드·프로덕트 빌더. Next.js, React Native, Flutter, 웹뷰 브릿지",
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "안승찬",
    url,
    jobTitle: "프론트엔드 개발자",
    email: "mailto:omnipoo@naver.com",
    sameAs: [
      "https://github.com/Ahnseungc",
      "https://velog.io/@omnipo/posts",
      "https://www.linkedin.com/in/anseungchan",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "React Native",
      "Flutter",
      "WebView",
      "프론트엔드",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([website, person]),
      }}
    />
  );
}
