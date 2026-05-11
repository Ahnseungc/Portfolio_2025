import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없습니다",
  description: "요청한 페이지가 없거나 이동되었습니다.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-[980px] flex-col justify-center px-4 py-24 md:px-6">
      <p className="text-[12px] font-normal text-apple-ink-muted-48">404</p>
      <h1 className="mt-2 text-[40px] font-semibold tracking-[-0.02em] text-apple-ink">
        페이지를 찾을 수 없습니다
      </h1>
      <p className="mt-4 text-[17px] leading-[1.47] text-apple-ink-muted-80">
        주소가 바뀌었거나 잘못 입력되었을 수 있습니다.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex w-fit rounded-full bg-apple-primary px-[22px] py-[11px] text-[17px] text-white"
      >
        홈으로
      </Link>
    </main>
  );
}
