"use client";
import { FormCtx } from "@/components/forms/RequirementForm";
import Watcher from "@/components/hidden/Watcher";
import ContextualText from "@/components/inputs/contextual/ContextualText";
import {
  Acronyms,
  AcronymsDefaults,
  CtxLabels,
  appGroups,
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
    ),
    data = [
      {
        g: "Tasks",
        sgs: [
          {
            a: "dt",
            t: Acronyms.dt,
            r: true,
            l: labels.DailyTasks || AcronymsDefaults.dt,
          },
          {
            a: "mt",
            t: Acronyms.mt,
            r: true,
            l: labels.MainTasks || AcronymsDefaults.mt,
          },
          {
            a: "ms",
            t: Acronyms.ms,
            r: false,
            l: labels.MainSw || AcronymsDefaults.ms,
          },
          {
            a: "as",
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
            a: "pr",
            t: Acronyms.pr,
            r: true,
            l: labels.Priority || AcronymsDefaults.pr,
          },
          {
            a: "op",
            t: Acronyms.op,
            r: true,
            l: labels.Optimize || AcronymsDefaults.op,
          },
          {
            a: "ch",
            t: Acronyms.ch,
            r: false,
            l: labels.Challenges || AcronymsDefaults.ch,
          },
          {
            a: "co",
            t: Acronyms.co,
            r: false,
            l: labels.Collaboration || AcronymsDefaults.co,
          },
        ],
      },
    ] as Array<{
      g: appGroups;
      sgs: Array<{
        a: keyof typeof Acronyms;
        t: Acronyms[keyof Acronyms];
        r: boolean;
        l:
          | (typeof labels)[keyof typeof labels]
          | AcronymsDefaults[keyof AcronymsDefaults];
      }>;
    }>;
  return (
    <span key={key}>
      {data.map(({ g, sgs }, i) => (
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
          {sgs.map(({ a, t, r, l }, j) => (
            <ContextualText
              key={`${g}__${j}`}
              acronym={a}
              topic={t}
              role={role}
              required={r}
              label={l as string}
            />
          ))}
        </fieldset>
      ))}
      <Watcher _case='role' d={setKey} />
    </span>
  );
});
export default ContextualQuestions;
