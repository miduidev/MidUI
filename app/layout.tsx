import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/_components/navbar";
import { inter, mono, poppins } from "@/lib/fonts";

export const metadata: Metadata = {
  title: {
    default: "MidUI - Modern UI Kit",
    template: "%s - Modern UI Kit ",
  },
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
        <div className="flex flex-col min-h-screen min-w-screen relative">
          <div className="absolute  h-full w-full bg-[linear-gradient(#ffffff,transparent_1px)] opacity-100 [background-size:16px_180px]"></div>
          <div className="absolute  h-full w-full rotate-90 bg-[linear-gradient(#ffff_1px,transparent_1px)] opacity-100 [background-size:16px_180px]"></div>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
