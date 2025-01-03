import IOHandler from "@/lib/client/handlers/IOHandler";
import { classes } from "@/lib/client/vars";
import { PseudoNum } from "@/lib/definitions/helpers";
import { patterns } from "@/lib/vars";
import { useState } from "react";
export default function Age() {
  const [v, setV] = useState<PseudoNum | "">("");
  return (
    <div>
      <label className={classes.inpLabClasses}>Idade</label>
      <input
        value={v}
        className={classes.inpClasses}
        minLength={1}
        maxLength={3}
        pattern={patterns.age}
        required
        type='number'
        onChange={ev =>
          setV(
            IOHandler.applyAgeContrainst(ev.currentTarget.value) as PseudoNum
          )
        }
      />
    </div>
  );
}
