import { classes } from "@/lib/client/vars";
import { useRef, useEffect, useState } from "react";
import CompabilityValidator from "@/lib/client/validators/CompabilityValidator";
import IOHandler from "@/lib/client/handlers/IOHandler";
import { nlInp } from "@/lib/definitions/helpers";
import { autoCapitalizeInputs } from "@/lib/client/handlers/AutoCorrectHandler";
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
      <label className={classes.inpLabClasses}>Sobrenome</label>
      <input
        ref={r}
        value={v}
        name='last_name'
        required
        autoComplete='family-name'
        className={`${classes.inpClasses} name autocorrectAll`}
        onChange={ev =>
          ev.currentTarget.value.length === 1
            ? setV(IOHandler.applyUpperCase(ev.currentTarget.value, 1))
            : setV(autoCapitalizeInputs(ev.currentTarget))
        }
      />
    </div>
  );
}
