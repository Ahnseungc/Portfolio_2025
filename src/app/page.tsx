import dynamic from "next/dynamic";

export const revalidate = 3600;

const HomePageClient = dynamic(() => import("./HomePageClient"), {
  ssr: true,
  loading: () => (
    <main
      className="min-h-screen bg-apple-parchment"
      aria-busy="true"
      aria-label="페이지 로딩"
    />
  ),
});

export default function Page() {
  return <HomePageClient />;
}
