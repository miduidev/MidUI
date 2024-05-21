import ReactLogo from "@/assets/react.svg";
import HtmlLogo from "@/assets/html.svg";
import path from "path-browserify";

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
