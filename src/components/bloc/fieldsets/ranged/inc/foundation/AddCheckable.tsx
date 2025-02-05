"use client";
import useRole from "@/lib/client/hooks/useRole";
import { classes } from "@/lib/client/vars";
import { AddInputBlock } from "@/lib/definitions/client/interfaces/components";
import DefaultEntryBoundary from "@/components/bloc/errors/DefaultEntryBoundary";
import { useState, useEffect, useRef } from "react";
import s from "@/styles/modules/rangeCtx.module.scss";
import { nlInp } from "@/lib/definitions/client/helpers";
export default function AddCheckable({
  id,
  name,
  type = "checkbox",
  additional = <></>,
}: AddInputBlock & {
  type: "radio" | "checkbox";
}) {
  const { role } = useRole(),
    r = useRef<nlInp>(null),
    [v, setV] = useState<boolean>(false);
  useEffect(() => {
    if (!r.current) return;
    const relDiv = r.current.closest(".divAddRanged");
    if (!relDiv) return;
    if (relDiv.classList.contains(`${s.divCheckables}`))
      return;
    relDiv.classList.add(`${s.divCheckables}`);
  }, [r]);
  return (
    <DefaultEntryBoundary>
      <input
        ref={r}
        id={`${id}`}
        name={name}
        type={type}
        className={`entryAddRanged inpAddRanged inpCheckableRanged ${classes.inpCheckables} ${s.checkable}`}
        data-role={role}
        checked={v}
        onClick={ev => {
          const t = ev.currentTarget;
          setV(!t.checked);
        }}
        onChange={ev => setV(ev.currentTarget.checked)}
      />
      {additional}
    </DefaultEntryBoundary>
  );
}
