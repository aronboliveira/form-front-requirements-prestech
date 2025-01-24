import { RangeCtxBlockProps } from "@/lib/definitions/client/interfaces/components";
import FsOfficeApp from "./FsOfficeApp";
import { protoName } from "@/lib/helpers/ObjectHelper";
export default function Spreadsheets(props: RangeCtxBlockProps) {
  return (
    <FsOfficeApp id={protoName(Spreadsheets)} p={props}>
      <div>
        <label>Como esses aplicativos beneficam o seu trabalho?</label>
        <textarea className='form-control'></textarea>
      </div>
    </FsOfficeApp>
  );
}
