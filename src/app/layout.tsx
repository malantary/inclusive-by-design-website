import type { Metadata, Viewport } from "next";
import { Atkinson_Hyperlegible, Lexend } from "next/font/google";
import "./globals.css";

// Fonts are downloaded at build time and served from the site itself (no request to Google from visitors).
const lexend = Lexend({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-lexend", display: "swap" });
const atkinson = Atkinson_Hyperlegible({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-atkinson", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://inclusivebydesignconsulting.com"),
  title: "Inclusive by Design Consulting | Executive coaching, inclusion and tech consulting",
  description:
    "Executive coaching for leaders, and inclusion and technology consulting for organisations that want high-performing, inclusive teams without giving up commercial performance.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Inclusive by Design Consulting",
    title: "Inclusivity doesn't happen by accident. It happens by design.",
    description: "Executive coaching, inclusion consulting and tech consulting from Laura Barlow, founder of Inclusive by Design Consulting.",
  },
};

export const viewport: Viewport = {
  themeColor: "#100E2B",
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${lexend.variable} ${atkinson.variable}`} suppressHydrationWarning>
      <head>
        {/* marks that JavaScript runs, so scroll reveals start hidden; without it everything stays visible */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
