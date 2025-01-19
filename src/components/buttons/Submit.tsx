"use client";
import DOMHandler from "@/lib/client/handlers/DOMHandler";
import SubmissionHandler from "@/lib/client/handlers/SubmissionHandler";
import useFormButton from "@/lib/client/hooks/useFormButton";
import { classes, flags } from "@/lib/client/vars";
import { FormRelated } from "@/lib/definitions/client/interfaces/components";
import { redirect } from "next/navigation";
import { RefObject } from "react";
import { toast } from "react-hot-toast";
export default function Submit({ form }: FormRelated) {
  const id = "btnSubmit",
    r = useFormButton({ form, idf: id });
  return (
    <button
      ref={r as RefObject<HTMLButtonElement>}
      type='button'
      id={id}
      className={classes.btnPrim}
      onClick={ev => {
        const [res, suspicious] = new DOMHandler(ev).evaluateClickMovements();
        if (!suspicious) {
          toast.success(
            flags.pt
              ? "Submissão validada. Esperando resposta..."
              : "Successfuly validated. Waiting for response..."
          );
          const form =
            ev.currentTarget.form ?? ev.currentTarget.closest("form");
          if (!form) return;
          const { ok, cause } =
            SubmissionHandler.construct(form).submit("api/submit/route");
          !ok
            ? toast.error(flags.pt ? `Erro: ${cause}` : `Error: ${cause}`)
            : (() => {
                toast.success(
                  flags.pt
                    ? "O formulário foi validado e submetido. Por favor, aguarde..."
                    : "The form was validated and submitted. Please wait..."
                );
                redirect("/success");
              })();
        } else toast.error(res);
      }}
    >
      <span>Enviar</span>
    </button>
  );
}
