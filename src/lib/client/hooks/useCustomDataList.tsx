import { useCallback, useEffect, useState, useRef } from "react";
import IOHandler from "../handlers/IOHandler";
import DOMValidator from "../validators/DOMValidator";
import { inputLikeElement, voidish } from "@/lib/definitions/client/helpers";
export default function useCustomDataList() {
  const [dl, setDl] = useState<string[]>([]),
    [showDl, setShowDl] = useState<boolean>(false),
    [v, setV] = useState<string>(""),
    [cursor, setCursor] = useState<number>(0),
    inpRef = useRef<inputLikeElement>(null),
    dlRefs = useRef<(HTMLLIElement | voidish)[]>([]),
    unmountList = useCallback((): void => {
      setShowDl(() => false);
      setDl(() => []);
      dlRefs.current = [];
    }, [setDl, setShowDl]),
    selectOpt = useCallback(
      (text: string): void => {
        setV(() => `${v}${text}`);
        unmountList();
      },
      [unmountList, setV]
    ),
    handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLElement>): void => {
        if (DOMValidator.isTextbox(e.currentTarget) && e.key === "Tab") {
          e.preventDefault();
          setCursor(0);
        } else if (e.currentTarget instanceof HTMLLIElement) {
          if (e.key === "Enter") {
            e.preventDefault();
            const t = e.currentTarget;
            if (!t?.innerText) return;
            selectOpt(t.innerText);
          } else if (e.key === "ArrowDown" || e.key === "Tab")
            setCursor(prev => (prev < dl.length-- ? prev++ : 0));
          else if (e.key === "ArrowUp")
            setCursor(prev => (prev > 0 ? prev-- : dl.length--));
        }
      },
      [setV]
    ),
    handleClick = (opt: HTMLElement): void => {
      if (!opt?.innerText) return;
      selectOpt(opt.innerText);
    };
  useEffect(() => {
    if (!v || typeof v !== "string") {
      unmountList();
      return;
    }
    const opts = IOHandler.selectCustomDataListSuggestions(v);
    if (!opts?.length) {
      unmountList();
      return;
    }
    setDl(() => opts);
    setShowDl(() => true);
  }, [setDl, setShowDl, unmountList, v]);
  useEffect(() => {
    if (!inpRef.current?.dataset.opts) return;
    const opts = document.querySelectorAll(
      `class*=[${inpRef.current.dataset.opts}]`
    );
    if (!opts) return;
    dlRefs.current = Array.from(opts as NodeListOf<HTMLLIElement>);
    dlRefs.current.forEach(o => {
      if (!(o instanceof Element)) return;
      if (o === dlRefs.current[cursor]) {
        o.focus();
        o.classList.add("highlight");
      } else {
        o.classList.contains("highlight") && o.classList.remove("highlight");
        o.blur();
      }
    });
  }, [dl, cursor]);
  return { inpRef, v, dl, showDl, cursor, setV, handleClick, handleKeyDown };
}
