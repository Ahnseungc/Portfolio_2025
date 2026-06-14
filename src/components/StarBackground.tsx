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

    function buildStars() {
      const count = 600;
      stars = Array.from({ length: count }, () => {
        const tier = Math.random();
        return {
          x: Math.random(),
          y: Math.random(),
          // 크기 3단계: 작은 별 / 중간 별 / 밝은 별
          r: tier < 0.65
            ? 0.8 + Math.random() * 0.8         // 작은 별
            : tier < 0.90
              ? 1.6 + Math.random() * 1.2        // 중간 별
              : 2.4 + Math.random() * 1.6,       // 밝은 별
          alpha: tier < 0.65
            ? 0.35 + Math.random() * 0.35
            : tier < 0.90
              ? 0.55 + Math.random() * 0.35
              : 0.75 + Math.random() * 0.25,
          speed: 0.00002 + Math.random() * 0.00005,
          phase: Math.random() * Math.PI * 2,
          blue: Math.random() < 0.18,
        };
      });
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
        const worldY = (s.y - scrollRatio * 0.85 + t * s.speed) % 1;
        const screenY = ((worldY + 1) % 1) * H;
        const screenX = s.x * W + Math.sin(t * 0.4 + s.phase) * 3;
        const twinkle = 0.7 + 0.3 * Math.sin(t * 1.8 + s.phase);
        const alpha = s.alpha * twinkle;
        const color = s.blue ? primary : "#ffffff";

        // 밝은 별(큰 별)은 글로우 추가
        if (s.r > 2.2) {
          ctx.beginPath();
          const grd = ctx.createRadialGradient(screenX, screenY, 0, screenX, screenY, s.r * 3);
          grd.addColorStop(0, color);
          grd.addColorStop(1, "transparent");
          ctx.globalAlpha = alpha * 0.3;
          ctx.fillStyle = grd;
          ctx.arc(screenX, screenY, s.r * 3, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.globalAlpha = alpha;
        ctx.fillStyle = color;
        ctx.fillRect(screenX - s.r / 2, screenY - s.r / 2, s.r, s.r);
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
