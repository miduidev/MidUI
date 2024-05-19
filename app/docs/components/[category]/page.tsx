import { components } from "@/lib/emitter";

const page = ({ params }: { params: { category: string } }) => {
  const c = components[0];

  return <c.metadata.component />;
};

export default page;
