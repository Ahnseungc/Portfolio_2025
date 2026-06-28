"use client";

import { useEffect, useRef, useState } from "react";
import { career } from "@/data/portfolio";

const SCROLL_PAGES = career.length + 1;

export default function Career() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const sticky = stickyRef.current;
    if (!wrapper || !sticky) return;

    lastScrollY.current = window.scrollY;

    const calc = () => {
      const currentY = window.scrollY;
      const scrollingUp = currentY < lastScrollY.current;
      lastScrollY.current = currentY;

      const rect = wrapper.getBoundingClientRect();
      const scrollable = wrapper.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const p = Math.max(0, Math.min(1, -rect.top / scrollable));
      // 아래 방향에서만 진행
      setProgress((prev) => Math.max(prev, p));

      // 위로 스크롤하고 wrapper 안쪽(20px 이상 진입)이면 sticky 해제
      const insideWrapper = rect.top < -20 && rect.bottom > window.innerHeight;
      if (scrollingUp && insideWrapper) {
        sticky.style.position = "relative";
      } else if (!scrollingUp) {
        sticky.style.position = "sticky";
      }
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
      <div className="career-sticky" ref={stickyRef}>
        <div className="wrap">
          <div className="section-head">
            <span className="section-num">04 — CAREER</span>
            <h2 className="section-title">경력</h2>
            <p className="lead">다양한 제품에서 프론트엔드 개발 경험을 쌓고 있습니다.</p>
          </div>

          <div className="tl-s">
            <div className="tl-s__track">
              <div
                className="tl-s__fill"
                style={{ transform: `scaleY(${progress})` }}
              />
            </div>

            {career.map((item, i) => {
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
