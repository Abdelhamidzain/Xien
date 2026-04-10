import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdelhamid Zainhom — Senior Art Director & Motion Designer",
  description:
    "13+ years of visual storytelling. Art direction, motion design, branding systems, and production automation.",
  openGraph: {
    title: "Abdelhamid Zainhom — Senior Art Director & Motion Designer",
    description:
      "13+ years turning strategic concepts into scalable visual systems — from the first sketch to the final automated delivery.",
    siteName: "Xien",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelhamid Zainhom — Senior Art Director & Motion Designer",
    description:
      "13+ years turning strategic concepts into scalable visual systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
