import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/_components/navbar";
import { inter, mono, poppins } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "MidUI - Modern UI Kit",
  description:
    "MidUI modern tailwindcss copy paste components, supports React,HTML,Vue.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${mono.variable} ${poppins.variable} overflow-hidden h-full`}
    >
      <body
        className={`${inter.className} relative bg-black h-full overflow-auto`}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
