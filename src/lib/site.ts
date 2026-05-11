/**
 * 배포 시 Vercel은 `VERCEL_URL`을 주입합니다.
 * 프로덕션 도메인을 고정하려면 `NEXT_PUBLIC_SITE_URL`을 설정하세요. (예: https://portfolio.example.com)
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//, "");
    return `https://${host}`;
  }

  return "http://localhost:3000";
}
