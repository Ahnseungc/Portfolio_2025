"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { handleEmailCopy } from "@/utils/clipboard";
import { springLift, springSnappy } from "@/lib/motion";

const staggerContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: springSnappy },
};

const EMAIL_ADDRESS = "omnipoo@naver.com";

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="w-full bg-apple-parchment py-16 md:py-[80px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={staggerContainerVariants}
    >
      <div className="mx-auto max-w-[980px] px-4 md:px-6">
        <motion.p
          variants={fadeUpVariants}
          className="text-[12px] font-normal leading-none tracking-[0.14em] text-apple-ink-muted-48"
        >
          다음 장
        </motion.p>
        <motion.div
          variants={fadeUpVariants}
          whileHover={{ y: -4, transition: springLift }}
          className="mt-10 flex flex-col gap-10 rounded-[18px] border border-apple-hairline bg-apple-canvas p-8 transition-shadow duration-300 hover:shadow-apple-product md:flex-row md:items-center md:justify-between md:p-12"
        >
          <div className="max-w-xl space-y-4">
            <h3 className="text-[40px] font-semibold leading-[1.1] tracking-[-0.02em] text-apple-ink">
              다음 0→1, 혹은 100까지.
            </h3>
            <p className="text-[17px] font-normal leading-[1.5] tracking-[-0.374px] text-apple-ink-muted-80">
              새로운 가설을 밀어붙일 팀이든, 이미 뜬 제품의 난제를 풀 팀이든
              환영합니다. 편하게 이메일을 남겨 주세요.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <motion.button
              type="button"
              whileTap={{ scale: 0.95 }}
              transition={springSnappy}
              className="rounded-full bg-apple-primary px-7 py-3.5 text-[17px] font-normal leading-[1.47] tracking-[-0.374px] text-white outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-apple-primary-focus"
              onClick={() => handleEmailCopy(EMAIL_ADDRESS)}
            >
              {EMAIL_ADDRESS} 복사
            </motion.button>
            <Link
              href="https://velog.io/@omnipo/posts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[17px] font-normal leading-[1.47] tracking-[-0.374px] text-apple-primary hover:underline"
            >
              Velog
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
