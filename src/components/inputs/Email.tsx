"use client";
import { nlInp } from "@/lib/definitions/client/helpers";
import { IEmailInput } from "@/lib/definitions/client/interfaces/components";
import IOHandler from "@/lib/client/handlers/IOHandler";
import { classes, flags } from "@/lib/client/vars";
import { limits, patterns } from "@/lib/vars";
import { useState, useEffect, useRef } from "react";
import StyleHandler from "@/lib/client/handlers/StyleHandler";
export default function Email({
  required = false,
  label = "E-mail",
  id,
}: IEmailInput) {
  const [v, setV] = useState<string>("");
  const r = useRef<nlInp>(null);
  id ||= "email";
  useEffect(() => {
    if (!(r.current instanceof HTMLInputElement)) return;
    if (r.current.value.startsWith("@")) StyleHandler.blurOnChange(r.current);
    IOHandler.syncLabel(r.current);
    required && StyleHandler.alarmBorder(r.current);
  }, [r, v]);
  return (
    <div className={classes.inpDivClasses}>
      <label className={classes.inpLabClasses} htmlFor={id}>
        {label}
      </label>
      <input
        value={v}
        ref={r}
        id={id}
        name={id}
        type='email'
        autoComplete='email'
        minLength={8}
        maxLength={limits.small.MAX_UTF_16_SIGNED_SURROGATE}
        pattern={patterns.email}
        required={required ? true : false}
        className={classes.inpClasses}
        onChange={ev => {
          const t = ev.currentTarget;
          flags.isAutoCorrectOn
            ? setV(IOHandler.applyEmailExtension(t.value))
            : setV(t.value);
        }}
        onClick={ev => {
          const t = ev.currentTarget;
          flags.isAutoCorrectOn
            ? setV(IOHandler.applyEmailExtension(t.value))
            : setV(t.value);
        }}
      />
    </div>
  );
}
