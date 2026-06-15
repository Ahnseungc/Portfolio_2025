"use client";

import { useEffect, useRef } from "react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const els = section.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="wrap">
        <h2 className="contact__title" data-reveal="">
          감사합니다
        </h2>
        <p className="contact__lead" data-reveal="fade" style={{ "--d": ".06s" } as React.CSSProperties}>
          더 궁금한 점이 있다면 편하게 연락주세요.
        </p>
        <div className="contact__actions" data-reveal="fade" style={{ "--d": ".12s" } as React.CSSProperties}>
          <a className="btn btn--primary" href="mailto:omnipoo@naver.com">
            이메일 <span className="arrow">→</span>
          </a>
          <a className="btn btn--ghost" href="tel:+821040350672">
            010-4035-0672
          </a>
        </div>
        <footer className="contact__foot">
          <p className="contact__copy">© 2026 안승찬</p>
          <nav className="contact__social" aria-label="외부 링크">
            <a href="https://github.com/Ahnseungc" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://velog.io/@omnipo" target="_blank" rel="noopener noreferrer">
              Velog
            </a>
            <a href="https://www.linkedin.com/in/seungchan-ahn" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </nav>
        </footer>
      </div>
    </section>
  );
}
