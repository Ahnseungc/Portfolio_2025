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

export const projects: Project[] = [
  {
    slug: "webviewkit",
    tag: "OPEN SOURCE · npm",
    title: "WebViewKit",
    desc: "WebView 앱에서 네이티브 앱과 동일한 스택 네비게이션을 제공하는 npm 라이브러리입니다.",
    thumbnail: "/projects/webviewkit/thumbnail.svg",
    chips: ["TypeScript", "React", "pnpm", "Jest", "npm", "Vite"],
    placeholder: "[ WebViewKit 아키텍처 ]",
    company: "개인 · 오픈소스",
    period: "2025.05 — 유지보수 중",
    role: "설계 · 개발 · npm 배포",
    repoUrl: "https://github.com/Ahnseungc/WebViewKit",
    overview:
      "RN·Flutter WebView 안에서 화면 전환과 뒤로가기가 브라우저 기본값과 달라 매 프로젝트마다 같은 코드를 반복 작성했습니다. Stack Router·History 관리·WebView Bridge(RN·Flutter)를 pnpm 모노레포로 묶어 @ahnseungchan/webviewkit으로 배포했습니다.",
    highlights: [
      "Stack Router: push · pop · back · depth 관리",
      "WebView Bridge: RN postMessage + Flutter JavaScript Channel",
      "History API 동기화로 브라우저 history와 앱 스택을 일치",
      "pnpm workspace 모노레포 (packages/core + packages/browser 데모)",
      "Jest 기반 유닛 테스트 · npm public 배포 v1.3.0",
    ],
    sections: [
      {
        title: "왜 만들었는지",
        content:
          "케어마인더·리케어랩·골드앤컴퍼니 세 회사에서 WebView 라우팅 코드를 매번 새로 짰습니다. postMessage 인터페이스, history 동기화, 스택 depth 관리가 모두 제각각이었고, 재사용 가능한 패키지로 추출해야 한다는 판단에 만들었습니다.",
      },
      {
        title: "모노레포 구조",
        content:
          "packages/core: Stack Router, WebView Bridge(RN·Flutter), History API, TypeScript 타입을 포함합니다. packages/browser: Vite + React 기반 데모 앱으로 실시간 동작을 확인합니다. tsup으로 ESM/CJS 듀얼 빌드하고 npm에 배포합니다.",
      },
      {
        title: "테스트 · 배포",
        content:
          "Jest로 스택 전환·back 처리·엣지 케이스를 고정합니다. pnpm build → jest → npm publish --access public 파이프라인을 루트에서 한 번에 실행합니다. CHANGELOG에 버전별 변경 이력을 남깁니다.",
      },
    ],
    images: [
      { src: "/projects/webviewkit/arch.svg", alt: "WebViewKit 아키텍처", caption: "pnpm monorepo 구조" },
    ],
    steps: [
      {
        eyebrow: "01 · 배경",
        title: "WebView 라우팅 코드가 매 프로젝트마다 반복됐습니다.",
        desc: "push·딥링크·뒤로가기를 웹 라우터와 맞추려면 매번 postMessage와 history를 다시 짰습니다.",
        did: "3곳의 스타트업에서 겪은 패턴을 하나의 공통 API로 뽑아 npm 라이브러리로 만들었습니다.",
        image: { src: "/projects/webviewkit/thumbnail.svg", alt: "WebViewKit", caption: "WebView 스택 라우터 npm 패키지" },
      },
      {
        eyebrow: "02 · 아키텍처",
        title: "pnpm 모노레포로 core와 browser 데모를 분리했습니다.",
        desc: "packages/core에 Stack Router·Bridge·History를, packages/browser에 Vite + React 데모를 뒀습니다.",
        did: "Stack Router(push/pop/back), WebView Bridge(RN·Flutter), History 동기화를 React 훅 형태로 제공합니다.",
        image: { src: "/projects/webviewkit/arch.svg", alt: "WebViewKit 아키텍처", caption: "모노레포 구조도" },
      },
      {
        eyebrow: "03 · 검증",
        title: "Jest 유닛 테스트로 동작을 고정합니다.",
        desc: "스택 전환·back 처리·edge case를 테스트로 잠가 두어 회귀를 막습니다.",
        did: "pnpm test · pnpm build 파이프라인을 repo 루트에서 한 번에 실행합니다.",
      },
      {
        eyebrow: "04 · 배포",
        title: "npm에 public으로 배포했습니다.",
        desc: "import만으로 동일한 네비게이션 모델을 쓸 수 있고, v1.3.0까지 유지보수 중입니다.",
        did: "CHANGELOG · README에 버전별 변경을 남기고, MIT 라이선스로 공개합니다.",
      },
    ],
  },
  {
    slug: "como",
    tag: "WEB · MOBILE · MVP",
    title: "코모 (Como)",
    desc: "직장인을 위한 취미 매칭 플랫폼으로, 서울시 교육청에 실제 MVP를 도입한 서비스입니다.",
    thumbnail: "/projects/como/thumbnail.svg",
    chips: ["Next.js 14", "Flutter", "WebView", "TypeScript", "Vercel"],
    placeholder: "[ 코모 아키텍처 ]",
    company: "팀 프로젝트",
    period: "2023 — 2024",
    role: "프론트엔드 개발 · 앱 개발",
    overview:
      "직장인들이 퇴근 후 취미를 함께할 사람을 찾을 수 있는 플랫폼입니다. Next.js 14로 웹을 개발하고 Flutter WebView로 iOS·Android 앱을 감싸 배포했습니다. 서울시 교육청에 실제 MVP로 도입되어 운영 검증을 거쳤습니다.",
    highlights: [
      "서울시 교육청 실제 MVP 도입 · 운영 검증",
      "Next.js 14 App Router + TypeScript 기반 웹 개발",
      "Flutter WebView로 iOS · Android 앱 동시 출시",
      "Vercel Edge Deploy로 빠른 배포 · CI/CD 자동화",
      "취미 매칭 · 피드 · 커뮤니티 핵심 기능 구현",
    ],
    sections: [
      {
        title: "서비스 개요",
        content:
          "직장인들이 퇴근 후 관심 있는 취미 활동을 함께할 동료를 찾는 플랫폼입니다. 취미 카테고리별 검색, 실시간 매칭, 커뮤니티 피드 기능을 제공합니다.",
      },
      {
        title: "기술 구조",
        content:
          "Next.js 14 App Router로 SSR·ISR을 활용해 빠른 초기 로딩을 구현했습니다. Flutter WebView Bridge로 웹 코드를 iOS·Android 앱으로 래핑해 단일 코드베이스로 멀티 플랫폼을 지원합니다.",
      },
      {
        title: "서울시 교육청 MVP 도입",
        content:
          "개발한 플랫폼이 서울시 교육청에 실제 MVP로 채택되어 운영되었습니다. 실제 사용자 피드백을 반영한 개선 사이클을 경험했습니다.",
      },
    ],
    images: [
      { src: "/projects/como/arch.svg", alt: "코모 아키텍처", caption: "Flutter WebView + Next.js 14 구조" },
    ],
    steps: [
      {
        eyebrow: "01 · 서비스",
        title: "직장인 취미 매칭 플랫폼을 만들었습니다.",
        desc: "퇴근 후 함께 취미를 즐길 사람을 찾는 것이 생각보다 어렵다는 문제에서 시작했습니다.",
        did: "취미 카테고리 검색, 매칭 피드, 커뮤니티 기능을 기획·개발했습니다.",
        image: { src: "/projects/como/thumbnail.svg", alt: "코모", caption: "직장인 취미 플랫폼" },
      },
      {
        eyebrow: "02 · 아키텍처",
        title: "Next.js 14 웹을 Flutter WebView로 앱화했습니다.",
        desc: "단일 코드베이스로 웹·iOS·Android를 동시에 지원하는 구조를 설계했습니다.",
        did: "Vercel Edge Deploy로 CI/CD를 자동화하고 빠른 배포 주기를 유지했습니다.",
        image: { src: "/projects/como/arch.svg", alt: "코모 아키텍처", caption: "서비스 아키텍처 구조도" },
      },
      {
        eyebrow: "03 · MVP 도입",
        title: "서울시 교육청에 실제 MVP로 채택됐습니다.",
        desc: "실제 사용자 환경에서 플랫폼이 운영되며 검증을 거쳤습니다.",
        did: "운영 데이터를 기반으로 UX를 개선하고 안정성을 높이는 작업을 진행했습니다.",
      },
    ],
  },
  {
    slug: "speakdog",
    tag: "MOBILE · ACCESSIBILITY",
    title: "스픽독 (Speakdog)",
    desc: "시각장애인을 위한 PDF 리더 앱으로, TTS 음성 합성으로 문서를 들려주는 서비스입니다.",
    thumbnail: "/projects/speakdog/thumbnail.svg",
    chips: ["React Native", "React", "AWS", "TypeScript", "TTS", "S3"],
    placeholder: "[ 스픽독 아키텍처 ]",
    company: "팀 프로젝트",
    period: "2023",
    role: "앱 개발 · 프론트엔드",
    demoUrl: "https://www.youtube.com/watch?v=qAf9XjZlnCA",
    overview:
      "시각장애인이 PDF 문서를 접근하기 어렵다는 문제를 해결하기 위한 앱입니다. React Native로 iOS·Android 앱을 만들고, TTS 엔진으로 PDF 텍스트를 음성으로 변환합니다. AWS S3에 PDF를 저장하고 Lambda로 텍스트를 추출, API Gateway로 클라이언트에 제공합니다.",
    highlights: [
      "React Native iOS · Android 앱 개발",
      "TTS 음성 합성으로 PDF 텍스트 읽어주기",
      "AWS S3 PDF 저장 · Lambda 텍스트 추출 파이프라인",
      "React 웹 뷰어 · 어드민 페이지 개발",
      "시각장애인 접근성 중심 UX 설계",
    ],
    sections: [
      {
        title: "문제 정의",
        content:
          "시각장애인은 일반 PDF 리더를 사용하기 어렵습니다. 화면 낭독기가 있지만 PDF 구조 파싱이 제대로 되지 않아 문서 내용을 정확히 전달하지 못하는 경우가 많습니다. 스픽독은 이 문제를 해결하기 위해 PDF를 직접 파싱해 정제된 텍스트를 TTS로 읽어줍니다.",
      },
      {
        title: "기술 구조",
        content:
          "React Native 앱에서 PDF를 업로드하면 AWS S3에 저장됩니다. Lambda가 PDF를 파싱해 텍스트를 추출하고, API Gateway를 통해 앱에 전달합니다. 앱은 TTS 엔진으로 텍스트를 음성으로 변환해 재생합니다.",
      },
      {
        title: "접근성 UX",
        content:
          "시각장애인이 터치만으로 앱을 제어할 수 있도록 큰 터치 영역, 명확한 포커스 순서, 음성 피드백을 설계했습니다. React 웹 어드민에서 PDF 관리와 업로드를 지원합니다.",
      },
    ],
    images: [
      { src: "/projects/speakdog/arch.svg", alt: "스픽독 아키텍처", caption: "React Native + AWS 구조도" },
      { src: "https://img.youtube.com/vi/qAf9XjZlnCA/maxresdefault.jpg", alt: "스픽독 시연 영상", caption: "시연 영상 (YouTube)" },
    ],
    steps: [
      {
        eyebrow: "01 · 문제",
        title: "시각장애인이 PDF 문서에 접근하기 어렵습니다.",
        desc: "기존 화면 낭독기는 PDF 구조를 제대로 파싱하지 못해 내용을 정확히 전달하지 못합니다.",
        did: "PDF를 직접 파싱해 정제된 텍스트를 TTS로 읽어주는 앱을 기획·개발했습니다.",
        image: { src: "/projects/speakdog/thumbnail.svg", alt: "스픽독", caption: "시각장애인 PDF 리더" },
      },
      {
        eyebrow: "02 · 아키텍처",
        title: "React Native 앱과 AWS 백엔드를 연결했습니다.",
        desc: "S3 저장 → Lambda 파싱 → API Gateway → 앱 TTS 재생 파이프라인을 구축했습니다.",
        did: "React Native(iOS·Android) + React 웹 어드민 + AWS 서버리스로 풀스택을 구성했습니다.",
        image: { src: "/projects/speakdog/arch.svg", alt: "스픽독 아키텍처", caption: "서비스 아키텍처 구조도" },
      },
      {
        eyebrow: "03 · 접근성",
        title: "시각장애인 중심 UX를 설계했습니다.",
        desc: "큰 터치 영역, 명확한 포커스 순서, 음성 피드백으로 터치만으로 앱을 완전히 제어할 수 있습니다.",
        did: "TTS 속도 조절, 구간 반복, 북마크 기능으로 실사용성을 높였습니다.",
      },
      {
        eyebrow: "04 · 시연",
        title: "YouTube에서 시연 영상을 확인할 수 있습니다.",
        desc: "앱의 전체 사용 흐름과 TTS 음성 읽기 기능을 시연합니다.",
        did: "youtu.be/qAf9XjZlnCA 에서 확인 가능합니다.",
        image: { src: "https://img.youtube.com/vi/qAf9XjZlnCA/maxresdefault.jpg", alt: "스픽독 시연", caption: "▶  시연 영상 보기" },
      },
    ],
  },
  {
    slug: "uri",
    tag: "ANDROID · SOCIAL IMPACT",
    title: "우리 (Uri)",
    desc: "소아우울증 아동을 위한 AI 챗봇 앱으로, 감정 대화와 보호자 연결을 지원합니다.",
    thumbnail: "/projects/uri/thumbnail.svg",
    chips: ["Android", "AI Chatbot", "NLP", "Java", "감정 케어"],
    placeholder: "[ 우리 아키텍처 ]",
    company: "팀 프로젝트",
    period: "2022 — 2023",
    role: "Android 앱 개발",
    demoUrl: "https://www.youtube.com/watch?v=BLpkjLulnyU",
    overview:
      "소아우울증을 앓는 아동이 감정을 표현하기 어렵다는 문제를 해결하기 위한 Android 챗봇 앱입니다. 캐릭터 기반 대화 UI로 아이가 자연스럽게 감정을 표현하도록 유도하고, AI가 감정 상태를 분석해 보호자·전문가에게 리포트를 제공합니다.",
    highlights: [
      "Android Native 앱 개발",
      "AI 챗봇 엔진 · NLP 기반 감정 분류",
      "캐릭터 기반 대화 UI로 아동 친화적 UX 설계",
      "감정 추이 리포트 · 보호자 알림 시스템",
      "소아우울증 조기 감지 케어 플로우 설계",
    ],
    sections: [
      {
        title: "문제 정의",
        content:
          "소아우울증 아동은 감정을 언어로 표현하는 것 자체가 어렵습니다. 전문 상담 전에 일상적인 감정 표현 창구가 필요했습니다. 우리는 아이가 좋아하는 캐릭터와 대화하듯 감정을 표현할 수 있는 앱을 만들었습니다.",
      },
      {
        title: "챗봇 설계",
        content:
          "NLP 기반 감정 분류 모델이 아이의 대화에서 감정 상태를 파악합니다. 대화 시나리오 트리로 상황에 맞는 응답을 생성하고, 반복적인 부정 감정이 감지되면 보호자에게 알림을 전송합니다.",
      },
      {
        title: "보호자 연결",
        content:
          "아이의 감정 추이 데이터를 시각화한 리포트를 보호자 뷰에서 확인할 수 있습니다. 위험 신호 감지 시 전문 상담 기관 연결 안내를 제공합니다.",
      },
    ],
    images: [
      { src: "/projects/uri/arch.svg", alt: "우리 아키텍처", caption: "Android + AI Chatbot 구조도" },
      { src: "https://img.youtube.com/vi/BLpkjLulnyU/maxresdefault.jpg", alt: "우리 시연 영상", caption: "시연 영상 (YouTube)" },
    ],
    steps: [
      {
        eyebrow: "01 · 문제",
        title: "소아우울증 아동에게 감정 표현 창구가 필요했습니다.",
        desc: "아이들은 감정을 언어로 표현하기 어려워 증상이 악화될 때까지 발견이 늦어집니다.",
        did: "캐릭터 기반 대화 UI로 아이가 자연스럽게 감정을 표현할 수 있는 앱을 기획했습니다.",
        image: { src: "/projects/uri/thumbnail.svg", alt: "우리", caption: "소아우울증 케어 챗봇" },
      },
      {
        eyebrow: "02 · 아키텍처",
        title: "Android 앱에 AI 챗봇 엔진을 연결했습니다.",
        desc: "NLP 감정 분류 → 대화 시나리오 → 리포트 생성 파이프라인을 구축했습니다.",
        did: "Android Native 앱 + AI 챗봇 엔진 + 보호자 알림 시스템으로 케어 플로우를 완성했습니다.",
        image: { src: "/projects/uri/arch.svg", alt: "우리 아키텍처", caption: "서비스 아키텍처 구조도" },
      },
      {
        eyebrow: "03 · 케어 플로우",
        title: "감정 추이를 분석해 보호자와 연결합니다.",
        desc: "반복되는 부정 감정이 감지되면 보호자 알림과 전문 상담 안내를 제공합니다.",
        did: "감정 추이 차트·리포트로 보호자가 아이의 상태를 시각적으로 파악할 수 있습니다.",
      },
      {
        eyebrow: "04 · 시연",
        title: "YouTube에서 시연 영상을 확인할 수 있습니다.",
        desc: "앱의 전체 대화 흐름과 감정 케어 기능을 시연합니다.",
        did: "youtu.be/BLpkjLulnyU 에서 확인 가능합니다.",
        image: { src: "https://img.youtube.com/vi/BLpkjLulnyU/maxresdefault.jpg", alt: "우리 시연", caption: "▶  시연 영상 보기" },
      },
    ],
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
    role: "프론트엔드 개발자",
    org: "(주)골드앤컴퍼니 · 금 거래 플랫폼",
    desc: "금 거래 B2C/B2B 앱 프론트엔드. WebView 브릿지, 결제, 성능·트래픽 최적화, CI/CD.",
  },
  {
    date: "2025.03 — 2026.01",
    role: "프론트엔드 리드",
    org: "(주)케어마인더 · 병동 간호 플랫폼",
    desc: "WebView + Next.js 전환 주도. 모노레포·디자인 시스템·S3 실시간 배포.",
  },
  {
    date: "2024.09 — 2025.02",
    role: "프론트엔드 개발자",
    org: "(주)리케어랩 · 간병 매칭 (케어나인)",
    desc: "홈 렌더링 ISR/SSR 전환, RN–WebView 브릿지. LCP 5.2s → 2.1s.",
  },
  {
    date: "2018.03 — 2025.08",
    role: "컴퓨터공학 학사 · 졸업",
    org: "한림대학교",
    desc: "컴퓨터공학 전공. 해커톤·캡스톤·창업 대회 등 활동.",
  },
];

