import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import { HeroBackground } from "@/app/components/backgrounds/BackGround";

export const metadata: Metadata = {
  title: "Ahmeddevx07",
  description:
    "Creating Scalable Web Solutions with modern MERN stack technologies.",
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
