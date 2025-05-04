"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Github,
  Mail,
  Linkedin,
  Trophy,
  ArrowRight,
  ChevronLeft,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  isAward: boolean;
}

interface Experience {
  id: number;
  period: string;
  role: string;
  company: string;
  description: string;
  achievements: {
    title: string;
    description: Array<{
      text: string;
      link?: string;
    }>;
  }[];
  skills: string[];
}

interface Award {
  id: number;
  title: string;
  organization: string;
  date: string;
  description?: string;
}

// interface Library {
//   id: number;
//   name: string;
//   description: string;
//   techStack: string[];
//   stars?: number;
//   downloads?: number;
//   url: string;
// }

// interface IntroStep {
//   icon: string;
//   title: string;
//   description: string;
// }

const projects: Project[] = [
  {
    id: 1,
    title: "Edubill",
    description: "똑똑한 학원비 관리 어플",
    fullDescription: `학원비 관리를 위한 모바일 애플리케이션입니다.

주요 기능:
• 학원비 자동 계산 및 관리
• 결제 내역 실시간 추적
• 학부모-학원 간 원활한 소통
• 결제 알림 및 리마인더

기술적 도전:
• Flutter를 활용한 크로스 플랫폼 개발
• 실시간 데이터 동기화 구현
• 보안이 강화된 결제 시스템 구축

성과:
• 2021년 정주영 창업경진대회 우수상 수상
• 1,000명 이상의 활성 사용자 확보
• 학원비 관리 시간 70% 단축`,
    image: "/edubill.webp",
    tags: ["Vue", "TypeScript", "Pinia", "Flutter"],
    demoUrl: "#",
    githubUrl: "#",
    isAward: true,
  },
  {
    id: 2,
    title: "CoMo",
    description: "간편한 사내 동호회 관리",
    fullDescription: `사내 동호회 관리를 위한 웹 애플리케이션입니다.

주요 기능:
• 동호회 생성 및 관리
• 회원 모집 및 관리
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
  },
  {
    id: 3,
    title: "CareMinder",
    description: "더 스마트한 병원 업무의 시작 간호사도 함께 웃을 수 있는 병원",
    fullDescription: `병원 업무 효율화를 위한 통합 관리 시스템입니다.

주요 기능:
• 환자 관리 및 모니터링
• 의료진 스케줄 관리
• 실시간 알림 시스템
• 태블릿 기반 모바일 솔루션

기술적 도전:
• Electron 기반 데스크톱 앱 개발
• 실시간 웹소켓 통신 구현
• 네이티브 알림 시스템 구축
• MonoRepo 구조 설계 및 구현

성과:
• 병원 업무 처리 시간 40% 단축
• 의료진 만족도 90% 달성
• 연간 운영 비용 30% 절감`,
    image: "/careminder.png",
    tags: ["React", "TypeScript", "Electron", "ReactNative"],
    demoUrl: "#",
    githubUrl: "#",
    isAward: true,
  },
  {
    id: 4,
    title: "TemMoa!",
    description: "더이상 팀플이 두렵지 않아! 나에게 티모아가 있으니까.",
    fullDescription: `팀 프로젝트 관리를 위한 협업 플랫폼입니다.

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
    tags: ["React", "TypeScript", "Storybook", "jest", "AtomicDesign"],
    demoUrl: "#",
    githubUrl: "#",
    isAward: true,
  },
  {
    id: 5,
    title: "TodoIt",
    description: "계획을 기록하고 완성해 보세요.",
    fullDescription: `개인 일정 관리 및 할 일 목록 애플리케이션입니다.

주요 기능:
• 할 일 목록 관리
• 일정 캘린더
• 태그 기반 분류
• 진행 상황 통계

기술적 도전:
• Next.js와 Spring Boot 연동
• JWT 기반 인증 시스템
• 실시간 데이터 동기화
• 반응형 UI/UX 구현

성과:
• 사용자 만족도 4.8/5.0
• 월간 활성 사용자 3,000명
• 평균 사용 시간 30분/일`,
    image: "/todoit.webp",
    tags: ["Next.js", "TypeScript", "Spring"],
    demoUrl: "#",
    githubUrl: "#",
    isAward: false,
  },
  {
    id: 6,
    title: "플리 한림",
    description: "재학생을 위한 중고 거래 플리 마켓",
    fullDescription: `대학생을 위한 중고 거래 플랫폼입니다.

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
  },
  {
    id: 7,
    title: "Uri",
    description: "아이들에게 든든한 친구가 되어줄 '우리!'를 소개합니다.",
    fullDescription: `아동을 위한 AI 기반 학습 도우미 애플리케이션입니다.

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
    tags: ["kotlin", "ko-gpt2", "android", "python", "flask"],
    demoUrl: "#",
    githubUrl: "#",
    isAward: true,
  },
];

