import { ReactiveState } from "@/lib/definitions/client/interfaces/components";
import { useCallback, useEffect, useState } from "react";
import IOHandler from "../handlers/IOHandler";
import { inputLikeElement } from "@/lib/definitions/client/helpers";
export default function useCustomDataList({ d, v }: ReactiveState<string>) {
  const [dl, setDl] = useState<string[]>([]),
    [showDl, setShowDl] = useState<boolean>(false);
  const unmountList = useCallback((): void => {
      setDl(() => []);
      setShowDl(() => false);
    }, [setDl, setShowDl]),
    handleKeyDown = useCallback(
      (e: React.KeyboardEvent<inputLikeElement>): void => {
        if (e.key === "Enter") {
          const t = e.currentTarget;
          if (!t?.innerText) return;
          d(() => `${v}${t.innerText}`);
        }
      },
      [d]
    );
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
  return { dl, showDl, handleKeyDown };
}
