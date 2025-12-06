"use client";

import { navItems } from "@/constants/navigation";
import { scrollToSection } from "@/utils/scroll";
import { handleEmailCopy } from "@/utils/clipboard";

const EMAIL_ADDRESS = "omnipo58@gmail.com";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          type="button"
          className="text-sm font-semibold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-80"
          onClick={() => scrollToSection("hero")}
        >
          ANSEUNGCHAN
        </button>
        <nav className="hidden gap-6 text-sm font-medium text-gray-400 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className="transition-colors hover:text-white"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <button
          type="button"
          className="text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
          onClick={() => handleEmailCopy(EMAIL_ADDRESS)}
        >
          {EMAIL_ADDRESS}
        </button>
      </div>
    </header>
  );
}
