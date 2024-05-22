"use client";

import Link from "next/link";
import Logo from "@/assets/logo.svg";
import GithubLogo from "@/assets/github.svg";
import { usePathname } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/24/outline";

function Navbar({ transparent = false }: { transparent?: boolean }) {
  const pathname = usePathname();

  return (
    <div
      className={`${
        !transparent && pathname !== "/" && "border-b border-b-[#27272A]"
      } ${
        pathname.startsWith("/docs") ? "bg-[#141414]" : "bg-transparent"
      } z-10 `}
    >
      <div className="w-full flex items-center container mx-auto justify-between px-5 py-4">
        {pathname.startsWith("/docs") && <Bars3Icon className="size-8 md:hidden" />}
        <Link href="/" className="flex items-center justify-center gap-2">
          <Logo />
          <h1 className="font-bold text-[22px] mt-1">MidUI</h1>
        </Link>

        <div className="flex items-center justify-center gap-8">
          {!pathname.startsWith("/docs") &&
            <Link href="/docs" className="text-[16px] transition ease-in-out delay-100 hover:-translate-x-1 hover:text-[#0D92FC]">
              Docs
            </Link>
          }
          <Link href="/contributors" className="text-[16px] hidden md:block transition ease-in-out delay-100 hover:-translate-x-1 hover:text-[#0D92FC]">
            Sponsor
          </Link>

        
          <GithubLogo className="transition ease-in-out delay-100 hover:-translate-x-1 cursor-pointer" />

        </div>
      </div>
    </div>
  );
}

export default Navbar;
