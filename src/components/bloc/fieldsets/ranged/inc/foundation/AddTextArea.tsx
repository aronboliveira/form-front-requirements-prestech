"use client";
import useRole from "@/lib/client/hooks/useRole";
import { useState, useRef } from "react";
import { classes } from "@/lib/client/vars";
import { AddInputBlock } from "@/lib/definitions/client/interfaces/components";
import DefaultEntryBoundary from "@/components/bloc/errors/DefaultEntryBoundary";
import IOHandler from "@/lib/client/handlers/IOHandler";
import StringHelper from "@/lib/helpers/StringHelper";
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
          let v = ev.currentTarget.value;
          setV(() => {
            v = IOHandler.applyFieldConstraints(
              v,
              r.current
            );
            if (v.length === 1 || /^[a-z]/.test(v))
              v = StringHelper.capitalize(v);
            if (r.current && !r.current.autocapitalize)
              r.current.autocapitalize = "sentences";
            return v;
          });
        }}
      ></textarea>
      {additional}
    </DefaultEntryBoundary>
  );
}
