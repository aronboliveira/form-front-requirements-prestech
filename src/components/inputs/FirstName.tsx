import { nlInp } from "@/lib/definitions/client/helpers";
import IOHandler from "@/lib/client/handlers/IOHandler";
import CompabilityValidator from "@/lib/client/validators/CompabilityValidator";
import { classes } from "@/lib/client/vars";
import { useEffect, useRef, useState } from "react";
import StringHelper from "@/lib/helpers/StringHelper";
export default function FirstName() {
  const r = useRef<nlInp>(null),
    id = "firstName",
    [v, setV] = useState<string>("");
  useEffect(() => {
    if (!(r.current instanceof HTMLInputElement)) return;
    if (!CompabilityValidator.isSafari()) r.current.autocapitalize = "words";
  }, [r]);
  useEffect(() => IOHandler.syncLabel(r.current), [r, v]);
  return (
    <div className={classes.inpDivClasses}>
      <label className={classes.inpLabClasses} htmlFor={id}>
        Primeiro Nome
      </label>
      <input
        ref={r}
        value={v}
        id={id}
        name={StringHelper.camelToSnake(id)}
        required
        autoComplete='given-name'
        // autoFocus
        className={`${classes.inpClasses} name firstName`}
        onChange={ev =>
          setV(IOHandler.applyUpperCase(ev.currentTarget.value, 1))
        }
      />
    </div>
  );
}
