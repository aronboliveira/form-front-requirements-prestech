import IOHandler from "@/lib/client/handlers/IOHandler";
import { classes } from "@/lib/client/vars";
import { PseudoNum, nlInp } from "@/lib/definitions/helpers";
import { limits, patterns } from "@/lib/vars";
import { useState, useEffect, useRef } from "react";
export default function Age() {
  const [v, setV] = useState<PseudoNum | "">(""),
    r = useRef<nlInp>(null),
    id = "age",
    maxLength = 3;
  useEffect(() => IOHandler.syncLabel(r.current), [r, v]);
  return (
    <div className={`${classes.inpDivClasses}`}>
      <label className={classes.inpLabClasses} htmlFor={id}>
        Idade
      </label>
      <input
        ref={r}
        value={v}
        className={classes.inpClasses}
        name={id}
        id={id}
        minLength={1}
        maxLength={maxLength}
        min={0}
        max={limits.tiny.MAX_UTF_16_SIGNED_NOTSURROGATE}
        pattern={patterns.age}
        required
        type='number'
        onChange={ev =>
          setV(
            IOHandler.applyNumRules(
              ev.currentTarget.value,
              maxLength,
              limits.tiny.MAX_UTF_16_SIGNED_NOTSURROGATE
            ) as PseudoNum
          )
        }
      />
    </div>
  );
}
