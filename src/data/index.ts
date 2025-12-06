import { Project, Experience, Award, Library, Skill } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "CareFlow",
    description: "간호사를 위한 통합 케어 플랫폼",
    fullDescription: `간호사를 위한 통합 케어 플랫폼으로, 웹앱과 태블릿 앱을 통합한 솔루션입니다.

주요 기능:
• 실시간 환자 모니터링
• 웹소켓 기반 채팅 시스템
• SSE 알림 시스템
• Electron 기반 데스크톱 앱

기술적 도전:
• Jenkins/Docker/Nginx CI/CD 파이프라인
• JWT 기반 인증 시스템
• 웹뷰 기반 Electron 앱 개발
• 자동 업데이트 시스템

성과:
• 번들 사이즈 25% 감소
• 배포 시간 80% 단축
• 사용자 만족도 4.8/5.0`,
    image: "/careminder.png",
    tags: ["React", "Electron", "Next.js", "TypeScript", "Docker"],
    demoUrl: "#",
    githubUrl: "#",
    isAward: false,
    category: "Healthcare",
    featured: true,
    year: "2024",
    role: "Frontend Developer",
    team: "4명",
    impact: "번들 사이즈 25% 감소, 배포 시간 80% 단축",
  },
  {
    id: 2,
    title: "TemMoa!",
    description: "팀 프로젝트 협업 플랫폼",
    fullDescription: `팀 프로젝트 관리를 위한 협업 플랫폼으로, Atomic Design과 Storybook을 활용한 체계적인 개발을 진행했습니다.

주요 기능:
• 팀 프로젝트 일정 관리
• 작업 분배 및 진행 상황 추적
• 실시간 협업 도구
• 문서 공유 및 버전 관리

기술적 도전:
• Atomic Design 시스템 구축
• Storybook을 활용한 컴포넌트 개발
• Jest를 통한 테스트 자동화
• 실시간 협업 기능 구현

성과:
• 팀 프로젝트 완료율 40% 향상
• 5,000명 이상의 활성 사용자
• 2023년 오픈소스SW웹 해커톤 금상`,
    image: "/teammoa.webp",
    tags: ["React", "TypeScript", "Storybook", "Jest", "Atomic Design"],
    demoUrl: "#",
    githubUrl: "#",
    isAward: true,
    category: "Collaboration",
    featured: true,
    year: "2023",
    role: "Frontend Developer",
    team: "6명",
    impact: "팀 프로젝트 완료율 40% 향상",
  },
  {
    id: 3,
    title: "플리 한림",
    description: "대학생 중고거래 플랫폼",
    fullDescription: `대학생을 위한 중고 거래 플랫폼으로, 실시간 채팅과 위치 기반 서비스를 제공합니다.

주요 기능:
• 실시간 채팅 기반 거래
• 상품 검색 및 필터링
• 거래 후기 시스템
• 위치 기반 상품 추천

기술적 도전:
• Sendbird를 활용한 실시간 채팅
• 이미지 최적화 및 CDN 활용
• 위치 기반 서비스 구현
• 보안 강화된 거래 시스템

성과:
• 한림대 재학생 중 70% 가입
• 월간 거래액 1,000만원 달성
• 2022년 캡스톤 디자인 입상`,
    image: "/fleahallym.webp",
    tags: ["Next.js", "Nest.js", "Sendbird", "TypeScript", "Recoil"],
    demoUrl: "#",
    githubUrl: "#",
    isAward: true,
    category: "E-commerce",
    featured: false,
    year: "2022",
    role: "Full-stack Developer",
    team: "4명",
    impact: "월간 거래액 1,000만원 달성",
  },
  {
    id: 4,
    title: "Uri",
    description: "AI 기반 아동 학습 도우미",
    fullDescription: `아동을 위한 AI 기반 학습 도우미 애플리케이션으로, Ko-GPT2 모델을 활용한 맞춤형 학습을 제공합니다.

주요 기능:
• AI 기반 학습 가이드
• 맞춤형 학습 콘텐츠
• 학습 진도 추적
• 부모 모니터링 시스템

기술적 도전:
• Ko-GPT2 모델 활용
• 안드로이드 네이티브 개발
• Python Flask 백엔드 구축
• 실시간 학습 데이터 분석

성과:
• 2021년 ESG 공모전 장려상
• 500명 이상의 활성 사용자
• 학습 효과 35% 향상`,
    image: "/uri.webp",
    tags: ["Kotlin", "Ko-GPT2", "Android", "Python", "Flask"],
    demoUrl: "#",
    githubUrl: "#",
    isAward: true,
    category: "Education",
    featured: false,
    year: "2021",
    role: "Mobile Developer",
    team: "3명",
    impact: "학습 효과 35% 향상",
  },
  {
    id: 5,
    title: "CoMo",
    description: "사내 동호회 관리 시스템",
    fullDescription: `사내 동호회 관리를 위한 웹 애플리케이션으로, Next.js 13 App Router를 도입한 현대적인 개발을 진행했습니다.

주요 기능:
• 동호회 생성 및 관리
• 영수증 관리
• 일정 관리 및 알림
• 활동 기록 및 갤러리

기술적 도전:
• Next.js 13 App Router 도입
• 실시간 알림 시스템 구현
• 이미지 최적화 및 캐싱 전략

성과:
• 사내 동호회 관리 시간 50% 단축
• 동호회 참여율 30% 증가
• 사용자 만족도 4.5/5.0 달성`,
    image: "/como.png",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "#",
    isAward: false,
    category: "Management",
    featured: false,
    year: "2024",
    role: "Frontend Developer",
    team: "2명",
    impact: "동호회 참여율 30% 증가",
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    period: "2024.09 - 현재",
    role: "Frontend Developer",
    company: "케어 마인더",
    description: "간호사를 위한 통합 케어 플랫폼 개발",
    achievements: [
      {
        title: "웹뷰 기반 ReactNative App 개발_CareVoice",
        description: [
          { text: "Jenkins/Docker/Nginx 기반 CI/CD 파이프라인 구축" },
          { text: "JWT Token 기반 로그인 인증 시스템 개발" },
          {
            text: "Stomp JS를 활용한 웹소켓 기반 실시간 채팅 및 구현 읽음 기능 개발",
          },
          { text: "FCM 기반 앱 알림 시스템 구현" },
          {
            text: "S3 스토리지를 활용한 원격 병원별 앱 업데이트 개발",
          },
          { text: "데스크탑 앱 내 네이티브 커스텀 알림 구현" },
        ],
      },
      {
        title: "Electron Web App 개발_CareFlow",
        description: [
          { text: "Jenkins/Docker/Nginx 기반 CI/CD 파이프라인 구축" },
          { text: "JWT Token 기반 로그인 인증 시스템 개발" },
          {
            text: "Stomp JS를 활용한 웹소켓 기반 실시간 채팅 및 구현 읽음 기능 개발",
          },
          { text: "SSE 기반 웹 알림 시스템 구현" },
          { text: "웹뷰 기반 Electron 앱 개발" },
          {
            text: "Github Actions를 통한 자동 업데이트 시스템 구축",
          },
          { text: "데스크탑 앱 내 네이티브 커스텀 알림 구현" },
        ],
      },
      {
        title: "MonoRepo 아키텍처 도입",
        description: [
          { text: "pnpm과 turbopack를 통한 통합 레포지토리 관리" },
          { text: "Jenkins와 Docker를 통한 CI/CD 파이프라인 구축" },
          { text: "번들 사이즈 25% 감소 및 종속성 충돌 방지" },
        ],
      },
      {
        title: "디자인 시스템(CDS) 구축",
        description: [
          { text: "Atomic Design과 Storybook을 통한 디자인 시스템 개발" },
          { text: "컴포넌트 재사용성 80% 향상" },
        ],
      },
    ],
    skills: [
      "React",
      "React Native",
      "Electron",
      "Next.js",
      "TypeScript",
      "Storybook",
      "Jest",
      "Docker",
      "Jenkins",
      "MonoRepo",
    ],
    color: "#3B82F6",
  },
  {
    id: 2,
    period: "2024.09 - 2025.02",
    role: "Frontend Developer",
    company: "ReCarelab",
    description: "간병인 매칭 플랫폼 개발",
    achievements: [
      {
        title: "케어나인 앱 리빌딩",
        description: [
          {
            text: "홈 화면 UI 개선 및 매칭 현황 그래프 신규 기능",
            link: "https://velog.io/@omnipo/%ED%99%88-%ED%99%94%EB%A9%B4-UIUX-%EA%B0%9C%EC%84%A0%ED%95%98%EA%B8%B0",
          },
          {
            text: "CSR → ISR 전환으로 페이지 로드 속도 40% 향상",
            link: "https://velog.io/@omnipo/%EB%A0%8C%EB%8D%94%EB%A7%81-%EB%B0%A9%EC%8B%9D%EC%9D%98-%EC%84%A0%ED%83%9D%EA%B3%BC-%EB%8F%84%EC%9E%85",
          },
          {
            text: "스택 라우터 개발로 UX 개선",
            link: "https://velog.io/@omnipo/%EC%9B%B9%EB%B7%B0-%EC%8A%A4%ED%83%9D-%EA%B5%AC%ED%98%84%EA%B8%B0",
          },
          {
            text: "스켈레톤 UI 개발로 로딩 경험 개선",
            link: "https://velog.io/@omnipo/%EC%8A%A4%EC%BC%88%EB%A0%88%ED%86%A4-%EB%A1%9C%EB%94%A9-UI",
          },
        ],
      },
      {
        title: "포인트 시스템 개발",
        description: [
          { text: "유저 포인트 출금 및 충전 시스템 개발" },
          { text: "어드민 페이지 포인트 관리 시스템 구축" },
        ],
      },
      {
        title: "랜딩 페이지 최적화",
        description: [
          {
            text: "LCP 2초 이내 달성으로 Core Web Vitals 개선",
            link: "https://www.carenine.co.kr/",
          },
        ],
      },
    ],
    skills: [
      "TypeScript",
      "Next.js",
      "React Native",
      "Supabase",
      "Zustand",
      "Zod",
      "SWR",
      "TailwindCSS",
      "Jest",
    ],
    color: "#10B981",
  },
  {
    id: 3,
    period: "2024.04 - 2025.08",
    role: "Frontend Developer",
    company: "이들",
    description: "해외 배송 대행 플랫폼 개발",
    achievements: [
      {
        title: "올땀 플랫폼 개발",
        description: [
          { text: "상품 수집 및 등록 페이지 개발" },
          { text: "관리자 페이지 제작" },
          { text: "PWA를 통한 웹앱 개발" },
        ],
      },
    ],
    skills: ["React", "TypeScript", "Recoil", "Emotion", "Jest"],
    color: "#F59E0B",
  },
];

