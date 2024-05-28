"use client";

import { cn } from "@/utils/cn";
import path from "path-browserify";
import { useState } from "react";
import CodeSelect from "./code-select";

type CodeBlockProps = {
  files: string[];
  codes: string[];
};

export const CodeBlock = ({ files, codes }: CodeBlockProps) => {

  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col">
      <div
        className={cn(
          "rounded-t-[10px] bg-[#121212] px-[20px]",
          "py-[12px] text-[#FFFDFD] font-ibm",
          "flex items-center justify-between"
        )}
      >
        <p className="font-medium text-[12px]">{path.basename(files[active])}</p>

        <div className="flex items-center gap-[10px] justify-center">
          <CodeSelect active={active} setActive={setActive} files={files} />
        </div>
      </div>

      <div className="flex flex-col p-[16px] bg-[#121212] rounded-[10px] rounded-t-none">
        <div
          dangerouslySetInnerHTML={{
            __html: codes[active],
          }}
        ></div>
      </div>
    </div>
  );
};
