"use client";
import DOMHandler from "@/lib/client/handlers/DOMHandler";
import SubmissionHandler from "@/lib/client/handlers/SubmissionHandler";
import useFormButton from "@/lib/client/hooks/useFormButton";
import { classes, flags } from "@/lib/client/vars";
import { FormRelated } from "@/lib/definitions/client/interfaces/components";
import { IFormCtx } from "@/lib/definitions/client/interfaces/contexts";
import { useRouter } from "next/navigation";
import { RefObject, useCallback, useContext } from "react";
import { toast } from "react-hot-toast";
import { FormCtx } from "../forms/RequirementForm";
import { disableableElement } from "@/lib/definitions/client/helpers";
import promptToast from "../bloc/toasts/PromptToast";
import DOMValidator from "@/lib/client/validators/DOMValidator";
export default function Submit({ form }: FormRelated) {
  const id = "btnSubmit",
    r = useFormButton({ form, idf: id }),
    router = useRouter(),
    ctx = useContext<IFormCtx>(FormCtx),
    handleClick = useCallback(
      (el: disableableElement): void => {
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
                    toast.error(
                      flags.pt ? `Erro: ${cause}` : `Error: ${cause}`
                    );
                  } else sessionStorage.removeItem("isHttp");
                })()
              : (() => {
                  toast.success(
                    flags.pt
                      ? "O formulário foi validado e submetido. Por favor, aguarde..."
                      : "The form was validated and submitted. Please wait..."
                  );
                  setTimeout(
                    () => router.push("/success", { scroll: true }),
                    2000
                  );
                  setTimeout(router.back, 5000);
                })();
          });
      },
      [form]
    ),
    handleRes = useCallback(
      (res: boolean, el: disableableElement, changed: string[]): void => {
        res
          ? handleClick(el)
          : toast(flags.pt ? `CAPTCHA falhou` : `CAPTCHA failed`, {
              icon: "📑",
            });
        for (const idf of changed) {
          const e = DOMHandler.queryByUniqueName(idf);
          if (!e) continue;
          if (DOMValidator.isDefaultDisableable(e)) e.disabled = false;
          else e.dataset.disabled = "false";
        }
      },
      [flags.pt]
    ),
    handleDisable = useCallback(
      (changed: string[]): void => {
        if (!form?.isConnected) {
          if (!r.current) {
            r.current = document.getElementById(id) as HTMLButtonElement;
            if (!r.current) return;
          }
          form = r.current.form ?? r.current.closest("form");
        }
        if (!form?.isConnected) return;
        for (const e of form.elements) {
          const idf = DOMHandler.getIdentifier(e);
          if (!DOMValidator.isDefaultDisableable(e)) continue;
          if (!idf || (idf && !e.disabled)) {
            e.disabled = true;
            idf && changed.push(idf);
          }
        }
        for (const e of form.querySelectorAll(".customRole")) {
          const idf = DOMHandler.getIdentifier(e);
          if (!DOMValidator.isCustomDisableable(e)) continue;
          if (!idf || (idf && !e.dataset.disabled)) {
            e.dataset.disabled = "true";
            idf && changed.push(idf);
          }
        }
      },
      [form]
    ),
    check = async (): Promise<boolean> => {
      const msg = await promptToast(
        "Escreva CONFIRMAR para finalizar",
        "Escreva aqui"
      );
      return /confirm/gi.test(msg);
    },
    setTransition = ctx.setTransition || null;
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
        const el = ev.currentTarget,
          changed: string[] = [];
        if (setTransition)
          setTransition(() => {
            setTimeout(() => {
              handleDisable(changed);
              check().then(res => handleRes(res, el, changed));
            }, 500);
          });
        else {
          handleDisable(changed);
          check().then(res => handleRes(res, el, changed));
        }
      }}
    >
      <span>Enviar</span>
    </button>
  );
}
