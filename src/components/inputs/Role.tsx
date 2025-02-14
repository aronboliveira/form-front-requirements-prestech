"use client";
import IOHandler from "@/lib/client/handlers/IOHandler";
import { classes } from "@/lib/client/vars";
import { nlSel } from "@/lib/definitions/client/helpers";
import { useEffect, useRef, useContext } from "react";
import { FormCtx } from "../forms/RequirementForm";
import { IFormCtx } from "@/lib/definitions/client/interfaces/contexts";
import { roleType } from "@/lib/definitions/foundations";
import { nlRDispatch } from "@/lib/definitions/client/helpers";
import StringHelper from "@/lib/helpers/StringHelper";
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
  useEffect(() => {
    const storageRole = sessionStorage.getItem("role");
    if (!storageRole) return;
    sessionStorage.setItem("role", role);
  }, [role]);
  useEffect(() => {
    const ps = document.getElementById("pseudos");
    ps && ps.remove();
  }, [role]);
  return (
    <div className={`${classes.inpDivClasses} divRole`}>
      <label className={classes.inpLabClasses} htmlFor={id}>
        Cargo na Empresa
      </label>
      <select
        className={classes.selectClasses}
        name={id}
        id={id}
        ref={r}
        data-fixed='true'
        value={role}
        onChange={ev =>
          setRole &&
          setRole(ev.currentTarget.value as roleType)
        }
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
              id={StringHelper.unfriendlyName(l)}
              className='optGestao'
              value={StringHelper.removeDiacritical(
                StringHelper.unfriendlyName(l).replace(
                  /_/g,
                  ""
                )
              )}
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
              id={StringHelper.removeDiacritical(
                StringHelper.unfriendlyName(l)
              )}
              className='optTecnico'
              value={StringHelper.removeDiacritical(
                StringHelper.unfriendlyName(l).replace(
                  /_/g,
                  ""
                )
              )}
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
