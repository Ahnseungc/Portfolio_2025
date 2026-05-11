"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { springLift, springSnappy } from "@/lib/motion";

/** 1→100 전환대 — 브릿지가 스케일의 심장이 되는 순간 */
export default function SpotlightTile() {
  return (
    <section className="w-full bg-apple-tile1 py-20 text-center text-white md:py-[80px]">
      <div className="mx-auto max-w-[980px] px-4 md:px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={springSnappy}
          className="text-[12px] font-normal leading-none tracking-[0.14em] text-[#cccccc]"
        >
          스케일의 심장
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ ...springSnappy, delay: 0.04 }}
          className="mt-4 text-[40px] font-semibold leading-[1.1] tracking-[-0.02em] md:text-[56px] md:leading-[1.07] md:tracking-[-0.28px]"
        >
          1이 흔들리지 않게
          <br />
          잇는 브릿지.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ ...springSnappy, delay: 0.08 }}
          className="mx-auto mt-6 max-w-xl text-[21px] font-semibold leading-[1.22] tracking-[-0.01em] text-[#cccccc] md:text-[28px] md:font-normal md:leading-[1.14] md:tracking-[0.196px]"
        >
          스킴·postMessage·라우팅 규약으로 오류와 CS를 줄이면, 팀은 다시
          0→1에 집중할 수 있습니다. 저는 그 연결을 제품으로 다뤘습니다.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ ...springSnappy, delay: 0.12 }}
          className="mt-10"
        >
          <motion.div
            whileHover={{ scale: 1.03, transition: springLift }}
            whileTap={{ scale: 0.95 }}
            transition={springSnappy}
          >
            <Link
              href="/projects/webview-bridge"
              className="inline-block rounded-full bg-apple-primary px-[22px] py-[11px] text-[17px] font-normal leading-[1.47] tracking-[-0.374px] text-white"
            >
              브릿지 스토리 보기
            </Link>
          </motion.div>
          <p className="mt-6">
            <Link
              href="#projects"
              className="text-[17px] font-normal leading-[1.47] tracking-[-0.374px] text-apple-primary-on-dark hover:underline"
            >
              다른 0→1 기록들 →
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
