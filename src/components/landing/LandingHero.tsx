"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { springLift, springSnappy } from "@/lib/motion";

/**
 * 창업형 서사: 0→1 증명 이후 1→100을 향하는 빌더 톤
 */
export default function LandingHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100dvh-2.75rem)] flex-col bg-apple-parchment pt-10 md:min-h-[calc(100vh-2.75rem)] md:pt-14"
    >
      <div className="mx-auto flex w-full max-w-[980px] flex-1 flex-col items-center px-4 pb-12 text-center md:px-6 md:pb-16">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springSnappy}
          className="text-[12px] font-normal leading-none tracking-[0.14em] text-apple-ink-muted-48"
        >
          0 → 1 · 1 → 100
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSnappy, delay: 0.05 }}
          className="mt-4 max-w-[14ch] text-[40px] font-semibold leading-[1.07] tracking-[-0.02em] text-apple-ink sm:max-w-none md:text-[56px] md:tracking-[-0.28px]"
        >
          안승찬
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSnappy, delay: 0.1 }}
          className="mt-5 max-w-2xl text-[21px] font-semibold leading-[1.28] tracking-[-0.015em] text-apple-ink md:text-[28px] md:font-semibold md:leading-[1.2]"
        >
          0에서 1을 만들어 봤고,
          <br className="hidden sm:block" />
          지금은 1에서 100을 만드는 경험을 하고 있습니다.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSnappy, delay: 0.14 }}
          className="mt-5 max-w-xl text-[17px] font-normal leading-[1.5] tracking-[-0.374px] text-apple-ink-muted-80"
        >
          Next.js · RN · Flutter · 웹뷰 브릿지. 불확실한 초기를 끝까지 밀어붙이고,
          숫자와 구조로 다음 단계를 설계하는 프론트엔드·프로덕트 빌더입니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSnappy, delay: 0.18 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <motion.div
            whileHover={{ scale: 1.02, transition: springLift }}
            whileTap={{ scale: 0.95 }}
            transition={springSnappy}
          >
            <Link
              href="#journey"
              className="inline-block rounded-full border border-apple-primary bg-apple-canvas px-[22px] py-[11px] text-[17px] font-normal leading-[1.47] tracking-[-0.374px] text-apple-primary outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-apple-primary-focus"
            >
              여정 읽기
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02, transition: springLift }}
            whileTap={{ scale: 0.95 }}
            transition={springSnappy}
          >
            <Link
              href="#contact"
              className="inline-block rounded-full bg-apple-primary px-[22px] py-[11px] text-[17px] font-normal leading-[1.47] tracking-[-0.374px] text-white outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-apple-primary-focus"
            >
              같이 빌드하기
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSnappy, delay: 0.22 }}
          className="relative mt-14 w-full max-w-[720px] flex-1 md:mt-20"
        >
          <div className="relative mx-auto aspect-[16/10] w-full max-w-[640px] rounded-[12px] border border-apple-hairline bg-apple-canvas p-2 md:rounded-[18px] md:p-3">
            <motion.div
              className="relative flex h-full min-h-[200px] flex-col overflow-hidden rounded-[8px] bg-gradient-to-b from-apple-pearl to-apple-parchment md:rounded-[11px]"
              style={{ boxShadow: "rgba(0, 0, 0, 0.22) 3px 5px 30px 0" }}
              animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="flex h-8 items-center gap-1.5 border-b border-black/[0.06] px-3 md:h-9 md:px-4">
                <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                <span className="h-2 w-2 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex flex-1 flex-col items-center justify-center gap-2 px-6 py-10 text-center md:py-14">
                <p className="text-[14px] font-semibold leading-[1.29] tracking-[-0.224px] text-apple-ink-muted-48">
                  아직 끝나지 않은 로드맵
                </p>
                <p className="text-[24px] font-semibold leading-[1.2] tracking-[-0.02em] text-apple-ink md:text-[34px] md:leading-[1.47] md:tracking-[-0.374px]">
                  측정하고, 다시 뿌리내립니다.
                </p>
                <p className="max-w-sm text-[14px] font-normal leading-[1.43] tracking-[-0.224px] text-apple-ink-muted-80 md:text-[17px] md:leading-[1.47] md:tracking-[-0.374px]">
                  한 번의 런칭으로 끝내지 않습니다. 같은 실수를 줄이고, 팀이
                  스스로 달릴 수 있게 만드는 쪽으로 에너지를 씁니다.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
