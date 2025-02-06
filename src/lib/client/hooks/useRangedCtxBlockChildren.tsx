import { FormCtx } from "@/components/forms/RequirementForm";
import { IFormCtx } from "@/lib/definitions/client/interfaces/contexts";
import {
  RangeCtxComponentNames,
  complexityLabel,
  complexityLevel,
  roleType,
} from "@/lib/definitions/foundations";
import {
  RefObject,
  useContext,
  useRef,
  useEffect,
  useMemo,
} from "react";
import { questionsMap } from "../vars";
import {
  RoleComplexities,
  nlHtEl,
} from "@/lib/definitions/client/helpers";
import { appGroupsDict } from "../vars";
import StyleHandler from "../handlers/StyleHandler";
export default function useRangedCtxBlockChildren(
  lvl: complexityLevel,
  name: RangeCtxComponentNames
): {
  r: RefObject<nlHtEl>;
  roleRef: RefObject<roleType>;
  levelTitle: complexityLabel;
  questions:
    | RoleComplexities[keyof RoleComplexities]
    | null;
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
      ctx.role ||
        sessionStorage.getItem("role") ||
        "undefined"
    ),
    r = useRef<nlHtEl>(null),
    questions = useMemo(() => {
      if (roleRef.current === "undefined") return null;
      const rqs = questionsMap.get(roleRef.current);
      if (!rqs) return null;
      const k = appGroupsDict[name];
      if (!k) return null;
      const rgqs = rqs.get(k);
      if (!rgqs) return null;
      return rgqs[levelTitle] || null;
    }, [
      roleRef.current,
      questionsMap,
      appGroupsDict,
      name,
      levelTitle,
    ]),
    mappedQuestions = questions
      ? (Object.entries(questions) as [string, string][])
      : [];
  useEffect(() => {
    StyleHandler.tickFading(r.current, "0.3");
  }, [levelTitle]);
  return {
    r,
    roleRef,
    levelTitle: levelTitle,
    questions,
    mappedQuestions,
  };
}
