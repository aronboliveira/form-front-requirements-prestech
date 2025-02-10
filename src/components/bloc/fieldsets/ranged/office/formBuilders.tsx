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
      levelTitle: lt,
      mappedQuestions: qs
    } = useRangedCtxBlockChildren(props.lvl, "formBuilders");
    return (
      <FsOfficeApp id={protoName(FormBuilders)} p={props} level={lt} ref={r}>
          {(() => {
            const acronyms = qs.map(q => q[0]).join("__");
            switch (lt) {
              case "beginner":
                return (
                  <BeginnerFormBuilders
                    key={`${acronyms}__${lt}__${crypto.randomUUID()}`}
                  />
                );
              case "intermediate":
                return (
                  <IntermediateFormBuilders
                    key={`${acronyms}__${lt}__${crypto.randomUUID()}`}
                  />
                );
              case "expert":
                return (
                  <ExpertFormBuilders
                    key={`${acronyms}__${lt}__${crypto.randomUUID()}`}
                  />
                );
              default:
                return (
                  <BeginnerFormBuilders
                    key={`${acronyms}__${lt}__${crypto.randomUUID()}`}
                  />
            );
        }
      })()}
      </FsOfficeApp>
    );
  }