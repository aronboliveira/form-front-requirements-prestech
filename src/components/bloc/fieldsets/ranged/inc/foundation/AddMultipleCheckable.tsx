"use client";
import useRole from "@/lib/client/hooks/useRole";
import { classes } from "@/lib/client/vars";
import { AddOptInputBlock } from "@/lib/definitions/client/interfaces/components";
import DefaultEntryBoundary from "@/components/bloc/errors/DefaultEntryBoundary";
import RenderHandler from "@/lib/client/handlers/RenderHandler";
import { useEffect, useRef, Fragment } from "react";
import { nlFs } from "@/lib/definitions/client/helpers";
import DOMValidator from "@/lib/client/validators/DOMValidator";
import s from "@/styles/modules/rangeCtx.module.scss";
export default function AddMultipleCheckable({
  id,
  name,
  additional = <></>,
  opts = { main: { grpOpts: [] } },
}: AddOptInputBlock) {
  const { role } = useRole(),
    ks = Object.keys(opts),
    r = useRef<nlFs>(null);
  useEffect(() => {
    if (!r.current) return;
    for (const e of r.current.elements) {
      if (DOMValidator.isDefaultEntry(e))
        e.name = `${name}_${e.name}`;
      else if (DOMValidator.isCustomEntry(e))
        e.dataset.name = `${name}_${e.dataset.name}`;
    }
  }, [r.current]);
  return (
    <DefaultEntryBoundary>
      {ks?.length ? (
        <Fragment
          key={`${id}__${role}__${crypto.randomUUID()}`}
        >
          <fieldset
            ref={r}
            id={id}
            name={name}
            className={`fsMultipleChekables selectMultiple ${classes.inpClasses} ${s.fsCheckables}`}
            data-role={role}
            data-type='select-multiple'
          >
            {RenderHandler.renderOptionsCollection({
              opts,
              id,
              checkables: true,
              names: ks,
            })}
          </fieldset>
          {additional}
        </Fragment>
      ) : (
        <></>
      )}
    </DefaultEntryBoundary>
  );
}
