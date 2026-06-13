export const projects = [
  {
    tag: "GOLD · 재직 중",
    title: "방치형 앱테크 개발 및 트래픽 대응",
    desc: "리텐션 푸시로 몰리는 트래픽을 CDN 캐싱과 PM2 클러스터로 나눠 받고, WebView ↔ Next.js 브릿지로 앱–웹 상태를 동기화한 프로젝트.",
    chips: ["Next.js", "Flutter WebView", "Zustand", "PM2", "CloudFront"],
    caseHref: "#case",
    placeholder: "[ 방치형 앱테크 적립 플로우 ]",
  },
  {
    tag: "GOLD · 재직 중",
    title: "렌더링·성능 최적화 및 결제·배포 운영",
    desc: "커서 기반 무한스크롤, SSR/ISR/CSR 분리, Dynamic Import로 Lighthouse 40~50점 → 80~90점. Toss Payments 결제 및 OneSignal 타깃 푸시 연동.",
    chips: ["Next.js", "React Query", "Vitest", "Playwright", "GitHub Actions"],
    caseHref: "#case",
    placeholder: "[ Lighthouse 성능 리포트 ]",
  },
  {
    tag: "CAREMINDER",
    title: "환자 요청 관리 플랫폼 아키텍처 설계·개발",
    desc: "RN → WebView + Next.js 전환을 주도하고, 4개 도메인을 모노레포로 통합. S3 기반 실시간 앱 배포·CDS 구축·운영 모니터링 체계 설계.",
    chips: ["Next.js", "React Native", "Storybook", "Jenkins", "AWS S3"],
    caseHref: "#contact",
    placeholder: "[ 모노레포 · 디자인 시스템 ]",
  },
  {
    tag: "RECARELAB",
    title: "홈 화면 렌더링 고도화 및 WebView 브릿지 설계",
    desc: "CSR → SSR/ISR 전환과 postMessage 프로토콜로 홈 LCP 5.2s → 2.1s 개선. RN ↔ WebView 내비게이션 상태 동기화.",
    chips: ["Next.js", "React Native", "SWR", "Recoil", "ISR"],
    caseHref: "#contact",
    placeholder: "[ 홈 화면 렌더링 / 스켈레톤 ]",
  },
];

export const caseSteps = [
  {
    eyebrow: "CASE · 골드앤컴퍼니",
    title: "리텐션 푸시가 트래픽을 한꺼번에 터뜨렸습니다.",
    desc: "특정 시간대에 일괄 발송한 리텐션 푸시로 사용자가 몰리면서 CPU가 과부하에 걸려 초기 로딩이 느려졌고, 광고·초대·푸시로 분산된 유입 경로는 전환 기여도 파악을 어렵게 했습니다.",
    viz: "[ CPU 70~80% 과부하 · 유입 채널 분산 ]",
  },
  {
    eyebrow: "접근 · APPROACH",
    title: "CDN 캐싱과 PM2 클러스터로 받아냈습니다.",
    desc: "정적 자산을 CloudFront 엣지에 캐싱해 origin 부하를 줄이고, Docker 컨테이너 안에서 PM2 클러스터 모드로 멀티코어를 활용했습니다. k6 부하 테스트로 vU 3,000까지 검증했습니다.",
    viz: "[ PM2 클러스터 · CDN 캐싱 구조 ]",
  },
  {
    eyebrow: "설계 · ENGINEERING",
    title: "BroadcastChannel로 WebView 세션을 동기화했습니다.",
    desc: "여러 WebView에서 인증 상태가 따로 놀던 문제를 BroadcastChannel 공통 훅으로 해결했습니다. 적립 연출 미디어는 GIF → MP4/WebP 전환으로 20MB → 0.7MB(약 97%↓)로 줄였습니다.",
    viz: "[ WebView 세션 동기화 · 미디어 97%↓ ]",
  },
  {
    eyebrow: "결과 · IMPACT",
    title: "CPU 70~80% → 30~40%. 트래픽 피크를 안정화했습니다.",
    desc: "AWS EC2 모니터링 기준 트래픽이 몰릴 때 70~80%까지 치솟던 CPU 사용률이 적용 후 30~40%대로 안정화됐습니다. 미디어 용량 97% 절감과 Lighthouse 80~90점대를 달성했습니다.",
    viz: "[ CPU 30~40% 안정화 · Lighthouse 80~90점 ]",
  },
];

