"use client";
import useRole from "@/lib/client/hooks/useRole";
import { classes } from "@/lib/client/vars";
import { AddInputBlock } from "@/lib/definitions/client/interfaces/components";
import DefaultEntryBoundary from "@/components/bloc/errors/DefaultEntryBoundary";
import { useState } from "react";
export default function DefAppRangedInp({
  id,
  name,
  additional,
}: AddInputBlock) {
  const { role } = useRole(),
    [v, setV] = useState<string>();
  return (
    <DefaultEntryBoundary>
      <input
        id={id}
        name={name}
        className={`entryAddRanged inpAddRanged ${classes.inpClasses}`}
        data-role={role}
        value={v}
        onChange={ev => setV(ev.currentTarget.value)}
      />
      {additional}
    </DefaultEntryBoundary>
  );
}
