"use client";

import Link from "next/link";
import Logo from "@/assets/logo.svg";
import GithubLogo from "@/assets/github.svg";
import { usePathname } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Sheet from "./sheet";
import React, { useEffect, useState } from "react";
import { CommandMenu } from "./command-menu";
import useOpenStore from "@/store/store";

function Navbar({
  transparent = false,
  input,
}: {
  transparent?: boolean;
  input: React.ReactNode;
}) {
  const pathname = usePathname();
  const isCmdMenuOpen = useOpenStore((state) => state.isOpen);
  const [sheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    if (isCmdMenuOpen && sheetOpen) {
      setSheetOpen(false);
    }
  }, [isCmdMenuOpen, sheetOpen]);

  return (
    <div
      className={`${
        !transparent && pathname !== "/" && "border-b border-b-[#27272A]"
      } ${
        pathname.startsWith("/docs")
          ? "bg-[#141414] sticky top-0 md:relative"
          : "bg-transparent"
      } z-10`}
    >
      <div className="w-full flex items-center container mx-auto justify-between px-5 py-4">
        {pathname.startsWith("/docs") && (
          <Bars3Icon
            className="size-8 md:hidden"
            onClick={() => setSheetOpen(true)}
          />
        )}
        <Link href="/" className="flex items-center justify-center gap-2">
          <Logo />
          <h1 className="font-bold text-[22px] mt-1">MidUI</h1>
        </Link>

        <div className="flex items-center justify-center gap-8">
          {!pathname.startsWith("/docs") && (
            <Link
              href="/docs/getting-started"
              className="text-[16px] transition ease-in-out delay-100 hover:-translate-x-1 hover:text-[#0D92FC]"
            >
              Docs
            </Link>
          )}
          <Link
            href="/contributors"
            className="text-[16px] hidden md:block transition ease-in-out delay-100 hover:-translate-x-1 hover:text-[#0D92FC]"
          >
            Sponsor
          </Link>

          <Link target="_blank" href="https://github.com/miduidev/midui">
            <GithubLogo className="transition ease-in-out delay-100 hover:-translate-x-1 cursor-pointer" />
          </Link>
        </div>
      </div>
      <Sheet open={sheetOpen} setOpen={setSheetOpen} input={input} />
      <CommandMenu />
    </div>
  );
}

export default Navbar;
