import { AddInputBlock } from "@/lib/definitions/client/interfaces/components";
import DefaultEntryBoundary from "@/components/bloc/errors/DefaultEntryBoundary";
import useRole from "@/lib/client/hooks/useRole";
import { classes } from "@/lib/client/vars";
import { useReducer, useRef } from "react";
import IOHandler from "@/lib/client/handlers/IOHandler";
import { TelType } from "@/lib/definitions/foundations";
import { nlInp } from "@/lib/definitions/client/helpers";
import StringHelper from "@/lib/helpers/StringHelper";
export default function AddTextualInput({
  id,
  name,
  additional,
  type = "text",
  placeholder = "Escreva aqui",
  initial = "",
  telType = "local",
}: AddInputBlock & {
  type?:
    | "text"
    | "email"
    | "url"
    | "search"
    | "tel"
    | "password";
  placeholder?: string;
  initial?: string;
  telType?: TelType;
}) {
  if (
    ![
      "text",
      "email",
      "url",
      "search",
      "tel",
      "password",
    ].includes(type)
  )
    type = "text";
  const { role } = useRole(),
    r = useRef<nlInp>(null),
    [s, d] = useReducer(
      (state, action) => {
        switch (action.type) {
          case "email":
            if (r.current && !r.current.autocomplete)
              r.current.autocomplete = "email";
            return {
              value: IOHandler.applyFieldConstraints(
                IOHandler.applyEmailExtension(
                  action.payload
                ),
                r.current
              ),
            };
          case "url":
            try {
              new URL(action.payload);
              return {
                value: IOHandler.applyFieldConstraints(
                  action.payload
                ),
              };
            } catch {
              return state;
            }
          case "tel":
            if (r.current && !r.current.autocomplete) {
              if (r.current.classList.contains("cc"))
                r.current.autocomplete = "tel-country-code";
              else if (r.current.classList.contains("ddd"))
                r.current.autocomplete = "tel-area-code";
              else r.current.autocomplete = "tel-local";
            }
            return {
              value: IOHandler.applyFieldConstraints(
                IOHandler.applyTelExtension(
                  action.payload,
                  telType
                ),
                r.current
              ),
            };
          case "password":
          case "search":
          case "text":
            let newValue = StringHelper.capitalize(
              action.payload
            );
            if (r.current && !r.current.autocapitalize)
              r.current.autocapitalize = "sentences";
            return {
              value: IOHandler.applyFieldConstraints(
                newValue,
                r.current
              ),
            };
          default:
            return state;
        }
      },
      { value: initial }
    );
  return (
    <DefaultEntryBoundary>
      <input
        ref={r}
        id={id}
        name={name}
        type={type}
        className={`entryAddRanged textualInput ${classes.inpClasses}`}
        data-role={role}
        placeholder={placeholder}
        value={s.value}
        onChange={ev =>
          d({ type, payload: ev.currentTarget.value })
        }
      />
      {additional}
    </DefaultEntryBoundary>
  );
}
