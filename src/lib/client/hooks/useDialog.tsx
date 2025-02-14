import {
  RefObject,
  useCallback,
  useEffect,
  useRef,
} from "react";
import {
  nlDlg,
  rKbEv,
  rMouseEvent,
} from "@/lib/definitions/client/helpers";
import { DlgProps } from "@/lib/definitions/client/interfaces/components";
import DOMHandler from "../handlers/DOMHandler";
export default function useDialog({
  state,
  dispatch,
  id,
  param,
  clickable,
  escapable,
}: DlgProps & { param: string }): {
  mainRef: RefObject<nlDlg>;
  handleKp: (kp: rKbEv) => void;
} {
  clickable ||= false;
  escapable ||= true;
  const mainRef = useRef<nlDlg>(null),
    handleKp = useCallback(
      (kp: rKbEv): void => {
        if (!escapable || kp.key.toLowerCase() !== "escape")
          return;
        dispatch(!state);
        /* eslint-disable */
        !state && mainRef.current?.close();
        /* eslint-enable */
      },
      [state, dispatch]
    ),
    handleClick = useCallback(
      (ev: rMouseEvent) => {
        const dlg = document.getElementById(id);
        if (
          ev.currentTarget instanceof Node &&
          dlg instanceof Element &&
          DOMHandler.isClickOutside(ev, dlg).some(
            coord => coord === true
          )
        ) {
          if (dlg instanceof HTMLDialogElement) dlg.close();
          dispatch(!state);
        }
      },
      [dispatch, id]
    );
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    if (!urlParams.get(param)) {
      urlParams.set(param, "open");
      history.pushState({}, "", `?${urlParams.toString()}`);
    }
    return () => {
      urlParams.delete(param);
      history.pushState({}, "", `?${urlParams.toString()}`);
    };
    /* eslint-disable */
  }, [location.search, param]);
  /* eslint-enable */
  useEffect(() => {
    try {
      if (!(mainRef.current instanceof HTMLElement)) return;
      mainRef.current instanceof HTMLDialogElement &&
        mainRef.current.showModal();
    } catch (e) {
      return;
    }
    escapable && addEventListener("keypress", handleKp);
    clickable &&
      document.body.addEventListener("click", handleClick);
    return (): void => {
      removeEventListener("keypress", handleKp);
      document.body.removeEventListener(
        "click",
        handleClick
      );
    };
  }, [
    mainRef,
    handleKp,
    state,
    handleClick,
    clickable,
    escapable,
  ]);
  return { mainRef, handleKp };
}
