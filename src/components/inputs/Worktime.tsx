"use client";
import IOHandler from "@/lib/client/handlers/IOHandler";
import { classes } from "@/lib/client/vars";
import { nlInp } from "@/lib/definitions/client/helpers";
import { PseudoNum } from "@/lib/definitions/foundations";
import { limits } from "@/lib/vars";
import { useState, useRef } from "react";
export default function Worktime() {
  const id = "worktime",
    r = useRef<nlInp>(null),
    [v, setV] = useState<PseudoNum>("1"),
    maxLength = 5;
  return (
    <div className={`${classes.inpDivClasses} worktimeDiv`}>
      <label className={classes.inpLabClasses} htmlFor={id}>
        Tempo de Trabalho na Empresa (em meses)
      </label>
      <input
        ref={r}
        value={v}
        minLength={1}
        maxLength={maxLength}
        min={1}
        max={limits.small.MAX_UTF16_SIGNED_SURROGATE}
        className={classes.inpClasses}
        id={id}
        name={id}
        type='number'
        onChange={ev =>
          setV(
            IOHandler.applyNumRules(
              ev.currentTarget.value,
              maxLength,
              limits.small.MAX_UTF16_SIGNED_SURROGATE
            ) as PseudoNum
          )
        }
      />
    </div>
  );
}
