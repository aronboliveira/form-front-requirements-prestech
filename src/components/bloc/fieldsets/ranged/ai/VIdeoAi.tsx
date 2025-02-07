"use client";
import { RangeCtxBlockProps } from "@/lib/definitions/client/interfaces/components";
import FsAi from "./FsAi";
import { protoName } from "@/lib/helpers/ObjectHelper";
import { JSX } from "react/jsx-dev-runtime";
import useRangedCtxBlockChildren from "@/lib/client/hooks/useRangedCtxBlockChildren";
import BeginnerVideoAi from "../inc/videoAi/BeginnerVideoAi";
import IntermediateVideoAi from "../inc/videoAi/IntermediateVideoAi";
import ExpertVideoAi from "../inc/videoAi/ExpertVideoAi";
export default function VideoAi(
  props: RangeCtxBlockProps
): JSX.Element {
  const {
    r,
    roleRef,
    levelTitle: lt,
    mappedQuestions: qs,
  } = useRangedCtxBlockChildren(props.lvl, "VideoAi");
  return (
    <FsAi
      id={protoName(VideoAi)}
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
                <BeginnerVideoAi
                  key={`${acronyms}__${lt}`}
                  prefix={roleRef.current}
                  sufix={acronyms}
                  questions={qs}
                />
              );
            case "intermediate":
              return (
                <IntermediateVideoAi
                  key={`${acronyms}__${lt}`}
                  prefix={roleRef.current}
                  sufix={acronyms}
                  questions={qs}
                />
              );
            case "expert":
              return (
                <ExpertVideoAi
                  key={`${acronyms}__${lt}`}
                  prefix={roleRef.current}
                  sufix={acronyms}
                  questions={qs}
                />
              );
            default:
              return (
                <BeginnerVideoAi
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
