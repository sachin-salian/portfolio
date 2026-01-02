import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sachin Kumar Kaniyaru | Senior Full-Stack Engineer (Mobile & Web)",
  description:
    "Senior Full-Stack Engineer specializing in React Native, React, and Node.js. Experienced in building secure, high-performance mobile and web applications at scale.",
  keywords: [
    "Senior Full-Stack Engineer",
    "React Native Developer",
    "React Developer",
    "Mobile App Developer",
    "Web Development",
    "TypeScript",
    "Node.js",
    "Frontend Engineer",
    "Backend for Frontend",
    "Scalable Applications",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
