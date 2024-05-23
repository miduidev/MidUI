import { categories, components } from "@/lib/emitter";
import { notFound } from "next/navigation";
import { cn } from "@/utils/cn";
import { getCodeIcon, transformCategory } from "@/utils";
import path from "path-browserify";
import { Metadata } from "next";

type PageProps = {
  params: { category: string };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const title = transformCategory(params.category) + " - MidUI";
  const description = `Checkout ${params.category} component at MidUI`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      images: [
        {
          url: `/api/${params.category}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [`/api/${params.category}`],
    },
  };
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category,
  }));
}

const ComponentPage = ({ params }: PageProps) => {
  const matchingComps = components.filter(
    (c) => c.metadata.category === params.category
  );
  if (!matchingComps) {
    return notFound();
  }

  return (
    <div
      className={cn(
        "px-8 pt-10 md:pt-16 lg:pt-16 pb-5 flex flex-col",
        "gap-12 min-w-0"
      )}
    >
      {matchingComps.map((comp, i) => (
        <div key={i} className="flex flex-col gap-12" id={comp.metadata.title}>
          <div className="space-y-5">
            <h1 className="font-bold text-4xl scroll-m-20">
              {comp.metadata.title}
            </h1>
            <p className="text-gray-400 text-md">{comp.metadata.description}</p>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold text-2xl space-y-3">
              <span>Example</span>
              <div className="w-full border-[0.5px] border-[#27272A]"></div>
            </h2>

            <div className="bg-[#111111] rounded-[10px] relative overflow-x-auto overflow-y-hidden z-[1]">
              <div className="px-[50px] py-[20px] overflow-x-auto">
                <div className="z-[-1] inset-0 absolute h-full w-full bg-[linear-gradient(#0D92FC,transparent_1px)] [background-size:10px_10px] opacity-5"></div>
                <div className="z-[-1] inset-0 absolute h-full w-full bg-[linear-gradient(90deg,#0D92FC_1px,transparent_1px)] [background-size:10px_10px] opacity-5"></div>
                <comp.metadata.component />
              </div>
            </div>

            {comp.files.map((fileName, i) => (
              <div className="flex flex-col" key={fileName}>
                <div
                  className={cn(
                    "rounded-t-[10px] bg-[#121212] px-[20px]",
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

                <div className="flex flex-col p-[16px] bg-[#121212] rounded-[10px] rounded-t-none">
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
