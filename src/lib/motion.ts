import type { Transition } from "framer-motion";

/** 토스 느낌의 스냅 스프링 */
export const springSnappy: Transition = {
  type: "spring",
  stiffness: 420,
  damping: 34,
  mass: 0.85,
};

export const springSoft: Transition = {
  type: "spring",
  stiffness: 280,
  damping: 28,
};

/** 카드·그리드 호버 리프트 */
export const springLift: Transition = {
  type: "spring",
  stiffness: 380,
  damping: 26,
  mass: 0.9,
};
