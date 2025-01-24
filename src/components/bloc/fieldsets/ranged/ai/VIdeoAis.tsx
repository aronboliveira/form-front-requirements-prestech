// import s from "@/styles/modules/rangeCtx.module.scss";
import { RangeCtxBlockProps } from "@/lib/definitions/client/interfaces/components";
import FsAi from "./FsAi";
import { protoName } from "@/lib/helpers/ObjectHelper";
export default function VideoAis(props: RangeCtxBlockProps) {
  return (
    <FsAi id={protoName(VideoAis)} p={props}>
      {props.lvl}
    </FsAi>
  );
}
