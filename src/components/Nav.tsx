"use client";

import { useEffect, useRef } from "react";

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    const bar = barRef.current;
    if (!nav || !bar) return;

    const onScroll = () => {
      const scrolled = window.scrollY > 60;
      nav.classList.toggle("scrolled", scrolled);

      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
      bar.style.width = `${pct}%`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          <a className="nav__cta" href="#contact">연락하기</a>
        </div>
      </nav>
    </>
  );
}
