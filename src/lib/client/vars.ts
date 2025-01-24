import { ClassesKey } from "../definitions/client/helpers";
import {
  AiBlocks,
  OfficeBlocks,
  roleQuestionsMap,
  roleType,
  techAppKey,
} from "../definitions/foundations";
import ObjectHelper from "../helpers/ObjectHelper";
const inps = `form-control`,
  texts = `${inps} form-text-area`,
  btn = `btn`,
  officeRangeds = `fsRanged fsOffice`;
export const classes: Readonly<Record<ClassesKey, string>> = {
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
  mainFsClasses: `border p-4 mb-3 formMainFs`,
  mainFsLegClasses: `legMainFs bold`,
  officePlatforms: `${officeRangeds} fsOfficePlatforms`,
  officeApps: `${officeRangeds} fsOfficeApps`,
  aiApps: `fsRanged fsAis`,
};
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
export enum friendlyAppName {
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
export const dictLabelsRange: {
  office: OfficeBlocks;
  ai: AiBlocks;
} = {
  office: {
    apps: {
      doc: friendlyAppName.doc,
      form: friendlyAppName.fm,
      spreadSheet: friendlyAppName.ss,
      storage: friendlyAppName.stg,
    },
    platforms: {
      bi: friendlyAppName.bi,
      crm: friendlyAppName.crm,
      erp: friendlyAppName.erp,
      planning: friendlyAppName.pln,
    },
  },
  ai: {
    audio: friendlyAiName.audio,
    image: friendlyAiName.image,
    llms: friendlyAiName.llms,
    video: friendlyAiName.video,
  },
};
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
  ms = "Quais ferramentas digitais ou sistemas virtuais você utiliza rotineiramente no trabalho?",
  as = "Caso utilize outros softwares no contexto anterior, mencione aqui:",
  pr = "Como você utiliza tecnologias para a organização e planejamento das suas atividades de trabalho?",
  op = "Existem, no seu trabalho, processos manuais ou repetitivos que você acredita que poderiam ser melhorados com tecnologias novas ou mais atualizadas?",
  ch = "Quais desafios você encontra ao utilizar as suas atuais tecnologias de trabalho? Comente comparando com outras tecnologias similares, se adequado, ou com maneiras como você gostaria de melhorar.",
  co = "De que forma você utiliza as tecnologias para colaborar e integrar com a sua equipe de trabalho?",
}
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
  ferramentasRedeBasicas: "Ferramentas de Rede Básicas (Ping, Tracert)",
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
  monitoramento: "Ferramentas de Monitoramento (Zabbix, Nagios)",
  endpointManagement: "Endpoint Management (SCCM)",
  antimalwareEnterpriseTools: "AntiMalware Enterprise Tools",
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
export const groupedApps: Readonly<Record<roleType, Array<techAppKey[]>>> = {
  executivoAdministrativo: [
    ["office365", "outlook", "slack", "googleDrive"],
    ["zoom", "trello", "sapErp", "msDynamicsCrm"],
    ["msTeams", "sharePoint", "powerBi", "yammer"],
    ["asana", "box", "oneDrive", "sapFico"],
  ],
  financeiro: [
    ["oracleFinance", "msExcel", "quickBooks", "totvsProtheus"],
    ["netSuite", "xero", "tableau", "sql"],
    ["python", "googleFinance", "eikonReuters", "bloombergTerminal"],
    ["freshBooks", "salesforce", "msDynamics365", "pipedrive"],
  ],
  comercial: [
    ["hubspot", "linkedInSalesNavigator", "mailchimp", "zoomInfo"],
    ["googleWorkspace", "excel", "whatsAppBusiness", "twilio"],
    ["googleAds", "facebookAds", "instagramAds", "googleAnalytics"],
    ["semRush", "rdStation", "canva", "wordpress"],
  ],
  marketing: [
    ["hootsuite", "buffer", "linkedInCampaignManager", "adobeIllustrator"],
    ["adobePhotoshop", "windows10_11", "macOs", "activeDirectoryBasic"],
    ["remoteDesktop", "ferramentasAntivirus", "zendesk", "chromeOs"],
    ["ios", "android", "ferramentasRedeBasicas", "sistemasTicketBasicos"],
  ],
  suporteTecnicoN1: [
    ["windowsServer", "linuxServer", "activeDirectoryAdvanced", "exchange"],
    ["serviceNow", "itilTools", "vmwareVirtualBox", "cisco"],
    ["firewallFortinet", "wireshark", "scripting", "monitoramento"],
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
};
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
// export const suggestionsGroupsMap: Map<
//   keyof typeof friendlyRoles,
//   Map<keyof typeof AcronymsDefaults, string[]>
// > = new Map([[]]);
export const jsErrorsFriendlyNames: Readonly<{
  [k: string]: Map<string, string>;
}> = ObjectHelper.deepFreeze({
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
});