export const awards: Award[] = [
  {
    id: 1,
    title: "정주영 창업경진대회 우수상 / 인기상",
    organization: "현대자동차그룹",
    date: "2024.11.20",
    description: "혁신적인 비즈니스 모델 제안",
    category: "창업",
    icon: "🏆",
  },
  {
    id: 2,
    title: "오픈소스SW웹 해커톤 금상",
    organization: "한림대학교",
    date: "2023.09.18",
    description: "오픈소스 기술을 활용한 혁신적인 웹 서비스 개발",
    category: "해커톤",
    icon: "🥇",
  },
  {
    id: 3,
    title: "캡스톤 디자인 입상",
    organization: "한림대학교",
    date: "2022.06.10",
    description: "실무 중심의 프로젝트 개발 및 발표",
    category: "프로젝트",
    icon: "🎯",
  },
  {
    id: 4,
    title: "ESG공모전 장려상",
    organization: "KBSC 국민은행",
    date: "2021.10.01",
    description: "ESG 가치 실현을 위한 혁신적인 금융 서비스 제안",
    category: "공모전",
    icon: "🌱",
  },
  {
    id: 5,
    title: "아이디어 해커톤 장려상",
    organization: "한림대학교",
    date: "2021.04.10",
    description: "창의적인 문제 해결 방안 제시",
    category: "해커톤",
    icon: "💡",
  },
];

