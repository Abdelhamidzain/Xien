import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Abdelhamid Zainhom — Senior Art Director & Motion Designer";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#0a0a0c",
          padding: "80px 100px",
          position: "relative",
        }}
      >
        {/* Subtle accent glow */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,200,83,0.12) 0%, transparent 70%)",
          }}
        />

        {/* X mark */}
        <svg
          width="64"
          height="64"
          viewBox="0 0 22 22"
          fill="none"
          style={{ marginBottom: 40 }}
        >
          <path
            d="M2 2L9.5 11L2 20H5L11 12.5L17 20H20L12.5 11L20 2H17L11 9.5L5 2H2Z"
            fill="#00C853"
          />
        </svg>

        {/* Name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: "#f0efe8",
            letterSpacing: "-0.03em",
            lineHeight: 1,
            marginBottom: 16,
            textTransform: "uppercase",
          }}
        >
          Abdelhamid Zainhom
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#00C853",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: 32,
          }}
        >
          Senior Art Director & Motion Designer
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 24,
            color: "rgba(240,239,232,0.45)",
            lineHeight: 1.5,
            maxWidth: 700,
          }}
        >
          13+ years turning strategic concepts into scalable visual systems
          — from the first sketch to the final automated delivery.
        </div>

        {/* Bottom border accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "#00C853",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
