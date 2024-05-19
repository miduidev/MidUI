import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/_components/navbar";
import {XMarkIcon} from "@heroicons/react/24/outline"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MidUI - Modern UI Kit",
  description: "MidUI modern tailwindcss copy paste components, supports React,HTML,Vue.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <div className="container m-auto">
          <Navbar transparent/>
          {children}
        </div>
        <div className="h-80 w-1/2 bg-[#00B3FF] top-1/3 fixed -z-30 -rotate-[25deg] blur-[399px]"></div>
      </body>
    </html>
  );
}
