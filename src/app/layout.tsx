import type { Metadata } from "next";
import { Instrument_Serif, JetBrains_Mono, Space_Grotesk, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sachin-kaniyaru.vercel.app"),
  title: {
    default: "Sachin Kumar K — Product Engineer | React Native | TypeScript",
    template: "%s | Sachin Kumar K",
  },
  description:
    "Software engineer at Omio with 7+ years building product across web, Android and iOS. React, React Native, TypeScript — travel and fintech.",
  keywords: [
    "Sachin Kumar Kaniyaru",
    "Product Engineer",
    "React Native",
    "TypeScript",
    "Omio",
    "Frontend",
    "Bengaluru",
  ],
  authors: [{ name: "Sachin Kumar Kaniyaru" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sachin-kaniyaru.vercel.app",
    title: "Sachin Kumar K — Product Engineer",
    description:
      "7+ years shipping product across mobile and web. React, React Native, TypeScript. Currently at Omio.",
    siteName: "Sachin Kumar Kaniyaru",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sachin Kumar K — Product Engineer",
    description:
      "7+ years shipping product across mobile and web. React, React Native, TypeScript. Currently at Omio.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sachin Kumar Kaniyaru",
    jobTitle: "Software Engineer",
    worksFor: { "@type": "Organization", name: "Omio" },
    url: "https://sachin-kaniyaru.vercel.app",
    sameAs: [
      "https://github.com/sachin-salian",
      "https://www.linkedin.com/in/sachinsaliank/",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressCountry: "IN",
    },
  };

  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${serif.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
