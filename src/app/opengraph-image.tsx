import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "안승찬 — 프론트엔드 개발자 포트폴리오";

/** 기본 OG 이미지 — SNS 미리보기용 */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#f5f5f7",
          color: "#1d1d1f",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 600,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
          }}
        >
          안승찬
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 32,
            fontWeight: 400,
            color: "#333333",
          }}
        >
          Frontend Developer · Portfolio
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 22,
            color: "#0066cc",
          }}
        >
          Next.js · React Native · Flutter · WebView
        </div>
      </div>
    ),
    { ...size }
  );
}
