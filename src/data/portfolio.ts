export const projects = [
  {
    tag: "GOLD · 재직 중",
    title: "방치형 앱테크 & 유입 퍼널",
    desc: "광고·초대·푸시 유입을 하나의 퍼널로 묶고, Flutter WebView ↔ Next.js 브릿지로 앱–웹 상태를 동기화했습니다.",
    chips: ["Flutter", "Next.js", "Zustand"],
    caseHref: "#case",
    placeholder: "[ 방치형 앱테크 적립 플로우 ]",
  },
  {
    tag: "GOLD · 재직 중",
    title: "렌더링·성능 최적화 & 운영",
    desc: "가상화·메모이제이션·SSR/ISR/CSR 분리로 LCP를 끌어올리고, 결제·CI/CD·E2E까지 운영 안정성을 높였습니다.",
    chips: ["Next.js", "React Query", "Playwright"],
    caseHref: "#case",
    placeholder: "[ Lighthouse 성능 리포트 ]",
  },
  {
    tag: "CAREMINDER",
    title: "QR 병상 오더",
    desc: "병상 단위 QR 진입에 세션 보안과 GPS 검증을 더해, 주문 동선을 단순화하고 링크 재사용·위치 위조를 차단했습니다.",
    chips: ["Next.js", "Zod", "Cypress"],
    caseHref: "#contact",
    placeholder: "[ QR 병상 오더 진입 ]",
  },
  {
    tag: "CAREMINDER",
    title: "RN → WebView 아키텍처 전환",
    desc: "4개 도메인을 모노레포로 묶고 디자인 시스템(CDS)을 구축, 실시간 앱 업데이트·모니터링 체계까지 마련했습니다.",
    chips: ["React Native", "Next.js", "Storybook"],
    caseHref: "#contact",
    placeholder: "[ 모노레포 · 디자인 시스템 ]",
  },
  {
    tag: "RECARELAB",
    title: "홈 화면 렌더링 고도화",
    desc: "CSR → ISR/SSR 전환과 조건부 스켈레톤, RN–WebView 브릿지로 초기 로딩과 화면 전환 경험을 개선했습니다.",
    chips: ["Next.js", "Recoil", "Tailwind"],
    caseHref: "#contact",
    placeholder: "[ 홈 화면 렌더링 / 스켈레톤 ]",
  },
];

export const caseSteps = [
  {
    eyebrow: "CASE · 골드앤컴퍼니",
    title: "유입 경로가 채널마다 흩어져 있었습니다.",
    desc: "광고·초대·푸시로 들어온 사용자의 행동 데이터가 매체별로 분산돼, 어떤 경로가 전환에 기여하는지 추적하기 어려웠습니다. 하이브리드 구조의 딥링크 동기화 이슈도 있었죠.",
    viz: "[ 흩어진 유입 채널 — 광고·초대·푸시 ]",
  },
  {
    eyebrow: "접근 · APPROACH",
    title: "유입을 하나의 퍼널로 묶었습니다.",
    desc: "적립 단계를 (대기 → 시청 → 검증 → 지급) 상태 머신으로 정의해 중복·예외를 구조적으로 차단하고, 광고·초대·푸시 유입을 이벤트 단위로 표준화했습니다.",
    viz: "[ 적립 상태 머신 다이어그램 ]",
  },
  {
    eyebrow: "설계 · ENGINEERING",
    title: "앱과 웹을 브릿지로 연결했습니다.",
    desc: "Flutter WebView ↔ Next.js 사이에 postMessage 프로토콜을 설계해 인증·적립·라우팅을 양방향 동기화하고, 딥링크 분기와 미디어 렌더링까지 최적화했습니다.",
    viz: "[ WebView ↔ Next.js 브릿지 ]",
  },
  {
    eyebrow: "결과 · IMPACT",
    title: "참여율 +50%, 미디어 용량 97%↓.",
    desc: "D+7 재방문율은 +20%, 적립 연출 리소스는 20MB에서 0.7MB로. 흩어졌던 유입이 하나의 흐름이 되었습니다.",
    viz: "[ 참여율 +50% · 용량 97%↓ ]",
  },
];

export const career = [
  {
    date: "2026.01 — 재직 중",
    role: "프론트엔드 개발자",
    org: "(주)골드앤컴퍼니 · 금 거래 플랫폼",
    desc: "금 거래 B2C/B2B 앱의 프론트엔드를 맡아 방치형 앱테크·유입 퍼널, 렌더링·성능 최적화, 결제·CI/CD 운영 고도화를 담당합니다.",
  },
  {
    date: "2025.03 — 2026.01",
    role: "프론트엔드 개발자",
    org: "(주)케어마인더 · 병동 간호 플랫폼",
    desc: "환자 요청 관리 플랫폼의 RN → WebView 아키텍처 전환, 모노레포·디자인 시스템(CDS) 구축, QR 병상 오더를 설계·개발했습니다.",
  },
  {
    date: "2024.09 — 2025.02",
    role: "프론트엔드 개발자",
    org: "(주)리케어랩 · 간병 매칭",
    desc: "간병 매칭 앱의 홈 화면 UI와 렌더링 구조를 CSR → ISR/SSR로 고도화하고, RN–WebView 브릿지를 설계했습니다.",
  },
  {
    date: "2018.03 — 2025.08",
    role: "컴퓨터공학 학사",
    org: "한림대학교",
    desc: "컴퓨터공학을 전공하며 웹·앱 개발과 여러 해커톤·창업 활동에 참여했습니다.",
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
  { ico: "ST", label: "State · Data", chips: ["Zustand", "Recoil", "React Query", "Zod"] },
  { ico: "UI", label: "Styling", chips: ["Tailwind CSS", "Storybook", "CSS Modules", "Styled Components"] },
  { ico: "QA", label: "Testing", chips: ["Jest", "Vitest", "Cypress", "Playwright", "MSW"] },
  { ico: "OP", label: "Infra · CI/CD", chips: ["GitHub Actions", "AWS ECR", "Docker", "CloudFront", "S3"] },
  { ico: "TL", label: "Tools", chips: ["Figma", "Slack", "Notion", "Jira", "Cursor", "Claude Code"] },
];

export const stats = [
  { num: 50, suf: "%↑", label: "앱테크 참여율" },
  { num: 97, suf: "%↓", label: "미디어 용량 절감" },
  { num: 2, suf: "×", label: "렌더링 성능 (LCP·FCP)" },
  { num: 3, suf: "곳", label: "거쳐온 스타트업" },
];
