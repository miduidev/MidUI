import React from "react";
import SideNav from "@/app/_components/docs/side-nav";
import { Metadata } from "next";
import Input from "@/app/_components/docs/input";
import Shortcut from "@/app/_components/docs/shortcut";
import Footer from "@/app/_components/docs/footer";
import { cn } from "@/utils/cn";
import ScrollTop from "@/app/_components/docs/scroll-to-top";

export const metadata: Metadata = {
  title: "Docs",
};

const Layout = ({
  children,
}: Readonly<{ children: React.ReactNode; params: { category: string } }>) => {
  return (
    <div className="flex-1 w-full bg-[#141414] font-poppins h-full">
      <div className="flex container mx-auto h-full">
        <SideNav
          className="hidden md:block lg:block"
          input={<Input shortcut={<Shortcut />} />}
        />
        <div className={cn(
          "px-8 pt-10 md:pt-16 lg:pt-16 pb-5 flex flex-col",
          "gap-12 min-w-0 w-full"
        )}>
          {children}
          <Footer />
        </div>

        <ScrollTop />
      </div>
    </div>
  );
};

export default Layout;
