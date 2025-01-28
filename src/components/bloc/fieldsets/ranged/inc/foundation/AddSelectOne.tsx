"use client";
import useRole from "@/lib/client/hooks/useRole";
import { classes } from "@/lib/client/vars";
import { AddInputBlock } from "@/lib/definitions/client/interfaces/components";
import DefaultEntryBoundary from "@/components/bloc/errors/DefaultEntryBoundary";
import { useState } from "react";
export default function AddSelectOne({
  id,
  name,
  additional = <></>,
  descendants = <></>,
}: AddInputBlock) {
  const { role } = useRole(),
    [v, setV] = useState<string>();
  return (
    <DefaultEntryBoundary>
      <select
        id={id}
        name={name}
        className={`entryAddRanged selectAddRanged selectOne ${classes.inpClasses}`}
        data-role={role}
        data-type='select-one'
        value={v}
        onChange={ev => setV(ev.currentTarget.value)}
      >
        {descendants}
      </select>
      {additional}
    </DefaultEntryBoundary>
  );
}
