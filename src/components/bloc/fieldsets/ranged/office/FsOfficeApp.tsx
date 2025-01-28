"use client";
import s from "@/styles/modules/rangeCtx.module.scss";
import { FsRangedBlock } from "@/lib/definitions/client/interfaces/components";
import useRangedCtxBlock from "@/lib/client/hooks/useRangedCtxBlock";
import { classes } from "@/lib/client/vars";
export default function FsOfficeApp({
  p,
  id,
  children,
  level,
  ref,
}: FsRangedBlock) {
  useRangedCtxBlock();
  const { controller } = p;
  return (
    <fieldset
      id={`fs${id}`}
      className={`${classes.officeApps} ${s.fsRanged}`}
      ref={ref}
      data-controlledby={controller}
      data-level={level}
    >
      {children}
    </fieldset>
  );
}
