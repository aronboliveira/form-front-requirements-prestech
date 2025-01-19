"use client";
import { FormCtx } from "@/components/forms/RequirementForm";
import Watcher from "@/components/hidden/Watcher";
import ContextualText from "@/components/inputs/contextual/ContextualText";
import {
  Acronyms,
  AcronymsDefaults,
  CtxLabels,
  classes,
} from "@/lib/client/vars";
import { IFormCtx } from "@/lib/definitions/client/interfaces/contexts";
import { officeTopicType, roleType } from "@/lib/definitions/foundations";
import StringHelper from "@/lib/helpers/StringHelper";
import { memo, useContext, useMemo, useState } from "react";
const ContextualQuestions = memo(() => {
  let role: roleType = "undefined";
  const ctx = useContext<IFormCtx>(FormCtx);
  role = ctx.role || "undefined";
  const cRole = StringHelper.unfriendlyName(role, true),
    lRole = StringHelper.unfriendlyName(role),
    [key, setKey] = useState<string>(crypto.randomUUID()),
    labels = useMemo(
      () =>
        Object.fromEntries(
          [
            ...["dt", "mt", "ms", "as", "pr", "op", "ch", "co"].map(
              a => (Acronyms as any)[a]
            ),
          ].map<[officeTopicType, string]>(t => {
            const map = CtxLabels.get(t);
            if (!map) return [t, ""];
            return [t, map.get(lRole) ?? ""];
          })
        ) as { [K in officeTopicType]: string },
      [lRole]
    );
  return (
    <span key={key}>
      {[
        {
          g: "Tasks",
          sgs: [
            {
              t: Acronyms.dt,
              r: true,
              l: labels.DailyTasks || AcronymsDefaults.dt,
            },
            {
              t: Acronyms.mt,
              r: true,
              l: labels.MainTasks || AcronymsDefaults.mt,
            },
            {
              t: Acronyms.ms,
              r: false,
              l: labels.MainSw || AcronymsDefaults.ms,
            },
            {
              t: Acronyms.as,
              r: false,
              l: labels.AddSw || AcronymsDefaults.as,
            },
          ],
        },
        {
          g: "Platforms",
          sgs: [
            {
              t: Acronyms.pr,
              r: true,
              l: labels.Priority || AcronymsDefaults.pr,
            },
            {
              t: Acronyms.op,
              r: true,
              l: labels.Optimize || AcronymsDefaults.op,
            },
            {
              t: Acronyms.ch,
              r: false,
              l: labels.Challenges || AcronymsDefaults.ch,
            },
            {
              t: Acronyms.co,
              r: false,
              l: labels.Collaboration || AcronymsDefaults.co,
            },
          ],
        },
      ].map(({ g, sgs }, i) => (
        <fieldset
          key={`${g}-${i}`}
          id={`fs${g}${cRole}`}
          className={`border p-4 mb-3 formMainFs fsCtxQuestions fs${cRole}`}
        >
          <legend
            className={classes.mainFsLegClasses}
            style={{ marginBottom: "0.5rem", paddingBottom: "1rem" }}
          >
            Tecnologias Gerais: {g === "Tasks" ? "Aplicativos" : "Plataformas"}
          </legend>
          <hr style={{ marginBlock: "2rem" }} />
          {sgs.map(({ t, r, l }, j) => (
            <ContextualText
              key={`${g}__${j}`}
              role={role}
              topic={t}
              required={r}
              label={l}
            />
          ))}
        </fieldset>
      ))}
      <Watcher _case='role' d={setKey} />
    </span>
  );
});
export default ContextualQuestions;
