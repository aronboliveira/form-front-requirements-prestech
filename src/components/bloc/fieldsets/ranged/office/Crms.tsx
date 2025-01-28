"use client";
  import { RangeCtxBlockProps } from "@/lib/definitions/client/interfaces/components";
  import FsOfficePlatforms from "./FsOfficePlatforms";
  import { protoName } from "@/lib/helpers/ObjectHelper";
  import { JSX } from "react/jsx-dev-runtime";
  import useRangedCtxBlockChildren from "@/lib/client/hooks/useRangedCtxBlockChildren";
  import BeginnerCrms from "../inc/Crms/BeginnerCrms";
  import IntermediateCrms from "../inc/Crms/IntermediateCrms";
  import ExpertCrms from "../inc/Crms/ExpertCrms";
  export default function Crms(props: RangeCtxBlockProps): JSX.Element {
    const {
      r,
      roleRef,
      levelTitle: lt,
      mappedQuestions: qs,
    } = useRangedCtxBlockChildren(props.lvl, "Crms");
    return (
      <FsOfficePlatforms id={protoName(Crms)} p={props} level={lt} ref={r}>
        {qs.length ? (
          (() => {
            const acronyms = qs.map(q => q[0]).join("__");
            switch (lt) {
              case "beginner":
                return (
                  <BeginnerCrms
                    key={`${acronyms}__${lt}`}
                    prefix={roleRef.current}
                    sufix={acronyms}
                    questions={qs}
                  />
                );
              case "intermediate":
                return (
                  <IntermediateCrms
                    key={`${acronyms}__${lt}`}
                    prefix={roleRef.current}
                    sufix={acronyms}
                    questions={qs}
                  />
                );
              case "expert":
                return (
                  <ExpertCrms
                    key={`${acronyms}__${lt}`}
                    prefix={roleRef.current}
                    sufix={acronyms}
                    questions={qs}
                  />
                );
              default:
                return (
                  <BeginnerCrms
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