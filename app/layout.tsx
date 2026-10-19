import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import { HeroBackground } from "@/app/components/backgrounds/BackGround";

export const metadata: Metadata = {
  title: "Muhammad Ahmed | Full Stack MERN & Next.js Developer",
  description:
    "MERN Stack & Next.js Developer based in Karachi, Pakistan. Building scalable, production-ready web applications with modern architecture.",
  keywords: [
    "Muhammad Ahmed",
    "Ahmeddevx07",
    "MERN Stack Developer",
    "Full Stack Developer",
    "Next.js Developer",
    "React.js",
    "Node.js",
    "Karachi",
    "Pakistan",
  ],
  authors: [{ name: "Muhammad Ahmed" }],
  openGraph: {
    title: "Muhammad Ahmed | Full Stack MERN & Next.js Developer",
    description:
      "Creating Scalable Web Solutions with modern MERN stack and Next.js.",
    url: "https://ahmeddevx07.vercel.app",
    siteName: "Muhammad Ahmed Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Ahmed | Full Stack MERN & Next.js Developer",
    description:
      "Creating Scalable Web Solutions with modern MERN stack and Next.js.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-white overflow-x-hidden">
        <div className="relative min-h-screen font-display">
          <div className="fixed inset-0 -z-10">
            <HeroBackground />
          </div>
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
