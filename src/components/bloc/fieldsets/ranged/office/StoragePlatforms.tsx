// import s from "@/styles/modules/rangeCtx.module.scss";
import { RangeCtxBlockProps } from "@/lib/definitions/client/interfaces/components";
import FsOfficeApp from "./FsOfficeApp";
import { protoName } from "@/lib/helpers/ObjectHelper";
export default function StoragePlatforms(props: RangeCtxBlockProps) {
  return (
    <FsOfficeApp id={protoName(StoragePlatforms)} p={props}>
      {props.lvl}
    </FsOfficeApp>
  );
}
