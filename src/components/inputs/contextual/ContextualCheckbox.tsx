import { FormCtx } from "@/components/forms/RequirementForm";
import { TechApps } from "@/lib/client/vars";
import { CtxCbProps } from "@/lib/definitions/client/interfaces/components";
import { IFormCtx } from "@/lib/definitions/client/interfaces/contexts";
import { techAppKey } from "@/lib/definitions/foundations";
import StringHelper from "@/lib/helpers/StringHelper";
import { useContext } from "react";
export default function ContextualCheckbox({ app, ownNum }: CtxCbProps) {
  let role = "undefined";
  const base = `TechCb`,
    divBase = `div${base}`,
    ctx = useContext<IFormCtx>(FormCtx);
  role = ctx?.role || "undefined";
  const cRole = StringHelper.capitalize(role),
    friendlyAppName = TechApps[app as techAppKey];
  return (
    <div
      className={`${divBase} ${divBase}${cRole}`}
      id={`${divBase}${cRole || ownNum}`}
      data-ownnum={ownNum}
    >
      <input
        type='checkbox'
        id={app}
        name={StringHelper.camelToSnake(app)}
        className='form-check-input'
        disabled={!friendlyAppName ? true : false}
      />
      <label htmlFor={app} id={`label${base}${cRole || ownNum}`}>
        {friendlyAppName}
      </label>
    </div>
  );
}
