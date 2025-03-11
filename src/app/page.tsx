"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin, Trophy, ExternalLink, ArrowRight, X, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
}

interface IntroStep {
  icon: string;
  title: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Edubill",
    description: "똑똑한 학원비 관리 어플",
    fullDescription: `A detailed explanation of the project, including:
      • Key features and functionality
      • Technical challenges overcome
      • Performance optimizations
      • User experience considerations
      • Project outcomes and impact`,
    image: "/edubill.webp",
    tags: ["Vue", "TypeScript", "Pinia", "Flutter"],
    demoUrl: "#",
    githubUrl: "#",
    isAward: false,
  },
  {
    id: 2,
    title: "CareMinder",
    description: "더 스마트한 병원 업무의 시작 간호사도 함께 웃을 수 있는 병원",
    fullDescription: `A detailed explanation of the project, including:
      • Key features and functionality
      • Technical challenges overcome
      • Performance optimizations
      • User experience considerations
      • Project outcomes and impact`,
    image: "/careminder.png",
    tags: ["React", "TypeScript", "Electron", "ReactNative"],
    demoUrl: "#",
    githubUrl: "#",
    isAward: true,
  },
  {
    id: 3,
    title: "TemMoa!",
    description: "더이상 팀플이 두렵지 않아! 나에게 티모아가 있으니까.",
    fullDescription: `A detailed explanation of the project, including:
      • Key features and functionality
      • Technical challenges overcome
      • Performance optimizations
      • User experience considerations
      • Project outcomes and impact`,
    image: "/teammoa.webp",
    tags: ["React", "TypeScript", "Storybook", "jest", "AtomicDesign"],
    demoUrl: "#",
    githubUrl: "#",
    isAward: false,
  },
  {
    id: 4,
    title: "TodoIt",
    description: "계획을 기록하고 완성해 보세요.",
    fullDescription: `A detailed explanation of the project, including:
      • Key features and functionality
      • Technical challenges overcome
      • Performance optimizations
      • User experience considerations
      • Project outcomes and impact`,
    image: "/todoit.webp",
    tags: ["Next.js", "TypeScript", "Sping"],
    demoUrl: "#",
    githubUrl: "#",
    isAward: false,
  },
  {
    id: 5,
    title: "플리 한림",
    description: "재학생을 위한 중고 거래 플리 마켓",
    fullDescription: `A detailed explanation of the project, including:
      • Key features and functionality
      • Technical challenges overcome
      • Performance optimizations
      • User experience considerations
      • Project outcomes and impact`,
    image: "/fleahallym.webp",
    tags: ["Next.js", "Nest.js", "Sendbird", "TypeScript", "Recoil"],
    demoUrl: "#",
    githubUrl: "#",
    isAward: true,
  },
  {
    id: 6,
    title: "Uri",
    description: "아이들에게 든든한 친구가 되어줄 '우리!'를 소개합니다.",
    fullDescription: `A detailed explanation of the project, including:
      • Key features and functionality
      • Technical challenges overcome
      • Performance optimizations
      • User experience considerations
      • Project outcomes and impact`,
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
        title: "CareFlow Web 개발",
        description: [
          { text: "로그인 구조 및 로직 개발" },
          { text: "Jenkins/Docker/Nginx 기반 CI / CD 파이프라인 구축", link: "https://example.com/pipeline" },
          { text: "Stomp 기반 채팅 구현" },
          { text: "SSE 기반 웹 알림 구현" },
        ],
      },
      {
        title: "CareFlow Web Next.js 마이그레이션",
        description: [
          { text: "Next.js 마이그레이션" },          
        ],
      },
      {
        title: "CareFlow Electron WebApp 개발",
        description: [
          { text: "Electron 기반 웹앱 패키징" },
          { text: "윈도우 코드 서명 등록" },
          { text: "github release 통한 배포 구축 및 자동 업데이트", link: "https://example.com/pipeline" },
          { text: "네이티브 커스텀 알림 구현" },
        ],
      },
      {
        title: "CareFlow Tablet App 개발",
        description: [
          { text: "시니어를 위한 시니어 모드 개발" },
          { text: "react-native-tts를 이용한 음성 텍스트 변환 개발", link: "https://example.com/pipeline" },
          { text: "웹뷰를 통한 유튜브 및 각종 콘텐츠 개발", link: "https://example.com/pipeline" },
          { text: "SSE를 통한 원격 로그 아웃 구현", link: "https://example.com/pipeline" },
        ],
      },    
      {
        title: "MonoRepo 도입",
        description: [
          { text: "React 프로젝트들과 ReactNative 프로젝트를 pnpm과 turbopack를 통해 하나의 레포지토리로 관리", link: "https://example.com/pipeline" },
          { text: "Jenkins와 docker를 통한 CI/CD 파이프라인 구축", link: "https://example.com/pipeline" },
          { text: "기존 프로젝트 번등사이즈 25%감소 및 종속성 충돌 방지", link: "https://example.com/pipeline" },
        ],
      },
      {
        title: "디자인 시스템 개발(CDS)",
        description: [
          { text: "mui 기반 Storybook 개발", link: "https://example.com/pipeline" },
        ],
      },
    ],
    skills: [
      "React",
      "React Native",
      "Electron",
      "Mui",
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
        title: "플랫폼 내 상품 수집 및 등록 페이지 제작",
        description: [          
          { text: "홈 화면 UI 개선 및 매칭 현황 그래프  신규 기능", link: "https://velog.io/@omnipo/%ED%99%88-%ED%99%94%EB%A9%B4-UIUX-%EA%B0%9C%EC%84%A0%ED%95%98%EA%B8%B0" },
          { text: "CSR --> ISR 전환으로 페이지 로드 속도 향상", link: "https://velog.io/@omnipo/%EB%A0%8C%EB%8D%94%EB%A7%81-%EB%B0%A9%EC%8B%9D%EC%9D%98-%EC%84%A0%ED%83%9D%EA%B3%BC-%EB%8F%84%EC%9E%85" },
          { text: "공통 훅 개발" },
          { text: "스택 라우터 개발", link: "https://velog.io/@omnipo/%EC%9B%B9%EB%B7%B0-%EC%8A%A4%ED%83%9D-%EA%B5%AC%ED%98%84%EA%B8%B0" },
          { text: "스켈레톤 UI 개발", link: "https://velog.io/@omnipo/%EC%8A%A4%EC%BC%88%EB%A0%88%ED%86%A4-%EB%A1%9C%EB%94%A9-UI" },
        ],
      },
      {
        title: "포인트 기능 개발",
        description: [
          { text: "유저 포인트 출금 및 충전 테이블 개발" },
          { text: "어드민 페이지 포인트 관리 UI 개발" },
        ],
      },
      {
        title: "랜딩 페이지 개발",
        description: [
          { text: "Code Splitting, 이미지 최적화, 캐싱 전략 수립으로 LCP 2초 이내 달성", link: "https://www.carenine.co.kr/" },
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
        description: [          
          { text: "올땀 상품 수집 및 등록 페이지 개발"},          
        ],
      },
      {
        title: "어드민 페이지 개발",
        description: [
          { text: "올땀 플랫폼 관리자 페이지 제작"},          
        ],
      },    
      {
        title: "올땀 PWA 개발",
        description: [
          { text: "올땀 플랫폼 PWA를 통한 웹앱 프로그램 개발" },
        ],
      },
    ],
    skills: [
      "React",
      "TypeScript",      
      "Recoil",            
      "Emotion",
      "Jest",      
    ],
  },
];

