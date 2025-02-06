import {
  useRef,
  useEffect,
  RefObject,
  useCallback,
} from "react";
import {
  nlFs,
  nlHtEl,
} from "@/lib/definitions/client/helpers";
import StyleHandler from "../handlers/StyleHandler";
import DOMValidator from "../validators/DOMValidator";
export default function useRangedCtxBlock(): {
  r: RefObject<nlFs>;
} {
  const r = useRef<nlFs>(null),
    controller = useRef<nlHtEl>(null),
    handleChange = useCallback((): void => {
      if (!r.current?.dataset?.controlledby) return;
      const controlled = document.querySelector(
        `#${r.current.dataset.controlledby}`
      );
      if (!(controlled instanceof HTMLElement)) return;
      if (controlled.dataset.controlling !== r.current.id)
        controlled.dataset.controlling = r.current.id;
    }, [r, controller]);
  useEffect(() => {
    if (!r.current) return;
    StyleHandler.tickFading(r.current);
    setTimeout(() => {
      if (!r.current) return;
      r.current.style.opacity = "1";
    }, 2000);
  }, [r]);
  useEffect(() => {
    handleChange();
    setTimeout(() => {
      if (!r.current) return;
      Array.from(r.current.elements)
        .filter(DOMValidator.isDefaultWritableInput)
        .forEach(e => (e.placeholder = "Escreva aqui"));
    }, 500);
  }, [r]);
  return { r };
}
