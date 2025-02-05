import {
  AudioAiQuestionKey,
  BiQuestionKey,
  ClassesKey,
  CloudStorageQuestionKey,
  CrmQuestionKey,
  DocsQuestionKey,
  EntryTypeDictionary,
  ErpQuestionKey,
  FieldDescription,
  FormBuilderQuestionKey,
  ImageAiQuestionKey,
  KeysRecords,
  LLMQuestionKey,
  PlanningQuestionKey,
  QuestionKey,
  QuestionsMap,
  ROFieldRecord,
  SpreadsheetsQuestionKey,
  VideoAiQuestionKey,
  cmComplexityKeySet,
  complexityDict,
  complexityKeySet,
  defComplexityKeySet,
  devComplexityKeySet,
  devOpsComplexityKeySet,
  eaComplexityKeySet,
  fnComplexityKeySet,
  mktComplexityKeySet,
  opComplexityKeySet,
  stN1ComplexityKeySet,
  stN2ComplexityKeySet,
} from "../definitions/client/helpers";
import {
  AiBlocks,
  OfficeBlocks,
  RangeCtxComponentNames,
  addQuestionsKey,
  complexityLabel,
  repeatingDefinitionKeys,
  repeatingKeys,
  roleQuestionsMap,
  roleType,
  techAppKey,
} from "../definitions/foundations";
import ObjectHelper from "../helpers/ObjectHelper";
import { limits } from "../vars";
//direct attributes and styles
const inps = `form-control`,
  texts = `${inps} form-text-area`,
  btn = `btn`,
  officeRangeds = `fsRanged fsOffice`;
export const classes: Readonly<Record<ClassesKey, string>> =
  Object.seal({
    inpDivClasses: `mb-3 inpDivClasses`,
    inpLabClasses: `form-label`,
    inpClasses: `${inps}`,
    inpCheckables: `form-check-input`,
    textClasses: `${texts}`,
    contextualTextClasses: `${texts} contextualText`,
    ccClasses: `${inps} cc linked`,
    dddClasses: `${inps} ddd linked`,
    telClasses: `${inps} tel`,
    selectClasses: `form-select`,
    btnSec: `${btn} btn-secondary`,
    btnPrim: `${btn} btn-primary`,
    mainFsClasses: `border p-4 mb-3 formMainFs`,
    mainFsLegClasses: `legMainFs bold`,
    officePlatforms: `${officeRangeds} fsOfficePlatforms`,
    officeApps: `${officeRangeds} fsOfficeApps`,
    aiApps: `fsRanged fsAis`,
  });
export enum colors {
  grey = "#8a8888",
  orangeRed = "#ff4d4d",
  orangeBasic = "#ffa500",
  yellowGold = "#ffea00",
  greenMid = "#32cd32",
  turquoise = "#11c2dded",
}
export const flags: {
  indexed: boolean;
  pt: boolean;
  isAutoCorrectOn: boolean;
  failedTimeoutAttempts: number;
} = {
  indexed: false,
  pt: true,
  isAutoCorrectOn: true,
  failedTimeoutAttempts: 0,
};
export const borderColors: { [k: string]: string } = {};
export const fontColors: { [k: string]: string } = {};
// General dictionaries
export const jsErrorsFriendlyNames: Readonly<{
  [k: string]: Map<string, string>;
}> = ObjectHelper.makeImmutable({
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
    [
      "TransactionInactiveError",
      "Transaction Inactive Error",
    ],
    ["QuotaExceededError", "Quota Exceeded Error"],
    ["TimeoutError", "Timeout Error"],
    ["AbortError", "Abort Error"],
    ["VersionError", "Version Error"],
    ["NotSupportedError", "Not Supported Error"],
    ["InvalidStateError", "Invalid State Error"],
    [
      "InvalidModificationError",
      "Invalid Modification Error",
    ],
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
    [
      "HierarchyRequestError",
      "Erro de Requisição de Hierarquia",
    ],
    ["EncodingError", "Erro de Codificação"],
    ["NamespaceError", "Erro de Namespace"],
    ["SyntaxError", "Erro de Sintaxe"],
    ["SecurityError", "Erro de Segurança"],
    ["InvalidAccessError", "Erro de Acesso Inválido"],
    ["WrongDocumentError", "Erro de Documento Errado"],
    ["NotFoundError", "Erro de Não Encontrado"],
    ["NetworkError", "Erro de Rede"],
    [
      "URLMismatchError",
      "Erro de Incompatibilidade de URL",
    ],
    [
      "TransactionInactiveError",
      "Erro de Transação Inativa",
    ],
    ["QuotaExceededError", "Erro de Cota Excedida"],
    ["TimeoutError", "Erro de Tempo Esgotado"],
    ["AbortError", "Erro de Aborto"],
    ["VersionError", "Erro de Versão"],
    ["NotSupportedError", "Erro de Não Suportado"],
    ["InvalidStateError", "Erro de Estado Inválido"],
    [
      "InvalidModificationError",
      "Erro de Modificação Inválida",
    ],
    ["InvalidCharacterError", "Erro de Caractere Inválido"],
    [
      "TypeMismatchError",
      "Erro de Incompatibilidade de Tipo",
    ],
    ["DataCloneError", "Erro de Clone de Dados"],
    ["NotReadableError", "Erro de Não Legível"],
    ["ConstraintError", "Erro de Restrição"],
    ["ReadOnlyError", "Erro de Somente Leitura"],
    ["OperationError", "Erro de Operação"],
    ["UnknownError", "Erro Desconhecido"],
    ["InternalError", "Erro Interno"],
    ["UnhandledException", "Exceção Não Manipulada"],
  ]),
});
export enum friendlyRoles {
  executivoAdministrativo = "Executivo | Administrativo",
  financeiro = "Financeiro",
  comercial = "Comercial",
  marketing = "Marketing",
  suporteTecnicoN1 = "Suporte Técnico N1",
  suporteTecnicoN2 = "Suport Técnico N2",
  operatorio = "Operatório",
  desenvolvimento = "Desenvolvimento",
  devOps = "DevOps",
  default = "Cargo Não Definido",
  undefined = "Cargo Indefinido",
}
export enum roleAcronyms {
  ea = friendlyRoles.executivoAdministrativo,
  fn = friendlyRoles.financeiro,
  cm = friendlyRoles.comercial,
  mkt = friendlyRoles.marketing,
  stN1 = friendlyRoles.suporteTecnicoN1,
  stN2 = friendlyRoles.suporteTecnicoN2,
  op = friendlyRoles.operatorio,
  dev = friendlyRoles.desenvolvimento,
  devOps = friendlyRoles.devOps,
  def = friendlyRoles.default,
}
export enum Acronyms {
  dt = "DailyTasks",
  mt = "MainTasks",
  ms = "MainSw",
  as = "AddSw",
  pr = "Priority",
  op = "Optimize",
  ch = "Challenges",
  co = "Collaboration",
}
export enum AcronymsDefaults {
  dt = "Quais são suas principais tarefas diárias?",
  mt = "Quais são suas principais atividade na empresa que poderiam ser beneficiadas com novas automações e ouros recursos virtuais?",
  ms = `Quais destas ferramentas digitais ou sistemas virtuais você utiliza rotineiramente no trabalho?`,
  as = "Caso utilize outros softwares no contexto anterior, mencione aqui:",
  pr = "Como você utiliza tecnologias para a organização e planejamento das suas atividades de trabalho?",
  op = "Existem, no seu trabalho, processos manuais ou repetitivos que você acredita que poderiam ser melhorados com tecnologias novas ou mais atualizadas?",
  ch = "Quais desafios você encontra ao utilizar as suas atuais tecnologias de trabalho? Comente comparando com outras tecnologias similares, se adequado, ou com maneiras como você gostaria de melhorar.",
  co = "De que forma você utiliza as tecnologias para colaborar e integrar com a sua equipe de trabalho?",
}
export enum friendlyApp {
  bi = "Plataformas para Inteligência de Negócios (PowerBI, Tableau, Qlik Sense, etc.)",
  crm = "Plataformas de Gerenciamento de Relação com Clientes e Equipes (Monday.com, ClickUp, Slack, Jira, etc.)",
  doc = "Softwares de Redação (Microsoft Word, Google Docs, Libre Office Writter, etc.)",
  erp = "Plataformas de Planejamento de Recursos de Negócios (SAP, SAT, TOTVS, SalesForce, etc.)",
  fm = "Softwares para Construção de Formulários (Google Forms, Jotform, Typeform, etc.)",
  pln = "Plataformas de Gestão de Atividades e Planejamento (Notion, Trello, Microsoft Planner, Google Calendar, etc.)",
  ss = "Softwares de Planilhamento (Microsoft Excel, Google Sheets, Libre Office Calc, etc.)",
  stg = "Plataformas de Armazenamento em Nuvem (Google Drive, Dropbox, Amazon S3, etc.)",
}
export enum friendlyAiName {
  audio = "Inteligências Artificiais Generativas de Áudio (ElevenLabs, PlayHT, ParrotAI, etc.)",
  image = "Inteligências Artificiais Generativas de Imagem (Dall-E, Midjourney, Stable Diffusion, etc.)",
  llms = "Grandes Modelos de Linguagem (ChatGPT, Gemini, LLaMa, GitHub Copilot, etc.)",
  video = "Inteligências Artificiais Generativas de Vídeo (Sora, Runway, Fliki, etc.)",
}
export const AcronymsApps: Record<
  addQuestionsKey,
  keyof typeof friendlyApp | keyof typeof friendlyAiName
> = ObjectHelper.makeImmutable({
  docs: "doc",
  spreadSheets: "ss",
  formBuilders: "fm",
  cloudStorage: "stg",
  businessInteligence: "bi",
  Crms: "crm",
  Erps: "erp",
  planning: "pln",
  audio: "audio",
  image: "image",
  video: "video",
  llms: "llms",
});
// Specific Apps grids
export const TechApps = {
  office365: "Office 365",
  outlook: "Outlook",
  slack: "Slack",
  googleDrive: "Google Drive",
  zoom: "Zoom",
  trello: "Trello",
  sapErp: "SAP ERP",
  msDynamicsCrm: "Microsoft Dynamics CRM",
  msTeams: "Microsoft Teams",
  sharePoint: "SharePoint",
  powerBi: "Power BI",
  yammer: "Yammer",
  asana: "Asana",
  box: "Box",
  oneDrive: "OneDrive",
  sapFico: "SAP FICO",
  oracleFinance: "Oracle Finance",
  msExcel: "Microsoft Excel",
  quickBooks: "QuickBooks",
  totvsProtheus: "TOTVS Protheus",
  netSuite: "NetSuite",
  xero: "Xero",
  tableau: "Tableau",
  sql: "SQL",
  python: "Python",
  googleFinance: "Google Finance",
  eikonReuters: "Eikon (Reuters)",
  bloombergTerminal: "Bloomberg Terminal",
  freshBooks: "FreshBooks",
  salesforce: "Salesforce",
  msDynamics365: "Microsoft Dynamics 365",
  pipedrive: "Pipedrive",
  hubspot: "HubSpot",
  linkedInSalesNavigator: "LinkedIn Sales Navigator",
  mailchimp: "Mailchimp",
  zoomInfo: "ZoomInfo",
  googleWorkspace: "Google Workspace",
  excel: "Microsoft Excel",
  whatsAppBusiness: "WhatsApp Business",
  twilio: "Twilio",
  googleAds: "Google Ads",
  facebookAds: "Facebook Ads",
  instagramAds: "Instagram Ads",
  googleAnalytics: "Google Analytics",
  semRush: "SEMRush",
  rdStation: "RD Station",
  canva: "Canva",
  wordpress: "WordPress",
  hootsuite: "Hootsuite",
  buffer: "Buffer",
  linkedInCampaignManager: "LinkedIn Campaign Manager",
  adobeIllustrator: "Adobe Illustrator",
  adobePhotoshop: "Adobe Photoshop",
  windows10_11: "Windows 10/11",
  macOs: "macOS",
  activeDirectoryBasic: "Active Directory (básico)",
  remoteDesktop: "Remote Desktop",
  ferramentasAntivirus: "Ferramentas AntiVirus",
  zendesk: "Zendesk (Service Desk)",
  chromeOs: "Chrome OS",
  ios: "iOS",
  android: "Android",
  ferramentasRedeBasicas:
    "Ferramentas de Rede Básicas (Ping, Tracert)",
  sistemasTicketBasicos: "Sistemas de Ticket Básicos",
  windowsServer: "Windows Server",
  linuxServer: "Linux Server",
  activeDirectoryAdvanced: "Active Directory (avançado)",
  exchange: "Exchange",
  serviceNow: "ServiceNow",
  itilTools: "ITIL Tools",
  vmwareVirtualBox: "Virtualização (VMware/VirtualBox)",
  cisco: "Switches e Roteadores (Cisco)",
  firewallFortinet: "Firewall Fortinet",
  wireshark: "Wireshark",
  scripting: "Scripting (PowerShell/Bash)",
  monitoramento:
    "Ferramentas de Monitoramento (Zabbix, Nagios)",
  endpointManagement: "Endpoint Management (SCCM)",
  antimalwareEnterpriseTools:
    "AntiMalware Enterprise Tools",
  backupRestoreAvancado: "Backup e Restore Avançado",
  totvs: "TOTVS",
  sapEcc: "SAP ECC",
  jira: "Jira",
  docker: "Docker",
  oracleDatabase: "Oracle Database",
  postgreSql: "PostgreSQL",
  mySql: "MySQL",
  linuxBash: "Linux Bash",
  git: "Git",
  jenkins: "Jenkins",
  grafana: "Grafana",
  java: "Java",
  javaScript: "JavaScript",
  csharp: "C#",
  nodeJs: "Node.js",
  react: "React",
  angular: "Angular",
  gitHub: "GitHub",
  sqlDatabases: "SQL Databases",
  noSql: "NoSQL (MongoDB, DynamoDB)",
  aws: "AWS",
  azure: "Azure",
  kubernetes: "Kubernetes",
  gitLabCiCd: "GitLab CI/CD",
  terraform: "Terraform",
  ansible: "Ansible",
  chef: "Chef",
  puppet: "Puppet",
  prometheus: "Prometheus",
  elkStack: "ELK Stack",
  helm: "Helm",
} as const;
export const dictLabelsRange: {
  office: OfficeBlocks;
  ai: AiBlocks;
} = {
  office: {
    apps: {
      doc: friendlyApp.doc,
      form: friendlyApp.fm,
      spreadSheet: friendlyApp.ss,
      storage: friendlyApp.stg,
    },
    platforms: {
      bi: friendlyApp.bi,
      crm: friendlyApp.crm,
      erp: friendlyApp.erp,
      planning: friendlyApp.pln,
    },
  },
  ai: {
    audio: friendlyAiName.audio,
    image: friendlyAiName.image,
    llms: friendlyAiName.llms,
    video: friendlyAiName.video,
  },
};
export const groupedApps: Readonly<
  Record<roleType, Array<techAppKey[]>>
> = ObjectHelper.makeImmutable({
  executivoAdministrativo: [
    ["office365", "outlook", "slack", "googleDrive"],
    ["zoom", "trello", "sapErp", "msDynamicsCrm"],
    ["msTeams", "sharePoint", "powerBi", "yammer"],
    ["asana", "box", "oneDrive", "sapFico"],
  ],
  financeiro: [
    [
      "oracleFinance",
      "msExcel",
      "quickBooks",
      "totvsProtheus",
    ],
    ["netSuite", "xero", "tableau", "sql"],
    [
      "python",
      "googleFinance",
      "eikonReuters",
      "bloombergTerminal",
    ],
    [
      "freshBooks",
      "salesforce",
      "msDynamics365",
      "pipedrive",
    ],
  ],
  comercial: [
    [
      "hubspot",
      "linkedInSalesNavigator",
      "mailchimp",
      "zoomInfo",
    ],
    [
      "googleWorkspace",
      "excel",
      "whatsAppBusiness",
      "twilio",
    ],
    [
      "googleAds",
      "facebookAds",
      "instagramAds",
      "googleAnalytics",
    ],
    ["semRush", "rdStation", "canva", "wordpress"],
  ],
  marketing: [
    [
      "hootsuite",
      "buffer",
      "linkedInCampaignManager",
      "adobeIllustrator",
    ],
    [
      "adobePhotoshop",
      "windows10_11",
      "macOs",
      "activeDirectoryBasic",
    ],
    [
      "remoteDesktop",
      "ferramentasAntivirus",
      "zendesk",
      "chromeOs",
    ],
    [
      "ios",
      "android",
      "ferramentasRedeBasicas",
      "sistemasTicketBasicos",
    ],
  ],
  suporteTecnicoN1: [
    [
      "windowsServer",
      "linuxServer",
      "activeDirectoryAdvanced",
      "exchange",
    ],
    [
      "serviceNow",
      "itilTools",
      "vmwareVirtualBox",
      "cisco",
    ],
    [
      "firewallFortinet",
      "wireshark",
      "scripting",
      "monitoramento",
    ],
    [
      "endpointManagement",
      "antimalwareEnterpriseTools",
      "backupRestoreAvancado",
      "totvs",
    ],
  ],
  suporteTecnicoN2: [
    ["sapEcc", "jira", "docker", "oracleDatabase"],
    ["postgreSql", "mySql", "linuxBash", "git"],
    ["jenkins", "grafana", "java", "javaScript"],
    ["csharp", "nodeJs", "react", "angular"],
  ],
  operatorio: [
    ["sapEcc", "jira", "docker", "oracleDatabase"],
    ["postgreSql", "mySql", "linuxBash", "git"],
    ["jenkins", "grafana", "java", "javaScript"],
    ["csharp", "nodeJs", "react", "angular"],
  ],
  desenvolvimento: [
    ["sapEcc", "jira", "docker", "oracleDatabase"],
    ["postgreSql", "mySql", "linuxBash", "git"],
    ["jenkins", "grafana", "java", "javaScript"],
    ["csharp", "nodeJs", "react", "angular"],
  ],
  devOps: [
    ["gitHub", "sqlDatabases", "noSql", "aws"],
    ["azure", "kubernetes", "gitLabCiCd", "terraform"],
    ["ansible", "chef", "puppet", "prometheus"],
  ],
  undefined: [[]],
});
export const CtxLabels: roleQuestionsMap = Object.seal(
  new Map([
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
        [
          "default",
          "Quais são suas principais tarefas diárias?",
        ],
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
          `Quais destas ferramentas digitais ou sistemas virtuais você utiliza rotineiramente no trabalho?`,
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
  ])
);
// Suggestions for autocomplete
export const suggestionsDict: { [k: string]: string[] } =
  {};
export const suggestionsGroupsMap: Readonly<
  Map<
    keyof typeof friendlyRoles,
    Map<keyof typeof AcronymsDefaults, string[]>
  >
> = ObjectHelper.makeImmutable(
  new Map([
    [
      "executivoAdministrativo",
      new Map([
        [
          "dt",
          [
            "Gerenciar reuniões",
            "Supervisionar equipes",
            "Aprovar relatórios",
            "Organizar cronogramas",
            "Monitorar KPIs",
          ],
        ],
        [
          "mt",
          [
            "Controle de agendamentos",
            "Aprovação de propostas",
            "Gestão de contratos",
            "Organização de reuniões",
            "Acompanhamento de metas",
          ],
        ],
        [
          "ms",
          [
            "Google Workspace",
            "Microsoft Teams",
            "Zoom",
            "Trello",
            "Asana",
          ],
        ],
        [
          "as",
          [
            "DocuSign",
            "Jira",
            "Tableau",
            "Notion",
            "ClickUp",
          ],
        ],
        [
          "pr",
          [
            "Uso de ferramentas de planejamento",
            "Integração com calendários",
            "Automação de lembretes",
            "Consolidação de tarefas",
            "Uso de dashboards de desempenho",
          ],
        ],
        [
          "op",
          [
            "Automação de agendamentos",
            "Digitalização de documentos",
            "Simplificação de fluxos de trabalho",
            "Acompanhamento de projetos",
            "Relatórios automatizados",
          ],
        ],
        [
          "ch",
          [
            "Integração limitada de ferramentas",
            "Curva de aprendizado alta",
            "Problemas de compatibilidade",
            "Falta de automação em processos",
            "Baixa conectividade entre sistemas",
          ],
        ],
        [
          "co",
          [
            "Uso de chats e e-mails",
            "Compartilhamento de documentos",
            "Acompanhamento de tarefas em equipe",
            "Reuniões virtuais",
            "Gestão colaborativa de projetos",
          ],
        ],
      ]),
    ],
    [
      "financeiro",
      new Map([
        [
          "dt",
          [
            "Processar pagamentos",
            "Gerenciar fluxo de caixa",
            "Analisar balanços",
            "Conciliar contas",
            "Emitir notas fiscais",
          ],
        ],
        [
          "mt",
          [
            "Automação de conciliação bancária",
            "Controle de despesas",
            "Processamento de pagamentos",
            "Gestão de orçamentos",
            "Análise de dados financeiros",
          ],
        ],
        [
          "ms",
          [
            "SAP",
            "Totvs",
            "QuickBooks",
            "Oracle Financials",
            "Conta Azul",
          ],
        ],
        [
          "as",
          [
            "FreshBooks",
            "NetSuite",
            "Wave",
            "GnuCash",
            "Budgeto",
          ],
        ],
        [
          "pr",
          [
            "Automação de orçamentos",
            "Relatórios detalhados",
            "Previsão financeira",
            "Integração com sistemas bancários",
            "Análises de desempenho em tempo real",
          ],
        ],
        [
          "op",
          [
            "Automação de fluxo de caixa",
            "Emissão automática de relatórios",
            "Gestão digital de impostos",
            "Simplificação de pagamentos",
            "Consolidação de dados financeiros",
          ],
        ],
        [
          "ch",
          [
            "Erro em cálculos manuais",
            "Falta de integração entre sistemas",
            "Demora na consolidação de relatórios",
            "Dificuldade em prever tendências",
            "Interface de sistemas antigos",
          ],
        ],
        [
          "co",
          [
            "Compartilhamento de relatórios financeiros",
            "Uso de dashboards colaborativos",
            "Integração com times de vendas",
            "Colaboração em auditorias",
            "Planejamento financeiro conjunto",
          ],
        ],
      ]),
    ],
    [
      "comercial",
      new Map([
        [
          "dt",
          [
            "Realizar vendas",
            "Prospectar clientes",
            "Fechar negócios",
            "Atualizar CRM",
            "Analisar mercados",
          ],
        ],
        [
          "mt",
          [
            "Automação de follow-ups",
            "Gestão de CRM",
            "Integração com e-mails",
            "Relatórios de desempenho",
            "Controle de pipeline",
          ],
        ],
        [
          "ms",
          [
            "Salesforce",
            "HubSpot",
            "Pipedrive",
            "Zoho CRM",
            "RD Station",
          ],
        ],
        [
          "as",
          [
            "Freshsales",
            "Insightly",
            "Close CRM",
            "Bitrix24",
            "ActiveCampaign",
          ],
        ],
        [
          "pr",
          [
            "Segmentação de leads",
            "Planejamento de vendas",
            "Integração de dados de mercado",
            "Criação de campanhas personalizadas",
            "Relatórios de metas de vendas",
          ],
        ],
        [
          "op",
          [
            "Automação de envio de e-mails",
            "Gestão simplificada de leads",
            "Planejamento automatizado de vendas",
            "Relatórios em tempo real",
            "Follow-ups automáticos",
          ],
        ],
        [
          "ch",
          [
            "Baixa integração com sistemas internos",
            "Falta de dados centralizados",
            "Relatórios demorados",
            "Curva de aprendizado de ferramentas",
            "Dificuldade em prever tendências de mercado",
          ],
        ],
        [
          "co",
          [
            "Coordenação com marketing",
            "Integração com suporte técnico",
            "Uso de dashboards compartilhados",
            "Colaboração em estratégias de vendas",
            "Comunicação direta com clientes",
          ],
        ],
      ]),
    ],
    [
      "marketing",
      new Map([
        [
          "dt",
          [
            "Planejar campanhas",
            "Gerenciar redes sociais",
            "Analisar métricas de desempenho",
            "Criar conteúdo publicitário",
            "Desenvolver estratégias de branding",
          ],
        ],
        [
          "mt",
          [
            "Automação de e-mails",
            "Análise de dados de campanhas",
            "Gestão de leads",
            "Otimização de SEO",
            "Planejamento de mídias pagas",
          ],
        ],
        [
          "ms",
          [
            "Google Analytics",
            "HubSpot",
            "Canva",
            "Hootsuite",
            "SEMRush",
          ],
        ],
        [
          "as",
          [
            "Mailchimp",
            "Buffer",
            "Adobe Photoshop",
            "Trello",
            "Monday.com",
          ],
        ],
        [
          "pr",
          [
            "Planejamento colaborativo de campanhas",
            "Automação de relatórios de marketing",
            "Integração de plataformas de CRM",
            "Criação de conteúdo automatizado",
            "Análise de dados preditiva",
          ],
        ],
        [
          "op",
          [
            "Automação de postagens",
            "Segmentação de campanhas com IA",
            "Simplificação de relatórios",
            "Integração de ferramentas de marketing",
            "Otimização de processos de criação",
          ],
        ],
        [
          "ch",
          [
            "Falta de integração entre plataformas",
            "Dificuldade em analisar dados em tempo real",
            "Ferramentas desatualizadas",
            "Falta de automação em processos manuais",
            "Dificuldade em gerenciar várias campanhas simultaneamente",
          ],
        ],
        [
          "co",
          [
            "Colaboração com equipes de vendas",
            "Integração com design para campanhas",
            "Coordenação com parceiros externos",
            "Planejamento conjunto de estratégias",
            "Gestão compartilhada de leads",
          ],
        ],
      ]),
    ],
    [
      "suporteTecnicoN1",
      new Map([
        [
          "dt",
          [
            "Atender chamados",
            "Resolver problemas básicos",
            "Redirecionar chamados para N2",
            "Configurar dispositivos",
            "Atualizar sistemas operacionais",
          ],
        ],
        [
          "mt",
          [
            "Automação de triagem de chamados",
            "Diagnóstico rápido de problemas",
            "Simplificação de processos de registro",
            "Integração com sistemas de suporte",
            "Gestão de prioridades",
          ],
        ],
        [
          "ms",
          [
            "Freshdesk",
            "Zendesk",
            "Jira Service Management",
            "SysAid",
            "TeamViewer",
          ],
        ],
        [
          "as",
          [
            "SolarWinds",
            "ManageEngine",
            "LogMeIn",
            "ServiceNow",
            "Microsoft Teams",
          ],
        ],
        [
          "pr",
          [
            "Resolução rápida de problemas comuns",
            "Relatórios detalhados para escalonamento",
            "Acompanhamento de desempenho em tempo real",
            "Uso de scripts padronizados",
            "Planejamento de melhorias no atendimento",
          ],
        ],
        [
          "op",
          [
            "Automação de triagem",
            "Simplificação de diagnósticos",
            "Monitoramento proativo de tickets",
            "Automação de respostas para problemas recorrentes",
            "Integração com ferramentas de chatbots",
          ],
        ],
        [
          "ch",
          [
            "Falta de documentação clara",
            "Problemas em integrar sistemas de suporte",
            "Dificuldade em lidar com picos de chamados",
            "Curva de aprendizado de ferramentas",
            "Falta de automação em processos simples",
          ],
        ],
        [
          "co",
          [
            "Integração com N2 para escalonamento",
            "Comunicação com clientes",
            "Colaboração em resolução de problemas",
            "Compartilhamento de relatórios",
            "Coordenação com equipes de infraestrutura",
          ],
        ],
      ]),
    ],
    [
      "suporteTecnicoN2",
      new Map([
        [
          "dt",
          [
            "Resolver problemas complexos",
            "Apoiar Nível 1",
            "Testar soluções",
            "Gerenciar incidentes críticos",
            "Manter documentações técnicas",
          ],
        ],
        [
          "mt",
          [
            "Automação de diagnósticos",
            "Análise preditiva de problemas",
            "Gerenciamento de escalonamentos",
            "Integração de ferramentas avançadas",
            "Monitoramento de sistemas críticos",
          ],
        ],
        [
          "ms",
          [
            "Splunk",
            "Nagios",
            "Zabbix",
            "New Relic",
            "Dynatrace",
          ],
        ],
        [
          "as",
          [
            "Datadog",
            "Prometheus",
            "SolarWinds",
            "PagerDuty",
            "OpsGenie",
          ],
        ],
        [
          "pr",
          [
            "Análise de logs automatizada",
            "Implementação de políticas de segurança",
            "Monitoramento em tempo real",
            "Escalonamento eficiente",
            "Relatórios de desempenho técnico",
          ],
        ],
        [
          "op",
          [
            "Automação de relatórios de incidentes",
            "Detecção automatizada de vulnerabilidades",
            "Melhoria de processos de solução",
            "Monitoramento proativo",
            "Diagnósticos com inteligência artificial",
          ],
        ],
        [
          "ch",
          [
            "Curva de aprendizado para ferramentas avançadas",
            "Baixa integração com sistemas legados",
            "Falta de documentação centralizada",
            "Tempo elevado para diagnósticos",
            "Limitações de ferramentas existentes",
          ],
        ],
        [
          "co",
          [
            "Colaboração com fornecedores",
            "Integração com equipes de operações",
            "Gestão de projetos técnicos interdepartamentais",
            "Compartilhamento de conhecimentos especializados",
            "Participação em revisões pós-incidente",
          ],
        ],
      ]),
    ],
    [
      "operatorio",
      new Map([
        [
          "dt",
          [
            "Operar equipamentos",
            "Manter linha de produção",
            "Realizar inspeções",
            "Garantir segurança no trabalho",
            "Supervisionar processos produtivos",
          ],
        ],
        [
          "mt",
          [
            "Automação de linhas de produção",
            "Monitoramento de qualidade",
            "Otimização de processos",
            "Integração com sistemas ERP",
            "Treinamento automatizado",
          ],
        ],
        [
          "ms",
          [
            "SAP ERP",
            "Oracle E-Business Suite",
            "Microsoft Dynamics",
            "Siemens SIMATIC",
            "Honeywell Experion",
          ],
        ],
        [
          "as",
          [
            "Rockwell Automation",
            "ABB Ability",
            "IFS Applications",
            "Infor CloudSuite",
            "GE Digital",
          ],
        ],
        [
          "pr",
          [
            "Planejamento de manutenções",
            "Otimização de consumo de recursos",
            "Relatórios em tempo real",
            "Gerenciamento de produção",
            "Previsão de falhas",
          ],
        ],
        [
          "op",
          [
            "Digitalização de registros",
            "Automação de tarefas repetitivas",
            "Monitoramento em tempo real",
            "Integração de dispositivos IoT",
            "Gestão de qualidade automatizada",
          ],
        ],
        [
          "ch",
          [
            "Falta de integração entre sistemas",
            "Sistemas desatualizados",
            "Curva de aprendizado para novos operadores",
            "Tempo para implementação de mudanças",
            "Baixa conectividade com dispositivos IoT",
          ],
        ],
        [
          "co",
          [
            "Coordenação com manutenção",
            "Comunicação com fornecedores",
            "Integração com equipes de engenharia",
            "Compartilhamento de dados de produção",
            "Gestão colaborativa de projetos",
          ],
        ],
      ]),
    ],
    [
      "desenvolvimento",
      new Map([
        [
          "dt",
          [
            "Escrever código",
            "Fazer revisões de PR",
            "Testar funcionalidades",
            "Planejar sprints",
            "Documentar projetos",
          ],
        ],
        [
          "mt",
          [
            "Automação de deploys",
            "Integração contínua",
            "Gestão de branches",
            "Otimização de pipelines",
            "Acompanhamento de métricas de código",
          ],
        ],
        [
          "ms",
          [
            "GitHub",
            "GitLab",
            "Jenkins",
            "SonarQube",
            "VS Code",
          ],
        ],
        [
          "as",
          [
            "Bitbucket",
            "CircleCI",
            "Eclipse",
            "NetBeans",
            "IntelliJ IDEA",
          ],
        ],
        [
          "pr",
          [
            "Automação de testes",
            "Revisões colaborativas de código",
            "Análise estática automatizada",
            "Integração de ferramentas de monitoramento",
            "Planejamento ágil em plataformas digitais",
          ],
        ],
        [
          "op",
          [
            "Automação de tarefas repetitivas",
            "Gerenciamento simplificado de deploys",
            "Monitoramento automatizado de sistemas",
            "Pipeline de CI/CD otimizado",
            "Integração contínua simplificada",
          ],
        ],
        [
          "ch",
          [
            "Baixa cobertura de testes",
            "Problemas de integração entre equipes",
            "Curva de aprendizado para novas ferramentas",
            "Falta de automação em processos",
            "Gerenciamento de branches desorganizado",
          ],
        ],
        [
          "co",
          [
            "Uso de ferramentas de versionamento",
            "Planejamento colaborativo de sprints",
            "Integração com equipes de operações",
            "Revisões de código em equipe",
            "Documentação conjunta de projetos",
          ],
        ],
      ]),
    ],
    [
      "devOps",
      new Map([
        [
          "dt",
          [
            "Gerenciar infraestrutura",
            "Monitorar sistemas",
            "Automatizar deploys",
            "Garantir segurança",
            "Planejar arquitetura de sistemas",
          ],
        ],
        [
          "mt",
          [
            "Automação de provisionamento",
            "Monitoramento de desempenho",
            "Gerenciamento de containers",
            "Gestão de logs",
            "Otimização de custos na nuvem",
          ],
        ],
        [
          "ms",
          [
            "Docker",
            "Kubernetes",
            "AWS",
            "Azure DevOps",
            "Terraform",
          ],
        ],
        [
          "as",
          [
            "Google Cloud Platform",
            "Ansible",
            "Puppet",
            "Chef",
            "Datadog",
          ],
        ],
        [
          "pr",
          [
            "Automação de escalabilidade",
            "Integração contínua eficiente",
            "Monitoramento centralizado",
            "Gestão de pipelines de CI/CD",
            "Implementação de segurança em infraestruturas",
          ],
        ],
        [
          "op",
          [
            "Automação de deploys",
            "Otimização de custos em infraestrutura",
            "Monitoramento proativo",
            "Simplificação de provisionamento",
            "Gestão eficiente de containers",
          ],
        ],
        [
          "ch",
          [
            "Complexidade de ferramentas",
            "Baixa integração com equipes de desenvolvimento",
            "Falta de visibilidade em sistemas legados",
            "Problemas de escalabilidade",
            "Curva de aprendizado para novos sistemas",
          ],
        ],
        [
          "co",
          [
            "Integração com equipes de desenvolvimento",
            "Planejamento colaborativo de infraestruturas",
            "Compartilhamento de métricas",
            "Colaboração em soluções de segurança",
            "Gestão conjunta de pipelines",
          ],
        ],
      ]),
    ],
    ["default", new Map()],
    ["undefined", new Map()],
  ])
);
// Related to range inputs
const required = true,
  exp = `Qual é o seu nível de experiência`,
  fam = `Qual é a sua familiaridade`,
  tcn = `Quais destas técnicas`,
  sttg = `Quais destas estratégias`,
  frq = `Com que frequência você`,
  tls = `Quais destas ferramentas`,
  rsc = `Quais destes recursos`,
  cts = `Quais critérios você`,
  mnn = `De que maneiras você`;
export const appGroupsDict: Record<
  RangeCtxComponentNames,
  addQuestionsKey
> = ObjectHelper.makeImmutable({
  AudioAis: "audio",
  ImageAis: "image",
  Llms: "llms",
  VideoAis: "video",
  Bi: "businessInteligence",
  Crms: "Crms",
  Docs: "docs",
  Erps: "Erps",
  FormBuilders: "formBuilders",
  Planning: "planning",
  Spreadsheets: "spreadSheets",
  StoragePlatforms: "cloudStorage",
});
export const libre: Readonly<
  Record<addQuestionsKey, string>
> = ObjectHelper.makeImmutable(
  Object.fromEntries(
    (
      [
        "docs",
        "spreadSheets",
        "formBuilders",
        "cloudStorage",
        "businessInteligence",
        "Crms",
        "Erps",
        "planning",
        "audio",
        "image",
        "video",
        "llms",
      ] as addQuestionsKey[]
    ).map(k => [
      k,
      "Use esse espaço para incluir informações que desejar sobre o seu trabalho com " +
        `${((): string => {
          try {
            const acronym = AcronymsApps[k];
            if (!acronym) return k;
            const friendly = [
              "audio",
              "image",
              "video",
              "llms",
            ].includes(acronym)
              ? friendlyAiName[
                  acronym as keyof typeof friendlyAiName
                ]
              : friendlyApp[
                  acronym as keyof typeof friendlyApp
                ];
            if (!friendly) return k;
            //@ts-ignore
            let reversed = friendly.split("").toReversed();
            return reversed
              .slice(reversed.indexOf("(") + 1)
              .reverse()
              .join("");
          } catch (e) {
            return k;
          }
        })()}` +
        " (ex.: Possíveis automações e melhorias em plataformas de trabalho)",
    ])
  )
) as Readonly<Record<addQuestionsKey, string>>;
export const repeated: Readonly<{
  [K in repeatingKeys]: string;
}> = ObjectHelper.makeImmutable({
  fmt: `${fam} com formatações simples (negrito, itálico, cabeçalho)?`,
  sum: `${fam} com funções matemáticas básicas (ex.: SOMA, MÉDIA, SOMASE)?`,
  tmp: "De que forma você aproveita modelos (templates) prontos para criar documentos básicos?",
  mcr: "Que estratégias de scripts (VBA, AppScript, Python) você utiliza para automatizar tarefas repetitivas?",
  big: `${frq} integra ou exporta dados para ferramentas de BI (ex.: Power BI, Data Studio)?`,
  arr: "Você domina ou utiliza fórmulas matriciais (ex.: ÍNDICE, CORRESP) para cálculos avançados?",
  tbd: "Como você utiliza tabelas dinâmicas para analisar grandes quantidades de dados?",
});
function withFrozenLibreLabel<
  T extends Record<string, any>
