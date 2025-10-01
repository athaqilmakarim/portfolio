import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";

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
    <html lang="en">
      <body style={{ backgroundColor: 'var(--background)', color: 'var(--text)' }}>
        <ThemeProvider>
          <div className="container max-w-7xl py-4 md:py-6">
            <Navbar />
            <main className="mt-8 md:mt-12">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
