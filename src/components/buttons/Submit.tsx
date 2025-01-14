"use client";
import SubmissionHandler from "@/lib/client/handlers/SubmissionHandler";
import useFormButton from "@/lib/client/hooks/useFormButton";
import { classes } from "@/lib/client/vars";
import { FormRelated } from "@/lib/definitions/client/interfaces/components";
import { RefObject } from "react";
import {} from "@/app/api/submit/route";
export default function Submit({ form }: FormRelated) {
  const id = "btnSubmit",
    r = useFormButton({ form, idf: id });
  return (
    <button
      ref={r as RefObject<HTMLButtonElement>}
      type='button'
      id={id}
      className={classes.btnPrim}
      onClick={() =>
        SubmissionHandler.sendToServerWithAxios(
          "api/submit/route",
          {}, //TODO MAPPEAR DATA
          { "Content-Type": "application/json" }
        ).then(res => {})
      }
    >
      <span>Enviar</span>
    </button>
  );
}
