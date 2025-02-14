"use client";
import DOMHandler from "@/lib/client/handlers/DOMHandler";
import useFormButton from "@/lib/client/hooks/useFormButton";
import { classes } from "@/lib/client/vars";
import { FormRelated } from "@/lib/definitions/client/interfaces/components";
import { RefObject, useState } from "react";
import { toast } from "react-hot-toast";
import Spinner from "../bloc/transicional/Spinner";
export default function Export({ form }: FormRelated) {
  const id = "btnExport",
    r = useFormButton({ form, idf: id }),
    [isTransitioning, _] = useState<boolean>(false);
  return (
    <>
      {isTransitioning && <Spinner fs={true} />}
      <button
        ref={r as RefObject<HTMLButtonElement>}
        type='button'
        id={id}
        className={classes.btnPrim}
        style={{
          background:
            "radial-gradient(circle at bottom left, #779485, #2b8a46)",
          borderColor: "#2b8a4614",
        }}
        onClick={ev => {
          const [res, suspicious] = new DOMHandler(
            ev
          ).evaluateClickMovements();
          if (suspicious) {
            toast.error(res);
            return;
          }
        }}
      >
        <span>Exportar</span>
      </button>
    </>
  );
}