export const skills: Skill[] = [
  { name: "React", level: 95, category: "frontend", icon: "⚛️" },
  { name: "TypeScript", level: 90, category: "frontend", icon: "🔷" },
  { name: "Next.js", level: 88, category: "frontend", icon: "▲" },
  { name: "Vue.js", level: 75, category: "frontend", icon: "💚" },
  { name: "React Native", level: 85, category: "mobile", icon: "📱" },
  { name: "Electron", level: 80, category: "tools", icon: "⚡" },
  { name: "Node.js", level: 70, category: "backend", icon: "🟢" },
  { name: "Python", level: 65, category: "backend", icon: "🐍" },
  { name: "Docker", level: 75, category: "tools", icon: "🐳" },
  { name: "Jenkins", level: 70, category: "tools", icon: "🔧" },
  { name: "Figma", level: 80, category: "design", icon: "🎨" },
  { name: "Storybook", level: 85, category: "tools", icon: "📚" },
];

export const libraries: Library[] = [
  {
    id: 1,
    name: "use-intersection",
    description: "IntersectionObserver를 간편하게 사용하는 React 훅",
    fullDescription: `IntersectionObserver API를 React에서 쉽게 사용할 수 있는 커스텀 훅입니다.

주요 기능:
• 요소의 가시성 감지
• 스크롤 기반 애니메이션 트리거
• 무한 스크롤 구현 지원
• 성능 최적화된 옵저버 관리

기술적 특징:
• 메모리 누수 방지를 위한 자동 정리
• TypeScript 지원으로 타입 안전성 보장
• 다양한 옵션 설정 가능
• React 18 Concurrent Features 호환

사용 통계:
• GitHub Stars: 85+
• NPM 다운로드: 3,200+`,
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
    fullDescription: `React 애플리케이션에서 모달 상태를 쉽게 관리할 수 있는 커스텀 훅입니다.

주요 기능:
• 모달 열기/닫기 상태 관리
• 다중 모달 지원
• 키보드 이벤트 처리 (ESC 키)
• 포커스 트랩 구현
• 접근성 고려

기술적 특징:
• TypeScript로 작성된 타입 안전한 훅
• Jest를 활용한 테스트 커버리지 90% 달성
• React 18의 새로운 기능 지원
• 번들 크기 최적화

사용 통계:
• GitHub Stars: 120+
• NPM 다운로드: 58`,
    techStack: ["React", "TypeScript", "Jest"],
    downloads: 58,
    url: "https://www.npmjs.com/package/@ahnseungchan/webviewkit?activeTab=readme",
    featured: false,
  },
];
