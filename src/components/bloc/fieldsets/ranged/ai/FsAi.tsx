"use client";
import s from "@/styles/modules/rangeCtx.module.scss";
import { FsRangedBlock } from "@/lib/definitions/client/interfaces/components";
import useRangedCtxBlock from "@/lib/client/hooks/useRangedCtxBlock";
import { classes } from "@/lib/client/vars";
export default function FsAi({ p, id, children }: FsRangedBlock) {
  const { r } = useRangedCtxBlock(),
    { controller } = p;
  return (
    <fieldset
      id={`fs${id}`}
      className={`${classes.aiApps} ${s.fsRanged}`}
      ref={r}
      data-controlledby={controller}
    >
      {children}
    </fieldset>
  );
}
