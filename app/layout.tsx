import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/_components/navbar";
import { inter, mono, poppins } from "@/lib/fonts";
import { siteConfig } from "@/lib/config";
import { CommandMenu } from "./_components/command-menu";
import NextTopLoader from "nextjs-toploader";
import Sheet from "./_components/sheet";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"
  ),
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    type: "website",
    title: siteConfig.title.default,
    description: siteConfig.description,
    images: "/api/explore",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/api/explore"],
    creator: "@shadcn",
  },
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
        className={`${inter.className} relative bg-black h-full overflow-x-hidden overflow-y-auto`}
      >
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          zIndex={1600}
          showAtBottom={false}
        />
        <div className="-z-40 fixed h-full w-full bg-[linear-gradient(#ffffff_1px,transparent_1px)] opacity-5 [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_90%)]"></div>
        <div className="-z-40 fixed h-full w-full bg-[linear-gradient(90deg,#ffffff_1px,transparent_1px)] opacity-5 [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_90%)]"></div>
        <div className="flex flex-col min-h-screen min-w-screen">
          <Navbar />

          {/* <Sheet /> */}
          {children}
        </div>
      </body>
    </html>
  );
}
