import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Inter, Space_Grotesk } from "next/font/google";
import SmoothScroll from "@/components/providers/SmoothScroll";
import "./globals.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aisha Awaisu — Copywriter for Coaches & Founders",
  description:
    "High-converting emails, landing pages, and ad copy built on psychology and clarity. Aisha Awaisu helps coaches, founders, and service businesses turn casual scrollers into paying clients.",
  keywords: [
    "copywriter",
    "email marketing",
    "landing page copy",
    "Meta ads",
    "LinkedIn ghostwriting",
    "Abuja",
  ],
  openGraph: {
    title: "Aisha Awaisu — Copywriter for Coaches & Founders",
    description:
      "Words that get brands paid — emails, landing pages, and ad copy built on psychology, clarity, and a little bit of cheek.",
    type: "website",
  },
  // Served from /public — the app/icon convention breaks when the project
  // path contains an apostrophe (Next metadata-route loader bug).
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0e0c09",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${grotesk.variable} ${inter.variable} ${plexMono.variable}`}
    >
      <body>
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest focus:text-ink"
        >
          Skip to content
        </a>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