export const career = [
  {
    date: "2026.01 — 재직 중",
    role: "프론트엔드 개발자 · 정규직",
    org: "(주)골드앤컴퍼니 · 금 거래 플랫폼",
    desc: "금 거래 B2C/B2B 앱 프론트엔드 개발. 방치형 앱테크, 렌더링·성능 최적화, 결제(Toss Payments), CI/CD 자동화, 사내 MCP 서버 구축.",
  },
  {
    date: "2025.03 — 2026.01",
    role: "프론트엔드 리드 · 정규직 · 11개월",
    org: "(주)케어마인더 · 병동 간호 플랫폼",
    desc: "환자 요청 관리 플랫폼 RN → WebView + Next.js 아키텍처 전환 주도. 모노레포·CDS 구축, S3 실시간 배포, Jenkins CI/CD, 운영 모니터링 체계 설계.",
  },
  {
    date: "2024.09 — 2025.02",
    role: "프론트엔드 개발자 · 정규직 · 6개월",
    org: "(주)리케어랩 · 간병 매칭 플랫폼",
    desc: "간병 매칭 앱 홈 화면 CSR → SSR/ISR 렌더링 고도화. RN–WebView postMessage 브릿지 설계. 홈 LCP 5.2s → 2.1s 개선.",
  },
  {
    date: "2018.03 — 2025.08",
    role: "컴퓨터공학 학사 · 졸업",
    org: "한림대학교",
    desc: "컴퓨터공학 전공. 창업 동아리, 해커톤, 캡스톤 디자인 등 다수 대외 활동 참여.",
  },
];

export const awards = [
  { year: "2025", title: "스타트업에서 스타팅 개발자로 살아남기", org: "SKKAI (SungKyunKwan AI Association) · 연사", kind: "TALK", isTalk: true },
  { year: "2024", title: "정주영 창업경진대회 — 우수상 · 인기상", org: "아산나눔재단", kind: "AWARD", isTalk: false },
  { year: "2023", title: "오픈소스 SW 웹 해커톤 — 금상", org: "한림대학교", kind: "AWARD", isTalk: false },
  { year: "2023", title: "캡스톤 디자인", org: "한림대학교", kind: "PROJECT", isTalk: false },
  { year: "2022", title: "KBSC ESG 공모전 — 장려상", org: "국민은행", kind: "AWARD", isTalk: false },
];

export const skills = [
  { ico: "FE", label: "Frontend", chips: ["React", "Next.js", "React Native", "TypeScript", "Electron"] },
  { ico: "ST", label: "State · Data", chips: ["React Query", "Zustand", "Recoil", "SWR", "Zod"] },
  { ico: "UI", label: "Styling", chips: ["Tailwind CSS", "Storybook", "CSS Modules", "Styled Components"] },
  { ico: "QA", label: "Testing", chips: ["Jest", "Vitest", "Cypress", "Playwright"] },
  { ico: "OP", label: "Infra · CI/CD", chips: ["GitHub Actions", "Jenkins", "AWS", "Docker", "PM2"] },
  { ico: "TL", label: "Tools", chips: ["Figma", "Cursor", "Claude Code", "Jira", "Notion"] },
];

export const stats = [
  { num: 97, suf: "%↓", label: "미디어 용량 절감" },
  { num: 90, suf: "점", label: "Lighthouse 성능 점수" },
  { num: 3, suf: "곳", label: "거쳐온 스타트업" },
  { num: 4, suf: "개", label: "구축한 서비스 도메인" },
];
