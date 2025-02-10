"use client";
import useRole from "@/lib/client/hooks/useRole";
import { classes } from "@/lib/client/vars";
import { AddOptInputBlock } from "@/lib/definitions/client/interfaces/components";
import DefaultEntryBoundary from "@/components/bloc/errors/DefaultEntryBoundary";
import { Fragment, useRef } from "react";
import RenderHandler from "@/lib/client/handlers/RenderHandler";
import { nlSel } from "@/lib/definitions/client/helpers";
import useRandomId from "@/lib/client/hooks/useRandomId";
export default function AddSelectOne({
  id,
  name,
  additional = <></>,
  opts = { main: { grpOpts: [] } },
}: AddOptInputBlock) {
  const { role } = useRole(),
    r = useRef<nlSel>(null),
    ks = Object.keys(opts);
  useRandomId(r, id);
  return (
    <DefaultEntryBoundary>
      {ks?.length ? (
        <Fragment
          key={`${id}__${role}__${crypto.randomUUID()}`}
        >
          <select
            id={id}
            name={name}
            className={`entryAddRanged selectAddRanged selectOne ${classes.selectClasses}`}
            data-role={role}
            data-type='select-one'
            key={`${id}__${role}`}
          >
            {RenderHandler.renderOptionsCollection({
              opts,
              id,
              names: ks,
            })}
          </select>
          {additional}
        </Fragment>
      ) : (
        <></>
      )}
    </DefaultEntryBoundary>
  );
}
