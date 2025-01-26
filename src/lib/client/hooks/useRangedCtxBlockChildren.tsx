import { FormCtx } from "@/components/forms/RequirementForm";
import { IFormCtx } from "@/lib/definitions/client/interfaces/contexts";
import {
  RangeCtxComponentNames,
  complexityLabel,
  complexityLevel,
  roleType,
} from "@/lib/definitions/foundations";
import { RefObject, useContext, useRef } from "react";
import { addQuestionsMap } from "../addQuestions";
import { RoleComplexities } from "@/lib/definitions/client/helpers";
import { appGroupsDict } from "../vars";
export default function useRangedCtxBlockChildren(
  lvl: complexityLevel,
  name: RangeCtxComponentNames
): {
  roleRef: RefObject<roleType>;
  levelTitle: complexityLabel;
  questions: RoleComplexities[keyof RoleComplexities] | null;
  mappedQuestions: Array<[string, string]>;
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
    questions = ((): { [k: string]: string } | null => {
      if (roleRef.current === "undefined") return null;
      const rqs = addQuestionsMap.get(roleRef.current);
      if (!rqs) return null;
      const k = appGroupsDict[name];
      if (!k) return null;
      const rgqs = rqs.get(k);
      if (!rgqs) return null;
      return rgqs[levelTitle] || null;
    })(),
    mappedQuestions = questions
      ? (Object.entries(questions) as [string, string][])
      : [];
  return { roleRef, levelTitle, questions, mappedQuestions };
}
