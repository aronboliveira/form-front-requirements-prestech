import { RefObject, useEffect } from "react";
import MathHandler from "../handlers/MathHandler";
import { nlHtEl } from "@/lib/definitions/client/helpers";
export default function useRandomId(
  r: RefObject<nlHtEl>,
  id?: string
): void {
  useEffect(() => {
    if (!r.current) return;
    id ||= MathHandler.generateRandomKey(id);
  }, [r]);
}
