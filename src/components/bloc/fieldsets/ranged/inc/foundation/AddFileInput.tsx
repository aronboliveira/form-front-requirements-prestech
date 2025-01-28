"use client";
import useRole from "@/lib/client/hooks/useRole";
import { classes } from "@/lib/client/vars";
import { LimitedAddInputBlock } from "@/lib/definitions/client/interfaces/components";
import DefaultEntryBoundary from "@/components/bloc/errors/DefaultEntryBoundary";
import { useState } from "react";
export default function AddFileInput({
  id,
  name,
  additional = <></>,
  required = false,
  accept = "*/*",
  notaccepted = [],
  minlength = 0,
  maxlength = 1,
  min = 0,
  max = 1048576,
}: LimitedAddInputBlock & {
  accept?: HTMLInputElement["accept"];
  notaccepted?: HTMLInputElement["accept"][];
  minlength?: number;
  maxlength?: number;
  max?: number;
}) {
  const { role } = useRole(),
    [v, setV] = useState<boolean>(false);
  return (
    <DefaultEntryBoundary>
      <input
        id={id}
        name={name}
        required={required ?? false}
        type='file'
        className={`entryAddRanged inpAddRanged inpCheckableRanged ${classes.inpClasses}`}
        data-role={role}
        data-min={min ? Math.abs(min) : required ? 1 : 0}
        data-max={Math.abs(max)}
        data-notaccepted={notaccepted.length ? "" : notaccepted.join(", ")}
        data-minlength={Math.abs(minlength)}
        data-maxlength={Math.abs(maxlength)}
        accept={accept}
        checked={v}
        onChange={ev => setV(ev.currentTarget.checked)}
      />
      {additional}
    </DefaultEntryBoundary>
  );
}