export const awards = [
  { year: "2025", title: "스타트업에서 스타팅 개발자로 살아남기", org: "SKKAI · 연사", kind: "TALK", isTalk: true },
  { year: "2024", title: "정주영 창업경진대회 — 우수상 · 인기상", org: "아산나눔재단", kind: "AWARD", isTalk: false },
  { year: "2023", title: "오픈소스 SW 웹 해커톤 — 금상", org: "한림대학교", kind: "AWARD", isTalk: false },
  { year: "2023", title: "캡스톤 디자인", org: "한림대학교", kind: "PROJECT", isTalk: false },
  { year: "2022", title: "KBSC ESG 공모전 — 장려상", org: "국민은행", kind: "AWARD", isTalk: false },
];

export type StackItem = { n: string; s: string };
export type StackCategory = { title: string; en: string; items: StackItem[] };

export const stack: StackCategory[] = [
  {
    title: "언어",
    en: "LANGUAGES",
    items: [
      { n: "TypeScript", s: "typescript" },
      { n: "JavaScript", s: "javascript" },
      { n: "HTML5", s: "html5" },
      { n: "CSS3", s: "css3" },
      { n: "Python", s: "python" },
    ],
  },
  {
    title: "프론트엔드",
    en: "FRONTEND",
    items: [
      { n: "React", s: "react" },
      { n: "Next.js", s: "nextdotjs" },
      { n: "React Native", s: "react" },
      { n: "Electron", s: "electron" },
      { n: "Vite", s: "vite" },
      { n: "React Query", s: "reactquery" },
      { n: "Zustand", s: "zustand" },
      { n: "Recoil", s: "recoil" },
      { n: "SWR", s: "swr" },
      { n: "Zod", s: "zod" },
      { n: "Tailwind CSS", s: "tailwindcss" },
      { n: "Storybook", s: "storybook" },
      { n: "Styled Comp.", s: "styledcomponents" },
      { n: "Flutter", s: "flutter" },
    ],
  },
  {
    title: "테스트",
    en: "TESTING",
    items: [
      { n: "Jest", s: "jest" },
      { n: "Vitest", s: "vitest" },
      { n: "Cypress", s: "cypress" },
      { n: "Playwright", s: "playwright" },
    ],
  },
  {
    title: "인프라·도구",
    en: "INFRA & TOOLS",
    items: [
      { n: "GitHub Actions", s: "githubactions" },
      { n: "AWS", s: "amazonaws" },
      { n: "Docker", s: "docker" },
      { n: "Jenkins", s: "jenkins" },
      { n: "PM2", s: "pm2" },
      { n: "Figma", s: "figma" },
      { n: "Cursor", s: "cursor" },
      { n: "Claude Code", s: "anthropic" },
      { n: "Jira", s: "jira" },
      { n: "Notion", s: "notion" },
    ],
  },
];

/* 기존 skills (하위 호환) */
export const skills = [
  { ico: "FE", label: "Frontend", chips: ["React", "Next.js", "React Native", "TypeScript", "Electron"] },
  { ico: "ST", label: "State · Data", chips: ["React Query", "Zustand", "Recoil", "SWR", "Zod"] },
  { ico: "UI", label: "Styling", chips: ["Tailwind CSS", "Storybook", "CSS Modules", "Styled Components"] },
  { ico: "QA", label: "Testing", chips: ["Jest", "Vitest", "Cypress", "Playwright"] },
  { ico: "OP", label: "Infra · CI/CD", chips: ["GitHub Actions", "Jenkins", "AWS", "Docker", "PM2"] },
  { ico: "TL", label: "Tools", chips: ["Figma", "Cursor", "Claude Code", "Jira", "Notion"] },
];

export const stats = [
  { num: 90, suf: "점", label: "Lighthouse 개선" },
  { num: 3, suf: "곳", label: "스타트업 경력" },
  { num: 60, suf: "%↓", label: "LCP 개선" },
  { num: 30, suf: "%", label: "초기 로딩 개선" },
];
