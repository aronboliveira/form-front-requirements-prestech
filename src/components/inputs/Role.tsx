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
      <select className={classes.selectClasses} name={id} id={id} ref={r}>
        <optgroup label='Gestão'>
          <option>Executivo | Administrativo</option>
          <option>Financeiro | Comercial</option>
          <option>Marketing</option>
        </optgroup>
        <optgroup label='Técnico'>
          <option>Suporte Técnico</option>
          <option>Operatório</option>
          <option>Desenvolvimento</option>
        </optgroup>
      </select>
    </div>
  );
}
