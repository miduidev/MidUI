import { contents } from "@/lib/emitter/docs";
import { notFound } from "next/navigation";

type PageProps = {
  params: { slug: string };
};

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
    <div className="px-8 pt-10 md:pt-16 lg:pt-16 pb-5 min-w-0">
      <article className="prose prose-invert">
        <content.component />
      </article>
    </div>
  );
};

export default Page;