const awards: Award[] = [
  {
    id: 1,
    title: "ESG공모전 장려상",
    organization: "KBSC 국민은행",
    date: "2021",
    description: "ESG 가치 실현을 위한 혁신적인 금융 서비스 제안",
  },
  {
    id: 4,
    title: "아이디어 해커톤 장려상",
    organization: "한림대학교",
    date: "2021",
    description: "창의적인 문제 해결 방안 제시",
  },
  {
    id: 3,
    title: "캡스톤 디자인 입상",
    organization: "한림대학교",
    date: "2022",
    description: "실무 중심의 프로젝트 개발 및 발표",
  },
  {
    id: 2,
    title: "오픈소스SW웹 해커톤 금상",
    organization: "한림대학교",
    date: "2023",
    description: "오픈소스 기술을 활용한 혁신적인 웹 서비스 개발",
  },

  {
    id: 5,
    title: "정주영 창업경진대회 우수상 / 인기상",
    organization: "현대자동차그룹",
    date: "2024",
    description: "혁신적인 비즈니스 모델 제안",
  },
];

const libraries: Library[] = [
  {
    id: 1,
    name: "react-use-modal",
    description: "React 모달을 쉽게 관리할 수 있는 커스텀 훅",
    techStack: ["React", "TypeScript", "Jest"],
    stars: 120,
    downloads: 5000,
    url: "https://github.com/yourusername/react-use-modal",
  },
  {
    id: 2,
    name: "use-intersection",
    description: "IntersectionObserver를 간편하게 사용하는 React 훅",
    techStack: ["React", "TypeScript"],
    stars: 85,
    downloads: 3200,
    url: "https://github.com/yourusername/use-intersection",
  },
];

