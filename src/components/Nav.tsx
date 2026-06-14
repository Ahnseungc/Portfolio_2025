"use client";

import { useEffect, useRef, useState } from "react";

function getInitialTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  const saved = localStorage.getItem("theme") as "light" | "dark" | null;
  if (saved) return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // 초기 테마 적용
  useEffect(() => {
    const t = getInitialTheme();
    setTheme(t);
    document.documentElement.setAttribute("data-theme", t);
  }, []);

  // 스크롤 이벤트
  useEffect(() => {
    const nav = navRef.current;
    const bar = barRef.current;
    if (!nav || !bar) return;

    const onScroll = () => {
      nav.classList.toggle("scrolled", window.scrollY > 60);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = total > 0 ? `${(window.scrollY / total) * 100}%` : "0%";
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <>
      <div ref={barRef} className="progress-bar" />
      <nav ref={navRef} className="nav">
        <a className="nav__brand" href="#top">
          <i />
          안승찬
        </a>
        <div className="nav__links">
          <a href="#about">소개</a>
          <a href="#work">프로젝트</a>
          <a href="#career">경력</a>
          <a href="#skills">스킬</a>
          <button
            onClick={toggleTheme}
            aria-label="다크/라이트 모드 전환"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              lineHeight: 1,
              transition: "background 0.25s, color 0.25s",
              // 라이트모드 → 다크 배경/색상, 다크모드 → 라이트 배경/색상
              background: theme === "light" ? "#181f29" : "#ffffff",
              color: theme === "light" ? "#f4f6f8" : "#181f29",
            }}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <a className="nav__cta" href="#contact">연락하기</a>
        </div>
      </nav>
    </>
  );
}
