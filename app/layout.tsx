// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prime Health Academy – Longevity & Performance",
  description:
    "Prime Health Academy – evidenzbasierte Longevity-Kurse für Gesundheit, Performance und mehr aktive Lebensjahre.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col bg-slate-950 text-slate-50 app-bg">
          <TopBar />
          <main className="flex-1">
            <div className="page-container py-10 sm:py-14 space-y-16">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