>(dict: T, _case: addQuestionsKey): T {
  dict = ObjectHelper.makeMutable(dict);
  Object.keys(dict).forEach(k => {
    try {
      if (!libre[_case]) return;
      if (!("lib" in dict))
        (dict as any)[k] = {
          ...dict[k],
          lib: libre[_case],
        };
    } catch (e) {
      console.error(
        `Error including libre field for ${
          ObjectHelper.JSONSafeStringify(dict) ||
          dict.toString()
        }:\n${(e as Error).message}`
      );
    }
  });
  return ObjectHelper.deepFreeze(dict);
}
export const fmGeneralKeys = ObjectHelper.makeImmutable({
  tpl: `${frq} utiliza templates prontos para elaborar questionários?`,
  rsp: "Quais são suas formas preferenciais de salvar dados de um formulário?",
  emb: `${tcn} você utiliza com mais frequência para analisar resultados aglomerados de múltiplas submissões de um formulário?`,
  plt: `${tls} você utiliza para construção de formulários?`,
  slc: "Descreva livremente seu critério para escolher entre múltipla escolha (dropdowns, rádios, checkboxes) ou respostas paragrafadas",
});
export const fmBeginnerKeys = ObjectHelper.makeImmutable({
  crt: `${exp} criando formulários para coleta de dados?`,
  ...fmGeneralKeys,
});
export const fmIntermediateKeys =
  ObjectHelper.makeImmutable({
    ...fmGeneralKeys,
    aut: "Como você configura para envio de notificações ou respostas?",
    api: `${frq} integra formulários a APIs para coleta ou envio de dados?`,
  });
export const fmExpertKeys = ObjectHelper.makeImmutable({
  ...fmGeneralKeys,
  dsh: "Como você conecta formulários a dashboards para relatórios em tempo real?",
});
export const csGeneralKeys = ObjectHelper.makeImmutable({
  syn: "Quais destas plataformas de armazenamento em nuvem você tem preferência por utilizar?",
  shr: "Quais são suas formas preferidas de habilitar o compartilhamento de arquivos em nuvem com outros colaboradores?",
  org: "Descreva seus critérios para organizar pastas e arquivos armazenados em nuvem (ex.: Padrão de nomenclatura, Lógicas de Separação, etc.)",
});
export const csBeginnerKeys = ObjectHelper.makeImmutable({
  upl: `${exp} em enviar arquivos para armazenamento em nuvem?`,
  ...csGeneralKeys,
  acc: "Você já configurou permissões básicas (somente leitura, edição, tipos de restrição) para arquivos em nuvem?",
});
export const csIntermediateKeys =
  ObjectHelper.makeImmutable({
    ...csGeneralKeys,
    ver: "Como você lida com controle de versões para evitar perda de dados?",
    bck: `${frq} executa backups de pastas ou arquivos importantes para nuvens?`,
    sch: `${cts} utiliza para garantir conformidade com normas de gestão de dados compartilhados (ex.: LGPD) ao trabalhar na nuvem?`,
  });
export const csExpertKeys = ObjectHelper.makeImmutable({
  ...csGeneralKeys,
  scp: "Quais destas tecnologias você utiliza para automatizar procedimentos de gestão, controle e governança de dados em nuvem?",
  sch: `${cts} utiliza para garantir conformidade com normas de gestão de dados compartilhados (ex.: LGPD) ao trabalhar na nuvem?`,
});
export const biGeneralKeys = ObjectHelper.makeImmutable({
  con: `${sttg} você usa para conectar
  suas fontes de dados (planilhas, CSV, bancos, etc.) nas ferramentas de BI?`,
  grf: `${exp} utilizando os recursos nativos da ferramenta de BI para criar gráficos?`,
  fil: `${tcn} você utiliza para aplicar filtros e segmentações nativas da ferramenta para refinar suas visualizações?`,
  atz: `${frq} configura atualizações automáticas dos dados nas ferramentas de BI?`,
  col: `${rsc} você utiliza para compartilhar dashboards e relatórios diretamente pela ferramenta de BI?`,
});
export const biBeginnerKeys = ObjectHelper.makeImmutable({
  ...biGeneralKeys,
});
export const biIntermediateKeys =
  ObjectHelper.makeImmutable({
    ...biGeneralKeys,
    mdl: `${exp} modelando e transformando dados usando os recursos da ferramenta de BI para criar dashboards robustos?`,
    aut: `${exp} utilizando as automações nativas da ferramenta de BI para atualizar os dados?`,
    int: `${sttg} você utiliza para integrar diferentes fontes de dados na ferramenta de BI para análises detalhadas?`,
  });
export const biExpertKeys = ObjectHelper.makeImmutable({
  ...biGeneralKeys,
  adv: `${sttg} você utiliza para otimizar a performance de consultas e visualizações em dashboards com grandes volumes de dados?`,
  gov: `${exp} usando recursos avançados de segurança e governança (ex.: RLS) das ferramenta de BI?`,
  api: `${exp} integrando APIs ou scripts personalizados nas ferramentas de BI para automação e customização?`,
});
export const crmGeneralKeys = ObjectHelper.makeImmutable({
  con: `${mnn} conecta dados de clientes (leads, contatos) na plataforma de CRM (ex.: Salesforce, HubSpot)?`,
  vis: `${rsc} nativos da plataforma para visualizar pipelines e funis de vendas?`,
  seg: `${tcn} utiliza filtros predefinidos para segmentar clientes e leads?`,
  rep: `${mnn} gera relatórios e dashboards para monitorar o desempenho comercial?`,
  atz: `${frq} configura atualizações automáticas dos dados ou realiza importações manuais?`,
});
export const crmBeginnerKeys = ObjectHelper.makeImmutable({
  crt: `${fam} com as funcionalidades básicas de plataformas de CRM?`,
  ...crmGeneralKeys,
});
export const crmIntermediateKeys =
  ObjectHelper.makeImmutable({
    ...crmGeneralKeys,
    mdl: `${mnn} organiza e estrutura os dados de clientes para criar funis de vendas mais detalhados?`,
    aut: `${tcn} você utiliza para que as automações nativas dispararem alertas e atualizem o status dos leads?`,
    int: `${mnn} integra a plataforma de CRM com outras ferramentas (ex.: e-mail, marketing)?`,
  });
export const crmExpertKeys = ObjectHelper.makeImmutable({
  ...crmGeneralKeys,
  adv: `${sttg} você utiliza para recursos avançados da plataforma de CRM buscando prever oportunidades e personalizar campanhas?`,
  gov: `${cts} implementa para governança e segurança na gestão dos dados de clientes?`,
  api: `${tcn} você utiliza para integrar APIs ou scripts personalizados buscando automatizar processos e customizar a plataforma de CRM?`,
});
export const erpGeneralKeys = ObjectHelper.makeImmutable({
  cad: `${frq} cadastra fornecedores, produtos ou clientes simples sem grande complexidade em ERPs?`,
  rep: `${frq} gera relatórios iniciais (vendas, pedidos) diretamente dos ERPs?`,
  doc: `${rsc} você usa para salvar ou imprimir documentos fiscais gerados em ERPs?`,
});
export const erpBeginnerKeys = ObjectHelper.makeImmutable({
  crt: `${fam} com as funcionalidades básicas de um ERP?`,
  ...erpGeneralKeys,
});
export const erpIntermediateKeys =
  ObjectHelper.makeImmutable({
    wfl: `${sttg} você considera para configurar fluxos intermediários (ex.: aprovação, descontos) dentro dos ERPs?`,
    rel: `${sttg} você usa para elaborar relatórios customizados para análises específicas usando o ERP?`,
    mig: `${frq} importa dados de planilhas ou migra entre ambientes (homologação, produção) em ERPs?`,
    sec: `${rsc} você usa para definir permissões específicas para diferentes áreas (ex.: compras, vendas) em ERPs?`,
    int: `${mnn} integra o ERP com outras ferramentas (ex.: CRM, e-commerce)?`,
    ...erpGeneralKeys,
  });
export const erpExpertKeys = ObjectHelper.makeImmutable({
  ha_: `${exp} implantando alta disponibilidade (cluster, failover) em ERPs para evitar interrupções?`,
  prc: `${rsc} você usa para orquestrar processos complexos (ex.: MRP, produção) e auditar logs em ERPs?`,
  gov: `${sttg} você usa para implementar governança, compliance (LGPD, etc.) e auditoria avançada em ERPs?`,
  ...erpGeneralKeys,
});
export const plnGeneralKeys = ObjectHelper.makeImmutable({
  tpl: `${frq} utiliza templates prontos para organizar suas tarefas e compromissos?`,
  col: "Quais métodos você utiliza para colaborar e compartilhar quadros ou listas de tarefas?",
  rep: "Quais padrões de relatórios ou dashboards você gera para acompanhar o progresso das atividades?",
  sch: "Descreva seus principais critérios que você considera ao definir e revisar seus cronogramas e prazos nas suas ferramentas de planejamento",
});
export const plnBeginnerKeys = ObjectHelper.makeImmutable({
  aut: `${frq} cria automações para atualizar status ou enviar notificações em seus boards?`,
  crt: "Quais são as principais ferramentas e subpaineis utilizados por você nestas plataformas?",
  ...plnGeneralKeys,
});
export const plnIntermediateKeys =
  ObjectHelper.makeImmutable({
    int: `${tls} você utiliza para integrar suas ferramentas de planejamento com outros sistemas?`,
    sec: "Quais destas práticas você utiliza para gerenciar permissões e acessos para diferentes times nos seus quadros e agendas?",
    crt: "Quais são as principais ferramentas e subpaineis utilizados por você nestas plataformas?",
    ...plnGeneralKeys,
  });
export const plnExpertKeys = ObjectHelper.makeImmutable({
  ...plnGeneralKeys,
  adv: "Quais práticas você utiliza para consolidar dados de múltiplos quadros para criar dashboards executivos?",
  sci: "Você utiliza ou participa de metodologias avançadas de gerência (Scrum, Kanban) para otimização da performance de times?",
  api: "Como você integra APIs ou scripts para automatizar a criação, movimentação e atualização de tarefas em massa?",
});
export const aiAdGeneralKeys = ObjectHelper.makeImmutable({
  gen: `${exp} utilizando IA generativa para criar e manipular áudios?`,
  evl: `${cts} utiliza para avaliar e determinar a qualidade dos áudios gerados pela IA?`,
  tts: `${frq} utiliza IAs para recursos de text-to-spreech?`,
  cln: `${frq} utiliza IAs para "clonagem" de vozes?`,
  int: "Quais são os principais casos de uso para IA em áudio na sua rotina específica de trabalho?",
});
export const aiAdBeginnerKeys = ObjectHelper.makeImmutable({
  set: "Você já configurou um ambiente básico para captura e conversão de áudio com IA?",
  ...aiAdGeneralKeys,
});
export const aiAdIntermediateKeys =
  ObjectHelper.makeImmutable({
    ...aiAdGeneralKeys,
    edt: "Quais as principais ferramentas que você utiliza para editar ou ajustar os áudios gerados por IAs?",
    doc: "Você documenta os processos e configurações utilizados para trabalhar com áudios gerados por IA?",
    ing: "Como você integra a IA de áudio em fluxos de trabalho mais complexos?",
  });
export const aiAdExpertKeys = ObjectHelper.makeImmutable({
  ...aiAdGeneralKeys,
  adv: `${frq} utiliza integrações avançadas ou APIs para otimização de áudio via IA?`,
  vol: "Você automatiza a produção e análise de grandes volumes de áudios com IA?",
  sec: "Como você implementa medidas de segurança para proteger áudios gerados por IA?",
});
export const aiImgGeneralKeys = ObjectHelper.makeImmutable({
  gen: `${exp} utilizando IA generativa para criar e manipular imagens?`,
  evl: `${cts} utiliza para avaliar a qualidade das imagens geradas pelas IAs?`,
  opt: `${tls} você utiliza para editar e otimizar a qualidade das imagens geradas pelas IAs?`,
  fmt: `${tls} você utiliza para converter o formato das imagens geradas por IAs?`,
  col: `${frq} utiliza IAs para aplicar ajustes automáticos de cor ou filtros em imagens?`,
  int: "Quais são os principais casos de uso para IA em imagens na sua rotina específica de trabalho?",
});
export const aiImgBeginnerKeys = ObjectHelper.makeImmutable(
  {
    set: "Você já configurou um ambiente básico para captura e edição simples de imagens com IA?",
    ...aiImgGeneralKeys,
  }
);
export const aiImgIntermediateKeys =
  ObjectHelper.makeImmutable({
    doc: `${frq} documenta os processos e configurações utilizados para trabalhar com imagens geradas por IA?`,
    ing: "Como você integra as imagens geradas por IA em fluxos de trabalho mais complexos?",
    ...aiImgGeneralKeys,
  });
export const aiImgExpertKeys = ObjectHelper.makeImmutable({
  adv: `${frq} utiliza integrações avançadas ou APIs para otimização de imagens via IA?`,
  vol: "Você automatiza a produção e análise de grandes volumes de imagens (ao menos 1GB) com IAs?",
  sec: "Como você implementa medidas de segurança para proteger as imagens geradas por IA?",
  ...aiImgGeneralKeys,
});
export const aiVdGeneralKeys = ObjectHelper.makeImmutable({
  gen: `${exp} utilizando IA generativa para criar e manipular vídeos?`,
  evl: `${cts} utiliza para avaliar e determinar a qualidade dos vídeos gerados pela IA?`,
  tts: `${frq} utiliza IAs Generativas com recursos de text-to-video?`,
  cln: `${frq} utiliza IAs para replicação de estilos visuais, como templates?`,
  int: "Quais são os principais casos de uso para IA em vídeo na sua rotina específica de trabalho?",
});
export const aiVdBeginnerKeys = ObjectHelper.makeImmutable({
  cnt: "Você já utilizou IAs Generativas de Vídeo para transicionar diferentes imagens?",
  set: `${exp} utilizando ferramentas de roteirização ou storyboards com ferramentas de IAs Generativas?`,
  ...aiVdGeneralKeys,
});
export const aiVdIntermediateKeys =
  ObjectHelper.makeImmutable({
    edt: "Quais as principais ferramentas que você utiliza para editar ou ajustar os vídeos gerados por IAs?",
    doc: "Você documenta os processos e configurações utilizados para trabalhar com vídeos gerados por IA?",
    ing: "Como você integra os vídeos gerados por IA em fluxos automáticos de trabalho?",
    ...aiVdGeneralKeys,
  });
export const aiVdExpertKeys = ObjectHelper.makeImmutable({
  adv: `${frq} utiliza integrações avançadas (como chamadas de APIs) para envio automático de vídeos manipulados por IAs?`,
  edt: "Quais as principais ferramentas que você utiliza para editar ou ajustar os vídeos gerados por IAs?",
  txt: "Descreva pontos críticos dos seus padrões de roteirização para geração de vídeos com IAs automáticas",
  ...aiVdGeneralKeys,
});
export const llmGeneralKeys = ObjectHelper.makeImmutable({
  lan: "Em que idiomas você costuma interagir com LLMs?",
  val: `${frq} considera que as LLMs trazem retornos inadequados ou insatisfatórios?`,
  col: "Descreva, de forma geral, os seus principais casos de uso (possíveis ou em prática) de LLMs na rotina de trabalho",
});
export const llmBeginnerKeys = ObjectHelper.makeImmutable({
  use: `${exp} interagindo com LLMs (ChatGPT, Claude, DeepSeek, etc.)?`,
  sec: "Você mascara dados sensíveis (Chaves de API, Senhas, Dados pessoais) em prompts?",
  ...llmGeneralKeys,
});
export const llmIntermediateKeys =
  ObjectHelper.makeImmutable({
    ...llmGeneralKeys,
    ext: `${frq} solicita para que as LLMs processem dados diretamente em formatos de imagens bitmap (.png, .jpeg) ou PDFs?`,
    stp: "Descreva, de forma geral, as principais diferenças na forma como você solicita prompts para modelos baseados em chain-of-thought (ChatGPT o1, DeepSeek R1) vs. outras famílias de modelos",
  });
