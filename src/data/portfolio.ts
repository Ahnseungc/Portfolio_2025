export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectSection = {
  title: string;
  content: string;
};

export type ProjectStep = {
  eyebrow: string;
  title: string;
  desc: string;
  did?: string;
  image?: ProjectImage;
};

export type Project = {
  slug: string;
  tag: string;
  title: string;
  desc: string;
  chips: string[];
  thumbnail: string;
  placeholder: string;
  company: string;
  period: string;
  role: string;
  repoUrl?: string;
  demoUrl?: string;
  overview: string;
  highlights: string[];
  sections: ProjectSection[];
  images: ProjectImage[];
  steps?: ProjectStep[];
};

const TEAMMOA_SCREEN =
  "https://github.com/Ahnseungc/TeamMoa/assets/94547692/03c2055f-af65-4f6e-a16d-a869e993125e";

export const projects: Project[] = [
  {
    slug: "webviewkit",
    tag: "OPEN SOURCE",
    title: "WebViewKit — WebView 스택 라우터",
    desc: "React WebView에서 네이티브처럼 push/back 네비게이션을 쓰게 만든 npm 패키지. 케어마인더·골드앤컴퍼니에서 쓰던 WebView 라우팅 문제를 코드로 빼낸 결과물.",
    thumbnail: "/projects/webviewkit/thumbnail.svg",
    chips: ["TypeScript", "React", "pnpm", "Vitest", "npm"],
    placeholder: "[ WebViewKit 스택 라우터 ]",
    company: "개인 · 오픈소스",
    period: "2025.05 — 유지보수 중",
    role: "설계 · 개발 · npm 배포",
    repoUrl: "https://github.com/Ahnseungc/WebViewKit",
    overview:
      "WebView 안에서 화면 전환·뒤로가기·히스토리가 브라우저 기본값과 맞지 않을 때가 많습니다. 스택 라우터, history 관리, 브라우저 데모 앱을 모노레포로 묶어 `@ahnseungchan/webviewkit`으로 배포했습니다.",
    highlights: [
      "스택 push/back API와 history 상태를 패키지로 분리",
      "Vite 기반 `@webviewkit/browser` 데모 앱 포함",
      "pnpm workspace + Vitest로 코어 로직 테스트",
      "npm public 배포 (`@ahnseungchan/webviewkit`)",
    ],
    sections: [
      {
        title: "왜 만들었는지",
        content:
          "RN WebView + Next.js 조합에서 뒤로가기와 라우팅이 자주 어긋났습니다. 프로젝트마다 비슷한 코드를 다시 쓰기보다, 재사용 가능한 라우터로 빼내는 게 낫다고 판단했습니다.",
      },
      {
        title: "구조",
        content:
          "packages/core에 스택 라우터와 history를 두고, packages/browser에 동작 확인용 데모를 뒀습니다. CHANGELOG와 README를 repo 루트에서 관리합니다.",
      },
      {
        title: "배포",
        content:
          "코어 빌드 후 npm publish --access public로 올립니다. v1.1.0에서 dev roadmap UI와 빌드 설정을 정리했고, 불필요한 gsap 의존성은 제거했습니다.",
      },
    ],
    images: [
      {
        src: "/projects/webviewkit/thumbnail.svg",
        alt: "WebViewKit",
        caption: "WebView 스택 라우터 npm 패키지",
      },
    ],
    steps: [
      {
        eyebrow: "01 · 배경",
        title: "프로젝트마다 같은 WebView 라우팅 코드가 반복됐습니다.",
        desc: "푸시·딥링크·뒤로가기를 웹 라우터와 맞추려면 매번 postMessage와 history를 다시 짰습니다.",
        did: "케어마인더·리케어랩·골드앤컴퍼니에서 겪은 패턴을 정리해 공통 API로 뽑았습니다.",
      },
      {
        eyebrow: "02 · 패키지",
        title: "스택 라우터와 history를 `@ahnseungchan/webviewkit`으로 분리했습니다.",
        desc: "push/back, 스택 depth, history sync를 React 훅·컴포넌트 형태로 제공합니다.",
        did: "모노레포(core + browser)로 코어와 데모를 같이 돌리게 구성했습니다.",
      },
      {
        eyebrow: "03 · 검증",
        title: "Vitest와 browser 데모로 동작을 확인합니다.",
        desc: "스택 전환·back 처리·엣지 케이스를 테스트로 고정해 두었습니다.",
        did: "pnpm test / pnpm build 파이프라인을 repo 루트에서 한 번에 실행합니다.",
      },
      {
        eyebrow: "04 · 배포",
        title: "npm에 public으로 올려 두었습니다.",
        desc: "다른 WebView 프로젝트에서 import만으로 같은 네비게이션 모델을 쓸 수 있습니다.",
        did: "packages/core README와 CHANGELOG에 버전별 변경을 남깁니다.",
      },
    ],
  },
  {
    slug: "careminder-pc",
    tag: "CAREMINDER · PUBLIC",
    title: "CareMinder PC — 병동 데스크 웹",
    desc: "케어마인더 병동·간호 데스크용 PC 웹 프론트 저장소. 재직 당시 RN → WebView 전환·모노레포·CDS 작업과 연결되는 공개 FE repo.",
    thumbnail: "/projects/careminder-pc/thumbnail.svg",
    chips: ["React", "TypeScript", "Vite", "WebView", "Storybook"],
    placeholder: "[ CareMinder PC 웹 ]",
    company: "(주)케어마인더",
    period: "2025.03 — 2026.01",
    role: "프론트엔드 (리드)",
    repoUrl: "https://github.com/Ahnseungc/CareMinder-PC",
    overview:
      "병동 간호 인력이 환자 요청을 처리하는 B2B 데스크 웹입니다. README는 템플릿 수준이지만, repo 설명과 재직 기간 동안의 아키텍처 전환·운영 작업이 이 코드베이스와 같은 제품군입니다.",
    highlights: [
      "CareFlow / CareVoice / CareDesk 4개 도메인 모노레포 통합",
      "RN 중심 → WebView + Next.js 전환 주도",
      "Atomic Design 기반 CDS(CareMinder Design System) + Storybook",
      "S3 자체 배포 + FCM 트리거로 앱 심사 없이 업데이트",
      "초기 로딩 ~30% 개선, 요청 완료율 ~20% 향상 (팀 지표)",
    ],
    sections: [
      {
        title: "맥락",
        content:
          "앱 스토어 심사 때문에 RN 핫픽스가 느렸고, 도메인별 코드 중복도 컸습니다. WebView + Next.js로 옮기면서 이 PC·태블릿·웹 제품군을 한 repo 체계로 맞췄습니다.",
      },
      {
        title: "내가 한 일",
        content:
          "아키텍처 전환을 주도했고, 프론트 3명이 Next.js를 처음 쓰는 상황이라 스크럼마다 공식 문서를 같이 읽으며 마이그레이션을 진행했습니다. 저사양 태블릿은 rAF·CSS 전환으로 드래그 끊김을 줄였습니다.",
      },
      {
        title: "운영",
        content:
          "EAS OTA 한계를 S3 배포 + FCM 알림으로 보완했고, 태블릿 네트워크·백그라운드·종료 이벤트 모니터링 페이지와 원격 대응 기능을 붙였습니다.",
      },
    ],
    images: [
      {
        src: "/projects/careminder-pc/thumbnail.svg",
        alt: "CareMinder PC",
        caption: "공개 repo — 운영 빌드·화면은 비공개",
      },
    ],
  },
  {
    slug: "team-moa",
    tag: "TEAM · HACKATHON",
    title: "TeamMoa (Damoa) — 팀 프로젝트",
    desc: "React + TypeScript + Vite로 만든 팀 프로토타입. README에 스크린샷과 YouTube 데모가 남아 있는 공개 repo.",
    thumbnail: TEAMMOA_SCREEN,
    chips: ["React", "TypeScript", "Vite"],
    placeholder: "[ TeamMoa 프로토타입 ]",
    company: "팀 프로젝트",
    period: "2024.06",
    role: "프론트엔드",
    repoUrl: "https://github.com/Ahnseungc/TeamMoa",
    demoUrl: "https://damoa.vercel.app",
    overview:
      "해커톤·팀 단위로 진행한 웹 프로토타입입니다. 커밋 컨벤션·코드 컨벤션을 README에 정리해 두었고, Vercel에 배포한 버전과 YouTube 시연 영상 링크가 있습니다.",
    highlights: [
      "React + TypeScript + Vite 기반 SPA",
      "팀 커밋·코드 컨벤션 문서화",
      "Vercel 배포 (damoa.vercel.app)",
      "README에 UI 스크린샷 13장 보관",
    ],
    sections: [
      {
        title: "저장소",
        content:
          "GitHub에 전체 프론트 코드와 스크린샷이 공개되어 있습니다. Working Prototype 영상도 README에 링크돼 있습니다.",
      },
      {
        title: "협업",
        content:
          "Feat/Fix/Docs 등 커밋 타입과 PR 본문 형식을 팀 규칙으로 맞춰 두었습니다. 문자열은 쌍따옴표, 문장 끝 세미콜론 같은 코드 스타일도 README에 적어 두었습니다.",
      },
      {
        title: "데모",
        content:
          "https://damoa.vercel.app 에 배포본이 있고, YouTube 시연(https://youtu.be/0ohJlE4AYjE)으로 플로우를 확인할 수 있습니다.",
      },
    ],
    images: [
      {
        src: "https://github.com/Ahnseungc/TeamMoa/assets/94547692/18763f68-fc93-4c6c-b9a0-6aad9540e68a",
        alt: "TeamMoa 화면 2",
        caption: "README에 포함된 UI 스크린샷",
      },
      {
        src: "https://github.com/Ahnseungc/TeamMoa/assets/94547692/ad4c49fd-7f21-47d1-b75b-d088373fdb6e",
        alt: "TeamMoa 화면 3",
        caption: "프로토타입 주요 화면",
      },
      {
        src: "https://github.com/Ahnseungc/TeamMoa/assets/94547692/19b2794c-a6b7-4335-9dfd-a3f3801acb05",
        alt: "TeamMoa 화면 4",
        caption: "팀 프로젝트 UI",
      },
    ],
  },
  {
    slug: "transition-router",
    tag: "SIDE PROJECT",
    title: "transition-router — Next.js 페이지 전환",
    desc: "Next.js App Router에서 페이지 전환 애니메이션을 실험한 side repo. create-next-app 기반.",
    thumbnail: "/projects/transition-router/thumbnail.svg",
    chips: ["Next.js", "TypeScript", "App Router"],
    placeholder: "[ transition-router ]",
    company: "개인",
    period: "2026.01",
    role: "실험 · 구현",
    repoUrl: "https://github.com/Ahnseungc/transition-router",
    overview:
      "라우트 전환 시 UX를 조금 더 부드럽게 만들 수 있는지 테스트한 저장소입니다. README는 Next.js 기본 템플릿이지만, repo 이름대로 transition 실험 코드가 들어 있습니다.",
    highlights: [
      "Next.js App Router 프로젝트",
      "페이지 전환(transition) 실험",
      "TypeScript 설정",
    ],
    sections: [
      {
        title: "목적",
        content: "WebView·SPA 모두에서 화면 전환이 딱딱하게 느껴질 때, Next.js 쪽에서 할 수 있는지 가볍게 실험한 repo입니다.",
      },
      {
        title: "상태",
        content: "본업 프로젝트에서 검증한 패턴을 옮기기 전 단계의 playground에 가깝습니다. 공개된 코드 기준으로 확인 가능합니다.",
      },
    ],
    images: [],
  },
];

