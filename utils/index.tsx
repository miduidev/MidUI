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