const experiences: Experience[] = [
  {
    id: 1,
    period: "2024.09 - 현재",
    role: "Frontend Developer",
    company: "케어 마인더",
    description: "간호사를 위한 케어 플랫폼",
    achievements: [
      {
        title: "CareFlow Electron Web App 개발",
        description: [
          {
            text: "Jenkins/Docker/Nginx 기반 CI / CD 파이프라인 구축",
          },
          { text: "JWT Token 기반 로그인 개발" },
          { text: "웹 소켓 기반 채팅 구현" },
          { text: "SSE 기반 웹 알림 구현" },
          { text: "웹뷰 기반 electron 앱 개발" },
          { text: "Electron 기반 웹앱 패키징" },
          { text: "윈도우 코드 서명 등록" },
          {
            text: "github release 통한 배포 구축 및 자동 업데이트",
          },
          { text: "네이티브 커스텀 알림 구현" },
        ],
      },
      {
        title: "CareFlow Next.js 마이그레이션",
        description: [{ text: "Next.js 마이그레이션" }],
      },
      {
        title: "CareFlow Tablet App 개발",
        description: [
          { text: "시니어를 위한 시니어 모드 개발" },
          {
            text: "react-native-tts를 이용한 음성 텍스트 변환 개발",
          },
          {
            text: "웹뷰를 통한 유튜브 및 각종 콘텐츠 개발",
          },
          {
            text: "SSE를 통한 원격 로그 아웃 구현",
          },
        ],
      },
      {
        title: "MonoRepo 도입",
        description: [
          {
            text: "기존 프로젝트들을 pnpm과 turbopack를 통해 하나의 레포지토리로 관리",
          },
          {
            text: "Jenkins와 docker를 통한 CI/CD 파이프라인 구축",
          },
          {
            text: "기존 프로젝트 번등사이즈 25%감소 및 종속성 충돌 방지",
          },
        ],
      },
      {
        title: "디자인 시스템 개발(CDS)",
        description: [
          {
            text: "AtomicDesign,Storybook을 통한 디자인 시스템 개발",
          },
        ],
      },
    ],
    skills: [
      "React",
      "React Native",
      "Electron",
      "Shadcn",
      "Next",
      "MonoRepo",
      "TypeScript",
      "Storybook",
      "Emotion",
      "Jest",
    ],
  },
  {
    id: 2,
    period: "2024.09 - 2025.02",
    role: "Frontend Developer",
    company: "ReCarelab",
    description: "간병인 매칭 플랫폼",
    achievements: [
      {
        title: "케어나인 앱 리빌딩",
        description: [
          {
            text: "홈 화면 UI 개선 및 매칭 현황 그래프  신규 기능",
            link: "https://velog.io/@omnipo/%ED%99%88-%ED%99%94%EB%A9%B4-UIUX-%EA%B0%9C%EC%84%A0%ED%95%98%EA%B8%B0",
          },
          {
            text: "CSR --> ISR 전환으로 페이지 로드 속도 향상",
            link: "https://velog.io/@omnipo/%EB%A0%8C%EB%8D%94%EB%A7%81-%EB%B0%A9%EC%8B%9D%EC%9D%98-%EC%84%A0%ED%83%9D%EA%B3%BC-%EB%8F%84%EC%9E%85",
          },
          {
            text: "스택 라우터 개발",
            link: "https://velog.io/@omnipo/%EC%9B%B9%EB%B7%B0-%EC%8A%A4%ED%83%9D-%EA%B5%AC%ED%98%84%EA%B8%B0",
          },
          {
            text: "스켈레톤 UI 개발",
            link: "https://velog.io/@omnipo/%EC%8A%A4%EC%BC%88%EB%A0%88%ED%86%A4-%EB%A1%9C%EB%94%A9-UI",
          },
        ],
      },
      {
        title: "포인트 기능 개발",
        description: [
          { text: "유저 포인트 출금 및 충전 테이블 개발" },
          { text: "어드민 페이지 포인트 관리 및 설계사 포인트 출금 개발" },
        ],
      },
      {
        title: "랜딩 페이지 개발",
        description: [
          {
            text: "Code Splitting, 이미지 최적화, 캐싱 전략 수립으로 LCP 2초 이내 달성",
            link: "https://www.carenine.co.kr/",
          },
        ],
      },
    ],
    skills: [
      "TypeScript",
      "Next.js",
      "ReactNative",
      "Supabase",
      "Zustand/Zod",
      "Swr",
      "TailwindCSS",
      "Jest",
    ],
  },
  {
    id: 3,
    period: "2024.04 - 2025.08",
    role: "Frontend Developer",
    company: "이들",
    description: "해외 배송 대행 플랫폼",
    achievements: [
      {
        title: "올땀 플랫폼 내 상품 수집 및 등록 페이지 제작",
        description: [{ text: "올땀 상품 수집 및 등록 페이지 개발" }],
      },
      {
        title: "어드민 페이지 개발",
        description: [{ text: "올땀 플랫폼 관리자 페이지 제작" }],
      },
      {
        title: "올땀 PWA 개발",
        description: [{ text: "올땀 플랫폼 PWA를 통한 웹앱 프로그램 개발" }],
      },
    ],
    skills: ["React", "TypeScript", "Recoil", "Emotion", "Jest"],
  },
];

