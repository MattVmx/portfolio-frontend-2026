import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://matias-speroni-portfolio.vercel.app";
const siteTitle = "Matías Speroni - Frontend Developer";
const siteDescription = "Portfolio de Matías Speroni, desarrollador frontend especializado en experiencias web responsive, React, TypeScript, APIs y QA manual.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Matías Speroni",
  },
  description: siteDescription,
  keywords: ["Frontend Developer", "React", "TypeScript", "JavaScript", "Portfolio", "QA Manual", "Mar del Plata"],
  authors: [{ name: "Matías Speroni", url: siteUrl }],
  creator: "Matías Speroni",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: "Matías Speroni - Frontend Portfolio",
    title: siteTitle,
    description: siteDescription,
    images: [{
      url: "/og-image.webp",
      width: 1200,
      height: 630,
      alt: "Portfolio de Matías Speroni, Frontend Developer",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.webp"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