export const llmExpertKeys = ObjectHelper.makeImmutable({
  ...llmGeneralKeys,
  fin: "Quais destas práticas você adota para realizar o refinamento de resultados de prompts ao iniciar uma sessão com uma LLM?",
  int: "Você possui LLMs integradas em sistemas da sua rotina de trabalho, para uso de terceiros (ex.: como chatbots)?",
  mlt: "Você já participou ativamente do treinamento (aprendizado de máquina) de LLMs, seja no desenvolvimento direto ou estabelecimento de parâmetros?",
  ext: `${frq} solicita para que as LLMs processem dados diretamente em formatos de imagens bitmap (.png, .jpeg) ou PDFs?`,
});
export const defaultQuestionsDict: Readonly<{
  beginner: {
    df1: string;
    df2: string;
    df3: string;
  };
  intermediate: {
    df4: string;
    df5: string;
  };
  expert: {
    df6: string;
    df7: string;
  };
}> = ObjectHelper.makeImmutable({
  beginner: {
    df1: "O quanto você se considera iniciante em uso de ferramentas tecnológicas do dia a dia?",
    df2: `${frq} recorre a internet (tutoriais, vídeos) para resolver dúvidas simples?`,
    df3: "De que forma você organiza informações básicas em planilhas ou anotações?",
  },
  intermediate: {
    df4: "Como você integra diferentes ferramentas (email, calendário, anotações) para maior eficiência?",
    df5: "O quanto você domina uso de macros ou pequenos scripts para automação básica?",
  },
  expert: {
    df6: "Descreva como você cria fluxos de trabalho complexos integrando múltiplas tecnologias:",
    df7: "O quanto você planeja e gerencia soluções de TI em larga escala (várias equipes)?",
  },
});
export const defDocsKeys = withFrozenLibreLabel(
  {
    beginner: {
      fmt: repeated.fmt,
      tem: repeated.tmp,
      use: `${frq} escreve textos simples (relatórios, anotações) em um editor de texto básico?`,
      col: "Como você compartilha ou colabora em documentos com outras pessoas?",
      exp: `${exp} em exportar documentos para PDF ou outros formatos?`,
    },
    intermediate: {
      rev: `${tcn} você usa para controlar revisões (histórico de versões, comentários) quando trabalha num documento?`,
      mac: "Você utiliza macros ou funcionalidades automatizadas para padronizar formatação ou inserir campos?",
      cmp: `Quais destas ferramentas você utiliza para converter formatos de arquivos de documentos?`,
      per: "Qual é sua prática para proteger documentos com senha ou restrição de edição?",
      lay: "De que forma você organiza seções, sumário automático ou referências cruzadas em textos maiores?",
    },
    expert: {
      vba: repeated.mcr,
      sec: `${sttg} você utiliza para controlar o acesso em um editor de texto?`,
      idx: `${exp} criando índices remissivos, estilos de parágrafo avançados ou capítulos em docs complexos?`,
      api: "Como você integra APIs ou plugins externos para enriquecer a edição (ex.: checagem gramatical)?",
      adv: "De que modo você gerencia documentos de alto volume (100+ páginas), mantendo consistência e performance?",
    },
  },
  "docs"
);
export const defSsKeys = withFrozenLibreLabel(
  {
    beginner: {
      mth: `${frq} utiliza funções de cálculos básicos (ex.: SOMA, MÉDIA) em planilhas para tarefas rotineiras?`,
      fmt: "Como você formata células (cores, bordas) para destacar dados importantes?",
      fil: `${tcn} você utiliza para filtrar dados em uma planilha?`,
      col: `${frq} compartilha planilhas para que outros possam visualizar ou editar?`,
      bar: `${frq} cria gráficos para ilustrar resultados ou tendências?`,
    },
    intermediate: {
      piv: repeated.tbd,
      fml: `${exp} com funções intermediárias (ex.: SE, PROCV, CONCAT) para definir relações de dados complexas?`,
      val: `${frq} aplica validações de dados (listas suspensas, restrições de valor) nas células?`,
      net: `${frq} integra ou importa dados externos (ex.: planilhas online, CSV) para comparar informações?`,
      sec: "De que modo você protege certas abas ou intervalos contra edições indevidas?",
    },
    expert: {
      mcr: `${exp} criando macros ou scripts (VBA, Google Apps Script) para automatizar processos extensos?`,
      prf: `${exp} realizando tuning ou otimização quando há muitas fórmulas e abas, evitando lentidão?`,
      big: `${frq} manipula dados volumosos (milhares de linhas) e os consolida em dashboards avançados?`,
      aud: "Qual é sua prática ao auditar ou rastrear mudanças em planilhas grandes (logs, versões anteriores)?",
      dbi: "Como você conecta planilhas a bancos de dados ou APIs e atualiza os dados periodicamente?",
    },
  },
  "spreadSheets"
);
export const defFmKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...fmBeginnerKeys,
    },
    intermediate: {
      ...fmIntermediateKeys,
    },
    expert: {
      ...fmExpertKeys,
    },
  },
  "formBuilders"
);
export const defCsKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...csBeginnerKeys,
    },
    intermediate: {
      ...csIntermediateKeys,
    },
    expert: {
      ...csExpertKeys,
    },
  },
  "cloudStorage"
);
export const defBiKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...biBeginnerKeys,
    },
    intermediate: {
      ...biIntermediateKeys,
    },
    expert: {
      ...biExpertKeys,
    },
  },
  "businessInteligence"
);
export const defCrmKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...crmBeginnerKeys,
    },
    intermediate: {
      ...crmIntermediateKeys,
    },
    expert: {
      ...crmExpertKeys,
    },
  },
  "Crms"
);
export const defErpKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...erpBeginnerKeys,
    },
    intermediate: {
      ...erpIntermediateKeys,
    },
    expert: {
      ...erpExpertKeys,
    },
  },
  "Erps"
);
export const defPlnKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...plnBeginnerKeys,
    },
    intermediate: {
      ...plnIntermediateKeys,
    },
    expert: {
      ...plnExpertKeys,
    },
  },
  "planning"
);
export const defAiAdKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...aiAdBeginnerKeys,
    },
    intermediate: {
      ...aiAdIntermediateKeys,
    },
    expert: {
      ...aiAdExpertKeys,
    },
  },
  "audio"
);
export const defAiImgKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...aiImgBeginnerKeys,
    },
    intermediate: {
      ...aiImgIntermediateKeys,
    },
    expert: {
      ...aiImgExpertKeys,
    },
  },
  "image"
);
export const defAiVdKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...aiVdBeginnerKeys,
    },
    intermediate: {
      ...aiVdIntermediateKeys,
    },
    expert: {
      ...aiVdExpertKeys,
    },
  },
  "video"
);
export const defLlmKeys = withFrozenLibreLabel(
  {
    beginner: {
      usr: "Você utiliza chatbots de IA (ChatGPT, etc.) para responder perguntas gerais ou curiosidades?",
      prp: "Como você elabora perguntas (prompts) simples para obter respostas úteis na IA?",
      cor: "Em que frequência você verifica a precisão das respostas obtidas, comparando com fontes confiáveis?",
      lan: "Você conversa na IA em português ou inglês? Qual é seu grau de conforto nisso?",
      alr: "Você está ciente de que as IA podem 'alucinar' respostas incorretas? (Sim/Não)",
    },
    intermediate: {
      cxt: "Você utiliza contexto adicional (system, role messages) para guiar respostas mais personalizadas?",
      scr: "De que forma você integra a IA em scripts ou apps simples (via API) para automatizar algumas consultas?",
      seg: "Você filtra dados sensíveis (senhas, informações privadas) antes de inserir no prompt?",
      rpd: "Você re-prompta a IA quando recebe algo incoerente e corrige a linha de raciocínio? (Sim/Não)",
      col: "Em que frequência você colabora com colegas para elaborar prompts detalhados, focados em um assunto?",
    },
    expert: {
      adv: "Como você realiza prompt engineering avançado (ex.: few-shot learning) para obter respostas complexas?",
      fin: "Você lida com fine-tuning ou custom instructions em modelos open-source, localmente ou em cloud?",
      aud: "De que forma você mantém logs de perguntas/respostas e evita expor dados confidenciais para a IA?",
      mlb: "Em que frequência você avalia a qualidade (métricas) das respostas geradas pela IA e ajusta prompts?",
      bch: "Você executa batch de perguntas automáticas (ex.: script chamando API) e processa resultados massivos?",
    },
  },
  "llms"
);
export const defAddQuestions: [
  roleType,
  QuestionsMap<defComplexityKeySet>
] = Object.seal([
  "default",
  new Map([
    ["docs", defDocsKeys as any],
    ["spreadSheets", defSsKeys],
    ["formBuilders", defFmKeys],
    ["cloudStorage", defCsKeys],
    ["businessInteligence", defBiKeys],
    ["Crms", defCrmKeys],
    ["Erps", defErpKeys],
    ["planning", defPlnKeys],
    ["audio", defAiAdKeys],
    ["image", defAiImgKeys],
    ["video", defAiVdKeys],
    ["llms", defLlmKeys],
  ]),
]) as any;
export const undefinedAddQuestions: [
  roleType,
  QuestionsMap<defComplexityKeySet>
] = Object.seal([
  "undefined",
  new Map([
    ["docs", defDocsKeys as any],
    ["spreadSheets", defSsKeys],
    ["formBuilders", defFmKeys],
    ["cloudStorage", defCsKeys],
    ["businessInteligence", defBiKeys],
    ["Crms", defCrmKeys],
    ["Erps", defErpKeys],
    ["planning", defPlnKeys],
    ["audio", defAiAdKeys],
    ["image", defAiImgKeys],
    ["video", defAiVdKeys],
    ["llms", defLlmKeys],
  ]),
]) as any;
export const eaDocsKeys = withFrozenLibreLabel(
  {
    beginner: {
      fmt: repeated.fmt,
      tmp: repeated.tmp,
      cbb: "Como você gerencia a colaboração de documentos entre membros de equipes?",
      frq: `${frq} compartilha documentos para edição com colegas?`,
      rdo: "Qual forma de resposta em formulário você tem preferência?",
      exp: "O quanto você é familizariado com exportações em diferentes formatos, como .pdf ou .txt?",
      prt: "Qual sua experiência em configurar documentos para impressão?",
      spl: "Como você separa seções ou capítulos em documentos longos?",
      edt: "Você prefe edições de documentos online ou offline?",
      syn: "De que forma você sincroniza documentos em diferentes dispositivos?",
    },
    intermediate: {
      tpl: "Como você cria sumários automáticos ou referências cruzadas em documentos extensos?",
      rev: `${mnn} controla alterações e histórico de versões para múltiplos revisores?`,
      mac: "Quais tecnologias você utiliza parar criar macros ou automações para padronizar relatórios?",
      sgn: `${frq} assina documentos digitalmente?`,
      stt: "Que tipo de estratégia e ferramentas você utiliza para formatação do layout de edição?",
      idx: "Qual é a sua familaridade gerando índices remissivos automaticamente?",
      fmt: `${mnn} utiliza estilos personalizados para padronizar relatórios?`,
      crt: `${frq} edita documentos colaborativos com permissões restritas por usuário?`,
      exp: "Qual sua experiência em exportar documentos com configurações avançadas (marcas d’água, proteção)?",
      api: `${frq} integra editores de texto com APIs externas (ex.: para preenchimento automático)?`,
    },
    expert: {
      vba: repeated.mcr,
      sec: `${frq} lida com permissões avançadas, criptografia ou restrições de edição?`,
      stl: "Descreva como você gerencia estilos de parágrafo, índice remissivo e formatação de layout altamente customizada.",
      big: `${frq} integra editores de texto a sistemas externos (APIs, bancos de dados)?`,
      adv: "Que técnicas avançadas (campos dinâmicos, mala direta) você utiliza em documentos corporativos?",
      mlc: "Você já aplicou aprendizado de máquina para gerar ou analisar texto automaticamente?",
      int: `${frq} integração com plataformas como SharePoint, OneDrive ou GitHub para gerenciamento de documentos?`,
      tem: `${frq} gerencia templates corporativos com restrições para diferentes departamentos?`,
      dig: "De que forma você implementa processos de assinatura digital ou certificação de documentos?",
      rpt: "Qual sua experiência em gerar relatórios analíticos automatizados com base em texto estruturado?",
    },
  },
  "docs"
);
export const eaSsKeys = withFrozenLibreLabel(
  {
    beginner: {
      sum: repeated.sum,
      frq: `${frq} configura planilhas para controle de dados simples?`,
      col: "Como você colore ou categoriza células para destacar informações importantes?",
      spr: "Você prefere responder perguntas por meio de seletores (radio, select) ou textos longos?",
      fil: "De que modo você filtra ou classifica dados de forma simples?",
      frz: "Como você congela linhas ou colunas em planilhas?",
      fmt: "Você já utilizou formatação condicional em planilhas simples?",
      cpy: `${exp} com copiar/colar fórmulas e preservar referências absolutas?`,
      ins: `${mnn} insere gráficos básicos para ilustrar dados?`,
      shs: "Você trabalha frequentemente com abas múltiplas em planilhas?",
    },
    intermediate: {
      piv: repeated.tbd,
      adv: `${frq} integra dados de outras fontes (CSV, BD) na planilha?`,
      prc: "Em que frequência você cria fórmulas intermediárias (SE, PROCV, CONCAT) para automação?",
      cht: "Que tipos de gráficos você costuma gerar para visualização?",
      col: "Como você colabora com outros usuários simultaneamente (co-edit, proteções)?",
      tbl: `${frq} voceê cria tabelas formatadas para facilitar análises e filtros?`,
      spl: "Como você divide dados em colunas separadas (Texto para Colunas)?",
      lnk: "Qual sua experiência em vincular células entre diferentes planilhas?",
      imp: `${frq} importa dados de fontes online para análises em tempo real?`,
      aud: "De que forma você audita ou depura fórmulas para corrigir erros?",
    },
    expert: {
      mcr: repeated.mcr,
      big: repeated.big,
      arr: repeated.arr,
      dbi: "Descreva como você conecta planilhas a bancos de dados SQL ou APIs, se aplicável.",
      prf: `${frq} faz tuning de performance em planilhas com dezenas de abas e fórmulas complexas?`,
      sch: `${frq} utiliza scripts para agendar atualizações automáticas de dados?`,
      mlc: "Você utiliza Aprendizado de máquina para prever ou categorizar dados?",
      api: "De que forma você utiliza APIs para buscar ou enviar dados automaticamente?",
      adv: "Que práticas avançadas você utiliza para validar e limpar grandes volumes de dados?",
      rpt: "Detalhe como você cria relatórios interativos integrando gráficos e controles (ex.: slicers)?",
    },
  },
  "spreadSheets"
);
export const eaFmKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...fmBeginnerKeys,
    },
    intermediate: {
      ...fmIntermediateKeys,
    },
    expert: {
      ...fmExpertKeys,
      adv: "Descreva de forma geral as suas políticas de segurança para o tráfego de informação aglomeradas por formulários",
    },
  },
  "formBuilders"
);
export const eaCsKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...csBeginnerKeys,
    },
    intermediate: {
      ...csIntermediateKeys,
      colab:
        "Defina seus critérios para garantir a correta política de colaboração nos sistemas em nuvem entre membros da equipe que você coordenada",
    },
    expert: {
      ...csExpertKeys,
      int: "Como você integra armazenamento em nuvem a sistemas corporativos ou CRMs?",
      big: `${mnn} lida com grandes volumes de dados e distribuição eficiente entre equipes?`,
    },
  },
  "cloudStorage"
);
export const eaBiKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...biBeginnerKeys,
      ead: `${frq} utiliza os recursos básicos de exportação e compartilhamento dos dashboards da ferramenta?`,
      eas: `${frq} revisa os relatórios gerados para apoiar decisões administrativas?`,
    },
    intermediate: {
      ...biIntermediateKeys,
      eai: `${rsc} você utiliza para personaliza os dashboards para integrar dados administrativos e operacionais?`,
      eax: `${exp} com recursos de interatividade (drill-through, filtros dinâmicos) nos relatórios?`,
    },
    expert: {
      ...biExpertKeys,
      eae: `${exp} com análises preditivas integradas à ferramenta de BI para processos administrativos?`,
      eam: "Descreva os principais pontos do seu fluxo de trabalho quando você consolida dados de múltiplos departamentos em dashboards executivos",
    },
  },
  "businessInteligence"
);
export const eaCrmKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...crmBeginnerKeys,
      ead: `${frq} recursos de exportação e compartilhamento dos dashboards para apoiar decisões administrativas?`,
      eas: `${frq} os relatórios gerados para identificar oportunidades de melhoria na gestão de clientes?`,
    },
    intermediate: {
      ...crmIntermediateKeys,
      eai: `${sttg} você usa para integrar dados administrativos ao CRM para obter insights estratégicos?`,
      eax: `${exp} utilizando automações para consolidar informações de diferentes departamentos no CRM?`,
    },
    expert: {
      ...crmExpertKeys,
      eae: `${exp} com análises preditivas no CRM para suportar decisões executivas?`,
      eam: `${sttg} você adota para consolidar dados de múltiplos setores em dashboards estratégicos no CRM?`,
    },
  },
  "Crms"
);
export const eaErpKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...erpBeginnerKeys,
      eab: `${frq} extrai relatórios do ERP para apoiar decisões administrativas?`,
      eac: `${mnn} exporta dados (PDF, CSV) e compartilha com gestores ou outros departamentos?`,
    },
    intermediate: {
      ...erpIntermediateKeys,
      eai: `${mnn} alinha módulos administrativos (compras, vendas) para gerar visões consolidadas no ERP?`,
      eax: `${cts} aplica ao definir fluxos e permissões que atendam às necessidades de áreas distintas?`,
    },
    expert: {
      ...erpExpertKeys,
      eae: `${exp} em scripts avançados (ABAP, TOTVS) para automatizar rotinas administrativas e reduzir retrabalho?`,
      eaz: `${mnn} consolida dashboards executivos (governança, compliance) unindo dados de múltiplos módulos?`,
    },
  },
  "Erps"
);
export const eaPlnKeys = ObjectHelper.makeImmutable({
  ...defPlnKeys,
});
export const eaAiAdKeys = ObjectHelper.makeImmutable({
  ...defAiAdKeys,
});
export const eaAiImgKeys = ObjectHelper.makeImmutable({
  ...defAiImgKeys,
});
export const eaAiVdKeys = ObjectHelper.makeImmutable({
  ...defAiVdKeys,
});
export const eaLlmKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...llmBeginnerKeys,
    },
    intermediate: {
      ...llmIntermediateKeys,
      mon: "Como você considera que as LLMs podem beneficar suas práticas de monitoramento de equipes e designação de tarefas?",
      doc: `${frq} utiliza LLMs para produzir ou analisar relatórios e documentos corporativos?`,
    },
    expert: {
      ...llmExpertKeys,
      mon: "Como você considera que as LLMs podem beneficar suas práticas de monitoramento de equipes e designação de tarefas?",
      doc: `${frq} utiliza LLMs para produzir ou analisar relatórios e documentos corporativos?`,
    },
  },
  "llms"
);
export const eaAddQuestions: [
  roleType,
  QuestionsMap<eaComplexityKeySet>
] = Object.seal([
  "executivoAdministrativo",
  new Map<
    addQuestionsKey,
    complexityDict<eaComplexityKeySet>
  >([
    ["docs", eaDocsKeys as any],
    ["spreadSheets", eaSsKeys],
    ["formBuilders", eaFmKeys],
    ["cloudStorage", eaCsKeys],
    ["businessInteligence", eaBiKeys],
    ["Crms", eaCrmKeys],
    ["Erps", eaErpKeys],
    ["planning", eaPlnKeys],
    ["audio", eaAiAdKeys],
    ["image", eaAiImgKeys],
    ["video", eaAiVdKeys],
    ["llms", eaLlmKeys],
  ]),
]);
export const fnDocsKeys = withFrozenLibreLabel(
  {
    beginner: {
      frm: "Como você elabora documentos financeiros simples (propostas, orçamentos) e formata texto básico?",
      ref: "De que forma você insere referências internas ou notas explicativas em documentos?",
      rev: `${frq} revisa contratos ou relatórios de texto para ver se há erros de digitação ou valores trocados?`,
      upg: `${tls} você utiliza para gerenciar versões de documentos e relatórios?`,
      cmt: "Quais recursos você utiliza para comentar e fazer sugestões em documentos e relatórios?",
    },
    intermediate: {
      stl: "Quais são as suas práticas para padronizar estilos (cabeçalho, corpo, rodapé) em relatórios financeiros intermediários?",
      trc: "Como você controla versões quando várias pessoas revisam o mesmo documento simultaneamente?",
      ast: "Você já configurou assinatura digital em relatórios financeiros? Como?",
      dbl: `${mnn} integra dados de planilhas ou bancos de dados em documentos de texto?`,
      alt: "Você faz uso de texto alternativo ou marcações adicionais para facilitar auditorias? (Sim/Não)",
    },
    expert: {
      mac: repeated.mcr,
      cmp: "Como você compara documentos de versões diferentes para identificar mudanças? (ex.: diferenças de datas, valores)",
      rpt: "De que forma você cria relatórios consolidados extensos (ex.: de desempenho financeiro anual) com sumário, índice e seções detalhadas?",
      seg: "Você implementa permissões avançadas ou encriptação para relatórios confidenciais?",
      apx: "Como você gerencia anexos ou apêndices em documentos de fechamento contábil e fiscal complexos?",
    },
  },
  "docs"
);
export const fnSsKeys = withFrozenLibreLabel(
  {
    beginner: {
      sum: repeated.sum,
      frq: `${frq} configura planilhas para registrar receitas e despesas?`,
      col: "Como você marca células com cores para diferenciar gastos fixos de variáveis?",
      cat: "De que modo você categoriza transações (alimentação, transporte, etc.) de forma simples?",
      fil: "Como você utiliza filtros básicos para visualizar apenas certos períodos ou tipos de despesas?",
    },
    intermediate: {
      tab: repeated.tbd,
      adv: "Como você integra planilhas financeiras a outras fontes de dados, como extratos bancários?",
      dev: `${frq} usa fórmulas intermediárias (PROCV, SE, TIR) para simulações financeiras?`,
      cht: "Que tipos de gráficos você gera para ilustrar resultados financeiros?",
      val: "Quais dessa técnicas você utilizar para validar dados de entrada para evitar erros em análises financeiras?",
    },
    expert: {
      big: repeated.big,
      arr: repeated.arr,
      mcr: repeated.mcr,
      dbi: "De que forma você conecta planilhas a bancos de dados ou APIs para buscar cotações ou indicadores?",
      aud: "Como você audita fórmulas e checa consistência de resultados em planilhas de grande porte?",
    },
  },
  "spreadSheets"
);
export const fnFmKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...fmBeginnerKeys,
    },
    intermediate: {
      ...fmIntermediateKeys,
      fwd: "Descreva em suas palavras como você encaminha as respostas para outros setores responsáveis, detalhando etapas automáticas e manuais",
    },
    expert: {
      ...fmExpertKeys,
      sec: "Como você lida com confidencialidade de informações (RG, CPF, dados bancários) em formulários de reembolso?",
      dsh: "Como você conecta esses formulários a dashboards financeiros em tempo real (ex.: Google Data Studio)?",
    },
  },
  "formBuilders"
);
export const fnCsKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...csBeginnerKeys,
      org: "Descreva seus critérios gerais para organizar pastas de extratos, demonstrações e notas fiscais para facilitar a busca",
    },
    intermediate: {
      ...csIntermediateKeys,
      int: "De que forma você integra serviços de nuvem com softwares contábeis ou ERPs?",
      org: "Descreva seus critérios gerais para organizar pastas de extratos, demonstrações e notas fiscais para facilitar a busca",
    },
    expert: {
      ...csExpertKeys,
      mid: `${frq} integra dados financeiros armazenados na nuvem a mecanismos de BI ou machine learning?`,
      drs: `${tcn} você adota para recuperar rapidamente documentos críticos em caso de desastre ou falha de acesso à nuvem?`,
      org: "Descreva seus critérios gerais para organizar pastas de extratos, demonstrações e notas fiscais para facilitar a busca",
    },
  },
  "cloudStorage"
);
export const fnBiKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...biBeginnerKeys,
      fin: `${exp} utilizando os recursos de conexão de dados do BI para monitorar fluxo de caixa?`,
      fnc: `${exp} criando gráficos para acompanhar indicadores financeiros?`,
      fne: "Você utiliza refresh automático para manter dados financeiros atualizados?",
    },
    intermediate: {
      ...biIntermediateKeys,
      fim: `${sttg} você utiliza para modelar dados financeiros complexos para análises de rentabilidade?`,
      fna: `${frq} integra fontes de dados financeiros (ERP, planilhas) nas ferramentas de BI?`,
      fic: `${exp} configurando automações e medidas calculadas para atualizar métricas em tempo real?`,
    },
    expert: {
      ...biExpertKeys,
      fic: `${exp} configurando automações e medidas calculadas para atualizar métricas em tempo real?`,
      fip: `${sttg} você implanta quando realiza análises preditivas para projeções financeiras?`,
      fis: `${sttg} você utiliza para consolidar grandes volumes de dados financeiros em dashboards estratégicos?`,
    },
  },
  "businessInteligence"
);
export const fnCrmKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...crmBeginnerKeys,
      fin: `${exp} utilizando CRMs para monitorar fluxo de caixa básico e registros financeiros?`,
      fnc: `${fam} configurando relatórios financeiros em CRMs para acompanhar vendas?`,
      fne: `Você utiliza atualizações automáticas para manter os dados financeiros atualizados?`,
    },
    intermediate: {
      ...crmIntermediateKeys,
      fim: `${tcn} você usa para modelar dados financeiros no CRM para análise de rentabilidade?`,
      fna: `${exp} integrando fontes de dados financeiros (ERP, planilhas, etc.) na plataforma de CRM?`,
    },
    expert: {
      ...crmExpertKeys,
      fis: `${sttg} você para consolidar grandes volumes de dados financeiros em dashboards estratégicos?`,
      fic: `${exp} configurando automações para atualizar indicadores financeiros em tempo real?`,
      fip: `Descreva como você implementa análises preditivas para projeções financeiras?`,
    },
  },
  "Crms"
);
export const fnErpKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...erpBeginnerKeys,
      fnb: `${frq} gera relatórios financeiros básicos (ex.: contas a pagar) no ERP?`,
      fnc: `${fam} com cadastros de centros de custo ou contas contábeis dentro do ERP?`,
      fnd: `${cts} segue ao conferir notas fiscais ou integrações de pagamento no ERP?`,
    },
    intermediate: {
      ...erpIntermediateKeys,
      fni: `${mnn} cruza dados do ERP com planilhas/BI para análise de rentabilidade e previsão financeira?`,
      fnj: `${tcn} utiliza para configurar aprovações de despesas ou investimentos altos em módulos financeiros?`,
      fnk: `${mnn} customiza relatórios contábeis (ex.: balancete) e ajusta permissões para equipes financeiras?`,
    },
    expert: {
      ...erpExpertKeys,
      fne: `${exp} em criar scripts avançados (ex.: ABAP, TOTVS) para auditoria contábil e compliance (SOX, IFRS)?`,
      fnf: `${rsc} de HA em módulos financeiros são empregados para operações críticas (folha, tributos)?`,
      fng: `${mnn} gerencia logs e governança para rastrear movimentações de alto impacto no ERP financeiro?`,
    },
  },
  "Erps"
);
export const fnPlnKeys = ObjectHelper.makeImmutable({
  ...defPlnKeys,
});
export const fnAiAdKeys = ObjectHelper.makeImmutable({
  ...defAiAdKeys,
});
export const fnAiImgKeys = ObjectHelper.makeImmutable({
  ...defAiImgKeys,
});
export const fnAiVdKeys = ObjectHelper.makeImmutable({
  ...defAiVdKeys,
});
export const fnLlmKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...llmBeginnerKeys,
    },
    intermediate: {
      ...llmIntermediateKeys,
      rel: "Como você considera que LLMs podem auxiliar diretamente na produção de relatórios e documentos financeiros?",
    },
    expert: {
      ...llmExpertKeys,
      ten: `${frq} usa LLMs para prever vendas, estimar taxa de conversão ou analisar tendências do mercado?`,
      rel: "Como você considera que LLMs podem auxiliar diretamente na produção de relatórios e documentos financeiros?",
    },
  },
  "llms"
);
export const fnAddQuestions: [
  roleType,
  QuestionsMap<fnComplexityKeySet>
] = Object.seal([
  "financeiro",
  new Map([
    ["docs", fnDocsKeys as any],
    ["spreadSheets", fnSsKeys],
    ["formBuilders", fnFmKeys],
    ["cloudStorage", fnCsKeys],
    ["businessInteligence", fnBiKeys],
    ["Crms", fnCrmKeys],
    ["Erps", fnErpKeys],
    ["planning", fnPlnKeys],
    ["audio", fnAiAdKeys],
    ["image", fnAiImgKeys],
    ["video", fnAiVdKeys],
    ["llms", fnLlmKeys],
  ]),
]);
export const cmDocsKeys = withFrozenLibreLabel(
  {
    beginner: {
      rfp: "Quais técnicas de formatação você prioriza no design gráficos de documentos para propostas comerciais?",
      cpl: `${frq} compila dados de vendas ou contatos em documentos textuais?`,
      lbl: `${tcn} você utiliza para realçar segmentos de textos?`,
      sig: `${frq} utiliza assinaturas digitais?`,
      hst: "De que forma você mantém histórico de versões de ofertas enviadas a clientes?",
    },
    intermediate: {
      ref: "Como você faz referência cruzada entre cláusulas em documentos de proposta (ex.: anexo, condição especial)?",
      rev: "De que modo você controla comentários e revisões quando vários vendedores atualizam o mesmo arquivo?",
      mac: "Você utiliza macros ou scripts para preencher automaticamente dados de clientes em contratos?",
      sty: "Qual sua prática para padronizar estilos e layout em documentos de ofertas comerciais?",
      adv: `${frq} exporta os documentos em formato PDF?`,
    },
    expert: {
      api: "De que forma você integra editores de texto a sistemas comerciais (ex.: CRM) para geração automática de contratos?",
      cnd: "Como você lida com campos dinâmicos e mala direta para dezenas de clientes simultaneamente?",
      sec: `${frq} aplica criptografia ou permissões avançadas em documentos de alto valor?`,
      cmp: "Você faz comparação de versões para destacar alterações críticas em propostas?",
      mlc: "Já aplicou IA para redigir ou revisar cláusulas de documentos complexos (com várias condições)?",
    },
  },
  "docs"
);
export const cmSsKeys = withFrozenLibreLabel(
  {
    beginner: {
      sum: repeated.sum,
      lis: `${tcn} você utiliza para manter listas de leads ou clientes em planilhas simples?`,
      pro: "Você usa planilhas para projeções básicas de vendas mensais?",
      seg: "Quais estratégia você usa para filtrar e segmentar clientes?",
      col: "De que modo você realça linhas ou colunas importantes (ex.: cliente prioritário)?",
    },
    intermediate: {
      piv: repeated.tbd,
      adv: "Você integra planilhas com CRM ou outras fontes para atualizar dados de vendas (Sim/Não)?",
      for: `${frq} utiliza fórmulas intermediárias (PROCV, SE, SOMASE) para acompanhamento de metas?`,
      cht: "Que gráficos você gera para ilustrar desempenho comercial ou comparação de metas?",
      col: "Como você colabora com outros vendedores ou gerentes numa única planilha, sem sobrescrever dados?",
    },
    expert: {
      mac: repeated.mcr,
      big: repeated.big,
      seg: "Você cria segmentações avançadas e dashboards usando planilhas?",
      dbi: `${mnn} obtém informações de bancos de dados ou APIs (ex.: taxas de câmbio, cotações)?`,
      cmp: "Como você compara previsões e resultados reais em planilhas complexas, envolvendo vários times?",
    },
  },
  "spreadSheets"
);
export const cmFmKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...fmBeginnerKeys,
      cre: "Descreva seus critérios e ferramentas para criar formulários básicos para coleta de leads ou feedback de clientes?",
    },
    intermediate: {
      ...fmIntermediateKeys,
      rep: "Como você gera (ou considera que pode gerar) relatórios intermediários com respostas agregadas de formulários, integrando a Plataformas de BI, CRMs e ERPs?",
    },
    expert: { ...fmExpertKeys },
  },
  "formBuilders"
);
export const cmCsKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...csBeginnerKeys,
      org: "Como você estrutura pastas remotas para cada cliente ou grupo de clientes?",
    },
    intermediate: {
      ...csIntermediateKeys,
      int: "De que forma você integra o armazenamento em nuvem com plataformas corporativas e organizacionais?",
    },
    expert: {
      ...csExpertKeys,
      mig: `${sttg} você adota para migrar grandes repositórios de documentos comerciais de um serviço um serviço em nuvem para outro?`,
    },
  },
  "cloudStorage"
);
export const cmBiKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...biBeginnerKeys,
      com: `${rsc} visuais de plataformas de BI você utiliza para monitorar metas de vendas diárias?`,
      cmr: `${sttg} você adota para configurar dashboards simples para acompanhar indicadores comerciais?`,
      cmx: "Descreva pontos críticos de análise no seu fluxo de trabalho quando compartilha relatórios de vendas diretamente pela ferramenta de BI",
    },
    intermediate: {
      ...biIntermediateKeys,
      cmm: `${frq} modela dados de CRM e vendas para criar relatórios comerciais?`,
      cma: `${exp} integrando dados de diferentes canais comerciais na ferramenta de BI?`,
      cmc: `${exp} automatizando a consolidação de dados comerciais em dashboards?`,
    },
    expert: {
      ...biExpertKeys,
      cme: `${rsc} de análises avançadas você utiliza para prever tendências de mercado?`,
      cmf: `${sttg} você utiliza poara integrar dados de vendas e marketing para insights estratégicos?`,
      cmg: `${exp} consolidando dashboards de múltiplos canais comerciais?`,
    },
  },
  "businessInteligence"
);
export const cmCrmKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...crmBeginnerKeys,
      com: `${exp} utilizando CRMs para registrar e acompanhar leads comerciais básicos?`,
      cmr: `${frq} gera dashboards para monitorar o desempenho de vendas em CRMs?`,
      cmx: `${frq} compartilha relatórios de vendas com sua equipe por meio do CRMs?`,
    },
    intermediate: {
      ...crmIntermediateKeys,
      cmm: `${tcn} você usa para modelar dados de vendas em CRMs buscando identificar tendências?`,
      cma: `${frq} integra CRMs com ferramentas de marketing para alinhar estratégias de vendas?`,
      cmc: `${exp} automatizando processos de atualização de status de leads em CRMs?`,
    },
    expert: {
      ...crmExpertKeys,
      cme: `${rsc} avançados de CRMs você utiliza para prever oportunidades de vendas?`,
      cmg: `${sttg} você usa para consolidar informações de múltiplos canais comerciais em dashboards avançados em CRMs?`,
      cmf: `${sttg} você utiliza para integrar dados de CRM com análises de mercado para insights estratégicos?`,
    },
  },
  "Crms"
);
export const cmErpKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...erpBeginnerKeys,
      cmb: `${frq} acessa o módulo comercial do ERP para registrar pedidos e cadastrar clientes básicos?`,
      cmc: `${fam} com relatórios de vendas (faturado, entregue) no ERP para monitorar desempenho comercial?`,
      cmd: `${mnn} lida com cálculos de comissão ou descontos dentro do módulo comercial?`,
    },
    intermediate: {
      ...erpIntermediateKeys,
      cmi: `${mnn} integra dados de vendas (ex.: estoque, financeiro) para agilizar processos no ERP?`,
      cmj: `${cts} define ao configurar aprovações para pedidos de alto valor ou clientes especiais?`,
      cmk: `${tcn} utiliza para customizar relatórios de vendas (ranking de vendedores, metas) e gerenciar permissões?`,
    },
    expert: {
      ...erpExpertKeys,
      cme: `${exp} em rotinas avançadas de pricing ou campanhas via scripts no ERP (ABAP, TOTVS)?`,
      cmf: `${mnn} emprega HA no módulo comercial para evitar downtime em períodos de alta demanda?`,
      cmg: `${cts} segue para compliance (LGPD) e auditoria de dados de clientes em processos de vendas complexos?`,
    },
  },
  "Erps"
);
export const cmPlnKeys = ObjectHelper.makeImmutable({
  ...defPlnKeys,
});
export const cmAiAdKeys = ObjectHelper.makeImmutable({
  ...defAiAdKeys,
});
export const cmAiImgKeys = ObjectHelper.makeImmutable({
  ...defAiImgKeys,
});
export const cmAiVdKeys = ObjectHelper.makeImmutable({
  ...defAiVdKeys,
});
export const cmLlmKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...llmBeginnerKeys,
      tip: `${mnn} considera que LLMs podem ajudar a tratar, filtrar e organizados dados de clientes (nome, informações)?`,
    },
    intermediate: {
      ...llmIntermediateKeys,
      pol: "Quais destes pontos críticos a cerca de políticas em relações comerciais você dá prioridade quando utilizando LLMs?",
      nlp: `${frq} analisa mensagens e documentos extensos de clientes usando LLMs?`,
      doc: `${frq} utiliza LLMs para produzir relatórios e documentos corporativos?`,
    },
    expert: {
      ...llmExpertKeys,
      api: `${frq} conecta APIs de LLMs a sistemas de CRM ou plataformas de e-mail marketing?`,
      adv: "Você já treinou modelos específicos com dados de negociações passadas para orientação de pricing?",
      prv: `${frq} usa LLMs para prever vendas, estimar taxa de conversão ou analisar tendências do mercado?`,
    },
  },
  "llms"
);
export const cmAddQuestions: [
  roleType,
  QuestionsMap<cmComplexityKeySet>
] = Object.seal([
  "comercial",
  new Map([
    ["docs", cmDocsKeys as any],
    ["spreadSheets", cmSsKeys],
    ["formBuilders", cmFmKeys],
    ["cloudStorage", cmCsKeys],
    ["businessInteligence", cmBiKeys],
    ["Crms", cmCrmKeys],
    ["Erps", cmErpKeys],
    ["planning", cmPlnKeys],
    ["audio", cmAiAdKeys],
    ["image", cmAiImgKeys],
    ["video", cmAiVdKeys],
    ["llms", cmLlmKeys],
  ]),
]);
export const mktDocsKeys = withFrozenLibreLabel(
  {
    beginner: {
      mch: "Como você redige materiais de marketing básicos (flyers, comunicados) com formatação simples?",
      chk: "Você utiliza checklists para revisar ortografia, imagens e coerência nos textos de marketing?",
      pln: `${frq} planeja conteúdo textual (ex.: posts) e compila num doc colaborativo?`,
      cmd: "De que modo você adiciona comentários, sugestões e versões para aprovação?",
      ext: `${frq} exporta documentos no formato PDF?`,
    },
    intermediate: {
      mac: "Você criou macros ou modelos padronizados (layout, sumário) para relatórios de campanha?",
      rev: "De que forma você gerencia revisões vindas de gestores, designers e redatores ao mesmo tempo?",
      stl: `${rsc} gráficos você utiliza para destacar dados em documentos?`,
      mlt: `${frq} utiliza mala direta (ex.: para e-mails de campanha em massa)?`,
      doc: "Como você vincula partes do texto a dados externos (ex.: planilhas de resultados)?",
    },
    expert: {
      adv: "Você integra editores de texto com plataformas de marketing (Mailchimp, HubSpot) via API?",
      sec: "Que nível de restrição ou criptografia você aplica a documentos com estratégias ou orçamentos?",
      ver: "Como você compara duas versões de um mesmo material (ex.: V1 e V2 de estratégia de campanha)?",
      col: "Você gerencia múltiplas equipes (social media, redatores, designers) editando o mesmo doc?",
      idx: "Em materiais extensos (ex.: e-book), como você constrói sumários, índices e referências cruzadas?",
    },
  },
  "docs"
);
export const mktSsKeys = withFrozenLibreLabel(
  {
    beginner: {
      sum: repeated.sum,
      lis: "Quais técnicas você utiliza para organizar listas de leads ou segmentos de público em planilhas simples?",
      gcl: "Você registra gastos de campanhas (ex.: Google Ads) em planilhas para acompanhar budget básico?",
      fil: "Quais desses recursos você utiliza para separar realçar dados de diferentes campanhas?",
      cmp: "De que forma você compara métricas (cliques, impressões) manualmente em células?",
    },
    intermediate: {
      piv: repeated.tbd,
      frq: "Você faz fórmulas para calcular CPC (custo por clique), CPA (custo por aquisição) e CTR (taxa de cliques)?",
      cht: "Que gráficos você gera para mostrar crescimento de engajamento ou leads?",
      adv: "Como você integra a planilha com outras fontes (CSV exportado de plataformas de ads)?",
      col: "Como você colabora com a equipe evitando conflitos de edição?",
    },
    expert: {
      mcr: repeated.mcr,
      big: repeated.big,
      arr: repeated.arr,
      dbi: "Você conecta planilhas a bancos de dados (ex.: MySQL, BigQuery) para analisar performance de marketing?",
      prf: "De que forma você faz tuning em planilhas gigantes (milhares de linhas de keywords)?",
    },
  },
  "spreadSheets"
);
export const mktFmKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...fmBeginnerKeys,
      seg: "De que modo você classifica ou segmenta as respostas (ex.: interesse no produto A/B)?",
    },
    intermediate: {
      ...fmIntermediateKeys,
      seg: "Qual é sua prática para segmentar resultados (ex.: leads quentes, frios) depois do envio?",
    },
    expert: {
      ...fmExpertKeys,
      sec: "Defina detalhadamente seus critérios lógicos para segmentação e organização das respostas aglomeradas obtidas por formulários",
    },
  },
  "formBuilders"
);
export const mktCsKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...csBeginnerKeys,
      org: "Como você organiza pastas por campanhas, datas ou equipes?",
    },
    intermediate: {
      ...csIntermediateKeys,
      int: "Como você integra ferramentas de nuvem com sistemas de agendamento de posts ou ADS?",
    },
    expert: {
      ...csExpertKeys,
      rep: `${exp} em integrações com plataformas de BI?`,
      adv: `${tcn} você utiliza para automatizar uploads e organização de assets e postagens?`,
    },
  },
  "cloudStorage"
);
export const mktBiKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...biBeginnerKeys,
      mkt: `${exp} utilizando ferramentas de BI para monitorar métricas básicas de campanhas de marketing?`,
      mka: `${frq} configura gráficos para acompanhar resultados de campanhas?`,
      mkb: `${frq} compartilha dashboards de marketing com sua equipe?`,
    },
    intermediate: {
      ...biIntermediateKeys,
      mkm: `${exp} modelando dados de marketing (gastos, leads) nas ferramenta de BI?`,
      mkd: `${sttg} Você segmenta dados de campanhas por canal e público usando recursos do BI?`,
      mke: "Você configura atualizações automáticas para dashboards de marketing?",
    },
    expert: {
      ...biExpertKeys,
      mkx: `${exp} integrando APIs de plataformas de ads com a ferramenta de BI para análises preditivas?`,
      mkz: `${sttg} você utiliza para consolidar dados de múltiplas campanhas em dashboards avançados?`,
      mky: "Descreva brevemente como você personaliza visualizações de dados de marketing para insights estratégicos?",
    },
  },
  "businessInteligence"
);
export const mktCrmKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...crmBeginnerKeys,
      mkt: `${exp} utilizando CRMs para registrar leads originados de campanhas de marketing?`,
      mka: `${exp} gerando relatórios simples para acompanhar o desempenho de campanhas?`,
      mkb: `Quais são seus critérios para segmentar leads em CRMs de acordo com canais de entrada?`,
    },
    intermediate: {
      ...crmIntermediateKeys,
      mkm: `${rsc} de CRMs você usa para modelar dados de campanhas buscando analisar o ROI?`,
      mkd: `${tcn} você utiliza para integrar CRMs com plataformas de marketing buscando sincronizar dados de leads?`,
      mke: `${frq} automatiza a atualização de status de leads a partir de ações de marketing?`,
    },
    expert: {
      ...crmExpertKeys,
      mkx: `${exp} integrando APIs de plataformas de ads com CRMs para análises preditivas?`,
      mkz: `${sttg} você utiliza para consolidar dados de campanhas de marketing em relatórios estratégicos?`,
      mky: `Descreva como você personaliza dashboards no CRM para insights complexos de marketing`,
    },
  },
  "Crms"
);
export const mktErpKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...erpBeginnerKeys,
      mkb: `${frq} cria cadastros de produtos/campanhas no ERP para associar custos e estoque em ações de marketing?`,
      mkc: `${mnn} gera relatórios básicos de impactos de campanhas (ex.: pedidos gerados) no ERP?`,
    },
    intermediate: {
      ...erpIntermediateKeys,
      mki: `${mnn} integra plataformas de marketing (landing pages, leads) ao ERP para sincronizar dados?`,
      mkx: `${tcn} utiliza para adicionar campos de campanha (ex.: origem, ROI) no ERP?`,
    },
    expert: {
      ...erpExpertKeys,
      mke: `${exp} em scripts avançados para vincular dados de marketing (CPC, ROI) aos módulos do ERP?`,
      mkf: `${mnn} protege dados de leads e clientes (LGPD) em campanhas complexas integradas ao ERP?`,
    },
  },
  "Erps"
);
export const mktPlnKeys = ObjectHelper.makeImmutable({
  ...defPlnKeys,
});
export const mktAiAdKeys = ObjectHelper.makeImmutable({
  ...defAiAdKeys,
});
export const mktAiImgKeys = ObjectHelper.makeImmutable({
  ...defAiImgKeys,
});
export const mktAiVdKeys = ObjectHelper.makeImmutable({
  ...defAiVdKeys,
});
export const mktLlmKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...llmBeginnerKeys,
    },
    intermediate: {
      ...llmIntermediateKeys,
      pol: `${frq} utiliza LLMs para intepretar e resumir dados de relatórios e feedback?`,
      nlp: "Você utiliza LLMs para sumarizar estatísticas de feedback de clientes ou reviews usando?",
      exc: "Você utiliza LLMs para criar planilhas de budget ou simular projeções de campanha?",
    },
    expert: {
      ...llmExpertKeys,
      prv: "Você aplica IA para prever engajamento ou taxa de conversão em anúncios?",
      adv: "Você já treinou modelos com histórico de campanhas, gerando sugestões personalizadas de copy?",
      api: `${exp} integrando APIs de LLMs para automatizar criação de conteúdo ou chatbots de marketing?`,
    },
  },
  "llms"
);
export const mktAddQuestions: [
  roleType,
  QuestionsMap<mktComplexityKeySet>
] = Object.seal([
  "marketing",
  new Map([
    ["docs", mktDocsKeys as any],
    ["spreadSheets", mktSsKeys],
    ["formBuilders", mktFmKeys],
    ["cloudStorage", mktCsKeys],
    ["businessInteligence", mktBiKeys],
    ["Crms", mktCrmKeys],
    ["Erps", mktErpKeys],
    ["planning", mktPlnKeys],
    ["audio", mktAiAdKeys],
    ["image", mktAiImgKeys],
    ["video", mktAiVdKeys],
    ["llms", mktLlmKeys],
  ]),
]);
export const stN1DocsKeys = withFrozenLibreLabel(
  {
    beginner: {
      fmt: repeated.fmt,
      syn: "De que forma você ensina a sincronizar documentos na nuvem ou em rede local?",
      cpt: `${frq} auxilia na compatibilidade de arquivos entre diferentes versões do software?`,
      tmp: "Você recomenda modelos prontos para usuários inexperientes em edição de texto? (Sim/Não)",
      col: "Como você analisa a colaboração simultânea (multiusuário) em um mesmo documento?",
    },
    intermediate: {
      mac: repeated.mcr,
      rev: "Que estratégias você adota para controlar revisões e histórico de versões com equipes maiores?",
      sec: "Como você lida com a proteção de documentos via senhas ou restrição de edição?",
      stl: `${tls} de estilo você apresenta para a configuração de estilos de texto (títulos, cabeçalhos) e sumários automáticos?`,
      prb: "Qual é sua abordagem ao diagnosticar problemas intermediários de layout ou formatação avançada?",
    },
    expert: {
      scr: repeated.mcr,
      cpy: `${tls} você instrui para o controle de versão dos documentos colaborativos?`,
      idx: "Como você instrui usuários a criarem índices remissivos ou seções avançadas em documentos extensos?",
      adv: "De que forma você soluciona conflitos de permissões avançadas e restrições de edição em rede?",
      dbi: `${frq} integra documentos a bancos de dados ou APIs (ex.: mail merge massivo)?`,
    },
  },
  "docs"
);
export const stN1SsKeys = withFrozenLibreLabel(
  {
    beginner: {
      sum: repeated.sum,
      frm: `${tcn} de layout de formatação de células você recomendaria a um usuário para destacar dados?`,
      fil: `${tcn} você recomendaria a um usuário para filtrar ou classificar dados de modo simples?`,
      cbt: `${rsc} você utiliza para configurar proteções básicas de célula para evitar alterações indevidas?`,
      con: "Como você orienta a colaboração simultânea em uma planilha (ex.: várias pessoas editando)?",
    },
    intermediate: {
      piv: "Qual é sua abordagem para ajudar usuários a criarem tabelas dinâmicas de complexidade média?",
      fml: `${fam} com funções (SE, PROCV) para automação de cálculos multidimensionais e lógica?`,
      cht: "Que tipos de gráficos você recomenda para análises em planilhas de nível intermediário?",
      val: `${tcn} você recomenda para configurar validações de dados e evitar entradas incorretas?`,
      net: "De que forma você gerencia possíveis conflitos de versão ao trabalhar via rede ou nuvem?",
    },
    expert: {
      mcr: repeated.mcr,
      sec: "Qual sua experiência em configurar permissões avançadas em planilhas compartilhadas (ex.: range locking)?",
      prf: `${tcn} você utiliza para otimizar performance em planilhas extensas com dezenas de abas e fórmulas aninhadas?`,
      idx: "Com quais serviços externos você integra as suas planilhas?",
      aud: "De que forma você efetua auditoria em planilhas complexas para rastrear erros ou mudanças não autorizadas?",
    },
  },
  "spreadSheets"
);
export const stN1FmKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...fmBeginnerKeys,
      frm: "Descreva brevemente como você auxilia usuários a criar formulários básicos em ferramentas de construção de formulários?",
    },
    intermediate: {
      ...fmIntermediateKeys,
      seg: "De que modo você instrui sobre segmentar seções para diferentes contextos dentro do mesmo formulário?",
      autm: "Você configura notificações automáticas (e-mail) ao receber novas respostas?",
    },
    expert: {
      ...fmExpertKeys,
      sec: "Como você lida com permissões avançadas, definindo acessos restritos a determinados usuários/grupos?",
      man: "Como você gerencia revisões e versões do mesmo formulário ao longo do tempo?",
    },
  },
  "formBuilders"
);
export const stN1CsKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...csBeginnerKeys,
      upl: `${frq} auxilia usuários com arquivos em plataformas baseadas em nuvem?`,
      syn: "Descreva em termos gerais suas técnicas para sincronizar pastas locais com o armazenamento em nuvems",
    },
    intermediate: {
      ...csIntermediateKeys,
      prf: "Qual destas técnicas você utiliza para resolver problemas de performance em plataformas baseadas em nuvem?",
      bck: `${tcn} você utiliza para gerenciar backups automáticos ou snapshots em storage de nuvem?`,
    },
    expert: {
      ...csExpertKeys,
      mlt: `${exp} lidando com múltiplas contas ou provedores (Google, OneDrive, Amazon S3)?`,
      drp: `${tcn} você adota para lidar com prevenção e recuperação de desastres de repositórios críticos em nuvem?`,
    },
  },
  "cloudStorage"
);
const stn =
    "Descreva, em suas palavras, sua experiência orientando usuários com a instalação e configuração de ferramentas de BI" as const,
  stBiKeys = ObjectHelper.makeImmutable({
    beginner: {
      ...biBeginnerKeys,
      stn,
    },
    intermediate: {
      ...biIntermediateKeys,
      stn,
    },
    expert: {
      ...biExpertKeys,
      stn,
    },
  });
