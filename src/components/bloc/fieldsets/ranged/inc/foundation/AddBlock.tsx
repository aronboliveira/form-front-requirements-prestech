"use client";
import useRole from "@/lib/client/hooks/useRole";
import { useRef, JSX, useEffect } from "react";
import { classes } from "@/lib/client/vars";
import { HasChildren } from "@/lib/definitions/client/interfaces/components";
import DefaultEntryBoundary from "@/components/bloc/errors/DefaultEntryBoundary";
import { nlDiv } from "@/lib/definitions/client/helpers";
import { Identifiable } from "@/lib/definitions/foundations";
import StringHelper from "@/lib/helpers/StringHelper";
import useRandomId from "@/lib/client/hooks/useRandomId";
export default function AddBlock({
  id = "",
  label = "",
  children = <></>,
  additional = <></>,
  cls = "",
  labCls = "",
}: Identifiable &
  HasChildren & {
    label: string;
    additional?: JSX.Element;
    cls?: string;
    labCls?: string;
  }) {
  const { role } = useRole(),
    r = useRef<nlDiv>(null),
    idf = StringHelper.capitalize(
      id ?? crypto.randomUUID()
    );
  useRandomId(r, id);
  useEffect(() => {
    if (!r.current) return;
    if (r.current.classList.contains("radiogroup"))
      r.current.role = "radiogroup";
    if (
      !r.current.querySelector(".fsMultipleCheckables") ||
      r.current.querySelectorAll('input[type="radio"]')
        .length < 3 ||
      r.current.querySelectorAll('input[type="checkbox"]')
        .length < 3
    ) {
      const lab = r.current.querySelector("label");
      if (lab) {
        ![...(lab.parentElement?.children ?? [])].some(
          e => e instanceof HTMLInputElement
        )
          ? (lab.style.marginBottom = "1rem")
          : (lab.style.marginBottom = "0.25rem");
      }
    }
  }, [r]);
  return (
    <DefaultEntryBoundary>
      {label ? (
        <div
          ref={r}
          id={`div${idf}`}
          className={`divAddRanged ${
            classes.inpDivClasses
          }${cls ? ` ${cls}` : ""}`}
          data-role={role}
        >
          <label
            htmlFor={id}
            id={`lab${idf}`}
            data-role={role}
            className={`labAddRanged ${
              classes.inpLabClasses
            }${labCls ? ` ${labCls}` : ""}`}
          >
            {label}
          </label>
          {children}
          {additional}
        </div>
      ) : (
        <></>
      )}
    </DefaultEntryBoundary>
  );
}
