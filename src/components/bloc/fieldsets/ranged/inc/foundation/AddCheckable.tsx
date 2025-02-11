"use client";
import useRole from "@/lib/client/hooks/useRole";
import { classes } from "@/lib/client/vars";
import { AddInputBlock } from "@/lib/definitions/client/interfaces/components";
import DefaultEntryBoundary from "@/components/bloc/errors/DefaultEntryBoundary";
import { useState, useEffect, useRef } from "react";
import s from "@/styles/modules/rangeCtx.module.scss";
import { nlInp } from "@/lib/definitions/client/helpers";
import DOMValidator from "@/lib/client/validators/DOMValidator";
import useRandomId from "@/lib/client/hooks/useRandomId";
export default function AddCheckable({
  id,
  name,
  multiple,
  type = "checkbox",
  additional = <></>,
}: Omit<AddInputBlock, "type"> & {
  type: "radio" | "checkbox" | "toggle";
  multiple?: boolean;
}) {
  const { role } = useRole(),
    r = useRef<nlInp>(null),
    [v, setV] = useState<boolean>(false);
  useRandomId(r, id);
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
    const d = r.current.closest(".divAddRanged");
    if (multiple || !(d instanceof HTMLElement)) return;
    d.style.marginLeft = "1.25rem";
  }, [r]);
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
        style={
          type === "toggle"
            ? { transform: "translate(0, -1px)" }
            : {}
        }
        data-role={role}
        checked={
          multiple && type !== "toggle" ? v : undefined
        }
        onClick={ev => {
          if (type === "toggle") return;
          const t = ev.currentTarget;
          if (t.checked && multiple) {
            t.checked = false;
            setV(false);
          }
          if (!multiple) {
            const ref =
              t.closest('[role="radiogroup"') ||
              t.closest(".radiogroup") ||
              document;
            ref
              .querySelectorAll(`[name=${t.name}]`)
              .forEach(r => {
                if (DOMValidator.isDefaultCheckable(r))
                  r.checked = false;
              });
            t.checked = true;
            setV(true);
          }
        }}
        onChange={ev => {
          const t = ev.currentTarget;
          multiple && setV(!t.checked);
        }}
      />
      {additional}
    </DefaultEntryBoundary>
  );
}
