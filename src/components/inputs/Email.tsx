import { nlInp } from "@/lib/definitions/helpers";
import { IEmailInput } from "@/lib/definitions/client/interfaces/components";
import IOHandler from "@/lib/client/handlers/IOHandler";
import { classes } from "@/lib/client/vars";
import { limits, patterns } from "@/lib/vars";
import { useState, useEffect, useRef } from "react";
import StyleHandler from "@/lib/client/handlers/StyleHandler";
export default function Email({ required = false }: IEmailInput) {
  const [v, setV] = useState<string>("");
  const r = useRef<nlInp>(null);
  useEffect(() => {
    if (!(r.current instanceof HTMLInputElement)) return;
    if (r.current.value.startsWith("@")) {
      StyleHandler.blurOnChange(r.current);
      r.current.setSelectionRange(0, 0);
    }
  }, [r, v]);
  return (
    <div className={classes.inpDivClasses}>
      <label className={classes.inpLabClasses}>E-mail</label>
      <input
        value={v}
        ref={r}
        type='email'
        autoComplete='email'
        minLength={8}
        maxLength={limits.small.MAX_UTF_16_SIGNED_SURROGATE}
        pattern={patterns.email}
        required={required ? true : false}
        className={classes.inpClasses}
        onChange={ev =>
          setV(IOHandler.applyEmailExtension(ev.currentTarget.value))
        }
        onClick={ev =>
          setV(IOHandler.applyEmailExtension(ev.currentTarget.value))
        }
      />
    </div>
  );
}
