import s from "@/styles/modules/rangeCtx.module.scss";
import { RangeCtxBlockProps } from "@/lib/definitions/client/interfaces/components";
import { classes } from "@/lib/client/vars";
import useRangedCtxBlock from "@/lib/client/hooks/useRangedCtxBlock";
export default function Llms({ lvl }: RangeCtxBlockProps) {
  const { r } = useRangedCtxBlock();
  return (
    <fieldset id='fsLlms' className={`${classes.aiApps} ${s.fsRanged}`} ref={r}>
      {lvl}
    </fieldset>
  );
}
