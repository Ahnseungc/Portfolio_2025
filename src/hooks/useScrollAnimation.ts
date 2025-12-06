import { useScroll, useTransform, MotionValue } from "framer-motion";

export function useScrollAnimation() {
  const { scrollYProgress } = useScroll();

  const fadeIn = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const fadeOut = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  const yTransform = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scaleTransform = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return {
    scrollYProgress,
    fadeIn,
    fadeOut,
    yTransform,
    scaleTransform,
  };
}

export function useSectionAnimation(sectionStart: number, sectionEnd: number) {
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(
    scrollYProgress,
    [sectionStart, sectionEnd],
    [0, 1]
  );
  const y = useTransform(
    scrollYProgress,
    [sectionStart, sectionEnd],
    [50, 0]
  );

  return { opacity, y };
}
