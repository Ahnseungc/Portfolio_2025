"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

function parseMetric(display: string): { target: number; suffix: string } | null {
  const plus = display.match(/^(\d+)\+$/);
  if (plus) return { target: parseInt(plus[1], 10), suffix: "+" };
  const num = display.match(/^(\d+)$/);
  if (num) return { target: parseInt(num[1], 10), suffix: "" };
  return null;
}

type AnimatedMetricProps = {
  value: string;
  className?: string;
  /** 카운트 시작값 (기본 0). 예: 1→100 여정 표현 */
  countFrom?: number;
  /** 애니메이션 길이(초) */
  duration?: number;
};

/** 뷰포트 진입 시 숫자 카운트업. `prefers-reduced-motion`이면 즉시 목표값 표시 */
export function AnimatedMetric({
  value,
  className,
  countFrom = 0,
  duration = 1.12,
}: AnimatedMetricProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduceMotion = useReducedMotion();
  const parsed = useMemo(() => parseMetric(value), [value]);
  const [displayed, setDisplayed] = useState(countFrom);

  useEffect(() => {
    if (!parsed) return;
    if (!inView) return;
    if (reduceMotion) {
      setDisplayed(parsed.target);
      return;
    }
    setDisplayed(countFrom);
    const controls = animate(countFrom, parsed.target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplayed(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, parsed, reduceMotion, value, countFrom, duration]);

  if (!parsed) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {displayed}
      {parsed.suffix}
    </span>
  );
}
