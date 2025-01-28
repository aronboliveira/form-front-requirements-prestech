import { useRef, useEffect, RefObject } from "react";
import { nlFs } from "@/lib/definitions/client/helpers";
import StyleHandler from "../handlers/StyleHandler";
export default function useRangedCtxBlock(): {
  r: RefObject<nlFs>;
} {
  const r = useRef<nlFs>(null);
  useEffect(() => {
    if (!r.current) return;
    StyleHandler.tickFading(r.current);
  }, []);
  return { r };
}
