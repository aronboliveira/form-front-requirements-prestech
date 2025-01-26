// import s from "@/styles/modules/rangeCtx.module.scss";
import { RangeCtxBlockProps } from "@/lib/definitions/client/interfaces/components";
import FsOfficePlatforms from "./FsOfficePlatforms";
import { protoName } from "@/lib/helpers/ObjectHelper";
export default function Crms(props: RangeCtxBlockProps) {
  return (
    <FsOfficePlatforms id={protoName(Crms)} p={props}>
      {props.lvl}
    </FsOfficePlatforms>
  );
}
