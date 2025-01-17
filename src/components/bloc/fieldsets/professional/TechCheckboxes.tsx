import { FormCtx } from "@/components/forms/RequirementForm";
import ContextualCheckbox from "@/components/inputs/contextual/ContextualCheckbox";
import { CtxCbContainerProps } from "@/lib/definitions/client/interfaces/components";
import { IFormCtx } from "@/lib/definitions/client/interfaces/contexts";
import { PseudoNum, roleType } from "@/lib/definitions/foundations";
import StringHelper from "@/lib/helpers/StringHelper";
import { useContext } from "react";
export default function TechCheckboxes({ apps, num }: CtxCbContainerProps) {
  let role: roleType = "undefined";
  const base = `fsSubTechCb`,
    ctx = useContext<IFormCtx>(FormCtx);
  role = ctx?.role || "undefined";
  const baseCl = `${base}${StringHelper.capitalize(role)}`;
  return (
    <fieldset
      className={`border p-4 mb-1 gx-2 gy-2 ${base} ${role ? baseCl : ""}`}
      id={`${baseCl}__${num}`}
      data-groupnum={num}
    >
      {apps.map((a, i) => (
        <ContextualCheckbox
          key={`${a}__${i}`}
          app={a}
          ownNum={(i + 1).toString() as PseudoNum}
        />
      ))}
    </fieldset>
  );
}
