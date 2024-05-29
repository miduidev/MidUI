"use client";

import { cn } from "@/utils/cn";
import path from "path-browserify";
import { useMemo, useState } from "react";
import CodeSelect from "./code-select";
import { useConfigStore } from "@/store/config";

type CodeBlockProps = {
  files: string[];
  codes: string[];
};

export const CodeBlock = ({ files, codes }: CodeBlockProps) => {
  const lang = useConfigStore((config) => config.language);
  const activeIndex = useMemo(() => {
    for (let i = 0; i < files.length; i++)
      if (path.extname(files[i]) === `.${lang}`) {
        return i;
      }
  }, [lang]);

  return (
    <div className="flex flex-col">
      <div
        className={cn(
          "rounded-t-[10px] bg-[#121212] px-[20px]",
          "py-[12px] text-[#FFFDFD] font-ibm",
          "flex items-center justify-between"
        )}
      >
        <p className="font-medium text-[12px]">
          {path.basename(files[activeIndex ?? 0])}
        </p>

        <div className="flex items-center gap-[10px] justify-center">
          <CodeSelect files={files} activeIndex={activeIndex} />
        </div>
      </div>

      <div className="flex flex-col p-[16px] bg-[#121212] rounded-[10px] rounded-t-none">
        <div
          dangerouslySetInnerHTML={{
            __html: codes[activeIndex ?? 0],
          }}
        ></div>
      </div>
    </div>
  );
};
