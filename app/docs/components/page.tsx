import { redirect } from "next/navigation";
import { categories } from "@/lib/emitter/components";

const page = () => {
    redirect(`/docs/components/${categories[0]}`);
    return null;
}

export default page;