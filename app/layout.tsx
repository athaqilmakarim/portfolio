import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aqil Makarim — Portfolio",
  description: "Aqil Makarim's personal portfolio website showcasing projects in Frontend, UI/UX, and Data Analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background text-text">
      <body>
        <div className="container max-w-7xl py-4 md:py-6">
          <Navbar />
          <main className="mt-8 md:mt-12">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
