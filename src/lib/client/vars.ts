import { roleQuestionsMap } from "../definitions/foundations";
const inps = `form-control`,
  texts = `${inps} form-text-area`,
  btn = `btn`;
export const classes: { [k: string]: string } = {
  inpDivClasses: `mb-3 inpDivClasses`,
  inpLabClasses: `form-label`,
  inpClasses: `${inps}`,
  textClasses: `${texts}`,
  contextualTextClasses: `${texts} contextualText`,
  ccClasses: `${inps} cc linked`,
  dddClasses: `${inps} ddd linked`,
  telClasses: `${inps} tel`,
  selectClasses: `form-select`,
  btnSec: `${btn} btn-secondary`,
  btnPrim: `${btn} btn-primary`,
};
export const flags: { [k: string]: string | boolean | number } = {
  indexed: false,
};
export const CtxLabels: roleQuestionsMap = new Map([
  [
    "DailyTasks",
    new Map([
      ["executivoAdministrativo", ""],
      ["financeiro", ""],
      ["comercial", ""],
      ["marketing", ""],
      ["suporteTecnicoN1", ""],
      ["suporteTecnicoN2", ""],
      ["operatorio", ""],
      ["desenvolvimento", ""],
      ["devOps", ""],
      ["default", "Quais são suas principais tarefas diárias?"],
    ]),
  ],
  [
    "MainTasks",
    new Map([
      ["executivoAdministrativo", ""],
      ["financeiro", ""],
      ["comercial", ""],
      ["marketing", ""],
      ["suporteTecnicoN1", ""],
      ["suporteTecnicoN2", ""],
      ["operatorio", ""],
      ["desenvolvimento", ""],
      ["devOps", ""],
      [
        "default",
        "Quais são suas principais atividade na empresa que poderiam ser beneficiadas com novas automações e ouros recursos virtuais?",
      ],
    ]),
  ],
  [
    "MainSw",
    new Map([
      ["executivoAdministrativo", ""],
      ["financeiro", ""],
      ["comercial", ""],
      ["marketing", ""],
      ["suporteTecnicoN1", ""],
      ["suporteTecnicoN2", ""],
      ["operatorio", ""],
      ["desenvolvimento", ""],
      ["devOps", ""],
      [
        "default",
        "Quais ferramentas digitais ou sistemas virtuais você utiliza rotineiramente no trabalho?",
      ],
    ]),
  ],
  [
    "AddSw",
    new Map([
      ["executivoAdministrativo", ""],
      ["financeiro", ""],
      ["comercial", ""],
      ["marketing", ""],
      ["suporteTecnicoN1", ""],
      ["suporteTecnicoN2", ""],
      ["operatorio", ""],
      ["desenvolvimento", ""],
      ["devOps", ""],
      [
        "default",
        "Caso utilize outros softwares no contexto anterior, mencione aqui:",
      ],
    ]),
  ],
  [
    "Priority",
    new Map([
      ["executivoAdministrativo", ""],
      ["financeiro", ""],
      ["comercial", ""],
      ["marketing", ""],
      ["suporteTecnicoN1", ""],
      ["suporteTecnicoN2", ""],
      ["operatorio", ""],
      ["desenvolvimento", ""],
      ["devOps", ""],
      [
        "default",
        "Como você utiliza tecnologias para a organização e planejamento das suas atividades de trabalho?",
      ],
    ]),
  ],
  [
    "Optimize",
    new Map([
      ["executivoAdministrativo", ""],
      ["financeiro", ""],
      ["comercial", ""],
      ["marketing", ""],
      ["suporteTecnicoN1", ""],
      ["suporteTecnicoN2", ""],
      ["operatorio", ""],
      ["desenvolvimento", ""],
      ["devOps", ""],
      [
        "default",
        "Existem, no seu trabalho, processos manuais ou repetitivos que você acredita que poderiam ser melhorados com tecnologias novas ou mais atualizadas?",
      ],
    ]),
  ],
  [
    "Challenges",
    new Map([
      ["executivoAdministrativo", ""],
      ["financeiro", ""],
      ["comercial", ""],
      ["marketing", ""],
      ["suporteTecnicoN1", ""],
      ["suporteTecnicoN2", ""],
      ["operatorio", ""],
      ["desenvolvimento", ""],
      ["devOps", ""],
      [
        "default",
        "Quais desafios você encontra ao utilizar as suas atuais tecnologias de trabalho? Comente comparando com outras tecnologias similares, se adequado, ou com maneiras como você gostaria de melhorar.",
      ],
    ]),
  ],
  [
    "Collaboration",
    new Map([
      ["executivoAdministrativo", ""],
      ["financeiro", ""],
      ["comercial", ""],
      ["marketing", ""],
      ["suporteTecnicoN1", ""],
      ["suporteTecnicoN2", ""],
      ["operatorio", ""],
      ["desenvolvimento", ""],
      ["devOps", ""],
      [
        "default",
        "De que forma você utiliza as tecnologias para colaborar e integrar com a sua equipe de trabalho?",
      ],
    ]),
  ],
]);
export const suggestionsDict: { [k: string]: string[] } = {};
