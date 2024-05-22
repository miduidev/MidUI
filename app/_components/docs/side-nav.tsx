"use client";

import { useParams } from "next/navigation";
import Input from "./input";
import { cn } from "@/utils/cn";
import { categories } from "@/lib/emitter";
import Link from "next/link";
import { ClassNameValue } from "tailwind-merge";
import { transformCategory } from "@/utils";

type SideNavProps = {
  className?: ClassNameValue;
};

const SideNav = ({ className }: SideNavProps) => {
  const { category } = useParams() as { category?: string };

  return (
    <div className={cn("sticky top-0 h-max pt-10 shrink-0 ", className)}>
      <Input />

      <h2 className="mt-8 font-semibold text-[20px] mb-3">
        Components
      </h2>

      <div
        className={cn(
          "items-start justify-center flex flex-col",
          "py-[10px] gap-[12px]",
          "text-[#B2B2B2] text-[16px]"
        )}
      >
        {categories.map((c) => (
          <Link
            href={`/docs/components/${c}`}
            key={c}
            className={cn(category === c && "text-white") + "transition ease-in-out delay-100 hover:-translate-x-1 hover:text-[#0D92FC]"}
          >
            {transformCategory(c)}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
