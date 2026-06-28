"use client";

import { useEffect, useRef, useState } from "react";
import { career } from "@/data/portfolio";

const SCROLL_PAGES = career.length + 1;

export default function Career() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const calc = () => {
      const rect = wrapper.getBoundingClientRect();
      const scrollable = wrapper.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const p = Math.max(0, Math.min(1, -rect.top / scrollable));
      // 아래로 스크롤할 때만 진행 — 위로 올라가도 역방향 안 됨
      setProgress((prev) => Math.max(prev, p));
    };

    window.addEventListener("scroll", calc, { passive: true });
    calc();
    return () => window.removeEventListener("scroll", calc);
  }, []);

  return (
    <div
      className="career-scroll"
      id="career"
      ref={wrapperRef}
      style={{ height: `${SCROLL_PAGES * 100}vh` }}
    >
      <div className="career-sticky">
        <div className="wrap">
          <div className="section-head">
            <span className="section-num">04 — CAREER</span>
            <h2 className="section-title">경력</h2>
            <p className="lead">다양한 제품에서 프론트엔드 개발 경험을 쌓고 있습니다.</p>
          </div>

          <div className="tl-s">
            {/* 세로 트랙 라인 — 아래서 위로 채워짐 */}
            <div className="tl-s__track">
              <div
                className="tl-s__fill"
                style={{ transform: `scaleY(${progress})` }}
              />
            </div>

            {career.map((item, i) => {
              /* 맨 아래(oldest, 마지막 인덱스)가 threshold=0, 맨 위(newest, 0)가 가장 늦게 */
              const threshold = (career.length - 1 - i) / career.length;
              const isActive = progress >= threshold;
              const itemPct = isActive
                ? Math.min(1, (progress - threshold) * career.length)
                : 0;

              return (
                <div
                  key={i}
                  className={`tl-s__item${isActive ? " active" : ""}`}
                  style={{
                    opacity: 0.12 + itemPct * 0.88,
                    transform: `translateY(${(1 - itemPct) * 14}px)`,
                  }}
                >
                  <div className="tl-s__dot" />
                  <div className="tl-s__date">{item.date}</div>
                  <div className="tl-s__role">{item.role}</div>
                  <div className="tl-s__org">{item.org}</div>
                  <div className="tl-s__desc">{item.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
