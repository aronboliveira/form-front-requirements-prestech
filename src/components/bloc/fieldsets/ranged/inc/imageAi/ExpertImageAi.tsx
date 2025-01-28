"use client"
  import { classes } from "@/lib/client/vars";
  import { AddInputSubFieldset } from "@/lib/definitions/client/interfaces/components";
  import { useEffect, useRef } from "react";
  import { nlFs } from "@/lib/definitions/client/helpers";
  import { protoName } from "@/lib/helpers/ObjectHelper";
  import StringHelper from "@/lib/helpers/StringHelper";
  import RenderHandler from "@/lib/client/handlers/RenderHandler";
  export default function ExpertImageAi({
    prefix,
    sufix,
    questions,
    additional = <></>,
  }: AddInputSubFieldset) {
    {
      const r = useRef<nlFs>(null),
        t = `${prefix}__${sufix}`,
        name = `${StringHelper.uncapitalize(protoName(ExpertImageAi))}`;
      useEffect(() => {}, [r]);
      return (
        <fieldset className={`fsAddRanged`} ref={r} id={`fs__${t}`}>
          {questions.map(([ac, lab], i) => (
            <div
              data-ownnum={i}
              id={`div__${prefix}__${name}__${ac}`}
              className={`divAddRanged ${classes.inpDivClasses}`}
            >
              <label
                data-ownnum={i}
                htmlFor={ac}
                id={`lab__${prefix}__${name}__${ac}`}
                className={`labAddRanged ${classes.inpLabClasses}`}
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
