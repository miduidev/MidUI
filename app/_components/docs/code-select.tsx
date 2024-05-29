"use client";
import { useConfigStore } from "@/store/config";
import { getCodeIcon } from "@/utils";
import path from "path-browserify";

const CodeSelect = ({
  files,
  activeIndex,
}: {
  files: string[];
  activeIndex: number | undefined;
}) => {
  const setLanguage = useConfigStore((config) => config.setLanguage);

  return (
    <div className="w-full flex justify-center text-xs">
      <div className="flex mx-3 bg-[#191919] w-fit rounded-md transition-colors duration-300">
        {files.map((v, i) => {
          const ext = path.extname(v).slice(1);

          return (
            <button
              key={i}
              midui-id={i}
              onClick={(e) => {
                e.preventDefault();
                setLanguage(ext as "tsx" | "html" | "vue");
              }}
              className={`${
                (activeIndex ?? 0) === i && "bg-[#1565C0]"
              }  px-2 py-1 rounded-md uppercase`}
            >
              <div className="flex items-center space-x-2 pointer-events-none">
                <span>{ext}</span>
                <span>{getCodeIcon(v)}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CodeSelect;
