import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import { site } from "@/content/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

export const metadata: Metadata = {
  title: { default: site.name, template: `%s · ${site.name}` },
  description: site.hero.subline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <body id="top" className="overflow-x-hidden">
        <Navbar />
        {/* Page rails: the vertical lines every section sits between */}
        <div className="relative mx-4 border-x border-line pt-14 md:mx-6 md:pt-16 xl:mx-auto xl:max-w-rails">
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