const awards: Award[] = [
  {
    id: 1,
    title: "ESG공모전 장려상",
    organization: "KBSC 국민은행",
    date: "2021.10.01",
    description: "ESG 가치 실현을 위한 혁신적인 금융 서비스 제안",
  },
  {
    id: 4,
    title: "아이디어 해커톤 장려상",
    organization: "한림대학교",
    date: "2021.04.10",
    description: "창의적인 문제 해결 방안 제시",
  },
  {
    id: 3,
    title: "캡스톤 디자인 입상",
    organization: "한림대학교",
    date: "2022.06.10",
    description: "실무 중심의 프로젝트 개발 및 발표",
  },
  {
    id: 2,
    title: "오픈소스SW웹 해커톤 금상",
    organization: "한림대학교",
    date: "2023.09.18",
    description: "오픈소스 기술을 활용한 혁신적인 웹 서비스 개발",
  },

  {
    id: 5,
    title: "정주영 창업경진대회 우수상 / 인기상",
    organization: "현대자동차그룹",
    date: "2024.11.20",
    description: "혁신적인 비즈니스 모델 제안",
  },
];

// const libraries: Library[] = [
//   {
//     id: 1,
//     name: "react-use-modal",
//     description: "React 모달을 쉽게 관리할 수 있는 커스텀 훅",
//     techStack: ["React", "TypeScript", "Jest"],
//     stars: 120,
//     downloads: 5000,
//     url: "https://github.com/yourusername/react-use-modal",
//   },
//   {
//     id: 2,
//     name: "use-intersection",
//     description: "IntersectionObserver를 간편하게 사용하는 React 훅",
//     techStack: ["React", "TypeScript"],
//     stars: 85,
//     downloads: 3200,
//     url: "https://github.com/yourusername/use-intersection",
//   },
// ];

// const introSteps: IntroStep[] = [
//   {
//     icon: "💻",
//     title: "안녕하세요",
//     description: "개발자 안승찬입니다."
//   },
//   {
//     icon: "🚀",
//     title: "",
//     description: "프론트엔드 개발자로 일하고 있습니다"
//   },
//   {
//     icon: "",
//     title: "함께 성장하고 싶습니다",
//     description: "새로운 도전을 두려워하지 않습니다"
//   }
// ];

const handleExternalLink = (url: string) => {
  if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
};

const handleEmailClick = () => {
  if (typeof window !== "undefined") {
    navigator.clipboard.writeText("omnipo58@gmail.com");
    alert("이메일이 클립보드에 복사되었습니다!");
  }
};

