import IOHandler from "@/lib/client/handlers/IOHandler";
import StyleHandler from "@/lib/client/handlers/StyleHandler";
import { classes } from "@/lib/client/vars";
import { ITelInput } from "@/lib/definitions/client/interfaces/components";
import { ValidPhonePattern, nlInp } from "@/lib/definitions/helpers";
import { useEffect, useState, useRef } from "react";
export default function Tel({
  required = false,
  type = "complete",
  label = "Telefone",
}: ITelInput) {
  const [v, setV] = useState<ValidPhonePattern | "">(""),
    r = useRef<nlInp>(null);
  useEffect(() => {
    const i = r.current;
    if (!(i instanceof HTMLInputElement)) return;
    const val = i.value;
    if (val.endsWith("-") || val.endsWith(" ")) {
      StyleHandler.blurOnChange(i);
      i.style;
      i.setSelectionRange(val.length, val.length);
    }
  }, [v, r]);
  return (
    <div className={classes.inpDivClasses}>
      <label className={classes.inpLabClasses}>{label}</label>
      <input
        value={v}
        ref={r}
        type='tel'
        name='tel'
        autoComplete={(() => {
          switch (type) {
            case "national":
              return "tel-national";
            case "local":
              return "tel-local";
            default:
              return "tel";
          }
        })()}
        required={required ? true : false}
        className={classes.inpClasses}
        onChange={ev =>
          setV(
            IOHandler.applyTelExtension(
              ev.currentTarget.value,
              type
            ) as ValidPhonePattern
          )
        }
      />
    </div>
  );
}
