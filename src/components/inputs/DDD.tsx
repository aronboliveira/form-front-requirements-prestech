import { useState } from "react";
import IOHandler from "@/lib/client/handlers/IOHandler";
import { DDDPattern } from "@/lib/definitions/helpers";
import MathHandler from "@/lib/client/handlers/MathHandler";
import StyleHandler from "@/lib/client/handlers/StyleHandler";
import { OptInput } from "@/lib/definitions/client/interfaces/components";
import { classes } from "@/lib/client/vars";
export default function DDD({ required }: OptInput) {
  const [v, setV] = useState<DDDPattern>("21"),
    id = "ddd";
  return (
    <div className='dddBlock'>
      <label className={classes.inpLabClasses} htmlFor={id}>
        DDD
      </label>
      <input
        value={v}
        name={id}
        id={id}
        type='number'
        className={classes.inpClasses}
        autoComplete='tel-area-code'
        pattern='^[0-9]{2,}$'
        required={required}
        min={11}
        max={99}
        minLength={2}
        maxLength={3}
        onChange={ev => {
          const i = ev.currentTarget;
          setV(prev => {
            const prevNum = MathHandler.parseNotNaN(prev, 11, "int"),
              curr = IOHandler.adjustTelDDD(
                i.value,
                MathHandler.parseNotNaN(i.value, 11, "int") > prevNum
              ),
              currNum = MathHandler.parseNotNaN(curr, 11, "int");
            if (
              Math.abs(currNum - prevNum) >
              (MathHandler.parseNotNaN(i.step, 1, "int") || 1)
            )
              StyleHandler.blurOnChange(i);
            return curr;
          });
        }}
      />
    </div>
  );
}
