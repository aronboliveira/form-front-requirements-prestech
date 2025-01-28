"use client";
import useRole from "@/lib/client/hooks/useRole";
import { classes } from "@/lib/client/vars";
import { AddInputBlock } from "@/lib/definitions/client/interfaces/components";
import DefaultEntryBoundary from "@/components/bloc/errors/DefaultEntryBoundary";
import { useState } from "react";
export default function AddCheckable({
  id,
  name,
  type = "checkbox",
  additional = <></>,
}: AddInputBlock & { type: "radio" | "checkbox" }) {
  const { role } = useRole(),
    [v, setV] = useState<boolean>(false);
  return (
    <DefaultEntryBoundary>
      <input
        id={id}
        name={name}
        type={type}
        className={`entryAddRanged inpAddRanged inpCheckableRanged ${classes.inpClasses}`}
        data-role={role}
        checked={v}
        onChange={ev => setV(ev.currentTarget.checked)}
      />
      {additional}
    </DefaultEntryBoundary>
  );
}
