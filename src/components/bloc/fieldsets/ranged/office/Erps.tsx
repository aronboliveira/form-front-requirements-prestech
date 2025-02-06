"use client";
  import { RangeCtxBlockProps } from "@/lib/definitions/client/interfaces/components";
  import FsOfficePlatforms from "./FsOfficePlatforms";
  import { protoName } from "@/lib/helpers/ObjectHelper";
  import { JSX } from "react/jsx-dev-runtime";
  import useRangedCtxBlockChildren from "@/lib/client/hooks/useRangedCtxBlockChildren";
  import BeginnerErps from "../inc/Erps/BeginnerErps";
  import IntermediateErps from "../inc/Erps/IntermediateErps";
  import ExpertErps from "../inc/Erps/ExpertErps";
  export default function Erps(props: RangeCtxBlockProps): JSX.Element {
    const {
      r,
      levelTitle: lt,
      mappedQuestions: qs
    } = useRangedCtxBlockChildren(props.lvl, "Erps");
    return (
      <FsOfficePlatforms id={protoName(Erps)} p={props} level={lt} ref={r}>
          {(() => {
            const acronyms = qs.map(q => q[0]).join("__");
            switch (lt) {
              case "beginner":
                return (
                  <BeginnerErps
                    key={`${acronyms}__${lt}__${crypto.randomUUID()}`}
                  />
                );
              case "intermediate":
                return (
                  <IntermediateErps
                    key={`${acronyms}__${lt}__${crypto.randomUUID()}`}
                  />
                );
              case "expert":
                return (
                  <ExpertErps
                    key={`${acronyms}__${lt}__${crypto.randomUUID()}`}
                  />
                );
              default:
                return (
                  <BeginnerErps
                    key={`${acronyms}__${lt}__${crypto.randomUUID()}`}
                  />
            );
        }
      })()}
      </FsOfficePlatforms>
    );
  }