// import s from "@/styles/modules/rangeCtx.module.scss";
import { RangeCtxBlockProps } from "@/lib/definitions/client/interfaces/components";
import FsOfficePlatforms from "./FsOfficePlatforms";
import { protoName } from "@/lib/helpers/ObjectHelper";
export default function Bi(props: RangeCtxBlockProps) {
  return (
    <FsOfficePlatforms id={protoName(Bi)} p={props}>
      {props.lvl}
    </FsOfficePlatforms>
  );
}
