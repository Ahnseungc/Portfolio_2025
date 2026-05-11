"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { springSnappy } from "@/lib/motion";

const links = [
  { href: "/#hero", label: "홈" },
  { href: "/#journey", label: "여정" },
  { href: "/#about", label: "소개" },
  { href: "/#domains", label: "전장" },
  { href: "/#work", label: "경력" },
  { href: "/#projects", label: "프로젝트" },
  { href: "/#libraries", label: "라이브러리" },
  { href: "/#contact", label: "연락" },
] as const;

export default function GlobalNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-50 h-11 border-b border-white/10 bg-apple-black text-[12px] font-normal leading-none tracking-[-0.12px] text-white">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between gap-3 px-3 md:px-6">
        <div className="flex min-w-0 flex-1 items-center gap-3 md:gap-6">
          <Link href="/#hero" className="shrink-0 font-semibold tracking-tight text-white">
            안승찬
          </Link>
          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-3 overflow-x-auto lg:flex lg:gap-5" aria-label="주요 메뉴">
            {links.slice(1).map((item) => (
              <motion.div key={item.href} whileTap={{ scale: 0.95 }} transition={springSnappy}>
                <Link
                  href={item.href}
                  className={cn(
                    "whitespace-nowrap text-white/90 transition-colors hover:text-white",
                    isHome && "hover:underline"
                  )}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <motion.div whileTap={{ scale: 0.95 }} transition={springSnappy}>
            <Link
              href="https://github.com/Ahnseungc"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-apple-ink px-3 py-2 text-[12px] leading-[1.29] text-white md:px-[15px] md:text-[14px]"
            >
              GitHub
            </Link>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
