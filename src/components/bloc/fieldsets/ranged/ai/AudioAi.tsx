"use client";
import { RangeCtxBlockProps } from "@/lib/definitions/client/interfaces/components";
import FsAi from "./FsAi";
import { protoName } from "@/lib/helpers/ObjectHelper";
import { JSX } from "react/jsx-dev-runtime";
import useRangedCtxBlockChildren from "@/lib/client/hooks/useRangedCtxBlockChildren";
import BeginnerAudioAi from "../inc/audioAi/BeginnerAudioAi";
import IntermediateAudioAi from "../inc/audioAi/IntermediateAudioAi";
import ExpertAudioAi from "../inc/audioAi/ExpertAudioAi";
export default function AudioAi(props: RangeCtxBlockProps): JSX.Element {
  const {
    r,
    roleRef,
    levelTitle: lt,
    mappedQuestions: qs,
  } = useRangedCtxBlockChildren(props.lvl, "AudioAis");
  return (
    <FsAi id={protoName(AudioAi)} p={props} level={lt} ref={r}>
      {qs.length ? (
        (() => {
          const acronyms = qs.map(q => q[0]).join("__");
          switch (lt) {
            case "beginner":
              return (
                <BeginnerAudioAi
                  key={`${acronyms}__${lt}`}
                  prefix={roleRef.current}
                  sufix={acronyms}
                  questions={qs}
                />
              );
            case "intermediate":
              return (
                <IntermediateAudioAi
                  key={`${acronyms}__${lt}`}
                  prefix={roleRef.current}
                  sufix={acronyms}
                  questions={qs}
                />
              );
            case "expert":
              return (
                <ExpertAudioAi
                  key={`${acronyms}__${lt}`}
                  prefix={roleRef.current}
                  sufix={acronyms}
                  questions={qs}
                />
              );
            default:
              return (
                <BeginnerAudioAi
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
