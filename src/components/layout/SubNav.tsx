"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { springSnappy } from "@/lib/motion";

type SubNavProps = {
  title: string;
  ctaHref?: string;
  ctaLabel?: string;
};

/** DESIGN.md — sub-nav-frosted: parchment 80% + blur, tagline 21px/600 */
export default function SubNav({
  title,
  ctaHref = "https://github.com/Ahnseungc",
  ctaLabel = "저장소",
}: SubNavProps) {
  return (
    <div
      className="sticky top-11 z-40 flex h-[52px] items-center justify-between border-b border-black/[0.08] px-4 backdrop-blur-[20px] backdrop-saturate-150 md:px-6"
      style={{ backgroundColor: "rgba(245, 245, 247, 0.85)" }}
    >
      <p className="text-[21px] font-semibold leading-[1.19] tracking-[0.231px] text-apple-ink">
        {title}
      </p>
      <motion.div whileTap={{ scale: 0.95 }} transition={springSnappy}>
        {ctaHref.startsWith("http") ? (
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-apple-primary px-[22px] py-[11px] text-[17px] font-normal leading-[1.47] tracking-[-0.374px] text-white outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-apple-primary-focus"
          >
            {ctaLabel}
          </a>
        ) : (
          <Link
            href={ctaHref}
            className="inline-block rounded-full bg-apple-primary px-[22px] py-[11px] text-[17px] font-normal leading-[1.47] tracking-[-0.374px] text-white outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-apple-primary-focus"
          >
            {ctaLabel}
          </Link>
        )}
      </motion.div>
    </div>
  );
}
