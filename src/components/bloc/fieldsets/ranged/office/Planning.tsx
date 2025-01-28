"use client";
  import { RangeCtxBlockProps } from "@/lib/definitions/client/interfaces/components";
  import FsOfficePlatforms from "./FsOfficePlatforms";
  import { protoName } from "@/lib/helpers/ObjectHelper";
  import { JSX } from "react/jsx-dev-runtime";
  import useRangedCtxBlockChildren from "@/lib/client/hooks/useRangedCtxBlockChildren";
  import BeginnerPlanning from "../inc/planning/BeginnerPlanning";
  import IntermediatePlanning from "../inc/planning/IntermediatePlanning";
  import ExpertPlanning from "../inc/planning/ExpertPlanning";
  export default function Planning(props: RangeCtxBlockProps): JSX.Element {
    const {
      r,
      roleRef,
      levelTitle: lt,
      mappedQuestions: qs,
    } = useRangedCtxBlockChildren(props.lvl, "Planning");
    return (
      <FsOfficePlatforms id={protoName(Planning)} p={props} level={lt} ref={r}>
        {qs.length ? (
          (() => {
            const acronyms = qs.map(q => q[0]).join("__");
            switch (lt) {
              case "beginner":
                return (
                  <BeginnerPlanning
                    key={`${acronyms}__${lt}`}
                    prefix={roleRef.current}
                    sufix={acronyms}
                    questions={qs}
                  />
                );
              case "intermediate":
                return (
                  <IntermediatePlanning
                    key={`${acronyms}__${lt}`}
                    prefix={roleRef.current}
                    sufix={acronyms}
                    questions={qs}
                  />
                );
              case "expert":
                return (
                  <ExpertPlanning
                    key={`${acronyms}__${lt}`}
                    prefix={roleRef.current}
                    sufix={acronyms}
                    questions={qs}
                  />
                );
              default:
                return (
                  <BeginnerPlanning
                    key={`${acronyms}__${lt}`}
                    prefix={roleRef.current}
                    sufix={acronyms}
                    questions={qs}
                  />
                );
            }
          })()
        ) : (
          <></>
        )}
      </FsOfficePlatforms>
    );
  }