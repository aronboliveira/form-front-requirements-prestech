import { classes } from "@/lib/client/vars";
import { useRef, useEffect, useState } from "react";
import CompabilityValidator from "@/lib/client/validators/CompabilityValidator";
import IOHandler from "@/lib/client/handlers/IOHandler";
import { nlInp } from "@/lib/definitions/helpers";
export default function LastName() {
  const r = useRef<nlInp>(null);
  const [v, setV] = useState<string>("");
  useEffect(() => {
    if (!(r.current instanceof HTMLInputElement)) return;
    if (!CompabilityValidator.isSafari())
      r.current.autocapitalize = "sentences";
  }, [r]);
  return (
    <div className={classes.inpDivClasses}>
      <label className={classes.inpLabClasses}>Último Nome</label>
      <input
        ref={r}
        value={v}
        required
        autoComplete='family-name'
        className={`${classes.inpClasses} name`}
        onChange={ev =>
          IOHandler.applyUpperCase(ev.currentTarget.value, setV, 1)
        }
      />
    </div>
  );
}
