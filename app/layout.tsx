import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import { HeroBackground } from "@/app/components/backgrounds/BackGround";

export const metadata: Metadata = {
  title: "Ahmeddevx07 | Full Stack Developer",
  description: "Creating Scalable Web Solutions with modern MERN stack technologies.",
  keywords: ["MERN", "Full Stack Developer", "Next.js", "React", "Portfolio"],
  authors: [{ name: "Muhammad Ahmed" }],
  openGraph: {
    title: "Ahmeddevx07 | Full Stack Developer",
    description: "Creating Scalable Web Solutions with modern MERN stack technologies.",
    url: "https://your-portfolio-url.com",
    siteName: "Ahmeddevx07 Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmeddevx07 | Full Stack Developer",
    description: "Creating Scalable Web Solutions with modern MERN stack technologies.",
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
