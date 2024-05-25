import ReactLogo from "@/assets/react.svg";
import HtmlLogo from "@/assets/html.svg";
import path from "path-browserify";
import { components } from "@/lib/emitter/components";

export function getCodeIcon(fileName: string) {
  const ext = path.extname(fileName);

  if (ext === ".tsx" || ext === ".jsx") {
    return <ReactLogo />;
  } else if (ext === ".html") {
    return <HtmlLogo />;
  }

  return null;
}
export const transformCategory = (c: string) => {
  const words = c.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  return words.join(" ");
};

export const getMatchingComponents = (category: string) => {
  return components.filter(
    (c) => c.metadata.category.toLocaleLowerCase() === category.toLowerCase()
  );
};

export const getNonEncodedId = (id: string) => {
  return id.replace(/\s+/g, '-').toLowerCase();
}
