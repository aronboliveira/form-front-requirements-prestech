import s from "@/styles/modules/rangeCtx.module.scss";
import { RangeCtxBlockProps } from "@/lib/definitions/client/interfaces/components";
import useRangedCtxBlock from "@/lib/client/hooks/useRangedCtxBlock";
import { ReactNode } from "react";
import { classes } from "@/lib/client/vars";
export default function FsOfficeApp({
  p,
  id,
  children,
}: {
  p: RangeCtxBlockProps;
  id: string;
  children: ReactNode;
}) {
  const { r } = useRangedCtxBlock(),
    { controller } = p;
  return (
    <fieldset
      id={`fs${id}`}
      className={`${classes.officeApps} ${s.fsRanged}`}
      ref={r}
      data-controlledby={controller}
    >
      {children}
    </fieldset>
  );
}
