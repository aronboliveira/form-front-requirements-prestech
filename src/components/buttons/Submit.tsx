"use client";
import DOMHandler from "@/lib/client/handlers/DOMHandler";
import SubmissionHandler from "@/lib/client/handlers/SubmissionHandler";
import useFormButton from "@/lib/client/hooks/useFormButton";
import { classes } from "@/lib/client/vars";
import { FormRelated } from "@/lib/definitions/client/interfaces/components";
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
        const [res, ok] = new DOMHandler(ev).evaluateClickMovements();
        if (ok) {
          toast.success(
            "Successfuly sent to the server. Waiting for response."
          );
          const form =
            ev.currentTarget.form ?? ev.currentTarget.closest("form");
          if (!form) return;
          SubmissionHandler.construct(form)
            .sendToServerWithAxios(
              "api/submit/route",
              {},
              { "Content-Type": "application/json" }
            )
            .then(res => {
              console.log(res);
            });
        } else toast.error(res);
      }}
    >
      <span>Enviar</span>
    </button>
  );
}
