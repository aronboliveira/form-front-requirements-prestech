import { useCallback, useEffect, useRef } from "react";
import { toast } from "react-hot-toast";
import DOMValidator from "../validators/DOMValidator";
import { nlBtn } from "@/lib/definitions/client/helpers";
import DOMHandler from "../handlers/DOMHandler";
export default function useToast({
  id,
  enterBtnId,
}: {
  id?: string;
  enterBtnId: string;
}) {
  const enterBtn = useRef<nlBtn>(null);
  const handleEsc = useCallback(
      (ev: KeyboardEvent): void => {
        if (ev.key !== "Escape") return;
        toast.dismiss(id);
      },
      [id]
    ),
    handleEnter = useCallback(
      (ev: KeyboardEvent): void => {
        if (
          ev.key !== "Enter" ||
          !enterBtn ||
          !DOMValidator.isButton(enterBtn.current as any)
        )
          return;
        enterBtn.current?.click();
      },
      [enterBtn]
    ),
    handleClick = useCallback((ev: MouseEvent): void => {
      const toastBox =
        document.getElementById("activeToast");
      if (!toastBox) return;
      if (
        DOMHandler.isClickOutside(ev, toastBox).some(
          coord => coord
        )
      )
        toast.dismiss();
    }, []);
  useEffect(() => {
    if (
      !window ||
      document.body.dataset.toasthandling === "true"
    )
      return;
    addEventListener("keyup", handleEsc);
    enterBtn.current = document.getElementById(
      enterBtnId
    ) as nlBtn;
    addEventListener("keydown", handleEnter);
    document.body.addEventListener("click", handleClick);
    return () => {
      removeEventListener("keyup", handleEsc);
      removeEventListener("keydown", handleEnter);
      document.body.removeEventListener(
        "click",
        handleClick
      );
      document.body.dataset.toasthandling === "false";
    };
  }, [enterBtnId, handleClick, handleEnter, handleEsc]);
}
