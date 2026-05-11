"use client";

import Link from "next/link";

/** DESIGN.md — footer: parchment, dense-link 17px / 2.41, fine-print legal */
export default function Footer() {
  return (
    <footer className="w-full border-t border-apple-hairline bg-apple-parchment px-4 py-16 text-apple-ink-muted-80 md:px-6 md:py-16">
      <div className="mx-auto flex max-w-[980px] flex-col gap-10 md:flex-row md:justify-between">
        <div className="grid grid-cols-2 gap-x-12 gap-y-2 sm:grid-cols-3">
          <div>
            <p className="text-[14px] font-semibold leading-[1.29] tracking-[-0.224px] text-apple-ink">
              링크
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="https://github.com/Ahnseungc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[17px] font-normal leading-[2.41] text-apple-primary hover:underline"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://velog.io/@omnipo/posts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[17px] font-normal leading-[2.41] text-apple-primary hover:underline"
                >
                  Velog
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/anseungchan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[17px] font-normal leading-[2.41] text-apple-primary hover:underline"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[14px] font-semibold leading-[1.29] tracking-[-0.224px] text-apple-ink">
              사이트
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/#journey" className="text-[17px] font-normal leading-[2.41] text-apple-primary hover:underline">
                  여정
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-[17px] font-normal leading-[2.41] text-apple-primary hover:underline">
                  소개
                </Link>
              </li>
              <li>
                <Link href="/#hero" className="text-[17px] font-normal leading-[2.41] text-apple-primary hover:underline">
                  홈
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="text-[17px] font-normal leading-[2.41] text-apple-primary hover:underline">
                  프로젝트
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-[12px] font-normal leading-none tracking-[-0.12px] text-apple-ink-muted-48">
          <p>&copy; {new Date().getFullYear()} 안승찬. All rights reserved.</p>
          <p className="mt-4 max-w-md leading-[1.35] text-apple-ink-muted-80">
            0→1과 1→100 사이를 오가며 빌드합니다. UI는 DESIGN.md(Apple,
            getdesign) 기준, 액센트는 Action Blue #0066cc입니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
