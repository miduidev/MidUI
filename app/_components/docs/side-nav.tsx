"use client";

import { useParams, usePathname } from "next/navigation";
import Input from "./input";
import { cn } from "@/utils/cn";
import { categories } from "@/lib/emitter";
import Link from "next/link";
import { useMemo } from "react";

const SideNav = () => {
  const { category } = useParams() as { category?: string };

  const transformCategory = (c: string) => {
    const words = c.split(" ");

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    return words.join(" ");
  };

  return (
    <div className="sticky top-0 h-max pt-10">
      <Input />

      <h2 className="mt-8 font-semibold text-[20px] underline mb-3">
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
            className={cn(category === c && "text-white")}
          >
            {transformCategory(c)}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
