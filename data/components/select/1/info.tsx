import { Metadata } from "@/lib/types";
import Select from "./example";
import ComponentAdapter from "@/app/_adapters/component-adapter";

function Example() {
  return (
    <ComponentAdapter height="400px"><Select /></ComponentAdapter>
  );
}

const metadata = {
  title: "Select",
  description:
    "A sleek Select component designed with TailwindCSS for clear, responsive, and user-friendly dropdown menus.",
  category: "select",
  component: Example,
} satisfies Metadata;

export default metadata;
