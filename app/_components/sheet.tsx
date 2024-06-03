"use client";

import { categories } from "@/lib/emitter/components";
import { contents } from "@/lib/emitter/docs";
import { transformCategory } from "@/utils";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

type SheetProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  input: React.ReactNode;
};

const Sheet = ({ open, setOpen, input }: SheetProps) => {
  const { category } = useParams() as { category?: string };
  const pathname = usePathname();

  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          exit={{ opacity: 0 }}
          className="fixed w-screen h-screen inset-0 z-20 sheet overscroll-none"
          onClick={() => setOpen(false)}
          key={1}
        />
      )}
      {open && (
        <motion.div
          className={cn(
            "w-[330px] bg-[#111111] pl-10 pr-20",
            "py-14 border-r border-r-[#27272A] sheet-content",
            "fixed h-screen inset-0 z-20 sheet-content overscroll-none overflow-y-scroll overflow-x-hidden"
          )}
          key={2}
          initial={{ x: -350 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3, damping: 20, type: "spring" }}
          exit={{ x: -350 }}
        >
          <XMarkIcon
            width={22}
            height={22}
            className="absolute right-5 top-5"
            onClick={() => setOpen(false)}
          />
          {/* <Input className="w-lg mb-5" /> */}
          {input}
          <h2 className="font-semibold text-2xl mb-3">Documentation</h2>
          <div
            className={cn(
              "items-start justify-center flex flex-col",
              "py-[10px] gap-[12px]",
              "text-[#B2B2B2] text-[16px]"
            )}
          >
            {contents.map(({ slugAsParams, name }) => (
              <Link
                onClick={() => {
                  setOpen(false);
                }}
                href={`/docs/${slugAsParams}`}
                key={slugAsParams}
                className={cn(
                  pathname === `/docs/${slugAsParams}` && "text-[#0D92FC]",
                  "transition ease-in-out delay-100 hover:-translate-x-1 hover:text-[#0D92FC]"
                )}
              >
                {name}
              </Link>
            ))}
          </div>

          <h2 className="font-semibold text-2xl mb-3 mt-8">Components</h2>

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
                onClick={() => {
                  setOpen(false);
                }}
                className={cn(
                  category === c && "text-[#0D92FC]",
                  "transition ease-in-out delay-100 hover:-translate-x-1 hover:text-[#0D92FC]"
                )}
              >
                {transformCategory(c)}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sheet;
