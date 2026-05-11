"use client";

import { motion } from "framer-motion";
import { AnimatedMetric } from "@/components/motion/AnimatedMetric";
import { projects } from "@/data";
import { springSnappy } from "@/lib/motion";

type StripItem = {
  label: string;
  value: string;
  countFrom?: number;
  duration?: number;
};

const items: StripItem[] = [
  { label: "몰입의 해", value: "5+" },
  { label: "0→1 출항", value: String(projects.length) },
  { label: "지금 겨냥하는 규모", value: "100", countFrom: 1, duration: 2.35 },
];

/** 애플 스토어 하단 지표 느낌 — 화이트 풀블리드, 헤어라인만 */
export default function MetricsStrip() {
  return (
    <section className="w-full border-y border-apple-hairline bg-apple-canvas py-14 md:py-20">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 divide-y divide-apple-hairline px-4 md:grid-cols-3 md:divide-x md:divide-y-0 md:px-6">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ ...springSnappy, delay: i * 0.05 }}
            className="flex flex-col items-center py-10 text-center md:py-8"
          >
            <p className="text-[56px] font-semibold leading-[1.07] tracking-[-0.28px] text-apple-ink tabular-nums md:text-[64px]">
              <AnimatedMetric
                value={item.value}
                countFrom={item.countFrom}
                duration={item.duration}
              />
            </p>
            <p className="mt-2 text-[17px] font-normal leading-[1.47] tracking-[-0.374px] text-apple-ink-muted-80">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
