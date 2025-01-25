import { RangeCtxBlockProps } from "@/lib/definitions/client/interfaces/components";
import FsOfficeApp from "./FsOfficeApp";
import { protoName } from "@/lib/helpers/ObjectHelper";
import { JSX } from "react/jsx-dev-runtime";
import useRangedCtxBlockChildren from "@/lib/client/hooks/useRangedCtxBlockChildren";
import { classes } from "@/lib/client/vars";
export default function Spreadsheets(props: RangeCtxBlockProps): JSX.Element {
  const {
    roleRef: r,
    levelTitle: lt,
    questions: qs,
  } = useRangedCtxBlockChildren(props.lvl);
  const questions = qs ? (Object.entries(qs) as [string, string][]) : [];
  return (
    <FsOfficeApp id={protoName(Spreadsheets)} p={props}>
      <div>
        <label>Como esses aplicativos beneficam o seu trabalho?</label>
        <textarea className='form-control'></textarea>
        {r.current + " "}
        {lt + " "}
        {questions.length ? (
          questions.map(q => {
            const [a, l] = q;
            switch (a) {
              default:
                return (
                  <div
                    key={`${r.current}__${a}`}
                    className={`divAddRanged ${classes.inpDivClasses}`}
                  >
                    <label htmlFor={a} className={classes.inpLabClasses}>
                      {l}
                    </label>
                    <input id={a} className={classes.inpClasses} />
                  </div>
                );
            }
          })
        ) : (
          <></>
        )}
      </div>
    </FsOfficeApp>
  );
}
