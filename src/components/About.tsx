"use client";

import { useEffect, useRef } from "react";
import { stats } from "@/data/portfolio";

const lines = [
  ["기술의", "사용법보다"],
  ["‘왜", "필요한가’를", "먼저", "이해하며,"],
  ["문제", "해결", "중심으로", "기술을", "선택하는", "개발자입니다."],
] as const;

const keyWords = new Set(["‘왜", "필요한가’를", "개발자입니다."]);

export default function About() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const statRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const visualFrameRef = useRef<HTMLDivElement>(null);

  // Sticky statement word reveal + visual spread
  useEffect(() => {
    const scene = sceneRef.current;
    const copy = copyRef.current;
    const visual = visualRef.current;
    const frame = visualFrameRef.current;
    if (!scene) return;
    const wordEls = scene.querySelectorAll<HTMLSpanElement>("[data-word]");

    const applyVisual = (spread: number) => {
      const t = 1 - Math.pow(1 - spread, 1.5);
      const inset = Math.max(0, (1 - t) * 40);
      const copyShift = t * -8;

      if (frame) {
        frame.style.opacity = String(0.5 + t * 0.5);
        frame.style.clipPath =
          inset < 0.5
            ? "inset(0 0 0 0 round 24px)"
            : `inset(0 ${inset}% 0 ${inset}% round 24px)`;
      }
      if (copy) copy.style.transform = `translateX(${copyShift}px)`;
      if (visual) visual.style.transform = "none";
    };

    const onScroll = () => {
      const rect = scene.getBoundingClientRect();
      const h = Math.max(scene.offsetHeight - window.innerHeight, 1);
      const progress = Math.max(0, Math.min(1, -rect.top / h));
      const threshold = progress * wordEls.length * 1.2;

      wordEls.forEach((el, i) => {
        el.classList.toggle("lit", i < threshold);
      });

      const wordSpread = wordEls.length ? threshold / wordEls.length : 0;
      const spread = Math.min(1, Math.max(wordSpread, progress * 0.2));

      applyVisual(spread);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Stats counter
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLSpanElement;
          const target = Number(el.dataset.count);
          const dur = 1400;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - start) / dur, 1);
            const ease = 1 - Math.pow(1 - t, 3);
            el.textContent = String(Math.round(ease * target));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    statRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  // Scroll reveal for bio section
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
    <section className="about" id="about" ref={sectionRef}>
      {/* Pinned statement */}
      <div className="scene" style={{ height: "260vh" }} ref={sceneRef}>
        <div className="scene__sticky">
          <div className="wrap scene__inner">
            <div className="scene__copy" ref={copyRef}>
              <span className="section-num">01 — ABOUT</span>
              <p className="statement">
                {lines.map((line, lineIndex) => (
                  <span className="statement__line" key={lineIndex}>
                    {line.map((w, wordIndex) => (
                      <span
                        key={`${lineIndex}-${wordIndex}`}
                        data-word=""
                        className={keyWords.has(w) ? "key" : ""}
                      >
                        {w}{" "}
                      </span>
                    ))}
                  </span>
                ))}
              </p>
            </div>
            <div className="scene__visual" ref={visualRef} aria-hidden="true">
              <div className="scene__visual-frame" ref={visualFrameRef}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/about-profile.svg" alt="" width={900} height={1125} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="wrap section-pad" style={{ paddingTop: 0 }}>
        <div className="stats">
          {stats.map((s, i) => (
            <div key={i} data-reveal="">
              <div className="stat__num">
                <span
                  ref={(el) => { statRefs.current[i] = el; }}
                  data-count={s.num}
                >
                  0
                </span>
                <span className="suf">{s.suf}</span>
              </div>
              <div className="stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bio */}
      <div className="wrap" style={{ paddingBottom: "clamp(80px, 14vh, 180px)" }}>
        <div className="about__bio">
          <div data-reveal="scale">
            <div className="portrait" style={{ padding: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile.png"
                alt="안승찬 프로필"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
          </div>
          <div>
            <h2 className="section-title" data-reveal="">
              소개
            </h2>
            <p className="about__lead" data-reveal="" style={{ "--d": ".04s" } as React.CSSProperties}>
              성능과 구조를 함께 봅니다.
            </p>
            <p data-reveal="" style={{ "--d": ".08s" } as React.CSSProperties}>
              Lighthouse·LCP 등 지표로 개선 전후를 확인합니다. SSR/ISR 분리, 리스트 가상화, 번들 최적화를 실무에 적용해 왔습니다.
            </p>
            <p data-reveal="" style={{ "--d": ".14s" } as React.CSSProperties}>
              케어마인더에서는 RN → WebView + Next.js 전환과 모노레포·디자인 시스템을 맡았고, 현재 골드앤컴퍼니에서 금 거래 앱 프론트엔드를 개발하고 있습니다.
            </p>
            <p data-reveal="" style={{ "--d": ".2s" } as React.CSSProperties}>
              기획·디자인·백엔드와 협업하며, 팀이 같은 기준으로 일할 수 있게 정리하는 편입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
