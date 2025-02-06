"use client";
import useRole from "@/lib/client/hooks/useRole";
import { classes } from "@/lib/client/vars";
import { AddInputBlock } from "@/lib/definitions/client/interfaces/components";
import DefaultEntryBoundary from "@/components/bloc/errors/DefaultEntryBoundary";
import { useState, useEffect, useRef } from "react";
import s from "@/styles/modules/rangeCtx.module.scss";
import { nlInp } from "@/lib/definitions/client/helpers";
import DOMValidator from "@/lib/client/validators/DOMValidator";
export default function AddCheckable({
  id,
  name,
  type = "checkbox",
  additional = <></>,
  multiple = false,
}: AddInputBlock & {
  type: "radio" | "checkbox" | "toggle";
  multiple?: boolean;
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
  useEffect(() => {
    if (!r.current) return;
    r.current.style.transform = "translate(0, 0)";
  }, []);
  useEffect(() => {
    if (!r.current || r.current.role !== "switch") return;
    const fs = r.current.closest("fieldset"),
      id = r.current.id;
    if (!fs) return;
    [...fs.elements]
      .filter(e => DOMValidator.isDefaultEntry(e))
      .filter(e => e.id !== id)
      .forEach(e => {
        if (!DOMValidator.isDefaultEntry(e)) return;
        e.disabled = !!(r.current && r.current.checked);
        e.classList.toggle("disabled");
        DOMValidator.isDefaultCheckable(e) &&
          (e.checked = false);
      });
  }, [v]);
  return (
    <DefaultEntryBoundary>
      <input
        ref={r}
        id={`${id}`}
        name={name}
        type={type === "radio" ? "radio" : "checkbox"}
        role={type === "toggle" ? "switch" : type}
        className={`entryAddRanged inpAddRanged inpCheckableRanged ${classes.inpCheckables} ${s.checkable}`}
        data-role={role}
        checked={v}
        onClick={ev => {
          const t = ev.currentTarget;
          if (t.checked && multiple) setV(false);
        }}
        onChange={ev => {
          const t = ev.currentTarget;
          console.log("CHANGE " + ev.currentTarget.checked);
          multiple
            ? setV(t.checked)
            : setV(prev =>
                prev === t.checked ? !prev : t.checked
              );
        }}
      />
      {additional}
    </DefaultEntryBoundary>
  );
}
