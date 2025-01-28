const chalk = require("chalk"),
  fs = require("fs"),
  path = require("path"),
  levels = ["Beginner", "Intermediate", "Expert"],
  contentTemplate = `"use client"
  import { classes } from "@/lib/client/vars";
  import { AddInputSubFieldset } from "@/lib/definitions/client/interfaces/components";
  import { useEffect, useRef } from "react";
  import { nlFs } from "@/lib/definitions/client/helpers";
  import { protoName } from "@/lib/helpers/ObjectHelper";
  import StringHelper from "@/lib/helpers/StringHelper";
  import RenderHandler from "@/lib/client/handlers/RenderHandler";
  export default function {functionName}({
    prefix,
    sufix,
    questions,
    additional = <></>,
  }: AddInputSubFieldset) {
    {
      const r = useRef<nlFs>(null),
        t = \`\${prefix}__\${sufix}\`,
        name = \`\${StringHelper.uncapitalize(protoName({functionName}))}\`;
      useEffect(() => {}, [r]);
      return (
        <fieldset className={\`fsAddRanged\`} ref={r} id={\`fs__\${t}\`}>
          {questions.map(([ac, lab], i) => (
            <div
              data-ownnum={i}
              id={\`div__\${prefix}__\${name}__\${ac}\`}
              className={\`divAddRanged \${classes.inpDivClasses}\`}
            >
              <label
                data-ownnum={i}
                htmlFor={ac}
                id={\`lab__\${prefix}__\${name}__\${ac}\`}
                className={\`labAddRanged \${classes.inpLabClasses}\`}
              >
                {lab}
              </label>
              {new RenderHandler(name).renderInput(prefix, ac)}
            </div>
          ))}
          {additional}
        </fieldset>
      );
    }
  }  
`;
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
  "def",
].forEach((g, i) => {
  let groupDir;
  try {
    groupDir = path.join(__dirname, g);
    !fs.existsSync(groupDir) && fs.mkdirSync(groupDir, { recursive: true });
    levels.forEach(level => {
      const functionName = `${level}${g.charAt(0).toUpperCase() + g.slice(1)}`,
        filePath = path.join(groupDir, `${functionName}.tsx`);
      fs.writeFileSync(
        filePath,
        contentTemplate.replace(/\{functionName\}/g, functionName),
        "utf8"
      );
      chalk.green(console.log(`Written to ${filePath}`));
    });
  } catch (e) {
    chalk.yellow(console.log(`Error creating ${groupDir || g + i.toString()}`));
  }
});
