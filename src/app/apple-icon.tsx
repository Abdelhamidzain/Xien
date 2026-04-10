import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0c",
          borderRadius: 36,
        }}
      >
        <svg
          width="110"
          height="110"
          viewBox="0 0 22 22"
          fill="none"
        >
          <path
            d="M2 2L9.5 11L2 20H5L11 12.5L17 20H20L12.5 11L20 2H17L11 9.5L5 2H2Z"
            fill="#00C853"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
