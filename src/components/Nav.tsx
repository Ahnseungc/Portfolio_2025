"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  applyTheme,
  clearThemeOverride,
  getEffectiveTheme,
  getStoredOverride,
  getThemeByTime,
  isThemeAuto,
  setThemeOverride,
  type Theme,
} from "@/lib/theme";

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const [theme, setTheme] = useState<Theme>("light");
  const [auto, setAuto] = useState(true);

  const syncFromDocument = useCallback(() => {
    const override = getStoredOverride();
    setAuto(!override);
    setTheme(getEffectiveTheme());
  }, []);

  useEffect(() => {
    syncFromDocument();

    const onThemeChange = (event: Event) => {
      const next = (event as CustomEvent<{ theme: Theme }>).detail?.theme;
      if (next) setTheme(next);
      setAuto(isThemeAuto());
    };

    window.addEventListener("themechange", onThemeChange);
    return () => window.removeEventListener("themechange", onThemeChange);
  }, [syncFromDocument]);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    let lastY = window.scrollY;
    const TOP = 12;
    const BOTTOM = 12;
    const DELTA = 4;

    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const atTop = y <= TOP;
      const atBottom = max <= TOP || y >= max - BOTTOM;

      nav.classList.toggle("scrolled", y > 60);

      if (atTop || atBottom) {
        nav.classList.remove("nav--hidden");
      } else if (y - lastY > DELTA) {
        nav.classList.add("nav--hidden");
      } else if (lastY - y > DELTA) {
        nav.classList.remove("nav--hidden");
      }

      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    setTheme(next);
    setAuto(false);
    setThemeOverride(next);
    applyTheme(next);
  };

  const resetAuto = () => {
    clearThemeOverride();
    const next = getThemeByTime();
    setTheme(next);
    setAuto(true);
    applyTheme(next);
  };

  return (
    <nav ref={navRef} className="nav">
      <a className="nav__brand" href="#top">
        <i />
        안승찬
      </a>
      <div className="nav__links">
        <a href="#about">소개</a>
        <a href="#work">프로젝트</a>
        <a href="#writing">글</a>
        <a href="#career">경력</a>
        <a href="#skills">스킬</a>
        <button
          type="button"
          className="nav__theme"
          onClick={toggleTheme}
          onDoubleClick={resetAuto}
          aria-label={
            auto
              ? `시간대 자동 (${theme === "light" ? "라이트" : "다크"}) — 클릭해 전환, 더블클릭은 자동 유지`
              : `${theme === "light" ? "라이트" : "다크"} 모드 — 클릭해 전환, 더블클릭하면 시간대 자동`
          }
          title={auto ? "시간대 자동 · 더블클릭: 자동 유지" : "수동 전환 중 · 더블클릭: 시간대 자동"}
        >
          <span className="nav__theme-icon" aria-hidden="true">
            {theme === "light" ? "🌙" : "☀️"}
          </span>
          {auto && <span className="nav__theme-auto" aria-hidden="true" />}
        </button>
        <a className="nav__cta" href="#contact">
          연락하기
        </a>
      </div>
    </nav>
  );
}
