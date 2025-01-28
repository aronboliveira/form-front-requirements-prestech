"use client";
import { RangeCtxBlockProps } from "@/lib/definitions/client/interfaces/components";
import FsOfficePlatforms from "./FsOfficePlatforms";
import { protoName } from "@/lib/helpers/ObjectHelper";
import { JSX } from "react/jsx-dev-runtime";
import useRangedCtxBlockChildren from "@/lib/client/hooks/useRangedCtxBlockChildren";
import BeginnerBusinessInteligence from "../inc/businessInteligence/BeginnerBusinessInteligence";
import IntermediateBusinessInteligence from "../inc/businessInteligence/IntermediateBusinessInteligence";
import ExpertBusinessInteligence from "../inc/businessInteligence/ExpertBusinessInteligence";
export default function BusinessInteligence(
  props: RangeCtxBlockProps
): JSX.Element {
  const {
    r,
    roleRef,
    levelTitle: lt,
    mappedQuestions: qs,
  } = useRangedCtxBlockChildren(props.lvl, "Bi");
  return (
    <FsOfficePlatforms
      id={protoName(BusinessInteligence)}
      p={props}
      level={lt}
      ref={r}
    >
      {qs.length ? (
        (() => {
          const acronyms = qs.map(q => q[0]).join("__");
          switch (lt) {
            case "beginner":
              return (
                <BeginnerBusinessInteligence
                  key={`${acronyms}__${lt}`}
                  prefix={roleRef.current}
                  sufix={acronyms}
                  questions={qs}
                />
              );
            case "intermediate":
              return (
                <IntermediateBusinessInteligence
                  key={`${acronyms}__${lt}`}
                  prefix={roleRef.current}
                  sufix={acronyms}
                  questions={qs}
                />
              );
            case "expert":
              return (
                <ExpertBusinessInteligence
                  key={`${acronyms}__${lt}`}
                  prefix={roleRef.current}
                  sufix={acronyms}
                  questions={qs}
                />
              );
            default:
              return (
                <BeginnerBusinessInteligence
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
