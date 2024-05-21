import React from "react";
import SideNav from "../_components/docs/side-nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs",
};

const Layout = ({
  children,
}: Readonly<{ children: React.ReactNode; params: { category: string } }>) => {
  return (
    <div className="flex-1 w-full bg-[#141414] font-poppins h-full">
      <div className="flex container mx-auto h-full">
        <SideNav className="hidden md:block lg:block" />

        {children}
      </div>
    </div>
  );
};

export default Layout;
