"use client";

import { cn } from "@/utils/cn";
import path from "path-browserify";
import { useMemo, useState } from "react";
import CodeSelect from "./code-select";
import { useConfigStore } from "@/store/config";
import CodeDropdown from "./code-dropdown";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import CopyToClipboard from "./copy-to-clipboard";

type CodeBlockProps = {
  files: string[];
  codes: string[];
};

export const CodeBlock = ({ files, codes }: CodeBlockProps) => {
  const lang = useConfigStore((config) => config.language);
  const [view, setView] = useState(false);
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
        <div className="flex items-center space-x-1">
          <CopyToClipboard code={codes[activeIndex||0]} />
          <p className="font-medium text-[12px]">
            {path.basename(files[activeIndex ?? 0])}
          </p>
        </div>

        <div className="flex items-center gap-[10px] justify-center">
          <CodeSelect files={files} activeIndex={activeIndex} />
          <CodeDropdown files={files} activeIndex={activeIndex} />
        </div>
      </div>

      <div style={{maxHeight : view?"":"300px"}} className="relative flex flex-col p-[16px] bg-[#121212] rounded-[10px] rounded-t-none overflow-hidden">
        <div
          dangerouslySetInnerHTML={{
            __html: codes[activeIndex ?? 0],
          }}
        ></div>
        { 
          !view &&
          <div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-transparent to-[#141414]">
            <div className="flex w-full justify-center items-end h-full">
                <button className="text-sm flex items-center space-x-1" onClick={() => { setView(true) }}>
                  <CodeBracketIcon className="size-4" />
                  <span>View Source</span>
              </button>
            </div>
          </div>
        }
      </div>
    </div>
  );
};
