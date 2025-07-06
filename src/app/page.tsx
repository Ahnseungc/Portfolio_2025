"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Github,
  Mail,
  Linkedin,
  Trophy,
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

interface Library {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  stars?: number;
  downloads?: number;
  url: string;
  fullDescription: string;
}

// interface IntroStep {
//   icon: string;
//   title: string;
//   description: string;
// }

const projects: Project[] = [
  {
    id: 2,
    title: "CoMo",
    description: "간편한 사내 동호회 관리",
    fullDescription: `사내 동호회 관리를 위한 웹 애플리케이션입니다.

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

const libraries: Library[] = [
  {
    id: 1,
    name: "WEBVIEWKIT",
    description: "웹에서 모바일 앱 스택 구조를 구현한 라이브러리",
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
  },
  {
    id: 2,
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
  },
];

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
      id: "libraries-1",
      title: "Libraries",
      component: "libraries",
      description: "라이브러리",
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
  // const handleProjectClick = (
  //   project: Project
  //   // e: React.MouseEvent<HTMLDivElement>
  // ) => {
  //   setSelectedMobileProject(project);
  //   setIsProjectFunnel(true);
  //   setCurrentProjectPage(0);
  // };

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

    const pageVariants = {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -20 },
    };

    const pageTransition = {
      type: "tween",
      duration: 0.3,
    };

    return (
      <div className="min-h-[calc(100vh-80px)] px-6 pt-20 overflow-y-scroll">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProjectPage}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            {currentProjectPage === 0 && (
              <div className="space-y-6">
                {/* 프로젝트 헤더 이미지 */}
                <div className="relative w-full h-64 mb-6 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={selectedMobileProject.image}
                    alt={selectedMobileProject.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  {selectedMobileProject.isAward && (
                    <div className="absolute top-4 right-4 bg-yellow-500 p-3 rounded-full shadow-lg">
                      <Trophy className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>

                {/* 프로젝트 제목과 설명 */}
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900">
                    {selectedMobileProject.title}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {selectedMobileProject.description}
                  </p>
                </div>

                {/* 기술 스택 미리보기 */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    사용 기술
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMobileProject.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-full border border-blue-100"
                      >
                        {tag}
                      </span>
                    ))}
                    {selectedMobileProject.tags.length > 4 && (
                      <span className="px-3 py-1 text-sm bg-gray-50 text-gray-500 rounded-full">
                        +{selectedMobileProject.tags.length - 4}개 더
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )}

            {currentProjectPage === 1 && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    프로젝트 개요
                  </h3>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                      {selectedMobileProject.fullDescription}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {currentProjectPage === 2 && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    기술 스택
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedMobileProject.tags.map((tag) => (
                      <div
                        key={tag}
                        className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center"
                      >
                        <span className="text-sm font-medium text-gray-700">
                          {tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {currentProjectPage === 3 && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    프로젝트 링크
                  </h3>
                  <div className="space-y-4">
                    <Button
                      className="w-full h-14 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                      onClick={() =>
                        handleExternalLink(selectedMobileProject.demoUrl)
                      }
                    >
                      <ExternalLink className="mr-2 h-5 w-5" />
                      라이브 데모 보기
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full h-14 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 rounded-xl transition-all duration-300"
                      onClick={() =>
                        handleExternalLink(selectedMobileProject.githubUrl)
                      }
                    >
                      <Github className="mr-2 h-5 w-5" />
                      소스 코드 보기
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
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
            variants={currentPage.id === "about-1" ? {} : pageVariants}
            initial={currentPage.id === "about-1" ? undefined : "initial"}
            animate={currentPage.id === "about-1" ? undefined : "animate"}
            exit={currentPage.id === "about-1" ? undefined : "exit"}
            transition={currentPage.id === "about-1" ? {} : pageTransition}
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
                        // onClick={() => handleProjectClick(project)}
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
                        // onClick={() => handleProjectClick(project)}
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
                        // onClick={() => handleProjectClick(project)}
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

            {currentPage.id.startsWith("libraries") && (
              <div className="">
                <div className="min-h-[calc(100vh-280px)] flex flex-col justify-start gap-10">
                  {currentPage.id === "libraries-1" &&
                    libraries.slice(0, 1).map((library) => (
                      <div
                        key={library.id}
                        className="rounded-2xl overflow-hidden bg-white shadow-sm active:scale-[0.98] transition-transform cursor-pointer"
                        onClick={() => handleExternalLink(library.url)}
                      >
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {library.name}
                              </h3>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                {library.description}
                              </p>
                            </div>
                            <div className="flex flex-col items-end space-y-1">
                              {library.stars && (
                                <div className="flex items-center text-sm text-gray-500">
                                  <span className="mr-1">⭐</span>
                                  <span>{library.stars}</span>
                                </div>
                              )}
                              {library.downloads && (
                                <div className="text-xs text-gray-400">
                                  {library.downloads.toLocaleString()} downloads
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {library.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 text-xs bg-blue-50 text-blue-600 rounded-full border border-blue-100"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}

                  {currentPage.id === "libraries-2" &&
                    libraries.slice(1, 2).map((library) => (
                      <div
                        key={library.id}
                        className="rounded-2xl overflow-hidden bg-white shadow-sm active:scale-[0.98] transition-transform cursor-pointer"
                        onClick={() => handleExternalLink(library.url)}
                      >
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {library.name}
                              </h3>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                {library.description}
                              </p>
                            </div>
                            <div className="flex flex-col items-end space-y-1">
                              {library.stars && (
                                <div className="flex items-center text-sm text-gray-500">
                                  <span className="mr-1">⭐</span>
                                  <span>{library.stars}</span>
                                </div>
                              )}
                              {library.downloads && (
                                <div className="text-xs text-gray-400">
                                  {library.downloads.toLocaleString()} downloads
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {library.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 text-xs bg-blue-50 text-blue-600 rounded-full border border-blue-100"
                              >
                                {tech}
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
