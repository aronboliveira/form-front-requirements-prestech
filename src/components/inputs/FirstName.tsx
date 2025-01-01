import { nlInp } from "@/lib/definitions/helpers";
import IOHandler from "@/lib/client/handlers/IOHandler";
import CompabilityValidator from "@/lib/client/validators/CompabilityValidator";
import { classes } from "@/lib/client/vars";
import { useEffect, useRef, useState } from "react";
export default function FirstName() {
  const r = useRef<nlInp>(null);
  const [v, setV] = useState<string>("");
  useEffect(() => {
    if (!(r.current instanceof HTMLInputElement)) return;
    if (!CompabilityValidator.isSafari()) r.current.autocapitalize = "words";
  }, [r]);
  return (
    <div className={classes.inpDivClasses}>
      <label className={classes.inpLabClasses}>Primeiro Nome</label>
      <input
        ref={r}
        value={v}
        name='first_name'
        required
        autoComplete='given-name'
        autoFocus
        className={`${classes.inpClasses} name firstName`}
        onChange={ev =>
          setV(IOHandler.applyUpperCase(ev.currentTarget.value, 1))
        }
      />
    </div>
  );
}
