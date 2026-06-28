"use client";

import { useEffect, useRef } from "react";
import { stats } from "@/data/portfolio";

const lines = [
  ["기술의", "사용법보다"],
  ["'왜", "필요한가'를", "먼저", "이해하며,"],
  ["문제", "해결", "중심으로", "기술을", "선택하는", "개발자입니다."],
] as const;

const keyWords = new Set(["'왜", "필요한가'를", "개발자입니다."]);

export default function About() {
  const sectionRef   = useRef<HTMLElement>(null);
  const sceneRef     = useRef<HTMLDivElement>(null);
  const frameRef     = useRef<HTMLDivElement>(null);
  const statRefs     = useRef<(HTMLSpanElement | null)[]>([]);
  const scrollDir    = useRef<"down" | "up">("down");
  const prevY        = useRef(0);

  /* 스크롤 방향 추적 */
  useEffect(() => {
    prevY.current = window.scrollY;
    const track = () => {
      scrollDir.current = window.scrollY > prevY.current ? "down" : "up";
      prevY.current = window.scrollY;
    };
    window.addEventListener("scroll", track, { passive: true });
    return () => window.removeEventListener("scroll", track);
  }, []);

  /* 비주얼 펼침 + 단어 reveal — 뷰포트 진입 시 1회 트리거 */
  useEffect(() => {
    const scene = sceneRef.current;
    const frame = frameRef.current;
    if (!scene) return;

    const wordEls = Array.from(scene.querySelectorAll<HTMLSpanElement>("[data-word]"));
    let timers: ReturnType<typeof setTimeout>[] = [];

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;

          /* 이미지 clip-path 펼침 */
          if (frame) {
            frame.style.transition =
              "clip-path 1.3s cubic-bezier(0.16,1,0.3,1), opacity 0.9s cubic-bezier(0.16,1,0.3,1)";
            frame.style.clipPath = "inset(0 0% 0 0% round 24px)";
            frame.style.opacity = "1";
          }

          /* 단어 stagger */
          timers.forEach(clearTimeout);
          const ordered = scrollDir.current === "up" ? [...wordEls].reverse() : wordEls;
          ordered.forEach((el, i) => {
            timers.push(setTimeout(() => el.classList.add("lit"), i * 55));
          });

          io.unobserve(e.target);
        });
      },
      { threshold: 0.3 }
    );

    io.observe(scene);
    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  /* [data-reveal] — 위아래 방향 */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reveals = section.querySelectorAll<HTMLElement>("[data-reveal]");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const el = e.target as HTMLElement;
          if (e.isIntersecting) {
            el.dataset.from = scrollDir.current;
            el.classList.add("in");
          } else {
            el.classList.remove("in");
            delete el.dataset.from;
          }
        });
      },
      { threshold: 0.2 }
    );
    reveals.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  /* Stats 카운터 */
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
            el.textContent = String(Math.round((1 - Math.pow(1 - t, 3)) * target));
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

  return (
    <section className="about" id="about" ref={sectionRef}>

      {/* 문구 + 프로필 이미지 (sticky 없이, IO 펼침) */}
      <div className="scene scene--about" ref={sceneRef}>
        <div className="scene__sticky">
          <div className="wrap scene__inner">
            <div className="scene__copy">
              <span className="section-num">01 — ABOUT</span>
              <p className="statement">
                {lines.map((line, li) => (
                  <span className="statement__line" key={li}>
                    {line.map((w, wi) => (
                      <span
                        key={`${li}-${wi}`}
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
            <div className="scene__visual" aria-hidden="true">
              <div className="scene__visual-frame" ref={frameRef}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/about-profile.svg" alt="" width={900} height={1125} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div
        className="wrap section-pad"
        style={{ paddingTop: "clamp(40px,6vh,64px)", paddingBottom: "clamp(40px,6vh,64px)" }}
      >
        <div className="stats">
          {stats.map((s, i) => (
            <div key={i} data-reveal="">
              <div className="stat__num">
                <span ref={(el) => { statRefs.current[i] = el; }} data-count={s.num}>0</span>
                <span className="suf">{s.suf}</span>
              </div>
              <div className="stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bio */}
      <div className="wrap" style={{ paddingBottom: "clamp(80px,14vh,180px)" }}>
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
            <h2 className="section-title" data-reveal="">소개</h2>
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
