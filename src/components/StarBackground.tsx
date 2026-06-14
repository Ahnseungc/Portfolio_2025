"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;   // 0~1 (비율)
  y: number;   // 0~1 (비율, 전체 페이지 기준)
  r: number;
  alpha: number;
  speed: number;
  phase: number;
  blue: boolean;
}

export default function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const cv = canvasRef.current as HTMLCanvasElement;
    const ctx = cv.getContext("2d")!;

    let W = 0, H = 0, dpr = 1;
    let stars: Star[] = [];
    let rafId = 0;

    // 캔버스 = 뷰포트 크기만
    function resize() {
      dpr = Math.min(2, devicePixelRatio || 1);
      W = innerWidth;
      H = innerHeight;
      cv.width  = W * dpr;
      cv.height = H * dpr;
      cv.style.width  = W + "px";
      cv.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    // 별은 처음 한 번만 생성 (250개 고정)
    function buildStars() {
      const count = 250;
      stars = Array.from({ length: count }, () => ({
        x: Math.random(),
        y: Math.random(),
        r: Math.random() < 0.1 ? 1.6 + Math.random() : 0.5 + Math.random() * 0.9,
        alpha: 0.1 + Math.random() * 0.5,
        speed: 0.00003 + Math.random() * 0.00006,
        phase: Math.random() * Math.PI * 2,
        blue: Math.random() < 0.2,
      }));
    }

    function draw(now: number) {
      ctx.clearRect(0, 0, W, H);

      const t = now * 0.001;
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      // 라이트모드에선 캔버스 투명 처리 후 계속 루프 유지 (모드 전환 감지 위해)
      if (!isDark) {
        ctx.clearRect(0, 0, W, H);
        rafId = requestAnimationFrame(draw);
        return;
      }

      const primary = getComputedStyle(document.documentElement)
        .getPropertyValue("--primary").trim() || "#3182f6";
      const scrollRatio = scrollY / (document.documentElement.scrollHeight - H || 1);

      for (const s of stars) {
        // 뷰포트 기준 y 위치 계산 (스크롤에 따라 이동)
        const worldY = (s.y - scrollRatio * 0.85 + t * s.speed) % 1;
        const screenY = ((worldY + 1) % 1) * H;
        const screenX = s.x * W + Math.sin(t * 0.4 + s.phase) * 4;

        const twinkle = 0.6 + 0.4 * Math.sin(t * 2 + s.phase);
        ctx.globalAlpha = s.alpha * twinkle;
        ctx.fillStyle = s.blue ? primary : "#ffffff";
        ctx.fillRect(screenX, screenY, s.r, s.r);
      }
      ctx.globalAlpha = 1;
      rafId = requestAnimationFrame(draw);
    }

    resize();
    buildStars();
    rafId = requestAnimationFrame(draw);

    window.addEventListener("resize", resize, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
