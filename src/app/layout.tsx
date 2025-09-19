
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diksha Portfolio | Portfolio Website using Next.js, Tailwind CSS, and Framer Motion",
  description: "Diksha Portfolio is a portfolio website for developers to showcase their projects and skills.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`bg-white dark:bg-gray-950 scheme-light dark:scheme-dark flex flex-col min-h-screen ${geistSans.variable} ${geistMono.variable}`}
      >
        <ThemeProvider>
          <Navbar />
          <main
            className={`flex-1 h-full flex flex-col transition-all duration-500
              bg-gray-50 text-gray-900 dark:bg-blue-950 dark:text-gray-100
            `}
          >
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
