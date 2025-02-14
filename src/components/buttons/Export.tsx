"use client";
import DOMHandler from "@/lib/client/handlers/DOMHandler";
import SubmissionHandler from "@/lib/client/handlers/SubmissionHandler";
import useFormButton from "@/lib/client/hooks/useFormButton";
import { classes, flags } from "@/lib/client/vars";
import { FormRelated } from "@/lib/definitions/client/interfaces/components";
import { useRouter } from "next/navigation";
import {
  RefObject,
  useCallback,
  useRef,
  useState,
} from "react";
import { toast } from "react-hot-toast";
import {
  disableableElement,
  nlFm,
} from "@/lib/definitions/client/helpers";
import promptToast from "../bloc/toasts/PromptToast";
import DOMValidator from "@/lib/client/validators/DOMValidator";
import Spinner from "../bloc/transicional/Spinner";
export default function Export({ form }: FormRelated) {
  const id = "btnSubmit",
    r = useFormButton({ form, idf: id }),
    [isTransitioning, setTransition] =
      useState<boolean>(false);
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
            "radial-gradient(circle at bottom left, #0278ff, #619df7)",
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
        <span>Enviar</span>
      </button>
    </>
  );
}
