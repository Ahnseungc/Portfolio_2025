"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";

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
    description: string[];
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
          "로그인 구조 및 로직 개발",
          "Jenkins/Docker/Nginx 기반 CI / CD 파이프라인 구축",
          "Stomp 기반 채팅 구현",
          "SSE 기반 웹 알림 구현",
        ],
      },
      {
        title: "CareFlow Electron WebApp 개발",
        description: [
          "Electron 기반 웹앱 패키징",
          "윈도우 코드 서명 등록",
          "github release 통한 배포 구축 및 자동 업데이트",
          "네이티브 커스텀 알림 구현",
        ],
      },
      {
        title: "CareFlow Tablet App 개발",
        description: [
          "시니어를 위한 시니어 모드 개발",
          "react-native-tts를 이용한 음성 텍스트 변환 개발",
          "웹뷰를 통한 유튜브 및 각종 콘텐츠 개발",
          "SSE를 통한 원격 로그 아웃 구현",
        ],
      },
      {
        title: "MonoRepo 도입",
        description: [
          "React 프로젝트들과 ReactNative 프로젝트를 pnpm과 turbopack를 통해 하나의 레포지토리로 관리",
          "Jenkins와 docker를 통한 CI/CD 파이프라인 구축",
          "기존 프로젝트 번등사이즈 25%감소 및 종속성 충돌 방지",
        ],
      },
      {
        title: "디자인 시스템 개발(CDS)",
        description: ["mui 기반 Storybook 개발"],
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
        title: "Next.js 기반 React Native 웹뷰 어플 개선",
        description: [
          "매칭 현황 그래프 신규 기능 추가",
          "홈 화면 UI 개선 및 신규 기능",
          "CSR --> ISR 전환으로 페이지 로드 속도 향상",
          "공통 훅 개발",
          "스택 라우터 도입",
          "스켈레톤 UI 도입",
        ],
      },
      {
        title: "포인트 기능 개발",
        description: [
          "유저 포인트 출금 및 충전 테이블 개발",
          "어드민 포인트 관리 UI 개발",
        ],
      },
      {
        title: "랜딩 페이지 개발",
        description: [
          "Code Splitting, 이미지 최적화, 캐싱 전략 수립으로 LCP 2초 이내 달성",
        ],
      },
    ],
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Zustand",
      "Mui",
      "Webpack",
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
        title: "플랫폼 내 상품 수집 및 등록 페이지 제작",
        description: [
          "매칭 현황 그래프 신규 기능 추가",
          "홈 화면 UI 개선 및 신규 기능",
          "CSR --> ISR 전환으로 페이지 로드 속도 향상",
          "공통 훅 개발",
          "스택 라우터 도입",
          "스켈레톤 UI 도입",
        ],
      },
      {
        title: "어드민 페이지 개발",
        description: [
          "유저 포인트 출금 및 충전 테이블 개발",
          "어드민 포인트 관리 UI 개발",
        ],
      },
      {
        title: "FCM 웹 푸시 알림 개발",
        description: [
          "Code Splitting, 이미지 최적화, 캐싱 전략 수립으로 LCP 2초 이내 달성",
        ],
      },
      {
        title: "PWA 개발",
        description: [
          "Code Splitting, 이미지 최적화, 캐싱 전략 수립으로 LCP 2초 이내 달성",
        ],
      },
    ],
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Recoil",
      "Mui",
      "Webpack",
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

const handleExternalLink = (url: string) => {
  if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
};

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [expandPosition, setExpandPosition] = useState({ x: "50%", y: "50%" });
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

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
    const rect = (e.target as Element).getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    setExpandPosition({
      x: `${x}px`,
      y: `${y}px`,
    });
    setSelectedProject(project);
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

  return (
    <main className="flex min-h-screen flex-col">
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
                  4년전 "Hello World"를 출력하며 개발자로서의 첫 발자취를
                  남겼습니다.
                </p>
                <p>
                  "부딪힐거 같으면 더 쌔게 밟아라" 라는 말을 좋아합니다.
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
                  <p className="text-base">
                    실패를 경험으로 여기고, 더 나은 해결책을 찾아냅니다.
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
                          {achievement.description.map((desc) => {
                            return (
                              <li
                                className="text-sm text-muted-foreground"
                                key={desc}
                              >
                                {desc}
                              </li>
                            );
                          })}
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
            {/* {projects.map((project) => (
              <div
                key={project.id}
                className="album-card"
                onClick={(e) => handleProjectClick(project, e)}
              >
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
            ))} */}
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
              Let's Connect
            </h2>
            <p className="text-muted-foreground">
              I'm always open to new opportunities and interesting projects
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
    </main>
  );
}
