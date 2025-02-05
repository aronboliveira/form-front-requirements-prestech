import { FormCtx } from "@/components/forms/RequirementForm";
import { roleType } from "@/lib/definitions/foundations";
import { useContext } from "react";
export default function useRole(): { role: roleType } {
  const role =
    useContext(FormCtx).role ||
    sessionStorage.getItem("role") ||
    "undefined";
  return { role };
}
