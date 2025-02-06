const chalk = require("chalk"),
  fs = require("fs"),
  path = require("path"),
  levels = ["Beginner", "Intermediate", "Expert"],
  contentTemplate = `"use client";
  import { AddInputSubFieldset } from "@/lib/definitions/client/interfaces/components";
  import { useEffect, useRef, useMemo } from "react";
  import { nlFs } from "@/lib/definitions/client/helpers";
  import { protoName } from "@/lib/helpers/ObjectHelper";
  import StringHelper from "@/lib/helpers/StringHelper";
  import RenderHandler from "@/lib/client/handlers/RenderHandler";
  import useRole from "@/lib/client/hooks/useRole";
  export default function {functionName}({
    sufix = "",
    additional = <></>,
  }: AddInputSubFieldset) {
    sufix ||= protoName({functionName});
    const { role } = useRole();
    const r = useRef<nlFs>(null),
      t = \`\${role}__\${sufix}\`,
      name = \`\${StringHelper.uncapitalize(
        protoName({functionName})
      )}\`,
      handler = useMemo(
        () =>
          new RenderHandler({
            name,
            _role: role,
            _complexity: "{level}",
            _appType: "{g}",
          }),
        [role]
      );
    useEffect(() => {}, [r]);
    return (
      <fieldset
        className={\`fsAddRanged\`}
        ref={r}
        id={\`fs__\${t}\`}
      >
        {handler.renderInputs()}
        {additional}
      </fieldset>
    );
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
    !fs.existsSync(groupDir) &&
      fs.mkdirSync(groupDir, { recursive: true });
    levels.forEach(level => {
      const functionName = `${level}${
          g.charAt(0).toUpperCase() + g.slice(1)
        }`,
        filePath = path.join(
          groupDir,
          `${functionName}.tsx`
        );
      fs.writeFileSync(
        filePath,
        contentTemplate
          .replace(/\{functionName\}/g, functionName)
          .replace(/\{level\}/g, level.toLowerCase())
          .replace(/\{g\}/g, g),
        "utf8"
      );
      chalk.green(console.log(`Written to ${filePath}`));
    });
  } catch (e) {
    chalk.yellow(
      console.log(
        `Error creating ${groupDir || g + i.toString()}`
      )
    );
  }
});
