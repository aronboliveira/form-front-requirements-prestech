import { useContext, useState } from "react";
import { LocalizedTelCtx } from "../bloc/fieldsets/LocalizedTelFs";
import { ILocalizedTelCtx } from "@/lib/definitions/client/interfaces/contexts";
import IOHandler from "@/lib/client/handlers/IOHandler";
import { DDDPattern } from "@/lib/definitions/helpers";
import MathHandler from "@/lib/client/handlers/MathHandler";
import StyleHandler from "@/lib/client/handlers/StyleHandler";
export default function DDD() {
  const ctx = useContext<ILocalizedTelCtx>(LocalizedTelCtx),
    [v, setV] = useState<DDDPattern>("21");
  return (
    <input
      value={v}
      type='number'
      autoComplete='tel-area-code'
      pattern='^[0-9]*$'
      required={ctx?.required || false}
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
  );
}
