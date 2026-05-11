"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { AnimatedMetric } from "@/components/motion/AnimatedMetric";
import { projects, awards } from "@/data";
import { springSnappy } from "@/lib/motion";

const staggerContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: springSnappy },
};

/** 소개 — 0→1·1→100 서사와 맞닿는 선언문 */
export default function ProfileSection() {
  const statistics = useMemo(
    () => [
      { label: "몰입의 해", value: "5+" },
      { label: "0→1 출항", value: projects.length.toString() },
      { label: "빛난 순간", value: awards.length.toString() },
    ],
    []
  );

  return (
    <motion.section
      id="about"
      className="w-full bg-apple-canvas py-16 md:py-[80px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={staggerContainerVariants}
    >
      <div className="mx-auto max-w-[980px] px-4 md:px-6">
        <motion.p
          variants={fadeUpVariants}
          className="text-[12px] font-normal leading-none tracking-[0.14em] text-apple-ink-muted-48"
        >
          선언
        </motion.p>
        <motion.h2
          variants={fadeUpVariants}
          className="mt-3 text-[40px] font-semibold leading-[1.1] tracking-[-0.02em] text-apple-ink"
        >
          왜 빌드하는가
        </motion.h2>
        <motion.p
          variants={fadeUpVariants}
          className="mt-4 max-w-2xl text-[28px] font-normal leading-[1.18] tracking-[-0.01em] text-apple-ink-muted-80"
        >
          저는 &ldquo;한 번 잘 만든다&rdquo;보다 &ldquo;같은 문제를 두 번
          풀지 않는다&rdquo;에 더 큰 감동을 느낍니다. 그래서 0→1의 열기와
          1→100의 냉정함을 번갈아 들고 갑니다.
        </motion.p>

        <motion.div
          variants={fadeUpVariants}
          className="mt-14 grid gap-12 border-t border-apple-hairline pt-14 md:grid-cols-[1.2fr_1fr]"
        >
          <div className="space-y-6 text-[17px] font-normal leading-[1.55] tracking-[-0.374px] text-apple-ink">
            <p>
              (주)골드앤컴퍼니에서는 금·앱테크라는 민감한 도메인에서 Next.js,
              Flutter, 웹뷰 브릿지로 첫 결제·첫 이탈·첫 CS까지 책임졌습니다.
              (주)케어마인더에서는 모노레포와 CareDesk, WebView+Next.js로 현장
              요청 플랫폼의 반복 배포와 운영을 단순화했습니다.
            </p>
            <p>
              창업자처럼 생각하고, 엔지니어처럼 증명합니다. 코드 한 줄에는
              의도를, 구조에는 팀이 스스로 확장할 수 있는 훅을 남깁니다.
            </p>
          </div>
          <div className="space-y-8">
            {statistics.map((stat) => (
              <div
                key={stat.label}
                className="border-b border-apple-divider-soft pb-8 last:border-0"
              >
                <p className="text-[12px] font-normal leading-none tracking-[0.12em] text-apple-ink-muted-48">
                  {stat.label}
                </p>
                <p className="mt-3 text-[40px] font-semibold leading-[1.1] tracking-[-0.02em] text-apple-ink tabular-nums">
                  <AnimatedMetric value={stat.value} />
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
