import { ImageResponse } from "next/og";

export const alt = "Sitelet — Hemsidor som faktiskt funkar";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "80px",
          backgroundColor: "#1a1a1a",
          color: "#ffffff",
        }}
      >
        {/* Logo mark */}
        <div
          style={{
            position: "absolute",
            top: "80px",
            left: "80px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <span
            style={{
              fontSize: "32px",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              display: "flex",
            }}
          >
            Site
            <span
              style={{
                textDecoration: "underline",
                textDecorationColor: "rgba(255,255,255,0.35)",
                textUnderlineOffset: "6px",
                textDecorationThickness: "3px",
              }}
            >
              let
            </span>
          </span>
        </div>

        {/* Main text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <span
            style={{
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            Hemsidor som
          </span>
          <span
            style={{
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            faktiskt funkar.
          </span>
          <span
            style={{
              fontSize: "22px",
              color: "#a3a3a3",
              marginTop: "8px",
            }}
          >
            Webbdesign &amp; utveckling i Blekinge, Sverige
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
