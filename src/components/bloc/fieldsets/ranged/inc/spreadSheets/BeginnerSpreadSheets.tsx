"use client";
import { classes } from "@/lib/client/vars";
import { AddInputSubFieldset } from "@/lib/definitions/client/interfaces/components";
import { useEffect, useRef } from "react";
import {
  QuestionKey,
  nlFs,
} from "@/lib/definitions/client/helpers";
import { protoName } from "@/lib/helpers/ObjectHelper";
import StringHelper from "@/lib/helpers/StringHelper";
import RenderHandler from "@/lib/client/handlers/RenderHandler";
import { roleType } from "@/lib/definitions/foundations";
export default function BeginnerSpreadSheets({
  prefix,
  sufix,
  questions,
  additional = <></>,
}: AddInputSubFieldset) {
  const rolePrefix = prefix as roleType;
  {
    const r = useRef<nlFs>(null),
      t = `${rolePrefix}__${sufix}`,
      name = `${StringHelper.uncapitalize(
        protoName(BeginnerSpreadSheets)
      )}`;
    useEffect(() => {}, [r]);
    return (
      <fieldset
        className={`fsAddRanged`}
        ref={r}
        id={`fs__${t}`}
      >
        {questions.map(([ac, lab], i) => (
          <div
            data-ownnum={i}
            id={`div__${rolePrefix}__${name}__${ac}`}
            className={`divAddRanged ${classes.inpDivClasses}`}
          >
            <label
              data-ownnum={i}
              htmlFor={ac}
              id={`lab__${rolePrefix}__${name}__${ac}`}
              className={`labAddRanged ${classes.inpLabClasses}`}
            >
              {lab}
            </label>
            {new RenderHandler(name).renderInput(
              rolePrefix,
              ac as QuestionKey
            )}
          </div>
        ))}
        {additional}
      </fieldset>
    );
  }
}
