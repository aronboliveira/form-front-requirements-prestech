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
export const flags: {
  indexed: boolean;
  pt: boolean;
  failedTimeoutAttempts: number;
} = {
  indexed: false,
  pt: true,
  failedTimeoutAttempts: 0,
};
export const borderColors: { [k: string]: string } = {};
export const fontColors: { [k: string]: string } = {};
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
export const jsErrorsFriendlyNames: { [k: string]: Map<string, string> } = {
  EN: new Map<string, string>([
    ["TypeError", "Type Error"],
    ["SyntaxError", "Syntax Error"],
    ["ReferenceError", "Reference Error"],
    ["RangeError", "Range Error"],
    ["URIError", "URI Error"],
    ["IndexSizeError", "Index Size Error"],
    ["HierarchyRequestError", "Hierarchy Request Error"],
    ["EncodingError", "Encoding Error"],
    ["NamespaceError", "Namespace Error"],
    ["SyntaxError", "Syntax Error"],
    ["SecurityError", "Security Error"],
    ["InvalidAccessError", "Invalid Access Error"],
    ["WrongDocumentError", "Wrong Document Error"],
    ["NotFoundError", "Not Found Error"],
    ["NetworkError", "Network Error"],
    ["URLMismatchError", "URL Mismatch Error"],
    ["TransactionInactiveError", "Transaction Inactive Error"],
    ["QuotaExceededError", "Quota Exceeded Error"],
    ["TimeoutError", "Timeout Error"],
    ["AbortError", "Abort Error"],
    ["VersionError", "Version Error"],
    ["NotSupportedError", "Not Supported Error"],
    ["InvalidStateError", "Invalid State Error"],
    ["InvalidModificationError", "Invalid Modification Error"],
    ["InvalidCharacterError", "Invalid Character Error"],
    ["TypeMismatchError", "Type Mismatch Error"],
    ["DataCloneError", "Data Clone Error"],
    ["NotReadableError", "Not Readable Error"],
    ["ConstraintError", "Constraint Error"],
    ["ReadOnlyError", "Read Only Error"],
    ["OperationError", "Operation Error"],
    ["UnknownError", "Unknown Error"],
    ["InternalError", "Internal Error"],
    ["UnhandledException", "Unhandled Exception"],
  ]),
  PT: new Map<string, string>([
    ["TypeError", "Erro de Tipo"],
    ["SyntaxError", "Erro de Sintaxe"],
    ["ReferenceError", "Erro de Referência"],
    ["RangeError", "Erro de Intervalo"],
    ["URIError", "Erro de URI"],
    ["IndexSizeError", "Erro de Tamanho do Índice"],
    ["HierarchyRequestError", "Erro de Requisição de Hierarquia"],
    ["EncodingError", "Erro de Codificação"],
    ["NamespaceError", "Erro de Namespace"],
    ["SyntaxError", "Erro de Sintaxe"],
    ["SecurityError", "Erro de Segurança"],
    ["InvalidAccessError", "Erro de Acesso Inválido"],
    ["WrongDocumentError", "Erro de Documento Errado"],
    ["NotFoundError", "Erro de Não Encontrado"],
    ["NetworkError", "Erro de Rede"],
    ["URLMismatchError", "Erro de Incompatibilidade de URL"],
    ["TransactionInactiveError", "Erro de Transação Inativa"],
    ["QuotaExceededError", "Erro de Cota Excedida"],
    ["TimeoutError", "Erro de Tempo Esgotado"],
    ["AbortError", "Erro de Aborto"],
    ["VersionError", "Erro de Versão"],
    ["NotSupportedError", "Erro de Não Suportado"],
    ["InvalidStateError", "Erro de Estado Inválido"],
    ["InvalidModificationError", "Erro de Modificação Inválida"],
    ["InvalidCharacterError", "Erro de Caractere Inválido"],
    ["TypeMismatchError", "Erro de Incompatibilidade de Tipo"],
    ["DataCloneError", "Erro de Clone de Dados"],
    ["NotReadableError", "Erro de Não Legível"],
    ["ConstraintError", "Erro de Restrição"],
    ["ReadOnlyError", "Erro de Somente Leitura"],
    ["OperationError", "Erro de Operação"],
    ["UnknownError", "Erro Desconhecido"],
    ["InternalError", "Erro Interno"],
    ["UnhandledException", "Exceção Não Manipulada"],
  ]),
};
