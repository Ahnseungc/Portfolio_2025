import { Project, Experience, Award, Library, Skill } from "@/types";

/** 이력서(2026) 기반 + CoMo, Uri(우리), 웹뷰 브릿지 */
export const projects: Project[] = [
  {
    id: 1,
    slug: "gold-apptech",
    title: "금 모으기 앱테크 고도화",
    description: "Flutter WebView · Next.js 브릿지 기반 보상형 광고·CRM 푸시",
    fullDescription: `(주)골드앤컴퍼니 — 방치형 앱테크 서비스 고도화

주요 기여
• Google AdMob 기반 보상형 광고 시청 플로우 설계·구현
• Flutter WebView ↔ Next.js 브릿지(인증·이벤트·라우팅 동기화)
• App Link / OneLink 유입 경로 통합 및 랜딩 분기
• OneSignal CRM 푸시(리마인드·재참여·이탈 복귀), AppsFlyer/Firebase 전환 추적

성과
• 미션 참여율 +13%, 딥링크 후 목표 액션 전환 +12%
• D+7 재방문 +20%, 브릿지 오류율 −20%`,
    image: "/globe.svg",
    tags: ["Flutter", "Next.js", "TypeScript", "AdMob", "OneSignal"],
    demoUrl: "https://github.com/Ahnseungc",
    githubUrl: "https://github.com/Ahnseungc",
    isAward: false,
    category: "FinTech",
    featured: true,
    year: "2026",
    role: "Frontend Developer",
    team: "(주)골드앤컴퍼니",
    impact: "미션 참여율 +13% · 브릿지 오류 −20%",
  },
  {
    id: 2,
    slug: "gold-purchase",
    title: "금 매입 서비스",
    description: "토스페이먼츠 · 웹뷰 결제/복귀 · GitHub Actions + ECR CI/CD",
    fullDescription: `전국 택배 금 거래소 웹/앱 연동 프로젝트

주요 기여
• 토스페이먼츠 결제·완료·복귀 흐름, 직접 방문·안심 수거·직접 택배·거래내역·신청 플로우
• FCM → OneSignal 전환, 웹뷰 브릿지(딥링크·상태 동기) 강화
• GitHub Actions + Amazon ECR 기반 빌드·이미지 배포 자동화

성과
• CRM·푸시 운영 창구 단일화, 빌드·배포 약 10분→5분`,
    image: "/vercel.svg",
    tags: ["Next.js", "TypeScript", "Docker", "AWS ECR", "Toss Payments"],
    demoUrl: "https://velog.io/@omnipo/posts",
    githubUrl: "https://github.com/Ahnseungc",
    isAward: false,
    category: "FinTech",
    featured: true,
    year: "2026",
    role: "Frontend Developer",
    team: "(주)골드앤컴퍼니",
    impact: "배포 시간 단축 · 결제·복귀 UX 정리",
  },
  {
    id: 3,
    slug: "qr-bed-order",
    title: "QR 기반 병상 오더",
    description: "병상 QR · 세션·위치 검증 · 토스페이먼츠 결제 연동",
    fullDescription: `(주)케어마인더 — 병상 단위 주문 플로우

주요 기여
• QR 진입 플로우 단순화, URL 파라미터 암·복호화 및 세션 만료 처리
• GPS 병원 반경 300m 제한, 검증 실패 시 안내 플로우 표준화
• 토스페이먼츠 연동, Docker·ECR 배포

성과
• 주문 시작 완료율 20%→30%, 만료 세션 재진입 차단 약 99%`,
    image: "/careminder.png",
    tags: ["Next.js", "TypeScript", "React", "Docker", "AWS ECR"],
    demoUrl: "https://velog.io/@omnipo/posts",
    githubUrl: "https://github.com/Ahnseungc",
    isAward: false,
    category: "Healthcare",
    featured: true,
    year: "2025",
    role: "Frontend Developer",
    team: "(주)케어마인더",
    impact: "완료율 +10%p · 비인가 위치 차단 약 96%",
  },
  {
    id: 4,
    slug: "caredesk-platform",
    title: "병동 환자 요청 관리 플랫폼",
    description: "CareDesk · 모노레포 · WebView+Next.js 전환 · CDS",
    fullDescription: `CareFlow / CareVoice / CareDesk 공통 구조

주요 기여
• 스피커 없는 병동용 알림 전용 CareDesk 기획·개발
• React Native 중심 → WebView + Next.js 전환
• 요청 접수→처리→완료 플로우 재설계, 저사양 태블릿 최적화(rAF, CSS 애니메이션)
• Atomic Design 기반 CDS, S3 자체 업데이트 + FCM 트리거, 모니터링·원격 대응

성과
• 초기 로딩 약 30% 개선, 요청 완료율 약 20% 향상, 코드량 약 40% 절감`,
    image: "/careminder.png",
    tags: ["React Native", "Next.js", "WebView", "TypeScript", "FCM"],
    demoUrl: "https://github.com/Ahnseungc",
    githubUrl: "https://github.com/Ahnseungc",
    isAward: false,
    category: "Healthcare",
    featured: false,
    year: "2025",
    role: "Frontend Developer",
    team: "(주)케어마인더",
    impact: "로딩 −30% · UI 작업 속도 약 +50%",
  },
  {
    id: 5,
    slug: "carenine-home",
    title: "케어나인 홈·렌더링 고도화",
    description: "CSR→ISR/SSR · RN–WebView 스택 라우터 · 스켈레톤 UX",
    fullDescription: `(주)리케어랩 — 간병 매칭 플랫폼

주요 기여
• 홈 UI/UX·그래프, 매칭 단계 인지→행동 플로우
• CSR→ISR/SSR 혼합, 웹뷰 초기 데이터 구조 정비
• 스택 라우터·양방향 브릿지, 1초 이상 로딩 시에만 스켈레톤 노출

성과
• 연장률 23%→35%, 홈 이탈 41%→30%, FCP/LCP 약 30% 개선`,
    image: "/fleahallym.webp",
    tags: ["Next.js", "React Native", "WebView", "TypeScript"],
    demoUrl: "https://velog.io/@omnipo/posts",
    githubUrl: "https://github.com/Ahnseungc",
    isAward: false,
    category: "Healthcare",
    featured: false,
    year: "2024",
    role: "Frontend Developer",
    team: "(주)리케어랩",
    impact: "연장률 +12%p · 푸시 도달 62%→81%",
  },
  {
    id: 6,
    slug: "temmoa",
    title: "TemMoa!",
    description: "팀 프로젝트 협업 플랫폼 — 오픈소스SW웹 해커톤 금상",
    fullDescription: `오픈소스SW웹 해커톤 금상 수상작

주요 내용
• Atomic Design·Storybook·Jest 기반 협업 플랫폼
• 팀 일정·작업 분배·문서 공유 흐름을 하나의 제품으로 통합

성과
• 해커톤 금상, 컴포넌트 재사용성과 테스트 자동화 경험 축적`,
    image: "/teammoa.webp",
    tags: ["React", "TypeScript", "Storybook", "Jest"],
    demoUrl: "https://github.com/Ahnseungc",
    githubUrl: "https://github.com/Ahnseungc",
    isAward: true,
    category: "Collaboration",
    featured: false,
    year: "2023",
    role: "Frontend Developer",
    team: "6명",
    impact: "해커톤 금상",
  },
  {
    id: 7,
    slug: "como",
    title: "CoMo",
    description: "사내 동호회 관리 — Next.js App Router · 영수증·일정",
    fullDescription: `사내 동호회 운영을 위한 웹 애플리케이션

주요 기능
• 동호회 생성·가입, 영수증·회비 관리
• 일정·알림, 활동 기록 및 갤러리

기술
• Next.js App Router, TypeScript, Tailwind CSS
• 실시간 알림·이미지 최적화·캐싱 전략

성과
• 동호회 관리 시간 절감, 참여율·만족도 개선`,
    image: "/como.png",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "App Router"],
    demoUrl: "https://github.com/Ahnseungc",
    githubUrl: "https://github.com/Ahnseungc",
    isAward: false,
    category: "Internal",
    featured: false,
    year: "2024",
    role: "Frontend Developer",
    team: "2명",
    impact: "운영 효율 · 참여율 향상",
  },
  {
    id: 8,
    slug: "uri",
    title: "Uri (우리)",
    description: "Ko-GPT2 기반 아동 학습 도우미 — Android · Flask",
    fullDescription: `아동을 위한 AI 기반 학습 도우미 앱

주요 기능
• Ko-GPT2 기반 학습 가이드·맞춤 콘텐츠
• 학습 진도 추적, 부모 모니터링

기술
• Kotlin 안드로이드, Python Flask, Ko-GPT2 연동

성과
• KBSC ESG 공모전 장려상 연계 프로젝트, 학습 효과·피드백 루프 검증`,
    image: "/uri.webp",
    tags: ["Kotlin", "Ko-GPT2", "Android", "Python", "Flask"],
    demoUrl: "https://github.com/Ahnseungc",
    githubUrl: "https://github.com/Ahnseungc",
    isAward: true,
    category: "Education",
    featured: false,
    year: "2021",
    role: "Mobile Developer",
    team: "3명",
    impact: "ESG 공모전 장려상 계열 제안",
  },
  {
    id: 9,
    slug: "webview-bridge",
    title: "웹뷰 브릿지",
    description: "RN ↔ WebView 스킴·JS 메시지 규약 · NPM WEBVIEWKIT",
    fullDescription: `앱–웹이 끊기지 않게 만드는 브릿지 레이어

무엇을 했나
• 인앱 웹뷰와 네이티브 간 스킴·postMessage 규약 설계, 이벤트·라우팅 동기화
• 딥링크·복귀 경로 정리로 결제·푸시 진입 후 목표 화면 도달률 개선
• 재사용 가능한 스택 내비게이션 패턴을 NPM 패키지로 정리 (@ahnseungchan/webviewkit)

관련 링크
• npm 패키지와 GitHub 저장소에서 구조와 사용 예시를 확인할 수 있습니다.`,
    image: "/window.svg",
    tags: ["React Native", "WebView", "TypeScript", "Monorepo"],
    demoUrl: "https://www.npmjs.com/package/@ahnseungchan/webviewkit",
    githubUrl: "https://github.com/Ahnseungc",
    isAward: false,
    category: "Platform",
    featured: false,
    year: "2024—2026",
    role: "Frontend Developer",
    team: "프로덕트별 협업",
    impact: "브릿지 오류·CS 감소, 전환율 개선",
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    period: "2026.01 - 현재",
    role: "Frontend Developer",
    company: "(주)골드앤컴퍼니",
    description: "전국 택배 금 거래소 · 앱테크 — Next.js / Flutter / 웹뷰 브릿지",
    achievements: [
      {
        title: "금 거래·결제 웹/앱",
        description: [
          { text: "Next.js SSR·RSC 기반 목록·주문·결제·상태 화면, FCP 약 40% 개선" },
          { text: "토스페이먼츠 연동, iOS·Android 웹뷰 결제·복귀·딥링크 처리" },
        ],
      },
      {
        title: "앱테크 · 브릿지",
        description: [
          { text: "Flutter 기반 방치형 앱 — 광고·보상·상태 동기" },
          { text: "웹뷰 스킴·JS 브릿지·메시지 규약 정리, 딥링크로 앱·웹 상태 동기" },
        ],
      },
    ],
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Flutter",
      "React Native",
      "WebView",
    ],
    color: "#F59E0B",
  },
  {
    id: 2,
    period: "2025.03 - 2026.01",
    role: "Frontend Developer",
    company: "(주)케어마인더",
    description: "병동·요청 관리 — 모노레포, CareDesk, WebView+Next.js 전환",
    achievements: [
      {
        title: "플랫폼·운영",
        description: [
          { text: "CareFlow / CareVoice / CareDesk 공통 모노레포 구조" },
          { text: "CareDesk 기획·개발, RN → WebView + Next.js 전환" },
          { text: "요청 플로우 재설계, CDS, S3 자체 업데이트·FCM, 모니터링·원격 대응" },
        ],
      },
      {
        title: "성능·품질",
        description: [
          { text: "저사양 태블릿: rAF, CSS 애니메이션으로 FPS 안정화" },
          { text: "초기 로딩 약 30% 개선, 완료율 약 +20%, 코드량 약 −40%" },
        ],
      },
    ],
    skills: [
      "React",
      "React Native",
      "Next.js",
      "TypeScript",
      "WebView",
      "Electron",
    ],
    color: "#3B82F6",
  },
  {
    id: 3,
    period: "2024.09 - 2025.02",
    role: "Frontend Developer",
    company: "(주)리케어랩",
    description: "케어나인 — 홈 UI/그래프, CSR→ISR/SSR, RN–WebView 스택 라우터",
    achievements: [
      {
        title: "UX·성능",
        description: [
          {
            text: "홈 화면 UI·그래프, 연장률·이탈·CTA 지표 개선",
            link: "https://velog.io/@omnipo/%ED%99%88-%ED%99%94%EB%A9%B4-UIUX-%EA%B0%9C%EC%84%A0%ED%95%98%EA%B8%B0",
          },
          {
            text: "CSR → ISR/SSR 전환, 스켈레톤 조건부 노출",
            link: "https://velog.io/@omnipo/%EB%A0%8C%EB%8D%94%EB%A7%81-%EB%B0%A9%EC%8B%9D%EC%9D%98-%EC%84%A0%ED%83%9D%EA%B3%BC-%EB%8F%84%EC%9E%85",
          },
          {
            text: "웹뷰 스택 라우터·브릿지",
            link: "https://velog.io/@omnipo/%EC%9B%B9%EB%B7%B0-%EC%8A%A4%ED%83%9D-%EA%B5%AC%ED%98%84%EA%B8%B0",
          },
        ],
      },
    ],
    skills: ["TypeScript", "Next.js", "React Native", "WebView", "TailwindCSS"],
    color: "#10B981",
  },
];

