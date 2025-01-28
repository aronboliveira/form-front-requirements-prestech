"use client";
import useRole from "@/lib/client/hooks/useRole";
import { useState, useRef } from "react";
import { classes } from "@/lib/client/vars";
import { AddInputBlock } from "@/lib/definitions/client/interfaces/components";
import DefaultEntryBoundary from "@/components/bloc/errors/DefaultEntryBoundary";
import IOHandler from "@/lib/client/handlers/IOHandler";
export default function AddTextArea({
  id,
  name,
  additional = <></>,
  ini = "",
}: AddInputBlock & { ini?: string }) {
  const { role } = useRole(),
    r = useRef<HTMLTextAreaElement>(null),
    [v, setV] = useState<string>(ini);
  return (
    <DefaultEntryBoundary>
      <textarea
        ref={r}
        id={id}
        name={name}
        className={`entryAddRanged textAddRanged ${classes.inpClasses}`}
        data-role={role}
        value={v}
        onChange={ev => {
          const v = ev.currentTarget.value;
          setV(IOHandler.applyFieldConstraints(v, r.current));
        }}
      ></textarea>
      {additional}
    </DefaultEntryBoundary>
  );
}
