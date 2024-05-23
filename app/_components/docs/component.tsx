import type { UIComponent } from "@/lib/types";
import { ComponentPreview } from "./component-preview";
import { CodeBlock } from "./code-block";

type ComponentProps = {
  component: UIComponent;
};

export const Component = ({
  component: { metadata, files, code },
}: ComponentProps) => {
  return (
    <div className="flex flex-col gap-12" id={metadata.title}>
      <div className="space-y-5">
        <h1 className="font-bold text-4xl scroll-m-20">{metadata.title}</h1>
        <p className="text-gray-400 text-md">{metadata.description}</p>
      </div>

      <div className="space-y-5">
        <h2 className="font-semibold text-2xl space-y-3">
          <span>Example</span>
          <div className="w-full border-[0.5px] border-[#27272A]"></div>
        </h2>

        <ComponentPreview>
          <metadata.component />
        </ComponentPreview>

        {files.map((fileName, i) => (
          <CodeBlock fileName={fileName} code={code[i]} key={fileName} />
        ))}
      </div>
    </div>
  );
};