export default function Home() {
  // const router = useRouter();
  const searchParams = useSearchParams();
  // const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  // const [expandPosition, setExpandPosition] = useState({ x: "50%", y: "50%" });
  // const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  // const [isScrolling, setIsScrolling] = useState(false);
  // const [isMobile, setIsMobile] = useState(false);
  const [currentMobilePage, setCurrentMobilePage] = useState(0);
  // const [pageTransition, setPageTransition] = useState(false);
  const [buttonPressed, setButtonPressed] = useState(false);
  const [isProjectFunnel, setIsProjectFunnel] = useState(false);
  const [currentProjectPage, setCurrentProjectPage] = useState(0);
  const [selectedMobileProject, setSelectedMobileProject] =
    useState<Project | null>(null);

  // Initialize state from URL parameters
  useEffect(() => {
    const page = searchParams.get("page");
    const projectId = searchParams.get("projectId");
    const projectPage = searchParams.get("projectPage");

    if (page) {
      setCurrentMobilePage(Number(page));
    }

    if (projectId) {
      const project = projects.find((p) => p.id === Number(projectId));
      if (project) {
        setSelectedMobileProject(project);
        setIsProjectFunnel(true);
        if (projectPage) {
          setCurrentProjectPage(Number(projectPage));
        }
      }
    }
  }, [searchParams]);

  // Update URL when funnel state changes
  useEffect(() => {
    const params = new URLSearchParams();

    if (isProjectFunnel && selectedMobileProject) {
      params.set("projectId", selectedMobileProject.id.toString());
      params.set("projectPage", currentProjectPage.toString());
    } else {
      params.set("page", currentMobilePage.toString());
    }

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, "", newUrl);
  }, [
    currentMobilePage,
    isProjectFunnel,
    selectedMobileProject,
    currentProjectPage,
  ]);

  // 모바일 퍼널 페이지 정의
  const mobilePages = [
    { id: "about-1", title: "About", component: "about", description: "소개" },
    {
      id: "about-2",
      title: "About",
      component: "about",
      description: "기술 스택",
    },
    {
      id: "about-3",
      title: "About",
      component: "about",
      description: "교육 및 활동",
    },
    { id: "about-4", title: "About", component: "about", description: "수상" },
    {
      id: "experience-1",
      title: "Experience",
      component: "experience",
      description: "경력",
    },
    {
      id: "experience-2",
      title: "Experience",
      component: "experience",
      description: "경력",
    },
    {
      id: "experience-3",
      title: "Experience",
      component: "experience",
      description: "경력",
    },
    {
      id: "projects-1",
      title: "Projects",
      component: "projects",
      description: "프로젝트",
    },
    {
      id: "projects-2",
      title: "Projects",
      component: "projects",
      description: "프로젝트",
    },
    {
      id: "projects-3",
      title: "Projects",
      component: "projects",
      description: "프로젝트",
    },
    {
      id: "contact",
      title: "Contact",
      component: "contact",
      description: "연락처",
    },
  ];

  // 다음 모바일 페이지로 이동
  const goToNextMobilePage = () => {
    if (currentMobilePage < mobilePages.length - 1) {
      setButtonPressed(true);
      setTimeout(() => setButtonPressed(false), 150);
      setCurrentMobilePage((prev) => prev + 1);
    }
  };

  // 이전 모바일 페이지로 이동
  const goToPrevMobilePage = () => {
    if (currentMobilePage > 0) {
      setCurrentMobilePage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        // 스크롤이 20px 이상일 때만 동작
        if (window.scrollY > 20) {
          // 스크롤 방향 확인
          if (window.scrollY > lastScrollY) {
            // 아래로 스크롤
            // setIsScrolling(true);
            // 이전 타이머 클리어
            if (scrollTimeout) {
              clearTimeout(scrollTimeout);
            }
            // setIsNavVisible(false);

            // 스크롤 종료 감지 (300ms 후)
            scrollTimeout = setTimeout(() => {
              // setIsScrolling(false);
            }, 300);
          } else {
            // 위로 스크롤 - 즉시 표시
            // setIsNavVisible(true);
            // setIsScrolling(false);
          }
        } else {
          // 최상단에서는 항상 표시
          // setIsNavVisible(true);
          // setIsScrolling(false);
        }

        // 스크롤 위치 업데이트
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [lastScrollY]);

  // const handleProjectClick = (project: Project, e: React.MouseEvent) => {
  //   setSelectedMobileProject(project);
  //   setIsProjectFunnel(true);
  //   setCurrentProjectPage(0);
  // };
  const handleProjectClick = (
    project: Project
    // e: React.MouseEvent<HTMLDivElement>
  ) => {
    setSelectedMobileProject(project);
    setIsProjectFunnel(true);
    setCurrentProjectPage(0);
  };

  // const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  //   e.preventDefault();
  //   const element = document.getElementById(id);
  //   if (element) {
  //     const navHeight = 64; // 네비게이션 바 높이
  //     const elementPosition = element.getBoundingClientRect().top;
  //     const offsetPosition = elementPosition + window.pageYOffset - navHeight;

  //     console.log(offsetPosition);
  //     window.scrollTo({
  //       top: offsetPosition,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  const goToNextProjectPage = () => {
    if (currentProjectPage < 3) {
      setButtonPressed(true);
      setTimeout(() => setButtonPressed(false), 150);
      setCurrentProjectPage((prev) => prev + 1);
    } else {
      setIsProjectFunnel(false);
      setSelectedMobileProject(null);
      setCurrentProjectPage(0);
    }
  };

  const goToPrevProjectPage = () => {
    if (currentProjectPage > 0) {
      setCurrentProjectPage((prev) => prev - 1);
    } else {
      setIsProjectFunnel(false);
      setSelectedMobileProject(null);
    }
  };

  // Render project funnel pages
  const renderProjectFunnelPage = () => {
    if (!selectedMobileProject) return null;

    // const pageVariants = {
    //   initial: { opacity: 0, y: 20 },
    //   animate: { opacity: 1, y: 0 },
    //   exit: { opacity: 0, y: -20 },
    // };

    // const pageTransition = {
    //   type: "tween",
    //   duration: 0.3,
    // };

    return (
      <div className="min-h-[calc(100vh-80px)] px-6 pt-20 overflow-y-scroll">
        {currentProjectPage === 0 && (
          <div>
            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src={selectedMobileProject.image}
                alt={selectedMobileProject.title}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold">
              {selectedMobileProject.title}
            </h2>
            <p className="text-muted-foreground">
              {selectedMobileProject.description}
            </p>
          </div>
        )}

        {currentProjectPage === 1 && (
          <div>
            <h3 className="text-xl font-bold">Overview</h3>
            <p className="text-muted-foreground whitespace-pre-line">
              {selectedMobileProject.fullDescription}
            </p>
          </div>
        )}

        {currentProjectPage === 2 && (
          <div>
            <h3 className="text-xl font-bold">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {selectedMobileProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm bg-blue-500/5 text-blue-600 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {currentProjectPage === 3 && (
          <div>
            <h3 className="text-xl font-bold">Links</h3>
            <div className="space-y-4">
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-transform"
                onClick={() =>
                  handleExternalLink(selectedMobileProject.demoUrl)
                }
              >
                View Live Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="w-full bg-blue-500/10 hover:bg-blue-600 text-blue-600 py-3 rounded-lg transition-transform"
                onClick={() =>
                  handleExternalLink(selectedMobileProject.githubUrl)
                }
              >
                <Github className="mr-2 h-4 w-4" />
                View Source
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  };

  // 모바일 퍼널 페이지 렌더링
  const renderMobilePage = () => {
    const currentPage = mobilePages[currentMobilePage];

    const pageVariants = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
    };

    const pageTransition = {
      type: "tween",
      duration: 0.3,
    };

    return (
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage.id}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
            className="min-h-[calc(100vh-80px)] w-full bg-background pt-10 px-6 overflow-y-scroll"
          >
            {/* {currentPage.id === "intro" && (
              <div className="flex flex-col items-center text-center">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-10 shadow-lg"
                >
                  <motion.span 
                    className="text-4xl"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  >
                    {introSteps[currentMobilePage % introSteps.length].icon}
                  </motion.span>
                </motion.div>
                
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <motion.h1 
                    className="text-3xl font-bold mb-4"
                    layout
                  >
                    {introSteps[currentMobilePage % introSteps.length].title}
                  </motion.h1>
                  <motion.p 
                    className="text-lg text-blue-600 font-mono"
                    layout
                  >
                    {introSteps[currentMobilePage % introSteps.length].description}
                  </motion.p>
                </motion.div>
                
                <motion.div
                  className="flex gap-2 mt-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {introSteps.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index === currentMobilePage % introSteps.length
                          ? "bg-blue-500"
                          : "bg-gray-300"
                      }`}
                    />
                  ))}
                </motion.div>
              </div>
            )} */}

            {currentPage.id.startsWith("about") && (
              <div>
                {currentPage.id === "about-1" && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <p className="text-lg text-blue-600 font-mono">
                        🙋‍♂️ 소개드립니다.
                      </p>
                      <h1 className="text-3xl font-bold tracking-tight">
                        안녕하세요,
                        <br />
                        <br />
                        &quot;기술을 넘어 맥락을 이해하는 개발자&quot;
                        <br />
                        <br />
                        안승찬입니다.
                      </h1>
                    </div>

                    <div className="space-y-4 text-base text-muted-foreground">
                      <p>
                        저는 단순히 화면을 구현하는 데에 그치지 않고, 사용자의
                        흐름과 비즈니스 요구, 팀의 협업 구조까지 함께 고려하는
                        제품 중심의 개발자입니다.
                      </p>

                      <p>
                        Next.js, TypeScript, React, Zustand, React Query,
                        Supabase 등 현대적인 기술 스택을 기반으로 개발하고
                        있으며, Storybook 기반의 디자인 시스템 구축부터 테스팅
                        자동화(Cypress), CI/CD 환경 세팅(Jenkins, Docker 등),
                        에러 핸들링 전략 설계까지 다양한 프로젝트 경험을 통해
                        <br />
                        <span className="text-lg text-blue-600 font-mono">
                          &apos;지속 가능한 제품 개발&apos;
                        </span>
                        의 전 과정을 이해하고 실천해왔습니다.
                      </p>
                    </div>
                  </div>
                )}

                {currentPage.id === "about-2" && (
                  <div className="space-y-6">
                    <div className="flex flex-col gap-5 rounded-2xl overflow-hidden p-5 bg-white shadow-sm active:scale-[0.98] transition-transform cursor-pointer">
                      <h3 className="text-xl font-bold text-blue-500">
                        선호 프레임 워크
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "TypeScript",
                          "React",
                          "Next.js",
                          "Vue",
                          "ReactNative",
                          "Electron",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 w-fit text-sm bg-blue-500/5 text-blue-600 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-5 rounded-2xl overflow-hidden p-5 bg-white shadow-sm active:scale-[0.98] transition-transform cursor-pointer">
                      <h3 className="text-xl font-bold text-blue-500">
                        선호 기술
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Webview",
                          "WebApp",
                          "MonoRepo",
                          "Infra",
                          "BFF",
                          "MFA",
                          "TDD",
                          "UI/UX",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 w-fit text-sm bg-blue-500/5 text-blue-600 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {currentPage.id === "about-3" && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="px-4 py-3 rounded-2xl overflow-hidden p-5 bg-white shadow-sm active:scale-[0.98] transition-transform cursor-pointer">
                        <h3 className="font-medium">
                          한림대학교 소프트웨어융합
                        </h3>
                        <p className="text-xs text-primary/70 mt-1">
                          2018.02 ~ 2025.06(졸업예정)
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {[
                        { name: "씨애랑", type: "학술 동아리" },
                        { name: "DAWN", type: "창업동아리" },
                        { name: "Fanespo", type: "창업팀" },
                        { name: "Edubill", type: "창업팀" },
                      ].map((activity) => (
                        <div
                          key={activity.name}
                          className="px-4 py-3 rounded-2xl overflow-hidden p-5 bg-white shadow-sm active:scale-[0.98] transition-transform cursor-pointer"
                        >
                          <h3 className="font-medium">{activity.name}</h3>
                          <p className="text-xs text-primary/70 mt-1">
                            {activity.type}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {currentPage.id === "about-4" && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      {awards.map((award) => (
                        <div
                          key={award.title}
                          className="px-4 py-3 rounded-2xl overflow-hidden p-5 bg-white shadow-sm active:scale-[0.98] transition-transform cursor-pointer flex justify-between"
                        >
                          <div>
                            <h3 className="font-medium">{award.title}</h3>
                            <p className="text-xs text-primary/70 mt-1">
                              {award.organization}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-primary/70 mt-1">
                              {award.date}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {currentPage.id.startsWith("experience") && (
              <div>
                {currentPage.id === "experience-1" && (
                  <div className="space-y-6">
                    {experiences.slice(0, 1).map((exp) => (
                      <div key={exp.id} className="space-y-4">
                        <div className="space-y-2">
                          <p className="text-sm text-muted-foreground font-mono">
                            {exp.period}
                          </p>
                          <h3 className="text-xl font-semibold">{exp.role}</h3>
                          <p className="text-primary/80 italic">
                            {exp.company}
                          </p>
                          <p className="text-sm text-muted-foreground mt-2">
                            {exp.description}
                          </p>
                        </div>

                        <div className="space-y-4">
                          {exp.achievements.map((achievement) => (
                            <div
                              key={achievement.title}
                              className="p-4 rounded-lg bg-secondary/30"
                            >
                              <h4 className="font-medium mb-3">
                                {achievement.title}
                              </h4>
                              <ul className="list-disc pl-2 space-y-2">
                                {achievement.description.map((desc) =>
                                  desc.link ? (
                                    <li
                                      className="text-sm text-muted-foreground"
                                      key={desc.text}
                                    >
                                      <a
                                        href={desc.link}
                                        className="text-blue-500 hover:text-blue-700 hover:underline flex items-center gap-1"
                                      >
                                        {desc.text}
                                        <ExternalLink className="w-3 h-3" />
                                      </a>
                                    </li>
                                  ) : (
                                    <li
                                      className="text-sm text-muted-foreground"
                                      key={desc.text}
                                    >
                                      {desc.text}
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          ))}
                        </div>

                        <div className="mt-4">
                          <h4 className="text-sm font-medium text-muted-foreground mb-2">
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-2 py-1 text-xs bg-blue-500/5 text-blue-600 rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {currentPage.id === "experience-2" && (
                  <div className="space-y-6">
                    {experiences.slice(1, 2).map((exp) => (
                      <div key={exp.id} className="space-y-4">
                        <div className="space-y-2">
                          <p className="text-sm text-muted-foreground font-mono">
                            {exp.period}
                          </p>
                          <h3 className="text-xl font-semibold">{exp.role}</h3>
                          <p className="text-primary/80 italic">
                            {exp.company}
                          </p>
                          <p className="text-sm text-muted-foreground mt-4">
                            {exp.description}
                          </p>
                        </div>

                        <div className="space-y-4">
                          {exp.achievements.map((achievement) => (
                            <div
                              key={achievement.title}
                              className="p-4 rounded-lg bg-secondary/30"
                            >
                              <h4 className="font-medium mb-3">
                                {achievement.title}
                              </h4>
                              <ul className="list-disc pl-2 space-y-2">
                                {achievement.description.map((desc) =>
                                  desc.link ? (
                                    <li
                                      className="text-sm text-muted-foreground"
                                      key={desc.text}
                                    >
                                      <a
                                        href={desc.link}
                                        className="text-blue-500 hover:text-blue-700 hover:underline flex items-center gap-1"
                                      >
                                        {desc.text}
                                        <ExternalLink className="w-3 h-3" />
                                      </a>
                                    </li>
                                  ) : (
                                    <li
                                      className="text-sm text-muted-foreground"
                                      key={desc.text}
                                    >
                                      {desc.text}
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          ))}
                        </div>

                        <div className="mt-4">
                          <h4 className="text-sm font-medium text-muted-foreground mb-2">
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-2 py-1 text-xs bg-blue-500/5 text-blue-600 rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {currentPage.id === "experience-3" && (
                  <div className="space-y-6">
                    {experiences.slice(2, 3).map((exp) => (
                      <div key={exp.id} className="space-y-4">
                        <div className="space-y-2">
                          <p className="text-sm text-muted-foreground font-mono">
                            {exp.period}
                          </p>
                          <h3 className="text-xl font-semibold">{exp.role}</h3>
                          <p className="text-primary/80 italic">
                            {exp.company}
                          </p>
                          <p className="text-sm text-muted-foreground mt-4">
                            {exp.description}
                          </p>
                        </div>

                        <div className="space-y-4">
                          {exp.achievements.map((achievement) => (
                            <div
                              key={achievement.title}
                              className="p-4 rounded-lg bg-secondary/30"
                            >
                              <h4 className="font-medium mb-3">
                                {achievement.title}
                              </h4>
                              <ul className="list-disc pl-2 space-y-2">
                                {achievement.description.map((desc) =>
                                  desc.link ? (
                                    <li
                                      className="text-sm text-muted-foreground"
                                      key={desc.text}
                                    >
                                      <a
                                        href={desc.link}
                                        className="text-blue-500 hover:text-blue-700 hover:underline flex items-center gap-1"
                                      >
                                        {desc.text}
                                        <ExternalLink className="w-3 h-3" />
                                      </a>
                                    </li>
                                  ) : (
                                    <li
                                      className="text-sm text-muted-foreground"
                                      key={desc.text}
                                    >
                                      {desc.text}
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          ))}
                        </div>

                        <div className="mt-4">
                          <h4 className="text-sm font-medium text-muted-foreground mb-2">
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-2 py-1 text-xs bg-blue-500/5 text-blue-600 rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {currentPage.id.startsWith("projects") && (
              <div className="">
                <div className="min-h-[calc(100vh-280px)] flex flex-col justify-center gap-10">
                  {currentPage.id === "projects-1" &&
                    projects.slice(0, 2).map((project) => (
                      <div
                        key={project.id}
                        className="rounded-2xl overflow-hidden bg-white shadow-sm active:scale-[0.98] transition-transform cursor-pointer"
                        onClick={() => handleProjectClick(project)}
                      >
                        <div className="relative w-full h-36 overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                          {project.isAward && (
                            <div className="absolute top-2 right-2 bg-yellow-500 p-2 rounded-full shadow-md z-[100]">
                              <Trophy className="w-4 h-4 text-white" />
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-medium text-gray-900">
                            {project.title}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-1 mt-3">
                            {project.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}

                  {currentPage.id === "projects-2" &&
                    projects.slice(2, 4).map((project) => (
                      <div
                        key={project.id}
                        className="rounded-2xl overflow-hidden bg-white shadow-sm active:scale-[0.98] transition-transform cursor-pointer"
                        onClick={() => handleProjectClick(project)}
                      >
                        <div className="relative w-full h-36 overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                          {project.isAward && (
                            <div className="absolute top-2 right-2 bg-yellow-500 p-2 rounded-full shadow-md z-[100]">
                              <Trophy className="w-4 h-4 text-white" />
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-medium text-gray-900">
                            {project.title}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-1 mt-3">
                            {project.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}

                  {currentPage.id === "projects-3" &&
                    projects.slice(4, 6).map((project) => (
                      <div
                        key={project.id}
                        className="rounded-2xl overflow-hidden bg-white shadow-sm active:scale-[0.98] transition-transform cursor-pointer"
                        onClick={() => handleProjectClick(project)}
                      >
                        <div className="relative w-full h-36 overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                          {project.isAward && (
                            <div className="absolute top-2 right-2 bg-yellow-500 p-2 rounded-full shadow-md z-[100]">
                              <Trophy className="w-4 h-4 text-white" />
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-medium text-gray-900">
                            {project.title}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-1 mt-3">
                            {project.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {currentPage.id === "contact" && (
              <div className="min-h-[calc(100vh-280px)] flex flex-col justify-center gap-10">
                <div className="text-center space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                      Let&apos;s Connect
                    </h2>
                    <p className="text-muted-foreground text-lg">
                      새로운 도전과 기회를 기다리고 있습니다
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Button
                      className="w-full h-14 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                      onClick={handleEmailClick}
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      omnipo58@gmail.com
                    </Button>

                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        variant="outline"
                        className="h-14 border-2 border-blue-100 hover:border-blue-200 hover:bg-blue-50 rounded-xl transition-all duration-300"
                        onClick={() =>
                          handleExternalLink("https://github.com/Ahnseungc")
                        }
                      >
                        <Github className="mr-2 h-5 w-5" />
                        GitHub
                      </Button>
                      <Button
                        variant="outline"
                        className="h-14 border-2 border-blue-100 hover:border-blue-200 hover:bg-blue-50 rounded-xl transition-all duration-300"
                        onClick={() =>
                          handleExternalLink(
                            "https://www.linkedin.com/in/seungchan-ahn-067a6031b/"
                          )
                        }
                      >
                        <Linkedin className="mr-2 h-5 w-5" />
                        LinkedIn
                      </Button>
                      <Button
                        variant="outline"
                        className="h-14 border-2 border-blue-100 hover:border-blue-200 hover:bg-blue-50 rounded-xl transition-all duration-300"
                        onClick={() =>
                          handleExternalLink("https://velog.io/@omnipo")
                        }
                      >
                        <svg
                          className="mr-2 h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M3 0C1.338 0 0 1.338 0 3v18c0 1.662 1.338 3 3 3h18c1.662 0 3-1.338 3-3V3c0-1.662-1.338-3-3-3H3zm6.883 6.25c.564 0 1.02.456 1.02 1.02 0 .564-.456 1.02-1.02 1.02-.564 0-1.02-.456-1.02-1.02 0-.564.456-1.02 1.02-1.02zm2.855 12.968c-.884 0-1.248-.986-.849-1.641l2.67-4.42c.399-.655 1.342-.884 1.746-.884.404 0 1.342.229 1.746.884l2.67 4.42c.399.655.035 1.641-.849 1.641H12.738z" />
                        </svg>
                        Velog
                      </Button>
                      <Button
                        variant="outline"
                        className="h-14 border-2 border-blue-100 hover:border-blue-200 hover:bg-blue-50 rounded-xl transition-all duration-300"
                        onClick={handleEmailClick}
                      >
                        <Mail className="mr-2 h-5 w-5" />
                        Email
                      </Button>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mt-8">
                    © 2024 An Seung Chan. All rights reserved.
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  };

  return (
    <main
      className="flex min-h-screen flex-col mx-auto bg-[#F8F9FA]"
      style={{ maxWidth: "600px" }}
    >
      {/* 상단 헤더 */}
      <div
        className="fixed top-0 left-0 right-0 z-20 bg-[#F8F9FA]"
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        <div className="flex items-center px-4 h-[52px]">
          {(currentMobilePage > 0 || isProjectFunnel) && (
            <button
              onClick={
                isProjectFunnel ? goToPrevProjectPage : goToPrevMobilePage
              }
              className="p-2 -ml-2 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-gray-800" />
            </button>
          )}
          <span className="ml-3 text-lg font-semibold text-gray-800">
            {/* {isProjectFunnel ? "프로젝트 상세" : "포트폴리오"} */}
            {mobilePages[currentMobilePage].description}
          </span>
        </div>
        <div className="h-[1px] bg-gray-200" />
      </div>

      {/* 메인 컨텐츠 */}
      <div className="mobile-funnel relative mt-[52px] overflow-y-scroll pb-24">
        {/* 현재 페이지 */}
        <div className="px-5">
          {isProjectFunnel ? renderProjectFunnelPage() : renderMobilePage()}
        </div>

        {/* 하단 버튼 */}
        <div
          className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200"
          style={{ maxWidth: "600px", margin: "0 auto" }}
        >
          <Button
            className={`w-full h-[52px] bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-all
              ${buttonPressed ? "scale-[0.98]" : "scale-100"}
              disabled:bg-gray-200 disabled:text-gray-400`}
            onClick={isProjectFunnel ? goToNextProjectPage : goToNextMobilePage}
            disabled={
              isProjectFunnel
                ? currentProjectPage >= 3
                : currentMobilePage >= mobilePages.length - 1
            }
          >
            {isProjectFunnel
              ? currentProjectPage === 3
                ? "완료"
                : "다음"
              : currentMobilePage === 0
              ? "시작하기"
              : "다음"}
          </Button>
        </div>
      </div>
    </main>
  );
}

// 리스트 아이템 컴포넌트 스타일 수정
// const ListItem = ({ icon, title, subtitle, onClick }: any) => (
//   <div
//     onClick={onClick}
//     className="flex items-center p-4 bg-white rounded-2xl mb-3 cursor-pointer hover:bg-gray-50 active:bg-gray-100 transition-colors"
//   >
//     <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
//       {icon}
//     </div>
//     <div className="ml-4 flex-1">
//       <h3 className="text-base font-medium text-gray-900">{title}</h3>
//       {subtitle && <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>}
//     </div>
//     <ChevronRight className="w-5 h-5 text-gray-400" />
//   </div>
// );

// 섹션 타이틀 스타일 수정
// const SectionTitle = ({ children }: { children: React.ReactNode }) => (
//   <h2 className="text-lg font-semibold text-gray-800 mb-4 px-1">
//     {children}
//   </h2>
// );
