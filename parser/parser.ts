import fs from "fs";
import path from "path";
import { glob } from "glob";

const main = async () => {
  const BASE_DIR = path.resolve(`${process.cwd()}/data`);

  const files = await glob(BASE_DIR + "/**/*.{jsx,tsx,html,vue}");
  const data: string[] = [];
  const names: string[] = [];
    const map: any = {};
  let i = 0;

  for (const file of files) {
    const dirName = path.dirname(file);

    if (path.basename(file) === "info.tsx") {
      console.log("../data" + file.replace(BASE_DIR, ""));
      data.push(
        `import ${"n" + i} from '@/data${file.replace(BASE_DIR, "").replace(/\.[^/.]+$/, "")}';`
      );

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

  console.log(map);

  for (const dd of Object.entries(map)) {
    const { importId, files } = dd[1];
    if (importId === null) {
      console.log(`No import.tsx found for ${dd[0]}`);
      return;
    }

    for (const file of files) {
      const fileContent = fs.readFileSync(file.substring(1, file.length - 1), {
        encoding: "utf-8",
      });
        console.log(fileContent);
    }
    names.push(
      `{metadata : ${importId}, files : [${files.join(",\n")}]}`
    );
  }

  data.push(`export default [${names.join(",\n")}]`);

  fs.writeFileSync(path.resolve("./lib/emitter.ts"), data.join("\n"));
};

main();