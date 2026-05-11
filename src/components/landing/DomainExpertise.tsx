"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { springLift, springSnappy } from "@/lib/motion";

const domains = [
  {
    title: "0→1 · FinTech",
    desc: "가설을 화면과 결제로 증명합니다. 토스페이먼츠, 딥링크, 앱–웹 동기까지 사용자가 끊기지 않는 첫 경험을 설계합니다.",
    href: "#projects",
    cta: "금융·결제 사례",
  },
  {
    title: "1→100 · Healthcare",
    desc: "현장의 반복을 데이터와 워크플로로 줄입니다. 모노레포·태블릿·알림으로 운영 부담 대신 성장 레버를 쌓습니다.",
    href: "#work",
    cta: "케어·현장 사례",
  },
  {
    title: "레버리지 · Platform",
    desc: "RN–WebView 브릿지, 패키지, CI. 한 번의 설계가 팀 전체의 속도가 되도록 추상화하고 문서화합니다.",
    href: "#libraries",
    cta: "플랫폼 레이어",
  },
] as const;

/** 0→1 / 1→100 / 레버리지 — 창업형 가치 제안 */
export default function DomainExpertise() {
  return (
    <section id="domains" className="w-full bg-apple-parchment py-16 md:py-[80px]">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6">
        <div className="mx-auto max-w-[980px] text-center">
          <p className="text-[12px] font-normal leading-none tracking-[0.14em] text-apple-ink-muted-48">
            전장
          </p>
          <h2 className="mt-3 text-[40px] font-semibold leading-[1.1] tracking-[-0.02em] text-apple-ink">
            어디서 싸우는가
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[17px] font-normal leading-[1.5] tracking-[-0.374px] text-apple-ink-muted-80">
            0→1은 도메인을 뚫는 용기, 1→100은 시스템을 쌓는 인내입니다. 두
            축을 오가며 제품 조직 옆에 섭니다.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
          {domains.map((d, i) => (
            <motion.article
              key={d.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...springSnappy, delay: i * 0.06 }}
              whileHover={{ y: -6, transition: springLift }}
              whileTap={{ scale: 0.99, transition: springLift }}
              className="flex flex-col rounded-[18px] border border-apple-hairline bg-apple-canvas p-6 shadow-none transition-shadow duration-300 hover:shadow-apple-product md:p-8"
            >
              <h3 className="text-[22px] font-semibold leading-snug tracking-[-0.02em] text-apple-ink md:text-[26px]">
                {d.title}
              </h3>
              <p className="mt-4 flex-1 text-[17px] font-normal leading-[1.47] tracking-[-0.374px] text-apple-ink-muted-80">
                {d.desc}
              </p>
              <motion.div whileTap={{ scale: 0.95 }} transition={springSnappy} className="mt-8">
                <Link
                  href={d.href}
                  className="inline-block text-[17px] font-normal leading-[1.47] tracking-[-0.374px] text-apple-primary hover:underline"
                >
                  {d.cta} →
                </Link>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
