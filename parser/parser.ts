import fs from "fs";
import path from "path";
import { glob } from "glob";
import { getHighlighter } from "shiki";
import serialize from "serialize-javascript";
import { Metadata } from "@/lib/types";

type FileMap = Record<
  string,
  {
    importId: string | null;
    files: string[];
  }
>;

const main = async () => {
  const BASE_DIR = path.resolve(`${process.cwd()}/data`);

  const files = await glob(BASE_DIR + "/**/*.{jsx,tsx,html,vue}");
  const data: string[] = [];
  const names: string[] = [];
  const map: FileMap = {};
  let i = 0;
  const categories = new Set<string>();

  for (const file of files) {
    const dirName = path.dirname(file);

    if (path.basename(file) === "info.tsx") {
      console.log("../data" + file.replace(BASE_DIR, ""));
      data.push(
        `import ${"n" + i} from '@/data${file
          .replace(BASE_DIR, "")
          .replace(/\.[^/.]+$/, "")}';`
      );

      const { default: Comp } = (await import(
        `@/data${file.replace(BASE_DIR, "")}`
      )) as { default: Metadata };

      categories.add(Comp.category);

      if (!map[dirName]) {
        map[dirName] = { files: [], importId: "n" + i };
      } else {
        map[dirName] = { ...map[dirName], importId: "n" + i };
      }
    } else {
      if (!map[dirName]) {
        map[dirName] = { files: [], importId: null };
      }

      map[dirName]?.files.push(`"${file}"`);
    }

    i++;
  }

  const highlighter = await getHighlighter({
    themes: ["vitesse-dark"],
    langs: ["typescript"],
  });

  for (const dd of Object.entries(map)) {
    const { importId, files } = dd[1];
    if (importId === null) {
      console.log(`No import.tsx found for ${dd[0]}`);
      return;
    }

    const contents: string[] = [];

    for (const file of files) {
      const fileContent = fs.readFileSync(file.substring(1, file.length - 1), {
        encoding: "utf-8",
      });

      const html = highlighter.codeToHtml(fileContent, {
        lang: "typescript",
        theme: "vitesse-dark",
      });

      contents.push(serialize(html));
    }
    names.push(
      `{metadata : ${importId}, code: [${contents.join(
        ",\n"
      )}], files : [${files.join(",\n")}]}`
    );
  }

  data.push(`export const components = [${names.join(",\n")}]`);
  data.push(
    `export const categories = ${JSON.stringify(Array.from(categories).sort())}`
  );

  fs.writeFileSync(path.resolve("./lib/emitter.ts"), data.join("\n"));
};

main();
