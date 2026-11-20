import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/plus-jakarta-sans";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Absolute base for canonical, og:url and og:image. On Vercel this is the
// production domain (your custom domain once one is added).
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  // Keep the whole site out of search results until launch.
  // Remove this (and public/robots.txt) to go live.
  robots: { index: false, follow: true },
  title: "Khayra | Digital Marketing Agency That Drives Real Business Growth",
  description:
    "Khayra helps businesses build a stronger digital presence with SEO, Google Ads, social media, performance marketing, web development and branding.",
  openGraph: {
    title: "Khayra | Digital Marketing Agency",
    description:
      "Strategy-first digital marketing: SEO, SEM, social, performance marketing, websites and branding.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="visually-hidden">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
