"use client";
import { classes } from "@/lib/client/vars";
import promptToast from "../bloc/toasts/PromptToast";
import { nlBtn, nlFm } from "@/lib/definitions/client/helpers";
import { useEffect, useRef } from "react";
import useToast from "@/lib/client/hooks/useToast";
export default function Reset({ form }: { form?: nlFm }) {
  const r = useRef<nlBtn>(null),
    id = "btnReset";
  useEffect(() => {
    if (!(r.current instanceof HTMLButtonElement)) return;
    form ??= r.current.form;
  }, [r]);
  useToast({ id: undefined, enterBtnId: id });
  return (
    <button
      ref={r}
      type='button'
      id={id}
      className={classes.btnSec}
      onClick={() => {
        promptToast(
          navigator.language.startsWith("pt-")
            ? "Tem certeza que deseja resetar o formulário?"
            : "Are you sure you want to reset o formulário?",
          navigator.language.startsWith("pt-")
            ? "Escreva Y aqui"
            : "Type Y here"
        ).then(s => s === "Y" && form?.reset());
      }}
    >
      Resetar
    </button>
  );
}
