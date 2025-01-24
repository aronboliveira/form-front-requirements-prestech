import { FormCtx } from "@/components/forms/RequirementForm";
import { IFormCtx } from "@/lib/definitions/client/interfaces/contexts";
import {
  complexityLabel,
  complexityLevel,
  roleType,
} from "@/lib/definitions/foundations";
import { RefObject, useContext, useRef } from "react";
import { addQuestionsMap, defaultQuestionsDict } from "../vars";
import { RoleComplexities } from "@/lib/definitions/client/helpers";
export default function useRangedCtxBlockChildren(lvl: complexityLevel): {
  roleRef: RefObject<roleType>;
  levelTitle: complexityLabel;
  questions: RoleComplexities[keyof RoleComplexities] | null;
} {
  const levelTitle = ((): complexityLabel => {
      switch (lvl) {
        case 2:
        case 3:
          return "intermediate";
        case 4:
        case 5:
          return "expert";
        default:
          return "beginner";
      }
    })(),
    ctx = useContext<IFormCtx>(FormCtx),
    roleRef = useRef<roleType>(
      ctx.role || sessionStorage.getItem("role") || "undefined"
    ),
    questions = ((): RoleComplexities[keyof RoleComplexities] | null => {
      if (roleRef.current === "undefined") return null;
      const rqs = addQuestionsMap.get(roleRef.current);
      if (!rqs) return defaultQuestionsDict[levelTitle || "beginner"];
      return rqs[levelTitle || "beginner"];
    })();
  console.log(questions);
  return { roleRef, levelTitle, questions };
}
