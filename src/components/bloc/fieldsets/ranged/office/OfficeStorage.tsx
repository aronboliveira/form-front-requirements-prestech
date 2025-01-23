import s from "@/styles/modules/rangeCtx.module.scss";
import { RangeCtxBlockProps } from "@/lib/definitions/client/interfaces/components";
import useRangedCtxBlock from "@/lib/client/hooks/useRangedCtxBlock";
import { classes } from "@/lib/client/vars";
export default function StoragePlatforms({ lvl }: RangeCtxBlockProps) {
  const { r } = useRangedCtxBlock();
  return (
    <fieldset
      id='fsStoragePlatforms'
      className={`${classes.officeApps} ${s.fsRanged}`}
      ref={r}
    >
      {lvl}
    </fieldset>
  );
}
