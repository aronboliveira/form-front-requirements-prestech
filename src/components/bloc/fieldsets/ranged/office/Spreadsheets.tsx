import { RangeCtxBlockProps } from "@/lib/definitions/client/interfaces/components";
import FsOfficeApp from "./FsOfficeApp";
import { protoName } from "@/lib/helpers/ObjectHelper";
import { JSX } from "react/jsx-dev-runtime";
import useRangedCtxBlockChildren from "@/lib/client/hooks/useRangedCtxBlockChildren";
// import { classes } from "@/lib/client/vars";
import DefAppRangedInp from "../DefAddRangedInp";
import {
  SpreadsheetsBeginnerKeys,
  SpreadsheetsExpertKeys,
  SpreadsheetsIntermediateKeys,
} from "@/lib/definitions/client/helpers";
export default function Spreadsheets(props: RangeCtxBlockProps): JSX.Element {
  const {
    roleRef: r,
    levelTitle: lt,
    mappedQuestions: qs,
  } = useRangedCtxBlockChildren(props.lvl, "Spreadsheets");
  return (
    <FsOfficeApp id={protoName(Spreadsheets)} p={props}>
      <div>
        {qs.length ? (
          qs.map(q => {
            const [a, l] = q;
            switch (lt) {
              case "beginner":
                switch (a as SpreadsheetsBeginnerKeys) {
                  default:
                    return (
                      <DefAppRangedInp prefix={r.current} sufix={a} label={l} />
                    );
                }
              case "intermediate":
                switch (a as SpreadsheetsIntermediateKeys) {
                  default:
                    return (
                      <DefAppRangedInp prefix={r.current} sufix={a} label={l} />
                    );
                }
              case "expert":
                switch (a as SpreadsheetsExpertKeys) {
                  default:
                    return (
                      <DefAppRangedInp prefix={r.current} sufix={a} label={l} />
                    );
                }
              default:
                switch (a) {
                  default:
                    return (
                      <DefAppRangedInp prefix={r.current} sufix={a} label={l} />
                    );
                }
            }
          })
        ) : (
          <></>
        )}
      </div>
    </FsOfficeApp>
  );
}
