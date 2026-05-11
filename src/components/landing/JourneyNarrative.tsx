"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { springLift, springSnappy } from "@/lib/motion";

const fade = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { ...springSnappy, delay: 0.06 * i },
  }),
};

/** 0→1 · 1→100 창업자형 서사 — 히어로 직후 한 번에 감정선을 고정 */
export default function JourneyNarrative() {
  return (
    <section
      id="journey"
      className="relative w-full overflow-hidden border-b border-apple-hairline bg-gradient-to-b from-apple-pearl via-apple-parchment to-apple-parchment py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-apple-primary/25 to-transparent" aria-hidden />

      <div className="relative mx-auto max-w-[980px] px-4 text-center md:px-6">
        <motion.p
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fade}
          className="text-[12px] font-normal uppercase leading-none tracking-[0.18em] text-apple-ink-muted-48"
        >
          여정
        </motion.p>

        <motion.h2
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fade}
          className="mt-5 text-[32px] font-semibold leading-[1.12] tracking-[-0.02em] text-apple-ink sm:text-[40px] md:text-[48px] md:leading-[1.08]"
        >
          0에서 1은
          <br className="sm:hidden" />{" "}
          <span className="text-apple-primary">이미 만들어 봤고</span>
          ,
          <br />
          지금은{" "}
          <span className="text-apple-primary">1에서 100</span>을 만드는
          <br className="md:hidden" /> 경험을 하고 있습니다.
        </motion.h2>

        <motion.p
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fade}
          className="mx-auto mt-8 max-w-2xl text-[19px] font-normal leading-[1.45] tracking-[-0.02em] text-apple-ink-muted-80 md:text-[21px] md:leading-[1.38]"
        >
          아이디어를 첫 화면·첫 결제·첫 배포까지 끌고 가는 순간은 늘 겸손하고
          뜨겁습니다. 그 다음은 반복 가능한 구조, 팀의 리듬, 숫자로 말하는
          제품으로 바꿉니다. 저는 그 양쪽을 모두 사랑하는 빌더입니다.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fade}
          className="mx-auto mt-14 flex max-w-3xl flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-6"
        >
          <div className="rounded-[18px] border border-apple-hairline bg-apple-canvas/90 px-6 py-5 text-left shadow-sm backdrop-blur-sm sm:flex-1 sm:py-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-apple-ink-muted-48">
              0 → 1
            </p>
            <p className="mt-2 text-[17px] font-semibold leading-snug tracking-[-0.02em] text-apple-ink">
              첫 가설을 제품으로 증명
            </p>
            <p className="mt-2 text-[15px] font-normal leading-relaxed tracking-[-0.01em] text-apple-ink-muted-80">
              MVP, 런칭, 결제·웹뷰·운영까지. 불확실성 속에서 방향을 박습니다.
            </p>
          </div>

          <motion.div
            aria-hidden
            className="hidden shrink-0 text-[28px] font-light text-apple-ink-muted-48 sm:block"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ ...springSnappy, delay: 0.35 }}
          >
            →
          </motion.div>

          <div className="rounded-[18px] border border-apple-hairline bg-apple-canvas/90 px-6 py-5 text-left shadow-sm backdrop-blur-sm sm:flex-1 sm:py-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-apple-ink-muted-48">
              1 → 100
            </p>
            <p className="mt-2 text-[17px] font-semibold leading-snug tracking-[-0.02em] text-apple-ink">
              스케일·레버리지·팀의 속도
            </p>
            <p className="mt-2 text-[15px] font-normal leading-relaxed tracking-[-0.01em] text-apple-ink-muted-80">
              모듈화, 지표, 자동화. 같은 실수를 사랑하지 않고, 성장의 난이도를
              낮춥니다.
            </p>
          </div>
        </motion.div>

        <motion.div
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fade}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          <motion.div whileHover={{ scale: 1.02, transition: springLift }} whileTap={{ scale: 0.96 }}>
            <Link
              href="#projects"
              className="inline-block rounded-full border border-apple-primary bg-apple-canvas px-5 py-2.5 text-[15px] font-medium text-apple-primary md:px-6 md:text-[17px]"
            >
              0→1의 기록 보기
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02, transition: springLift }} whileTap={{ scale: 0.96 }}>
            <Link
              href="#work"
              className="inline-block rounded-full bg-apple-primary px-5 py-2.5 text-[15px] font-medium text-white md:px-6 md:text-[17px]"
            >
              1→100의 현장 보기
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
