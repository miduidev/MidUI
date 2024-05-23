import { getCodeIcon } from "@/utils";
import { cn } from "@/utils/cn";
import path from "path-browserify";

type CodeBlockProps = {
  fileName: string;
  code: string;
};

export const CodeBlock = ({ fileName, code }: CodeBlockProps) => {
  return (
    <div className="flex flex-col">
      <div
        className={cn(
          "rounded-t-[10px] bg-[#121212] px-[20px]",
          "py-[12px] text-[#FFFDFD] font-ibm",
          "flex items-center justify-between"
        )}
      >
        <p className="font-medium text-[12px]">{path.basename(fileName)}</p>

        <div className="flex items-center gap-[10px] justify-center">
          <p className="font-normal uppercase">
            {path.extname(fileName).slice(1)}
          </p>
          {getCodeIcon(fileName)}
        </div>
      </div>

      <div className="flex flex-col p-[16px] bg-[#121212] rounded-[10px] rounded-t-none">
        <div
          dangerouslySetInnerHTML={{
            __html: code,
          }}
        ></div>
      </div>
    </div>
  );
};
