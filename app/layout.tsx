import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Familjen_Grotesk } from "next/font/google";
import Layout from "@/components/Layout";
import { cn } from "@/lib/utils";

const familjenGrotesk = Familjen_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Muhammad Faiz",
  description:
    "Muhammad Faiz, a Software Engineer from Cirebon, Indonesia. Experienced in web development using Next.js, TypeScript, Express.js, Laravel, and other modern technologies.",
  keywords: [
    "Muhammad Faiz",
    "empaiss",
    "Web Developer",
    "Software Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Laravel",
    "Full Stack Developer",
    "Portfolio",
    "Express.js",
  ],
  authors: [{ name: "Muhammad Faiz", url: "https://www.empaiss.my.id" }],
  openGraph: {
    title: "Muhammad Faiz",
    description:
      "The portfolio of Muhammad Faiz, showcasing experience, projects, and technical expertise in software development.",
    url: "https://www.empaiss.my.id",
    siteName: "Muhammad Faiz",
    images: [
      {
        url: "/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Faiz",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@empaiss",
    title: "Muhammad Faiz",
    description:
      "Muhammad Faiz, a Software Engineer from Cirebon, Indonesia. Experienced in web development using Next.js, TypeScript, Express.js, Laravel, and other modern technologies.",
    images: ["/thumbnail.png"],
  },
  metadataBase: new URL("https://www.empaiss.my.id"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-pt-[3.5rem]" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any"/>
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        {/* JSON-LD Schema Markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Muhammad Faiz",
              url: "https://www.empaiss.my.id",
              sameAs: [
                "https://github.com/muhammadfaiz19",
                "https://www.linkedin.com/in/muhammad-faiz-",
                "https://twitter.com/empaiss",
              ],
              jobTitle: "Software Engineer",
              email: "mailto:mfaiz2727@gmail.com",
              description:
                "Muhammad Faiz, a Software Engineer from Cirebon, Indonesia. Experienced in web development using Next.js, TypeScript, Express.js, Laravel, and other modern technologies.",
              image: "https://www.empaiss.my.id/thumbnail.png",
            }),
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          familjenGrotesk.variable
        )}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
