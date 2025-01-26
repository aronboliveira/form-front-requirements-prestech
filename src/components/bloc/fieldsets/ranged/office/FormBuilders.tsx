// import s from "@/styles/modules/rangeCtx.module.scss";
import { RangeCtxBlockProps } from "@/lib/definitions/client/interfaces/components";
import { protoName } from "@/lib/helpers/ObjectHelper";
import FsOfficeApp from "./FsOfficeApp";
export default function FormBuilders(props: RangeCtxBlockProps) {
  return (
    <FsOfficeApp id={protoName(FormBuilders)} p={props}>
      {props.lvl}
    </FsOfficeApp>
  );
}