export const stN1BiKeys = withFrozenLibreLabel(
  {
    ...stBiKeys,
  },
  "businessInteligence"
);
export const stN1CrmKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...crmBeginnerKeys,
      stn: `${exp} utilizando CRMs para registrar atendimentos e monitorar o status de leads de suporte básico?`,
    },
    intermediate: {
      ...crmIntermediateKeys,
      sti: `Como você utiliza CRMs para acompanhar métricas de atendimento e identificar problemas operacionais?`,
    },
    expert: {
      ...crmExpertKeys,
      ste: `${frq} integra CRMs com sistemas de suporte para análises avançadas de performance em atendimento?`,
    },
  },
  "Crms"
);
export const stN1ErpKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...erpBeginnerKeys,
      snb: `${mnn} auxilia usuários em relatórios básicos (ex.: estoque, vendas) para chamados de ERP?`,
    },
    intermediate: {
      ...erpIntermediateKeys,
      sni: `${frq} soluciona problemas intermediários (falha de permissão, importação de planilhas) no ERP durante suporte?`,
    },
    expert: {
      ...erpExpertKeys,
      sne: `${tcn} utiliza para configurações avançadas (API, tuning) em atendimentos críticos do ERP?`,
    },
  },
  "Erps"
);
export const stN1PlnKeys = ObjectHelper.makeImmutable({
  ...defPlnKeys,
});
export const stN1AiAdKeys = ObjectHelper.makeImmutable({
  ...defAiAdKeys,
});
export const stN1AiImgKeys = ObjectHelper.makeImmutable({
  ...defAiImgKeys,
});
export const stN1AiVdKeys = ObjectHelper.makeImmutable({
  ...defAiVdKeys,
});
export const stLlmKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...llmBeginnerKeys,
      qna: "Quais destas abordagens você utiliza para orientar usuários de LLMs?",
    },
    intermediate: {
      ...llmIntermediateKeys,
      cor: "Quais suas abordagens para sugerir a correção de outputs incorretos ou reorientar o LLM?",
      api: "Você integra APIs de LLM a pequenos scripts ou apps para tarefas de suporte técnico?",
    },
    expert: {
      ...llmExpertKeys,
      ftn: "Quais destas abordagens você utiliza para orientar o fine-tuning de LLMs em ambientes corporativos?",
      cbt: "Você tem experiência criando chatbots com APIs de LLMs integrados a Plataformas empresariais?",
    },
  },
  "llms"
);
export const stN1LlmKeys = ObjectHelper.makeImmutable({
  ...stLlmKeys,
});
export const stN1AddQuestions: [
  roleType,
  QuestionsMap<stN1ComplexityKeySet>
] = Object.seal([
  "suporteTecnicoN1",
  new Map([
    ["docs", stN1DocsKeys as any],
    ["spreadSheets", stN1SsKeys],
    ["formBuilders", stN1FmKeys],
    ["cloudStorage", stN1CsKeys],
    ["businessInteligence", stN1BiKeys],
    ["Crms", stN1CrmKeys],
    ["Erps", stN1ErpKeys],
    ["planning", stN1PlnKeys],
    ["audio", stN1AiAdKeys],
    ["image", stN1AiImgKeys],
    ["video", stN1AiVdKeys],
    ["llms", stN1LlmKeys],
  ]),
]);
export const stN2DocsKeys = withFrozenLibreLabel(
  {
    beginner: {
      syn: `${tls} você utiliza para a sincronização de arquivos .doc entre servidores ou ferramentas na nuvem?`,
      cmp: `${tls} de conversão de formatos de documentos você recomendaria para um usuário?`,
      plg: `${frq} instala ou configura plugins básicos de formatação de documentos para usuários?`,
      pmt: `${tls} você utiliza para intervir em problemas de permissão (arquivos bloqueados, somente leitura) em rede?`,
      ori: "Que orientações básicas você dá quando o documento é corrompido ou não abre corretamente?",
    },
    intermediate: {
      mac: repeated.mcr,
      lay: "Como você soluciona problemas de layout avançado (sumário, seções) quando afeta o fluxo do documento?",
      col: "Como você recomenda gerenciar a colaboração (rastreamento de alterações, edições simultâneas) em ambientes corporativos?",
      idx: "Como você orienta a criação de índices remissivos ou referências cruzadas para documentos extensos?",
      adv: "Qual sua abordagem para logs ou trilhas de auditoria em edição de documentos compartilhados?",
    },
    expert: {
      vba: repeated.mcr,
      enc: "Em que nível você lida com criptografia avançada de documentos e permissões de usuários distintos?",
      srv: "Descreva pontos críticos na configuração de servidores especializados em persistência de documentos (ex.: SharePoint), proporcionando edição simultânea sem conflito.",
      api: `${fam} com integração com APIs ou complementos externos (ex.: Scripts com Python) para manipular documentos massivamente?`,
      mig: "Qual sua estratégia ao migrar docs de um sistema legado para plataformas atuais, mantendo formatação?",
    },
  },
  "docs"
);
export const stN2SsKeys = withFrozenLibreLabel(
  {
    beginner: {
      net: `${tcn} você orienta a configuração de planilhas em rede local ou via ferramentas de compartilhamento (Drive, OneDrive)?`,
      fmz: `${tcn} você usa para evitar formatações que podem quebrar fórmulas ao abrir planilhas em versões distintas?`,
      cft: `${tcn} você recomenda para fazer a conferência de dados em planilhas compartilhadas, resolvendo conflitos básicos de edição?`,
      csd: "Em que frequência você lida com consultas simples (ex.: importação CSV) para dados de planilha?",
      bak: "Quais destas práticas você recomenda para backups diários de planilhas importantes?",
    },
    intermediate: {
      piv: `${tcn} você utiliza para intervir na criação ou troubleshooting de Tabelas Dinâmicas com múltiplas fontes de dados?`,
      lnk: `${tcn} você utiliza para solucionar problemas em planilhas que importam/ligam dados de outras pastas de trabalho?`,
      val: `${tcn} você usa para configurar validações e restrições para prevenir erros em planilhas?`,
      scp: "Quais formatos de scripts você usa para integrações pontuais em planilhas?",
      rep: "Como você gera relatórios semestrais ou consolida planilhas vindas de diferentes setores (ex.: contábil, vendas)?",
    },
    expert: {
      arr: "Qual é o seu nível de familiaridade com funções matriciais avançadas (ex.: MATRIZDINAMICA, Fórmulas aninhadas complexas)?",
      sec: "Qual é sua prática ao configurar segurança (proteção de intervalos, permissões de usuário) em grandes planilhas de rede?",
      mcr: `${tcn} para depurar macros avançadas (VBA) que causam lentidão ou bloqueiam recursos compartilhados?`,
      big: `${frq} conecta planilhas a bancos de dados corporativos via ODBC/SQL e soluciona problemas de acesso?`,
      par: "Descreva técnicas que você utiliza para tuning de performance em planilhas muito grandes (milhares de linhas ou abas).",
    },
  },
  "spreadSheets"
);
export const stN2FmKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...fmBeginnerKeys,
      bug: "Como você identifica bugs básicos (ex.: perguntas sumindo) em formulários corporativos?",
      shl: "Como você instrui usuários a compartilhar o link do formulário ou incorporá-lo em páginas internas?",
    },
    intermediate: {
      ...fmIntermediateKeys,
      rls: "Como você define regras de envio (ex.: e-mail automatic) ao receber respostas específicas?",
    },
    expert: {
      ...fmExpertKeys,
      mul: "De que forma você une respostas de múltiplos formulários em repositórios centrais, resolvendo conflitos?",
      adv: "Você realiza auditoria/logs de acesso, revertendo alterações em formulários extensos?",
    },
  },
  "formBuilders"
);
export const stN2CsKeys = ObjectHelper.makeImmutable({
  ...stN1CsKeys,
});
export const stN2BiKeys = withFrozenLibreLabel(
  {
    ...stBiKeys,
  },
  "businessInteligence"
);
export const stN2CrmKeys = ObjectHelper.makeImmutable({
  ...stN1CrmKeys,
});
export const stN2ErpKeys = ObjectHelper.makeImmutable({
  beginner: {
    ...erpBeginnerKeys,
    s2b: `${mnn} realiza configurações iniciais (login, rede) para usuários no ERP?`,
  },
  intermediate: {
    ...erpIntermediateKeys,
    s2i: `${frq} atua em tickets complexos (módulos em conflito, dados inconsistentes) ao dar suporte no ERP?`,
  },
  expert: {
    ...erpExpertKeys,
    s2e: `${tcn} aplica ao executar scripts avançados (ABAP, TOTVS) ou integrações profundas para incidentes críticos no ERP?`,
  },
});
export const stN2PlnKeys = ObjectHelper.makeImmutable({
  ...defPlnKeys,
});
export const stN2AiAdKeys = ObjectHelper.makeImmutable({
  ...defAiAdKeys,
});
export const stN2AiImgKeys = ObjectHelper.makeImmutable({
  ...defAiImgKeys,
});
export const stN2AiVdKeys = ObjectHelper.makeImmutable({
  ...defAiVdKeys,
});
export const stN2LlmKeys = ObjectHelper.makeImmutable({
  ...stLlmKeys,
});
export const stN2AddQuestions: [
  roleType,
  QuestionsMap<stN2ComplexityKeySet>
] = Object.seal([
  "suporteTecnicoN2",
  new Map([
    ["docs", stN2DocsKeys as any],
    ["spreadSheets", stN2SsKeys],
    ["formBuilders", stN2FmKeys],
    ["cloudStorage", stN2CsKeys],
    ["businessInteligence", stN2BiKeys],
    ["Crms", stN2CrmKeys],
    ["Erps", stN2ErpKeys],
    ["planning", stN2PlnKeys],
    ["audio", stN2AiAdKeys],
    ["image", stN2AiImgKeys],
    ["video", stN2AiVdKeys],
    ["llms", stN2LlmKeys],
  ]),
]);
export const opDocsKeys = withFrozenLibreLabel(
  {
    beginner: {
      net: "Como você configura as permissões básicas de rede para que os usuários acessem um editor de texto?",
      upd: `${frq} atualiza softwares de edição (Office, LibreOffice) para corrigir falhas?`,
      lnk: "De que modo você instala e vincula plugins ou complementos em servidores de arquivos locais?",
      prt: "Como você configura impressoras e controla spools de documentos em rede?",
      pat: "Qual sua prática para padronizar caminhos de salvamento (servidor/nuvem) e definir permissões de pasta?",
    },
    intermediate: {
      gpo: `${tls} você utiliza para automatizar configurações de editores de texto?`,
      tro: "Como você soluciona problemas de lentidão ao abrir documentos via rede (latência, DNS, compartilhamentos)?",
      vrs: "Você gerencia versionamento centralizado (ex.: SharePoint) e resolve conflitos de check-in/out?",
      scr: "De que forma você monitora logs de acesso e edição para auditoria de compliance em documentos?",
      pol: "Como você define políticas de backup e snapshot para evitar perdas de dados em arquivos críticos?",
    },
    expert: {
      scc: `${tcn} e ferramentas você utiliza nas instalações em larga escala (SCCM) de editores de texto?.`,
      dlp: "Como você integra soluções de DLP para docs sensíveis na rede corporativa?",
      dfs: "Qual sua abordagem para replicação DFS entre múltiplos sites, evitando corrupção de documentos?",
      off: "Como você gerencia merges offline/online e problemas de credenciais em cenários desconectados?",
      iso: "De que forma você garante conformidade (ISO, PCI) para manipulação segura de documentos corporativos?",
    },
  },
  "docs"
);
export const opSsKeys = withFrozenLibreLabel(
  {
    beginner: {
      net: "Quais técnicas você usa para habilitar o acesso a planilhas compartilhadas via rede local para a equipe?",
      per: "De que forma você configura permissões de pastas e arquivos compartilhados, assegurando acesso controlado às planilhas?",
      cpy: "Quais técnicas você recomenda para orientar a criação de cópias de planilhas para backup rápido no dia a dia?",
      bkp: "Quais práticas de backup simples você aplica para evitar perda em planilhas armazenadas em rede?",
      col: `${frq} ensina colaboração simultânea (co-edit) em Excel/Sheets via servidor ou Drive?`,
    },
    intermediate: {
      sec: "Quais recursos você usa para implementar senhas ou criptografia de arquivos relacionados a redes?",
      mac: "Quais técnicas você utiliza para depurar macros de nível intermediário?",
      scp: "Em que forma você utiliza scripts para instalar complementos de planilha nos computadores do setor?",
      dmp: "Você já realizou dump de dados de um BD para planilhas e gerenciou performance no processo?",
      conf: "Qual sua abordagem ao resolver conflitos de versão quando vários usuários salvam simultaneamente?",
    },
    expert: {
      adv: "Como você automatiza instalações em larga escala (SCCM) de pacotes de planilha e gerencia atualizações?",
      big: "Você integra planilhas com fontes massivas de dados (BI, data warehouse) resolvendo latência e caches?",
      log: "De que forma você audita logs de acesso ou macros para cumprir normas de compliance em planilhas críticas?",
      res: "Quais técnicas você usa para gerenciar a restauração de planilhas corrompidas?",
      ref: "Quais técnicas você usa para tratar referências externas e macros avançadas causando loops ou travamentos na rede?",
    },
  },
  "spreadSheets"
);
export const opFmKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...fmBeginnerKeys,
      net: "De que forma você lida com restrições de endereços e protocolos que bloqueiam envio de formulários externos?",
    },
    intermediate: {
      ...fmIntermediateKeys,
      sso: "Você integra Single Sign-On (AD/SAML) para acesso a formulários internos, resolvendo possíveis erros de token?",
      sec: "Qual é sua prática para configurar SSL e evitar alertas de 'site não confiável' ao abrir formulários internos?",
    },
    expert: {
      ...fmExpertKeys,
      crt: "De que forma você gerencia certificados digitais para garantir segurança e compliance em formulários internos?",
      adv: "Como você soluciona problemas avançados de roteamento (DNS, proxies) que bloqueiam formulários externos?",
      flw: "Você implementa fluxos de aprovação encadeada (entre departamentos) via webhooks e scripts?",
      drp: "Como você gerencia disaster recovery para grandes quantidades de dados coletados em formulários?",
    },
  },
  "formBuilders"
);
export const opCsKeys = ObjectHelper.makeImmutable({
  ...stN1CsKeys,
});
export const opBiKeys = withFrozenLibreLabel(
  {
    ...stBiKeys,
  },
  "businessInteligence"
);
export const opCrmKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...crmBeginnerKeys,
      opr: `Como você utiliza CRMs para monitorar operações básicas e registrar atividades de rotina?`,
    },
    intermediate: {
      ...crmIntermediateKeys,
      opi: `Como você utiliza CRMs para consolidar dados operacionais e gerar relatórios simples?`,
    },
    expert: {
      ...crmExpertKeys,
      ope: `${rsc} avançados do CRM para otimizar processos operacionais e integrar informações de diferentes áreas?`,
    },
  },
  "Crms"
);
export const opErpKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...erpBeginnerKeys,
      opb: `${frq} cuida de instalações e configurações simples (clients, impressoras) para o ERP no ambiente operacional?`,
    },
    intermediate: {
      ...erpIntermediateKeys,
      opi: `${mnn} resolve problemas intermediários (fluxos, permissões) e integra sistemas (ex.: e-mail) no ERP para equipes operacionais?`,
    },
    expert: {
      ...erpExpertKeys,
      ope: `${sttg} são empregadas por você para otimizar alta demanda operacional, garantindo disponibilidade no ERP?`,
    },
  },
  "Erps"
);
export const opPlnKeys = ObjectHelper.makeImmutable({
  ...defPlnKeys,
});
export const opAiAdKeys = ObjectHelper.makeImmutable({
  ...defAiAdKeys,
});
export const opAiImgKeys = ObjectHelper.makeImmutable({
  ...defAiImgKeys,
});
export const opAiVdKeys = ObjectHelper.makeImmutable({
  ...defAiVdKeys,
});
export const opLlmKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...llmBeginnerKeys,
    },
    intermediate: {
      ...llmIntermediateKeys,
      lvl: "Qual é o nível de utilidade que você considera que LLMs têm ou podem ter para seus processos de trabalho em redes e instalações?",
    },
    expert: {
      ...llmExpertKeys,
      lvl: "Qual é o nível de utilidade que você considera que LLMs têm ou podem ter para seus processos de trabalho em redes e instalações?",
      cus: `${frq} manipula modelos custom (fine-tuning local) e distribui para equipes especializadas?`,
    },
  },
  "llms"
);
export const opAddQuestions: [
  roleType,
  QuestionsMap<opComplexityKeySet>
] = Object.seal([
  "operatorio",
  new Map([
    ["docs", opDocsKeys as any],
    ["spreadSheets", opSsKeys],
    ["formBuilders", opFmKeys],
    ["cloudStorage", opCsKeys],
    ["businessInteligence", opBiKeys],
    ["Crms", opCrmKeys],
    ["Erps", opErpKeys],
    ["planning", opPlnKeys],
    ["audio", opAiAdKeys],
    ["image", opAiImgKeys],
    ["video", opAiVdKeys],
    ["llms", opLlmKeys],
  ]),
]);
export const devDocsKeys = withFrozenLibreLabel(
  {
    beginner: {
      api: "Como você costuma documentar APIs ou funções simples diretamente no código ou em arquivos de texto?",
      pat: "Quais destes formatos você utiliza para registrar instruções de compilação ou uso?",
      col: `${exp} em compartilhamento de arquivos e versões de trabalhos?`,
      ver: "Como você mantém histórico básico (versionamento) de documentos relacionados ao projeto?",
      sty: "De que forma você padroniza estilos de anotações nos arquivos?",
    },
    intermediate: {
      rfc: `${frq} costuma criar RFCs (Request for Comments) ou especificações técnicas intermediárias?`,
      sum: `${tls} você utiliza para gerar sumários automáticos e referências cruzadas para guias técnicos maiores?`,
      dev: `${exp} com bibliotecas de testes automáticos?`,
      rev: "Como você lida com revisões colaborativas, incluindo comentários e sugestões de colegas?",
      pbl: "De que forma você publica ou disponibiliza esses documentos para equipes de QA, Ops?",
    },
    expert: {
      scp: "Você integra scripts que convertem doc em wiki/HTML/PDF automaticamente para distribuições?",
      col: "Como você mantém controle rigoroso de alterações em docs extensos (manual de arquitetura) via Git?",
      arc: `${mnn} descreve arquitetura de software avançada (ex.: diagramas UML) em docs e versiona?`,
      int: `${frq} faz a integração com ferramentas de doc automatizada (ex.: MkDocs, Sphinx)?`,
      pol: "Descreva livremente as suas políticas e padrões de documentação para lidar com conflitos de merge e pull requests",
    },
  },
  "docs"
);
export const devSsKeys = withFrozenLibreLabel(
  {
    beginner: {
      bug: "Você utiliza planilhas para rastrear bugs ou features simples, antes de migrar a um sistema de issue tracking?",
      cal: "Quais técnicas você utiliza para fazer cálculos de estimativas (ex.: datas de entrega) em planilhas básicas?",
      chg: "Em que frequência você registra changelogs rápidos (ex.: build versions) em uma planilha colaborativa?",
      env: "Você mantém configurações de ambiente (URLs, credenciais) em planilhas?",
      col: "Que ferramentas você utiliza para controlar a colaboração em tabelas?",
    },
    intermediate: {
      scr: "Quais tecnologias você utiliza para automatizar relatórios sobre builds?",
      mds: "Você usa planilhas de métricas (ex.: cobertura de testes, performance) para acompanhamento intermediário?",
      con: `${frq} consolida dados de múltiplos projetos numa planilha central e faz dashboards?`,
      link: "Você vincula planilhas a sistemas de CI/CD ou repositórios para atualizar informações de release?",
      sec: "Como você controla permissões, evitando que informações sensíveis fiquem expostas?",
    },
    expert: {
      big: "Você manipula grandes volumes de dados (logs de build, telemetria) em planilhas buscando estudar otimizações de performance?",
      piv: "Como você gera tabelas dinâmicas para agrupar estatísticas de commits, bugs, etc. em software grande?",
      spt: "Quais dessas tecnologias você utiliza para automatizar importações e exportação de dados (CSV, JSON, etc.) com scripts avançados para planilhas?",
      adm: "Quais destas práticas de auditoria (histórico, logs) para rastrear quem alterou métricas críticas?",
      ref: "De que forma você referencia macros ou integra planilhas com bancos de dados corporativos?",
    },
  },
  "spreadSheets"
);
export const devFmKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...fmBeginnerKeys,
      scp: "Quais dessas ferramentas de programação você utiliza para auxiliar no desenvolvimento e análise de formulários?",
    },
    intermediate: {
      ...fmIntermediateKeys,
      scp: "Quais dessas ferramentas de programação você utiliza para auxiliar no desenvolvimento e análise de formulários?",
      rgx: `${frq} adiciona Expressões Regulares na validação de campos em formulários?`,
      cnd: "Quais critérios e técnicas você aplica na lógica condicional para otimizar a UX de formulários?",
    },
    expert: {
      ...fmExpertKeys,
      doc: "De que modo você gera relatórios avançados (Power BI, Data Studio) a partir de dados do form?",
      sec: "Como você lida com autenticação corporativa (SSO) e níveis de permissão diferenciados nos forms?",
      adv: `${tcn} você usa no desenvolvimento de formulários avançados para criação de issues automáticas (como para plataformas corporativas e de versionamento)?`,
    },
  },
  "formBuilders"
);
export const devCsKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...csBeginnerKeys,
      nme: "Você define convenções de nome padrão (ex.: app_v1.0.zip) para facilitar identificação de builds?",
      syn: `${exp} com plataformas de versionamento em nuvem?`,
    },
    intermediate: {
      ...csIntermediateKeys,
      lck: `${exp} resolvendo conflitos de merge e rebase?`,
      ver: `${frq} elabora versionamento intermediário (snapshots) para assets e integra esse fluxo com outros colaboradores?`,
    },
    expert: {
      ...csExpertKeys,
      aud: "Em que frequência você audita logs de acesso, garantindo compliance e rastreabilidade dos binários?",
      tag: "Descreva suas práticas para demarcação de tags, versões e hashes ao versionar projetos",
      hgh: "Como você gerencia storage de alto volume (ex.: builds diários, logs extensos) e organiza rotinas de limpeza?",
    },
  },
  "cloudStorage"
);
export const devBiKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...biBeginnerKeys,
      dsa: `${exp} desenvolvendo automações para plataformas de BI?`,
    },
    intermediate: {
      ...biIntermediateKeys,
      dei: `${exp} desenvolvendo automação para integração contínua com ferramentas de BI?`,
      dsa: `${exp} desenvolvendo automações para extrair dados usados diretamente em plataformas de BI?`,
    },
    expert: {
      ...biExpertKeys,
      dee: `${frq} integra técnicas de análise preditiva e scripts customizados na ferramenta de BI para otimizar ciclos de desenvolvimento e identificar gargalos?`,
      dex: `${exp} automações e dashboards dinâmicos para gerar insights estratégicos a partir dos dados de desenvolvimento?`,
    },
  },
  "businessInteligence"
);
export const devCrmKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...crmBeginnerKeys,
      dev: `${exp} desenvolvendo customizações simples ou scripts para automatizar fluxos no CRM?`,
      dco: `${exp} configurando ambientes de testes para validar suas customizações no CRM?`,
    },
    intermediate: {
      ...crmIntermediateKeys,
      dei: `${tcn} você utiliza para desenvolver integrações entre CRMs e ferramentas de desenvolvimento para automatizar processos?`,
      des: `${exp} implementando scripts que consolidam dados de diferentes módulos do CRM para análise integrada?`,
      din: `${exp} criando automações que conectam CRMs a repositórios de código ou sistemas de monitoramento?`,
    },
    expert: {
      ...crmExpertKeys,
      dee: `${exp} integrando soluções avançadas de automação e customização no CRM (ex.: plugins, scripts complexos) para otimizar fluxos de trabalho?`,
      dex: `${exp} desenvolvendo plataforma internas baseada em CRMs para consolidar dados e gerar insights em tempo real?`,
    },
  },
  "Crms"
);
export const devErpKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...erpBeginnerKeys,
      dvb: `${frq} elabora scripts simples (ABAP, TOTVS) para automatizar rotinas no ERP em ambiente dev?`,
      dvc: `${fam} com a separação de ambientes dev/test para evitar riscos no ERP de produção?`,
      dvd: `${cts} observa ao documentar integrações mínimas do ERP para outros devs?`,
    },
    intermediate: {
      ...erpIntermediateKeys,
      dvi: `${mnn} cria fluxos (ex.: approvals) e integra com front-ends via APIs REST/SOAP no ERP?`,
      dvj: `${frq} realiza migrações de dados (dev -> staging -> prod) com minimal downtime no ERP?`,
      dvk: `${tcn} utiliza para estender módulos do ERP (ex.: custom BAPIs) e resolver conflitos de versão?`,
    },
    expert: {
      ...erpExpertKeys,
      dve: `${exp} em configurações avançadas (cache, indexes) para otimizar performance em ambientes dev do ERP?`,
      dvf: `${mnn} versiona customizações do ERP (scripts TOTVS, ABAP) seguindo práticas DevOps?`,
      dvg: `${rsc} de HA/DR são aplicados ao orquestrar failover e garantir compliance (LGPD) em dados reais?`,
    },
  },
  "Erps"
);
export const devPlnKeys = ObjectHelper.makeImmutable({
  ...defPlnKeys,
});
export const devAiAdKeys = ObjectHelper.makeImmutable({
  ...defAiAdKeys,
});
export const devAiImgKeys = ObjectHelper.makeImmutable({
  ...defAiImgKeys,
});
export const devAiVdKeys = ObjectHelper.makeImmutable({
  ...defAiVdKeys,
});
export const devLlmKeys = withFrozenLibreLabel(
  {
    beginner: {
      chat: `${frq} utiliza LLMs para gerar snippets ou "rascunhos" de código?`,
      tips: "Como você orienta perguntas básicas para obter exemplos de funções ou algoritmos?",
      ...llmBeginnerKeys,
    },
    intermediate: {
      ...llmIntermediateKeys,
      int: `${frq} integra a LLM em IDEs (ex.: GitHub Copilot)?`,
      exp: "Qual é o seu nível de conhecimento em algoritmos de Aprendizado de Máquina?",
      ctx: `${frq} armazena prompts para reiterações futuras?`,
      stc: "Qual dessas prática você adota com modelos de chain-of-thought para orientações de tarefas com múltiplas camadas?",
    },
    expert: {
      ...llmExpertKeys,
      ftu: `${exp} realizando fine-tuning ou prompt engineering avançado para modelos open-source?`,
      crt: "Selecione as classes de algoritmos de Aprendizado de Máquina que você mais tem experiência desenvolvendo",
      api: "Quais destas práticas você utiliza para integrar LLMs com pipelines CI/CD?",
    },
  },
  "llms"
);
export const devAddQuestions: [
  roleType,
  QuestionsMap<devComplexityKeySet>
] = Object.seal([
  "desenvolvimento",
  new Map([
    ["docs", devDocsKeys as any],
    ["spreadSheets", devSsKeys],
    ["formBuilders", devFmKeys],
    ["cloudStorage", devCsKeys],
    ["businessInteligence", devBiKeys],
    ["Crms", devCrmKeys],
    ["Erps", devErpKeys],
    ["planning", devPlnKeys],
    ["audio", devAiAdKeys],
    ["image", devAiImgKeys],
    ["video", devAiVdKeys],
    ["llms", devLlmKeys],
  ]),
]);
export const devOpsDocsKeys = withFrozenLibreLabel(
  {
    beginner: {
      sdr: "Como você documenta os passos de build ou scripts simples (Markdown, README) para que todos entendam?",
      cco: `${frq} adiciona comentários sobre configurações de CI/CD nos arquivos de doc?`,
      vrs: `${frq} versiona a documentação junto com o código em repositórios Git?`,
      col: "De que forma você permite que vários membros do time editem simultaneamente o mesmo doc?",
      cli: `${exp} criando CLIs para que devs executem builds localmente?`,
    },
    intermediate: {
      arc: "Como você registra arquitetura de pipelines (desenhos, YAML samples) em docs de referência?",
      sec: "Quais destas práticas de segurança você documenta em detalhes para suas pipelines?",
      pol: "Quais são suas ferramentas preferenciais para descrever políticas de commits, branch naming e merges em um documento de convenções?",
      ver: `${exp} com automação de múltiplos containers?`,
      aut: "Descreva livremente como você apresentaria automações básicas (hooks, triggers) em pipelines para uma equipe de desenvolvimento",
    },
    expert: {
      smk: "Você utiliza smokes ou specs em doc para QA e DevOps (ex.: BDD) e versiona junto do pipeline?",
      gen: "Como você gera documentação automatizada (ex.: swagger de microserviços) e vincula a um repositório doc?",
      ext: "De que forma você integra doc com wikis corporativas (SharePoint, Confluence) a fim de manter sincronizações?",
      adv: "Qual é seu procedimento para diagramar pipelines DevOps complexos (multi-stage, multi-cloud) e revisar periodicamente?",
      pol: `${tcn} você aplica para auditar seguindo normas de conformidade (ISO, PCI)?`,
    },
  },
  "docs"
);
export const devOpsSsKeys = withFrozenLibreLabel(
  {
    beginner: {
      pip: "Você utiliza planilhas para documentar as etapas de pipeline implementadas?",
      env: `${frq} registra variáveis de ambiente (ex.: URLs, keys) em uma planilha?`,
      job: "De que forma planilhas participam do desenvolvimento da sua pipeline?",
      rep: `${frq} gera relatórios em planilha sobre falhas e sucessos de build?`,
      acc: "Quais técnicas você utiliza para integrar planilhas diretamente no fluxo de fluxo DevOps?",
    },
    intermediate: {
      int: "Você integra a planilha de métricas (ex.: tempo de build) com scripts que atualizam células via API?",
      scp: "Quais formatos de script você usa para realizar consolidações de configuração (ex.: planilha => arquivo de config .yml)?",
      col: "De que forma você gerencia colaboração simultânea e resolve conflitos de edição nessa planilha?",
      seg: "Que tecnologias de segurança você utiliza para proteger abas de acessos indevidos?",
      das: "Como você documenta dashboards de monitoramento?",
    },
    expert: {
      big: "Como você lida com volumosas métricas (ex.: histórico de builds de meses/anos) e performance na planilha?",
      aut: "Que tipo de resultos e links de automação você registra em planilhas (scripts de rollback, escalonamento)?",
      adv: `${frq} gera dashboards complexos, cruzando dados de repositórios, monitoramento e falhas?`,
      ver: "De que modo versiona planilhas importantes para não perder histórico?",
      aud: "Como você audita logs ou histórico de builds dentro de planilhas?",
    },
  },
  "spreadSheets"
);
export const devOpsFmKeys = withFrozenLibreLabel(
  { ...opFmKeys },
  "formBuilders"
);
export const devOpsCsKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...csBeginnerKeys,
      nme: "Você define convenções de nome (ex.: app_v1.0.zip) para facilitar identificação de builds?",
      syn: `${exp} com plataformas de versionamento em nuvem?`,
    },
    intermediate: {
      ...csIntermediateKeys,
      inf: "Em que frequência você integra infra-as-code (Terraform, Ansible) para provisionar storage e fluxos?",
      sec: "Quais suas práticas para restringir acesso a releases ou builds sensíveis em storage corporativo?",
      net: "Quais são suas estratégias para lidar com latência ou quedas de conexão ao acessar pastas de rede contendo builds grandes?",
      int: "Descreva passos que considera essenciais para integrar pipelines CI/CD ao lidar com artefatos em uma pasta de rede ou storage remoto",
    },
    expert: {
      ...csExpertKeys,
      dpl: "Quais destas práticas você utiliza quando realiza replicações em múltiplos datacenters ou region endpoints para alta disponibilidade?",
      enc: "De que modo você encripta e protege artefatos sensíveis (chaves, libs privadas) no storage?",
      scc: `${tcn} você utiliza para aplicar caching avançado ou solutions como Artifactory/Nexus?`,
      mig: "Quais destas práticas você considera essenciais nas automações para migrar grandes volumes (ex.: repositório de artefatos) para outra infraestrutura em nuvem (ex.: S3) sem quebrar links?",
    },
  },
  "cloudStorage"
);
export const devOpsBiKeys = ObjectHelper.makeImmutable({
  ...devBiKeys,
});
export const devOpsCrmKeys = ObjectHelper.makeImmutable({
  ...devCrmKeys,
});
export const devOpsErpKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...erpBeginnerKeys,
      dob: `${frq} monta pipelines básicos para atualizar pacotes do ERP (SAP, TOTVS) com rollback simples?`,
      dov: `${mnn} versiona scripts ABAP/TOTVS no repositório devOps e inclui documentação mínima?`,
      dod: `${cts} define para organizar credenciais (url, DB user) do ERP em variáveis seguras (ex.: vault)?`,
    },
    intermediate: {
      ...erpIntermediateKeys,
      doi: `${mnn} configura SSO do ERP e orquestra automação de builds (ex.: triggers) no pipeline devOps?`,
      doj: `${frq} gerencia integrações e logs do ERP (DB remoto) enviando dados para dashboards devOps?`,
      dok: `${tcn} utiliza para migrar ambientes (desenv -> homolog -> prod) com minimal downtime no ERP?`,
    },
    expert: {
      ...erpExpertKeys,
      doe: `${exp} em orquestrar clusters HA no ERP e definir deploys sem downtime no pipeline devOps?`,
      dof: `${mnn} compila código do ERP (ex.: ABAP) em estágios automatizados, testando patches e traduções?`,
      dog: `${rsc} de observabilidade (logs, métricas) são usados para monitorar o ERP em dashboards devOps (Prometheus/Grafana)?`,
    },
  },
  "Erps"
);
export const devOpsPlnKeys = ObjectHelper.makeImmutable({
  ...defPlnKeys,
});
export const devOpsAiAdKeys = ObjectHelper.makeImmutable({
  ...defAiAdKeys,
});
export const devOpsAiImgKeys = ObjectHelper.makeImmutable({
  ...defAiImgKeys,
});
export const devOpsAiVdKeys = ObjectHelper.makeImmutable({
  ...defAiVdKeys,
});
export const devOpsLlmKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...llmBeginnerKeys,
      cmt: `${frq} gera comentários de pipeline ou explicações automáticas via LLM?`,
      tip: `${frq} usa LLMs para gerar esboços de scripts de CI/CD ou Dockerfiles simples?`,
    },
    intermediate: {
      ...llmIntermediateKeys,
      prp: `${frq} elabora prompts detalhando environment, orquestrador e escalabilidade para auxílio de LLMs?`,
      ctx: `${frq} armazena prompts para reiterações futuras?`,
      stc: "Qual dessas prática você adota com modelos de chain-of-thought para orientações de tarefas com múltiplas camadas?",
    },
    expert: {
      ...llmExpertKeys,
      adv: "Você executa instâncias self-hosted de modelos open source (Bloom, LLaMA) para sugerir config IaC?",
      api: "Quais destas práticas você utiliza para integrar LLMs com pipelines CI/CD?",
      cst: "Como você customiza o prompt engineering para refinar scripts de Terraform ou Ansible complexos?",
    },
  },
  "llms"
);
export const devOpsAddQuestions: [
  roleType,
  QuestionsMap<devOpsComplexityKeySet>
] = Object.seal([
  "devOps",
  new Map([
    ["docs", devOpsDocsKeys as any],
    ["spreadSheets", devOpsSsKeys],
    ["formBuilders", devOpsFmKeys],
    ["cloudStorage", devOpsCsKeys],
    ["businessInteligence", devOpsBiKeys],
    ["Crms", devOpsCrmKeys],
    ["Erps", devOpsErpKeys],
    ["planning", devOpsPlnKeys],
    ["audio", devOpsAiAdKeys],
    ["image", devOpsAiImgKeys],
    ["video", devOpsAiVdKeys],
    ["llms", devOpsLlmKeys],
  ]),
]);
export const repeatedDefinitions: Readonly<{
  [K in repeatingDefinitionKeys]: FieldDescription;
}> = ObjectHelper.makeImmutable({
  sum: {
    // "Você aplica SOMA, MÉDIA para ver resultados gerais de vendas em uma planilha?"
    type: "select-one",
    options: [
      "Não aplico funções",
      "Aplico funções básicas, como SOMA e MÉDIA",
      "Utilizo funções avançadas, como PROCV, Funções de matriz e Compostas",
    ],
  },
  col: {
    // "Como você colore ou categoriza células para destacar informações importantes?"
    type: "select-multiple",
    options: [
      "Cor de preenchimento manual",
      "Formatação condicional",
      "Aumento de Peso de Fonte",
      "Mudança de Estilo de Fonte",
      "Mudanças de Borda",
      "Reorientação vertical e horizontal",
    ],
  },
  exp: {
    type: "select-one",
    options: [
      "Não tenho conhecimento | familiaridade",
      "Básico",
      "Intermediário",
      "Avançado",
      "Muito Avançado",
    ],
  },
  frq: {
    // `${frq} ...?`
    type: "select-one",
    options: [
      "Nunca",
      "Raramente",
      "Ocasionalmente",
      "Frequentemente",
    ],
  },
  cht: {
    // "Que tipos de gráficos você costuma gerar para visualização?"
    type: "select-multiple",
    options: [
      "Gráficos de colunas/barras",
      "Gráficos de pizza/linha",
      "Gráficos de distribuição",
      "Gráficos dinâmicos avançados",
    ],
    required,
  },
  scp: {
    type: "select-multiple",
    options: [
      "Python",
      "C#",
      "Java",
      "JavaScript",
      "R",
      "VBA",
      "Macro",
      "Google App Scripts",
      "Bash",
      "PowerShell",
    ],
    required,
  },
  yn: {
    type: "radio",
    options: ["Sim", "Não"],
    required,
  },
  fil: {
    type: "select-multiple",
    options: [
      "Não uso filtros",
      "Filtros de String diretas",
      "Filtros Case Insensitive",
      "Filtros de Intervalo",
      "Filtros de Cor",
      "Filtros de Expressão Regular",
    ],
    required,
  },
  dbi: {
    // `${mnn} puxa informações de bancos de dados ou APIs...?`
    type: "select-multiple",
    options: [
      "Conexão manual (copiar/colar dados)",
      "Utilizo scripts de integração (ETL)",
      "Ferramentas de Data Sync (Zapier, Integromat)",
      "Não puxo dados externos",
    ],
  },
  colab: {
    //Como você orienta a colaboração simultânea
    type: "select-multiple",
    options: [
      "Uso comentários no documento",
      "Uso ferramentas de controle de alterações",
      "Uso edições em nuvem de arquivos",
      "Salvo arquivos e rascunhos em e-mail",
      "Uso validações por scripts",
      "Crio versões diferentes em um mesmo repositório",
      "Uso softwares especializados em colaboração corporativa, como CRMs",
      "Uso softwares e plataformas online de versionamento",
    ],
    required,
  },
  sec: {
    // "Que tecnologias de segurança você utiliza para proteger abas de planilhas de acessos indevidos?"
    type: "select-multiple",
    options: [
      "Proteção de abas com senha",
      "Controle de permissões por usuário",
      "Criptografia de arquivos",
      "Acesso restrito via autenticação corporativa (SSO)",
      "Temporizadores automáticos",
      "Passkeys, senhas e verificações de multifator",
      "Registro de logs de acesso",
      "Bloqueio de edição em unidades/células específicas",
    ],
    required,
  },
  tmp: {
    // "De que forma você aproveita modelos (templates) prontos para criar documentos básicos?"
    type: "select-multiple",
    options: [
      "Não uso templates prontos",
      "Faço download de templates online",
      "Mantenho um repositório interno de modelos",
      "Personalizo templates conforme a identidade visual",
      "Automatizo a criação a partir de templates (macros/scripts)",
    ],
    required,
  },
  ast: {
    // "De que forma você implementa processos de assinatura digital ou certificação de documentos?"
    type: "select-multiple",
    options: [
      "Não utilizo assinaturas digitais",
      "Assinatura eletrônica simples (PDF sign)",
      "Certificado digital (ICP-Brasil, etc.)",
      "Sistema corporativo de assinatura (DocuSign, etc.)",
    ],
    required,
  },
  docp: {
    // "Como você costuma documentar ...?"
    type: "select-multiple",
    options: [
      "Comentários no próprio código",
      "Markdown/README no repositório",
      "Ferramentas automáticas (JSDoc, etc.)",
      "Descrições de Testes Unitários e Integrados",
      "Esquemas em UML e Fluxogramas",
    ],
    required,
  },
  lvl: {
    type: "select-one",
    options: [
      "Nenhum(a)",
      "Pouco(a)",
      "Consideravelmente",
      "Muito(a)",
      "Extremo(a)",
    ],
    required,
  },
  txts: {
    type: "textarea",
    required,
    spellCheck: true,
    writingSuggestions: true,
    minLength: limits.small.MAX_UTF_16_SIGNED_SURROGATE,
  },
  txtl: {
    type: "textarea",
    required,
    spellCheck: true,
    writingSuggestions: true,
    minLength: limits.medium.MAX_UTF_16_SIGNED_SURROGATE,
  },
});
export const lib = ObjectHelper.makeImmutable(
  repeatedDefinitions.txtl
);
export const fmDefinitions: {
  [K in keyof typeof fmGeneralKeys]: FieldDescription;
} = ObjectHelper.makeImmutable({
  tpl: repeatedDefinitions.frq,
  rsp: {
    // "Quais são suas formas preferenciais de salvar dados de um formulário?"
    type: "select-multiple",
    options: [
      "Formatos de processamento tabular (.xls, .csv, etc.)",
      "JSON",
      "HTML",
      "Banco de dados relacionais",
      "Texto processado diretamente (.txt, .doc)",
    ],
    required,
  },
  emb: {
    //`${tcn} você utiliza com mais frequência para analisar resultados aglomerados por diversas submissões de um formulário?`
    type: "select-multiple",
    options: [
      "Observação e análise direta",
      "Processamento por Scripts",
      "Sumarização com Inteligências Artificias",
      "Planilhamento de funções",
      "Delegação para plataformas de BI",
    ],
  },
  plt: {
    //`${tls} você utiliza para construção de formulários?`
    type: "select-multiple",
    options: [
      "Google Forms",
      "Microsoft Forms",
      "Typeform",
      "JotForm",
      "SurveyMonkey",
      "Formstack",
      "Zoho Forms",
      "HubSpot Forms",
      "CMSs (como WordPress e Drupal)",
      "Linguagens de Programação",
    ],
    required,
  },
  slc: repeatedDefinitions.txtl,
});
export const fmBeginnerDefinitions: {
  [K in keyof typeof fmBeginnerKeys]: FieldDescription;
} = ObjectHelper.makeImmutable({
  crt: repeatedDefinitions.exp,
  ...fmDefinitions,
});
export const fmIntermediateDefinitions: ROFieldRecord<
  typeof fmIntermediateKeys
> = ObjectHelper.makeImmutable({
  ...fmDefinitions,
  aut: {
    type: "select-multiple",
    options: [
      "Não configuro automações de mensageria",
      "Notificações por e-mail via Google Apps Script",
      "Integração com Slack/Microsoft Teams ou outras Plataformas Corporativas",
      "Webhooks para sistemas internos",
    ],
    required,
  },
  api: repeatedDefinitions.frq,
});
export const fmExpertDefinitions: ROFieldRecord<
  typeof fmExpertKeys