export const caseSteps = [
  {
    eyebrow: "CASE · 골드앤컴퍼니",
    title: "리텐션 푸시 시간에 트래픽이 한꺼번에 몰렸습니다.",
    desc: "특정 시간대 일괄 푸시 이후 CPU가 70~80%까지 올라가고, 광고·초대·푸시 유입도 채널마다 따로 잡혀 전환 추적이 어려웠습니다.",
    viz: "[ CPU 70~80% · 유입 분산 ]",
  },
  {
    eyebrow: "접근",
    title: "CDN 캐싱과 PM2 클러스터로 먼저 받았습니다.",
    desc: "CloudFront에 정적 자산·페이지 응답을 캐싱하고, Docker 안에서 PM2 cluster mode로 코어만큼 워커를 띄웠습니다. k6로 vU 3,000까지 확인했습니다.",
    viz: "[ PM2 cluster · CDN ]",
  },
  {
    eyebrow: "설계",
    title: "BroadcastChannel로 WebView 세션을 맞췄습니다.",
    desc: "여러 WebView에 로그인 상태가 따로 남던 문제를 공통 훅으로 해결했습니다. 적립 연출 미디어는 GIF → MP4/WebP로 20MB → 0.7MB(약 97%↓)까지 줄였습니다.",
    viz: "[ 세션 동기 · 미디어 97%↓ ]",
  },
  {
    eyebrow: "결과",
    title: "CPU 30~40%대로 내려갔습니다.",
    desc: "EC2 모니터링 기준 피크 CPU가 안정화됐고, Lighthouse도 40~50점대에서 80~90점대로 올렸습니다. (회사 서비스 — repo 비공개)",
    viz: "[ CPU 30~40% · Lighthouse 80~90 ]",
  },
];

