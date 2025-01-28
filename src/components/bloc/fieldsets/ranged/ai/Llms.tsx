"use client";
  import { RangeCtxBlockProps } from "@/lib/definitions/client/interfaces/components";
  import FsAi from "./FsAi";
  import { protoName } from "@/lib/helpers/ObjectHelper";
  import { JSX } from "react/jsx-dev-runtime";
  import useRangedCtxBlockChildren from "@/lib/client/hooks/useRangedCtxBlockChildren";
  import BeginnerLlms from "../inc/llms/BeginnerLlms";
  import IntermediateLlms from "../inc/llms/IntermediateLlms";
  import ExpertLlms from "../inc/llms/ExpertLlms";
  export default function Llms(props: RangeCtxBlockProps): JSX.Element {
    const {
      r,
      roleRef,
      levelTitle: lt,
      mappedQuestions: qs,
    } = useRangedCtxBlockChildren(props.lvl, "Llms");
    return (
      <FsAi id={protoName(Llms)} p={props} level={lt} ref={r}>
        {qs.length ? (
          (() => {
            const acronyms = qs.map(q => q[0]).join("__");
            switch (lt) {
              case "beginner":
                return (
                  <BeginnerLlms
                    key={`${acronyms}__${lt}`}
                    prefix={roleRef.current}
                    sufix={acronyms}
                    questions={qs}
                  />
                );
              case "intermediate":
                return (
                  <IntermediateLlms
                    key={`${acronyms}__${lt}`}
                    prefix={roleRef.current}
                    sufix={acronyms}
                    questions={qs}
                  />
                );
              case "expert":
                return (
                  <ExpertLlms
                    key={`${acronyms}__${lt}`}
                    prefix={roleRef.current}
                    sufix={acronyms}
                    questions={qs}
                  />
                );
              default:
                return (
                  <BeginnerLlms
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
      </FsAi>
    );
  }