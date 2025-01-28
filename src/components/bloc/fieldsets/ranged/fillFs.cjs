const chalk = require("chalk"),
  fs = require("fs"),
  path = require("path");
let contentTemplate = `"use client";
  import { RangeCtxBlockProps } from "@/lib/definitions/client/interfaces/components";
  import Fs{majorGroup} from "./Fs{majorGroup}";
  import { protoName } from "@/lib/helpers/ObjectHelper";
  import { JSX } from "react/jsx-dev-runtime";
  import useRangedCtxBlockChildren from "@/lib/client/hooks/useRangedCtxBlockChildren";
  import Beginner{group} from "../inc/{g}/Beginner{group}";
  import Intermediate{group} from "../inc/{g}/Intermediate{group}";
  import Expert{group} from "../inc/{g}/Expert{group}";
  export default function {group}(props: RangeCtxBlockProps): JSX.Element {
    const {
      r,
      roleRef,
      levelTitle: lt,
      mappedQuestions: qs,
    } = useRangedCtxBlockChildren(props.lvl, "{ac}");
    return (
      <Fs{majorGroup} id={protoName({group})} p={props} level={lt} ref={r}>
        {qs.length ? (
          (() => {
            const acronyms = qs.map(q => q[0]).join("__");
            switch (lt) {
              case "beginner":
                return (
                  <Beginner{group}
                    key={\`\${acronyms}__\${lt}\`}
                    prefix={roleRef.current}
                    sufix={acronyms}
                    questions={qs}
                  />
                );
              case "intermediate":
                return (
                  <Intermediate{group}
                    key={\`\${acronyms}__\${lt}\`}
                    prefix={roleRef.current}
                    sufix={acronyms}
                    questions={qs}
                  />
                );
              case "expert":
                return (
                  <Expert{group}
                    key={\`\${acronyms}__\${lt}\`}
                    prefix={roleRef.current}
                    sufix={acronyms}
                    questions={qs}
                  />
                );
              default:
                return (
                  <Beginner{group}
                    key={\`\${acronyms}__\${lt}\`}
                    prefix={roleRef.current}
                    sufix={acronyms}
                    questions={qs}
                  />
                );
            }
          })()
        ) : (
          <></>
        )}
      </Fs{majorGroup}>
    );
  }`;

[
  "businessInteligence",
  "cloudStorage",
  "Crms",
  "Erps",
  "docs",
  "formBuilders",
  "spreadSheets",
  "planning",
  "audioAi",
  "imageAi",
  "videoAi",
  "llms",
].forEach(g => {
  try {
    const majorGroup = (() => {
      switch (g) {
        case "Crms":
        case "Erps":
        case "planning":
        case "businessInteligence":
          return "OfficePlatforms";
        case "audioAi":
        case "imageAi":
        case "videoAi":
        case "llms":
          return "Ai";
        default:
          return "OfficeApp";
      }
    })();
    const fileName = (() => {
      switch (g) {
        case "businessInteligence":
          return "Bi";
        case "audioAi":
        case "imageAi":
        case "videoAi":
        case "llms":
        case "docs":
        case "planning":
          return `${g.charAt(0).toUpperCase()}${g.slice(1)}`;
        case "spreadSheets":
          return "Spreadsheets";
        case "cloudStorage":
          return "StoragePlatforms";
        default:
          return g;
      }
    })();
    const subFolder = majorGroup === "Ai" ? "ai" : "office";
    const groupDir = path.join(__dirname, subFolder, `${fileName}.tsx`);
    const dir = path.dirname(groupDir);
    fs.mkdirSync(dir, { recursive: true });
    let template = contentTemplate
      .replace(/\{g\}/g, g)
      .replace(/\{group\}/g, `${g.charAt(0).toUpperCase()}${g.slice(1)}`)
      .replace(/\{majorGroup\}/g, majorGroup)
      .replace(/\{ac\}/, fileName);
    fs.writeFileSync(groupDir, template, "utf8");
    chalk.green(console.log(`Written to ${groupDir}`));
  } catch (e) {
    chalk.yellow(console.log(`Error creating file: ${e.message}`));
  }
});
