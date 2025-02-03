"use client";

import { useEffect, useRef } from "react";

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // 요소가 화면에 20% 이상 보일 때 애니메이션 시작
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          } else {
            // 요소가 화면에서 완전히 벗어났을 때만 애니메이션 초기화
            if (entry.intersectionRatio <= 0) {
              entry.target.classList.remove("animate-in");
            }
          }
        });
      },
      {
        threshold: [0, 0.2], // 0%와 20% 지점에서 콜백 실행
        rootMargin: "-50px 0px", // 상하 50px 여유를 두고 실행
      }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}
