"use client";
import useRole from "@/lib/client/hooks/useRole";
import { classes } from "@/lib/client/vars";
import { AddOptInputBlock } from "@/lib/definitions/client/interfaces/components";
import DefaultEntryBoundary from "@/components/bloc/errors/DefaultEntryBoundary";
import { useState } from "react";
import RenderHandler from "@/lib/client/handlers/RenderHandler";
export default function AddSelectOne({
  id,
  name,
  additional = <></>,
  opts = { main: { grpOpts: [] } },
}: AddOptInputBlock) {
  const { role } = useRole(),
    [v, setV] = useState<string>(),
    ks = Object.keys(opts);
  return (
    <DefaultEntryBoundary>
      {ks?.length ? (
        <>
          <select
            id={id}
            name={name}
            className={`entryAddRanged selectAddRanged selectOne ${classes.selectClasses}`}
            data-role={role}
            data-type='select-one'
            value={v}
            onChange={ev => setV(ev.currentTarget.value)}
          >
            {RenderHandler.renderOptionsCollection({
              opts,
              id,
              names: ks,
            })}
          </select>
          {additional}
        </>
      ) : (
        <></>
      )}
    </DefaultEntryBoundary>
  );
}
