import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const siteUrl = "https://aaronzeng.dev";
const description =
  "Software engineer at JPMorganChase, building AI tools for brand-aligned UI generation.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Aaron Zeng | Software Engineer",
  description,
  openGraph: {
    title: "Aaron Zeng | Software Engineer",
    description,
    url: siteUrl,
    siteName: "Aaron Zeng",
    images: [{ url: "/AARON_ZENG_SEO.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaron Zeng | Software Engineer",
    description,
    images: ["/AARON_ZENG_SEO.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
