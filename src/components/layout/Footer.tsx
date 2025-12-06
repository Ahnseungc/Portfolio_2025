"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/80 py-12 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
        <p>
          &copy; {new Date().getFullYear()} An Seungchan. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link
            href="https://github.com/Ahnseungc"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-gray-300"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/anseungchan"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-gray-300"
          >
            LinkedIn
          </Link>
          <Link
            href="https://velog.io/@omnipo"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-gray-300"
          >
            Velog
          </Link>
        </div>
      </div>
    </footer>
  );
}
