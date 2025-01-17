import { FormCtx } from "@/components/forms/RequirementForm";
import ContextualText from "@/components/inputs/contextual/ContextualText";
import { Acronyms, AcronymsDefaults, CtxLabels } from "@/lib/client/vars";
import { IFormCtx } from "@/lib/definitions/client/interfaces/contexts";
import { officeTopicType, roleType } from "@/lib/definitions/foundations";
import StringHelper from "@/lib/helpers/StringHelper";
import { useContext } from "react";
export default function ContextualQuestions() {
  let role: roleType = "undefined";
  const ctx = useContext<IFormCtx>(FormCtx);
  role = ctx.role || "undefined";
  const cRole = StringHelper.unfriendlyName(role, true),
    lRole = StringHelper.unfriendlyName(role),
    labels = Object.fromEntries(
      [
        ...["dt", "mt", "ms", "as", "pr", "op", "ch", "co"].map(
          a => (Acronyms as any)[a]
        ),
      ].map<[officeTopicType, string]>(t => {
        const map = CtxLabels.get(t);
        if (!map) return [t, ""];
        return [t, map.get(lRole) ?? ""];
      })
    ) as { [K in officeTopicType]: string };
  return (
    <>
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
    </>
  );
}
