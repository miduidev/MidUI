import { categories } from "@/lib/emitter/components";
import { notFound } from "next/navigation";
import { cn } from "@/utils/cn";
import { getMatchingComponents, transformCategory } from "@/utils";
import { Metadata } from "next";
import { Component } from "@/app/_components/docs/component";

type PageProps = {
  params: { category: string };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  if (!categories.includes(params.category)) {
    return {};
  }

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
    category: category,
  }));
}

const ComponentPage = ({ params }: PageProps) => {
  const matchingComps = getMatchingComponents(params.category);
  if (!matchingComps) {
    return notFound();
  }
  matchingComps.reverse();

  return (
    <div
      className={cn(
        "px-8 pt-10 md:pt-16 lg:pt-16 pb-5 flex flex-col",
        "gap-12 min-w-0"
      )}
    >
      {matchingComps.map((component) => (
        <Component component={component} key={component.id} />
      ))}
    </div>
  );
};

export default ComponentPage;
