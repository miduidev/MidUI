"use client";

import Link from "next/link";
import Logo from "@/assets/logo.svg";
import { usePathname } from "next/navigation";

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
      <div className="w-full flex items-center container mx-auto justify-between p-5">
        <Link href="/" className="flex items-center justify-center gap-2">
          <Logo />
          <h1 className="font-bold text-[22px] mt-1">MidUI</h1>
        </Link>

        <div className="flex items-center justify-center gap-8">
          <Link href="/docs" className="text-[16px]">
            Docs
          </Link>
          <Link href="/contributors" className="text-[16px] ">
            Sponsor
          </Link>

          <svg
            width="35"
            height="35"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_57_55)">
              <path
                d="M19.9999 2.99026e-05C15.2479 -0.00341396 10.65 1.68525 7.02978 4.76349C3.40959 7.84173 1.00373 12.1084 0.2432 16.7991C-0.517329 21.4899 0.417176 26.2981 2.87929 30.3625C5.34141 34.4269 9.17026 37.4818 13.6799 38.98C14.6799 39.18 15.0399 38.54 15.0399 38.02L15.0199 34.62C9.45989 35.82 8.27989 31.94 8.27989 31.94C7.35989 29.62 6.05989 29 6.05989 29C4.25989 27.76 6.19989 27.8 6.19989 27.8C8.19989 27.94 9.25989 29.86 9.25989 29.86C11.0599 32.9 13.9399 32.02 15.0799 31.52C15.2799 30.22 15.7799 29.34 16.3399 28.84C11.8999 28.34 7.23989 26.62 7.23989 18.96C7.23989 16.76 8.01989 14.98 9.29989 13.58C8.69502 11.8583 8.7665 9.97108 9.49989 8.30003C9.49989 8.30003 11.1799 7.76003 14.9999 10.34C18.2745 9.45483 21.7253 9.45483 24.9999 10.34C28.8199 7.74003 30.4999 8.30003 30.4999 8.30003C31.5999 11.04 30.8999 13.1 30.6999 13.58C31.9799 14.98 32.7599 16.78 32.7599 18.96C32.7599 26.64 28.0799 28.32 23.6199 28.82C24.3399 29.44 24.9799 30.66 24.9799 32.52L24.9599 38.02C24.9599 38.54 25.3199 39.18 26.3399 38.98C30.8512 37.4813 34.6811 34.4247 37.1431 30.3583C39.6051 26.2918 40.5382 21.4813 39.7751 16.7892C39.0119 12.0972 36.6024 7.83037 32.9786 4.75373C29.3548 1.67709 24.7536 -0.00818654 19.9999 2.99026e-05Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_57_55">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
