import { useState } from "react";
import IOHandler from "@/lib/client/handlers/IOHandler";
import { DDDPattern } from "@/lib/definitions/helpers";
import MathHandler from "@/lib/client/handlers/MathHandler";
import StyleHandler from "@/lib/client/handlers/StyleHandler";
import { OptInput } from "@/lib/definitions/client/interfaces/components";
export default function DDD({ required }: OptInput) {
  const [v, setV] = useState<DDDPattern>("21");
  return (
    <div>
      <label className='form-label'>DDD</label>
      <input
        value={v}
        type='number'
        className='form-control'
        autoComplete='tel-area-code'
        pattern='^[0-9]*$'
        required={required}
        min={11}
        max={99}
        minLength={2}
        maxLength={3}
        onChange={ev =>
          setV(prev => {
            const i = ev.currentTarget,
              curr = IOHandler.adjustTelDDD(i.value),
              prevNum = MathHandler.parseNotNaN(prev, 21, "int"),
              currNum = MathHandler.parseNotNaN(curr, 21, "int");
            if (
              Math.abs(currNum - prevNum) >
              (MathHandler.parseNotNaN(i.step, 1, "int") || 1)
            )
              StyleHandler.blurOnChange(i);
            return curr;
          })
        }
      />
    </div>
  );
}
