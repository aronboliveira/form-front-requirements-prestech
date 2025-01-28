"use client";
import { RangeCtxBlockProps } from "@/lib/definitions/client/interfaces/components";
import FsAi from "./FsAi";
import { protoName } from "@/lib/helpers/ObjectHelper";
import { JSX } from "react/jsx-dev-runtime";
import useRangedCtxBlockChildren from "@/lib/client/hooks/useRangedCtxBlockChildren";
import BeginnerImageAi from "../inc/imageAi/BeginnerImageAi";
import IntermediateImageAi from "../inc/imageAi/IntermediateImageAi";
import ExpertImageAi from "../inc/imageAi/ExpertImageAi";
export default function ImageAi(props: RangeCtxBlockProps): JSX.Element {
  const {
    r,
    roleRef,
    levelTitle: lt,
    mappedQuestions: qs,
  } = useRangedCtxBlockChildren(props.lvl, "ImageAis");
  return (
    <FsAi id={protoName(ImageAi)} p={props} level={lt} ref={r}>
      {qs.length ? (
        (() => {
          const acronyms = qs.map(q => q[0]).join("__");
          switch (lt) {
            case "beginner":
              return (
                <BeginnerImageAi
                  key={`${acronyms}__${lt}`}
                  prefix={roleRef.current}
                  sufix={acronyms}
                  questions={qs}
                />
              );
            case "intermediate":
              return (
                <IntermediateImageAi
                  key={`${acronyms}__${lt}`}
                  prefix={roleRef.current}
                  sufix={acronyms}
                  questions={qs}
                />
              );
            case "expert":
              return (
                <ExpertImageAi
                  key={`${acronyms}__${lt}`}
                  prefix={roleRef.current}
                  sufix={acronyms}
                  questions={qs}
                />
              );
            default:
              return (
                <BeginnerImageAi
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
