import { Metadata } from "@/lib/types";
import { Card } from "./example";

const metadata = {
  title: "Card",
  description: "An Normal Card element",
  category: "cards",
  component: Card,
} satisfies Metadata;

export default metadata;