> = ObjectHelper.makeImmutable({
  ...fmDefinitions,
  dsh: {
    //"Como você conecta formulários a dashboards para relatórios em tempo real?"
    type: "select-multiple",
    options: [
      "Uso de integração direta via API (Google Sheets, Power BI, Tableau)",
      "Exportação manual de dados para o BI",
      "Automação de importação de dados via scripts (Python, Apps Script, VBA)",
      "Uso de conectores nativos em ferramentas como Google Data Studio",
      "Dashboards embutidos diretamente nos formulários para feedback imediato",
      "Não conecto formulários a dashboards",
    ],
    required,
  },
});
export const opRepeatedDefinitions: Readonly<{
  [K in complexityLabel]: KeysRecords<FormBuilderQuestionKey>;
}> = ObjectHelper.makeImmutable({
  beginner: {
    ...fmBeginnerDefinitions,
    net: {
      type: "select-multiple",
      options: [
        "Whitelist de IPs confiáveis",
        "Configuração de proxy corporativo",
        "Uso de VPN para acesso",
        "Liberação de portas específicas",
        "Não lido com restrições de rede",
      ],
      required,
    },
  },
  intermediate: {
    ...fmIntermediateDefinitions,
    sso: {
      type: "select-multiple",
      options: [
        "Integração com Active Directory",
        "Configuração SAML 2.0",
        "Autenticação OAuth 2.0",
        "Sincronização de grupos LDAP",
        "Não implemento SSO",
      ],
      required,
    },
    sec: {
      type: "select-multiple",
      options: [
        "Certificados SSL/TLS",
        "Configuração de HSTS",
        "Cipher suites atualizados",
        "Verificação de revogação CRL/OCSP",
        "Não implemento SSL avançado",
      ],
      required,
    },
  },
  expert: {
    ...fmExpertDefinitions,
    adv: repeatedDefinitions.txtl,
    crt: repeatedDefinitions.sec,
    flw: repeatedDefinitions.yn,
    drp: {
      type: "select-multiple",
      options: [
        "Replicação em tempo real",
        "Backups georedundantes",
        "Snapshots horários",
        "Failover automático entre DCs",
        "Não implemento DRP",
      ],
      required,
    },
  },
});
function withFrozenLib<T>(
  dict: EntryTypeDictionary<T>
): EntryTypeDictionary<T> {
  dict = ObjectHelper.makeMutable(dict);
  Object.keys(dict).forEach(roleKey => {
    const roleData = dict[roleKey as keyof typeof dict];
    ["beginner", "intermediate", "expert"].forEach(
      levelKey => {
        if (
          !roleData[levelKey as keyof typeof roleData] ||
          "lib" in
            roleData[levelKey as keyof typeof roleData]
        )
          return;
        roleData[levelKey as keyof typeof roleData] = {
          ...roleData[levelKey as keyof typeof roleData],
          lib,
        };
      }
    );
  });
  return ObjectHelper.deepFreeze(dict) as Readonly<
    EntryTypeDictionary<T>
  >;
}
export const docEntryTypes: EntryTypeDictionary<DocsQuestionKey> =
  withFrozenLib({
    executivoAdministrativo: {
      beginner: {
        // eaDocsKeys.beginner
        fmt: repeatedDefinitions.exp, // `${fam} com formatações simples...`
        tmp: repeatedDefinitions.tmp, // "De que forma você aproveita modelos (templates) prontos..."
        cbb: repeatedDefinitions.colab,
        frq: repeatedDefinitions.frq,
        rdo: {
          // "O quanto você prefere responder com radio groups ou seleções rápidas?"
          type: "radio",
          options: [
            "Prefiro respostas rápidas (seletores, checks e rádios)",
            "Prefiro respostas mais longas (campos de texto)",
            "Indiferente",
          ],
          required,
        },
        exp: repeatedDefinitions.frq,
        prt: repeatedDefinitions.exp,
        spl: {
          // "Como você separa seções ou capítulos em documentos longos?"
          type: "select-multiple",
          options: [
            "Utilizo quebras de página manuais",
            "Uso Estilos e Sumário automático",
            "Divido em arquivos distintos",
          ],
          required,
        },
        edt: {
          // "Você edita documentos colaborativos online ou offline?"
          type: "select-one",
          options: [
            "Somente offline (MS Word local, etc.)",
            "Somente online (Google Docs, Office 365)",
            "Ambos (depende do projeto)",
          ],
          required,
        },
        syn: {
          // "De que forma você sincroniza documentos em diferentes dispositivos?"
          type: "select-multiple",
          options: [
            "Manualmente, com Dispositivos Físicos de Armazenamento",
            "Através de Serviços de Armazenamento de Nuvem (Google Drive, One Drive, etc.) ",
            "Plataformas corporativas específicas (SharePoint, Nextcloud, etc.)",
            "Plataformas de Versionamento (GitHub, GitLab, etc.)",
          ],
          required,
        },
      },
      intermediate: {
        // eaDocsKeys.intermediate
        tpl: {
          type: "select-multiple",
          options: [
            "Sumário automático (Word/Google Docs)",
            "Ferramentas de referências avançadas (LaTeX, etc.)",
            "Macros/scripts para inserir índices",
          ],
          required,
        },
        rev: repeatedDefinitions.colab,
        mac: repeatedDefinitions.scp,
        sgn: repeatedDefinitions.frq,
        stt: {
          // "Que tipo de estratégia e ferramentas você utiliza para formatação do layout de edição?"
          type: "select-multiple",
          options: [
            "Layout básico (margens, cabeçalhos)",
            "Ferramentas de editoração avançada (InDesign, Publisher)",
            "Uso estilos corporativos padronizados",
            "Macros e scripts para aplicar layout uniforme",
          ],
          required,
        },
        idx: repeatedDefinitions.exp,
        fmt: repeatedDefinitions.col,
        crt: repeatedDefinitions.frq,
        exp: repeatedDefinitions.exp,
        api: repeatedDefinitions.frq,
      },
      expert: {
        // eaDocsKeys.expert
        vba: repeatedDefinitions.scp,
        sec: repeatedDefinitions.frq,
        big: repeatedDefinitions.frq,
        adv: {
          // "Que técnicas avançadas (campos dinâmicos, mala direta) você utiliza em documentos corporativos?"
          type: "select-multiple",
          options: [
            "Não uso campos dinâmicos/mala direta",
            "Mala direta com planilha de contatos",
            "Campos dinâmicos para placeholders complexos",
            "Macros avançadas para gerar múltiplos documentos",
          ],
          required,
        },
        mlc: repeatedDefinitions.yn,
        int: repeatedDefinitions.frq,
        tem: repeatedDefinitions.frq,
        dig: repeatedDefinitions.ast,
        rpt: {
          // "Qual sua experiência em gerar relatórios analíticos automatizados com base em texto estruturado?"
          type: "select-multiple",
          options: [
            "Nunca gerei relatórios automatizados",
            "Crio relatórios básicos a partir de scripts",
            "Integro doc com bancos de dados e macros",
            "Uso ferramentas de BI que extraem texto para dashboards",
          ],
          required,
        },
        // "Descreva como você gerencia estilos de parágrafo, índice remissivo e formatação de layout altamente customizada."
        stl: repeatedDefinitions.txtl,
      },
    },
    financeiro: {
      beginner: {
        frm: {
          // "Como você elabora documentos financeiros simples (propostas, orçamentos)..."
          type: "select-multiple",
          options: [
            "Não elaboro documentos financeiros",
            "Uso modelos prontos (Word, Google Docs)",
            "Faço formatação de texto manualmente",
            "Automatizo tabelas e cálculos simples",
          ],
          required,
        },
        ref: {
          // "De que forma você insere referências internas ou notas explicativas em documentos?"
          type: "select-multiple",
          options: [
            "Não insiro referências/notas",
            "Uso rodapé ou nota de rodapé manual",
            "Ferramentas de referência interna (marcadores, links)",
          ],
          required,
        },
        rev: repeatedDefinitions.frq,
        upg: repeatedDefinitions.colab,
        cmt: {
          // "Quais recursos você utiliza para comentar e fazer sugestões em documentos e relatórios?"
          type: "select-multiple",
          options: [
            "Não adiciono comentários",
            "Uso comentários nativos (Word, Google Docs)",
            "Crio anotações em PDF",
            "Uso plataformas de colaboração (SharePoint, Teams)",
          ],
          required,
        },
      },
      intermediate: {
        stl: {
          // "Qual é sua prática para padronizar estilos (cabeçalho, corpo, rodapé)..."
          type: "select-multiple",
          options: [
            "Não padronizo estilos",
            "Uso estilos básicos (título, subtítulo)",
            "Macros/scripts para aplicar estilos pré-definidos",
            "Ferramentas de design (ex.: InDesign) para relatórios complexos",
          ],
          required,
        },
        trc: repeatedDefinitions.colab,
        ast: repeatedDefinitions.ast,
        dbl: {
          // `${mnn} integra dados de planilhas ou bancos de dados em documentos de texto?`
          type: "select-multiple",
          options: [
            "Copio/colo manualmente",
            "Uso mala direta com planilhas",
            "Ferramentas de link dinâmico (OLE, etc.)",
            "Scripts para integrar documentos com dados extraídos de Banco de Dados",
          ],
          required,
        },
        alt: repeatedDefinitions.yn,
      },
      expert: {
        mac: repeatedDefinitions.scp,
        cmp: repeatedDefinitions.colab,
        rpt: {
          // "De que forma você cria relatórios consolidados extensos..."
          type: "select-multiple",
          options: [
            "Crio manualmente com sumário e índice",
            "Uso macros/scripts para gerar seções e sumário automático",
            "Ferramentas de BI integradas ao doc",
          ],
          required,
        },
        seg: repeatedDefinitions.sec,
        apx: {
          // "Como você gerencia anexos ou apêndices em documentos de fechamento contábil e fiscal complexos?"
          type: "select-multiple",
          options: [
            "Não uso anexos",
            "Anexo manualmente PDF/planilhas",
            "Macros para inserir seções de apêndice",
            "Ferramentas corporativas para linkar docs",
          ],
          required,
        },
      },
    },
    comercial: {
      beginner: {
        rfp: {
          // "Quais técnicas de formatação você prioriza no design gráficos de documentos para propostas comerciais?"
          type: "select-multiple",
          options: [
            "Não utilizo formatação específica",
            "Cabeçalhos e subcabeçalhos para organização",
            "Listas numeradas ou com marcadores para itens",
            "Tabelas para demonstrar preços e prazos",
            "Uso de estilos corporativos (fontes, cores, logos)",
            "Macros/scripts para padronizar layout",
          ],
          required,
        },
        lbl: repeatedDefinitions.col,
        cpl: repeatedDefinitions.frq,
        sig: repeatedDefinitions.ast,
        hst: repeatedDefinitions.colab,
      },
      intermediate: {
        ref: {
          // "Como você faz referência cruzada entre cláusulas em documentos de proposta...?"
          type: "select-multiple",
          options: [
            "Link manual (Ex.: ver seção 2.1)",
            "Ferramenta de referências internas (Word/Docs)",
            "Macros/scripts para atualizar referências",
            "Inserção de URIs no texto",
          ],
          required,
        },
        rev: repeatedDefinitions.colab,
        mac: repeatedDefinitions.scp,
        sty: repeatedDefinitions.tmp,
        adv: repeatedDefinitions.frq,
      },
      expert: {
        api: {
          // "De que forma você integra editores de texto a sistemas comerciais...?"
          type: "select-multiple",
          options: [
            "Não integro a sistemas comerciais dedicados",
            "Integração pontual via macros e scripts",
            "APIs REST ou plugins dedicados",
            "Integração completa (dados, templates, automação)",
          ],
          required,
        },
        cnd: {
          // "Como você lida com campos dinâmicos e mala direta para dezenas de clientes simultaneamente?"
          type: "select-multiple",
          options: [
            "Não uso campos dinâmicos",
            "Mala direta simples com planilhas",
            "Integração de macros/scripts para lotes grandes",
            "Ferramenta corporativa (CRM) para centenas de clientes",
          ],
          required,
        },
        sec: repeatedDefinitions.frq,
        cmp: repeatedDefinitions.colab,
        mlc: repeatedDefinitions.yn,
      },
    },
    marketing: {
      beginner: {
        mch: repeatedDefinitions.tmp,
        chk: repeatedDefinitions.yn,
        pln: repeatedDefinitions.frq,
        cmd: repeatedDefinitions.colab,
        ext: repeatedDefinitions.frq,
      },
      intermediate: {
        mac: repeatedDefinitions.scp,
        rev: repeatedDefinitions.colab,
        stl: repeatedDefinitions.col,
        mlt: repeatedDefinitions.frq,
        doc: repeatedDefinitions.dbi,
      },
      expert: {
        adv: repeatedDefinitions.yn,
        sec: repeatedDefinitions.sec,
        ver: repeatedDefinitions.colab,
        col: {
          // "Você gerencia múltiplas equipes (social media, redatores, designers) editando o mesmo doc?"
          type: "select-multiple",
          options: [
            "Não gerencio equipes múltiplas",
            "Track changes e permissões manuais",
            "Plataforma colaborativa (Google Workspace, etc.)",
            "Ferramentas corporativas de PM (Asana, Trello) linkadas ao doc",
          ],
          required,
        },
        idx: {
          // "Em materiais extensos (ex.: e-book), como você constrói sumários, índices e referências cruzadas?"
          type: "select-multiple",
          options: [
            "Faço manualmente (marcadores)",
            "Uso recursos nativos (Word, etc.)",
            "Ferramentas avançadas (LaTeX, Indesign)",
          ],
          required,
        },
      },
    },
    suporteTecnicoN1: {
      beginner: {
        fmt: repeatedDefinitions.colab,
        syn: repeatedDefinitions.colab,
        cpt: repeatedDefinitions.frq,
        tmp: repeatedDefinitions.tmp,
        col: {
          // "Como você demonstra a colaboração simultânea (multiusuário) em um mesmo documento?"
          type: "select-multiple",
          options: [
            "Recursos nativos do Word/Google Docs",
            "Track changes + comentários offline",
            "Ferramentas corporativas com logs de edição",
          ],
          required,
        },
      },
      intermediate: {
        mac: repeatedDefinitions.scp,
        rev: repeatedDefinitions.colab,
        sec: repeatedDefinitions.sec,
        stl: repeatedDefinitions.col,
        // "Qual é sua abordagem ao diagnosticar problemas intermediários de layout ou formatação avançada?"
        prb: repeatedDefinitions.txtl,
      },
      expert: {
        scr: repeatedDefinitions.scp,
        cpy: repeatedDefinitions.colab,
        idx: {
          // "Como você instrui usuários a criarem índices remissivos ou seções avançadas em documentos extensos?"
          type: "select-multiple",
          options: [
            "Sugiro sumário automático",
            "Macros ou scripts para índices remissivos",
          ],
          required,
        },
        adv: {
          // "De que forma você soluciona conflitos de permissões avançadas e restrições de edição em rede?"
          type: "select-multiple",
          options: [
            "Não lido com permissões avançadas",
            "Configuro ACLs no sistema de arquivos",
            "Ferramentas corporativas de DLP e logs",
            "Automação para conceder/retirar permissões",
          ],
          required,
        },
        dbi: repeatedDefinitions.frq,
      },
    },
    suporteTecnicoN2: {
      beginner: {
        syn: repeatedDefinitions.colab,
        cmp: {
          // `${tls} de conversão de formatos de documentos você recomendaria para um usuário?`,
          type: "select-multiple",
          options: [
            "Conversão nativa do Word/Google Docs (Salvar como PDF, etc.)",
            "Ferramentas online (SmallPDF, iLovePDF, Zamzar, CloudConvert)",
            "Ferramentas de linha de comando (ex.: LibreOffice --convert-to)",
            "Adobe Acrobat para manipulação de PDFs",
            "Não recomendo ferramentas específicas",
          ],
          required,
        },
        plg: repeatedDefinitions.frq,
        pmt: {
          // `${tls} você utiliza para intervir em problemas de permissão (arquivos bloqueados, somente leitura) em rede?`
          type: "select-multiple",
          options: [
            "Alteração manual de permissões (Propriedades do arquivo, Segurança, NTFS)",
            "Uso do comando 'takeown' e 'icacls' no Windows",
            "Desbloqueio via ferramentas de administração de rede (Active Directory, GPO)",
            "Abertura do arquivo em modo de compatibilidade",
            "Solicitação de permissão ao administrador do sistema",
            "Não utilizo ferramentas específicas para isso",
          ],
          required,
        },
        ori: {
          // "Que orientações básicas você dá quando o documento é corrompido ou não abre corretamente?"
          type: "select-multiple",
          options: [
            "Tentar abrir o arquivo em outro editor compatível (LibreOffice, Notepad++)",
            "Recuperação automática no próprio software (Word, Excel, etc.)",
            "Utilização de ferramentas online de recuperação de arquivos",
            "Abrir o documento em modo de segurança",
            "Recuperação de versões anteriores ou backups",
            "Converter para outro formato antes de abrir",
            "Não forneço orientações para esse tipo de problema",
          ],
          required,
        },
      },
      intermediate: {
        mac: repeatedDefinitions.scp,
        lay: {
          // "Como você soluciona problemas de layout avançado (sumário, seções)...?"
          type: "select-multiple",
          options: [
            "Não soluciono layout avançado",
            "Ajustes manuais de sumário e seções",
            "Macros que recriam sumário",
            "Ferramentas de formatação corporativa",
          ],
          required,
        },
        col: repeatedDefinitions.colab,
        idx: {
          // "Como você orienta a criação de índices remissivos ou referências cruzadas...?"
          type: "select-multiple",
          options: [
            "Uso Word/Docs com marcadores",
            "Uso de Ferramentas avançadas (LaTeX, Indesign)",
            "Uso de Scripts para índices remissivos grandes",
          ],
          required,
        },
        adv: {
          // "Qual sua abordagem para logs ou trilhas de auditoria em edição de documentos compartilhados?"
          type: "select-multiple",
          options: [
            "Uso histórico do Word/Docs",
            "Sistemas de versionamento corporativos",
            "Scripts de auditoria para docs",
          ],
          required,
        },
      },
      expert: {
        vba: repeatedDefinitions.scp,
        enc: repeatedDefinitions.exp,
        api: repeatedDefinitions.exp,
        mig: {
          // "Qual sua estratégia ao migrar docs de um sistema legado (ex.: Lotus) para plataformas atuais...?"
          type: "select-one",
          options: [
            "Exportação manual para formatos atuais",
            "Ferramentas de conversão em massa",
            "Scripts customizados para manter formatação",
          ],
          required,
        },
        // "Descreva como você configura servidores de documentos (ex.: SharePoint)..."
        srv: repeatedDefinitions.txtl,
      },
    },
    operatorio: {
      beginner: {
        net: {
          // "Como você configura as permissões básicas de rede para que os usuários acessem um editor de texto?"
          type: "select-multiple",
          options: [
            "Acesso livre via rede local",
            "Controle de acesso por grupos e usuários (AD)",
            "VPN para acesso remoto seguro",
          ],
          required,
        },
        upd: repeatedDefinitions.frq,
        lnk: {
          // "De que modo você instala e vincula plugins ou complementos em servidores de arquivos locais?"
          type: "select-multiple",
          options: [
            "Instalação manual em cada máquina",
            "Distribuição via scripts/GPO",
            "Sistemas de pacotes corporativos (SCCM)",
          ],
          required,
        },
        prt: {
          // "Como você configura impressoras e controla spools de documentos em rede?"
          type: "select-multiple",
          options: [
            "Adiciono impressora local e compartilho",
            "Servidor de impressão (Windows Server Print Services)",
            "Ferramentas de cotas (PaperCut, etc.)",
          ],
          required,
        },
        pat: {
          // "Qual sua prática para padronizar caminhos de salvamento (servidor/nuvem)...?"
          type: "select-multiple",
          options: [
            "Orientação manual e com intervenção direta",
            "Crio GPO para mapear caminhos",
            "Ferramenta de versionamento e backup automático",
          ],
          required,
        },
      },
      intermediate: {
        gpo: repeatedDefinitions.scp,
        tro: {
          // "Como você soluciona problemas de lentidão ao abrir documentos via rede...?"
          type: "select-multiple",
          options: [
            "Verifico latência de rede e DNS",
            "Desabilito funcionalidades que causam travas (ex.: versioning)",
            "Cache local ou replicação DFS",
          ],
          required,
        },
        vrs: {
          // "Você gerencia versionamento centralizado (ex.: SharePoint) e resolve conflitos de check-in/out?"
          type: "select-one",
          options: [
            "Configuro SharePoint básico",
            "Aplico check-in/out e controlo conflitos manualmente",
            "Ferramentas de versionamento corporativas robustas",
          ],
          required,
        },
        scr: {
          // "De que forma você monitora logs de acesso e edição para auditoria de compliance em documentos?"
          type: "select-multiple",
          options: [
            "Verifico logs locais do Windows ou do Samba",
            "Uso ferramentas de SIEM (Splunk, etc.)",
            "Macros e scripts para rastrear atividade",
          ],
          required,
        },
        pol: {
          // "Como você define políticas de backup e snapshot para evitar perdas de dados em arquivos críticos?"
          type: "select-multiple",
          options: [
            "Backup manual periódico",
            "Snapshots automáticos",
            "Soluções corporativas",
          ],
          required,
        },
      },
      expert: {
        scc: {
          // "Você customiza instalações em larga escala (SCCM) de editores de texto?"
          type: "select-multiple",
          options: [
            "Pacote MSI básico distribuído manualmente",
            "SCCM com configurações personalizadas (GPO + MST)",
            "Testes de compatibilidade e atualizações automatizadas",
          ],
          required,
        },
        dlp: {
          // "Como você integra soluções de DLP (Data Loss Prevention) para docs sensíveis na rede corporativa?"
          type: "select-multiple",
          options: [
            "DLP básico (Bloqueio de e-mails externos)",
            "Ferramentas avançadas (Microsoft Purview, Symantec DLP)",
            "Alertas e logs centralizados para documentos críticos",
          ],
          required,
        },
        dfs: {
          // "Qual sua abordagem para replicação DFS entre múltiplos sites, evitando corrupção de documentos?"
          type: "select-multiple",
          options: [
            "DFS básico com replicação bidirecional",
            "Scripts para checar conflitos e integridade",
            "Ferramentas de cluster corporativo (Azure File Sync)",
          ],
          required,
        },
        off: {
          // "Você gerencia merges offline/online e problemas de credenciais em cenários desconectados?"
          type: "select-multiple",
          options: [
            "Manual (salvo localmente e substituo ao reconectar)",
            "Ferramentas de versionamento (Git, etc.) para doc",
            "Autenticação federada com cache de credenciais",
          ],
          required,
        },
        iso: {
          // "De que forma você garante conformidade (ISO, PCI) para manipulação segura de documentos corporativos?"
          type: "select-multiple",
          options: [
            "Políticas mínimas de segurança",
            "Ferramentas de auditoria e logs obrigatórias",
            "Procedimentos certificados e verificados regularmente",
          ],
          required,
        },
      },
    },
    desenvolvimento: {
      beginner: {
        api: repeatedDefinitions.docp,
        pat: {
          // "Você segue algum padrão (ex.: Markdown) para registrar instruções de compilação ou uso?"
          type: "select-multiple",
          options: [
            "Markdown/README",
            "Ferramentas de doc (Asciidoc, ReStructuredText)",
            "Wiki corporativa com templates",
            "Jupyter Notebooks",
            "HTML",
            "Formatos relacionais (.csv, .xls, etc.)",
            "Documentos processador (.doc, .docx, etc.)",
          ],
          required,
        },
        col: repeatedDefinitions.exp,
        ver: repeatedDefinitions.colab,
        sty: {
          // "De que forma você padroniza estilos de anotações nos arquivos?"
          type: "select-multiple",
          maxLength:
            limits.medium.MAX_UTF_16_SIGNED_SURROGATE,
          required,
        },
      },
      intermediate: {
        rfc: repeatedDefinitions.frq,
        sum: {
          // "Em que nível você gera sumários automáticos e referências cruzadas...?"
          type: "select-one",
          options: [
            "Ferramenta nativa (Word/Docs) + referências cruzadas",
            "Sistemas de doc (Sphinx/MkDocs) com auto-index",
            "Inteligências Articiais",
          ],
          required,
        },
        dev: repeatedDefinitions.exp,
        rev: {
          // "Como você lida com revisões colaborativas, incluindo comentários e sugestões de colegas?"
          type: "select-multiple",
          options: [
            "Track changes e comentários no doc",
            "Ferramentas de code review (GitHub, GitLab) para doc",
            "Plataformas colaborativas (Confluence, Slack, Trelo, Notion, etc.)",
          ],
          required,
        },
        pbl: {
          // "De que forma você publica ou disponibiliza esses documentos para equipes de QA, Ops?"
          type: "select-multiple",
          options: [
            "Documentos enviado por e-mail",
            "Wikis corporativas",
            "Ferramentas de doc automation (MkDocs, Docusaurus)",
            "Repositórios de versionamento locais e em nuvem",
          ],
          required,
        },
      },
      expert: {
        scp: repeatedDefinitions.yn,
        col: {
          // "Como você mantém controle rigoroso de alterações em docs extensos (manual de arquitetura) via Git?"
          type: "select-multiple",
          options: [
            "Commit doc manualmente sem merges",
            "Política de pull requests para cada doc change",
            "Scripts de diffs e merges text-based",
          ],
          required,
        },
        arc: {
          // `${mnn} descreve arquitetura de software avançada (ex.: diagramas UML) em docs e versiona?`
          type: "select-multiple",
          options: [
            "Diagramas salvos como imagens no repositório",
            "Ferramentas de diagrama online (Lucid, Draw.io) com export",
            "Asciidoc/PlantUML versionado no Git",
          ],
          required,
        },
        int: repeatedDefinitions.frq,
        pol: repeatedDefinitions.txtl,
      },
    },
    devOps: {
      beginner: {
        sdr: repeatedDefinitions.docp,
        cco: repeatedDefinitions.yn,
        vrs: repeatedDefinitions.frq,
        col: repeatedDefinitions.colab,
        cli: repeatedDefinitions.exp,
      },
      intermediate: {
        arc: {
          // "Como você registra arquitetura de pipelines (desenhos, YAML samples) em docs de referência?"
          type: "select-multiple",
          options: [
            "Incluo exemplos de .yaml e .json no README",
            "Ferramentas visuais (Draw.io) e anexo no doc",
            "Scripts que geram diagrama a partir do pipeline real",
          ],
          required,
        },
        sec: repeatedDefinitions.sec,
        pol: {
          // "Você insere políticas de commits, branch naming e merges em um documento de convenções?"
          type: "select-multiple",
          options: [
            "Defino no README do repositório",
            "Documento corporativo de convenções DevOps",
            "Acompanhado por scripts de lint e validação",
            "Comentários nos arquivos de configuração",
          ],
          required,
        },
        ver: repeatedDefinitions.exp,
        // "Você descreve automações (hooks, triggers) e como elas funcionam para integrantes novos?"
        aut: repeatedDefinitions.txtl,
      },
      expert: {
        smk: {
          // "Você utiliza smokes ou specs em doc para QA e DevOps (ex.: BDD) e versiona junto do pipeline?"
          type: "select-multiple",
          options: [
            "Spec do QA sem versionamento",
            "Integro BDD (Cucumber) e versiono junto",
            "Ferramentas que geram doc automatic a partir dos testes",
          ],
          required,
        },
        gen: {
          // "Como você gera documentação automatizada (ex.: swagger de microserviços) e vincula a um repositório doc?"
          type: "select-multiple",
          options: [
            "Exporto swagger manualmente",
            "Script no CI que atualiza repositório doc",
            "Ferramentas de doc as code (Sphinx, MkDocs) integrado",
          ],
          required,
        },
        ext: {
          // "De que forma você integra doc com wikis corporativas (SharePoint, Confluence) e mantém sincronizado?"
          type: "select-multiple",
          options: [
            "Copio/colo manualmente na Plataforma",
            "Automações para exportar docs para wikis",
            "APIs de sync entre repositórios e wikis corporativas",
          ],
          required,
        },
        adv: {
          // "Qual é seu procedimento para diagramar pipelines DevOps complexos (multi-stage, multi-cloud) e revisar periodicamente?"
          type: "select-multiple",
          options: [
            "Uso ferramenta de diagrama local (Visio, Draw.io)",
            "Armazeno diagramas em repositório e reviso a cada sprint",
            "Scripts geram diagramas automáticos (ex.: Pipeline-as-Code)",
          ],
          required,
        },
        pol: {
          type: "select-multiple",
          options: [
            "Checagens pontuais sem doc detalhada",
            "Documentação formal de cada controle (ISO, PCI)",
            "Ferramentas de compliance integradas ao pipeline + doc",
          ],
          required,
        },
      },
    },
    undefined: {
      beginner: {
        fmt: repeatedDefinitions.exp, // `${fam} com formatações simples...`
        tem: repeatedDefinitions.tmp, // "De que forma você aproveita modelos (templates) prontos..."
        use: repeatedDefinitions.frq,
        col: repeatedDefinitions.colab,
        exp: repeatedDefinitions.exp,
      },
      intermediate: {
        rev: repeatedDefinitions.colab,
        mac: repeatedDefinitions.yn,
        //`Quais destas ferramentas você utiliza para converter formatos de arquivos de documentos?`
        cmp: {
          type: "select-multiple",
          options: [
            `Adobe Acrobat (PDF para Word/Excel)`,
            `Microsoft Word (Salvar como PDF, DOCX, etc.)`,
            `Google Docs (Exportação para diferentes formatos)`,
            `LibreOffice (Conversão entre ODT, DOCX, PDF, etc.)`,
            `Zamzar ou Online Convert (Conversores online)`,
            `Pandoc (Conversão avançada de documentos via CLI)`,
            `Calibre (Conversão de e-books para PDF, EPUB, MOBI)`,
            `HandBrake (Conversão de documentos digitalizados em imagens/PDFs)`,
            `ABBYY FineReader (OCR e conversão para textos editáveis)`,
          ],
          required,
        },
        per: repeatedDefinitions.sec,
        lay: repeatedDefinitions.txtl,
      },
      expert: {
        // eaDocsKeys.expert
        vba: repeatedDefinitions.scp,
        sec: repeatedDefinitions.sec,
        idx: repeatedDefinitions.frq,
        api: repeatedDefinitions.txts,
        adv: repeatedDefinitions.txts,
      },
    },
  });
export const ssEntryTypes: EntryTypeDictionary<SpreadsheetsQuestionKey> =
  withFrozenLib({
    executivoAdministrativo: {
      beginner: {
        sum: repeatedDefinitions.sum,
        frq: repeatedDefinitions.frq,
        col: repeatedDefinitions.col,
        spr: {
          // "Você prefere responder perguntas por meio de seletores (radio, select) ou textos longos?"
          type: "radio",
          options: [
            "Prefiro seletores",
            "Prefiro texto livre",
            "Tanto faz",
          ],
          required,
        },
        fil: repeatedDefinitions.fil,
        frz: {
          // "Como você congela linhas ou colunas em planilhas?"
          type: "select-multiple",
          options: [
            "Nunca usei congelar",
            "Congelo a linha superior",
            "Congelo colunas e linhas",
          ],
          required,
        },
        fmt: repeatedDefinitions.frq,
        cpy: repeatedDefinitions.exp,
        ins: {
          // `${mnn} insere gráficos básicos para ilustrar dados?`
          type: "select-multiple",
          options: [
            "Não insiro gráficos",
            "Insiro gráficos simples",
            "Personalizo meus gráficos",
          ],
          required,
        },
        shs: {
          // "Você trabalha frequentemente com abas múltiplas em planilhas?"
          type: "radio",
          options: [
            "Não uso várias abas",
            "Uso poucas abas",
            "Sempre organizo em várias abas",
          ],
          required,
        },
      },
      intermediate: {
        piv: {
          // "Como você utiliza tabelas dinâmicas para analisar grandes quantidades de dados?"
          type: "select-multiple",
          options: [
            "Nunca usei Tabelas Dinâmicas",
            "Uso para análises pontuais",
            "Uso para análises complexas",
          ],
          required,
        },
        adv: repeatedDefinitions.frq,
        prc: repeatedDefinitions.frq,
        cht: repeatedDefinitions.cht,
        col: repeatedDefinitions.colab,
        tbl: repeatedDefinitions.frq,
        spl: {
          // "Como você divide dados em colunas separadas (Texto para Colunas)?"
          type: "select-multiple",
          options: [
            "Nunca usei Texto para Colunas",
            "Uso para dividir dados pontualmente",
            "Uso frequentemente para limpeza de dados",
          ],
          required,
        },
        lnk: repeatedDefinitions.exp,
        imp: repeatedDefinitions.frq,
        // "De que forma você audita ou depura fórmulas para corrigir erros?"
        aud: repeatedDefinitions.txtl,
      },
      expert: {
        mcr: repeatedDefinitions.scp,
        big: repeatedDefinitions.frq,
        arr: repeatedDefinitions.frq,
        prf: repeatedDefinitions.frq,
        sch: repeatedDefinitions.frq,
        mlc: repeatedDefinitions.yn,
        api: {
          // "De que forma você utiliza APIs para buscar ou enviar dados automaticamente?"
          type: "select-multiple",
          options: [
            "Nunca usei APIs",
            "Uso APIs de forma pontual",
            "Integrado a múltiplas APIs",
          ],
          required,
        },
        adv: {
          // "Que práticas avançadas você utiliza para validar e limpar grandes volumes de dados?"
          type: "select-multiple",
          options: [
            "Não faço limpeza avançada",
            "Uso filtros e fórmulas de limpeza",
            "Uso scripts e ferramentas de ETL",
          ],
          required,
        },
        // "Detalhe como você cria relatórios interativos integrando gráficos e controles (ex.: slicers)?"
        rpt: repeatedDefinitions.txts,
        // "Descreva como você conecta planilhas a bancos de dados SQL ou APIs, se aplicável."
        dbi: repeatedDefinitions.txts,
      },
    },
    financeiro: {
      beginner: {
        sum: repeatedDefinitions.sum,
        frq: repeatedDefinitions.frq,
        col: repeatedDefinitions.col,
        cat: {
          // "De que modo você categoriza transações... de forma simples?"
          type: "select-multiple",
          options: [
            "Sem categorização",
            "Listas suspensas",
            "Classificação manual",
          ],
          required,
        },
        fil: repeatedDefinitions.fil,
      },
      intermediate: {
        tab: repeatedDefinitions.frq,
        adv: {
          // "Como você integra planilhas financeiras a outras fontes de dados, como extratos bancários (CSV)?"
          type: "select-multiple",
          options: [
            "Não integro extratos",
            "Importo CSV manualmente",
            "Integro várias fontes regularmente",
          ],
          required,
        },
        dev: repeatedDefinitions.frq,
        cht: repeatedDefinitions.cht,
        val: {
          // "Quais dessas técnicas você utiliza para validar dados de entrada...?"
          type: "select-multiple",
          options: [
            "Não valido dados",
            "Validação de lista (drop-down)",
            "Regras de erro e restrições avançadas",
          ],
          required,
        },
      },
      expert: {
        big: repeatedDefinitions.frq,
        arr: repeatedDefinitions.frq,
        dbi: repeatedDefinitions.dbi,
        aud: {
          // "Como você audita fórmulas e checa consistência de resultados em planilhas de grande porte?"
          type: "select-multiple",
          options: [
            "Não audito ativamente",
            "Uso rastreamento de precedentes/erros",
            "Ferramentas externas (Add-ins) e scripts",
          ],
          required,
        },
        mcr: repeatedDefinitions.scp,
      },
    },
    comercial: {
      beginner: {
        lis: {
          // `${tcn} você utiliza para manter listas de leads ou clientes...?`
          type: "select-multiple",
          options: [
            "Planilhas simples (Excel, Google Sheets)",
            "Ferramentas de CRM básico (ex.: HubSpot)",
            "Sistemas próprios ou caseiros",
            "Não utilizo listas",
          ],
          required,
        },
        pro: repeatedDefinitions.yn,
        seg: repeatedDefinitions.fil,
        col: repeatedDefinitions.fil,
        sum: repeatedDefinitions.sum,
      },
      intermediate: {
        piv: repeatedDefinitions.frq,
        adv: repeatedDefinitions.yn,
        for: repeatedDefinitions.frq,
        cht: repeatedDefinitions.cht,
        // "Como você colabora com outros vendedores...?"
        col: repeatedDefinitions.txtl,
      },
      expert: {
        mac: repeatedDefinitions.scp,
        big: repeatedDefinitions.frq,
        seg: repeatedDefinitions.yn,
        dbi: repeatedDefinitions.dbi,
        // "Como você compara previsões e resultados reais em planilhas complexas...?"
        cmp: repeatedDefinitions.txtl,
      },
    },
    marketing: {
      beginner: {
        lis: {
          // `${tcn} você utiliza para manter listas de leads ou clientes...?`
          type: "select-multiple",
          options: [
            "Planilhas simples (Excel, Google Sheets)",
            "CRM básico (HubSpot, Zoho)",
            "Ferramenta interna ou caseira",
            "Não mantenho listas",
          ],
          required,
        },
        gcl: repeatedDefinitions.yn,
        cmp: {
          // "Como você organiza a comparação de diferentes campanhas ou canais?"
          type: "select-multiple",
          options: [
            "Comparação manual (planilhas)",
            "Ferramentas de relatórios (Data Studio, Power BI)",
            "Dashboards de marketing (Facebook, Google Ads)",
            "Não comparo campanhas",
          ],
          required,
        },
        fil: repeatedDefinitions.fil,
        sum: repeatedDefinitions.sum,
      },
      intermediate: {
        adv: repeatedDefinitions.yn,
        frq: repeatedDefinitions.frq,
        cht: repeatedDefinitions.cht,
        piv: {
          // "Como você cria tabelas dinâmicas para segmentar resultados de marketing?"
          type: "select-multiple",
          options: [
            "Não crio tabelas dinâmicas",
            "Recursos básicos de tabela dinâmica no Excel/Sheets",
            "Uso macros/scripts para pivotar dados",
            "Ferramentas externas (Power Pivot, Add-ins de marketing)",
          ],
        },
        // "Como você colabora com outros analistas para consolidar dados de marketing?"
        col: repeatedDefinitions.txtl,
      },
      expert: {
        mcr: repeatedDefinitions.scp,
        big: {
          // "Você conecta planilhas a soluções de Big Data ou Data Warehouse?"
          type: "select-one",
          options: [
            "Não conecto a Big Data",
            "Conexão limitada (planilhas exportadas)",
            "Integração completa (BigQuery, etc.)",
          ],
          required,
        },
        arr: repeatedDefinitions.exp,
        dbi: repeatedDefinitions.dbi,
        // "Descreva como você faz otimizações de performance em planilhas grandes de marketing?"
        prf: repeatedDefinitions.txtl,
      },
    },
    suporteTecnicoN1: {
      beginner: {
        sum: repeatedDefinitions.sum,
        frm: repeatedDefinitions.col,
        fil: repeatedDefinitions.fil,
        cbt: {
          // `${rsc} você utiliza para configurar proteções básicas de célula para evitar alterações indevidas?`
          type: "radio",
          options: [
            "Proteção de células bloqueadas no Excel/Google Sheets",
            "Restrição de edição por usuário ou grupo",
            "Uso de permissões em planilhas compartilhadas",
            "Validação de dados para evitar edições incorretas",
            "Uso de macros para impedir alterações não autorizadas",
            "Não utilizo proteções específicas para células",
          ],
          required,
        },
        con: {
          // "Como você orienta a colaboração simultânea em uma planilha (ex.: várias pessoas editando)?"
          type: "select-multiple",
          options: [
            "Ensino co-edição no Google Sheets",
            "Ensino co-edição no OneDrive e Microsoft Excel Online",
            "Aplicando Proteções e Permissões em rede local",
            "Sugerindo Padrões de Comentários",
            "Ensino sobre ferramentas de Controle de Edição",
            "Ensino versionamento",
          ],
          required,
        },
      },
      intermediate: {
        piv: {
          // "Qual é sua abordagem para ajudar usuários a criarem tabelas dinâmicas de complexidade média?"
          type: "select-multiple",
          options: [
            "Não oriento com Tabelas Dinâmicas",
            "Crio TDs básicas pontualmente",
            "Crio TDs em relatórios mensais",
            "Domino Tabelas Dinâmicas complexas",
          ],
          required,
        },
        fml: repeatedDefinitions.exp,
        cht: repeatedDefinitions.cht,
        val: repeatedDefinitions.fil,
        net: {
          // "De que forma você gerencia possíveis conflitos de versão ao trabalhar via rede ou nuvem?"
          type: "select-multiple",
          options: [
            "Faço backups manuais",
            "Uso controle de versão em nuvem",
            "Verifico histórico de edições",
          ],
          required,
        },
      },
      expert: {
        mcr: repeatedDefinitions.scp,
        sec: repeatedDefinitions.exp,
        prf: {
          // `${tcn} você utiliza para otimizar performance em planilhas extensas...`
          type: "select-multiple",
          options: [
            "Não faço tuning",
            "Separo abas e limito fórmulas complexas",
            "Uso macros ou scripts para otimização avançada",
          ],
          required,
        },
        idx: {
          // "Com quais serviços externos você integra as suas planilhas?"
          type: "text",
          maxLength:
            limits.small.MAX_UTF_16_SIGNED_SURROGATE,
          writingSuggestions: true,
          spellCheck: true,
        },
        // "De que forma você efetua auditoria em planilhas complexas para rastrear erros ou mudanças não autorizadas?"
        aud: repeatedDefinitions.txtl,
      },
    },
    suporteTecnicoN2: {
      beginner: {
        net: {
          // `${tcn} você orienta a configuração de planilhas em rede local ou via ferramentas de compartilhamento (Drive, OneDrive)?`
          type: "select-multiple",
          options: [
            "Acesso via compartilhamento direto",
            "Uso de permissões específicas",
            "Sincronização automática",
            "Histórico de versões",
          ],
          required,
        },
        fmz: {
          // `${tcn} você usa para evitar formatações que podem quebrar fórmulas ao abrir planilhas em versões distintas?`
          type: "select-multiple",
          options: [
            "Formatos padronizados (ex.: .xlsx)",
            "Evito formatação condicional excessiva",
            "Desabilito atualização automática de links",
            "Recomendo conversão para CSV antes de migração",
          ],
          required,
        },
        cft: {
          // `${tcn} você recomenda para fazer a conferência de dados em planilhas compartilhadas, resolvendo conflitos básicos de edição?`
          type: "select-multiple",
          options: [
            "Uso de controle de versão e histórico",
            "Bloqueio de células editáveis",
            "Automação para checagem de inconsistências",
            "Processo manual de revisão",
          ],
          required,
        },
        csd: repeatedDefinitions.frq,
        bak: {
          // "Quais destas práticas você recomenda para backups diários de planilhas importantes?"
          type: "select-multiple",
          options: [
            "Backup manual periódico",
            "Backup automático via Drive/OneDrive",
            "Uso de versionamento em Git",
            "Exportação para formatos alternativos (CSV, PDF)",
          ],
          required,
        },
      },
      intermediate: {
        piv: {
          // `${tcn} você utiliza para intervir na criação ou troubleshooting de Tabelas Dinâmicas com múltiplas fontes de dados?`
          type: "select-multiple",
          options: [
            "Não utilizo Tabelas Dinâmicas",
            "Validação de relações entre tabelas",
            "Configuração de filtros avançados",
            "Correção de referências quebradas",
            "Otimização de desempenho via cache",
          ],
          required,
        },
        lnk: {
          // `${tcn} você utiliza para solucionar problemas em planilhas que importam/ligam dados de outras pastas de trabalho?`
          type: "select-multiple",
          options: [
            "Ajuste de caminhos de arquivos vinculados",
            "Uso de referências absolutas",
            "Criação de macros para atualização automática",
            "Desativação de cálculos automáticos temporariamente",
          ],
          required,
        },
        val: {
          // `${tcn} você usa para configurar validações e restrições (listas suspensas, intervalos bloqueados) para prevenir erros em planilhas?`
          type: "select-multiple",
          options: [
            "Listas suspensas para evitar valores inválidos",
            "Proteção de células críticas",
            "Validações condicionais em tempo real",
            "Automação de alertas para dados fora do padrão",
          ],
          required,
        },
        scp: repeatedDefinitions.scp,
        // "Como você gera relatórios regulares de problemas resolvidos?"
        rep: repeatedDefinitions.txtl,
      },
      expert: {
        arr: {
          // "De que forma você trabalha com fórmulas matriciais ou funções avançadas (ÍNDICE, CORRESP)?"
          type: "select-one",
          options: [
            "Uso algumas funções avançadas (ÍNDICE, CORRESP)",
            "Uso fórmulas matriciais diversas em múltiplos cenários",
          ],
          required,
        },
        sec: repeatedDefinitions.exp,
        mcr: {
          // `${tcn} para depurar macros avançadas (VBA) que causam lentidão ou bloqueiam recursos compartilhados?`
          type: "select-multiple",
          options: [
            "Não trabalho com macros avançadas",
            "Otimização do código para reduzir loops desnecessários",
            "Uso de breakpoints e depuração passo a passo",
            "Ajuste de tempo de execução e delays",
            "Alternância entre execução síncrona e assíncrona",
          ],
          required,
        },
        big: repeatedDefinitions.frq,
        // "Descreva técnicas que você utiliza para tuning de performance em planilhas muito grandes (milhares de linhas ou abas)."
        par: repeatedDefinitions.txts,
      },
    },
    operatorio: {
      beginner: {
        net: {
          // "Quais técnicas você usa para habilitar o acesso a planilhas compartilhadas via rede local para a equipe?"
          type: "select-multiple",
          options: [
            "Não gerencio planilhas compartilhadas em rede",
            "Compartilhamento via pasta de rede",
            "Controle de permissões de leitura/escrita",
            "Uso de drives compartilhados (Google Drive, OneDrive)",
            "Ativação de histórico de versões",
          ],
          required,
        },
        per: repeatedDefinitions.sec,
        cpy: {
          // "Quais técnicas você recomenda para orientar a criação de cópias de planilhas para backup rápido no dia a dia?"
          type: "select-multiple",
          options: [
            "Cópia manual antes de alterações críticas",
            "Automação de backups via scripts",
            "Uso de ferramentas de versionamento",
            "Envio de cópias para e-mails internos",
          ],
          required,
        },
        bkp: {
          //"Quais práticas de backup simples você aplica para evitar perda em planilhas armazenadas em rede?"
          type: "select-multiple",
          options: [
            "Backup manual semanal/mensal",
            "Uso de serviços de backup automático",
            "Armazenamento em múltiplos locais",
            "Backup de versões anteriores",
          ],
          required,
        },
        col: repeatedDefinitions.frq,
      },
      intermediate: {
        sec: {
          // "Quais recursos você usa para implementar senhas ou criptografia de arquivos relacionados a redes?"
          type: "select-multiple",
          options: [
            "Proteção por senha no próprio Excel/Google Sheets",
            "Uso de arquivos ZIP criptografados",
            "Criptografia de disco para proteção adicional",
            "Gerenciamento de acesso via AD/SSO",
            "Não aplico segurança avançada em planilhas",
          ],
          required,
        },
        mac: {
          //"Quais técnicas você utiliza para depurar macros de nível intermediário?"
          type: "select-multiple",
          options: [
            "Não gerencio macros de segurança",
            "Assinatura digital de macros",
            "Restrição de execução de macros não confiáveis",
            "Validação de código antes da implantação",
            "Monitoramento de execução via logs",
          ],
          required,
        },
        scp: repeatedDefinitions.scp,
        dmp: repeatedDefinitions.yn,
        // "Qual sua abordagem ao resolver conflitos de versão quando vários usuários salvam simultaneamente?"
        conf: repeatedDefinitions.txts,
      },
      expert: {
        adv: {
          //"Como você automatiza instalações em larga escala (SCCM) de pacotes de planilha e gerencia atualizações?"
          type: "select-multiple",
          options: [
            "Distribuição de pacotes de planilhas via SCCM",
            "Atualizações automatizadas em massa",
            "Gerenciamento centralizado via GPO",
            "Testes de compatibilidade antes da implantação",
            "Não gerencio instalações automatizadas de planilhas",
          ],
          required,
        },
        big: repeatedDefinitions.yn,
        log: {
          // "Como você documenta logs de erros e processos em planilhas?"
          type: "select-multiple",
          options: [
            "Registro manual de logs em abas dedicadas",
            "Uso de scripts para captura automática de logs",
            "Exportação de logs para ferramentas externas",
            "Monitoramento automatizado via macros",
            "Não documento logs em planilhas",
          ],
          required,
        },
        res: {
          // Quais técnicas você usa para gerenciar a restauração de planilhas corrompidas?
          type: "select-multiple",
          options: [
            "Uso de backups automáticos",
            "Recuperação via histórico de versões",
            "Tentativa de restauração via ferramentas nativas",
            "Abertura em editores alternativos para resgate",
            "Não faço restauração de planilhas corrompidas",
          ],
        },
        ref: {
          // "Quais técnicas você usa para tratar referências externas e macros avançadas causando loops ou travamentos na rede?"
          type: "select-multiple",
          options: [
            "Monitoramento de uso excessivo de macros",
            "Redução do uso de links entre planilhas",
            "Testes de carga para detectar gargalos",
            "Separação de cálculos complexos em abas dedicadas",
            "Não trabalho com referências externas avançadas",
          ],
          required,
        },
      },
    },
    desenvolvimento: {
      beginner: {
        bug: repeatedDefinitions.yn,
        cal: {
          // "Quais técnicas você utiliza para fazer cálculos de estimativas (ex.: datas de entrega) em planilhas básicas?"
          type: "select-multiple",
          options: [
            "Uso de fórmulas básicas (SOMA, MÉDIA, PROJEÇÃO)",
            "Cálculo de prazos baseado em dependências (ex.: encadeamento de tarefas)",
            "Uso de formatação condicional para destacar prazos críticos",
            "Utilização de tabelas dinâmicas para análise de cronogramas",
            "Automação de estimativas via scripts ou macros (Google Apps Script, VBA)",
            "Importação/exportação de estimativas para ferramentas de gerenciamento de projetos (Jira, Trello)",
          ],
          required,
        },
        chg: repeatedDefinitions.frq,
        env: repeatedDefinitions.yn,
        col: repeatedDefinitions.colab,
      },
      intermediate: {
        scr: repeatedDefinitions.scp,
        mds: repeatedDefinitions.yn,
        con: repeatedDefinitions.frq,
        link: repeatedDefinitions.yn,
        sec: repeatedDefinitions.sec,
      },
      expert: {
        big: repeatedDefinitions.yn,
        spt: repeatedDefinitions.scp,
        adm: {
          // "Quais destas práticas de auditoria (histórico, logs) para rastrear quem alterou métricas críticas?"
          type: "select-multiple",
          options: [
            "Registro automático de alterações via scripts",
            "Uso do histórico de versões da planilha",
            "Armazenamento de logs em repositórios Git",
            "Controle de acesso por usuário para edição de métricas",
            "Geração de relatórios periódicos de alterações",
            "Assinatura digital para validar alterações críticas",
            "Exportação de logs para sistemas de monitoramento (SIEM, Splunk)",
          ],
          required,
        },
        // Como você utiliza planilhas para correlações ou pivot complexos de logs do sistema?"
        piv: repeatedDefinitions.txtl,
        ref: repeatedDefinitions.txtl,
      },
    },
    devOps: {
      beginner: {
        pip: repeatedDefinitions.yn,
        env: repeatedDefinitions.frq,
        rep: repeatedDefinitions.frq,
        acc: {
          //"Quais técnicas você utiliza para integrar planilhas diretamente no fluxo de fluxo DevOps?"
          type: "select-multiple",
          options: [
            "Importação automática via API",
            "Integração com Jenkins/GitLab CI/CD",
            "Webhooks para atualização de dados",
            "Uso de scripts para sincronização (Python, Shell)",
            "Exportação manual para formatos compatíveis (CSV, JSON)",
            "Automação com Google Apps Script",
          ],
          required,
        },
        // "Que jobs ou tarefas você descreve na planilha?"
        job: repeatedDefinitions.txts,
      },
      intermediate: {
        int: repeatedDefinitions.yn,
        scp: repeatedDefinitions.scp,
        col: repeatedDefinitions.colab,
        seg: repeatedDefinitions.sec,
        // "Como documenta dashboards de monitoramento?"
        das: repeatedDefinitions.txtl,
      },
      expert: {
        big: repeatedDefinitions.frq,
        aut: {
          // "Que tipo de resultos e links de automação você registra em planilhas (scripts de rollback, escalonamento)?"
          type: "select-multiple",
          options: [
            "Scripts de rollback",
            "Escalonamento automático (scale up/down)",
            "Fluxos de CI/CD adicionais",
            "Testes/validações automáticas",
          ],
          required,
        },
        adv: repeatedDefinitions.frq,
        ver: {
          // "Descreva como você versiona planilhas e scripts no pipeline DevOps."
          type: "select-multiple",
          options: [
            "Versionamento manual por data/hora",
            "Scripts automáticos de CI/CD integrados com softwares de planilhamento",
            "Git ou outro repositório de controle de versões",
            "Ferramenta interna (ex.: SVN, repositório corporativo)",
          ],
          required,
        },
        aud: {
          // "Como você audita logs ou histórico de builds dentro de planilhas?"
          type: "select-multiple",
          options: [
            "Registro manual de logs em planilha",
            "Importo logs do pipeline via script",
            "Uso de macros para parsear relatórios de build",
          ],
          required,
        },
      },
    },
    undefined: {
      beginner: {
        mth: repeatedDefinitions.frq,
        fmt: repeatedDefinitions.col,
        fil: repeatedDefinitions.fil,
        col: repeatedDefinitions.frq,
        bar: repeatedDefinitions.frq,
      },
      intermediate: {
        fml: repeatedDefinitions.exp,
        val: repeatedDefinitions.frq,
        net: repeatedDefinitions.frq,
        sec: repeatedDefinitions.sec,
        piv: repeatedDefinitions.txts,
      },
      expert: {
        mcr: repeatedDefinitions.exp,
        prf: repeatedDefinitions.exp,
        big: repeatedDefinitions.frq,
        dbi: repeatedDefinitions.dbi,
        aud: repeatedDefinitions.txtl,
      },
    },
  });