export const career = [
  {
    date: "2026.01 — 재직 중",
    role: "프론트엔드 개발자 · 정규직",
    org: "(주)골드앤컴퍼니 · 금 거래 플랫폼",
    desc: "B2C/B2B 앱·웹. 방치형 앱테크, Toss Payments 결제, WebView 브릿지, CDN+PM2 트래픽 대응, GitHub Actions CI/CD. Lighthouse 40~50 → 80~90점대, CPU 피크 70~80% → 30~40%.",
  },
  {
    date: "2025.03 — 2026.01",
    role: "프론트엔드 리드 · 정규직 · 11개월",
    org: "(주)케어마인더 · 병동 간호 플랫폼",
    desc: "RN → WebView + Next.js 전환 주도. 4개 도메인 모노레포, CDS·Storybook, S3 실시간 배포, QR 병상 오더(주문 시작 20→30%). 초기 로딩 ~30%↓, 완료율 ~20%↑.",
  },
  {
    date: "2024.09 — 2025.02",
    role: "프론트엔드 개발자 · 정규직 · 6개월",
    org: "(주)리케어랩 · 간병 매칭 (케어나인)",
    desc: "홈 CSR → ISR/SSR, RN–WebView postMessage·스택 라우터. LCP 5.2s → 2.1s, 연장률 23→35%, 홈 이탈 41→30%.",
  },
  {
    date: "2018.03 — 2025.08",
    role: "컴퓨터공학 학사 · 졸업",
    org: "한림대학교",
    desc: "창업 동아리, 오픈소스 SW 웹 해커톤 금상, 캡스톤(OCR+TTS), KBSC ESG 장려상 등.",
  },
];

export const awards = [
  { year: "2025", title: "스타트업에서 스타팅 개발자로 살아남기", org: "SKKAI · 연사", kind: "TALK", isTalk: true },
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
  { num: 90, suf: "점대", label: "Lighthouse (40→80~90)" },
  { num: 3, suf: "곳", label: "스타트업 경력" },
  { num: 30, suf: "%↓", label: "케어마인더 초기 로딩" },
  { num: 97, suf: "%↓", label: "앱테크 미디어 용량" },
];
