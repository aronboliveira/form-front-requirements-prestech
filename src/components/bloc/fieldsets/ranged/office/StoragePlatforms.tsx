"use client";
  import { RangeCtxBlockProps } from "@/lib/definitions/client/interfaces/components";
  import FsOfficeApp from "./FsOfficeApp";
  import { protoName } from "@/lib/helpers/ObjectHelper";
  import { JSX } from "react/jsx-dev-runtime";
  import useRangedCtxBlockChildren from "@/lib/client/hooks/useRangedCtxBlockChildren";
  import BeginnerCloudStorage from "../inc/cloudStorage/BeginnerCloudStorage";
  import IntermediateCloudStorage from "../inc/cloudStorage/IntermediateCloudStorage";
  import ExpertCloudStorage from "../inc/cloudStorage/ExpertCloudStorage";
  export default function CloudStorage(props: RangeCtxBlockProps): JSX.Element {
    const {
      r,
      roleRef,
      levelTitle: lt,
      mappedQuestions: qs,
    } = useRangedCtxBlockChildren(props.lvl, "StoragePlatforms");
    return (
      <FsOfficeApp id={protoName(CloudStorage)} p={props} level={lt} ref={r}>
        {qs.length ? (
          (() => {
            const acronyms = qs.map(q => q[0]).join("__");
            switch (lt) {
              case "beginner":
                return (
                  <BeginnerCloudStorage
                    key={`${acronyms}__${lt}`}
                    prefix={roleRef.current}
                    sufix={acronyms}
                    questions={qs}
                  />
                );
              case "intermediate":
                return (
                  <IntermediateCloudStorage
                    key={`${acronyms}__${lt}`}
                    prefix={roleRef.current}
                    sufix={acronyms}
                    questions={qs}
                  />
                );
              case "expert":
                return (
                  <ExpertCloudStorage
                    key={`${acronyms}__${lt}`}
                    prefix={roleRef.current}
                    sufix={acronyms}
                    questions={qs}
                  />
                );
              default:
                return (
                  <BeginnerCloudStorage
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