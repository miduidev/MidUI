import { contents } from "@/lib/emitter/docs";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const c = contents.find((c) => c.slugAsParams === params.slug);
  if (!c) {
    return {};
  }

  const title = c.name + " - MidUI";
  const description = `Read documentation at MidUI`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      images: [
        {
          url: `/api/${c.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [`/api/${c.name}`],
    },
  };
}

export async function generateStaticParams() {
  return contents.map((c) => ({
    slug: c.slugAsParams,
  }));
}

const Page = ({ params }: PageProps) => {
  const content = contents.find((c) => c.slugAsParams === params.slug);
  if (!content) {
    return notFound();
  }

  return (
    <div className="px-1 pt-10 md:pt-16 lg:pt-16 pb-5 min-w-0">
      <article className="prose prose-invert">
        <content.component />
      </article>
    </div>
  );
};

export default Page;
