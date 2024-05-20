import { components } from "@/lib/emitter";
import { notFound } from "next/navigation";
import { cn } from "@/utils/cn";
import { getCodeIcon } from "@/utils";
import path from "path-browserify";

type PageProps = {
  params: { category: string };
};

const ComponentPage = ({ params }: PageProps) => {
  const matchingComps = components.filter(
    (c) => c.metadata.category === params.category
  );
  if (!matchingComps) {
    return notFound();
  }

  return (
    <div
      className={cn("px-8 pt-16 pb-5 flex flex-col", "gap-12 max-w-[800px]")}
    >
      {matchingComps.map((comp, i) => (
        <div key={i} className="flex flex-col gap-12">
          <div className="space-y-5">
            <h1 className="font-bold text-4xl scroll-m-20">
              {comp.metadata.title}
            </h1>
            <p className="text-[#CECECE] text-[16px]">
              {comp.metadata.description}
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold text-2xl">Usage</h2>

            <div className="px-[50px] py-[20px] bg-[#111111] rounded-[10px] relative overflow-hidden">
              <comp.metadata.component />
            </div>

            {comp.files.map((fileName, i) => (
              <div className="flex flex-col" key={fileName}>
                <div
                  className={cn(
                    "rounded-t-[10px] bg-[#212121] px-[20px]",
                    "py-[12px] text-[#FFFDFD] font-ibm",
                    "flex items-center justify-between"
                  )}
                >
                  <p className="font-medium text-[12px]">
                    {path.basename(fileName)}
                  </p>

                  <div className="flex items-center gap-[10px] justify-center">
                    <p className="font-normal uppercase">
                      {path.extname(fileName).slice(1)}
                    </p>
                    {getCodeIcon(fileName)}
                  </div>
                </div>

                <div className="flex flex-col p-[16px] bg-[#212121] rounded-[10px] rounded-t-none">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: comp.code[i],
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComponentPage;
