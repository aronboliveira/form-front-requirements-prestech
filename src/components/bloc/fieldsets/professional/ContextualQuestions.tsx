import ContextualText from "@/components/inputs/contextual/ContextualText";
import { roleType } from "@/lib/definitions/foundations";
import StringHelper from "@/lib/helpers/StringHelper";
export default function ContextualQuestions({ role }: { role: roleType }) {
  const cRole = StringHelper.capitalize(role).replace(/\s\|/g, "");
  return (
    <>
      {[
        {
          g: "Tasks",
          sgs: [
            {
              t: "DailyTasks",
              r: true,
              l: "Quais são as suas principais tarefas diárias?",
            },
            {
              t: "MainTasks",
              r: true,
              l: "Quais são suas principais atividades na empresa que poderiam ser beneficiadas com novas automações e outros recursos virtuais?",
            },
            {
              t: "MainSw",
              r: false,
              l: "Quais ferramentas ou sistemas você utiliza rotineiramente?",
            },
            {
              t: "AddSw",
              r: false,
              l: "Caso utilize outros Softwares no contexto anterior, mencione aqui:",
            },
          ],
        },
        {
          g: "Platforms",
          sgs: [
            {
              t: "Priorization",
              r: true,
              l: "Como você utiliza tecnologias para a organização e planejamento das suas atividades de trabalho?",
            },
            {
              t: "Optimize",
              r: true,
              l: "Existem, no seu trabalho, processos manuais ou repetitivos que você acredita que poderiam ser melhorados com tecnologias novas ou mais atualizadas?",
            },
            {
              t: "Challenges",
              r: false,
              l: "Quais desafios você encontra ao utilizar as suas atuais tecnologias de trabalho? Comente comparando com outras semelhantes ou como gostaria de melhorar.",
            },
            {
              t: "Collaboration",
              r: false,
              l: "De que forma você utiliza as tecnologias para colaborar e integrar com a sua equipe de trabalho?",
            },
          ],
        },
      ].map(({ g, sgs }, i) => (
        <fieldset
          key={`${g}-${i}`}
          id={`fs${g}${cRole}`}
          className={`fsCtxQuestions fs${cRole}`}
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