export const fmEntryTypes: EntryTypeDictionary<FormBuilderQuestionKey> =
  withFrozenLib({
    executivoAdministrativo: {
      beginner: {
        ...fmBeginnerDefinitions,
      },
      intermediate: {
        ...fmIntermediateDefinitions,
      },
      expert: {
        ...fmExpertDefinitions,
        adv: {
          //"Descreva de forma geral as suas políticas de segurança para o tráfego de informação aglomeradas por formulários"
          type: "select-multiple",
          options: [
            "Criptografia dos dados em repouso e em trânsito",
            "Autenticação multifator para acesso aos relatórios",
            "Permissões baseadas em função (RBAC) para visualização e edição",
            "Uso de logs de auditoria para rastrear acessos e alterações",
            "Anonimização ou pseudonimização de dados sensíveis",
            "Restrição de IPs para limitar acessos externos",
          ],
          required,
        },
      },
    },
    financeiro: {
      beginner: {
        ...fmBeginnerDefinitions,
      },
      intermediate: {
        ...fmIntermediateDefinitions,
        fwd: repeatedDefinitions.yn,
      },
      expert: {
        ...fmExpertDefinitions,
        sec: {
          type: "select-multiple",
          options: [
            "Algoritmo de Criptografia para Embaralhamento e Ofuscação",
            "Armazenamento em bancos isolados",
            "Mascaramento de dados sensíveis",
            "Tokenização de informações",
          ],
          required,
        },
        dsh: repeatedDefinitions.txtl,
      },
    },
    comercial: {
      beginner: {
        ...fmBeginnerDefinitions,
        cre: repeatedDefinitions.txtl,
      },
      intermediate: {
        ...fmIntermediateDefinitions,
        rep: repeatedDefinitions.yn,
      },
      expert: { ...fmExpertDefinitions },
    },
    marketing: {
      beginner: {
        ...fmBeginnerDefinitions,
        seg: repeatedDefinitions.txts,
      },
      intermediate: {
        ...fmIntermediateDefinitions,
        seg: repeatedDefinitions.txtl,
      },
      expert: {
        ...fmExpertDefinitions,
        sec: repeatedDefinitions.txtl,
      },
    },
    suporteTecnicoN1: {
      beginner: {
        ...fmBeginnerDefinitions,
        frm: repeatedDefinitions.txts,
      },
      intermediate: {
        ...fmIntermediateDefinitions,
        seg: {
          type: "select-multiple",
          options: [
            "Seções condicionais por perfil",
            "Páginas separadas para contextos diferentes",
            "Mostrar/ocultar campos dinamicamente",
            "Validação cruzada entre seções",
          ],
          required,
        },
        autm: repeatedDefinitions.yn,
      },
      expert: {
        ...fmExpertDefinitions,
        sec: repeatedDefinitions.sec,
        man: repeatedDefinitions.txtl,
      },
    },
    suporteTecnicoN2: {
      beginner: {
        ...fmBeginnerDefinitions,
        bug: {
          type: "select-multiple",
          options: [
            "Verificação de conflitos de dependências",
            "Testes em diferentes navegadores",
            "Análise de console de erros",
            "Validação de permissões de acesso",
            "Não identifico bugs em formulários",
          ],
          required,
        },
        shl: repeatedDefinitions.txts,
      },
      intermediate: {
        ...fmIntermediateDefinitions,
        rls: {
          type: "select-multiple",
          options: [
            "Disparo de e-mails automáticos",
            "Integração com sistemas de tickets",
            "Atualização de planilhas em tempo real",
            "Notificações via webhook",
            "Não configuro regras de envio",
          ],
          required,
        },
      },
      expert: {
        ...fmExpertDefinitions,
        adv: repeatedDefinitions.txtl,
        mul: repeatedDefinitions.txtl,
      },
    },
    operatorio: opRepeatedDefinitions,
    desenvolvimento: {
      beginner: {
        ...fmBeginnerDefinitions,
        scp: repeatedDefinitions.scp,
      },
      intermediate: {
        ...fmIntermediateDefinitions,
        scp: repeatedDefinitions.scp,
        rgx: repeatedDefinitions.frq,
        cnd: repeatedDefinitions.txts,
      },
      expert: {
        ...fmExpertDefinitions,
        adv: {
          type: "select-multiple",
          options: [
            "Geração automática de tickets",
            "Integração com Webhooks",
            "Parsing de stack traces",
            "Envio para sistemas de monitoramento",
            "Não crio integrações avançadas",
          ],
          required,
        },
        sec: repeatedDefinitions.sec,
        doc: repeatedDefinitions.txtl,
      },
    },
    devOps: opRepeatedDefinitions,
    undefined: {
      beginner: {
        ...fmBeginnerDefinitions,
      },
      intermediate: {
        ...fmIntermediateDefinitions,
      },
      expert: {
        ...fmExpertDefinitions,
        adv: {
          //"Descreva de forma geral as suas políticas de segurança para o tráfego de informação aglomeradas por formulários"
          type: "select-multiple",
          options: [
            "Criptografia dos dados em repouso e em trânsito",
            "Autenticação multifator para acesso aos relatórios",
            "Permissões baseadas em função (RBAC) para visualização e edição",
            "Uso de logs de auditoria para rastrear acessos e alterações",
            "Anonimização ou pseudonimização de dados sensíveis",
            "Restrição de IPs para limitar acessos externos",
          ],
          required,
        },
      },
    },
  });
export const csDefinitions: ROFieldRecord<
  typeof csGeneralKeys
> = ObjectHelper.makeImmutable({
  //"Quais são suas formas preferenciar de habilitar o compartilhamento de arquivos em nuvem com outros colaboradores?",
  shr: {
    type: "select-multiple",
    options: [
      "Enviar link direto em chats (Teams, Slack) ou e-mail",
      "Gerar link temporário (expira após determinado período)",
      "Criação de pasta compartilhada com permissões segmentadas",
      "Uso de link público com restrição de acesso (senha ou data de expiração)",
      "Compartilhar arquivo por mensageiros (WhatsApp, Telegram) com criptografia ponta a ponta",
      "Disponibilizar link em intranet ou repositório interno (ex.: SharePoint) com grupos de acesso pré-definidos",
    ],
    required,
  },
  //"Quais destas plataformas de armazenamento em nuvem você tem preferência por utilizar?",
  syn: {
    type: "select-multiple",
    options: [
      "Google Drive",
      "Dropbox",
      "OneDrive",
      "Box Sync",
      "iCloud",
      "Amazon S3",
      "Plataformas de Versionamento (GitHub, GitLab, HuggingFace, etc.)",
    ],
    required,
  },
  org: repeatedDefinitions.txtl,
});
export const csBeginnerDefinitions: ROFieldRecord<
  typeof csBeginnerKeys
> = ObjectHelper.makeImmutable({
  upl: repeatedDefinitions.exp,
  ...csDefinitions,
  acc: repeatedDefinitions.yn,
});
export const csIntermediateDefinitions: ROFieldRecord<
  typeof csIntermediateKeys
> = ObjectHelper.makeImmutable({
  ...csDefinitions,
  ver: repeatedDefinitions.colab,
  bck: repeatedDefinitions.frq,
  sch: repeatedDefinitions.txtl,
});
export const csExpertDefinitions: ROFieldRecord<
  typeof csExpertKeys
> = ObjectHelper.makeImmutable({
  ...csDefinitions,
  scp: repeatedDefinitions.scp,
  sch: repeatedDefinitions.txtl,
});
export const stCsKeys: Readonly<{
  [K in complexityLabel]: { [k: string]: FieldDescription };
}> = ObjectHelper.makeImmutable({
  beginner: {
    ...csBeginnerDefinitions,
    upl: repeatedDefinitions.frq,
    //"Descreva em termos gerais suas técnicas para sincronizar pastas locais com o armazenamento em nuvems"
    syn: {
      type: "select-multiple",
      options: [
        "Uso de softwares de sincronização nativa (ex.: OneDrive, Google Drive, Dropbox, Box Drive)",
        "Configuração de backup contínuo com ferramentas como Synology Drive ou QNAP Hybrid Backup",
        "Sincronização via clientes de terceiros (ex.: Rclone, GoodSync, FreeFileSync)",
        "Sincronização baseada em scripts customizados (ex.: rsync, PowerShell, Bash)",
        "Mapeamento de drives de rede conectados a serviços em nuvem",
        "Uso de integrações com soluções corporativas (ex.: SharePoint, Egnyte, NextCloud)",
        "Configuração de sincronização seletiva para otimização de armazenamento local",
      ],
      required,
    },
  },
  intermediate: {
    ...csIntermediateDefinitions,
    //`${tcn} você utiliza para gerenciar backups automáticos ou snapshots em storage de nuvem?`
    bck: {
      type: "select-multiple",
      options: [
        "Configuração de backup contínuo via Google Takeout, Dropbox Vault, OneDrive Backup",
        "Uso de snapshots automáticos em serviços de nuvem (ex.: AWS S3 Versioning, Azure Blob Snapshots, Google Cloud Snapshots)",
        "Automação de backups periódicos com ferramentas como Veeam, Acronis, Synology Hyper Backup",
        "Criação de scripts customizados para backup automatizado (ex.: AWS CLI, Rclone, Python Scripts)",
        "Uso de redundância geográfica (replicação de dados entre regiões)",
        "Configuração de políticas de retenção para versões anteriores dos arquivos",
        "Armazenamento de backups em mídias físicas externas (ex.: HDD, NAS, fita magnética) como redundância",
      ],
      required,
    },
    prf: {
      type: "select-multiple",
      options: [
        "Otimização de cache local",
        "Configuração de bandwidth limits",
        "Priorização de arquivos recentes",
        "Uso de delta sync",
      ],
      required,
    },
  },
  expert: {
    ...csExpertDefinitions,
    mlt: repeatedDefinitions.exp,
    //`${tcn} você adota para lidar com prevenção e recuperação de desastres de repositórios críticos em nuvem?`
    drp: {
      type: "select-multiple",
      options: [
        "Implementação de políticas de Disaster Recovery (DR) com redundância multi-cloud (ex.: AWS, Azure, Google Cloud)",
        "Uso de backup incremental e diferencial para reduzir perda de dados",
        "Criação de snapshots regulares e versionamento de arquivos",
        "Adoção de soluções de segurança contra ransomware (ex.: proteção contra exclusão de arquivos, backups imutáveis)",
        "Criação de scripts de automação para restaurar arquivos rapidamente em caso de falha",
        "Monitoramento contínuo da integridade dos arquivos e logs de acesso",
        "Testes periódicos de recuperação de desastres para validar tempos de resposta",
        "Uso de serviços de recuperação de arquivos apagados (ex.: Google Vault, Azure Backup, AWS Glacier)",
      ],
      required,
    },
  },
});
export const csEntryTypes: EntryTypeDictionary<CloudStorageQuestionKey> =
  withFrozenLib({
    executivoAdministrativo: {
      beginner: {
        ...csBeginnerDefinitions,
      },
      intermediate: {
        ...csIntermediateDefinitions,
        colab: repeatedDefinitions.txtl,
      },
      expert: {
        ...csExpertDefinitions,
        //"Como você integra armazenamento em nuvem a sistemas corporativos ou CRMs?"
        int: {
          type: "select-multiple",
          options: [
            "Integração nativa via conectores (ex.: Salesforce + OneDrive, Google Drive API)",
            "Uso de APIs para sincronização automática de documentos",
            "Configuração de Webhooks para upload/download de arquivos em tempo real",
            "Automação via RPA (ex.: Power Automate, Zapier, Make) para sincronizar arquivos",
            "Sincronização manual através de exportação/importação de arquivos",
          ],
          required,
        },
        big: repeatedDefinitions.txtl,
      },
    },
    financeiro: {
      beginner: {
        ...csBeginnerDefinitions,
        org: repeatedDefinitions.txts,
      },
      intermediate: {
        ...csIntermediateDefinitions,
        //"De que forma você integra serviços de nuvem com softwares contábeis ou ERPs?"
        int: {
          type: "select-multiple",
          options: [
            "Integração nativa via conectores (ex.: Salesforce + OneDrive, Google Drive API)",
            "Uso de APIs para sincronização automática de documentos",
            "Configuração de Webhooks para upload/download de arquivos em tempo real",
            "Automação via RPA (ex.: Power Automate, Zapier, Make) para sincronizar arquivos",
            "Sincronização manual através de exportação/importação de arquivos",
            "Não integro armazenamento em nuvem a sistemas corporativos",
          ],
          required,
        },
        org: repeatedDefinitions.txts,
      },
      expert: {
        ...csExpertDefinitions,
        //`${tcn} você adota para recuperar rapidamente documentos críticos em caso de desastre ou falha de acesso à nuvem?`,
        drs: {
          type: "select-multiple",
          options: [
            "Backups automatizados em múltiplas localizações (ex.: redundância geográfica)",
            "Sincronização com um servidor local para acesso offline",
            "Utilização de snapshots/versionamento automático de arquivos",
            "Recuperação via armazenamento de longo prazo (ex.: AWS Glacier, Azure Archive)",
            "Planos de recuperação baseados em RPO/RTO para documentos críticos",
            "Acesso emergencial via links compartilhados ou permissões temporárias",
            "Não tenho uma estratégia específica para recuperação de documentos",
          ],
          required,
        },
        mid: repeatedDefinitions.frq,
      },
    },
    comercial: {
      beginner: {
        ...csBeginnerDefinitions,
        org: repeatedDefinitions.txts,
      },
      intermediate: {
        ...csIntermediateDefinitions,
        int: {
          type: "select-multiple",
          options: [
            "Não integro plataformas espécificas",
            "Integração com CRMs",
            "Integração com ERPs",
            "Integração com Plataformas Síncronas (Microsoft Teams, Slack, etc)",
            "Relatórios em intervalos especificados",
            "Automação de workflows",
          ],
          required,
        },
      },
      expert: {
        ...csExpertDefinitions,
        //`${sttg} você adota para migrar grandes repositórios de documentos comerciais de um serviço um serviço em nuvem para outro?`
        mig: {
          type: "select-multiple",
          options: [
            "Uso de ferramentas de migração nativas (ex.: Google Workspace Migrate, SharePoint Migration Tool, Dropbox Transfer)",
            "Automação via scripts e APIs (ex.: Google Drive API, OneDrive API, AWS SDK, RClone)",
            "Transferência manual via download e upload em lotes organizados",
            "Sincronização temporária entre serviços durante a transição para evitar interrupções",
            "Criação de estrutura espelhada e permissão gradual de acesso aos usuários",
            "Compressão e exportação de arquivos para transferência eficiente (ex.: ZIP, TAR, RAR)",
            "Migração via serviços de terceiros especializados (ex.: Mover.io, CloudFuze, MultCloud)",
          ],
          required: false,
        },
      },
    },
    marketing: {
      beginner: {
        ...csBeginnerDefinitions,
        org: {
          type: "select-multiple",
          options: [
            "Pastas por campanha ou projeto",
            "Tags por tipo de mídia (imagem, vídeo)",
            "Estrutura por datas de lançamento",
            "Hierarquia por público-alvo",
            "Organização manual sem padrão",
          ],
          required,
        },
      },
      intermediate: {
        ...csIntermediateDefinitions,
        int: {
          type: "select-multiple",
          options: [
            "Integração com ferramentas de automação (HubSpot, Marketo)",
            "Sincronização com plataformas de mídia social",
            "Webhooks para notificações de alterações",
            "APIs para upload automático de conteúdos",
          ],
          required,
        },
      },
      expert: {
        ...csExpertDefinitions,
        rep: repeatedDefinitions.exp,
        //`${tcn} você utiliza para automatizar uploads e organização de assets e postagens?`
        adv: {
          type: "select-multiple",
          options: [
            "Não automatizo uploads e organização de assets e postagens",
            "Automação via APIs (ex.: Google Drive API, Dropbox API, OneDrive API)",
            "Uso de ferramentas de automação (ex.: Zapier, Make, Power Automate, n8n)",
            "Integração com CMS ou gerenciadores de conteúdo (ex.: WordPress, Contentful, Strapi)",
            "Configuração de repositórios de mídia automatizados (ex.: Amazon S3, Google Cloud Storage, DigitalOcean Spaces)",
            "Utilização de scripts customizados (ex.: Python, Shell Script, Node.js) para upload programado",
            "Organização automática por metadados e tags (ex.: EXIF para imagens, propriedades de arquivos)",
            "Implementação de Workflows de aprovação antes da publicação",
            "Uso de soluções de DAM (Digital Asset Management) para categorização automatizada",
            "Agendamento e postagem automática em redes sociais (ex.: Buffer, Hootsuite, SocialBee)",
          ],
          required,
        },
      },
    },
    suporteTecnicoN1: {
      ...stCsKeys,
    },
    suporteTecnicoN2: {
      ...stCsKeys,
    },
    operatorio: {
      ...stCsKeys,
    },
    desenvolvimento: {
      beginner: {
        ...csBeginnerDefinitions,
        syn: repeatedDefinitions.exp,
        nme: repeatedDefinitions.yn,
      },
      intermediate: {
        ...csIntermediateDefinitions,
        lck: repeatedDefinitions.exp,
        ver: repeatedDefinitions.frq,
      },
      expert: {
        ...csExpertDefinitions,
        aud: {
          type: "select-multiple",
          options: [
            "Logs de acesso em tempo real",
            "Auditoria de integridade de binários",
            "Assinaturas digitais SHA-256",
            "Monitoramento de alterações não autorizadas",
            "Não realizo auditorias",
          ],
          required,
        },
        tag: repeatedDefinitions.txts,
        hgh: repeatedDefinitions.txtl,
      },
    },
    devOps: {
      beginner: {
        ...csBeginnerDefinitions,
        syn: repeatedDefinitions.exp,
        nme: repeatedDefinitions.yn,
      },
      intermediate: {
        ...csIntermediateDefinitions,
        inf: repeatedDefinitions.frq,
        sec: repeatedDefinitions.sec,
        //"Quais são suas estratégias para lidar com latência ou quedas de conexão ao acessar pastas de rede contendo builds grandes?"
        net: {
          type: "select-multiple",
          options: [
            "Uso de sistemas de pré-fetch e cache local para builds frequentemente acessados",
            "Compressão e chunking de arquivos grandes antes da transferência",
            "Adoção de redes definidas por software (SD-WAN) para otimização de tráfego",
            "Uso de balanceamento de carga para distribuir o tráfego entre múltiplos servidores",
            "Configuração de retries e backoff exponencial para conexões instáveis",
            "Replicação de artefatos em regiões distribuídas para reduzir latência",
            "Configuração de tunning em TCP/IP (ex.: MTU, janela de congestionamento)",
          ],
          required,
        },
        //"Descreva passos que considera essenciais para integrar pipelines CI/CD ao lidar com artefatos em uma pasta de rede ou storage remoto"
        int: {
          type: "select-multiple",
          options: [
            "Configuração de cache e persistência de builds entre execuções no pipeline",
            "Montagem de volumes remotos para acesso dinâmico aos artefatos (ex.: NFS, SMB, iSCSI)",
            "Uso de objetos versionados e hashing para garantir integridade dos artefatos",
            "Armazenamento de metadados dos builds para rastreabilidade e auditoria",
            "Adoção de snapshots automáticos antes da implantação final",
            "Replicação de artefatos entre data centers para redundância e disponibilidade",
            "Automação de pipelines com políticas de retenção de artefatos",
          ],
          required,
        },
      },
      expert: {
        ...csExpertDefinitions,
        dpl: {
          type: "select-multiple",
          options: [
            "Arquitetura multi-cloud active-active",
            "Replicação síncrona entre regiões",
            "Gerenciamento via Kubernetes CSI",
            "Storage-as-code com GitOps",
          ],
          required,
        },
        enc: {
          type: "select-multiple",
          options: [
            "Envelope encryption com KMS",
            "Client-side encryption",
            "HSM para chaves mestras",
            "Rotação automática de chaves",
            "Outras estrátegias",
          ],
          required,
        },
        //`${tcn} você utiliza para aplicar caching avançado ou solutions como Artifactory/Nexus?`
        scc: {
          type: "select-multiple",
          options: [
            "Configuração de Artifactory/Nexus para armazenar pacotes e dependências localmente",
            "Uso de caching no Docker (buildkit, layer caching, multi-stage builds)",
            "Configuração de proxies de repositório para reduzir downloads externos (ex.: npm, PyPI, Maven, Go Proxy)",
            "Utilização de S3, GCS ou Azure Blob Storage para cache de artefatos",
            "Cache em CI/CD pipelines (ex.: GitHub Actions, GitLab CI, Jenkins)",
            "Estratégias de cache dinâmico com Redis ou Memcached para builds frequentes",
            "Implementação de TTLs e regras de expiração para evitar acumulação excessiva",
          ],
          required,
        },
        //"Quais destas práticas você considera essenciais nas automações para migrar grandes volumes (ex.: repositório de artefatos) para outra infraestrutura em nuvem (ex.: S3) sem quebrar links?"
        mig: {
          type: "select-multiple",
          options: [
            "Uso de redirects e rewriting rules para manter links compatíveis",
            "Automação com rsync, Rclone ou AWS CLI para transferência incremental",
            "Uso de objetos imutáveis para garantir integridade de pacotes durante a migração",
            "Replicação multi-cloud temporária antes da transição definitiva",
            "Versionamento de pacotes e mapeamento de dependências para evitar referências quebradas",
            "Configuração de proxies reversos ou balanceadores de carga (ex.: CloudFront, Nginx, Traefik)",
            "Uso de logs e auditorias para validar a consistência dos artefatos pós-migração",
          ],
          required,
        },
      },
    },
    undefined: {
      beginner: {
        ...csBeginnerDefinitions,
      },
      intermediate: {
        ...csIntermediateDefinitions,
      },
      expert: {
        ...csExpertDefinitions,
      },
    },
  });
export const biDefinitions: ROFieldRecord<
  typeof biGeneralKeys
> = ObjectHelper.makeImmutable({
  //`${sttg} você usa para conectar suas fontes de dados (planilhas, CSV, bancos, etc.) nas ferramentas de BI?
  con: {
    type: "select-multiple",
    options: [
      `Utilização de drivers ODBC/JDBC para bancos de dados`,
      `Importação direta de arquivos CSV com mapeamento automático`,
      `Conectores prontos para planilhas (Google Sheets, Excel)`,
      `Ferramentas ETL integradas (Pentaho, Talend)`,
      `APIs nativas da própria plataforma de BI`,
    ],
    required,
  },
  grf: repeatedDefinitions.exp,
  //`${tcn} você utiliza para aplicar filtros e segmentações nativas da ferramenta para refinar suas visualizações?`
  fil: {
    type: "select-multiple",
    options: [
      `Filtros predefinidos`,
      `Segmentação por data e categoria`,
      `Aplicação de filtros dinâmicos`,
    ],
    required,
  },
  atz: repeatedDefinitions.frq,
  //`${rsc} você utiliza para compartilhar dashboards e relatórios diretamente pela ferramenta de BI?`
  col: {
    type: "select-multiple",
    options: [
      `Publicação de relatórios em links seguros ou intranet`,
      `Uso de permissões granulares para cada usuário/role`,
      `Integração com plataformas colaborativas (Teams, Slack)`,
      `Exportação automatizada para PDF ou CSV`,
      `Conexão a portais de self-service BI para visualização`,
    ],
    required,
  },
});
export const biBeginnerDefinitions: ROFieldRecord<
  typeof biBeginnerKeys
> = ObjectHelper.makeImmutable({
  ...biDefinitions,
});
export const biIntermediateDefinitions: ROFieldRecord<
  typeof biIntermediateKeys
> = ObjectHelper.makeImmutable({
  mdl: repeatedDefinitions.exp,
  aut: repeatedDefinitions.exp,
  //`${sttg} você utiliza para integrar diferentes fontes de dados na ferramenta de BI para análises detalhadas?`
  int: {
    type: "select-multiple",
    options: [
      `Implementação de ETL (Extract, Transform, Load) com scripts dedicados`,
      `Conexão nativa a bancos de dados e planilhas remotas`,
      `Uso de APIs REST para sincronização de dados externos`,
      `Automatização de importações via webhooks de serviços de terceiros`,
      `Integrações com plataformas de armazenamento na nuvem (ex.: S3, Azure)`,
    ],
    required,
  },
  ...biDefinitions,
});
export const biExpertDefinitions: ROFieldRecord<
  typeof biExpertKeys
> = ObjectHelper.makeImmutable({
  //`${sttg} você utiliza para otimizar a performance de consultas e visualizações em dashboards com grandes volumes de dados?`
  adv: {
    type: "select-multiple",
    options: [
      `Criação de partições em tabelas para agilizar consultas`,
      `Indexação avançada para acelerar filtros e agregações`,
      `Uso de caches de dados em camadas intermediárias`,
      `Aplicação de técnicas de compressão para grandes datasets`,
      `Monitoramento constante de métricas e logs para ajustes finos`,
    ],
    required,
  },
  gov: repeatedDefinitions.exp,
  api: repeatedDefinitions.exp,
  ...biDefinitions,
});
const stBiDefinitions = ObjectHelper.makeImmutable({
    beginner: {
      ...biBeginnerDefinitions,
      stn: repeatedDefinitions.txtl,
    },
    intermediate: {
      ...biIntermediateDefinitions,
      stn: repeatedDefinitions.txtl,
    },
    expert: {
      ...biExpertDefinitions,
      stn: repeatedDefinitions.txtl,
    },
  }),
  devBiDefinitions = ObjectHelper.makeImmutable({
    beginner: {
      dsa: repeatedDefinitions.exp,
      ...biBeginnerDefinitions,
    },
    intermediate: {
      dsa: repeatedDefinitions.exp,
      dei: repeatedDefinitions.exp,
      ...biIntermediateDefinitions,
    },
    expert: {
      dee: repeatedDefinitions.frq,
      dex: repeatedDefinitions.exp,
      ...biExpertDefinitions,
    },
  });
