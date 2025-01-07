import IOHandler from "@/lib/client/handlers/IOHandler";
import { classes } from "@/lib/client/vars";
import { nlSel } from "@/lib/definitions/helpers";
import { useEffect, useRef } from "react";
export default function Role() {
  const id = "role",
    r = useRef<nlSel>(null);
  useEffect(() => IOHandler.syncLabel(r.current), [r]);
  return (
    <div className={`${classes.inpDivClasses} divRole`}>
      <label className={classes.inpLabClasses} htmlFor={id}>
        Cargo na Empresa
      </label>
      {/* //TODO TEM QUE SER MÚLTIPLO */}
      {/* //TODO INCLUIR POWERSHELL E OPERAÇÕES EM CLOUD */}
      <select className={classes.selectClasses} name={id} id={id} ref={r}>
        <optgroup label='Gestão' id='optGrpGestao'>
          {[
            { l: "Executivo | Administrativo" },
            { l: "Financeiro | Comercial" },
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
      </select>
    </div>
  );
}