const introSteps: IntroStep[] = [
  {
    icon: "👋",
    title: "안녕하세요",
    description: "포트폴리오에 오신 것을 환영합니다"
  },
  {
    icon: "💻",
    title: "개발자 안승찬입니다",
    description: "프론트엔드 개발자로 일하고 있습니다"
  },
  {
    icon: "🚀",
    title: "함께 성장하고 싶습니다",
    description: "새로운 도전을 두려워하지 않습니다"
  }
];

const handleExternalLink = (url: string) => {
  if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
};

export default function Home() {
  // const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [expandPosition, setExpandPosition] = useState({ x: "50%", y: "50%" });
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentMobilePage, setCurrentMobilePage] = useState(0);  
  const [pageTransition, setPageTransition] = useState(false);
  const [buttonPressed, setButtonPressed] = useState(false);
  const [isProjectFunnel, setIsProjectFunnel] = useState(false);
  const [currentProjectPage, setCurrentProjectPage] = useState(0);
  const [selectedMobileProject, setSelectedMobileProject] = useState<Project | null>(null);

  // Initialize state from URL parameters
  useEffect(() => {
    const page = searchParams.get('page');
    const projectId = searchParams.get('projectId');
    const projectPage = searchParams.get('projectPage');

    if (page) {
      setCurrentMobilePage(Number(page));
    }

    if (projectId) {
      const project = projects.find(p => p.id === Number(projectId));
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
      params.set('projectId', selectedMobileProject.id.toString());
      params.set('projectPage', currentProjectPage.toString());
    } else {
      params.set('page', currentMobilePage.toString());
    }

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, '', newUrl);
  }, [currentMobilePage, isProjectFunnel, selectedMobileProject, currentProjectPage]);

  // 모바일 퍼널 페이지 정의
  const mobilePages = [
    { id: "intro", title: "대출이 어려워요", description: "다가구 주택으로 대출 받을 수 있는 상품이 없어요." },
    { id: "about-1", title: "About", component: "about", description: "소개" },
    { id: "about-2", title: "About", component: "about", description: "기술 스택" },
    { id: "about-3", title: "About", component: "about", description: "교육" },
    { id: "about-4", title: "About", component: "about", description: "활동" },
    { id: "experience-1", title: "Experience", component: "experience", description: "케어마인더" },
    { id: "experience-2", title: "Experience", component: "experience", description: "ReCarelab" },
    { id: "experience-3", title: "Experience", component: "experience", description: "이들" },
    { id: "projects-1", title: "Projects", component: "projects", description: "프로젝트 1-2" },
    { id: "projects-2", title: "Projects", component: "projects", description: "프로젝트 3-4" },
    { id: "projects-3", title: "Projects", component: "projects", description: "프로젝트 5-6" },
    { id: "contact", title: "Contact", component: "contact", description: "연락처" },
  ];

  // 모바일 여부 감지
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

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
    if (selectedProject) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.setProperty(
        "--scrollbar-width",
        `${scrollbarWidth}px`
      );
      document.body.classList.add("scroll-lock");
    } else {
      document.body.classList.remove("scroll-lock");
      document.body.style.removeProperty("--scrollbar-width");
    }
  }, [selectedProject]);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        // 스크롤이 20px 이상일 때만 동작
        if (window.scrollY > 20) {
          // 스크롤 방향 확인
          if (window.scrollY > lastScrollY) {
            // 아래로 스크롤
            setIsScrolling(true);
            // 이전 타이머 클리어
            if (scrollTimeout) {
              clearTimeout(scrollTimeout);
            }
            setIsNavVisible(false);

            // 스크롤 종료 감지 (300ms 후)
            scrollTimeout = setTimeout(() => {
              setIsScrolling(false);
            }, 300);
          } else {
            // 위로 스크롤 - 즉시 표시
            setIsNavVisible(true);
            setIsScrolling(false);
          }
        } else {
          // 최상단에서는 항상 표시
          setIsNavVisible(true);
          setIsScrolling(false);
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

  const handleProjectClick = (project: Project, e: React.MouseEvent) => {
    if (isMobile) {
      setSelectedMobileProject(project);
      setIsProjectFunnel(true);
      setCurrentProjectPage(0);
      setPageTransition(true);
      setTimeout(() => {
        setPageTransition(false);
      }, 300);
    } else {
      const rect = (e.target as Element).getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      setExpandPosition({
        x: `${x}px`,
        y: `${y}px`,
      });
      setSelectedProject(project);
    }
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 64; // 네비게이션 바 높이
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      console.log(offsetPosition);
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

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
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 }
    };

    const pageTransition = {
      type: "tween",
      duration: 0.3
    };

    return (
      <div className="min-h-[calc(100vh-80px)] px-6 pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProjectPage}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
            className="space-y-6"
          >
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
                <h2 className="text-2xl font-bold">{selectedMobileProject.title}</h2>
                <p className="text-muted-foreground">{selectedMobileProject.description}</p>
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
                      className="px-3 py-1 text-sm bg-primary/5 text-primary/80 rounded-full"
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
                    className="w-full"
                    onClick={() => handleExternalLink(selectedMobileProject.demoUrl)}
                  >
                    View Live Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => handleExternalLink(selectedMobileProject.githubUrl)}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Source
                  </Button>
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
      exit: { opacity: 0, y: -20 }
    };

    const pageTransition = {
      type: "tween",
      duration: 0.3
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
            className="min-h-[calc(100vh-80px)] w-full bg-background pt-20 px-6"
          >
            {currentPage.id === "intro" && (
              <div className="flex flex-col items-center text-center">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-10 shadow-lg"
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
                    className="text-gray-600 text-lg"
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
            )}
            
            {currentPage.id.startsWith("about") && (
              <div>
                <h2 className="text-2xl font-bold mb-8">About</h2>
                {currentPage.id === "about-1" && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <p className="text-lg text-primary/80 font-mono">안녕하세요.</p>
                      <h1 className="text-3xl font-bold tracking-tight">
                        개발자 안승찬 입니다.
                      </h1>
                    </div>
                    
                    <div className="space-y-4 text-base text-muted-foreground">
                      <p>
                        4년전 &quot;Hello World&quot;를 출력하며 개발자로서의 첫
                        발자취를 남겼습니다.
                      </p>
                      <p>
                        &quot;부딪힐거 같으면 더 쌔게 밟아라&quot; 라는 말을 좋아합니다.
                        도전과 실패를 두려워하지 않고, 
                        오히려 더 강하게 부딪혀 성장하는 것이 제 개발 철학입니다.
                      </p>
                    </div>
                  </div>
                )}

                {currentPage.id === "about-2" && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold">Tech Stack</h2>
                    <div className="flex flex-wrap gap-2">
                      {["TypeScript", "React", "Next.js", "Vue", "ReactNative", "Electron"].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-primary/5 text-primary/80 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {currentPage.id === "about-3" && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold">Education</h2>
                    <div className="space-y-4">
                      <div className="px-4 py-3 bg-secondary/20 rounded-lg">
                        <h3 className="font-medium">한림대학교 소프트웨어융합</h3>
                        <p className="text-xs text-primary/70 mt-1">2018.02 ~ 2025.06(졸업예정)</p>
                      </div>
                    </div>
                  </div>
                )}

                {currentPage.id === "about-4" && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold">Activities</h2>
                    <div className="space-y-4">
                      {[
                        { name: "씨애랑", type: "학술 동아리" },
                        { name: "DAWN", type: "창업동아리" },
                        { name: "Fanespo", type: "창업팀" },
                        { name: "Edubill", type: "창업팀" }
                      ].map((activity) => (
                        <div key={activity.name} className="px-4 py-3 bg-secondary/20 rounded-lg">
                          <h3 className="font-medium">{activity.name}</h3>
                          <p className="text-xs text-primary/70 mt-1">{activity.type}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {currentPage.id.startsWith("experience") && (
              <div>
                <h2 className="text-2xl font-bold mb-8">Work Experience</h2>
                {currentPage.id === "experience-1" && (
                  <div className="space-y-6">
                    {experiences.slice(0, 1).map((exp) => (
                      <div key={exp.id} className="space-y-4">
                        <div className="space-y-2">
                          <p className="text-sm text-muted-foreground font-mono">{exp.period}</p>
                          <h3 className="text-xl font-semibold">{exp.role}</h3>
                          <p className="text-primary/80 italic">{exp.company}</p>
                          <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
                        </div>
                        
                        <div className="space-y-4">
                          {exp.achievements.slice(0, 1).map((achievement) => (
                            <div
                              key={achievement.title}
                              className="p-4 rounded-lg bg-secondary/30"
                            >
                              <h4 className="font-medium mb-3">{achievement.title}</h4>
                              <ul className="list-disc list-inside pl-2 space-y-2">
                                {achievement.description.slice(0, 2).map((desc) => (
                                  <li
                                    className="text-sm text-muted-foreground"
                                    key={desc.text}
                                  >
                                    {desc.text}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-4">
                          <h4 className="text-sm font-medium text-muted-foreground mb-2">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.slice(0, 4).map((skill) => (
                              <span
                                key={skill}
                                className="px-2 py-1 text-xs bg-primary/5 text-primary/80 rounded-full"
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
                          <p className="text-sm text-muted-foreground font-mono">{exp.period}</p>
                          <h3 className="text-xl font-semibold">{exp.role}</h3>
                          <p className="text-primary/80 italic">{exp.company}</p>
                          <p className="text-sm text-muted-foreground mt-4">
                            {exp.description}
                          </p>
                        </div>
                        
                        <div className="space-y-4">
                          {exp.achievements.slice(0, 1).map((achievement) => (
                            <div
                              key={achievement.title}
                              className="p-4 rounded-lg bg-secondary/30"
                            >
                              <h4 className="font-medium mb-3">{achievement.title}</h4>
                              <ul className="list-disc list-inside pl-2 space-y-2">
                                {achievement.description.slice(0, 2).map((desc) => (
                                  <li
                                    className="text-sm text-muted-foreground"
                                    key={desc.text}
                                  >
                                    {desc.text}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-4">
                          <h4 className="text-sm font-medium text-muted-foreground mb-2">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.slice(0, 4).map((skill) => (
                              <span
                                key={skill}
                                className="px-2 py-1 text-xs bg-primary/5 text-primary/80 rounded-full"
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
                          <p className="text-sm text-muted-foreground font-mono">{exp.period}</p>
                          <h3 className="text-xl font-semibold">{exp.role}</h3>
                          <p className="text-primary/80 italic">{exp.company}</p>
                          <p className="text-sm text-muted-foreground mt-4">
                            {exp.description}
                          </p>
                        </div>
                        
                        <div className="space-y-4">
                          {exp.achievements.slice(0, 1).map((achievement) => (
                            <div
                              key={achievement.title}
                              className="p-4 rounded-lg bg-secondary/30"
                            >
                              <h4 className="font-medium mb-3">{achievement.title}</h4>
                              <ul className="list-disc list-inside pl-2 space-y-2">
                                {achievement.description.slice(0, 2).map((desc) => (
                                  <li
                                    className="text-sm text-muted-foreground"
                                    key={desc.text}
                                  >
                                    {desc.text}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-4">
                          <h4 className="text-sm font-medium text-muted-foreground mb-2">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.slice(0, 4).map((skill) => (
                              <span
                                key={skill}
                                className="px-2 py-1 text-xs bg-primary/5 text-primary/80 rounded-full"
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
              <div>
                <h2 className="text-2xl font-bold mb-8">Projects</h2>
                <div className="space-y-6">
                  {currentPage.id === "projects-1" && projects.slice(0, 2).map((project) => (
                    <div 
                      key={project.id} 
                      className="rounded-lg overflow-hidden bg-secondary/10 active:scale-95 transition-transform cursor-pointer"
                      onClick={(e) => handleProjectClick(project, e)}
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
                        <h3 className="text-lg font-bold">{project.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                        <div className="flex flex-wrap gap-1 mt-3">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 text-xs bg-primary/5 text-primary/70 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {currentPage.id === "projects-2" && projects.slice(2, 4).map((project) => (
                    <div 
                      key={project.id} 
                      className="rounded-lg overflow-hidden bg-secondary/10 active:scale-95 transition-transform cursor-pointer"
                      onClick={(e) => handleProjectClick(project, e)}
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
                        <h3 className="text-lg font-bold">{project.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                        <div className="flex flex-wrap gap-1 mt-3">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 text-xs bg-primary/5 text-primary/70 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {currentPage.id === "projects-3" && projects.slice(4, 6).map((project) => (
                    <div 
                      key={project.id} 
                      className="rounded-lg overflow-hidden bg-secondary/10 active:scale-95 transition-transform cursor-pointer"
                      onClick={(e) => handleProjectClick(project, e)}
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
                        <h3 className="text-lg font-bold">{project.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                        <div className="flex flex-wrap gap-1 mt-3">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 text-xs bg-primary/5 text-primary/70 rounded-full"
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
              <div>
                <div className="text-center space-y-8">
                  <h2 className="text-2xl font-bold">Let&apos;s Connect</h2>
                  <p className="text-muted-foreground">
                    I&apos;m always open to new opportunities and interesting projects
                  </p>
                  <Button className="w-full">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                  <div className="flex justify-center gap-6 pt-8">
                    <Button variant="ghost" size="icon">
                      <Github className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Mail className="h-5 w-5" />
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

  return (
    <main className="flex min-h-screen flex-col">
      {isMobile ? (
        // 모바일 퍼널 구조
        <div className="mobile-funnel relative">
          {/* 뒤로가기 버튼 */}
          {(currentMobilePage > 0 || isProjectFunnel) && (
            <button 
              onClick={isProjectFunnel ? goToPrevProjectPage : goToPrevMobilePage}
              className="absolute top-6 left-4 z-10 p-2 rounded-full bg-white/80 shadow-md active:scale-95 transition-transform"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}
          
          {/* 현재 페이지 */}
          {isProjectFunnel ? renderProjectFunnelPage() : renderMobilePage()}
          
          {/* 다음 버튼 */}
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
            <Button 
              className={`w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition-transform ${buttonPressed ? 'scale-95' : 'scale-100'}`}
              onClick={isProjectFunnel ? goToNextProjectPage : goToNextMobilePage}
              disabled={isProjectFunnel ? currentProjectPage >= 3 : currentMobilePage >= mobilePages.length - 1}
            >
              {isProjectFunnel ? (currentProjectPage === 3 ? "완료" : "다음") : (currentMobilePage === 0 ? "확인" : "다음")}
            </Button>
          </div>
        </div>
      ) : (
        // 기존 데스크톱 레이아웃
        <>
          <div className="aurora-bg" />

          {/* Navigation */}
          <nav
            className={`fixed w-full border-b border-primary/10 nav-blur transition-transform duration-500 ${
              isNavVisible && !isScrolling ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <div className="container flex h-16 items-center justify-between">
              <Link className="text-lg font-semibold" href="/">
                <span>Portfolio</span>
              </Link>
              <nav className="flex items-center space-x-8 text-sm font-medium">
                <Link
                  href="#about"
                  className="nav-link"
                  onClick={(e) => handleScroll(e, "about")}
                >
                  About
                </Link>
                <Link
                  href="#experience"
                  className="nav-link"
                  onClick={(e) => handleScroll(e, "experience")}
                >
                  Experience
                </Link>
                <Link
                  href="#projects"
                  className="nav-link"
                  onClick={(e) => handleScroll(e, "projects")}
                >
                  Projects
                </Link>
                <Link
                  href="#contact"
                  className="nav-link"
                  onClick={(e) => handleScroll(e, "contact")}
                >
                  Contact
                </Link>
              </nav>
            </div>
          </nav>

          {/* Hero Section */}
          <section
            id="about"
            className="relative min-h-screen w-full bg-background overflow-hidden"
          >
            <div className="hero-gradient" />
            <div className="container flex items-center">
              <div className="flex flex-col gap-8 max-w-3xl pt-24">
                <div className="space-y-6">
                  <p className="text-lg text-primary/80 font-mono">안녕하세요.</p>
                  <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                    개발자 안승찬 입니다.
                  </h1>
                  <div className="space-y-4 text-lg text-muted-foreground">
                    <p>
                      4년전 &quot;Hello World&quot;를 출력하며 개발자로서의 첫
                      발자취를 남겼습니다.
                    </p>
                    <p>
                      &quot;부딪힐거 같으면 더 쌔게 밟아라&quot; 라는 말을 좋아합니다.
                      <br /> 도전과 실패를 두려워하지 않고, <br />
                      오히려 더 강하게 부딪혀 성장하는 것이 제 개발 철학입니다.
                    </p>
                    <div className="pl-4 border-l-2 border-primary/20 my-4 space-y-2">
                      <p className="text-base">
                        새로운 기술을 배우는 것을 두려워하지 않습니다.
                      </p>
                      <p className="text-base">
                        문제에 직면했을 때 회피하지 않고 정면으로 도전합니다.
                      </p>
                    </div>
                    <p>개발과 함께한 동료, 그리고 JS를 사랑합니다.</p>
                  </div>
                  <div className="section-divider ml-0" />
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Most Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "TypeScript",
                      "React",
                      "ReactNative",
                      "Next.js",
                      "Vue",
                      "Electron",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-primary/5 text-primary/80 rounded-full
                          hover:bg-primary/10 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 pt-8 border-t border-primary/10">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="text-primary/80 text-lg">📚</div>
                      <p className="text-base font-medium">Education</p>
                    </div>
                    <div className="space-y-3">
                      <div
                        className="group card-dark rounded-lg 
                              hover:bg-secondary/50 transition-all duration-300"
                        role="button"
                        tabIndex={0}
                      >
                        <div className="px-4 py-2 flex items-center gap-4">
                          <div className="flex items-start justify-between">
                            <h3 className="font-medium group-hover:text-primary transition-colors">
                              한림대학교 소프트웨어융합
                            </h3>
                          </div>
                          <p className="px-2 text-xs bg-primary/5 text-primary/70 rounded-full mt-[0px]">
                            2018.02 ~ 2025.06(졸업예정)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="text-primary/80 text-lg">🏃‍♂️</div>
                      <p className="text-base font-medium">Activities</p>
                    </div>
                    <div className="space-y-3">
                      <div
                        className="group card-dark rounded-lg 
                              hover:bg-secondary/50 transition-all duration-300"
                        role="button"
                        tabIndex={0}
                      >
                        <div className="px-4 py-2 flex items-center gap-4">
                          <div className="flex items-start justify-between">
                            <h3 className="font-medium group-hover:text-primary transition-colors">
                             씨애랑
                            </h3>
                          </div>
                          <p className="px-2 text-xs bg-primary/5 text-primary/70 rounded-full mt-[0px]">
                            학술 동아리
                          </p>
                        </div>
                      </div>
                      <div
                        className="group card-dark rounded-lg 
                              hover:bg-secondary/50 transition-all duration-300"
                        role="button"
                        tabIndex={0}
                      >
                        <div className="px-4 py-2 flex items-center gap-4">
                          <div className="flex items-start justify-between">
                            <h3 className="font-medium group-hover:text-primary transition-colors">
                              DAWN
                            </h3>
                          </div>
                          <p className="px-2 text-xs bg-primary/5 text-primary/70 rounded-full mt-[0px]">
                            창업동아리
                          </p>
                        </div>
                      </div>
                      <div
                        className="group card-dark rounded-lg 
                              hover:bg-secondary/50 transition-all duration-300"
                        role="button"
                        tabIndex={0}
                      >
                        <div className="px-4 py-2 flex items-center gap-4">
                          <div className="flex items-start justify-between">
                            <h3 className="font-medium group-hover:text-primary transition-colors">
                              Fanespo
                            </h3>
                          </div>
                          <p className="px-2 text-xs bg-primary/5 text-primary/70 rounded-full mt-[0px]">
                            창업팀
                          </p>
                        </div>
                      </div>
                      <div
                        className="group card-dark rounded-lg 
                              hover:bg-secondary/50 transition-all duration-300"
                        role="button"
                        tabIndex={0}
                      >
                        <div className="px-4 py-2 flex items-center gap-4">
                          <div className="flex items-start justify-between">
                            <h3 className="font-medium group-hover:text-primary transition-colors">
                              Edubill
                            </h3>
                          </div>
                          <p className="px-2 text-xs bg-primary/5 text-primary/70 rounded-full mt-[0px]">
                            창업팀
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-primary/10">
                    {/* Awards */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Trophy className="h-5 w-5 text-primary/80" />
                        <p className="text-base font-medium">
                          Awards & Achievements
                        </p>
                      </div>
                      <div className="space-y-3">
                        {awards.map((award) => (
                          <div
                            key={award.id}
                            className="group card-dark rounded-lg 
                              hover:bg-secondary/50 transition-all duration-300 px-3 py-2"
                          >
                            <div className="flex items-start gap-3">
                              <div className="mt-1 text-primary/60">🏆</div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between">
                                  <h3 className="font-medium group-hover:text-primary transition-colors truncate">
                                    {award.title}
                                  </h3>
                                  <span className="text-sm text-muted-foreground shrink-0 ml-2">
                                    {award.date}
                                  </span>
                                </div>
                                <p className="text-primary/70 text-sm mt-1 truncate">
                                  {award.organization}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Libraries */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="text-primary/80 text-lg">📦</div>
                        <p className="text-base font-medium">
                          Libraries & Custom Hooks
                        </p>
                      </div>
                      <div className="space-y-3">
                        {libraries.map((lib) => (
                          <div
                            key={lib.id}
                            className="group card-dark rounded-lg 
                              hover:bg-secondary/50 transition-all duration-300"
                            onClick={() => handleExternalLink(lib.url)}
                            role="button"
                            tabIndex={0}
                          >
                            <div className="space-y-2">
                              <div className="flex items-start justify-between">
                                <h3 className="font-medium group-hover:text-primary transition-colors">
                                  {lib.name}
                                </h3>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  {lib.stars && (
                                    <span className="flex items-center gap-1">
                                      ⭐ {lib.stars}
                                    </span>
                                  )}
                                  {lib.downloads && (
                                    <span className="flex items-center gap-1">
                                      ⬇️ {lib.downloads.toLocaleString()}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <p className="text-sm text-muted-foreground line-clamp-1">
                                {lib.description}
                              </p>
                              <div className="flex flex-wrap gap-1">
                                {lib.techStack.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-2 py-0.5 text-xs bg-primary/5 text-primary/70 rounded-full"
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
                  </div>
                </div>

                <div className="flex gap-4 pt-4 pb-4">
                  <Button
                    variant="default"
                    size="lg"
                    className="bg-primary hover:bg-primary/90"
                    onClick={() =>
                      handleExternalLink("https://github.com/Ahnseungc")
                    }
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary/20 hover:border-primary/40"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Contact
                  </Button>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="absolute top-24 right-0 w-[500px] h-[700px] hidden lg:block profile-container">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/profile-placeholder.jpg"
                  alt="Profile"
                  fill
                  className="object-cover object-top profile-image"
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="w-full dark-section">
            <div className="container py-24">
              <h2 className="text-3xl font-bold mb-12 accent-text">
                Work Experience
              </h2>
              <div className="space-y-20">
                {experiences.map((exp) => (
                  <div key={exp.id} className="grid gap-8 md:grid-cols-[1fr,2fr]">
                    {/* 왼쪽: 기간 및 회사 정보 */}
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground font-mono">
                        {exp.period}
                      </p>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <p className="text-primary/80 italic">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mt-4">
                        {exp.description}
                      </p>
                    </div>

                    {/* 오른쪽: 성과 및 스킬 */}
                    <div className="space-y-8">
                      {/* 주요 성과 */}
                      <div className="space-y-4">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <div
                            key={achievement.title}
                            className="p-4 rounded-lg bg-secondary/50 hover:bg-secondary/80 transition-colors"
                          >
                            <h4 className="font-medium mb-2 flex items-center gap-2">
                              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm">
                                {achievementIndex + 1}
                              </span>
                              {achievement.title}
                            </h4>

                            <ul className="list-disc list-inside pl-6 space-y-2">
                              {achievement.description.map((desc) => (
                                <li
                                  className="text-sm text-muted-foreground"
                                  key={desc.text}
                                >
                                  {desc.link ? (
                                    <span className="flex items-center gap-1 inline-flex">
                                      <a 
                                        href={desc.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:underline inline-flex items-center gap-1"
                                      >
                                        {desc.text}
                                        <ExternalLink className="h-3 w-3" />
                                      </a>
                                    </span>
                                  ) : (
                                    desc.text
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* 기술 스택 */}
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-3">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 text-sm bg-primary/5 text-primary/80 rounded-full
                                hover:bg-primary/10 transition-colors cursor-default"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="w-full dark-section">
            <div className="container py-24 space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent header-underline">
                  Side Projects
                </h2>
              </div>
              <div className="album-grid">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="album-card relative"
                    onClick={(e) => handleProjectClick(project, e)}
                  >
                    {project.isAward && (
                      <div className="absolute top-2 right-2 bg-yellow-500 p-2 rounded-full shadow-md z-[100]">
                        <Trophy className="w-5 h-5 text-white" />
                      </div>
                    )}
                    <div className="album-spine" />
                    <div className="album-content">
                      <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-muted-foreground">{project.description}</p>
                      <div className="album-tags">
                        {project.tags.map((tag) => (
                          <span key={tag} className="album-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Project Expand Modal */}
          <div className={`project-expand ${selectedProject ? "open" : ""}`}>
            <div
              className="expand-background"
              style={
                {
                  "--x": expandPosition.x,
                  "--y": expandPosition.y,
                } as React.CSSProperties
              }
              onClick={() => setSelectedProject(null)}
            />
            {selectedProject && (
              <div className="expand-content">
                <button
                  className="expand-close"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="h-6 w-6" />
                </button>

                <div className="project-detail">
                  <div className="project-header">
                    <h2 className="text-4xl font-bold">{selectedProject.title}</h2>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span key={tag} className="album-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="project-image-container mb-12">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="project-info">
                    <div className="project-description">
                      <h3 className="text-2xl font-semibold mb-4">Overview</h3>
                      <p className="text-muted-foreground whitespace-pre-line">
                        {selectedProject.fullDescription}
                      </p>
                      <div className="flex gap-4 mt-8">
                        <Button
                          variant="default"
                          size="lg"
                          className="bg-primary hover:bg-primary/90"
                          onClick={() =>
                            handleExternalLink(selectedProject.demoUrl)
                          }
                        >
                          View Live Demo
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="lg"
                          onClick={() =>
                            handleExternalLink(selectedProject.githubUrl)
                          }
                        >
                          <Github className="mr-2 h-4 w-4" />
                          View Source
                        </Button>
                      </div>
                    </div>

                    <div className="project-meta">
                      <div className="meta-section">
                        <h4 className="meta-title">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tags.map((tag) => (
                            <span key={tag} className="album-tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      {/* Add more meta sections as needed */}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Contact Section */}
          <section id="contact" className="w-full relative">
            <div className="hero-gradient opacity-50" />
            <div className="container py-24">
              <div className="max-w-2xl mx-auto text-center space-y-8">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl header-underline">
                  Let&apos;s Connect
                </h2>
                <p className="text-muted-foreground">
                  I&apos;m always open to new opportunities and interesting projects
                </p>
                <div className="flex justify-center gap-4">
                  <Button className="min-w-[200px]">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </div>
                <div className="flex justify-center gap-4 pt-8">
                  <Button variant="ghost" size="icon">
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Mail className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </main>
  );
}
