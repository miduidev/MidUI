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
        <div className="-z-40 fixed h-full w-full bg-[linear-gradient(#ffffff_1px,transparent_1px)] opacity-5 [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_90%)]"></div>
        <div className="-z-40 fixed h-full w-full bg-[linear-gradient(90deg,#ffffff_1px,transparent_1px)] opacity-5 [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_90%)]"></div>
        <div className="flex flex-col min-h-screen min-w-screen relative">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