export const awards: Award[] = [
  {
    id: 1,
    title: "정주영창업경진대회 우수상·인기상",
    organization: "아산나눔재단",
    date: "2024",
    description: "CareMinder 프론트엔드 리드, 태블릿/PC 웹 앱",
    category: "창업",
    icon: "🏆",
  },
  {
    id: 2,
    title: "오픈소스SW웹 해커톤 금상",
    organization: "한림대학교",
    date: "2023",
    description: "Safety Zone 기반 교내 중고거래 플랫폼",
    category: "해커톤",
    icon: "🥇",
  },
  {
    id: 3,
    title: "한림대 캡스톤 디자인",
    organization: "한림대학교",
    date: "2023",
    description: "OCR·TTS PDF 음성 리딩 앱, 시각장애인 사용자 피드백 반영",
    category: "프로젝트",
    icon: "🎯",
  },
  {
    id: 4,
    title: "kbsc ESG 공모전 장려상",
    organization: "국민은행",
    date: "2022",
    description: "koGPT2 기반 소아 우울 진단·관리 앱 제안",
    category: "공모전",
    icon: "🌱",
  },
];

export const skills: Skill[] = [
  { name: "React", level: 95, category: "frontend", icon: "⚛️" },
  { name: "TypeScript", level: 92, category: "frontend", icon: "🔷" },
  { name: "Next.js", level: 90, category: "frontend", icon: "▲" },
  { name: "Flutter", level: 80, category: "mobile", icon: "🎯" },
  { name: "React Native", level: 88, category: "mobile", icon: "📱" },
  { name: "Electron", level: 82, category: "tools", icon: "⚡" },
  { name: "Python", level: 70, category: "backend", icon: "🐍" },
  { name: "Docker", level: 78, category: "tools", icon: "🐳" },
  { name: "GitHub Actions", level: 80, category: "tools", icon: "🚀" },
  { name: "Jest", level: 82, category: "tools", icon: "✅" },
  { name: "Figma", level: 78, category: "design", icon: "🎨" },
  { name: "Storybook", level: 80, category: "tools", icon: "📚" },
];

export const libraries: Library[] = [
  {
    id: 1,
    name: "use-intersection",
    description: "IntersectionObserver를 간편하게 사용하는 React 훅",
    fullDescription: `IntersectionObserver API를 React에서 쉽게 사용할 수 있는 커스텀 훅입니다.`,
    techStack: ["React", "TypeScript"],
    stars: 85,
    downloads: 3200,
    url: "https://github.com/Ahnseungc/use-intersection",
    featured: true,
  },
  {
    id: 2,
    name: "WEBVIEWKIT",
    description: "모바일 앱 스택 구조를 구현한 라이브러리",
    fullDescription: `React Native–WebView 스택·브릿지 패턴을 위한 패키지.`,
    techStack: ["React", "TypeScript", "Jest"],
    downloads: 58,
    url: "https://www.npmjs.com/package/@ahnseungchan/webviewkit?activeTab=readme",
    featured: true,
  },
];