export const biEntryTypes: EntryTypeDictionary<BiQuestionKey> =
  withFrozenLib({
    executivoAdministrativo: {
      beginner: {
        ead: repeatedDefinitions.frq,
        eas: repeatedDefinitions.frq,
        ...biBeginnerDefinitions,
      },
      intermediate: {
        //`${rsc} você utiliza para personaliza os dashboards para integrar dados administrativos e operacionais?`
        eai: {
          type: "select-multiple",
          options: [
            `Uso de layouts temáticos para cada área (financeiro, compras)`,
            `Widgets interativos para cruzar dados de vendas e estoque`,
            `Filtros dinâmicos para segmentar níveis hierárquicos (departamentos)`,
            `Combinação de gráficos (linhas, barras) em visões consolidadas`,
            `Agendamento de refresh automático para dados administrativos`,
          ],
          required,
        },
        eax: repeatedDefinitions.exp,
        ...biIntermediateDefinitions,
      },
      expert: {
        eae: repeatedDefinitions.exp,
        eam: repeatedDefinitions.txts,
        ...biExpertDefinitions,
      },
    },
    financeiro: {
      beginner: {
        fin: repeatedDefinitions.exp,
        fnc: repeatedDefinitions.exp,
        fne: repeatedDefinitions.yn,
        ...biBeginnerDefinitions,
      },
      intermediate: {
        //`${sttg} você utiliza para modelar dados financeiros complexos para análises de rentabilidade?`
        fim: {
          type: "select-multiple",
          options: [
            `Uso de fórmulas e cálculos em planilhas pivotantes`,
            `Adoção de scripts DAX ou M em ferramentas de BI`,
            `Modelagem de entidades (ER) voltada a finanças (custos e receitas)`,
            `Estruturação de cenários de simulação (best/worst case)`,
            `Divisão de métricas de rentabilidade por segmento de negócio`,
          ],
          required,
        },
        fna: repeatedDefinitions.frq,
        fic: repeatedDefinitions.exp,
        ...biIntermediateDefinitions,
      },
      expert: {
        fic: repeatedDefinitions.exp,
        //`${sttg} você implanta quando realiza análises preditivas para projeções financeiras?`
        fip: {
          type: "select-multiple",
          options: [
            `Integração com algoritmos de machine learning`,
            `Configuração de alertas preditivos`,
            `Uso de dashboards interativos para simulação`,
          ],
          required,
        },
        //`${sttg} você utiliza para consolidar grandes volumes de dados financeiros em dashboards estratégicos?`
        fis: {
          type: "select-multiple",
          options: [
            `Criação de particionamento por períodos (ex.: trimestral, mensal)`,
            `Indexação e compressão de tabelas contábeis`,
            `Uso de OLAP cubes para análises multidimensionais`,
            `Ferramentas de big data para consolidar históricos extensos`,
            `Automação de auditoria para garantir consistência nos dados`,
          ],
          required,
        },
      },
    },
    comercial: {
      beginner: {
        com: repeatedDefinitions.exp,
        cmr: repeatedDefinitions.frq,
        cmx: repeatedDefinitions.frq,
        ...biBeginnerDefinitions,
      },
      intermediate: {
        //`${tcn} você usa para modelar dados de vendas em CRMs buscando identificar tendências?`
        cmm: {
          type: "select-multiple",
          options: [
            `Modelagem de funil de vendas segmentado por canal`,
            `Criação de colunas calculadas para métricas (ex.: conversão, churn)`,
            `Aplicação de técnicas de regressão simples ou ARIMA`,
            `Configuração de tabelas de histórico de leads e previsões`,
            `Segmentação por etapas do funil (prospecção, negociação, fechamento)`,
          ],
          required,
        },
        cma: repeatedDefinitions.frq,
        cmc: repeatedDefinitions.exp,
        ...biIntermediateDefinitions,
      },
      expert: {
        //`${rsc} avançados de CRMs você utiliza para prever oportunidades de vendas?`
        cme: {
          type: "select-multiple",
          options: [
            `Algoritmos de pontuação de leads (machine learning)`,
            `Análise histórica de performance de vendedores`,
            `Técnicas de forecast baseadas em sazonalidade`,
            `Integração com scripts R ou Python para previsões`,
            `Dashboards especializados em funil e pipeline de vendas`,
          ],
          required,
        },
        //`${sttg} você usa para consolidar informações de múltiplos canais comerciais em dashboards avançados em CRMs?`
        cmg: {
          type: "select-multiple",
          options: [
            `Centralização de dados via data warehouse`,
            `Conectores multicanal (ERP, e-commerce, marketplaces)`,
            `Uso de pivot tables e agregações cruzadas`,
            `Criação de dashboards unificados com segmentações avançadas`,
            `Automação de rotinas de ETL para cargas diárias`,
          ],
          required,
        },
        // `${sttg} você utiliza para integrar dados de CRM com análises de mercado para insights estratégicos?`
        cmf: {
          type: "select-multiple",
          options: [
            `Integração com bases de dados externas (IBGE, benchmarking)`,
            `Criação de perfis de mercado e cruzamento com leads`,
            `Aplicação de técnicas de competitive intelligence`,
            `Scripts que correlacionam dados econômicos e vendas`,
            `Modelos de predição customizados para cenários de mercado`,
          ],
          required,
        },
        ...biExpertDefinitions,
      },
    },
    marketing: {
      beginner: {
        mkt: repeatedDefinitions.exp,
        mka: repeatedDefinitions.frq,
        mkb: repeatedDefinitions.frq,
        ...biBeginnerDefinitions,
      },
      intermediate: {
        mkm: repeatedDefinitions.exp,
        //`${sttg} Você segmenta dados de campanhas por canal e público usando recursos do BI?`
        mkd: {
          type: "select-multiple",
          options: [
            `Divisão por canal (redes sociais, e-mail)`,
            `Segmentação por público-alvo`,
            `Análise de desempenho por região`,
          ],
          required,
        },
        mke: repeatedDefinitions.yn,
        ...biIntermediateDefinitions,
      },
      expert: {
        mkx: repeatedDefinitions.exp,
        //`${sttg} você utiliza para consolidar dados de múltiplas campanhas em dashboards avançados?`
        mkz: {
          type: "select-multiple",
          options: [
            `Agregação de dados de campanhas`,
            `Criação de dashboards customizados`,
            `Integração com automação de marketing`,
          ],
          required,
        },
        mky: repeatedDefinitions.txts,
        ...biExpertDefinitions,
      },
    },
    suporteTecnicoN1: {
      ...stBiDefinitions,
    },
    suporteTecnicoN2: {
      ...stBiDefinitions,
    },
    operatorio: {
      ...stBiDefinitions,
    },
    desenvolvimento: {
      ...devBiDefinitions,
    },
    devOps: { ...devBiDefinitions },
    undefined: {
      beginner: {
        ...biBeginnerDefinitions,
      },
      intermediate: {
        ...biIntermediateDefinitions,
      },
      expert: {
        ...biExpertDefinitions,
      },
    },
  });
export const crmDefinitions: ROFieldRecord<
  typeof crmGeneralKeys
> = ObjectHelper.makeImmutable({
  vis: {
    type: `select-multiple`,
    options: [
      `Uso de dashboards embarcados no CRM`,
      `Aplicação de filtros dinâmicos nos funis`,
      `Widgets ou gráficos prontos (barras, funil, pizza)`,
      `Painéis responsivos para mobile`,
      `Configuração de alertas quando metas são atingidas`,
    ],
    required,
  },
  seg: {
    type: `select-multiple`,
    options: [
      `Definição de grupos por status do lead`,
      `Segmentos por faixa de data de criação`,
      `Segmentações geográficas ou setoriais`,
      `Uso de labels/tags para diferentes perfis`,
      `Criação de filtros automatizados em dashboards`,
    ],
    required,
  },
  rep: {
    type: `select-multiple`,
    options: [
      `Agendamento de relatórios periódicos (diários, semanais)`,
      `Criação de métricas personalizadas (ex.: pipeline value)`,
      `Visualizações comparativas mês a mês`,
      `Distribuição automática de relatórios por e-mail`,
      `Uso de painéis interativos para drill-down de resultados`,
    ],
    required,
  },
  atz: repeatedDefinitions.frq,
  con: repeatedDefinitions.txtl,
});
export const crmBeginnerDefinitions: ROFieldRecord<
  typeof crmBeginnerKeys
> = ObjectHelper.makeImmutable({
  crt: repeatedDefinitions.exp,
  ...crmDefinitions,
});
export const crmIntermediateDefinitions: ROFieldRecord<
  typeof crmIntermediateKeys
> = ObjectHelper.makeImmutable({
  ...crmDefinitions,
  //`${tcn} você utiliza para que as automações nativas dispararem alertas e atualizem o status dos leads?`
  aut: {
    type: "select-multiple",
    options: [
      `Gatilhos baseados em mudança de campo (ex.: lead -> prospect)`,
      `Envio automático de e-mails de notificação`,
      `Fluxos de trabalho escalonados por tempo (ex.: 72h sem resposta)`,
      `Integração com bots de chat que confirmam status`,
      `Scripts que ajustam pontuação do lead e geram alertas`,
    ],
    required,
  },
  //`${mnn} integra a plataforma de CRM com outras ferramentas (ex.: e-mail, marketing)?`
  int: {
    type: "select-multiple",
    options: [
      `Conectores nativos de e-mail marketing (MailChimp, SendGrid)`,
      `API REST para sincronizar leads com landing pages`,
      `Webhooks disparados a cada conversão ou clique`,
      `Integração via iPaaS (ex.: Zapier, Workato)`,
      `ETL automático para unificar leads de diversas origens`,
    ],
    required,
  },
  mdl: repeatedDefinitions.txtl,
});
export const crmExpertDefinitions: ROFieldRecord<
  typeof crmExpertKeys
> = ObjectHelper.makeImmutable({
  ...crmDefinitions,
  //`${sttg} você utiliza para recursos avançados da plataforma de CRM buscando prever oportunidades e personalizar campanhas?`
  adv: {
    type: "select-multiple",
    options: [
      `Machine learning para scoring avançado de leads`,
      `Integração com scripts R/Python para previsões de vendas`,
      `Gatilhos automáticos que criam campanhas segmentadas`,
      `Dashboards de IA que sugerem próximos passos`,
      `Modelos de propensão baseados em histórico de interações`,
    ],
    required,
  },
  //`${tcn} você utiliza para integrar APIs ou scripts personalizados buscando automatizar processos e customizar a plataforma de CRM?`
  api: {
    type: "select-multiple",
    options: [
      `Criação de endpoints REST para disparar eventos`,
      `Uso de tokens seguros para validação do lado do servidor`,
      `Geração de registros em batch via script Python`,
      `Conexão com microservices internos para dados de clientes`,
      `Automação de cargas e atualizações (CI/CD) no CRM`,
    ],
    required,
  },
  gov: repeatedDefinitions.txtl,
});
export const stCrmDefinitions = ObjectHelper.makeImmutable({
    beginner: {
      stn: repeatedDefinitions.exp,
      ...crmBeginnerDefinitions,
    },
    intermediate: {
      ...crmIntermediateDefinitions,
      sti: repeatedDefinitions.txts,
    },
    expert: {
      ste: repeatedDefinitions.frq,
      ...crmExpertDefinitions,
    },
  }),
  devCrmDefinitions = ObjectHelper.makeImmutable({
    beginner: {
      dev: repeatedDefinitions.exp,
      dco: repeatedDefinitions.exp,
      ...crmBeginnerDefinitions,
    },
    intermediate: {
      des: repeatedDefinitions.exp,
      din: repeatedDefinitions.exp,
      //`${tcn} você utiliza para desenvolver integrações entre CRMs e ferramentas de desenvolvimento para automatizar processos?`
      dei: {
        type: "select-multiple" as const,
        options: [
          `APIs REST/GraphQL para sincronizar tickets e repos`,
          `Uso de scripts CI/CD para atualizar campos no CRM`,
          `Implantação de webhooks que disparam automações em PR merges`,
          `Data pipelines que coletam logs e enviam ao CRM`,
          `Integrações com plataformas de testes automáticos`,
        ],
        required,
      },
      ...crmIntermediateDefinitions,
    },
    expert: {
      dee: repeatedDefinitions.exp,
      dex: repeatedDefinitions.exp,
      ...crmExpertDefinitions,
    },
  });
export const crmEntryTypes: EntryTypeDictionary<CrmQuestionKey> =
  withFrozenLib({
    executivoAdministrativo: {
      beginner: {
        ead: repeatedDefinitions.frq,
        eas: repeatedDefinitions.frq,
        ...crmBeginnerDefinitions,
      },
      intermediate: {
        //`${sttg} você usa para integrar dados administrativos ao CRM para obter insights estratégicos?`
        eai: {
          type: "select-multiple",
          options: [
            `Uso de dashboards customizados`,
            `Integração de dados de ERP e CRM`,
            `Automação de alertas para indicadores críticos`,
            `Configuração de relatórios dinâmicos`,
            `Integração via APIs nativas`,
          ],
          required,
        },
        eax: repeatedDefinitions.exp,
        ...crmIntermediateDefinitions,
      },
      expert: {
        eae: repeatedDefinitions.exp,
        //`${sttg} você adota para consolidar dados de múltiplos setores em dashboards estratégicos no CRM?`
        eam: {
          type: "select-multiple",
          options: [
            `Criação de indicadores chaves (KPIs) para cada setor`,
            `Reunião dos dados em data lakes ou data warehouses`,
            `Recursos de drill-down para análise detalhada por setor`,
            `Mapeamento de processos entre departamentos em um dashboard único`,
            `Agregação de dados em níveis (executivo, gerencial, operacional)`,
          ],
          required,
        },
        ...crmExpertDefinitions,
      },
    },
    financeiro: {
      beginner: {
        fin: repeatedDefinitions.exp,
        fnc: repeatedDefinitions.exp,
        fne: repeatedDefinitions.yn,
        ...crmBeginnerDefinitions,
      },
      intermediate: {
        // /`${tcn} você usa para modelar dados financeiros no CRM para análise de rentabilidade?`
        fim: {
          type: "select-multiple",
          options: [
            `Criação de campos calculados`,
            `Uso de fórmulas avançadas (DAX, MDX)`,
            `Modelagem preditiva simples`,
            `Segmentação por período`,
            `Análise de tendências históricas`,
          ],
          required,
        },
        fna: repeatedDefinitions.exp,
        ...crmIntermediateDefinitions,
      },
      expert: {
        ...crmExpertDefinitions,
        //`${sttg} você para consolidar grandes volumes de dados financeiros em dashboards estratégicos?`
        fis: {
          type: "select-multiple",
          options: [
            `Agregação de dados em camadas`,
            `Uso de técnicas de compressão de dados`,
            `Indexação avançada de tabelas`,
            `Implementação de OLAP cubes`,
            `Automatização de refresh de dados`,
          ],
          required,
        },
        fic: repeatedDefinitions.exp,
        fip: repeatedDefinitions.txtl,
      },
    },
    comercial: {
      beginner: {
        com: repeatedDefinitions.exp,
        cmr: repeatedDefinitions.frq,
        cmx: repeatedDefinitions.frq,
        ...crmBeginnerDefinitions,
      },
      intermediate: {
        //cmm: `${tcn} você usa para modelar dados de vendas em CRMs buscando identificar tendências?`
        cmm: {
          type: "select-multiple",
          options: [
            `Criação de funis de vendas dinâmicos`,
            `Análise de séries temporais`,
            `Aplicação de regressão linear`,
            `Segmentação de leads por desempenho`,
            `Cálculo de métricas de conversão`,
          ],
          required,
        },
        cma: repeatedDefinitions.frq,
        cmc: repeatedDefinitions.exp,
        ...crmIntermediateDefinitions,
      },
      expert: {
        //`${rsc} avançados de CRMs você utiliza para prever oportunidades de vendas?`
        cme: {
          type: "select-multiple",
          options: [
            `Modelos preditivos com machine learning`,
            `Scoring avançado de leads`,
            `Análise de comportamento histórico`,
            `Integração com ferramentas de previsão`,
            `Dashboards de previsão automatizados`,
          ],
          required,
        },
        //`${sttg} você usa para consolidar informações de múltiplos canais comerciais em dashboards avançados em CRMs?`
        cmg: {
          type: "select-multiple",
          options: [
            `Centralização de dados via ETL`,
            `Integração de múltiplos sistemas via API`,
            `Uso de data lakes para unificação de dados`,
            `Criação de dashboards interativos`,
            `Segmentação por canal e performance`,
          ],
          required,
        },
        //`${sttg} você utiliza para integrar dados de CRM com análises de mercado para insights estratégicos?`,
        cmf: {
          type: "select-multiple",
          options: [
            `Cross-referencing de dados internos e externos`,
            `Integração com plataformas de BI avançadas`,
            `Análise de benchmarking e competitividade`,
            `Modelagem de cenários de mercado`,
            `Automação de análises de ROI`,
          ],
          required,
        },
        ...crmExpertDefinitions,
      },
    },
    marketing: {
      beginner: {
        mkt: repeatedDefinitions.exp,
        mka: repeatedDefinitions.exp,
        mkb: repeatedDefinitions.txts,
        ...crmBeginnerDefinitions,
      },
      intermediate: {
        // mkm => `${rsc} de CRMs você usa para modelar dados de campanhas buscando analisar o ROI?`
        mkm: {
          type: "select-multiple",
          options: [
            `Dashboards de comparativo de custo x retorno`,
            `Estruturação de codificação de campanhas em leads`,
            `Geração de funis específicos por canal e gasto`,
            `Cross-selling e upselling automáticos em scripts`,
            `Configuração de alertas automáticos ao ultrapassar budget`,
          ],
          required,
        },
        // mkd => `${tcn} você utiliza para integrar CRMs com plataformas de marketing buscando sincronizar dados de leads?`
        mkd: {
          type: "select-multiple",
          options: [
            `Automação via APIs REST (MailChimp, RD Station)`,
            `Conectores nativos para plataformas de ads`,
            `Uso de webhooks disparados a cada evento do lead`,
            `ETLs incrementais de dados de leads para CRM`,
            `Integração de campos personalizados (tracking UTM)`,
          ],
          required,
        },
        mke: repeatedDefinitions.frq,
        ...crmIntermediateDefinitions,
      },
      expert: {
        ...crmExpertDefinitions,
        mkx: repeatedDefinitions.exp,
        //`${sttg} você utiliza para consolidar dados de campanhas de marketing em relatórios estratégicos?`,
        mkz: {
          type: "select-multiple",
          options: [
            `Agregação de múltiplos canais (social, e-mail, inbound)`,
            `Criação de visões de ROI e custo por lead em tempo real`,
            `Exibição de funil de marketing com segmentações avançadas`,
            `Filtros automáticos por datas e regiões em dashboards`,
            `Comparativo histórico de campanhas e evolução de KPIs`,
          ],
          required,
        },
        mky: repeatedDefinitions.txtl,
      },
    },
    suporteTecnicoN1: {
      ...stCrmDefinitions,
    },
    suporteTecnicoN2: {
      ...stCrmDefinitions,
    },
    operatorio: {
      beginner: {
        ...crmBeginnerDefinitions,
        opr: repeatedDefinitions.txts,
      },
      intermediate: {
        ...crmIntermediateDefinitions,
        opi: repeatedDefinitions.txts,
      },
      expert: {
        ...crmExpertDefinitions,
        //`${rsc} avançados do CRM para otimizar processos operacionais e integrar informações de diferentes áreas?`
        ope: {
          type: "select-multiple",
          options: [
            `Automação de workflows interdepartamentais (help desk, financeiro)`,
            `Uso de scripts para consolidar pedidos de compras e vendas`,
            `Criação de dashboards operacionais com métricas de SLA`,
            `Integração com chatbots para triagem de chamados operacionais`,
            `Controle de permissões modulares para cada área (comercial, suporte)`,
          ],
          required,
        },
      },
    },
    desenvolvimento: {
      ...devCrmDefinitions,
    },
    devOps: {
      ...devCrmDefinitions,
    },
    undefined: {
      beginner: {
        ...crmBeginnerDefinitions,
      },
      intermediate: {
        ...crmIntermediateDefinitions,
      },
      expert: {
        ...crmExpertDefinitions,
      },
    },
  });
export const erpDefinitions: ROFieldRecord<
  typeof erpGeneralKeys
> = ObjectHelper.makeImmutable({
  cad: repeatedDefinitions.frq,
  rep: repeatedDefinitions.frq,
  //`${rsc} você usa para salvar ou imprimir documentos fiscais gerados em ERPs?`
  doc: {
    type: `select-multiple`,
    options: [
      `Exportação direta em PDF`,
      `Impressão através de spool interno do ERP`,
      `Armazenamento em repositórios (SharePoint, Google Drive)`,
      `Integração com sistemas de NF-e (nota fiscal eletrônica)`,
      `Envio automático por e-mail a partir do ERP`,
    ],
    required,
  },
});
export const erpBeginnerDefinitions: ROFieldRecord<
  typeof erpBeginnerKeys
> = ObjectHelper.makeImmutable({
  crt: repeatedDefinitions.exp,
  ...erpDefinitions,
});
export const erpIntermediateDefinitions: ROFieldRecord<
  typeof erpIntermediateKeys
> = ObjectHelper.makeImmutable({
  //`${sttg} você considera para configurar fluxos intermediários (ex.: aprovação, descontos) dentro dos ERPs?`
  wfl: {
    type: "select-multiple",
    options: [
      `Criação de caminhos de aprovação com níveis hierárquicos`,
      `Configuração de alertas e notificações em cada etapa`,
      `Automação de descontos baseados em regras (ex.: volume de compra)`,
      `Logs de histórico de aprovações para auditoria`,
      `Uso de wizards ou scripts integrados para implantação dos fluxos`,
    ],
    required,
  },
  //`${sttg} você usa para elaborar relatórios customizados para análises específicas usando o ERP?`
  rel: {
    type: "select-multiple",
    options: [
      `Criação de queries ou SQL customizadas`,
      `Uso de construtores de relatórios (Crystal, TOTVS Reports)`,
      `Personalização de layouts e colunas dinâmicas`,
      `Filtros e agrupamentos avançados para visualizações`,
      `Combinação de templates visuais para relatórios finais`,
    ],
    required,
  },
  mig: repeatedDefinitions.frq,
  //`${rsc} você usa para definir permissões específicas para diferentes áreas (ex.: compras, vendas) em ERPs?`
  sec: {
    type: "select-multiple",
    options: [
      `Configuração de perfis e grupos de usuários (RBAC)`,
      `Políticas de autenticação (AD, LDAP) para cada módulo`,
      `Atribuição de roles específicas para compras e vendas`,
      `Logs de auditoria para ações sensíveis`,
      `Segregação de funções (SoD) para evitar conflitos de interesse`,
    ],
    required,
  },
  //${mnn} integra o ERP com outras ferramentas (ex.: CRM, e-commerce)?
  int: {
    type: "select-multiple",
    options: [
      `Uso de conectores nativos para CRM ou e-commerce`,
      `Scripts customizados (API REST) para sincronização`,
      `Ferramentas de ETL agendadas para trocas de dados`,
      `Webhooks disparados em eventos de estoque ou pedido`,
      `Adoção de iPaaS (Zapier, Workato) para fluxos automatizados`,
    ],
    required,
  },
  ...erpDefinitions,
});
export const erpExpertDefinitions: ROFieldRecord<
  typeof erpExpertKeys
> = ObjectHelper.makeImmutable({
  ha_: repeatedDefinitions.exp,
  //`${rsc} você usa para orquestrar processos complexos (ex.: MRP, produção) e auditar logs em ERPs?`
  prc: {
    type: "select-multiple",
    options: [
      `Configuração de rotinas MRP e sequenciamento de produção`,
      `Scripts de agendamento para etapas de fabricação`,
      `Análise de logs detalhados em cada etapa do processo`,
      `Gatilhos para integração com controle de qualidade`,
      `Uso de dashboards para supervisão de todo o fluxo produtivo`,
    ],
    required,
  },
  //`${sttg} você usa para implementar governança, compliance (LGPD, etc.) e auditoria avançada em ERPs?`
  gov: {
    type: "select-multiple",
    options: [
      `Criação de políticas de retenção e descarte de dados`,
      `Aplicação de logs imutáveis para auditoria`,
      `Perfis de acesso restritos (principle of least privilege)`,
      `Encriptação de dados sensíveis (ex.: CFO, RG)`,
      `Procedimentos de aprovação para mudanças em produção`,
    ],
    required,
  },
  ...erpDefinitions,
});
export const erpEntryTypes: EntryTypeDictionary<ErpQuestionKey> =
  withFrozenLib({
    executivoAdministrativo: {
      beginner: {
        eab: repeatedDefinitions.frq,
        //`${mnn} exporta dados (PDF, CSV) e compartilha com gestores ou outros departamentos?`
        eac: {
          type: "select-multiple",
          options: [
            `Geração de relatórios em formato CSV/PDF`,
            `Publicação em intranet ou drive compartilhado`,
            `Anexos automáticos via e-mail corporativo`,
            `Integrações com portais internos de BI`,
            `Uso de permissões para cada equipe (financeiro, compras)`,
          ],
          required,
        },
        ...erpBeginnerDefinitions,
      },
      intermediate: {
        //`${mnn} alinha módulos administrativos (compras, vendas) para gerar visões consolidadas no ERP?`
        eai: {
          type: "select-multiple",
          options: [
            `Unificação de registros de compras e vendas em dashboards`,
            `Cross-referencing de pedidos e faturas`,
            `Configs de workflow de aprovação compartilhada`,
            `Filtros combinados para análise gerencial`,
            `Exportação consolidada de relatórios para liderança`,
          ],
          required,
        },
        eax: repeatedDefinitions.txts,
        ...erpIntermediateDefinitions,
      },
      expert: {
        eae: repeatedDefinitions.exp,
        //`${mnn} consolida dashboards executivos (governança, compliance) unindo dados de múltiplos módulos?`
        eaz: {
          type: "select-multiple",
          options: [
            `Integração de relatórios de estoque, vendas e finanças`,
            `Criação de KPIs executivos (margem, receita)`,
            `Aplicação de filtros de compliance (LGPD, SOX)`,
            `Uso de painéis temáticos por diretoria`,
            `Combinação de fluxos entre diferentes departamentos`,
          ],
          required,
        },
        ...erpExpertDefinitions,
      },
    },
    financeiro: {
      beginner: {
        fnb: repeatedDefinitions.frq,
        fnc: repeatedDefinitions.exp,
        //`${cts} seguem ao conferir notas fiscais ou integrações de pagamento no ERP?`
        fnd: {
          type: "select-multiple",
          options: [
            `Validação de dados fiscais (CNPJ, IE) em cadastros`,
            `Checagem de status de pagamento (liquidação, pendente)`,
            `Verificação de retenções e impostos (ISS, IR, etc.)`,
            `Conferência de saldo bancário integrado`,
            `Encerramento contábil para evitar duplicidades`,
          ],
          required,
        },
        ...erpBeginnerDefinitions,
      },
      intermediate: {
        //`${mnn} cruza dados do ERP com planilhas/BI para análise de rentabilidade e previsão financeira?`
        fni: {
          type: "select-multiple",
          options: [
            `Uso de macros ou scripts de integração (Excel, Google Sheets)`,
            `Dashboards analíticos com receitas e despesas`,
            `Modelagem de cenários de fluxo de caixa`,
            `Projeções de vendas cruzando histórico do ERP`,
            `Exportação periódica de dados contábeis para BI`,
          ],
          required,
        },
        //${tcn} utiliza para configurar aprovações de despesas ou investimentos altos em módulos financeiros?
        fnj: {
          type: "select-multiple",
          options: [
            `Criação de workflows com níveis hierárquicos`,
            `Automação de alertas por e-mail para aprovadores`,
            `Regras de valor-limite para cada centro de custo`,
            `Logs de auditoria para cada aprovação`,
            `Integração com parâmetros de crédito do cliente`,
          ],
          required,
        },
        fnk: repeatedDefinitions.txtl,
        ...erpIntermediateDefinitions,
      },
      expert: {
        fne: repeatedDefinitions.exp,
        //`${rsc} de HA em módulos financeiros são empregados para operações críticas (folha, tributos)?`
        fnf: {
          type: "select-multiple",
          options: [
            `Cluster ativo/ativo para alta disponibilidade`,
            `Replicação síncrona de dados financeiros`,
            `Failover automatizado em caso de falhas`,
            `Monitoramento de desempenho (CPU, memória) em tempo real`,
            `Scripts de rollback para operações contábeis`,
          ],
          required,
        },
        //`${mnn} gerencia logs e governança para rastrear movimentações de alto impacto no ERP financeiro?`
        fng: {
          type: "select-multiple",
          options: [
            `Ativação de logs de transações financeiras`,
            `Validação de auditorias contábeis externas (SOX)`,
            `Aplicação de regras de segregação de funções`,
            `Monitoramento de perfis de acesso de gerentes e diretores`,
            `Alertas automáticos para movimentações acima de um certo valor`,
          ],
          required,
        },
      },
    },
    comercial: {
      beginner: {
        cmb: repeatedDefinitions.frq,
        cmc: repeatedDefinitions.exp,
        //`${mnn} lida com cálculos de comissão ou descontos dentro do módulo comercial?`
        cmd: {
          type: "select-multiple",
          options: [
            `Parametrização de regras de comissão por faixa de produto`,
            `Configuração de scripts para descontos progressivos`,
            `Definição de fórmulas para metas de vendedores`,
            `Revisão periódica de alíquotas e margens de lucro`,
            `Logs de aprovação quando o desconto excede um limite`,
          ],
          required,
        },
        ...erpBeginnerDefinitions,
      },
      intermediate: {
        //`${mnn} integra dados de vendas (ex.: estoque, financeiro) para agilizar processos no ERP?`
        cmi: {
          type: "select-multiple",
          options: [
            `Conexão entre módulo comercial e controle de estoque`,
            `Atualizações automáticas de valores financeiros`,
            `Utilização de ETL para consolidar dados de diferentes fontes`,
            `Criação de gatilhos de reabastecimento ao fechar vendas`,
            `Relatórios unificados de margens e faturamento`,
          ],
          required,
        },
        //`${cts} define ao configurar aprovações para pedidos de alto valor ou clientes especiais?`
        cmj: {
          type: "select-multiple",
          options: [
            `Autorização escalonada por gerente ou diretor`,
            `Regra de valor mínimo para exigir aprovação extra`,
            `Registro de histórico de aprovação para auditoria`,
            `Integração com parâmetros de crédito do cliente`,
            `Automação de alertas por e-mail ou notificação interna`,
          ],
          required,
        },
        //`${tcn} utiliza para customizar relatórios de vendas (ranking de vendedores, metas) e gerenciar permissões?`
        cmk: {
          type: "select-multiple",
          options: [
            `Uso de scripts de relatórios no módulo comercial`,
            `Criação de campos calculados para comissões`,
            `Definição de níveis de acesso (vendedor, gerente, ADM)`,
            `Filtros por período e linha de produto`,
            `Dashboards comparativos entre equipes de vendas`,
          ],
          required,
        },
        ...erpIntermediateDefinitions,
      },
      expert: {
        cme: repeatedDefinitions.frq,
        //`${mnn} emprega HA no módulo comercial para evitar downtime em períodos de alta demanda?`
        cmf: {
          type: "select-multiple",
          options: [
            `Configuração de clusters ativos/ativos`,
            `Balanceamento de carga em servidores de aplicação`,
            `Uso de cache distribuído para grandes volumes de vendas`,
            `Sincronização de bancos em tempo real (replicação)`,
            `Monitoramento constante de métricas (CPU, memória)`,
          ],
          required,
        },
        // `${cts} segue para compliance (LGPD) e auditoria de dados de clientes em processos de vendas complexos?`
        cmg: {
          type: "select-multiple",
          options: [
            `Registro de logs de acesso a dados de clientes`,
            `Encriptação de campos sensíveis (RG, CPF)`,
            `Configuração de perfis de acesso e segregação de funções`,
            `Alertas de segurança ao exportar dados (relatórios)`,
            `Política de retenção e descarte de registros antigos`,
          ],
          required,
        },
        ...erpExpertDefinitions,
      },
    },
    marketing: {
      beginner: {
        mkb: repeatedDefinitions.frq,
        //`${mnn} gera relatórios básicos de impactos de campanhas (ex.: pedidos gerados) no ERP?`
        mkc: {
          type: "select-multiple",
          options: [
            `Criação de consultas simples por data e campanha`,
            `Agendamento periódico de relatórios de desempenho`,
            `Monitoramento de conversões (cliques -> pedidos)`,
            `Exportação de dados de vendas segmentadas`,
            `Comparação de resultados entre campanhas ativas`,
          ],
          required,
        },
        ...erpBeginnerDefinitions,
      },
      intermediate: {
        //`${mnn} integra plataformas de marketing (landing pages, leads) ao ERP para sincronizar dados?`
        mki: {
          type: "select-multiple",
          options: [
            `Uso de APIs REST para transferir leads`,
            `Mapeamento de campos de campanhas no ERP`,
            `Scripts automáticos de importação via cron`,
            `Integração com chatbots de captação de leads`,
            `Criação de workflows de aprovação para leads`,
          ],
          required,
        },
        //`${tcn} utiliza para adicionar campos de campanha (ex.: origem, ROI) no ERP?`
        mkx: {
          type: "select-multiple",
          options: [
            `Customização de layouts e tabelas de marketing`,
            `SQL scripts para criação de colunas extras`,
            `Campos calculados para ROI baseado em custo`,
            `Uso de IDs de campanha para rastreamento`,
            `Criação de triggers que validam dados de origem`,
          ],
          required,
        },
        ...erpIntermediateDefinitions,
      },
      expert: {
        mke: repeatedDefinitions.exp,
        //`${mnn} protege dados de leads e clientes (LGPD) em campanhas complexas integradas ao ERP?`
        mkf: {
          type: "select-multiple",
          options: [
            `Mascaramento de campos sensíveis (nome, endereço)`,
            `Criptografia em repouso e em trânsito (SSL/TLS)`,
            `Regras de acesso por perfil (marketing, financeiro)`,
            `Logs de acesso para auditoria de manipulação de dados`,
            `Configuração de aceite (opt-in) para uso dos dados`,
          ],
          required,
        },
        ...erpExpertDefinitions,
      },
    },
    suporteTecnicoN1: {
      beginner: {
        //`${mnn} auxilia usuários em relatórios básicos (ex.: estoque, vendas) para chamados simples de ERP?`
        snb: {
          type: "select-multiple",
          options: [
            `Guias passo a passo para gerar relatórios`,
            `Exemplos de consultas pré-definidas`,
            `Suporte via chat ou ticket interno`,
            `Documentação básica de erros comuns`,
            `Lista de parâmetros frequentes (datas, produtos)`,
          ],
          required,
        },
        ...erpBeginnerDefinitions,
      },
      intermediate: {
        sni: repeatedDefinitions.frq,
        ...erpIntermediateDefinitions,
      },
      expert: {
        //`${tcn} utiliza para configurações avançadas (API, tuning) em atendimentos críticos do ERP?`
        sne: {
          type: "select-multiple",
          options: [
            `Acesso a documentação interna de APIs do ERP`,
            `Scripts de tunning para índices e caching`,
            `Configurações de logs para troubleshooting avançado`,
            `Ferramentas de análise de performance (ex.: Kibana, Splunk)`,
            `Procedimentos de escalonamento para suporte nível 3`,
          ],
          required,
        },
        ...erpExpertDefinitions,
      },
    },
    suporteTecnicoN2: {
      beginner: {
        //`${mnn} realiza configurações iniciais (login, rede) para usuários no ERP?`
        s2b: {
          type: "select-multiple",
          options: [
            `Assistência na criação de credenciais e grupos`,
            `Configuração de rotas/ports no firewall interno`,
            `Testes de ping e latência para servidores do ERP`,
            `Documentação de passos de login e perfis`,
            `Solicitação de chaves ou tokens de acesso inicial`,
          ],
          required,
        },
        ...erpBeginnerDefinitions,
      },
      intermediate: {
        s2i: repeatedDefinitions.frq,
        ...erpIntermediateDefinitions,
      },
      expert: {
        //`${tcn} aplica ao executar scripts avançados (ABAP, TOTVS) ou integrações profundas para incidentes críticos no ERP?`
        s2e: {
          type: "select-multiple",
          options: [
            `Intervenções diretas em código-fonte do ERP`,
            `Uso de debug e logs avançados para correções`,
            `Scripts automatizados de rollback ou patches`,
            `Consultoria interna de especialistas em ABAP/TOTVS`,
            `Integração com sistemas de alta disponibilidade`,
          ],
          required,
        },
        ...erpExpertDefinitions,
      },
    },
    operatorio: {
      beginner: {
        opb: repeatedDefinitions.frq,
        ...erpBeginnerDefinitions,
      },
      //
      intermediate: {
        //`${mnn} resolve problemas intermediários (fluxos, permissões) e integra sistemas (ex.: e-mail) no ERP para equipes operacionais?`
        opi: {
          type: "select-multiple",
          options: [
            `Análise de permissões para usuários setoriais`,
            `Criação de fluxos de aprovação básicos para solicitações`,
            `Envio automático de notificação por e-mail ao finalizar processo`,
            `Uso de templates de correio interno do ERP`,
            `Scripts simples para importação de dados do e-mail`,
          ],
          required,
        },
        ...erpIntermediateDefinitions,
      },
      expert: {
        //`${sttg} são empregadas por você para otimizar alta demanda operacional, garantindo disponibilidade no ERP?`
        ope: {
          type: "select-multiple",
          options: [
            `Configuração de load balancing e cluster de aplicação`,
            `Rotinas de monitoramento de filas de processos`,
            `Desativação de módulos ociosos em horários de pico`,
            `Automação de escalonamento horizontal (containers)`,
            `Adoção de scripts de limpeza de logs e histórico`,
          ],
          required,
        },
        ...erpIntermediateDefinitions,
      },
    },
    desenvolvimento: {
      beginner: {
        dvb: repeatedDefinitions.frq,
        dvc: repeatedDefinitions.exp,
        //`${cts} observa ao documentar integrações mínimas do ERP para outros devs?`
        dvd: {
          type: "select-multiple",
          options: [
            `Descrever endpoints e parâmetros essenciais`,
            `Incluir exemplos de configuração de usuário e ACL`,
            `Manter repositório central de documentação (ex.: wiki)`,
            `Explicar limitações de versão ou licenças do ERP`,
            `Atualizar guias de integração conforme patches aplicados`,
          ],
          required,
        },
        ...erpBeginnerDefinitions,
      },
      intermediate: {
        //`${mnn} cria fluxos (ex.: approvals) e integra com front-ends via APIs REST/SOAP no ERP?`
        dvi: {
          type: "select-multiple",
          options: [
            `Definição de endpoints REST para triggers de workflow`,
            `Criação de telas customizadas no front-end`,
            `Scripts de validação de dados no backend`,
            `Sincronização de estados (aprovado, reprovado) no ERP`,
            `Automação de logs e histórico de cada fluxo`,
          ],
          required,
        },
        dvj: repeatedDefinitions.frq,
        //`${tcn} utiliza para estender módulos do ERP (ex.: custom BAPIs) e resolver conflitos de versão?`
        dvk: {
          type: "select-multiple",
          options: [
            `Desenvolvimento ABAP ou TOTVS com versionamento Git`,
            `Revisões de pull requests para atualizar BAPIs`,
            `Scripts de migração incremental no banco do ERP`,
            `Ferramentas de diff para analisar conflitos`,
            `Práticas de CI/CD para testes de regressão`,
          ],
          required,
        },
        ...erpIntermediateDefinitions,
      },
      expert: {
        dve: repeatedDefinitions.exp,
        //`${mnn} versiona customizações do ERP (scripts TOTVS, ABAP) seguindo práticas DevOps?`
        dvf: {
          type: "select-multiple",
          options: [
            `Uso de repositórios Git para cada personalização`,
            `Criação de pipelines de build e teste automático`,
            `Validação de diffs antes do merge em produção`,
            `Automatização de rollback em caso de falha`,
            `Documentação e tagging de cada release do ERP`,
          ],
          required,
        },
        //`${rsc} de HA/DR são aplicados ao orquestrar failover e garantir compliance (LGPD) em dados reais?`
        dvg: {
          type: "select-multiple",
          options: [
            `Clustering ativo/passivo com sincronização de dados`,
            `Replicação assíncrona ou síncrona em múltiplas regiões`,
            `Uso de scripts para failover automatizado`,
            `Criptografia em repouso e em trânsito`,
            `Auditoria de acessos e ações no ERP durante failover`,
          ],
          required,
        },
      },
    },
    devOps: {
      beginner: {
        dob: repeatedDefinitions.frq,
        //`${mnn} versiona scripts ABAP/TOTVS no repositório devOps e inclui documentação mínima?`
        dov: {
          type: "select-multiple",
          options: [
            `Criação de branches por feature no Git`,
            `Uso de commits frequentes com mensagens claras`,
            `Inclui README para explicar o propósito do script`,
            `Configuração de lint ou code review automático`,
            `Linkagem entre tickets devOps e commits do ERP`,
          ],
          required,
        },
        //`${cts} define para organizar credenciais (url, DB user) do ERP em variáveis seguras (ex.: vault)?`
        dod: {
          type: "select-multiple",
          options: [
            `Uso de vaults centralizados (HashiCorp, CyberArk)`,
            `Armazenamento de secrets em orquestradores (K8s)`,
            `Restrição de acesso via RBAC e logs de consulta`,
            `Rotação periódica de senhas e tokens`,
            `Arquitetura de microserviços sem credenciais hard-coded`,
          ],
          required,
        },
        ...erpBeginnerDefinitions,
      },
      intermediate: {
        doj: repeatedDefinitions.frq,
        //`${mnn} configura SSO do ERP e orquestra automação de builds (ex.: triggers) no pipeline devOps?`
        doi: {
          type: "select-multiple",
          options: [
            `Integração com AD/LDAP ou SAML para autenticação`,
            `Criação de jobs automáticos de build a cada commit`,
            `Scripts de implantação que validam tokens SSO`,
            `Registro de logs no pipeline para auditoria`,
            `Monitoração de falhas na inicialização do ERP`,
          ],
          required,
        },
        //`${tcn} utiliza para migrar ambientes (desenv -> homolog -> prod) com minimal downtime no ERP?`
        dok: {
          type: "select-multiple",
          options: [
            `Blue/Green deploy entre ambientes`,
            `Uso de containers para facil deployment`,
            `Ferramentas de migração incremental (Liquibase)`,
            `Scripts de rollback pré-planejados`,
            `Coordenação com times de QA e infra para janelas de migração`,
          ],
          required,
        },
        ...erpIntermediateDefinitions,
      },
      expert: {
        doe: repeatedDefinitions.exp,
        //`${mnn} compila código do ERP (ex.: ABAP) em estágios automatizados, testando patches e traduções?`
        dof: {
          type: "select-multiple",
          options: [
            `Criação de pipelines de build (Jenkins, GitLab)`,
            `Execução de testes unitários e de integração ABAP`,
            `Uso de contêineres temporários para compilar pacotes`,
            `Validação de traduções e i18n em cada push`,
            `Snapshots de versão que podem ser promovidos a prod`,
          ],
          required,
        },
        //`${rsc} de observabilidade (logs, métricas) são usados para monitorar o ERP em dashboards devOps (Prometheus/Grafana)?`
        dog: {
          type: "select-multiple",
          options: [
            `Exportadores específicos para ERP (SAP, TOTVS)`,
            `Coleta de logs via Fluentd ou Logstash`,
            `Dashboards customizados com métricas de CPU e queries`,
            `Alertas configurados para picos de latência`,
            `Correlações de logs ERP e repositórios devOps`,
          ],
          required,
        },
        ...erpExpertDefinitions,
      },
    },
    undefined: {
      beginner: {
        ...erpBeginnerDefinitions,
      },
      intermediate: {
        ...erpIntermediateDefinitions,
      },
      expert: {
        ...erpExpertDefinitions,
      },
    },
  });
