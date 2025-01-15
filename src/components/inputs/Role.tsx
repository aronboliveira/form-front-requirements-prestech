"use client";
import IOHandler from "@/lib/client/handlers/IOHandler";
import { classes } from "@/lib/client/vars";
import { nlSel } from "@/lib/definitions/client/helpers";
import { useEffect, useRef, useContext } from "react";
import { FormCtx } from "../forms/RequirementForm";
import { IFormCtx } from "@/lib/definitions/client/interfaces/contexts";
import { roleType } from "@/lib/definitions/foundations";
import { nlRDispatch } from "@/lib/definitions/client/helpers";
export default function Role() {
  const id = "role",
    ctx = useContext<IFormCtx>(FormCtx),
    r = useRef<nlSel>(null);
  let role = "undefined",
    setRole: nlRDispatch<roleType> = null;
  if (ctx) {
    setRole = ctx.setRole;
    role = ctx.role;
  }
  useEffect(() => IOHandler.syncLabel(r.current), [r]);
  return (
    <div className={`${classes.inpDivClasses} divRole`}>
      <label className={classes.inpLabClasses} htmlFor={id}>
        Cargo na Empresa
      </label>
      {/* //TODO TEM QUE SER MÚLTIPLO */}
      {/* //TODO INCLUIR POWERSHELL E OPERAÇÕES EM CLOUD */}
      <select
        className={classes.selectClasses}
        name={id}
        id={id}
        ref={r}
        value={role}
        onChange={ev => setRole && setRole(ev.currentTarget.value as roleType)}
      >
        <optgroup label='Gestão' id='optGrpGestao'>
          {[
            { l: "Executivo | Administrativo" },
            { l: "Financeiro" },
            { l: "Comercial" },
            { l: "Marketing" },
          ].map(({ l }, i) => (
            <option
              key={`opt_gestao__${i}`}
              id={l
                .split("|")
                .map(
                  f =>
                    `${f.charAt(0).toUpperCase().trim()}${f
                      .slice(1)
                      .toLowerCase()
                      .trim()}`
                )
                .join()}
              className='optGestao'
            >
              {l}
            </option>
          ))}
        </optgroup>
        <optgroup label='Técnico'>
          {[
            { l: "Suporte Técnico N1" },
            { l: "Suporte Técnico N2" },
            { l: "Operatório" },
            { l: "Desenvolvimento" },
            { l: "DevOps" },
          ].map(({ l }, i) => (
            <option
              key={`opt_tecnico__${i}`}
              id={l
                .split(" ")
                .map(
                  f =>
                    `${f.charAt(0).toUpperCase().trim()}${f
                      .toLowerCase()
                      .replace(/é/g, "e")
                      .replace(/ó/g, "o")
                      .trim()}`
                )
                .join()}
              className='optTecnico'
            >
              {l}
            </option>
          ))}
        </optgroup>
        <option id='undefinedRole' value='undefined'>
          Outros
        </option>
      </select>
    </div>
  );
}
