"use client";
import DOMHandler from "@/lib/client/handlers/DOMHandler";
import SubmissionHandler from "@/lib/client/handlers/SubmissionHandler";
import useFormButton from "@/lib/client/hooks/useFormButton";
import { classes, flags } from "@/lib/client/vars";
import { FormRelated } from "@/lib/definitions/client/interfaces/components";
import { IFormCtx } from "@/lib/definitions/client/interfaces/contexts";
import { useRouter } from "next/navigation";
import { RefObject, useContext } from "react";
import { toast } from "react-hot-toast";
import { FormCtx } from "../forms/RequirementForm";
import { disableableElement } from "@/lib/definitions/client/helpers";
import promptToast from "../bloc/toasts/PromptToast";
export default function Submit({ form }: FormRelated) {
  const id = "btnSubmit",
    r = useFormButton({ form, idf: id }),
    router = useRouter(),
    ctx = useContext<IFormCtx>(FormCtx),
    handleClick = (el: disableableElement): void => {
      const tId = toast.success(
        flags.pt
          ? "Submissão validada. Esperando resposta..."
          : "Successfuly validated. Waiting for response..."
      );
      setTimeout(() => toast.dismiss(tId), 750);
      if (!el || !el.isConnected)
        el = document.getElementById(id) as HTMLButtonElement;
      if (!el) return;
      const form = el.form ?? el.closest("form");
      if (!form) return;
      SubmissionHandler.construct(form)
        .submit("sendRequirements")
        .then(({ ok, cause }) => {
          !ok
            ? (() => {
                const isHttp = sessionStorage.getItem("isHttp");
                if (!isHttp) {
                  toast.dismiss();
                  toast.error(flags.pt ? `Erro: ${cause}` : `Error: ${cause}`);
                } else sessionStorage.removeItem("isHttp");
              })()
            : (() => {
                toast.success(
                  flags.pt
                    ? "O formulário foi validado e submetido. Por favor, aguarde..."
                    : "The form was validated and submitted. Please wait..."
                );
                router.push("/success", { scroll: true });
                setTimeout(router.back, 3000);
              })();
        });
    },
    check = async (): Promise<boolean> => {
      const msg = await promptToast(
        "Você confirma o envio dos dados?",
        "Escreva aqui"
      );
      return msg.includes("confirm");
    };
  const setTransition = ctx.setTransition || null;
  return (
    <button
      ref={r as RefObject<HTMLButtonElement>}
      type='button'
      id={id}
      className={classes.btnPrim}
      onMouseEnter={() => router.prefetch("/success")}
      onClick={ev => {
        const [res, suspicious] = new DOMHandler(ev).evaluateClickMovements();
        if (suspicious) {
          toast.error(res);
          return;
        }
        const el = ev.currentTarget;
        if (setTransition)
          setTransition(() => {
            setTimeout(() => {
              check().then(res => {
                res
                  ? handleClick(el)
                  : toast(flags.pt ? `CAPTCHA falhou` : `CAPTCHA failed`, {
                      icon: "📑",
                    });
              });
            }, 500);
          });
        else
          check().then(res => {
            res
              ? handleClick(el)
              : toast(flags.pt ? `CAPTCHA falhou` : `CAPTCHA failed`, {
                  icon: "📑",
                });
          });
      }}
    >
      <span>Enviar</span>
    </button>
  );
}
