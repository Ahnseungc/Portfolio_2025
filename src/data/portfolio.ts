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
  overview: string;
  highlights: string[];
  sections: ProjectSection[];
  images: ProjectImage[];
  steps?: ProjectStep[];
};

export const projects: Project[] = [
  {
    slug: "gold-app-tech-funnel",
    tag: "GOLD · 재직 중",
    title: "방치형 앱테크 개발 및 트래픽 대응",
    desc: "리텐션 푸시로 몰리는 트래픽을 CDN 캐싱과 PM2 클러스터로 나눠 받고, WebView ↔ Next.js 브릿지로 앱–웹 상태를 동기화한 프로젝트.",
    thumbnail: "/projects/gold-app-tech-funnel/screen-02.svg",
    chips: ["Next.js", "Flutter WebView", "Zustand", "PM2", "CloudFront"],
    placeholder: "[ 방치형 앱테크 적립 플로우 ]",
    company: "(주)골드앤컴퍼니",
    period: "2026.01 — 재직 중",
    role: "프론트엔드 개발자",
    overview:
      "금 거래 B2C 앱의 방치형 앱테크 기능을 설계·구현했습니다. 광고·초대·푸시 등 흩어진 유입 채널을 단일 퍼널로 통합하고, Flutter WebView와 Next.js 사이 브릿지로 인증·적립·라우팅 상태를 양방향 동기화했습니다.",
    highlights: [
      "적립 단계를 (대기 → 시청 → 검증 → 지급) 상태 머신으로 정의해 중복·예외 차단",
      "광고·초대·푸시 유입을 이벤트 단위로 표준화해 전환 추적 가능하게 구조화",
      "postMessage 프로토콜로 WebView ↔ Next.js 인증·적립·딥링크 동기화",
      "참여율 +50%, D+7 재방문율 +20%, 미디어 용량 20MB → 0.7MB",
    ],
    sections: [
      {
        title: "문제",
        content:
          "광고·초대·푸시로 들어온 사용자 행동 데이터가 매체별로 분산돼 전환 기여도 추적이 어려웠고, 하이브리드 구조의 딥링크 동기화 이슈도 있었습니다.",
      },
      {
        title: "해결",
        content:
          "유입 경로를 하나의 퍼널로 묶고, 적립 플로우를 상태 머신으로 모델링했습니다. 앱–웹 브릿지를 통해 세션·적립 상태를 실시간으로 맞췄습니다.",
      },
      {
        title: "결과",
        content:
          "흩어졌던 유입이 하나의 흐름이 되었고, 참여율과 재방문율이 눈에 띄게 개선됐습니다. 미디어 리소스도 대폭 경량화했습니다.",
      },
    ],
    images: [
      {
        src: "/projects/gold-app-tech-funnel/01-funnel.svg",
        alt: "유입 퍼널 대시보드",
        caption: "광고·초대·푸시 유입을 하나의 퍼널로 통합한 화면",
      },
      {
        src: "/projects/gold-app-tech-funnel/02-reward-flow.svg",
        alt: "적립 플로우",
        caption: "대기 → 시청 → 검증 → 지급 상태 머신 기반 적립 플로우",
      },
      {
        src: "/projects/gold-app-tech-funnel/03-bridge.svg",
        alt: "WebView 브릿지",
        caption: "Flutter WebView ↔ Next.js postMessage 브릿지 구조",
      },
      {
        src: "/projects/gold-app-tech-funnel/04-impact.svg",
        alt: "성과 지표",
        caption: "참여율 +50%, 재방문 +20%, 미디어 용량 97% 절감",
      },
    ],
    steps: [
      {
        eyebrow: "01 · 문제",
        title: "유입 경로가 채널마다 흩어져 있었습니다.",
        desc: "광고·초대·푸시로 들어온 사용자 행동이 매체별로 분산돼, 어떤 경로가 전환에 기여하는지 추적하기 어려웠습니다.",
        did: "유입 채널별 이벤트 스키마를 정리하고, 딥링크·세션 동기화 이슈를 먼저 맵핑했습니다.",
        image: {
          src: "/projects/gold-app-tech-funnel/screen-01.svg",
          alt: "분산된 유입 채널 화면",
          caption: "광고 · 초대 · 푸시 — 각각 다른 진입 경로",
        },
      },
      {
        eyebrow: "02 · 퍼널",
        title: "유입을 하나의 플로우로 묶었습니다.",
        desc: "모든 채널이 동일한 적립 플로우로 합류하도록 설계해, 사용자 동선과 전환 데이터를 한곳에서 추적할 수 있게 했습니다.",
        did: "광고·초대·푸시 유입을 이벤트 단위로 표준화하고, 단일 퍼널 대시보드로 연결했습니다.",
        image: {
          src: "/projects/gold-app-tech-funnel/screen-02.svg",
          alt: "통합 퍼널 화면",
          caption: "유입 → 적립 → 전환 단일 플로우",
        },
      },
      {
        eyebrow: "03 · 적립",
        title: "상태 머신으로 적립을 안정화했습니다.",
        desc: "대기 → 시청 → 검증 → 지급 단계를 상태 머신으로 정의해 중복 적립과 예외 케이스를 구조적으로 차단했습니다.",
        did: "Flutter WebView ↔ Next.js postMessage 브릿지로 인증·적립 상태를 양방향 동기화했습니다.",
        image: {
          src: "/projects/gold-app-tech-funnel/screen-03.svg",
          alt: "적립 플로우 화면",
          caption: "대기 → 시청 → 검증 → 지급",
        },
      },
      {
        eyebrow: "04 · 결과",
        title: "참여율 +50%, 미디어 용량 97%↓.",
        desc: "D+7 재방문율 +20%, 적립 연출 리소스 20MB → 0.7MB. 흩어졌던 유입이 하나의 흐름이 되었습니다.",
        did: "미디어 리소스 경량화와 렌더링 최적화로 앱 내 적립 경험의 로딩·용량을 함께 개선했습니다.",
        image: {
          src: "/projects/gold-app-tech-funnel/screen-04.svg",
          alt: "성과 화면",
          caption: "참여율 +50% · 재방문 +20%",
        },
      },
    ],
  },
  {
    slug: "gold-performance-ops",
    tag: "GOLD · 재직 중",
    title: "렌더링·성능 최적화 및 결제·배포 운영",
    desc: "커서 기반 무한스크롤, SSR/ISR/CSR 분리, Dynamic Import로 Lighthouse 40~50점 → 80~90점. Toss Payments 결제 및 OneSignal 타깃 푸시 연동.",
    thumbnail: "/projects/gold-performance-ops/thumbnail.webp",
    chips: ["Next.js", "React Query", "Vitest", "Playwright", "GitHub Actions"],
    placeholder: "[ Lighthouse 성능 리포트 ]",
    company: "(주)골드앤컴퍼니",
    period: "2026.01 — 재직 중",
    role: "프론트엔드 개발자",
    overview:
      "금 거래 플랫폼의 렌더링 전략을 재설계하고, LCP·FCP 등 Core Web Vitals를 개선했습니다. 결제 플로우 안정화와 CI/CD·E2E 테스트 체계까지 운영 품질을 높였습니다.",
    highlights: [
      "리스트 가상화·메모이제이션으로 불필요한 리렌더 차단",
      "페이지 특성에 맞게 SSR / ISR / CSR 렌더링 전략 분리",
      "LCP·FCP 약 2배 개선, Lighthouse 성능 점수 상승",
      "Playwright E2E + GitHub Actions CI/CD 파이프라인 구축",
    ],
    sections: [
      {
        title: "문제",
        content:
          "대용량 리스트와 무거운 초기 렌더로 LCP가 높았고, 결제·배포 파이프라인에 수동 검증 의존도가 컸습니다.",
      },
      {
        title: "해결",
        content:
          "렌더링 계층을 분리하고 가상화를 적용했습니다. E2E 테스트와 자동 배포 파이프라인으로 릴리즈 안정성을 확보했습니다.",
      },
      {
        title: "결과",
        content:
          "체감 로딩 속도와 운영 안정성이 동시에 개선됐습니다. 성능 지표와 배포 신뢰도 모두 눈에 띄게 올랐습니다.",
      },
    ],
    images: [
      {
        src: "/projects/gold-performance-ops/01-lighthouse.webp",
        alt: "Lighthouse 리포트",
        caption: "성능 최적화 전후 Lighthouse 점수 비교",
      },
      {
        src: "/projects/gold-performance-ops/02-virtual-list.webp",
        alt: "가상화 리스트",
        caption: "대용량 리스트 가상화 적용 화면",
      },
      {
        src: "/projects/gold-performance-ops/03-cicd.webp",
        alt: "CI/CD 파이프라인",
        caption: "GitHub Actions + Playwright E2E 파이프라인",
      },
    ],
  },
  {
    slug: "careminder-qr-order",
    tag: "CAREMINDER",
    title: "환자 요청 관리 플랫폼 아키텍처 설계·개발",
    desc: "RN → WebView + Next.js 전환을 주도하고, 4개 도메인을 모노레포로 통합. S3 기반 실시간 앱 배포·CDS 구축·운영 모니터링 체계 설계.",
    thumbnail: "/projects/careminder-qr-order/thumbnail.webp",
    chips: ["Next.js", "React Native", "Storybook", "Jenkins", "AWS S3"],
    placeholder: "[ 모노레포 · 디자인 시스템 ]",
    company: "(주)케어마인더",
    period: "2025.03 — 2026.01",
    role: "프론트엔드 개발자",
    overview:
      "React Native 기반 4개 도메인을 WebView + Next.js 아키텍처로 전환했습니다. 모노레포와 CDS(케어마인더 디자인 시스템)를 구축해 배포 속도와 UI 일관성을 높였습니다.",
    highlights: [
      "4개 도메인 모노레포 통합, 공통 패키지·빌드 파이프라인 정리",
      "Storybook 기반 CDS 구축으로 컴포넌트 재사용성 확보",
      "WebView 전환으로 앱 스토어 심사 없이 실시간 업데이트 가능",
      "에러 모니터링·로깅 체계로 운영 가시성 확보",
    ],
    sections: [
      {
        title: "문제",
        content:
          "도메인별 코드베이스가 분리돼 UI 불일치와 배포 지연이 반복됐고, RN 네이티브 업데이트 사이클이 느렸습니다.",
      },
      {
        title: "해결",
        content:
          "모노레포로 통합하고 WebView 아키텍처로 전환했습니다. CDS와 Storybook으로 디자인·개발 협업 기반을 마련했습니다.",
      },
      {
        title: "결과",
        content:
          "배포 주기가 단축되고 UI 일관성이 개선됐습니다. 운영 중 이슈 추적도 체계화됐습니다.",
      },
    ],
    images: [
      {
        src: "/projects/careminder-webview-arch/01-monorepo.webp",
        alt: "모노레포 구조",
        caption: "4개 도메인 모노레포 구조",
      },
      {
        src: "/projects/careminder-webview-arch/02-cds.webp",
        alt: "디자인 시스템",
        caption: "Storybook 기반 CDS 컴포넌트",
      },
      {
        src: "/projects/careminder-webview-arch/03-webview.webp",
        alt: "WebView 아키텍처",
        caption: "RN WebView ↔ Next.js 아키텍처",
      },
    ],
  },
  {
    slug: "recarelab-home-rendering",
    tag: "RECARELAB",
    title: "홈 화면 렌더링 고도화 및 WebView 브릿지 설계",
    desc: "CSR → SSR/ISR 전환과 postMessage 프로토콜로 홈 LCP 5.2s → 2.1s 개선. RN ↔ WebView 내비게이션 상태 동기화.",
    thumbnail: "/projects/recarelab-home-rendering/thumbnail.webp",
    chips: ["Next.js", "React Native", "SWR", "Recoil", "ISR"],
    placeholder: "[ 홈 화면 렌더링 / 스켈레톤 ]",
    company: "(주)리케어랩",
    period: "2024.09 — 2025.02",
    role: "프론트엔드 개발자",
    overview:
      "간병 매칭 앱 홈 화면의 렌더링 구조를 CSR에서 ISR/SSR로 전환했습니다. 조건부 스켈레톤과 RN–WebView 브릿지로 초기 로딩·화면 전환 경험을 개선했습니다.",
    highlights: [
      "CSR → ISR/SSR 전환으로 초기 로딩 체감 속도 개선",
      "데이터 로딩 상태별 조건부 스켈레톤 UI 적용",
      "RN–WebView 브릿지로 네이티브·웹 상태 동기화",
      "Recoil 기반 홈 피드 상태 관리 구조 정리",
    ],
    sections: [
      {
        title: "문제",
        content:
          "CSR 기반 홈 화면은 초기 로딩이 느렸고, 데이터 페칭 중 빈 화면이 노출되는 경우가 있었습니다.",
      },
      {
        title: "해결",
        content:
          "페이지 특성에 맞게 ISR/SSR을 적용하고, 스켈레톤 UI로 로딩 경험을 개선했습니다. WebView 브릿지로 앱 연동도 정리했습니다.",
      },
      {
        title: "결과",
        content:
          "홈 진입 속도와 화면 전환 안정성이 개선됐습니다. 사용자 이탈 가능성이 높던 초기 구간이 매끄러워졌습니다.",
      },
    ],
    images: [
      {
        src: "/projects/recarelab-home-rendering/01-home.webp",
        alt: "홈 화면",
        caption: "ISR/SSR 적용 후 홈 화면",
      },
      {
        src: "/projects/recarelab-home-rendering/02-skeleton.webp",
        alt: "스켈레톤 UI",
        caption: "조건부 스켈레톤 로딩 UI",
      },
      {
        src: "/projects/recarelab-home-rendering/03-bridge.webp",
        alt: "WebView 브릿지",
        caption: "RN–WebView 브릿지 연동",
      },
    ],
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
