import { RangeCtxBlockProps } from "@/lib/definitions/client/interfaces/components";
import FsOfficeApp from "./FsOfficeApp";
import ObjectHelper, { protoName } from "@/lib/helpers/ObjectHelper";
import { JSX } from "react/jsx-dev-runtime";
import useRangedCtxBlockChildren from "@/lib/client/hooks/useRangedCtxBlockChildren";
export default function Spreadsheets(props: RangeCtxBlockProps): JSX.Element {
  const {
    roleRef: r,
    levelTitle: lt,
    questions: qs,
  } = useRangedCtxBlockChildren(props.lvl);
  return (
    <FsOfficeApp id={protoName(Spreadsheets)} p={props}>
      <div>
        <label>Como esses aplicativos beneficam o seu trabalho?</label>
        <textarea className='form-control'></textarea>
        {r.current + " "}
        {lt + " "}
        {qs && ObjectHelper.JSONSafeStringify(qs)}
      </div>
    </FsOfficeApp>
  );
}
