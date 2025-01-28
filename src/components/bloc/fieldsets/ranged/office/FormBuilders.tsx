"use client";
import { RangeCtxBlockProps } from "@/lib/definitions/client/interfaces/components";
import FsOfficeApp from "./FsOfficeApp";
import { protoName } from "@/lib/helpers/ObjectHelper";
import { JSX } from "react/jsx-dev-runtime";
import useRangedCtxBlockChildren from "@/lib/client/hooks/useRangedCtxBlockChildren";
import BeginnerFormBuilders from "../inc/formBuilders/BeginnerFormBuilders";
import IntermediateFormBuilders from "../inc/formBuilders/IntermediateFormBuilders";
import ExpertFormBuilders from "../inc/formBuilders/ExpertFormBuilders";
export default function FormBuilders(props: RangeCtxBlockProps): JSX.Element {
  const {
    r,
    roleRef,
    levelTitle: lt,
    mappedQuestions: qs,
  } = useRangedCtxBlockChildren(props.lvl, "FormBuilders");
  return (
    <FsOfficeApp id={protoName(FormBuilders)} p={props} level={lt} ref={r}>
      {qs.length ? (
        (() => {
          const acronyms = qs.map(q => q[0]).join("__");
          switch (lt) {
            case "beginner":
              return (
                <BeginnerFormBuilders
                  key={`${acronyms}__${lt}`}
                  prefix={roleRef.current}
                  sufix={acronyms}
                  questions={qs}
                />
              );
            case "intermediate":
              return (
                <IntermediateFormBuilders
                  key={`${acronyms}__${lt}`}
                  prefix={roleRef.current}
                  sufix={acronyms}
                  questions={qs}
                />
              );
            case "expert":
              return (
                <ExpertFormBuilders
                  key={`${acronyms}__${lt}`}
                  prefix={roleRef.current}
                  sufix={acronyms}
                  questions={qs}
                />
              );
            default:
              return (
                <BeginnerFormBuilders
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
    </FsOfficeApp>
  );
}
