import s from "@/styles/modules/rangeCtx.module.scss";
import { RangeCtxBlockProps } from "@/lib/definitions/client/interfaces/components";
import useRangedCtxBlock from "@/lib/client/hooks/useRangedCtxBlock";
import { classes } from "@/lib/client/vars";
export default function Spreadsheets({ lvl }: RangeCtxBlockProps) {
  const { r } = useRangedCtxBlock();
  return (
    <fieldset
      id='fsSpreadsheets'
      className={`${classes.officeApps} ${s.fsRanged}`}
      ref={r}
    >
      <div>
        <label>Como esses aplicativos beneficam o seu trabalho?</label>
        <textarea className='form-control'></textarea>
      </div>
    </fieldset>
  );
}
