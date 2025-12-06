"use client";

import { useScroll, useTransform, motion, useMotionTemplate } from "framer-motion";

export default function ScrollBackground() {
  const { scrollYProgress } = useScroll();

  // 섹션별 색상 변화 (0-1을 6개 섹션으로 나눔)
  const baseColor = useTransform(
    scrollYProgress,
    [0, 0.16, 0.33, 0.5, 0.66, 0.83, 1],
    [
      "rgba(34, 211, 238, 0.2)", // Hero - Cyan
      "rgba(244, 114, 182, 0.2)", // Profile - Fuchsia
      "rgba(251, 191, 36, 0.2)", // Work - Amber
      "rgba(34, 211, 238, 0.25)", // Projects - Cyan 강화
      "rgba(139, 92, 246, 0.2)", // Libraries - Violet
      "rgba(244, 114, 182, 0.25)", // Contact - Fuchsia 강화
      "rgba(34, 211, 238, 0.15)", // Footer - Cyan 약화
    ]
  );

  const secondaryColor = useTransform(
    scrollYProgress,
    [0, 0.16, 0.33, 0.5, 0.66, 0.83, 1],
    [
      "rgba(244, 114, 182, 0.15)", // Hero
      "rgba(251, 191, 36, 0.15)", // Profile
      "rgba(34, 211, 238, 0.15)", // Work
      "rgba(244, 114, 182, 0.2)", // Projects
      "rgba(34, 211, 238, 0.15)", // Libraries
      "rgba(251, 191, 36, 0.2)", // Contact
      "rgba(244, 114, 182, 0.1)", // Footer
    ]
  );

  // 그라디언트 위치 변화
  const gradientPositionX = useTransform(
    scrollYProgress,
    [0, 1],
    [20, 80]
  );
  const gradientPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [30, 70]
  );
  const gradientPositionXReverse = useTransform(
    gradientPositionX,
    (x) => 100 - x
  );
  const gradientPositionYReverse = useTransform(
    gradientPositionY,
    (y) => 100 - y
  );

  // 원뿔형 그라디언트 회전
  const gradientRotation = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 720]
  );

  // 스케일 및 블러 효과
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.15, 1.3]);
  const blur = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 15, 30, 45]);

  // 배경 그라디언트 생성 (useMotionValue와 useMotionTemplate 사용)
  const blurFilter = useTransform(blur, (b) => `blur(${b}px)`);
  
  const conicGradient = useTransform(
    gradientRotation,
    (r) =>
      `conic-gradient(from ${r}deg, rgba(34, 211, 238, 0.12) 0deg, rgba(244, 114, 182, 0.12) 120deg, rgba(251, 191, 36, 0.12) 240deg, rgba(34, 211, 238, 0.12) 360deg)`
  );

  // 패럴랙스 이동
  const parallaxX = useTransform(scrollYProgress, [0, 1], [0, -15]);
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -25]);

  // 추가 레이어 - 움직이는 빛 효과
  const lightX = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const lightY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const lightXReverse = useTransform(lightX, (x) => 100 - x);
  const lightYReverse = useTransform(lightY, (y) => 100 - y);

  return (
    <motion.div
      className="fixed inset-0 -z-0 overflow-hidden"
      style={{
        scale,
      }}
    >
      {/* 메인 그라디언트 배경 */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: useMotionTemplate`radial-gradient(circle at ${gradientPositionX}% ${gradientPositionY}%, ${baseColor} 0%, transparent 50%), radial-gradient(circle at ${gradientPositionXReverse}% ${gradientPositionYReverse}%, ${secondaryColor} 0%, transparent 50%), #000000`,
          filter: blurFilter,
        }}
      />

      {/* 회전하는 원뿔형 그라디언트 */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: conicGradient,
          mixBlendMode: "screen",
          opacity: 0.6,
        }}
      />

      {/* 움직이는 빛 효과 레이어 1 */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: useMotionTemplate`radial-gradient(circle at ${lightX}% ${lightY}%, ${baseColor} 0%, transparent 40%)`,
          mixBlendMode: "screen",
          opacity: 0.4,
        }}
      />

      {/* 움직이는 빛 효과 레이어 2 */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: useMotionTemplate`radial-gradient(circle at ${lightXReverse}% ${lightYReverse}%, ${secondaryColor} 0%, transparent 40%)`,
          mixBlendMode: "screen",
          opacity: 0.3,
        }}
      />

      {/* 패럴랙스 그리드 패턴 */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(34,211,238,0.08)_25%,transparent_50%,rgba(244,114,182,0.08)_75%,transparent_100%)]"
        style={{
          transform: useMotionTemplate`translateX(${parallaxX}%) translateY(${parallaxY}%)`,
        }}
      />

      {/* 추가 텍스처 레이어 */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: useTransform(
            scrollYProgress,
            [0, 0.5, 1],
            [
              "radial-gradient(ellipse at top left, rgba(34, 211, 238, 0.1) 0%, transparent 50%)",
              "radial-gradient(ellipse at center, rgba(244, 114, 182, 0.1) 0%, transparent 50%)",
              "radial-gradient(ellipse at bottom right, rgba(251, 191, 36, 0.1) 0%, transparent 50%)",
            ]
          ),
          mixBlendMode: "overlay",
          opacity: 0.5,
        }}
      />
    </motion.div>
  );
}

