import { nlBtn } from "@/lib/definitions/client/helpers";
import { RefObject, useEffect, useRef } from "react";
import useToast from "./useToast";
import { FormRelated } from "@/lib/definitions/client/interfaces/components";
import DOMValidator from "../validators/DOMValidator";
export default function useFormButton({
  form,
  idf,
}: FormRelated & { idf: string }): RefObject<nlBtn | HTMLInputElement> {
  const r = useRef<nlBtn>(null);
  useEffect(() => {
    if (!(r.current && DOMValidator.isDefaultPressable(r.current))) return;
    form ??= r.current.form;
  }, [r]);
  useToast({ id: undefined, enterBtnId: idf });
  return r;
}
