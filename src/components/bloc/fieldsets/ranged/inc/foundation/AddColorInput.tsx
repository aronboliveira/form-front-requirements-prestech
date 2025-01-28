import useRole from "@/lib/client/hooks/useRole";
import { AddInputBlock } from "@/lib/definitions/client/interfaces/components";
import { useState } from "react";
import DefaultEntryBoundary from "@/components/bloc/errors/DefaultEntryBoundary";
import { classes } from "@/lib/client/vars";
import { PseudoNum, color } from "@/lib/definitions/foundations";
import IOHandler from "@/lib/client/handlers/IOHandler";
export default function AddColorInput({
  id,
  name,
  min = "0",
  max = "16777215",
  additional = <></>,
  initialValue = "#000000",
}: AddInputBlock & {
  initialValue?: color;
  min?: PseudoNum;
  max?: PseudoNum;
}) {
  const { role } = useRole(),
    [v, setV] = useState<color>(initialValue);
  return (
    <DefaultEntryBoundary>
      <input
        id={id}
        name={name}
        type='color'
        className={`entryAddRanged colorInput ${classes.inpClasses}`}
        data-role={role}
        data-min={min}
        value={v}
        onChange={ev =>
          setV(
            IOHandler.applyColorNumRules({
              v: ev.currentTarget.value as color,
              min,
              max,
            })
          )
        }
      />
      {additional}
    </DefaultEntryBoundary>
  );
}
