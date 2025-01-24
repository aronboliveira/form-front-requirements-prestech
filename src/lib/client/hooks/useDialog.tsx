import { RefObject, useCallback, useEffect, useRef } from "react";
import { nlDlg, rKbEv } from "@/lib/definitions/client/helpers";
import { useRouter } from "next/navigation";
import { DlgProps } from "@/lib/definitions/client/interfaces/components";
export default function useDialog({
  state,
  dispatch,
  param,
}: DlgProps & { param: string }): {
  mainRef: RefObject<nlDlg>;
  handleKp: (kp: rKbEv) => void;
  router: any;
} {
  const mainRef = useRef<nlDlg>(null),
    router = useRouter(),
    handleKp = useCallback(
      (kp: rKbEv): void => {
        if (kp.key.toLowerCase() !== "escape") return;
        dispatch(!state);
        /* eslint-disable */
        !state && mainRef.current?.close();
        /* eslint-enable */
      },
      [state, dispatch]
    );
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    if (!urlParams.get(param)) {
      urlParams.set(param, "open");
      router.push(`?${urlParams.toString()}`);
    }
    return () => {
      urlParams.delete(param);
      router.push(`?${urlParams.toString()}`);
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
    addEventListener("keypress", handleKp);
    return (): void => removeEventListener("keypress", handleKp);
  }, [mainRef, handleKp, state]);
  return { mainRef, router, handleKp };
}
