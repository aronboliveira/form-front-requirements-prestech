import { LimitedAddInputBlock } from "@/lib/definitions/client/interfaces/components";
import DefaultEntryBoundary from "@/components/bloc/errors/DefaultEntryBoundary";
import { classes } from "@/lib/client/vars";
import useRole from "@/lib/client/hooks/useRole";
import { useReducer, useRef } from "react";
import IOHandler from "@/lib/client/handlers/IOHandler";
import { nlInp } from "@/lib/definitions/client/helpers";
import useRandomId from "@/lib/client/hooks/useRandomId";
export default function AddNumericInput({
  id,
  name,
  additional,
  type = "number",
  min = 0,
  max,
  step = "1",
  initialValue = 0,
}: Omit<LimitedAddInputBlock, "type"> & {
  type: "number" | "range";
  initialValue?: number;
}) {
  const normalizedMax = max
    ? max
    : type === "range"
    ? 100
    : Number.MAX_SAFE_INTEGER;
  const { role } = useRole(),
    r = useRef<nlInp>(null),
    [s, d] = useReducer(
      (
        state: { value: number },
        a: { type: typeof type; payload: number }
      ): {
        value: number;
      } => {
        switch (a.type) {
          case "number":
            return Number.isFinite(a.payload)
              ? {
                  value: IOHandler.applyTrueNumRules({
                    v: a.payload,
                    min,
                    max: normalizedMax,
                  }),
                }
              : state;
          case "range":
            return Number.isFinite(a.payload)
              ? {
                  value: IOHandler.applyTrueNumRules({
                    v: a.payload,
                    min,
                    max: normalizedMax,
                    type: "whole",
                    positive: true,
                  }),
                }
              : state;
          default:
            return state;
        }
      },
      { value: initialValue }
    );
  useRandomId(r, id);
  return (
    <DefaultEntryBoundary>
      <input
        ref={r}
        id={id}
        name={name}
        type={type}
        className={`entryAddRanged numericAddInput ${type}AddInput ${classes.inpClasses}`}
        data-role={role}
        min={min}
        max={max}
        step={step}
        value={s.value}
        onChange={ev => {
          const value = Number(ev.currentTarget.value);
          value >= min &&
            value <= normalizedMax &&
            d({ type, payload: value });
        }}
      />
      {additional}
    </DefaultEntryBoundary>
  );
}
