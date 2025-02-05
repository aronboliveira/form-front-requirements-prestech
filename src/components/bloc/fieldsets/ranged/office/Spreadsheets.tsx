"use client";
import { RangeCtxBlockProps } from "@/lib/definitions/client/interfaces/components";
import FsOfficeApp from "./FsOfficeApp";
import { protoName } from "@/lib/helpers/ObjectHelper";
import { JSX } from "react/jsx-dev-runtime";
import useRangedCtxBlockChildren from "@/lib/client/hooks/useRangedCtxBlockChildren";
import BeginnerSpreadSheets from "../inc/spreadSheets/BeginnerSpreadSheets";
import IntermediateSpreadSheets from "../inc/spreadSheets/IntermediateSpreadSheets";
import ExpertSpreadSheets from "../inc/spreadSheets/ExpertSpreadSheets";
export default function SpreadSheets(
  props: RangeCtxBlockProps
): JSX.Element {
  const {
    r,
    roleRef,
    levelTitle: lt,
    mappedQuestions: qs,
  } = useRangedCtxBlockChildren(props.lvl, "Spreadsheets");
  return (
    <FsOfficeApp
      id={protoName(SpreadSheets)}
      p={props}
      level={lt}
      ref={r}
    >
      {(() => {
        const acronyms = qs.map(q => q[0]).join("__");
        switch (lt) {
          case "beginner":
            return (
              <BeginnerSpreadSheets
                key={`${acronyms}__${lt}`}
              />
            );
          case "intermediate":
            return (
              <IntermediateSpreadSheets
                key={`${acronyms}__${lt}`}
                prefix={roleRef.current}
                sufix={acronyms}
                questions={qs}
              />
            );
          case "expert":
            return (
              <ExpertSpreadSheets
                key={`${acronyms}__${lt}`}
                prefix={roleRef.current}
                sufix={acronyms}
                questions={qs}
              />
            );
          default:
            return (
              <BeginnerSpreadSheets
                key={`${acronyms}__${lt}`}
                prefix={roleRef.current}
                sufix={acronyms}
                questions={qs}
              />
            );
        }
      })()}
    </FsOfficeApp>
  );
}