export const plnDefinitions: ROFieldRecord<
  typeof plnGeneralKeys
> = ObjectHelper.makeImmutable({
  tpl: repeatedDefinitions.frq,
  //"Quais métodos você utiliza para colaborar e compartilhar quadros ou listas de tarefas?"
  col: {
    type: "select-multiple",
    options: [
      "Quadros Kanban (Trello, Jira, Asana, Monday.com)",
      "Listas de tarefas compartilhadas (Microsoft To Do, Google Tasks, Todoist)",
      "Documentos colaborativos (Google Docs, Notion, Confluence)",
      "Planilhas compartilhadas (Google Sheets, Excel Online)",
      "Plataformas de chat integradas (Slack, Microsoft Teams, Discord)",
      "Integração com calendários (Google Calendar, Outlook)",
      "Notificações automáticas por e-mail ou aplicativos de mensagem",
      "Automação de tarefas e fluxos de trabalho (Zapier, Make, Power Automate)",
      "Reuniões de acompanhamento e atualizações assíncronas",
      "Ferramentas próprias ou customizadas para gerenciamento de tarefas",
    ],
    required,
  },
  //"Quais padrões de relatórios ou dashboards você gera para acompanhar o progresso das atividades?"
  rep: {
    type: "select-multiple",
    options: [
      "Relatórios de progresso por status (pendente, em andamento, concluído)",
      "Dashboards visuais (Power BI, Google Data Studio, Tableau)",
      "Relatórios semanais/mensais de produtividade",
      "Gráficos de burn-down e burn-up (Scrum, Agile)",
      "Análise de tempo gasto por tarefa (Time tracking)",
      "Mapeamento de gargalos e eficiência de processos",
      "Histórico de atividades e auditoria de ações",
      "Comparação de metas planejadas vs. metas atingidas",
      "Indicadores de performance (KPIs) personalizados",
      "Automação de relatórios periódicos via scripts ou integrações",
    ],
    required,
  },
  sch: repeatedDefinitions.txtl,
});
const crt: FieldDescription = ObjectHelper.makeImmutable({
  type: "select-multiple",
  options: [
    "Painéis de controle administrativos (ex.: Configurações, Permissões, Segurança)",
    "Módulos de gestão de projetos (ex.: Kanban, Scrum, Roadmaps)",
    "Ferramentas de automação e workflows (ex.: Zapier, Make, Power Automate)",
    "Relatórios e Dashboards (ex.: Google Data Studio, Power BI, Tableau)",
    "Integração com CRM e vendas (ex.: HubSpot, Salesforce, Pipedrive)",
    "Ferramentas de colaboração e compartilhamento (ex.: Notion, Confluence, Google Docs)",
    "Gerenciamento de tarefas e produtividade (ex.: Trello, Asana, Monday.com)",
    "APIs e webhooks para integrações externas",
    "Controle de acesso e logs de auditoria",
    "Suporte a personalizações via código ou plugins",
  ],
  required,
});
export const plnBeginnerDefinitions: ROFieldRecord<
  typeof plnBeginnerKeys
> = ObjectHelper.makeImmutable({
  ...plnDefinitions,
  aut: repeatedDefinitions.frq,
  //"Quais são as principais ferramentas e subpaineis utilizados por você nestas plataformas?"
  crt,
});
export const plnIntermediateDefinitions: ROFieldRecord<
  typeof plnIntermediateKeys
> = ObjectHelper.makeImmutable({
  crt,
  //`${tls} você utiliza para integrar suas ferramentas de planejamento com outros sistemas?`
  int: {
    type: "select-multiple",
    options: [
      "APIs nativas das ferramentas de planejamento (ex.: Asana API, Trello API, Jira API)",
      "Integração via plataformas de automação (ex.: Zapier, Make, Power Automate)",
      "Conectores de dados para BI (ex.: Google Data Studio, Power BI, Tableau)",
      "Integração com ferramentas de CRM (ex.: HubSpot, Salesforce, Pipedrive)",
      "Conexão com planilhas automatizadas (Google Sheets, Excel, Airtable)",
      "Webhooks para sincronização de eventos em tempo real",
      "Integração com ERPs e sistemas internos da empresa",
      "Uso de bancos de dados para armazenar e manipular informações centralizadas",
      "Sincronização com calendários e agendas empresariais (Google Calendar, Outlook)",
    ],
    required,
  },
  //"Quais destas práticas você utiliza para gerenciar permissões e acessos para diferentes times nos seus quadros e agendas?"
  sec: {
    type: "select-multiple",
    options: [
      "Definição de permissões baseadas em função (RBAC - Role-Based Access Control)",
      "Restrição de acesso por times, projetos ou departamentos",
      "Configuração de níveis de permissão (ex.: visualização, edição, administração)",
      "Autenticação multifator (MFA) para proteger acessos sensíveis",
      "Monitoramento e logs de atividades para auditoria de acessos",
      "Uso de grupos e listas de permissões pré-configuradas",
      "Controle de compartilhamento externo (restringir ou liberar para terceiros)",
      "Revisão periódica de acessos e revogação de permissões inativas",
      "Integração com diretórios corporativos (ex.: Active Directory, Okta, Google Workspace)",
    ],
    required,
  },
  ...plnDefinitions,
});
export const plnExpertDefinitions: ROFieldRecord<
  typeof plnExpertKeys
> = ObjectHelper.makeImmutable({
  ...plnDefinitions,
  //"Quais práticas você utiliza para consolidar dados de múltiplos quadros para criar dashboards executivos?"
  adv: {
    type: "select-multiple",
    options: [
      "Uso de ferramentas de Business Intelligence (ex.: Power BI, Tableau, Google Data Studio)",
      "Extração e manipulação de dados via planilhas (Google Sheets, Excel)",
      "APIs para coleta e centralização de dados",
      "Automação de relatórios usando scripts (ex.: Python, Apps Script, VBA)",
      "Integração com bases de dados relacionais (ex.: SQL, BigQuery)",
      "Uso de dashboards embutidos nas próprias ferramentas de gestão",
      "Criação de painéis de visualização customizados em plataformas especializadas",
      "Agrupamento e segmentação de métricas por times ou projetos",
      "Consolidação manual de informações de diferentes fontes",
    ],
    required,
  },
  sci: repeatedDefinitions.yn,
  api: repeatedDefinitions.txtl,
});
export const plnEntryTypes: EntryTypeDictionary<PlanningQuestionKey> =
  withFrozenLib({
    executivoAdministrativo: {
      beginner: { ...plnBeginnerDefinitions },
      intermediate: { ...plnIntermediateDefinitions },
      expert: { ...plnExpertDefinitions },
    },
    financeiro: {
      beginner: { ...plnBeginnerDefinitions },
      intermediate: { ...plnIntermediateDefinitions },
      expert: { ...plnExpertDefinitions },
    },
    comercial: {
      beginner: { ...plnBeginnerDefinitions },
      intermediate: { ...plnIntermediateDefinitions },
      expert: { ...plnExpertDefinitions },
    },
    marketing: {
      beginner: { ...plnBeginnerDefinitions },
      intermediate: { ...plnIntermediateDefinitions },
      expert: { ...plnExpertDefinitions },
    },
    suporteTecnicoN1: {
      beginner: { ...plnBeginnerDefinitions },
      intermediate: { ...plnIntermediateDefinitions },
      expert: { ...plnExpertDefinitions },
    },
    suporteTecnicoN2: {
      beginner: { ...plnBeginnerDefinitions },
      intermediate: { ...plnIntermediateDefinitions },
      expert: { ...plnExpertDefinitions },
    },
    operatorio: {
      beginner: { ...plnBeginnerDefinitions },
      intermediate: { ...plnIntermediateDefinitions },
      expert: { ...plnExpertDefinitions },
    },
    desenvolvimento: {
      beginner: { ...plnBeginnerDefinitions },
      intermediate: { ...plnIntermediateDefinitions },
      expert: { ...plnExpertDefinitions },
    },
    devOps: {
      beginner: { ...plnBeginnerDefinitions },
      intermediate: { ...plnIntermediateDefinitions },
      expert: { ...plnExpertDefinitions },
    },
    undefined: {
      beginner: { ...plnBeginnerDefinitions },
      intermediate: { ...plnIntermediateDefinitions },
      expert: { ...plnExpertDefinitions },
    },
  });
export const aiAdDefinitions: ROFieldRecord<
  typeof aiAdGeneralKeys
> = ObjectHelper.makeImmutable({
  gen: repeatedDefinitions.exp,
  //`${cts} utiliza para avaliar e determinar a qualidade dos áudios gerados pela IA?`
  evl: {
    type: "select-multiple",
    options: [
      "Clareza e inteligibilidade do áudio",
      "Naturalidade e fluidez da voz gerada",
      "Ausência de ruídos artificiais ou artefatos",
      "Fidelidade ao tom e emoção esperados",
      "Sincronização correta com legendas ou outros conteúdos",
      "Comparação com áudios reais de referência",
      "Ajuste manual de equalização e compressão antes da avaliação",
      "Feedback de ouvintes ou especialistas para validação",
    ],
    required,
  },
  tts: repeatedDefinitions.frq,
  cln: repeatedDefinitions.frq,
  int: repeatedDefinitions.txts,
});
export const aiAdBeginnerDefinitions: ROFieldRecord<
  typeof aiAdBeginnerKeys
> = ObjectHelper.makeImmutable({
  set: repeatedDefinitions.yn,
  ...aiAdDefinitions,
});
export const aiAdIntermediateDefinitions: ROFieldRecord<
  typeof aiAdIntermediateKeys
> = ObjectHelper.makeImmutable({
  // "Quais as principais ferramentas que você utiliza para editar ou ajustar os áudios gerados por IAs?"
  edt: {
    type: "select-multiple",
    options: [
      "Audacity (edição e aprimoramento básico)",
      "Adobe Audition (mixagem e ajuste profissional)",
      "GarageBand (edição intuitiva para macOS/iOS)",
      "FL Studio (produção e manipulação avançada de áudio)",
      "Logic Pro (edição avançada para macOS)",
      "Izotope RX (remoção de ruídos e aprimoramento de áudio)",
      "DaVinci Resolve Fairlight (edição integrada a vídeos)",
      "Reaper (edição leve e flexível)",
      "Plug-ins VST para ajustes específicos (ex.: equalização, compressão)",
      "Edição manual via ferramentas nativas do modelo de IA",
    ],
    required,
  },
  doc: repeatedDefinitions.yn,
  ing: repeatedDefinitions.txtl,
  ...aiAdDefinitions,
});
export const aiAdExpertDefinitions: ROFieldRecord<
  typeof aiAdExpertKeys
> = ObjectHelper.makeImmutable({
  adv: repeatedDefinitions.frq,
  vol: repeatedDefinitions.yn,
  sec: repeatedDefinitions.sec,
  ...aiAdDefinitions,
});
export const aiAdEntryTypes: EntryTypeDictionary<AudioAiQuestionKey> =
  withFrozenLib({
    executivoAdministrativo: {
      beginner: { ...aiAdBeginnerDefinitions },
      intermediate: { ...aiAdIntermediateDefinitions },
      expert: { ...aiAdExpertDefinitions },
    },
    financeiro: {
      beginner: { ...aiAdBeginnerDefinitions },
      intermediate: { ...aiAdIntermediateDefinitions },
      expert: { ...aiAdExpertDefinitions },
    },
    comercial: {
      beginner: { ...aiAdBeginnerDefinitions },
      intermediate: { ...aiAdIntermediateDefinitions },
      expert: { ...aiAdExpertDefinitions },
    },
    marketing: {
      beginner: { ...aiAdBeginnerDefinitions },
      intermediate: { ...aiAdIntermediateDefinitions },
      expert: { ...aiAdExpertDefinitions },
    },
    suporteTecnicoN1: {
      beginner: { ...aiAdBeginnerDefinitions },
      intermediate: { ...aiAdIntermediateDefinitions },
      expert: { ...aiAdExpertDefinitions },
    },
    suporteTecnicoN2: {
      beginner: { ...aiAdBeginnerDefinitions },
      intermediate: { ...aiAdIntermediateDefinitions },
      expert: { ...aiAdExpertDefinitions },
    },
    operatorio: {
      beginner: { ...aiAdBeginnerDefinitions },
      intermediate: { ...aiAdIntermediateDefinitions },
      expert: { ...aiAdExpertDefinitions },
    },
    desenvolvimento: {
      beginner: { ...aiAdBeginnerDefinitions },
      intermediate: { ...aiAdIntermediateDefinitions },
      expert: { ...aiAdExpertDefinitions },
    },
    devOps: {
      beginner: { ...aiAdBeginnerDefinitions },
      intermediate: { ...aiAdIntermediateDefinitions },
      expert: { ...aiAdExpertDefinitions },
    },
    undefined: {
      beginner: { ...aiAdBeginnerDefinitions },
      intermediate: { ...aiAdIntermediateDefinitions },
      expert: { ...aiAdExpertDefinitions },
    },
  });
export const aiImgDefinitions: ROFieldRecord<
  typeof aiImgGeneralKeys
> = ObjectHelper.makeImmutable({
  gen: repeatedDefinitions.frq,
  //`${cts} utiliza para avaliar a qualidade das imagens geradas pelas IAs?`
  evl: {
    type: "select-multiple",
    options: [
      "Resolução e nitidez da imagem",
      "Realismo e fidelidade ao prompt",
      "Coerência dos detalhes (ex.: mãos, olhos, proporções)",
      "Ausência de artefatos visuais ou distorções",
      "Cores e iluminação apropriadas",
      "Aderência ao estilo desejado (ex.: fotorrealista, desenho, anime)",
      "Comparação com imagens de referência",
      "Feedback de outras pessoas ou especialistas",
    ],
    required,
  },
  //`${tls} você utiliza para editar e otimizar a qualidade das imagens geradas pelas IAs?`
  opt: {
    type: "select-multiple",
    options: [
      "Adobe Photoshop",
      "GIMP",
      "Canva",
      "Affinity Photo",
      "Remini (melhoria de resolução por IA)",
      "Topaz Gigapixel AI (upscaling)",
      "Denoising tools (ex.: AI-based noise reduction)",
      "Correção manual de cores e iluminação",
      "Filtros e ajustes automáticos em apps mobile",
      "Ferramentas integradas nos próprios geradores de IA (ex.: DALL·E inpainting)",
    ],
    required,
  },
  //`${tls} você converter o formato das imagens geradas por IAs?`
  fmt: {
    type: "select-multiple",
    options: [
      "Adobe Photoshop",
      "Imagemagick",
      "GIMP",
      "CloudConvert",
      "Figma",
      "Conversores online (ex.: Convertio, TinyPNG)",
      "Ferramentas nativas do sistema operacional (ex.: Preview no macOS, Paint no Windows)",
      "Bibliotecas de código (ex.: Pillow/PIL no Python, Sharp no Node.js)",
      "Automação via scripts (ex.: ffmpeg, imagemagick CLI)",
    ],
    required,
  },
  col: repeatedDefinitions.frq,
  int: repeatedDefinitions.txts,
});
export const aiImgBeginnerDefinitions: ROFieldRecord<
  typeof aiImgBeginnerKeys
> = ObjectHelper.makeImmutable({
  set: repeatedDefinitions.yn,
  ...aiImgDefinitions,
});
export const aiImgIntermediateDefinitions: ROFieldRecord<
  typeof aiImgIntermediateKeys
> = ObjectHelper.makeImmutable({
  doc: repeatedDefinitions.frq,
  ing: repeatedDefinitions.txtl,
  ...aiImgDefinitions,
});
export const aiImgExpertDefinitions: ROFieldRecord<
  typeof aiImgExpertKeys
> = ObjectHelper.makeImmutable({
  adv: repeatedDefinitions.frq,
  vol: repeatedDefinitions.yn,
  sec: repeatedDefinitions.sec,
  ...aiImgDefinitions,
});
export const aiImgEntryTypes: EntryTypeDictionary<ImageAiQuestionKey> =
  withFrozenLib({
    executivoAdministrativo: {
      beginner: { ...aiImgBeginnerDefinitions },
      intermediate: { ...aiImgIntermediateDefinitions },
      expert: { ...aiImgExpertDefinitions },
    },
    financeiro: {
      beginner: { ...aiImgBeginnerDefinitions },
      intermediate: { ...aiImgIntermediateDefinitions },
      expert: { ...aiImgExpertDefinitions },
    },
    comercial: {
      beginner: { ...aiImgBeginnerDefinitions },
      intermediate: { ...aiImgIntermediateDefinitions },
      expert: { ...aiImgExpertDefinitions },
    },
    marketing: {
      beginner: { ...aiImgBeginnerDefinitions },
      intermediate: { ...aiImgIntermediateDefinitions },
      expert: { ...aiImgExpertDefinitions },
    },
    suporteTecnicoN1: {
      beginner: { ...aiImgBeginnerDefinitions },
      intermediate: { ...aiImgIntermediateDefinitions },
      expert: { ...aiImgExpertDefinitions },
    },
    suporteTecnicoN2: {
      beginner: { ...aiImgBeginnerDefinitions },
      intermediate: { ...aiImgIntermediateDefinitions },
      expert: { ...aiImgExpertDefinitions },
    },
    operatorio: {
      beginner: { ...aiImgBeginnerDefinitions },
      intermediate: { ...aiImgIntermediateDefinitions },
      expert: { ...aiImgExpertDefinitions },
    },
    desenvolvimento: {
      beginner: { ...aiImgBeginnerDefinitions },
      intermediate: { ...aiImgIntermediateDefinitions },
      expert: { ...aiImgExpertDefinitions },
    },
    devOps: {
      beginner: { ...aiImgBeginnerDefinitions },
      intermediate: { ...aiImgIntermediateDefinitions },
      expert: { ...aiImgExpertDefinitions },
    },
    undefined: {
      beginner: { ...aiImgBeginnerDefinitions },
      intermediate: { ...aiImgIntermediateDefinitions },
      expert: { ...aiImgExpertDefinitions },
    },
  });
export const aiVdDefinitions: ROFieldRecord<
  typeof aiVdGeneralKeys
> = ObjectHelper.makeImmutable({
  gen: repeatedDefinitions.exp,
  //`${cts} utiliza para avaliar e determinar a qualidade dos vídeos gerados pela IA?`
  evl: {
    type: "select-multiple",
    options: [
      "Resolução e nitidez da imagem",
      "Taxa de quadros por segundo (FPS) adequada",
      "Coerência e fluidez na animação dos elementos",
      "Sincronia correta entre áudio e vídeo",
      "Realismo e fidelidade ao prompt",
      "Ausência de artefatos visuais (ex.: glitches, distorções, flickering)",
      "Cor e iluminação adequadas",
      "Expressões faciais e movimentos naturais",
      "Comparação com vídeos de referência",
      "Feedback de especialistas ou público-alvo",
    ],
    required,
  },
  tts: repeatedDefinitions.frq,
  cln: repeatedDefinitions.frq,
  int: repeatedDefinitions.txts,
});
export const aiVdBeginnerDefinitions: ROFieldRecord<
  typeof aiVdBeginnerKeys
> = ObjectHelper.makeImmutable({
  cnt: repeatedDefinitions.yn,
  set: repeatedDefinitions.exp,
  ...aiVdDefinitions,
});
const edt: FieldDescription = ObjectHelper.makeImmutable({
  type: "select-multiple",
  options: [
    "Adobe Premiere Pro",
    "DaVinci Resolve",
    "Final Cut Pro",
    "CapCut",
    "After Effects",
    "Runway ML",
    "Topaz Video Enhance AI (upscaling e melhorias)",
    "FFmpeg (conversão e processamento via linha de comando)",
    "VEED.io (edição online)",
    "Adobe Express Video",
    "Ferramentas nativas de edição (ex.: iMovie, Clipchamp)",
  ],
  required,
});
export const aiVdIntermediateDefinitions: ROFieldRecord<
  typeof aiVdIntermediateKeys
> = ObjectHelper.makeImmutable({
  //"Quais as principais ferramentas que você utiliza para editar ou ajustar os vídeos gerados por IAs?"
  edt,
  doc: repeatedDefinitions.yn,
  ing: repeatedDefinitions.txtl,
  ...aiVdDefinitions,
});
export const aiVdExpertDefinitions: ROFieldRecord<
  typeof aiVdExpertKeys
> = ObjectHelper.makeImmutable({
  adv: repeatedDefinitions.frq,
  //"Quais as principais ferramentas que você utiliza para editar ou ajustar os vídeos gerados por IAs?"
  edt,
  txt: repeatedDefinitions.txts,
  ...aiVdDefinitions,
});
export const aiVdEntryTypes: EntryTypeDictionary<VideoAiQuestionKey> =
  withFrozenLib({
    executivoAdministrativo: {
      beginner: { ...aiVdBeginnerDefinitions },
      intermediate: { ...aiVdIntermediateDefinitions },
      expert: { ...aiVdExpertDefinitions },
    },
    financeiro: {
      beginner: { ...aiVdBeginnerDefinitions },
      intermediate: { ...aiVdIntermediateDefinitions },
      expert: { ...aiVdExpertDefinitions },
    },
    comercial: {
      beginner: { ...aiVdBeginnerDefinitions },
      intermediate: { ...aiVdIntermediateDefinitions },
      expert: { ...aiVdExpertDefinitions },
    },
    marketing: {
      beginner: { ...aiVdBeginnerDefinitions },
      intermediate: { ...aiVdIntermediateDefinitions },
      expert: { ...aiVdExpertDefinitions },
    },
    suporteTecnicoN1: {
      beginner: { ...aiVdBeginnerDefinitions },
      intermediate: { ...aiVdIntermediateDefinitions },
      expert: { ...aiVdExpertDefinitions },
    },
    suporteTecnicoN2: {
      beginner: { ...aiVdBeginnerDefinitions },
      intermediate: { ...aiVdIntermediateDefinitions },
      expert: { ...aiVdExpertDefinitions },
    },
    operatorio: {
      beginner: { ...aiVdBeginnerDefinitions },
      intermediate: { ...aiVdIntermediateDefinitions },
      expert: { ...aiVdExpertDefinitions },
    },
    desenvolvimento: {
      beginner: { ...aiVdBeginnerDefinitions },
      intermediate: { ...aiVdIntermediateDefinitions },
      expert: { ...aiVdExpertDefinitions },
    },
    devOps: {
      beginner: { ...aiVdBeginnerDefinitions },
      intermediate: { ...aiVdIntermediateDefinitions },
      expert: { ...aiVdExpertDefinitions },
    },
    undefined: {
      beginner: { ...aiVdBeginnerDefinitions },
      intermediate: { ...aiVdIntermediateDefinitions },
      expert: { ...aiVdExpertDefinitions },
    },
  });
export const llmDefinitions: ROFieldRecord<
  typeof llmGeneralKeys
> = ObjectHelper.makeImmutable({
  //"Em que idiomas você costuma interagir com LLMs? (focado no contexto brasileiro)"
  lan: {
    type: "select-multiple",
    options: [
      "Português",
      "Inglês",
      "Espanhol",
      "Francês",
      "Alemão",
      "Chinês",
      "Outros",
    ],
    required,
  },
  val: repeatedDefinitions.frq,
  col: repeatedDefinitions.txtl,
});
export const llmBeginnerDefinitions: ROFieldRecord<
  typeof llmBeginnerKeys
> = ObjectHelper.makeImmutable({
  use: repeatedDefinitions.exp,
  sec: repeatedDefinitions.yn,
  ...llmDefinitions,
});
export const llmIntermediateDefinitions: ROFieldRecord<
  typeof llmIntermediateKeys
> = ObjectHelper.makeImmutable({
  ext: repeatedDefinitions.frq,
  stp: repeatedDefinitions.txtl,
  ...llmDefinitions,
});
export const llmExpertDefinitions: ROFieldRecord<
  typeof llmExpertKeys
> = ObjectHelper.makeImmutable({
  // "Quais destas práticas você adota para realizar o refinamento de resultados de prompts ao iniciar uma sessão com uma LLM?"
  fin: {
    type: "select-multiple",
    options: [
      "Uso de instruções detalhadas e contextuais",
      "Quebra do problema em subperguntas menores",
      "Testes iterativos de diferentes abordagens de prompt",
      "Ajuste da temperatura para variar a criatividade das respostas",
      "Uso de exemplos concretos dentro do prompt",
      "Refinamento baseado em feedback gerado pela própria IA",
      "Adição de restrições explícitas (ex.: evitar respostas longas ou ambíguas)",
    ],
    required,
  },
  int: repeatedDefinitions.yn,
  mlt: repeatedDefinitions.yn,
  ext: repeatedDefinitions.frq,
  ...llmDefinitions,
});
export const stLlmDefitinions: Readonly<{
  beginner: {
    [K in keyof typeof stLlmKeys.beginner]: FieldDescription;
  };
  intermediate: {
    [K in keyof typeof stLlmKeys.intermediate]: FieldDescription;
  };
  expert: {
    [K in keyof typeof stLlmKeys.expert]: FieldDescription;
  };
}> = ObjectHelper.makeImmutable({
  beginner: {
    ...llmBeginnerDefinitions,
    //"Quais destas abordagens você utiliza para orientar usuários de LLMs?"
    qna: {
      type: "select-multiple",
      options: [
        "Treinamentos práticos com demonstrações de uso e limitações do LLM",
        "Guias de boas práticas para redigir prompts eficazes",
        "Monitoramento de uso e feedback para ajustes contínuos",
        "Políticas de segurança e privacidade no uso de LLMs corporativos",
        "Sessões de suporte técnico e esclarecimento de dúvidas",
        "Documentação detalhada com exemplos de aplicação específica",
        "Diretrizes para verificação da precisão das respostas geradas",
      ],
      required,
    },
  },
  intermediate: {
    cor: {
      type: "select-multiple",
      required,
    },
    api: repeatedDefinitions.yn,
    ...llmIntermediateDefinitions,
  },
  expert: {
    cbt: repeatedDefinitions.yn,
    //"Quais destas abordagens você utiliza para orientar o fine-tuning de LLMs em ambientes corporativos?"
    ftn: {
      type: "select-multiple",
      options: [
        "Não participo de processos de fine-tuning de LLMs",
        "Definição clara de objetivos de personalização e escopo do modelo",
        "Coleta e curadoria de dados específicos para melhorar respostas",
        "Uso de frameworks especializados para treinamento (ex.: LoRA, PEFT)",
        "Implementação de avaliações contínuas para medir a precisão do modelo",
        "Validação cruzada dos dados para evitar viés e overfitting",
        "Criação de pipelines automatizados para atualização e versionamento",
        "Segurança e conformidade regulatória ao utilizar dados sensíveis",
        "Integração com APIs empresariais para personalização dinâmica",
      ],
      required,
    },
    ...llmExpertDefinitions,
  },
});
const stc: FieldDescription = ObjectHelper.makeImmutable({
    type: "select-multiple",
    options: [
      "Divisão explícita da tarefa em etapas lógicas antes da execução",
      "Utilização de prompts estruturados com linguagem clara e objetiva para guiar o raciocínio passo a passo",
      "Interação iterativa com o modelo para validar cada etapa antes da resposta final",
      "Aprimoramento contínuo do contexto do modelo via memorização de respostas parciais",
      "Uso de sub-modelos especializados para diferentes camadas do processo",
      "Validação cruzada das respostas antes da conclusão",
      "Automação de verificações de coerência em respostas intermediárias",
      "Utilização de Linguagens de demarcação (XML, HTML, Markdown, etc.)",
      "Listagem com índices numéricos ou alfabéticos",
    ],
    required,
  }),
  api: FieldDescription = ObjectHelper.makeImmutable({
    type: "select-multiple",
    options: [
      "Não integro LLMs em pipelines CI/CD",
      "Automação de testes unitários para validação de respostas geradas",
      "Monitoramento contínuo de desempenho e ajuste de modelos via feedback",
      "Versionamento e deploy automático de modelos ajustados",
      "Uso de APIs para integração dinâmica de modelos com outros serviços",
      "Treinamento e ajuste automatizado em resposta a mudanças no dataset",
      "Pipeline de validação ética e compliance para modelos antes do deploy",
      "Testes de adversarial robustness para detectar vulnerabilidades",
    ],
    required,
  });
export const llmEntryTypes: EntryTypeDictionary<LLMQuestionKey> =
  withFrozenLib({
    executivoAdministrativo: {
      beginner: {
        ...llmBeginnerDefinitions,
      },
      intermediate: {
        ...llmIntermediateDefinitions,
        doc: repeatedDefinitions.frq,
        mon: repeatedDefinitions.txtl,
      },
      expert: {
        ...llmExpertDefinitions,
        doc: repeatedDefinitions.frq,
        mon: repeatedDefinitions.txtl,
      },
    },
    financeiro: {
      beginner: {
        ...llmBeginnerDefinitions,
      },
      intermediate: {
        ...llmIntermediateDefinitions,
        rel: repeatedDefinitions.txts,
      },
      expert: {
        ...llmExpertDefinitions,
        ten: repeatedDefinitions.frq,
        rel: repeatedDefinitions.txts,
      },
    },
    comercial: {
      beginner: {
        ...llmBeginnerDefinitions,
        tip: repeatedDefinitions.txts,
      },
      intermediate: {
        //"Quais destes pontos críticos a cerca de políticas em relações comerciais você dá prioridade quando utilizando LLMs?"
        pol: {
          type: "select-multiple",
          options: [
            "Confidencialidade e proteção de dados sensíveis em comunicações geradas por IA",
            "Garantia de transparência e explicabilidade nas respostas geradas por LLMs",
            "Prevenção contra viés e discriminação em conteúdos automatizados",
            "Uso responsável para evitar manipulação ou desinformação comercial",
            "Restrições sobre tomada de decisões automatizadas sem supervisão humana",
            "Compliance com regulamentações de privacidade (ex.: GDPR, LGPD, CCPA)",
            "Monitoramento contínuo da precisão e veracidade das informações geradas",
            "Controle de permissões e acessos a LLMs em ambientes corporativos",
            "Mitigação de riscos jurídicos ao utilizar IA para contratos e negociações",
          ],
          required,
        },
        nlp: repeatedDefinitions.frq,
        doc: repeatedDefinitions.frq,
        ...llmIntermediateDefinitions,
      },
      expert: {
        adv: repeatedDefinitions.yn,
        prv: repeatedDefinitions.frq,
        api: repeatedDefinitions.frq,
        ...llmExpertDefinitions,
      },
    },
    marketing: {
      beginner: {
        ...llmBeginnerDefinitions,
      },
      intermediate: {
        pol: repeatedDefinitions.frq,
        nlp: repeatedDefinitions.yn,
        exc: repeatedDefinitions.yn,
        ...llmIntermediateDefinitions,
      },
      expert: {
        prv: repeatedDefinitions.yn,
        adv: repeatedDefinitions.yn,
        api: repeatedDefinitions.exp,
        ...llmExpertDefinitions,
      },
    },
    suporteTecnicoN1: {
      ...(stLlmKeys as any),
    },
    suporteTecnicoN2: {
      ...(stLlmKeys as any),
    },
    operatorio: {
      beginner: {
        ...llmBeginnerDefinitions,
      },
      intermediate: {
        lvl: repeatedDefinitions.lvl,
        ...llmIntermediateDefinitions,
      },
      expert: {
        lvl: repeatedDefinitions.lvl,
        cus: repeatedDefinitions.frq,
        ...llmExpertDefinitions,
      },
    },
    desenvolvimento: {
      beginner: {
        chat: repeatedDefinitions.frq,
        tips: repeatedDefinitions.txts,
        ...llmBeginnerDefinitions,
      },
      intermediate: {
        ctx: repeatedDefinitions.frq,
        int: repeatedDefinitions.frq,
        exp: repeatedDefinitions.exp,
        //"Qual dessas prática você adota com modelos de chain-of-thought para orientações de tarefas com múltiplas camadas?"
        stc,
        ...llmIntermediateDefinitions,
      },
      expert: {
        ftu: repeatedDefinitions.exp,
        //"Selecione as classes de algoritmos de Aprendizado de Máquina que você mais tem experiência desenvolvendo"
        crt: {
          type: "select-multiple",
          options: [
            "Não desenvolvo algoritmos de Aprendizado de Máquina",
            "Redes Neurais Artificiais (ANN, CNN, RNN, Transformers)",
            "Modelos Baseados em Árvores (Decision Trees, Random Forest, XGBoost)",
            "Modelos Estatísticos (Regressão Linear, Regressão Logística, SVM)",
            "Redes Bayesianas e Modelos Probabilísticos",
            "Modelos de Aprendizado por Reforço (Q-learning, DQN, PPO)",
            "Sistemas de Recomendação (Collaborative Filtering, Matrix Factorization)",
            "Técnicas de Aprendizado Não Supervisionado (Clustering, PCA, Autoencoders)",
          ],
          required,
        },
        //"Quais destas práticas você utiliza para integrar LLMs com pipelines CI/CD?"
        api,
        ...llmExpertDefinitions,
      },
    },
    devOps: {
      beginner: {
        cmt: repeatedDefinitions.frq,
        tip: repeatedDefinitions.frq,
        ...llmBeginnerDefinitions,
      },
      intermediate: {
        prp: repeatedDefinitions.frq,
        ctx: repeatedDefinitions.frq,
        stc,
        ...llmIntermediateDefinitions,
      },
      expert: {
        adv: repeatedDefinitions.yn,
        api,
        cst: repeatedDefinitions.txtl,
        ...llmExpertDefinitions,
      },
    },
    undefined: {
      beginner: {
        ...llmBeginnerDefinitions,
      },
      intermediate: {
        ...llmIntermediateDefinitions,
      },
      expert: {
        ...llmExpertDefinitions,
      },
    },
  });
//final
export const questionsMap = Object.freeze(
  new Map<roleType, QuestionsMap<complexityKeySet>>([
    eaAddQuestions,
    fnAddQuestions,
    cmAddQuestions,
    mktAddQuestions,
    stN1AddQuestions,
    stN2AddQuestions,
    opAddQuestions,
    devAddQuestions,
    devOpsAddQuestions,
    defAddQuestions,
    undefinedAddQuestions,
  ])
);
export const fieldsMap = Object.freeze(
  new Map<
    addQuestionsKey,
    EntryTypeDictionary<QuestionKey>
  >([
    ["docs", docEntryTypes],
    ["spreadSheets", ssEntryTypes],
    ["formBuilders", fmEntryTypes],
    ["cloudStorage", csEntryTypes],
    ["businessInteligence", biEntryTypes],
    ["Crms", crmEntryTypes],
    ["Erps", erpEntryTypes],
    ["planning", plnEntryTypes],
    ["audio", aiAdEntryTypes],
    ["image", aiImgEntryTypes],
    ["video", aiVdEntryTypes],
    ["llms", llmEntryTypes],
  ])
);
