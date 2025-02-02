import {
  AudioAiQuestionsKeys,
  ClassesKey,
  CloudStorageQuestionsKeys,
  DocsQuestionsKeys,
  EntryTypeDictionary,
  FieldDescription,
  FormBuilderQuestionsKeys,
  ImageAiQuestionsKeys,
  KeysRecords,
  LLMQuestionsKeys,
  ROFieldRecord,
  SpreadsheetsQuestionsKeys,
  VideoAiQuestionsKeys,
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
export const AcronymsApps: Record<
  addQuestionsKey,
  keyof typeof friendlyAppName | keyof typeof friendlyAiName
> = ObjectHelper.deepFreeze({
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
export const groupedApps: Readonly<
  Record<roleType, Array<techAppKey[]>>
> = ObjectHelper.deepFreeze({
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
> = ObjectHelper.deepFreeze(
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
export const appGroupsDict: Record<
  RangeCtxComponentNames,
  addQuestionsKey
> = ObjectHelper.deepFreeze({
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
> = ObjectHelper.deepFreeze(
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
      "Use esse espaço para incluir informações que desejar sobre o seu trabalho com" +
        `${((): string => {
          try {
            const acronym = AcronymsApps[k];
            if (!acronym) return k;
            const friendly = [
              "audio",
              "image",
              "video",
              "llms",
            ].includes(k)
              ? friendlyAiName[
                  k as keyof typeof friendlyAiName
                ]
              : friendlyAppName[
                  k as keyof typeof friendlyAppName
                ];
            if (!friendly) return k;
            //@ts-ignore
            let reversed = friendly.split("").toReversed();
            return reversed
              .slice(reversed.indexOf("(") + 1)
              .join();
          } catch (e) {
            return k;
          }
        })()}` +
        "(Ex.: Possíveis automações e melhorias em plataformas de trabalho).",
    ])
  )
) as Readonly<Record<addQuestionsKey, string>>;
export const repeated: Readonly<{
  [K in repeatingKeys]: string;
}> = ObjectHelper.deepFreeze({
  fmt: "Qual é sua familiaridade com formatações simples (negrito, itálico, cabeçalho)?",
  sum: "Qual é sua familiaridade com funções matemáticas básicas (ex.: SOMA, MÉDIA, SOMASE)?",
  tmp: "De que forma você aproveita modelos (templates) prontos para criar documentos básicos?",
  mcr: "Que estratégias de scripts (VBA, AppScript, Python) você utiliza para automatizar tarefas repetitivas?",
  big: "Com que frequência você integra ou exporta dados para ferramentas de BI (ex.: Power BI, Data Studio)?",
  arr: "Você domina ou utiliza fórmulas matriciais (ex.: ÍNDICE, CORRESP) para cálculos avançados?",
  tbd: "Como você utiliza tabelas dinâmicas para analisar grandes quantidades de dados?",
});
function withFrozenLibreLabel<
  T extends Record<string, any>
>(dict: T, _case: addQuestionsKey): T {
  Object.keys(dict).forEach(k => {
    if (!libre[_case]) return;
    if (!("lib" in dict))
      (dict as any)[k] = {
        ...dict[k],
        lib: libre[_case],
      };
  });
  return ObjectHelper.deepFreeze(dict);
}
export const fmGeneralKeys = ObjectHelper.deepFreeze({
  tpl: "Com que frequência você utiliza templates prontos para elaborar questionários?",
  rsp: "Quais são suas formas preferenciais de salvar dados de um formulário?",
  emb: "Quais destas técnicas você utiliza com mais frequência para analisar resultados aglomerados por diversas submissões de um formulário?",
  plt: "Quais destas ferramentas você utiliza para construção de formulários?",
  slc: "Descreva livremente seu critério para escolher entre múltipla escolha (dropdowns, rádios, checkboxes) ou respostas paragrafadas",
});
export const fmBeginnerKeys = ObjectHelper.deepFreeze({
  crt: "Qual é o seu nível de experiência criando formulários para coleta de dados?",
  ...fmGeneralKeys,
});
export const fmIntermediateKeys = ObjectHelper.deepFreeze({
  ...fmGeneralKeys,
  aut: "Como você configura para envio de notificações ou respostas?",
  api: "Com que frequência você integra formulários a APIs para coleta ou envio de dados?",
});
export const fmExpertKeys = ObjectHelper.deepFreeze({
  ...fmGeneralKeys,
  dsh: "Como você conecta formulários a dashboards para relatórios em tempo real?",
});
export const csGeneralKeys = ObjectHelper.deepFreeze({
  syn: "Quais destas plaformas de armazenamento em nuvem você tem preferência em utilizar?",
  shr: "Quais são suas formas preferenciar de habilitar o compartilhamento de arquivos em nuvem com outras colaboradores?",
  org: "Descreva seus critérios para organizar pastas e arquivos armazenados em nuvem (ex.: Padrão de nomenclatura, Lógicas de Separação, etc.)",
});
export const csBeginnerKeys = ObjectHelper.deepFreeze({
  upl: "Qual é o seu nível de experiência em enviar arquivos para armazenamento em nuvem?",
  ...csGeneralKeys,
  acc: "Você já configurou permissões básicas (somente leitura, edição, tipos de restrição) para arquivos em nuvem?",
});
export const csIntermediateKeys = ObjectHelper.deepFreeze({
  ...csGeneralKeys,
  ver: "Como você lida com controle de versões para evitar perda de dados?",
  bck: "Com que frequência você executa backups de pastas ou arquivos importantes para nuvens?",
  sch: "Quais critérios você utiliza para garantir conformidade com normas de gestão de dados compartilhados (ex.: LGPD) quando trabalhando em nuvens?",
});
export const csExpertKeys = ObjectHelper.deepFreeze({
  ...csGeneralKeys,
  scp: "Quais destas tecnologias você utiliza para automatizar procedimentos de gestão, controle e governança de dados em nuvem?",
  sch: "Quais critérios você utiliza para garantir conformidade com normas de gestão de dados compartilhados (ex.: LGPD) quando trabalhando em nuvens?",
});
export const aiAdGeneralKeys = ObjectHelper.deepFreeze({
  gen: "Qual é o seu nível de experiência utilizando IA generativa para criar e manipular áudios?",
  evl: "Quais critérios você utiliza para avaliar e determinar a qualidade dos áudios gerados pela IA?",
  tts: "Com que frequência você utiliza IAs para recursos de text-to-spreech?",
  cln: 'Com que frequência você utiliza IAs para "clonagem" de vozes?',
  int: "Quais são os principais casos de uso para IA em áudio na sua rotina específica de trabalho?",
});
export const aiAdBeginnerKeys = ObjectHelper.deepFreeze({
  set: "Você já configurou um ambiente básico para captura e conversão de áudio com IA?",
  ...aiAdGeneralKeys,
});
export const aiAdIntermediateKeys = ObjectHelper.deepFreeze(
  {
    ...aiAdGeneralKeys,
    edt: "Quais as principais ferramentas que você utiliza para editar ou ajustar os áudios gerados por IAs?",
    doc: "Você documenta os processos e configurações utilizados para trabalhar com áudios gerados por IA?",
    ing: "Como você integra a IA de áudio em fluxos de trabalho mais complexos?",
  }
);
export const aiAdExpertKeys = ObjectHelper.deepFreeze({
  ...aiAdGeneralKeys,
  adv: "Com que frequência você utiliza integrações avançadas ou APIs para otimização de áudio via IA?",
  vol: "Você automatiza a produção e análise de grandes volumes de áudios com IA?",
  sec: "Como você implementa medidas de segurança para proteger áudios gerados por IA?",
});
export const aiImgGeneralKeys = ObjectHelper.deepFreeze({
  gen: "Qual é o seu nível de experiência utilizando IA generativa para criar e manipular imagens?",
  evl: "Quais critérios você utiliza para avaliar a qualidade das imagens geradas pelas IAs?",
  opt: "Quais ferramentas você utiliza para editar e otimizar a qualidade das imagens geradas pelas IAs?",
  fmt: "Quais ferramentas você converter o formato das imagens geradas por IAs?",
  col: "Com que frequência você utiliza IAs para aplicar ajustes automáticos de cor ou filtros em imagens?",
  int: "Quais são os principais casos de uso para IA em imagens na sua rotina específica de trabalho?",
});
export const aiImgBeginnerKeys = ObjectHelper.deepFreeze({
  set: "Você já configurou um ambiente básico para captura e edição simples de imagens com IA?",
  ...aiImgGeneralKeys,
});
export const aiImgIntermediateKeys =
  ObjectHelper.deepFreeze({
    doc: "Com que frequência você documenta os processos e configurações utilizados para trabalhar com imagens geradas por IA?",
    ing: "Como você integra as imagens geradas por IA em fluxos de trabalho mais complexos?",
    ...aiImgGeneralKeys,
  });
export const aiImgExpertKeys = ObjectHelper.deepFreeze({
  adv: "Com que frequência você utiliza integrações avançadas ou APIs para otimização de imagens via IA?",
  vol: "Você automatiza a produção e análise de grandes volumes de imagens (ao menos 1GB) com IAs?",
  sec: "Como você implementa medidas de segurança para proteger as imagens geradas por IA?",
  ...aiImgGeneralKeys,
});
export const aiVdGeneralKeys = ObjectHelper.deepFreeze({
  gen: "Qual é o seu nível de experiência utilizando IA generativa para criar e manipular vídeos?",
  evl: "Quais critérios você utiliza para avaliar e determinar a qualidade dos vídeos gerados pela IA?",
  tts: "Com que frequência você utiliza IAs Generativas com recursos de text-to-video?",
  cln: "Com que frequência você utiliza IAs para replicação de estilos visuais, como templates?",
  int: "Quais são os principais casos de uso para IA em vídeo na sua rotina específica de trabalho?",
});
export const aiVdBeginnerKeys = ObjectHelper.deepFreeze({
  cnt: "Você já utilizou IAs Generativas de Vídeo para transicionar diferentes imagens?",
  set: "Qual é o seu nível de experiência utilizando ferramentas de roteirização ou storyboards com ferramentas de IAs Generativas?",
  ...aiVdGeneralKeys,
});
export const aiVdIntermediateKeys = ObjectHelper.deepFreeze(
  {
    edt: "Quais as principais ferramentas que você utiliza para editar ou ajustar os vídeos gerados por IAs?",
    doc: "Você documenta os processos e configurações utilizados para trabalhar com vídeos gerados por IA?",
    ing: "Como você integra os vídeos gerados por IA em fluxos automáticos de trabalho?",
    ...aiVdGeneralKeys,
  }
);
export const aiVdExpertKeys = ObjectHelper.deepFreeze({
  adv: "Com que frequência você utiliza integrações avançadas (como chamadas de APIs) para envio automático de vídeos manipulados por IAs?",
  edt: "Quais as principais ferramentas que você utiliza para editar ou ajustar os vídeos gerados por IAs?",
  txt: "Descreva pontos críticos dos seus padrões de roteiração para geração de vídeos com IAs automáticas",
  ...aiVdGeneralKeys,
});
export const llmGeneralKeys = ObjectHelper.deepFreeze({
  lan: "Em que idiomas você costuma interagir com LLMs?",
  val: "Com que frequência você considera que as LLMs trazem retornos inadequados ou insatisfatórios?",
  col: "Descreva, de forma geral, os seus principais casos de uso (possíveis ou em prática) de LLMs na rotina de trabalho",
});
export const llmBeginnerKeys = ObjectHelper.deepFreeze({
  use: "Qual é o seu nível de experiência interagindo com LLMs (ChatGPT, Claude, DeepSeek, etc.)?",
  sec: "Você mascara dados sensíveis (Chaves de API, Senhas, Dados pessoais) em prompts?",
  ...llmGeneralKeys,
});
export const llmIntermediateKeys = ObjectHelper.deepFreeze({
  ...llmGeneralKeys,
  ext: "Com que frequência você solicita para que as LLMs proceseam dados diretamente em formatos de imagens bitmap (.png, .jpeg) ou PDFs?",
  stp: "Descreva, de forma geral, as principais diferenças na forma como você solicita prompts para modelos baseados em chain-of-thought (ChatGPT o1, DeepSeek R1) vs. outras famílias de modelos",
});
export const llmExpertKeys = ObjectHelper.deepFreeze({
  ...llmGeneralKeys,
  fin: "Quais destas práticas você adota para realizar o refinamento de resultados de prompts ao iniciar uma sessão com uma LLM?",
  int: "Você possui LLMs integradas em sistemas da sua rotina de trabalho, para uso de terceiros (ex.: como chatbots)?",
  mlt: "Você já participou ativamente do treinamento (aprendizado de máquina) de LLMs, seja no desenvolvimento direto ou estabelecimento de parâmetros?",
  ext: "Com que frequência você solicita para que as LLMs proceseam dados diretamente em formatos de imagens bitmap (.png, .jpeg) ou PDFs?",
});
export const eaDocsKeys = withFrozenLibreLabel(
  {
    beginner: {
      fmt: repeated.fmt,
      tmp: repeated.tmp,
      cbb: "Como você gerencia a colaboração de documentos entre membros de equipes?",
      frq: "Com que frequência você compartilha documentos para edição com colegas?",
      rdo: "Qual forma de resposta em formulário você tem preferência?",
      exp: "O quanto você é familizariado com exportações em diferentes formatos, como .pdf ou .txt?",
      prt: "Qual sua experiência em configurar documentos para impressão?",
      spl: "Como você separa seções ou capítulos em documentos longos?",
      edt: "Você prefe edições de documentos online ou offline?",
      syn: "De que forma você sincroniza documentos em diferentes dispositivos?",
    },
    intermediate: {
      tpl: "Como você cria sumários automáticos ou referências cruzadas em documentos extensos?",
      rev: "De que maneira você controla alterações e histórico de versões para múltiplos revisores?",
      mac: "Quais tecnologias você utiliza parar criar macros ou automações para padronizar relatórios?",
      sgn: "Com que frequência você assina documentos digitalmente?",
      stt: "Que tipo de estratégia e ferramentas você utiliza para formatação do layout de edição?",
      idx: "Qual é a sua familaridade gerando índices remissivos automaticamente?",
      fmt: "De que maneira você utiliza estilos personalizados para padronizar relatórios?",
      crt: "Com que frequência você edita documentos colaborativos com permissões restritas por usuário?",
      exp: "Qual sua experiência em exportar documentos com configurações avançadas (marcas d’água, proteção)?",
      api: "Com que frequência você integra editores de texto com APIs externas (ex.: para preenchimento automático)?",
    },
    expert: {
      vba: repeated.mcr,
      sec: "Com que frequência você lida com permissões avançadas, criptografia ou restrições de edição?",
      stl: "Descreva como você gerencia estilos de parágrafo, índice remissivo e formatação de layout altamente customizada.",
      big: "Com que frequência você integra editores de texto a sistemas externos (APIs, bancos de dados)?",
      adv: "Que técnicas avançadas (campos dinâmicos, mala direta) você utiliza em documentos corporativos?",
      mlc: "Você já aplicou aprendizado de máquina para gerar ou analisar texto automaticamente?",
      int: "Com que frequência integração com plataformas como SharePoint, OneDrive ou GitHub para gerenciamento de documentos?",
      tem: "Com que frequência você gerencia templates corporativos com restrições para diferentes departamentos?",
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
      frq: "Com que frequência você configura planilhas para controle de dados simples?",
      col: "Como você colore ou categoriza células para destacar informações importantes?",
      spr: "Você prefere responder perguntas por meio de seletores (radio, select) ou textos longos?",
      fil: "De que modo você filtra ou classifica dados de forma simples?",
      frz: "Como você congela linhas ou colunas em planilhas?",
      fmt: "Você já utilizou formatação condicional em planilhas simples?",
      cpy: "Qual é o seu nível de experiência com copiar/colar fórmulas e preservar referências absolutas?",
      ins: "De que maneira você insere gráficos básicos para ilustrar dados?",
      shs: "Você trabalha frequentemente com abas múltiplas em planilhas?",
    },
    intermediate: {
      piv: repeated.tbd,
      adv: "Com que frequência você integra dados de outras fontes (CSV, BD) na planilha?",
      prc: "Em que frequência você cria fórmulas intermediárias (SE, PROCV, CONCAT) para automação?",
      cht: "Que tipos de gráficos você costuma gerar para visualização?",
      col: "Como você colabora com outros usuários simultaneamente (co-edit, proteções)?",
      tbl: "Com que frequência voceê cria tabelas formatadas para facilitar análises e filtros?",
      spl: "Como você divide dados em colunas separadas (Texto para Colunas)?",
      lnk: "Qual sua experiência em vincular células entre diferentes planilhas?",
      imp: "Com que frequência você importa dados de fontes online para análises em tempo real?",
      aud: "De que forma você audita ou depura fórmulas para corrigir erros?",
    },
    expert: {
      mcr: repeated.mcr,
      big: repeated.big,
      arr: repeated.arr,
      dbi: "Descreva como você conecta planilhas a bancos de dados SQL ou APIs, se aplicável.",
      prf: "Com que frequência você faz tuning de performance em planilhas com dezenas de abas e fórmulas complexas?",
      sch: "Com que frequência você utiliza scripts para agendar atualizações automáticas de dados?",
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
      big: "De que maneira você lida com grandes volumes de dados e distribuição eficiente entre equipes?",
    },
  },
  "cloudStorage"
);
export const eaBiKeys = withFrozenLibreLabel(
  {
    beginner: {
      dat: "Como você conecta dados básicos (ex.: planilhas) para criar relatórios iniciais em BI?",
      grf: "Que tipos de gráficos ou visuais simples você costuma configurar para análise rápida?",
      fil: "Você aplica filtros ou segmentações em dashboards para focar em subsets de dados?",
      rpt: "Com que frequência você gera relatórios em PDF ou apresenta painéis para colegas?",
      col: "De que forma você permite que outros usuários colaborem ou vejam seus relatórios de BI?",
    },
    intermediate: {
      mdl: "Como você modela dados (criação de relacionamentos, colunas calculadas) em um nível intermediário?",
      seg: "Você configura segurança em nível de linha ou permissões por usuário em painéis?",
      adv: "Você cruza dados de múltiplas fontes (ex.: ERP + planilhas) num único relatório analítico?",
      ref: "Em que frequência você agenda atualizações automáticas e resolve problemas de refresh?",
      das: "Como você organiza dashboards com KPIs de negócio e links para relatórios detalhados?",
    },
    expert: {
      big: "Você lida com grandes volumes de dados (ex.: milhões de registros) e otimiza performance no BI?",
      pre: "Como você executa análises preditivas ou scripts R/Python dentro do BI para insights avançados?",
      gov: "De que maneira você implementa governança (workspaces, acesso hierárquico) e documenta cada relatório?",
      api: "Você já integrou APIs de BI (REST) para push datasets ou para automação de deployment?",
      adv: "Qual sua experiência em criar visuais customizados (ex.: TypeScript, D3.js) dentro da ferramenta de BI?",
    },
  },
  "businessInteligence"
);
export const eaCrmKeys = withFrozenLibreLabel(
  {
    beginner: {
      reg: "Como você registra leads ou contatos básicos no CRM (ex.: Microsoft Dynamics)?",
      seg: "Em que frequência você segmenta clientes (região, tamanho da empresa) para campanhas simples?",
      not: "Você utiliza notificações (ex.: e-mail) quando um lead muda de estágio?",
      rel: "Qual sua experiência em gerar relatórios iniciais (pipeline de vendas) no CRM?",
      usr: "De que forma você adiciona novos usuários com permissões básicas no sistema?",
    },
    intermediate: {
      wfl: "Como você cria fluxos de trabalho (ex.: mudar status do lead automaticamente) para otimizar vendas?",
      adv: "Você personaliza campos e layouts intermediários (ex.: campos obrigatórios, scoring) no CRM?",
      api: "Em que frequência você integra o CRM com outras plataformas (ex.: e-mail marketing, Slack)?",
      seg: "Como você configura segmentações avançadas (ex.: leads inativos há 30 dias)?",
      scp: "Você automatiza alertas (ex.: lead estagnado) para que a equipe tome ação?",
    },
    expert: {
      prg: "Você programa scripts ou plugins avançados (Apex, TOTVS, etc.) para lógica customizada no CRM?",
      big: "De que forma você cruza dados do CRM com Big Data ou IA para prever demandas e oportunidades?",
      per: "Como você lida com permissões altamente granulares (ex.: visibilidade de campos, logs de alteração)?",
      mig: "Em que frequência você migra dados massivos de outro CRM, limpando duplicados e conflitos?",
      gov: "Você segue governança e compliance (LGPD) no CRM, auditando logs e definindo retenção de dados?",
    },
  },
  "Crms"
);
export const eaErpKeys = withFrozenLibreLabel(
  {
    beginner: {
      nav: "De que forma você navega pelos módulos básicos (ex.: compras, vendas) em um ERP (SAP, TOTVS)?",
      cad: "Você cadastra produtos, clientes ou fornecedores simples sem grandes customizações?",
      doc: "Em que frequência você emite documentos fiscais ou relatórios básicos de estoque no ERP?",
      sup: "Como você solicita suporte quando encontra falhas simples (ex.: tela travada) no sistema?",
      rpl: "Você gera relatórios de pequeno porte para checar dados de pedidos ou vendas rapidamente?",
    },
    intermediate: {
      wfl: "Como você configura fluxos intermediários de aprovação (ex.: requisição -> aprovação) no ERP?",
      sec: "Você define permissões intermediárias (módulo de vendas vs. módulo de estoque) para cada perfil?",
      mig: "Em que frequência você lida com importação de dados externos (ex.: planilhas) para dentro do ERP?",
      rep: "Qual sua experiência em personalizar relatórios (ex.: TOTVS Reports, SAP Crystal) para análises específicas?",
      int: "De que forma você integra o ERP com outras soluções (ex.: e-commerce, BI) e monitora possíveis conflitos?",
    },
    expert: {
      dev: "Você implementa scripts de customização profunda (ABAP, TOTVS fluig)? Em que situações?",
      aud: "Como você rastreia logs e auditorias para atender conformidade (SOX, LGPD) em dados críticos do ERP?",
      ha_: "Qual sua abordagem para alta disponibilidade (cluster, failover) e zero downtime no ERP?",
      upg: "Em que frequência você gerencia updates de versão do ERP e executa testes de regressão para evitar problemas?",
      big: "De que maneira você lida com grandes volumes transacionais e cria processos de otimização de performance no ERP?",
    },
  },
  "Erps"
);
export const eaPlnKeys = withFrozenLibreLabel(
  {
    beginner: {
      brd: "Como você cria quadros básicos (Trello, Planner) para organizar tarefas do dia a dia?",
      col: "De que forma você convida outras pessoas para participar do quadro e ver as atualizações?",
      prz: "Você define prazos em cada cartão/tarefa? Em que frequência revisa essas datas?",
      lab: "Como você usa etiquetas ou categorias para diferenciar tipos de tarefas?",
      not: "Você habilita notificações quando há mudanças em status de tarefas? (Sim/Não)",
    },
    intermediate: {
      aut: "Você cria automações (ex.: mover cartão ao concluir checklist) para agilizar fluxo de trabalho?",
      rep: "Em que frequência você gera relatórios ou gráficos (ex.: burn-down) para ver progresso das tarefas?",
      sec: "Como você gerencia permissões intermediárias (ex.: time X só lê, time Y pode editar) num board?",
      dep: "Você define dependências entre tarefas (ex.: uma só começa quando a anterior acaba)?",
      wbk: "De que modo você integra webhooks com outras ferramentas (Slack, e-mail) para notificações automáticas?",
    },
    expert: {
      adv: "Como você lida com múltiplos quadros complexos, subdividindo projetos grandes em várias frentes?",
      scr: "Você segue metodologias avançadas (Scrum, Kanban) e gera métricas (velocidade, throughput)?",
      apr: "Em que frequência você implementa workflows de aprovação entre diferentes níveis hierárquicos?",
      dash: "Como você consolida dados de vários quadros em um dashboard (ex.: Power BI, Google Data Studio)?",
      scp: "De que forma você integra scripts ou APIs para automatizar criação e movimentação de tasks em massa?",
    },
  },
  "planning"
);
export const eaAiAdKeys = withFrozenLibreLabel(
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
export const eaAiImgKeys = withFrozenLibreLabel(
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
export const eaAiVdKeys = withFrozenLibreLabel(
  {
    beginner: {
      rec: "Como você cria vídeos curtos (ex.: usando webcam + IA de edição) para ilustrações ou apresentações rápidas?",
      edb: "Você faz edições simples (corte, trim) antes de publicar vídeos que foram gerados ou aprimorados pela IA?",
      frq: "Com que frequência você envia vídeos gerados por IA (ex.: videoclipes sintéticos) a plataformas (Drive, YouTube)?",
      aud: "Você avalia se o áudio está coerente quando a IA insere locuções ou dublagens automáticas no vídeo?",
      frm: "De que forma você seleciona formatos (MP4, MOV) e resolução após a IA produzir o vídeo?",
    },
    intermediate: {
      eff: "Você aplica efeitos (transições, legendas) com auxílio de IA (ex.: remoção de fundo) em editores intermediários?",
      str: "Como você faz streaming ao vivo com suporte de IA (ex.: avatares, cenários virtuais) para grupos de trabalho?",
      net: "Em que frequência você encontra gargalos de rede ao carregar ou compartilhar vídeos criados ou modificados pela IA?",
      sub: "Você gera legendas automaticamente via IA para facilitar compreensão (ex.: pessoas sem áudio)?",
      mix: "De que modo você mescla faixas de áudio e elementos visuais criados por IA num único projeto de vídeo?",
    },
    expert: {
      adv: "Você usa editores profissionais (Adobe Premiere, DaVinci) com plugins de IA (ex.: correção de cor avançada, tracking inteligente)?",
      enc: "Como você configura encoding sofisticado (bitrate, codecs) para equilibrar qualidade vs. tamanho em vídeos gerados pela IA?",
      api: "Em que nível você integra plataformas de IA (ex.: Runway, Sora) via APIs para automação de etapas do vídeo?",
      scp: "Você executa scripts (FFmpeg) para pós-processar em lote diversos clipes gerados pela IA (ex.: inserir marcas d’água)?",
      ai_: "De que maneira você explora IA (ex.: remoção de objetos, geração de cenários) em vídeos institucionais complexos?",
    },
  },
  "video"
);
export const eaLlmKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...llmBeginnerKeys,
    },
    intermediate: {
      ...llmIntermediateKeys,
      mon: "Como você considera que as LLMs podem beneficar suas práticas de monitoramento de equipes e designação de tarefas?",
      doc: "Com que frequência você utiliza LLMs para produzir ou analisar relatórios e documentos corporativos?",
    },
    expert: {
      ...llmExpertKeys,
      mon: "Como você considera que as LLMs podem beneficar suas práticas de monitoramento de equipes e designação de tarefas?",
      doc: "Com que frequência você utiliza LLMs para produzir ou analisar relatórios e documentos corporativos?",
    },
  },
  "llms"
);
export const executivoAdministrativoAddQuestions =
  ObjectHelper.deepFreeze([
    "executivoAdministrativo",
    new Map([
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
      rev: "Com que frequência você revisa contratos ou relatórios de texto para ver se há erros de digitação ou valores trocados?",
      upg: "Quais destas ferramentas você utiliza para gerenciar versões de documentos e relatórios?",
      cmt: "Quais recursos você utiliza para comentar e fazer sugestões em documentos e relatórios?",
    },
    intermediate: {
      stl: "Quais são as suas práticas para padronizar estilos (cabeçalho, corpo, rodapé) em relatórios financeiros intermediários?",
      trc: "Como você controla versões quando várias pessoas revisam o mesmo documento simultaneamente?",
      ast: "Você já configurou assinatura digital em relatórios financeiros? Como?",
      dbl: "De que maneira você integra dados de planilhas ou bancos de dados em documentos de texto?",
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
      frq: "Com que frequência você configura planilhas para registrar receitas e despesas?",
      col: "Como você marca células com cores para diferenciar gastos fixos de variáveis?",
      cat: "De que modo você categoriza transações (alimentação, transporte, etc.) de forma simples?",
      fil: "Como você utiliza filtros básicos para visualizar apenas certos períodos ou tipos de despesas?",
    },
    intermediate: {
      tab: repeated.tbd,
      adv: "Como você integra planilhas financeiras a outras fontes de dados, como extratos bancários?",
      dev: "Com que frequência você usa fórmulas intermediárias (PROCV, SE, TIR) para simulações financeiras?",
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
      mid: "Com que frequência você integra dados financeiros armazenados na nuvem a mecanismos de BI ou machine learning?",
      drs: "Quais destas técnicas você adota para recuperar rapidamente documentos críticos em caso de desastre ou falha de acesso à nuvem?",
      org: "Descreva seus critérios gerais para organizar pastas de extratos, demonstrações e notas fiscais para facilitar a busca",
    },
  },
  "cloudStorage"
);
export const fnBiKeys = withFrozenLibreLabel(
  {
    beginner: {
      dat: "Você costuma importar dados de vendas (planilhas, CSV) para ferramentas de BI como Power BI ou Tableau?",
      vis: "Como você gera visualizações iniciais (gráfico de barras, pizza) para entender volume de vendas?",
      flt: "Você aplica filtros simples (ex.: período, região) para refinar os dados exibidos?",
      shr: "De que forma você compartilha relatórios básicos de BI com colegas (link, PDF)?",
      usr: "Você cria usuários ou permissões específicas para equipe comercial ver somente seus números?",
    },
    intermediate: {
      mdl: "Como você modela dados de várias origens (CRM, planilhas) em uma ferramenta de BI?",
      drv: "Você cria medidas ou colunas calculadas para analisar métricas intermediárias (ex.: taxa de conversão)?",
      seg: "Em que frequência você utiliza segmentações por produto, região ou vendedor para ver resultados?",
      col: "Como você colabora com o time para criar dashboards compartilhados?",
      aut: "Você configurou atualizações automáticas desses dados (ex.: daily refresh)?",
    },
    expert: {
      dax: "Você domina expressões avançadas (ex.: DAX no Power BI) para análises de funil de vendas complexos?",
      big: "Como você lida com altos volumes de dados (ex.: milhares de leads, milhões de registros) sem perda de performance?",
      mlc: "Você integra scripts de R ou Python para previsões de receita ou churn dentro do BI?",
      adv: "De que forma você publica dashboards para clientes externos ou parceiros (row-level security)?",
      gov: "Como você garante governança (versionamento, segurança) em dashboards críticos de vendas?",
    },
  },
  "businessInteligence"
);
export const fnCrmKeys = withFrozenLibreLabel(
  {
    beginner: {
      mgr: "Como você registra leads e contatos básicos no CRM?",
      sht: "Com que frequência você anota interações como e-mails ou ligações com potenciais clientes?",
      seg: "De que forma você segmenta clientes (ex.: tipo de indústria, porte da empresa)?",
      rel: "Você gera relatórios simples de status de negociação?",
      col: "Como você compartilha dados de leads com outros membros da equipe?",
    },
    intermediate: {
      scg: "Você configura scoring de leads (ex.: probabilidade de fechar) para priorizar?",
      aut: "De que modo você cria automações (ex.: mover lead no pipeline quando recebe e-mail)?",
      syn: "Como você sincroniza dados do CRM com planilhas ou BI para análise mais aprofundada?",
      pro: "Qual é sua prática para usar pipelines de vendas detalhados (ex.: pré-venda, proposta, fechamento)?",
      rep: "Você gera relatórios intermediários (ex.: vendedor x volume de vendas, taxa de conversão por etapa)?",
    },
    expert: {
      api: "Você integra CRM com outras plataformas (ex.: sistemas de ticket, ERP) via API?",
      mlc: "Você utiliza IA para prever data de fechamento ou filtrar leads mais quentes?",
      cst: "Como você customiza o CRM (scripts, plugins) para adaptar 100% ao fluxo de vendas?",
      adv: "De que forma você gerencia funis paralelos (ex.: diferentes linhas de produto) e subfunis?",
      big: "Você analisa grandes históricos de leads para identificar padrões e gerar insights preditivos?",
    },
  },
  "Crms"
);
export const fnErpKeys = withFrozenLibreLabel(
  {
    beginner: {
      bas: "Qual é sua familiaridade com módulos básicos de um ERP (cadastro de clientes, pedidos)?",
      mov: "Você já acompanha status de pedidos no ERP (pendente, faturado, entregue)?",
      usr: "Como você gerencia usuários ou permissões simples para equipe de vendas?",
      rep: "Você gera relatórios de pedidos ou volume de vendas diretamente no ERP?",
      imp: "Você importou dados de planilhas externas (lista de clientes) para o ERP?",
    },
    intermediate: {
      cst: "De que forma você customiza campos ou layouts para atender necessidades do comercial?",
      inf: "Você integra dados do ERP com softwares de análise (BI) ou outras planilhas?",
      wfl: "Como você define fluxos de aprovação para pedidos (ex.: pedido de grande valor requer ok do gerente)?",
      sec: "Qual é sua prática para criar perfis de segurança distintos (cada vendedor vê só seus pedidos)?",
      tch: "Você já lidou com integrações via API para atualizar pipeline de vendas em tempo real?",
    },
    expert: {
      mod: "Quais módulos avançados (ex.: gestão de campanhas, comissionamento) você domina no ERP?",
      spt: "Como você soluciona problemas complexos (ex.: duplicidade de pedido) dentro do ERP?",
      mig: "Você participou de migrações de ERP (ex.: TOTVS para SAP) visando melhoria do comercial?",
      eff: "De que forma você mede eficiência e performance do time de vendas usando dados do ERP?",
      adv: "Quais customizações avançadas (scripts ABAP, TOTVS) são feitas para gerenciar grandes contas comerciais?",
    },
  },
  "Erps"
);
export const fnPlnKeys = withFrozenLibreLabel(
  {
    beginner: {
      tsk: "Como você cria listas de tarefas relativas a metas de vendas e follow-ups?",
      col: "Você compartilha o plano comercial com o gestor e colegas?",
      cal: "Com que frequência você usa calendário para prazos (ex.: renovar contrato, contatar leads)?",
      lbl: "Você marca prioridades (ex.: alta, média) em tarefas ou leads críticos?",
      upd: "De que modo você atualiza status (em prospecção, em negociação, concluído) no planejamento?",
    },
    intermediate: {
      wfl: "Como você estabelece fluxos (ex.: lead captado -> qualificação -> proposta -> assinatura) dentro do sistema de planejamento?",
      not: "Você configura alertas para datas importantes, como expiração de proposta?",
      col: "De que maneira a equipe comercial trabalha colaborativamente no mesmo board/plano?",
      rpr: "Quais relatórios de progresso (ex.: leads ganhos, leads perdidos) você gera?",
      int: "Você integra a plataforma de planejamento com planilhas ou dashboards para ver metas em tempo real?",
    },
    expert: {
      adv: "Como você cria painéis avançados para acompanhar OKRs e resultados de vendas semanais/mensais?",
      aut: "Você utiliza automações que movem tarefas no funil comercial conforme determinadas regras (ex.: data-limite)?",
      pri: "De que forma você prioriza oportunidades de maior valor ou com data de fechamento próxima?",
      bus: "Você já integrou processos de planejamento com BI para replanejar metas de acordo com performance real?",
      sec: "Quais práticas de segurança e governança aplicam-se quando múltiplos times (marketing, vendas) acessam o plano comercial?",
    },
  },
  "planning"
);
export const fnAiAdKeys = withFrozenLibreLabel(
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
export const fnAiImgKeys = withFrozenLibreLabel(
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
export const fnAiVdKeys = withFrozenLibreLabel(
  {
    beginner: {
      tut: "Você usa IA para criar vídeos tutoriais de processos financeiros simples automaticamente?",
      rec: "Como a IA auxilia na gravação de tela para explicar planilhas ou dashboards financeiros?",
      edi: "Você utiliza IA para cortar ou ajustar vídeos que explicam informações financeiras?",
      shw: "Como a IA ajuda a exibir gráficos e dashboards financeiros em apresentações de vídeo?",
      sld: "Você converte slides financeiros em vídeos com a ajuda de IA para facilitar o consumo?",
    },
    intermediate: {
      anl: "Como você utiliza IA para criar animações explicativas de tendências financeiras?",
      tts: "Você utiliza IA para narrar relatórios financeiros com voz humana ou TTS?",
      eda: "De que forma a IA ajuda a sincronizar trilhas sonoras ou efeitos em vídeos financeiros?",
      sub: "Você gera legendas automáticas em vídeos financeiros com a ajuda de IA?",
      mlc: "Como a IA cria vídeos instrutivos a partir de roteiros de relatórios financeiros complexos?",
    },
    expert: {
      brd: "Como você usa IA para editar gravações longas de reuniões financeiras com highlights relevantes?",
      int: "Você utiliza IA para integrar vídeos financeiros a dashboards interativos em tempo real?",
      scn: "Como a IA ajuda na criação de cenários virtuais (chroma key) para apresentações financeiras?",
      adv: "De que forma você utiliza IA para criar vídeos financeiros complexos com transições avançadas?",
      sec: "Você usa IA para restringir acesso a vídeos confidenciais com dados financeiros sensíveis?",
    },
  },
  "video"
);
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
      ten: "Com que frequência você usa LLMs para prever vendas, estimar taxa de conversão ou analisar tendências do mercado?",
      rel: "Como você considera que LLMs podem auxiliar diretamente na produção de relatórios e documentos financeiros?",
    },
  },
  "llms"
);
export const financeiroAddQuestions =
  ObjectHelper.deepFreeze([
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
      cpl: "Com que frequência você compila dados de vendas ou contatos em documentos textuais?",
      lbl: "Quais destas técnicas você utiliza para realçar segmentos de textos?",
      sig: "Com que frequência você utiliza assinaturas digitais?",
      hst: "De que forma você mantém histórico de versões de ofertas enviadas a clientes?",
    },
    intermediate: {
      ref: "Como você faz referência cruzada entre cláusulas em documentos de proposta (ex.: anexo, condição especial)?",
      rev: "De que modo você controla comentários e revisões quando vários vendedores atualizam o mesmo arquivo?",
      mac: "Você utiliza macros ou scripts para preencher automaticamente dados de clientes em contratos?",
      sty: "Qual sua prática para padronizar estilos e layout em documentos de ofertas comerciais?",
      adv: "Com que frequência você exporta os documentos em formato PDF?",
    },
    expert: {
      api: "De que forma você integra editores de texto a sistemas comerciais (ex.: CRM) para geração automática de contratos?",
      cnd: "Como você lida com campos dinâmicos e mala direta para dezenas de clientes simultaneamente?",
      sec: "Com que frequência você aplica criptografia ou permissões avançadas em documentos de alto valor?",
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
      lis: "Quais destas técnicas você utiliza para manter listas de leads ou clientes em planilhas simples?",
      pro: "Você usa planilhas para projeções básicas de vendas mensais?",
      seg: "Quais estratégia você usa para filtrar e segmentar clientes?",
      col: "De que modo você realça linhas ou colunas importantes (ex.: cliente prioritário)?",
    },
    intermediate: {
      piv: repeated.tbd,
      adv: "Você integra planilhas com CRM ou outras fontes para atualizar dados de vendas (Sim/Não)?",
      for: "Com que frequência você utiliza fórmulas intermediárias (PROCV, SE, SOMASE) para acompanhamento de metas?",
      cht: "Que gráficos você gera para ilustrar desempenho comercial ou comparação de metas?",
      col: "Como você colabora com outros vendedores ou gerentes numa única planilha, sem sobrescrever dados?",
    },
    expert: {
      mac: repeated.mcr,
      big: repeated.big,
      seg: "Você cria segmentações avançadas e dashboards usando planilhas?",
      dbi: "De que maneira você obtém informações de bancos de dados ou APIs (ex.: taxas de câmbio, cotações)?",
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
      mig: "Quais destas estratégias você adota para migrar grandes repositórios de documentos comerciais de um serviço um serviço em nuvem para outro?",
    },
  },
  "cloudStorage"
);
export const cmBiKeys = withFrozenLibreLabel(
  {
    beginner: {
      dat: "Você costuma importar dados de vendas (planilhas, CSV) para ferramentas de BI como Power BI ou Tableau?",
      vis: "Como você gera visualizações iniciais (gráfico de barras, pizza) para entender volume de vendas?",
      flt: "Você aplica filtros simples (ex.: período, região) para refinar os dados exibidos?",
      shr: "De que forma você compartilha relatórios básicos de BI com colegas (link, PDF)?",
      usr: "Você cria usuários ou permissões específicas para equipe comercial ver somente seus números?",
    },
    intermediate: {
      mdl: "Como você modela dados de várias origens (CRM, planilhas) em uma ferramenta de BI?",
      drv: "Você cria medidas ou colunas calculadas para analisar métricas intermediárias (ex.: taxa de conversão)?",
      seg: "Em que frequência você utiliza segmentações por produto, região ou vendedor para ver resultados?",
      col: "Como você colabora com o time para criar dashboards compartilhados?",
      aut: "Você configurou atualizações automáticas desses dados (ex.: daily refresh)?",
    },
    expert: {
      dax: "Você domina expressões avançadas (ex.: DAX no Power BI) para análises de funil de vendas complexos?",
      big: "Como você lida com altos volumes de dados (ex.: milhares de leads, milhões de registros) sem perda de performance?",
      mlc: "Você integra scripts de R ou Python para previsões de receita ou churn dentro do BI?",
      adv: "De que forma você publica dashboards para clientes externos ou parceiros (row-level security)?",
      gov: "Como você garante governança (versionamento, segurança) em dashboards críticos de vendas?",
    },
  },
  "businessInteligence"
);
export const cmCrmKeys = withFrozenLibreLabel(
  {
    beginner: {
      mgr: "Como você registra leads e contatos básicos no CRM?",
      sht: "Com que frequência você anota interações como e-mails ou ligações com potenciais clientes?",
      seg: "De que forma você segmenta clientes (ex.: tipo de indústria, porte da empresa)?",
      rel: "Você gera relatórios simples de status de negociação?",
      col: "Como você compartilha dados de leads com outros membros da equipe?",
    },
    intermediate: {
      scg: "Você configura scoring de leads (ex.: probabilidade de fechar) para priorizar?",
      aut: "De que modo você cria automações (ex.: mover lead no pipeline quando recebe e-mail)?",
      syn: "Como você sincroniza dados do CRM com planilhas ou BI para análise mais aprofundada?",
      pro: "Qual é sua prática para usar pipelines de vendas detalhados (ex.: pré-venda, proposta, fechamento)?",
      rep: "Você gera relatórios intermediários (ex.: vendedor x volume de vendas, taxa de conversão por etapa)?",
    },
    expert: {
      api: "Você integra CRM com outras plataformas (ex.: sistemas de ticket, ERP) via API?",
      mlc: "Você utiliza IA para prever data de fechamento ou filtrar leads mais quentes?",
      cst: "Como você customiza o CRM (scripts, plugins) para adaptar 100% ao fluxo de vendas?",
      adv: "De que forma você gerencia funis paralelos (ex.: diferentes linhas de produto) e subfunis?",
      big: "Você analisa grandes históricos de leads para identificar padrões e gerar insights preditivos?",
    },
  },
  "Crms"
);
export const cmErpKeys = withFrozenLibreLabel(
  {
    beginner: {
      bas: "Qual é sua familiaridade com módulos básicos de um ERP (cadastro de clientes, pedidos)?",
      mov: "Você já acompanha status de pedidos no ERP (pendente, faturado, entregue)?",
      usr: "Como você gerencia usuários ou permissões simples para equipe de vendas?",
      rep: "Você gera relatórios de pedidos ou volume de vendas diretamente no ERP?",
      imp: "Você importou dados de planilhas externas (lista de clientes) para o ERP?",
    },
    intermediate: {
      cst: "De que forma você customiza campos ou layouts para atender necessidades do comercial?",
      inf: "Você integra dados do ERP com softwares de análise (BI) ou outras planilhas?",
      wfl: "Como você define fluxos de aprovação para pedidos (ex.: pedido de grande valor requer ok do gerente)?",
      sec: "Qual é sua prática para criar perfis de segurança distintos (cada vendedor vê só seus pedidos)?",
      tch: "Você já lidou com integrações via API para atualizar pipeline de vendas em tempo real?",
    },
    expert: {
      mod: "Quais módulos avançados (ex.: gestão de campanhas, comissionamento) você domina no ERP?",
      spt: "Como você soluciona problemas complexos (ex.: duplicidade de pedido) dentro do ERP?",
      mig: "Você participou de migrações de ERP (ex.: TOTVS para SAP) visando melhoria do comercial?",
      eff: "De que forma você mede eficiência e performance do time de vendas usando dados do ERP?",
      adv: "Quais customizações avançadas (scripts ABAP, TOTVS) são feitas para gerenciar grandes contas comerciais?",
    },
  },
  "Erps"
);
export const cmPlnKeys = withFrozenLibreLabel(
  {
    beginner: {
      tsk: "Como você cria listas de tarefas relativas a metas de vendas e follow-ups?",
      col: "Você compartilha o plano comercial com o gestor e colegas?",
      cal: "Com que frequência você usa calendário para prazos (ex.: renovar contrato, contatar leads)?",
      lbl: "Você marca prioridades (ex.: alta, média) em tarefas ou leads críticos?",
      upd: "De que modo você atualiza status (em prospecção, em negociação, concluído) no planejamento?",
    },
    intermediate: {
      wfl: "Como você estabelece fluxos (ex.: lead captado -> qualificação -> proposta -> assinatura) dentro do sistema de planejamento?",
      not: "Você configura alertas para datas importantes, como expiração de proposta?",
      col: "De que maneira a equipe comercial trabalha colaborativamente no mesmo board/plano?",
      rpr: "Quais relatórios de progresso (ex.: leads ganhos, leads perdidos) você gera?",
      int: "Você integra a plataforma de planejamento com planilhas ou dashboards para ver metas em tempo real?",
    },
    expert: {
      adv: "Como você cria painéis avançados para acompanhar OKRs e resultados de vendas semanais/mensais?",
      aut: "Você utiliza automações que movem tarefas no funil comercial conforme determinadas regras (ex.: data-limite)?",
      pri: "De que forma você prioriza oportunidades de maior valor ou com data de fechamento próxima?",
      bus: "Você já integrou processos de planejamento com BI para replanejar metas de acordo com performance real?",
      sec: "Quais práticas de segurança e governança aplicam-se quando múltiplos times (marketing, vendas) acessam o plano comercial?",
    },
  },
  "planning"
);
export const cmAiAdKeys = withFrozenLibreLabel(
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
export const cmAiImgKeys = withFrozenLibreLabel(
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
export const cmAiVdKeys = withFrozenLibreLabel(
  {
    beginner: {
      tut: "Você utiliza IA para criar vídeos curtos explicando cláusulas ou condições de contratos?",
      rec: "Como a IA auxilia na gravação e narração de vídeos para apresentações de propostas comerciais?",
      edi: "Você usa IA para editar automaticamente vídeos explicativos de negociações comerciais?",
      shw: "Você utiliza IA para exibir gráficos ou tabelas comerciais em vídeos de apresentações formais?",
      sld: "Como você transforma automaticamente apresentações comerciais em vídeos profissionais com IA?",
    },
    intermediate: {
      anl: "Você usa IA para criar animações ou transições em vídeos explicativos de negociações comerciais?",
      tts: "Como você utiliza IA para inserir narrações automáticas em vídeos que acompanham relatórios comerciais?",
      eda: "Você utiliza IA para sincronizar áudio e vídeo em materiais explicativos comerciais?",
      sub: "Você gera legendas automáticas em vídeos comerciais com termos específicos do setor usando IA?",
      mlc: "Com que frequência você utiliza IA para criar vídeos instrutivos com base em roteiros de negociações comerciais?",
    },
    expert: {
      brd: "Como você usa IA para editar e estruturar gravações de reuniões comerciais de alta complexidade?",
      int: "Você utiliza IA para criar vídeos interativos que integrem dados comerciais em tempo real?",
      scn: "Como você utiliza IA para configurar cenários virtuais em apresentações comerciais?",
      adv: "Quais práticas avançadas de edição com IA você aplica para criar vídeos comerciais de alta qualidade?",
      sec: "Como você utiliza IA para restringir acesso e proteger vídeos comerciais confidenciais?",
    },
  },
  "video"
);
export const cmLlmKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...llmBeginnerKeys,
      tip: "De que maneira você considera que LLMs podem ajudar a tratar, filtrar e organizados dados de clientes (nome, informações)?",
    },
    intermediate: {
      ...llmIntermediateKeys,
      pol: "Quais destes pontos críticos a cerca de políticas em relações comerciais você dá prioridade quando utilizando LLMs?",
      nlp: "Com que frequência você analisa mensagens e documentos extensos de clientes usando LLMs?",
      doc: "Com que frequência você utiliza LLMs para produzir relatórios e documentos corporativos?",
    },
    expert: {
      ...llmExpertKeys,
      api: "Com que frequência você conecta APIs de LLMs a sistemas de CRM ou plataformas de e-mail marketing?",
      adv: "Você já treinou modelos específicos com dados de negociações passadas para orientação de pricing?",
      prv: "Com que frequência você usa LLMs para prever vendas, estimar taxa de conversão ou analisar tendências do mercado?",
    },
  },
  "llms"
);
export const comercialAddQuestions =
  ObjectHelper.deepFreeze([
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
      pln: "Com que frequência você planeja conteúdo textual (ex.: posts) e compila num doc colaborativo?",
      cmd: "De que modo você adiciona comentários, sugestões e versões para aprovação?",
      ext: "Com que frequência você exporta documentos no formato PDF?",
    },
    intermediate: {
      mac: "Você criou macros ou modelos padronizados (layout, sumário) para relatórios de campanha?",
      rev: "De que forma você gerencia revisões vindas de gestores, designers e redatores ao mesmo tempo?",
      stl: "Quais destes recursos gráficos você utiliza para destacar dados em documentos?",
      mlt: "Com que frequência você utiliza mala direta (ex.: para e-mails de campanha em massa)?",
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
      rep: "Qual o seu nível de experiência em integrações com plataformas de BI?",
      adv: "Quais destas técnicas você utiliza para automatizar uploads e organização de assets e postagens?",
    },
  },
  "cloudStorage"
);
export const mktBiKeys = withFrozenLibreLabel(
  {
    beginner: {
      imp: "Você importa dados (ex.: gastos de campanhas, leads gerados) para BI?",
      vis: "Como você cria gráficos básicos (cliques, custo) para visualizar resultados de marketing?",
      fil: "Você filtra dados por data ou canal (ex.: Facebook, Instagram)?",
      shr: "De que forma você compartilha painéis simples com colegas (link, PDF)?",
      usr: "Você cria permissões específicas para que outros vejam só suas campanhas?",
    },
    intermediate: {
      mdl: "Como você modela dados de diversas origens (Google Ads, planilhas, etc.) numa ferramenta de BI?",
      seg: "Você utiliza segmentações (ex.: por idade, região) para refinar análises?",
      cal: "Você já criou colunas calculadas para métricas como CTR, CPA, ROI?",
      drv: "De que forma você habilita drill-down (ex.: canal -> campanha -> anúncio específico)?",
      aut: "Você atualiza dashboards automaticamente (ex.: daily refresh) para acompanhar métricas sem atraso?",
    },
    expert: {
      dax: "Você domina expressões avançadas (DAX, MDX, scripts) para cálculos de marketing?",
      big: "Como você lida com grandes volumes de dados de anúncios (milhões de linhas) com performance?",
      mlc: "Você integra scripts de IA (ex.: Python, R) para prever engajamento ou leads futuros?",
      adv: "De que maneira você publica esses dashboards para stakeholders externos (agências, parceiros)?",
      gov: "Como você gerencia governança (permissões, versionamento) de dashboards de marketing?",
    },
  },
  "businessInteligence"
);
export const mktCrmKeys = withFrozenLibreLabel(
  {
    beginner: {
      mgr: "Como você registra contatos ou leads iniciais no CRM para campanhas de marketing?",
      sht: "Você anota interações de e-mail, redes sociais, inbound marketing? (Sim/Não)",
      seg: "Você separa leads por tipo de interesse ou canal de entrada (ex.: blog, anúncio)?",
      rel: "De que modo você gera relatórios básicos de leads (quantos chegaram, quantos responderam)?",
      col: "Como você compartilha dados desses leads com outra equipe (ex.: vendas)?",
    },
    intermediate: {
      scg: "Você atribui pontuação de leads (lead scoring) com base em ações de marketing (cliques, downloads)?",
      aut: "Como você cria automações (ex.: mover lead para ‘MQL’ se abrir e-mail 2 vezes)?",
      syn: "Você sincroniza dados do CRM com planilhas ou BI para ver pipeline de conversões?",
      pro: "Qual é sua prática para acompanhar leads em funis diferentes (ex.: evento, webinar, inbound)?",
      rep: "Você gera relatórios intermediários (ex.: taxa de conversão do marketing para vendas)?",
    },
    expert: {
      api: "Você integra o CRM com plataformas de automação de marketing, disparando e-mails ou anúncios segmentados?",
      mlc: "Você aplica IA para prever qual lead é mais provável de avançar (propensão) com base em histórico?",
      cst: "Como você customiza o CRM para gerenciar campanhas, definindo campos ou pipelines específicos?",
      adv: "De que maneira você lida com funis complexos (vários estágios) e metas detalhadas de marketing?",
      big: "Você faz análises massivas de leads (histórico de 1+ ano) para descobrir padrões de engajamento?",
    },
  },
  "Crms"
);
export const mktErpsKeys = withFrozenLibreLabel(
  {
    beginner: {
      bas: "Qual é sua familiaridade com o módulo de cadastro de produtos ou clientes em um ERP?",
      mov: "Você verifica status de pedidos ou requisições geradas a partir de campanhas de marketing?",
      usr: "Como você gerencia usuários ou permissões simples para equipe de marketing no ERP?",
      rep: "Você gera relatórios básicos de produtos/serviços ligados a campanhas?",
      imp: "Você já importou listas de clientes captados em campanhas para o ERP?",
    },
    intermediate: {
      cst: "De que forma você customiza campos (ex.: origem do lead, código de campanha) no ERP?",
      inf: "Você integra dados do ERP (ex.: estoque, preço) com a plataforma de marketing ou landing pages?",
      wfl: "Como você cria processos de aprovação (ex.: desconto especial) dependendo de dados vindos do marketing?",
      sec: "Qual é sua prática para que cada time veja apenas as informações necessárias (ex.: marketing não vê contábil)?",
      tch: "Você já fez integrações por API para atualizar status de campanha direto no ERP (ex.: ‘campanha finalizada’)?",
    },
    expert: {
      mod: "Quais módulos avançados (promoções, CRM interno, automação) você domina no ERP?",
      spt: "Como você resolve problemas (ex.: duplicidade de leads) entre marketing e módulos do ERP?",
      mig: "Você participou de migrações de ERP visando melhorar tracking de campanhas?",
      eff: "De que maneira você mede eficiência de campanhas (ROI) usando relatórios do ERP?",
      adv: "Quais customizações avançadas (script TOTVS, ABAP SAP) você aplica para adequar processos de marketing?",
    },
  },
  "Erps"
);
export const mktPlnKeys = withFrozenLibreLabel(
  {
    beginner: {
      tsk: "Como você lista tarefas de marketing (ex.: criação de posts, envio de e-mail) em um board simples?",
      cal: "Com que frequência você usa calendários de campanha (datas de início e fim) para organização?",
      lbl: "Você rotula tarefas por prioridade (ex.: alta, média, baixa) ou por canal (Facebook, Google)?",
      upd: "De que forma você atualiza status das campanhas (ex.: em rascunho, lançada, finalizada)?",
      shr: "Você compartilha esse plano com o gestor ou a equipe em tempo real?",
    },
    intermediate: {
      wfl: "Como você estabelece fluxos de aprovação em campanhas (ex.: revisão de design, revisão de texto)?",
      not: "Você cria alertas (ex.: e-mail ou Slack) quando um prazo de campanha está próximo?",
      col: "Como cada membro do time pega suas tarefas e marca como concluídas no mesmo board?",
      rpr: "Você gera relatórios intermediários (quantas tarefas fechadas, quantas pendentes)?",
      int: "Você integra a plataforma de planejamento com planilhas ou sistemas de ads para ver resultados?",
    },
    expert: {
      adv: "Como você projeta cronogramas avançados (ex.: Gantt) para grandes campanhas multi-canal?",
      aut: "Você utiliza automações que movem tarefas ou notificam responsáveis conforme regras específicas?",
      pri: "De que forma você prioriza campanhas com maior investimento ou maior ROI esperado?",
      bus: "Você já correlacionou planejamento de marketing com dados de BI para readequar metas e prazos?",
      sec: "Quais práticas de governança aplicam-se ao permitir que diferentes agências acessem seu board?",
    },
  },
  "planning"
);
export const mktAiAdKeys = withFrozenLibreLabel(
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
export const mktAiImgKeys = withFrozenLibreLabel(
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
export const mktAiVdKeys = withFrozenLibreLabel(
  {
    beginner: {
      edt: "Você utiliza IA para editar vídeos promocionais simples (ex.: cortar, redimensionar)?",
      upv: "Com que frequência você usa IA para otimizar uploads de vídeos em redes sociais?",
      tem: "Você usa IA para personalizar templates pré-fabricados em vídeos promocionais? (Sim/Não)",
      sub: "Como você gera legendas automáticas para vídeos de marketing com IA?",
      frm: "Você utiliza IA para ajustar formatos de vídeo para diferentes plataformas (ex.: 16:9, 1:1)?",
    },
    intermediate: {
      eff: "Quais efeitos visuais baseados em IA você utiliza para melhorar a qualidade de vídeos promocionais?",
      aud: "Você sincroniza áudio automaticamente com vídeos promocionais usando IA?",
      pla: "Você planeja campanhas de vídeo com ferramentas baseadas em IA? Cite um exemplo.",
      cpt: "Como você usa IA para criar narrativas engajantes (storytelling) em vídeos de marketing?",
      ani: "Você integra IA para criar animações personalizadas em vídeos de campanhas?",
    },
    expert: {
      adv: "Quais práticas avançadas de IA você utiliza para integrar vídeos a estratégias omnichannel?",
      ana: "Como você usa IA para medir métricas de vídeos (ex.: taxa de retenção, engajamento)?",
      api: "De que forma você integra APIs de IA para automação de edição e publicação de vídeos?",
      _3dv: "Você já usou IA para criar vídeos em 3D ou com realidade aumentada? (Sim/Não)",
      adt: "Como você utiliza IA para personalizar vídeos (ex.: incluir o nome do cliente no vídeo)?",
    },
  },
  "video"
);
export const mktLlmKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...llmBeginnerKeys,
    },
    intermediate: {
      ...llmIntermediateKeys,
      pol: "Com que frequência você utiliza LLMs para intepretar e resumir dados de relatórios e feedback?",
      nlp: "Você utiliza LLMs para sumarizar estatísticas de feedback de clientes ou reviews usando?",
      exc: "Você utiliza LLMs para criar planilhas de budget ou simular projeções de campanha?",
    },
    expert: {
      ...llmExpertKeys,
      prv: "Você aplica IA para prever engajamento ou taxa de conversão em anúncios?",
      adv: "Você já treinou modelos com histórico de campanhas, gerando sugestões personalizadas de copy?",
      api: "Qual é o seu nível de experiência integrando APIs de LLMs para automatizar criação de conteúdo ou chatbots de marketing?",
    },
  },
  "llms"
);
export const marketingAddQuestions =
  ObjectHelper.deepFreeze([
    "marketing",
    new Map([
      ["docs", mktDocsKeys as any],
      ["spreadSheets", mktSsKeys],
      ["formBuilders", mktFmKeys],
      ["cloudStorage", mktCsKeys],
      ["businessInteligence", mktBiKeys],
      ["Crms", mktCrmKeys],
      ["Erps", mktErpsKeys],
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
      cpt: "Com que frequência você auxilia na compatibilidade de arquivos entre diferentes versões do software?",
      tmp: "Você recomenda modelos prontos para usuários inexperientes em edição de texto? (Sim/Não)",
      col: "Como você analisa a colaboração simultânea (multiusuário) em um mesmo documento?",
    },
    intermediate: {
      mac: repeated.mcr,
      rev: "Que estratégias você adota para controlar revisões e histórico de versões com equipes maiores?",
      sec: "Como você lida com a proteção de documentos via senhas ou restrição de edição?",
      stl: "Quais ferramentas de estilo você apresenta para a configuração de estilos de texto (títulos, cabeçalhos) e sumários automáticos?",
      prb: "Qual é sua abordagem ao diagnosticar problemas intermediários de layout ou formatação avançada?",
    },
    expert: {
      scr: repeated.mcr,
      cpy: "Quais destas ferramentas você instrui para o controle de versão dos documentos colaborativos?",
      idx: "Como você instrui usuários a criarem índices remissivos ou seções avançadas em documentos extensos?",
      adv: "De que forma você soluciona conflitos de permissões avançadas e restrições de edição em rede?",
      dbi: "Com que frequência você integra documentos a bancos de dados ou APIs (ex.: mail merge massivo)?",
    },
  },
  "docs"
);
export const stN1SsKeys = withFrozenLibreLabel(
  {
    beginner: {
      sum: repeated.sum,
      frm: "Quais destas técnicas de layout de formatação de células você recomendaria a um usuário para destacar dados?",
      fil: "Quais destas técnicas você recomendaria a um usuário para filtrar ou classificar dados de modo simples?",
      cbt: "Quais destes recursos você utiliza para configurar proteções básicas de célula para evitar alterações indevidas?",
      con: "Como você orienta a colaboração simultânea em uma planilha (ex.: várias pessoas editando)?",
    },
    intermediate: {
      piv: "Qual é sua abordagem para ajudar usuários a criarem tabelas dinâmicas de complexidade média?",
      fml: "Qual é a sua familiaridade com funções (SE, PROCV) para automação de cálculos multidimensionais e lógica?",
      cht: "Que tipos de gráficos você recomenda para análises em planilhas de nível intermediário?",
      val: "Quais destas técnicas você recomenda para configurar validações de dados e evitar entradas incorretas?",
      net: "De que forma você gerencia possíveis conflitos de versão ao trabalhar via rede ou nuvem?",
    },
    expert: {
      mcr: repeated.mcr,
      sec: "Qual sua experiência em configurar permissões avançadas em planilhas compartilhadas (ex.: range locking)?",
      prf: "Quais destas técnicas você utiliza para otimizar performance em planilhas extensas com dezenas de abas e fórmulas aninhadas?",
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
      upl: "Com que frequência você auxilia usuários com arquivos em plataformas baseadas em nuvem?",
      syn: "Descreva em termos gerais suas técnicas para sincronizar pastas locais com o armazenamento em nuvems",
    },
    intermediate: {
      ...csIntermediateKeys,
      prf: "Qual destas técnicas você utiliza para resolver problemas de performance em plataformas baseadas em nuvem?",
      bck: "Quais destas técnicas você utiliza para gerenciar backups automáticos ou snapshots em storage de nuvem?",
    },
    expert: {
      ...csExpertKeys,
      mlt: "Qual é o seu nível de experiência lidando com múltiplas contas ou provedores (Google, OneDrive, Amazon S3)?",
      drp: "Quais destas técnicas você adota para lidar com prevenção e recuperação de desastres de repositórios críticos em nuvem?",
    },
  },
  "cloudStorage"
);
export const stN1BiKeys = withFrozenLibreLabel(
  {
    beginner: {
      con: "De que forma você ensina usuários a conectar dados simples (planilhas) a ferramentas de BI (Power BI, etc.)?",
      vsl: "Como você orienta a criação de visualizações básicas (gráficos simples, tabelas) em BI?",
      fil: "Qual é sua prática ao configurar filtros e segmentações iniciais para analisar dados?",
      rpt: "Com que frequência você auxilia na geração de relatórios básicos (PDF, print) para usuários finais?",
      ref: "Você verifica se os dados estão atualizados ou se há problemas de refresh? (Sim/Não)",
    },
    intermediate: {
      mdm: "Como você lida com modelagem de dados intermediária (relacionamentos, chaves) em BI?",
      das: "Você auxilia na criação de dashboards com métricas de negócio? Explique um exemplo.",
      src: "Qual sua experiência ao integrar múltiplas fontes (vendas, estoque) no mesmo relatório?",
      cal: "Como você ensina fórmulas/calculated fields (ex.: DAX no Power BI) de nível intermediário?",
      sec: "Você configura segurança em nível de linha ou permissões específicas em dashboards compartilhados?",
    },
    expert: {
      adv: "Como você soluciona problemas avançados de performance em dashboards com milhões de registros?",
      sdb: "Você já integrou scripts ou R/Python para análises preditivas dentro do BI?",
      gov: "De que forma você implementa governança e organização de workspaces BI (ex.: departmentalizado)?",
      mlb: "Você automatiza a atualização de dados (scheduling, pipelines complexos) em sistemas corporativos?",
      aud: "Como você audita logs de acesso e manipulação de dados em dashboards de alto nível?",
    },
  },
  "businessInteligence"
);
export const stN1CrmsKeys = withFrozenLibreLabel(
  {
    beginner: {
      lds: "Como você cadastra leads/clientes básicos em uma plataforma de CRM (ex.: Salesforce)?",
      acs: "Com que frequência você ajuda a definir acessos simples (usuários, permissões) no CRM?",
      stt: "Você configura status básicos de leads (novo, em follow-up) para controle de processo?",
      rcv: "De que forma você orienta o registro de conversas ou visitas no CRM?",
      rep: "Como você ajuda na geração de relatórios iniciais (pipeline simples) para visualização de oportunidades?",
    },
    intermediate: {
      wfl: "Você cria fluxos de trabalho automáticos (ex.: envio de e-mail, mudança de estágio) no CRM?",
      prf: "Como você lida com perfis e funções intermediárias (hierarquia de acessos, permissões avançadas)?",
      int: "Qual é sua prática ao integrar CRM com outras ferramentas (ex.: e-mail marketing, BI)?",
      scg: "De que maneira você orienta a segmentação de contatos (ex.: tags, filtros) para campanhas?",
      doc: "Você configura documentos ou contratos a partir do CRM (merge de dados)? Explique.",
    },
    expert: {
      api: "Como você implementa integrações por meio de APIs para automatizar ações no CRM?",
      adv: "De que forma você resolve conflitos de duplicidade de dados em clientes grandes?",
      cus: "Qual sua abordagem para customizar objetos, campos e layouts complexos no CRM?",
      sfd: "Você lida com módulos avançados (Forecast, AI) em plataformas como Salesforce? (Sim/Não)",
      sec: "Como você gerencia segurança e compliance (LGPD) no CRM quando há muitos usuários?",
    },
  },
  "Crms"
);
export const stN1ErpsKeys = withFrozenLibreLabel(
  {
    beginner: {
      acc: "De que modo você auxilia usuários em cadastros básicos (clientes, produtos) em sistemas ERP?",
      rep: "Como você gera relatórios simples de vendas ou financeiro no ERP para usuários comuns?",
      men: "Você explica a navegação inicial nos menus do ERP e como acessar módulos básicos?",
      doc: "Em que frequência você ajuda a emitir notas fiscais ou documentos de estoque?",
      sup: "Como você orienta para suporte inicial (chamados, tickets) quando algo básico falha?",
    },
    intermediate: {
      cfg: "Você configura módulos intermediários (ex.: compras, produção) e permissões específicas?",
      flw: "De que forma você define fluxos de aprovação (requisição -> aprovação) no ERP?",
      mig: "Como você lida com migrações de dados (planilhas -> ERP) sem corromper registros?",
      bkp: "Qual é sua prática de backup/restauração quando usuários precisam reverter transações?",
      int: "Você integra o ERP a sistemas externos (ex.: e-commerce, BI) para dados sincronizados?",
    },
    expert: {
      dev: "Como você gerencia customizações profundas (scripts ABAP/TOTVS) para demandas avançadas?",
      seg: "De que modo você controla segurança e auditoria, rastreando logs de alterações críticas?",
      otm: "Você otimiza performance em cenários com grande volume de dados e muitos usuários simultâneos?",
      api: "De que forma você expõe ou consome APIs do ERP para automações corporativas grandes?",
      upd: "Como você lida com atualizações de versão do ERP, evitando downtime e conflitos?",
    },
  },
  "Erps"
);
export const stN1PlnKeys = withFrozenLibreLabel(
  {
    beginner: {
      brd: "Como você orienta na criação de quadros básicos (Trello, Planner) para organizar tarefas?",
      stt: "Você explica status típicos (A fazer, Em andamento, Concluído) e como mover cartões?",
      lbl: "De que modo você mostra o uso de etiquetas para categorizar atividades simples?",
      cmt: "Com que frequência você incentiva anotações e comentários detalhados nos cartões/tarefas?",
      col: "Você ensina colaboração multiusuário para que vários colegas vejam atualizações em tempo real?",
    },
    intermediate: {
      aut: "Em que nível você configura automações (ex.: mover cartão ao vencer prazo) nas ferramentas?",
      prf: "Como você lida com permissões intermediárias (ex.: membros específicos, observadores)?",
      cal: "Você integra calendários ou define datas-limite com notificações de forma robusta?",
      rpt: "Que tipo de relatórios ou gráficos (burndown, Gantt) você gera para acompanhar progresso?",
      int: "Você conecta essas ferramentas de planejamento com outros sistemas (CRM, ERP) ou e-mail?",
    },
    expert: {
      adv: "Como você coordena quadros complexos de projetos grandes, com múltiplas equipes e sprints?",
      scp: "Você configura métodos avançados (Scrum/Kanban) e métricas (velocidade, backlog) para times grandes?",
      rls: "De que forma você controla níveis de acesso, incluindo convidados externos ou revisores?",
      wfs: "Você gerencia integrações ou webhooks para automatizar comunicação com pipeline DevOps?",
      mlb: "Em que frequência você recorre a machine learning ou IA para prever prazos e atrasos?",
    },
  },
  "planning"
);
export const stN1AiAdKeys = withFrozenLibreLabel(
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
export const stN1AiImgKeys = withFrozenLibreLabel(
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
export const stN1AiVdKeys = withFrozenLibreLabel(
  {
    beginner: {
      rec: "Como você utiliza IA para criar tutoriais rápidos em vídeo gerados automaticamente para suporte técnico?",
      edt: "Você recomenda ferramentas de IA para edições básicas (corte automático, legendas rápidas) em vídeos? (Sim/Não)",
      frm: "Com que frequência você utiliza IA para converter formatos e ajustar resoluções automaticamente?",
      upl: "Você usa IA para otimizar o upload de vídeos para plataformas internas? (Sim/Não)",
      cap: "Como você utiliza IA para gerar legendas automáticas em vídeos curtos para acessibilidade?",
    },
    intermediate: {
      eff: "Quais ferramentas de IA você usa para aplicar efeitos visuais ou zoom automático em vídeos técnicos?",
      aud: "Você utiliza IA para sincronizar áudio com vídeo em tutoriais? Cite um exemplo.",
      mul: "Como você aplica IA para gerenciar múltiplas faixas de vídeo e áudio (ex.: overlays, mixagem)?",
      ctt: "Você gera conteúdo de treinamento em vídeo com o auxílio de IA? Como isso melhora a produtividade?",
      sec: "Como você utiliza IA para proteger vídeos internos, garantindo que apenas pessoas autorizadas tenham acesso?",
    },
    expert: {
      adv: "Você utiliza IA em edições multicâmera ou com chroma key (fundo verde) para vídeos técnicos complexos?",
      str: "Como você aplica IA para gerenciar transmissões ao vivo com ajustes automáticos de qualidade e latência?",
      api: "Você integra APIs de IA para automação de publicação e edição de vídeos? Descreva uma aplicação prática.",
      enc: "Você recomenda ferramentas de IA para encoding otimizado (bitrate, codecs) de vídeos longos?",
      mlv: "Em que frequência você utiliza IA para análise de vídeos, como geração de insights ou legendas automáticas?",
    },
  },
  "video"
);
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
export const stN1LlmKeys = ObjectHelper.deepFreeze({
  ...stLlmKeys,
});
export const suporteTecnicoN1AddQuestions =
  ObjectHelper.deepFreeze([
    "suporteTecnicoN1",
    new Map([
      ["docs", stN1DocsKeys as any],
      ["spreadSheets", stN1SsKeys],
      ["formBuilders", stN1FmKeys],
      ["cloudStorage", stN1CsKeys],
      ["businessInteligence", stN1BiKeys],
      ["Crms", stN1CrmsKeys],
      ["Erps", stN1ErpsKeys],
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
      syn: "Quais destas ferramentas você utiliza para a sincronização de arquivos .doc entre servidores ou ferramentas na nuvem?",
      cmp: "Quais destas ferramentas de conversão de formatos de documentos você recomendaria para um usuário?",
      plg: "Com que frequência você instala ou configura plugins básicos de formatação de documentos para usuários?",
      pmt: "Quais ferramentas você utiliza para intervir em problemas de permissão (arquivos bloqueados, somente leitura) em rede?",
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
      api: "Qual é a sua familiaridade na integração com APIs ou complementos externos (ex.: Scripts com Python) para manipular documentos massivamente?",
      mig: "Qual sua estratégia ao migrar docs de um sistema legado para plataformas atuais, mantendo formatação?",
    },
  },
  "docs"
);
export const stN2SsKeys = withFrozenLibreLabel(
  {
    beginner: {
      net: "Quais destas técnicas você orienta a configuração de planilhas em rede local ou via ferramentas de compartilhamento (Drive, OneDrive)?",
      fmz: "Quais destas técnicas você usa para evitar formatações que podem quebrar fórmulas ao abrir planilhas em versões distintas?",
      cft: "Quais destas técnicas você recomenda para fazer a conferência de dados em planilhas compartilhadas, resolvendo conflitos básicos de edição?",
      csd: "Em que frequência você lida com consultas simples (ex.: importação CSV) para dados de planilha?",
      bak: "Quais destas práticas você recomenda para backups diários de planilhas importantes?",
    },
    intermediate: {
      piv: "Quais destas técnicas você utiliza para intervir na criação ou troubleshooting de Tabelas Dinâmicas com múltiplas fontes de dados?",
      lnk: "Quais destas técnicas você utiliza para solucionar problemas em planilhas que importam/ligam dados de outras pastas de trabalho?",
      val: "Quais destas técnicas você usa para configurar validações e restrições para prevenir erros em planilhas?",
      scp: "Quais formatos de scripts você usa para integrações pontuais em planilhas?",
      rep: "Como você gera relatórios semestrais ou consolida planilhas vindas de diferentes setores (ex.: contábil, vendas)?",
    },
    expert: {
      arr: "Qual é o seu nível de familiaridade com funções matriciais avançadas (ex.: MATRIZDINAMICA, Fórmulas aninhadas complexas)?",
      sec: "Qual é sua prática ao configurar segurança (proteção de intervalos, permissões de usuário) em grandes planilhas de rede?",
      mcr: "Quais destas técnicas para depurar macros avançadas (VBA) que causam lentidão ou bloqueiam recursos compartilhados?",
      big: "Com que frequência você conecta planilhas a bancos de dados corporativos via ODBC/SQL e soluciona problemas de acesso?",
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
export const stN2CsKeys = ObjectHelper.deepFreeze({
  ...stN1CsKeys,
});
export const stN2BiKeys = withFrozenLibreLabel(
  {
    beginner: {
      con: "De que forma você ajuda usuários a conectar dados básicos (ex.: planilha, CSV) em ferramentas de BI (Power BI)?",
      nav: "Você orienta sobre a navegação inicial em dashboards e filtros simples?",
      bas: "Como você lida com problemas de refresh manual quando os dados não atualizam automaticamente?",
      rpt: "Qual sua abordagem para exportar relatórios em PDF ou outros formatos no BI?",
      err: "Você depura erros básicos de credenciais ou permissões ao acessar o dashboard?",
    },
    intermediate: {
      mrg: "Você configura merges ou joins em múltiplas fontes de dados (ex.: contábil + vendas)?",
      dax: "Qual é sua experiência em DAX (Power BI) ou cálculos intermediários em outras plataformas (Tableau calc fields)?",
      sch: "Você agenda atualizações regulares ou incrementais e resolve falhas nesse agendamento?",
      seg: "Como você configura segurança em nível de linha (RLS) ou filtros avançados para grupos distintos?",
      adv: "Você orienta sobre criação de visuais customizados ou scripts R/Python dentro do BI?",
    },
    expert: {
      prf: "De que forma você otimiza performance em dashboards gigantes (tabelas de milhões de linhas)?",
      api: "Você integra APIs de BI (Push data, REST) a sistemas corporativos, resolvendo problemas complexos?",
      cus: "Como você personaliza completamente visuais (ex.: TypeScript custom visuals, D3.js) para relatórios?",
      mlb: "Em que frequência você realiza análises preditivas ou algoritmos de machine learning embutidos no BI?",
      aud: "Você realiza auditoria e logs de acesso detalhados, rastreando quem alterou relatórios ou dados?",
    },
  },
  "businessInteligence"
);
export const stN2CrmsKeys = withFrozenLibreLabel(
  {
    beginner: {
      acs: "Como você auxilia no acesso inicial ao CRM, criando logins e permissões básicas?",
      syn: "Você ajusta sincronização de contatos e calendários com e-mails ou smartphones?",
      imp: "Com que frequência você importa planilhas de leads para o CRM, resolvendo conflitos de campos?",
      rep: "Como você configura relatórios simples de pipeline ou funil de vendas para usuários novatos?",
      col: "De que forma você soluciona inconsistências de dados entre o CRM e outro sistema (ex.: e-mail marketing)?",
    },
    intermediate: {
      auto: "Você cria automações de estágio (mover lead) ou gatilhos (enviar e-mail) dentro do CRM?",
      seg: "Como você lida com segmentações e listas de clientes mais avançadas, baseadas em múltiplos critérios?",
      int: "De que forma você integra o CRM com plataformas de atendimento (chat, ticket) para ver histórico unificado?",
      adv: "Qual sua prática ao criar campos personalizados e regras de acesso específicas para certos times?",
      scp: "Você aplica scripts ou APIs do CRM para extrair informações para relatórios intermediários?",
    },
    expert: {
      dev: "Como você customiza objetos ou lógica avançada (Apex, TOTVS scripts) para grandes empresas?",
      per: "Você define perfis de segurança complexos, controlando minuciosamente quem vê quais oportunidades?",
      mig: "Em que frequência você realiza migrações de dados massivas (ex.: outro CRM -> atual) resolvendo chaves duplicadas?",
      big: "Você integra IA ou Big Data (scoring, previsões) dentro do CRM, e lida com falhas ou latências?",
      aud: "De que modo você audita logs de alteração de dados de leads e garante conformidade (LGPD)?",
    },
  },
  "Crms"
);
export const stN2ErpsKeys = withFrozenLibreLabel(
  {
    beginner: {
      log: "Como você ajuda usuários a efetuar login inicial no ERP (ex.: TOTVS, SAP) e entender menus básicos?",
      cst: "De que forma você configura cadastros simples (fornecedores, clientes) sem erros de duplicidade?",
      fni: "Você ensina a emitir relatórios básicos de financeiro ou estoque para um usuário novato?",
      prc: "Com que frequência você orienta processos básicos (ex.: vendas -> faturamento) em um ERP?",
      sup: "Como você registra chamados de suporte no próprio ERP ou em outro sistema, quando surgem problemas?",
    },
    intermediate: {
      mls: "Você realiza configurações de módulos intermediários (ex.: compras, produção) e resolve falhas de permissão?",
      act: "Como você orienta integrações contábeis (lotes, conciliação) dentro do ERP?",
      rpt: "Você gera relatórios intermediários (extraindo dados de mais de um módulo) via queries nativas?",
      prd: "De que modo você configura processos de aprovação ou workflow no ERP para pedidos maiores?",
      cyc: "Qual é sua prática ao lidar com ciclos de inventário, correções de saldo ou reprocessamento de NF?",
    },
    expert: {
      dev: "Como você implementa customizações avançadas (ex.: ABAP no SAP, TOTVS fluig) e soluciona conflitos?",
      int: "Você integra o ERP a sistemas externos (BI, e-commerce) usando APIs? Descreva um exemplo crítico.",
      sft: "Em que frequência você realiza 'soft closes' ou 'hard closes' em contabilidade e evita problemas de reabertura?",
      per: "Como você gerencia permissões extremamente granulares em sistemas ERP robustos, rastreando logs de acesso?",
      mig: "De que forma você faz migração de versão ou patches em ERP sem interromper operações críticas?",
    },
  },
  "Erps"
);
export const stN2PlnKeys = withFrozenLibreLabel(
  {
    beginner: {
      wrk: "Como você ajuda usuários a criar quadros/tarefas básicos (ex.: Planner, Trello) e entender colunas simples?",
      inv: "Qual a abordagem para orientá-los a convidar colegas e atribuir responsáveis pelas tarefas?",
      lab: "De que modo você sugere uso de labels ou tags para categorizar tarefas no N2?",
      dat: "Você configura datas-limite ou lembretes básicos para que tarefas não fiquem atrasadas?",
      cmt: "Como você incentiva a adição de comentários/descrição detalhada em cada tarefa?",
    },
    intermediate: {
      aut: "Você define automações (ex.: mover tarefa ao mudar status) dentro de Notion, Trello ou Planner?",
      per: "Como você lida com permissões intermediárias (ex.: um time vê somente um conjunto de boards)?",
      ext: "Em que frequência você integra essas plataformas com Slack, E-mail ou outro app para notificações?",
      rep: "De que forma você gera relatórios ou quadros de resumo (ex.: quantas tarefas concluídas por semana)?",
      cou: "Você orienta contadores de tempo (time tracking) ou funcionalidades intermediárias (sprints)?",
    },
    expert: {
      mul: "Como você gerencia múltiplos quadros complexos envolvendo equipes distintas (marketing, vendas)?",
      adv: "Você configura metodologias avançadas (Scrum completo, Kanban evoluído) e relatórios de burndown?",
      dep: "De que modo você trata dependências entre tarefas e autoatualizações de prazos?",
      wbh: "Você implementa webhooks ou scripts para sincronizar dados entre planning e pipeline DevOps?",
      bus: "Qual é sua experiência em gerar dashboards executivos (ex.: Power BI) a partir de boards de planejamento?",
    },
  },
  "planning"
);
export const stN2AiAdKeys = withFrozenLibreLabel(
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
export const stN2AiImgKeys = withFrozenLibreLabel(
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
export const stN2AiVdKeys = withFrozenLibreLabel(
  {
    beginner: {
      rec: "Você utiliza IA para gravar e organizar vídeos de suporte técnico automaticamente?",
      edt: "Como você usa IA para edições básicas de vídeos de treinamento técnico (cortes, textos)?",
      frm: "Você aplica IA para conversão de formatos de vídeo (MP4, MOV) automaticamente?",
      upl: "Você usa IA para otimizar o upload de vídeos técnicos em plataformas internas? (Sim/Não)",
      cap: "Você utiliza IA para gerar legendas automáticas para vídeos de suporte técnico?",
    },
    intermediate: {
      fxv: "Como você aplica IA para transições ou correções intermediárias em vídeos técnicos?",
      syn: "Você usa IA para sincronizar trilhas de áudio separadas (ex.: narração + instruções visuais)?",
      net: "Como você utiliza IA para solucionar problemas de streaming em tempo real (ex.: latência)?",
      enc: "Você aplica IA para encoding automático e otimizado em vídeos de suporte técnico?",
      sec: "Como você utiliza IA para proteger vídeos técnicos com acesso restrito?",
    },
    expert: {
      mul: "Você usa IA para gerenciar projetos multicâmera e cenários virtuais em vídeos técnicos?",
      adv: "Quais ferramentas de IA você utiliza para resolver problemas avançados em edição de vídeos?",
      api: "Como você integra APIs de IA para automação de publicação e análise de vídeos técnicos?",
      big: "Com que frequência você utiliza IA para processar e otimizar vídeos extensos (1h+)?",
      ai_: "Como você utiliza IA para análise ou legendagem automática em vídeos corporativos?",
    },
  },
  "video"
);
export const stN2LlmKeys = ObjectHelper.deepFreeze({
  ...stLlmKeys,
});
export const suporteTecnicoN2AddQuestions =
  ObjectHelper.deepFreeze([
    "suporteTecnicoN2",
    new Map([
      ["docs", stN2DocsKeys as any],
      ["spreadSheets", stN2SsKeys],
      ["formBuilders", stN2FmKeys],
      ["cloudStorage", stN2CsKeys],
      ["businessInteligence", stN2BiKeys],
      ["Crms", stN2CrmsKeys],
      ["Erps", stN2ErpsKeys],
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
      upd: "Com que frequência você atualiza softwares de edição (Office, LibreOffice) para corrigir falhas?",
      lnk: "De que modo você instala e vincula plugins ou complementos em servidores de arquivos locais?",
      prt: "Como você configura impressoras e controla spools de documentos em rede?",
      pat: "Qual sua prática para padronizar caminhos de salvamento (servidor/nuvem) e definir permissões de pasta?",
    },
    intermediate: {
      gpo: "Quais destas ferramentas você utiliza para automatizar configurações de editores de texto?",
      tro: "Como você soluciona problemas de lentidão ao abrir documentos via rede (latência, DNS, compartilhamentos)?",
      vrs: "Você gerencia versionamento centralizado (ex.: SharePoint) e resolve conflitos de check-in/out?",
      scr: "De que forma você monitora logs de acesso e edição para auditoria de compliance em documentos?",
      pol: "Como você define políticas de backup e snapshot para evitar perdas de dados em arquivos críticos?",
    },
    expert: {
      scc: "Quais destas técnicas e ferramentas você utiliza nas instalações em larga escala (SCCM) de editores de texto?.",
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
      col: "Com que frequência você ensina colaboração simultânea (co-edit) em Excel/Sheets via servidor ou Drive?",
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
export const opCsKeys = ObjectHelper.deepFreeze({
  ...stN1CsKeys,
});
export const opBiKeys = withFrozenLibreLabel(
  {
    beginner: {
      vss: "Como você instala e configura ferramentas básicas de BI (ex.: Power BI Desktop) no parque de máquinas?",
      con: "Você orienta usuários a conectar fontes simples (CSV, planilha) via rede local ou VPN?",
      dsp: "De que forma gerencia display e resolução adequados para dashboards em monitores corporativos?",
      frc: "Com que frequência você soluciona falhas de credenciais ou timeouts ao acessar dashboards?",
      ext: "Você habilita extensões básicas ou resolve conflitos de antivírus/firewall com software de BI?",
    },
    intermediate: {
      upd: "Como você controla updates de versão no software BI, evitando quebra de relatórios antigos?",
      net: "Você lida com latência/baixa performance quando o BI puxa dados de um DB remoto via rede?",
      adv: "De que modo você configura gateways ou conexões seguras (SSL) para dados intermediários?",
      dep: "Você gerencia implantação de relatórios/dashboards em servidores internos (ex.: Power BI Report Server)?",
      cch: "Qual sua abordagem ao lidar com caching e refresh, evitando sobrecarregar a rede corporativa?",
    },
    expert: {
      scl: "Como você implementa escalabilidade para dashboards de alto volume de requisições simultâneas?",
      clt: "Você integra cluster ou load balancing para ambientes de BI on-premise/híbrido?",
      scr: "De que forma você executa scripts R/Python no servidor de BI, resolvendo dependências e possíveis falhas?",
      sec: "Qual método você usa para gerenciar segurança avançada (RLS, logs de auditoria) em dashboards?",
      big: "Você configura conectores Big Data (ex.: Hadoop, Spark) e lida com performance de queries maciças?",
    },
  },
  "businessInteligence"
);
export const opCrmsKeys = withFrozenLibreLabel(
  {
    beginner: {
      ins: "Como você instala o cliente CRM localmente ou ajusta thin clients para acesso, definindo configurações mínimas?",
      net: "Você orienta portas e firewall para permitir comunicação do CRM com banco remoto?",
      usr: "Com que frequência você cria contas e permissões básicas no CRM para novos usuários?",
      rep: "De que modo você ajuda a gerar relatórios simples (pipeline) localmente e resolver problemas de acesso?",
      bck: "Você mantém backups do banco do CRM e restaura em casos de erro de configuração?",
    },
    intermediate: {
      ext: "De que forma você integra o CRM com e-mail, VOIP ou chat, lidando com latências ou travamentos moderados?",
      gpo: "Você usa GPO ou scripts para distribuir configurações (registry, addons) do CRM nos PCs?",
      dbs: "Como você gerencia o DB do CRM (SQL, Oracle) para performance média?",
      sec: "Você define logon com AD Federation (SSO) e resolve problemas de tokens expirando?",
      upg: "Com que frequência você atualiza a versão on-premise do CRM e faz rollback se algo falhar?",
    },
    expert: {
      ha_: "Como você implementa alta disponibilidade (failover cluster) no CRM para evitar downtime crítico?",
      int: "Você integra CRM a ERP ou outro DB corporativo, criando ETLs complexos e resolvendo conflitos?",
      api: "De que modo você expõe APIs do CRM para automações avançadas (ex.: scripts Python) e gerencia segurança?",
      pch: "Você aplica patches regulares no core do CRM, testando em staging para evitar corromper dados?",
      aud: "Qual é sua abordagem de auditoria e logs para atender compliance (LGPD, PCI) no banco do CRM?",
    },
  },
  "Crms"
);
export const opErpsKeys = withFrozenLibreLabel(
  {
    beginner: {
      ins: "Como você instala o cliente ERP localmente ou configura thin clients (TS) para acesso inicial?",
      lan: "Você lida com configurações de rede (DNS, portas) e permissões para acessar servidores ERP?",
      usr: "De que maneira você gerencia criação de usuários e permissões básicas de módulo (financeiro, estoque)?",
      bkp: "Como você realiza backups simples do DB do ERP e restaura em casos de erro de config?",
      doc: "Você configura impressões de documentos fiscais (ex.: NF) e orienta drivers de impressoras no ERP?",
    },
    intermediate: {
      scl: "Você gerencia escalabilidade intermediária (ex.: load balancing do app ERP) em ambientes com vários usuários?",
      wfl: "Como você configura fluxos e approvals no ERP que exigem integrações moderadas (ex.: e-mail)?",
      gpo: "De que forma você aplica GPO ou scripts para distribuir configs do ERP (registry, .ini) nos PCs?",
      mod: "Qual sua abordagem ao habilitar módulos extras e resolver conflitos de licenças ou dependências?",
      rep: "Você gera relatórios custom (ex.: TOTVS, Crystal) e lida com permissões de impressão em rede?",
    },
    expert: {
      adv: "Como você efetua tunning avançado do DB do ERP, analisando índices e queries para grande volume?",
      mig: "Em que frequência você conduz migrações de versão (SAP ECC -> S/4HANA) resolvendo falhas de compatibilidade?",
      sec: "Você define políticas de segurança, logs e compliance (SOX, LGPD) no ERP? Explique como.",
      apx: "De que forma você integra apex scripts (Salesforce) ou ABAP (SAP) em ambientes muito customizados?",
      ha_: "Você implementa cluster/HA no ERP e realiza failover sem interromper transações críticas?",
    },
  },
  "Erps"
);
export const opPlnKeys = withFrozenLibreLabel(
  {
    beginner: {
      tch: "Como você instala ou orienta uso de Trello, Planner, Notion e configura perfis básicos?",
      net: "Você habilita a comunicação dessas ferramentas (endpoints, portas) via firewall na rede local?",
      syn: "Com que frequência resolve conflitos de sincronização offline/online nesses apps de planejamento?",
      usr: "Qual sua prática ao criar usuários/grupos e permissões iniciais nos quadros/tarefas?",
      upd: "Você orienta updates manuais ou automáticos do software, evitando versões defasadas?",
    },
    intermediate: {
      scr: "De que forma você usa scripts ou GPO para fixar boards e fluxos para equipes específicas?",
      adv: "Você configura automações que movem tarefas conforme prazos, integrando e-mail ou Slack?",
      fil: "Como você define filtros intermediários (tarefas atrasadas) e lida com latência na rede?",
      rep: "Você ajuda a gerar relatórios (Gantt, burn-down) ou extrair dados de planning para dashboards externos?",
      cal: "Em que frequência integra calendários corporativos (Outlook/Google) com a ferramenta de planning?",
    },
    expert: {
      scl: "Como você implementa escalabilidade ou múltiplos quadros para grandes equipes em Notion/Trello?",
      wbh: "Você gerencia webhooks avançados (mover card -> notificar outro sistema) resolvendo falhas?",
      sso: "De que modo configura SSO (AD, SAML) e soluciona problemas de token ou logon em planning de alto nível?",
      mlt: "Você consolida vários boards em relatórios unificados via APIs ou scripts para gestores seniores?",
      dev: "Como você integra planning a pipelines DevOps (commit fecha card) e resolve conflitos de status?",
    },
  },
  "planning"
);
export const opAiAdKeys = withFrozenLibreLabel(
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
export const opAiImgKeys = withFrozenLibreLabel(
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
export const opAiVdKeys = withFrozenLibreLabel(
  {
    beginner: {
      ply: "Você utiliza IA para gerenciar codecs e configurar players automaticamente para vídeos internos?",
      rec: "Como a IA ajuda na gravação de tela para tutoriais de instalação e suporte?",
      net: "Você utiliza IA para detectar e corrigir gargalos em streaming interno de vídeo?",
      cat: "De que forma a IA auxilia na catalogação automática de vídeos em rede?",
      msg: "Você usa IA para resolver erros de GPU ou DirectX ao reproduzir vídeos de alta resolução?",
    },
    intermediate: {
      stp: "Como a IA otimiza editores intermediários (ex.: Camtasia) e previne travamentos frequentes?",
      enc: "Você utiliza IA para converter formatos de vídeo e ajustar bitrates automaticamente?",
      par: "Como a IA ajuda a configurar parâmetros de rede para evitar buffering em vídeos de treinamento?",
      eff: "Você utiliza IA para inserir efeitos e legendas em vídeos de forma otimizada?",
      aut: "Como a IA automatiza gravações de tela para auditorias ou demonstrações de infraestrutura?",
    },
    expert: {
      srv: "Você gerencia servidores de streaming com suporte de IA para evitar gargalos em vídeos corporativos?",
      sec: "Como a IA auxilia na proteção de vídeos confidenciais com DRM ou tokens de acesso temporários?",
      adv: "Você utiliza IA para gerenciar edições multicâmera em vídeos 4K e resolver travamentos complexos?",
      ai_: "De que forma você integra IA para remoção de fundo ou melhorias automáticas em vídeos?",
      drm: "Você utiliza IA para aplicar restrições avançadas e monitorar acessos em players corporativos?",
    },
  },
  "video"
);
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
      cus: "Com que frequência manipula modelos custom (fine-tuning local) e distribui para equipes especializadas?",
    },
  },
  "llms"
);
export const operatorioAddQuestions =
  ObjectHelper.deepFreeze([
    "operatorio",
    new Map([
      ["docs", opDocsKeys as any],
      ["spreadSheets", opSsKeys],
      ["formBuilders", opFmKeys],
      ["cloudStorage", opCsKeys],
      ["businessInteligence", opBiKeys],
      ["Crms", opCrmsKeys],
      ["Erps", opErpsKeys],
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
      col: "Qual é o seu nível de experiência em compartilhamento de arquivos e versões de trabalhos?",
      ver: "Como você mantém histórico básico (versionamento) de documentos relacionados ao projeto?",
      sty: "De que forma você padroniza estilos de anotações nos arquivos?",
    },
    intermediate: {
      rfc: "Com que frequência você costuma criar RFCs (Request for Comments) ou especificações técnicas intermediárias?",
      sum: "Quais ferramentas você utiliza para gerar sumários automáticos e referências cruzadas para guias técnicos maiores?",
      dev: "Qual é o seu nível de experiência com bibliotecas de testes automáticos?",
      rev: "Como você lida com revisões colaborativas, incluindo comentários e sugestões de colegas?",
      pbl: "De que forma você publica ou disponibiliza esses documentos para equipes de QA, Ops?",
    },
    expert: {
      scp: "Você integra scripts que convertem doc em wiki/HTML/PDF automaticamente para distribuições?",
      col: "Como você mantém controle rigoroso de alterações em docs extensos (manual de arquitetura) via Git?",
      arc: "De que maneira você descreve arquitetura de software avançada (ex.: diagramas UML) em docs e versiona?",
      int: "Com que frequência você faz a integração com ferramentas de doc automatizada (ex.: MkDocs, Sphinx)?",
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
      con: "Com que frequência você consolida dados de múltiplos projetos numa planilha central e faz dashboards?",
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
      rgx: "Com que frequência você adiciona Expressões Regulares na validação de campos em formulários?",
      cnd: "Quais critérios e técnicas você aplica na lógica condicional para otimizar a UX de formulários?",
    },
    expert: {
      ...fmExpertKeys,
      doc: "De que modo você gera relatórios avançados (Power BI, Data Studio) a partir de dados do form?",
      sec: "Como você lida com autenticação corporativa (SSO) e níveis de permissão diferenciados nos forms?",
      adv: "Quais destas técnicas você usa no desenvolvimento de formulários avançados para criação de issues automáticas (como para plataformas corporativas e de versionamento)?",
    },
  },
  "formBuilders"
);
export const devCsKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...csBeginnerKeys,
      nme: "Você define convenções de nome padrão (ex.: app_v1.0.zip) para facilitar identificação de builds?",
      syn: "Qual é o seu nível de experiência com plataformas de versionamento em nuvem?",
    },
    intermediate: {
      ...csIntermediateKeys,
      lck: "Qual é o seu nível de experiência resolvendo conflitos de merge e rebase?",
      ver: "Com que frequência você elabora versionamento intermediário (snapshots) para assets e integra esse fluxo com outros colaboradores?",
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
      mtr: "Você gera métricas simples (ex.: commits por semana, bugs) para visualização em dashboards BI básicos?",
      con: "Como você conecta planilhas ou CSVs de estatísticas de desenvolvimento ao BI (Power BI, Tableau)?",
      dsp: "Qual é sua prática para exibir dashboards de dados do repositório (ex.: PRs abertos/fechados)?",
      col: "Você coleta opiniões ou feedback dos devs via esse dashboard inicial para ajustes?",
      sch: "Com que frequência você agenda refresh manual, evitando sobrecarga no servidor?",
    },
    intermediate: {
      mul: "Você consolida múltiplas fontes (ex.: Git, Jira, Jenkins) e cria relatórios integrados em BI?",
      adv: "De que forma você elabora visualizações intermediárias (gráficos complexos, slicers) para gerentes?",
      tmx: "Como você aplica DAX ou expressões de cálculo (ex.: no Power BI) para métricas de dev específicas?",
      seg: "Você define segurança em nível de linha (RLS) para times distintos (frontend, backend)?",
      cst: "Qual é sua prática para criar colunas ou medidas customizadas, ex.: 'velocidade de merges'? (Sim/Não)",
    },
    expert: {
      big: "Como você lida com grandes volumes de dados (logs, telemetria real-time) em dashboards de desenvolvimento?",
      scr: "Você integra scripts R/Python para análises avançadas (previsões de backlog, tempo de correções)?",
      api: "De que modo você utiliza APIs do BI (REST) para atualizar datasets ou acionar pipelines CI/CD?",
      drl: "Você habilita drill-through avançado (ex.: clique em gráfico -> detalhes de commits) e gerencia performance?",
      aud: "Qual sua estratégia para auditoria e logs de acesso em relatórios de dev, respeitando confidencialidade?",
    },
  },
  "businessInteligence"
);
export const devCrmsKeys = withFrozenLibreLabel(
  {
    beginner: {
      trk: "Você usa CRM para acompanhar leads de parcerias de software? Em que nível faz registro básico?",
      int: "Como você integra dados simples (planilha de contatos) ao CRM para organizar potenciais clientes?",
      upd: "Com que frequência você atualiza manualmente status de negociações (orçamentos, demos) para software?",
      cat: "Você categoriza clientes por tipo de solução (ex.: web, mobile) e mantém? (Sim/Não)",
      rep: "De que forma você gera relatórios iniciais (ex.: pipeline) para entender quais negociações avançam?",
    },
    intermediate: {
      scp: "Você cria campos customizados intermediários (versão de produto, data de entrega) no CRM?",
      api: "Como você consome APIs do CRM para puxar oportunidades e integrá-las em um dashboard dev?",
      aut: "Você automatiza e-mails de follow-up (ex.: test drive, POC) ao subir status de lead no CRM?",
      sec: "Qual sua abordagem para definir permissões em times (marketing, dev) com visões diferentes do CRM?",
      adv: "Você configura relatórios intermediários para correlacionar feature requests e interesse de clientes?",
    },
    expert: {
      lnk: "Em que frequência você integra CRM e repositórios dev, criando links entre feature requests e leads?",
      big: "Você usa Big Data/IA (scoring de leads) e customiza logic no CRM para priorizar projetos de software?",
      ent: "De que forma você gerencia enterprise edition do CRM com fluxos avançados ou scripts no Salesforce?",
      sso: "Você implementa SSO para devs e PMs acessarem o CRM sem credenciais extras?",
      brk: "Como você resolve conflitos de dados (mesmo lead em times distintos) e garante integridade no CRM?",
    },
  },
  "Crms"
);
export const devErpsKeys = withFrozenLibreLabel(
  {
    beginner: {
      dep: "Como você separa os ambientes de dev/test do ERP, evitando mexer em dados reais?",
      syn: "Em que frequência você sincroniza tabelas de produtos, clientes, etc., para testar integrações no desenvolvimento?",
      scp: "Você escreve pequenos scripts (ex.: TOTVS, ABAP) para automatizar rotinas de ERP? Explique um caso.",
      doc: "De que forma você documenta configurações mínimas do ERP para devs que usam APIs dele?",
      net: "Como você garante acesso ao ERP para devs sem expor credenciais sensíveis?",
    },
    intermediate: {
      wfl: "Você cria fluxos intermediários (ex.: requisição -> aprovação) e integra com APIs de front-end?",
      mig: "Qual sua estratégia para migrar dados (dev -> staging -> prod) com minimal downtime?",
      ext: "Você auxilia times de dev a estender módulos do ERP (ex.: custom BAPIs) e resolver conflitos de versão?",
      sso: "De que modo você configura SSO ou AD Federation para logar no ERP e rastrear logs de dev?",
      rep: "Você gera relatórios técnicos intermediários (ex.: debugging) para ajustes no ambiente dev?",
    },
    expert: {
      adv: "Como você lida com configurações avançadas de performance (cache, indexes) para ambientes dev de ERP?",
      cst: "Você mantém repositório de customizações do ERP (scripts TOTVS, ABAP objects) versionado no Git?",
      api: "De que forma você constrói APIs REST robustas no ERP para integrá-las com microserviços externos?",
      hcl: "Você orquestra clusters HA/DR do ERP, validando cenários de failover em homolog e dev?",
      sec: "Qual é a sua abordagem para compliance (ex.: LGPD) ao manipular dados reais no ambiente de desenvolvimento?",
    },
  },
  "Erps"
);
export const devPlnKeys = withFrozenLibreLabel(
  {
    beginner: {
      brd: "Como você configura quadros básicos (Trello, Planner) para backlog de features no time de dev?",
      sta: "Você define colunas (To Do, Doing, Done) e move cartões para acompanhar o fluxo de desenvolvimento?",
      col: "Em que frequência você permite que vários devs editem os cartões simultaneamente?",
      ann: "De que forma você avisa as tarefas diárias via e-mail ou notificação, mantendo todos alinhados?",
      tmp: "Você utiliza modelos prontos para projetos pequenos e ensina o time a segui-los?",
    },
    intermediate: {
      srm: "Qual sua prática para aplicar Scrum ou Kanban intermediários (sprints, WIP limit) nesses boards?",
      rep: "Você gera relatórios de produtividade (burndown, velocity) e como lida com interpretações equivocadas?",
      sec: "Como você controla permissões entre times de dev e outros setores (QA, design)?",
      gnt: "Você integra algum recurso de Gantt ou timeline para planejamento de releases? (Sim/Não)",
      wbh: "De que forma você utiliza webhooks para mover tickets ou atualizar status automaticamente?",
    },
    expert: {
      adv: "Como você coordena múltiplos boards (microserviços, squads) em uma visão macro para liderança?",
      crd: "Você configura rotinas complexas (ex.: mover cartão ao merge do PR) integrando repositórios Git?",
      dev: "Em que frequência você gera relatórios executivos (Power BI, etc.) a partir dos boards de planning?",
      scl: "Você escala boards para centenas de tarefas simultâneas sem perda de performance ou usabilidade?",
      mlb: "Como você usa insights de IA ou analytics para prever prazos e gargalos em tasks de dev complexas?",
    },
  },
  "planning"
);
export const devAiAdKeys = withFrozenLibreLabel(
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
export const devAiImgKeys = withFrozenLibreLabel(
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
export const devAiVdKeys = withFrozenLibreLabel(
  {
    beginner: {
      rec: "Como você usa IA para gravar vídeos curtos (ex.: screencasts) de demonstração de software?",
      edt: "Você utiliza IA para edições básicas (corte, texto) de vídeos de tutoriais técnicos?",
      pub: "De que forma a IA otimiza a publicação de vídeos em wikis ou drives internos?",
      frq: "Como a IA ajuda a ajustar qualidade e resolução de capturas de IDE ou terminais?",
      mic: "Você usa IA para integrar áudio e vídeo automaticamente em tutoriais passo a passo?",
    },
    intermediate: {
      eff: "Como a IA insere efeitos e destaca trechos automaticamente em vídeos técnicos?",
      scr: "Você utiliza scripts baseados em IA (ex.: FFmpeg) para converter vídeos de demonstração?",
      col: "De que forma a IA otimiza a gravação e compartilhamento de replays de bugs?",
      sub: "Você utiliza IA para adicionar legendas automáticas em vídeos técnicos para times globais?",
      seg: "Como a IA ajuda a controlar permissões avançadas para vídeos técnicos internos?",
    },
    expert: {
      adv: "Como você utiliza IA para gerenciar edições multicâmera em eventos técnicos (hackathons)?",
      stp: "Você usa IA para otimizar streaming ao vivo de eventos do time dev sem travar redes locais?",
      gpu: "De que forma a IA resolve problemas de encoding e GPU em vídeos longos?",
      int: "Como você integra IA para criar capítulos automáticos vinculados a documentos técnicos?",
      ai_: "Com que frequência você utiliza IA para gerar highlights ou legendas automáticas em vídeos?",
    },
  },
  "video"
);
export const devLlmKeys = withFrozenLibreLabel(
  {
    beginner: {
      chat: 'Com que frequência você utiliza LLMs para gerar snippets ou "rascunhos" de código?',
      tips: "Como você orienta perguntas básicas para obter exemplos de funções ou algoritmos?",
      ...llmBeginnerKeys,
    },
    intermediate: {
      ...llmIntermediateKeys,
      int: "Com que frequência você integra a LLM em IDEs (ex.: GitHub Copilot)?",
      exp: "Qual é o seu nível de conhecimento em algoritmos de Aprendizado de Máquina?",
      ctx: "Com que frequência você armazena prompts para reiterações futuras?",
      stc: "Qual dessas prática você adota com modelos de chain-of-thought para orientações de tarefas com múltiplas camadas?",
    },
    expert: {
      ...llmExpertKeys,
      ftu: "Qual é o seu nível de experiência realizando fine-tuning ou prompt engineering avançado para modelos open-source?",
      crt: "Selecione as classes de algoritmos de Aprendizado de Máquina que você mais tem experiência desenvolvendo",
      api: "Quais destas práticas você utiliza para integrar LLMs com pipelines CI/CD?",
    },
  },
  "llms"
);
export const devAddQuestions = ObjectHelper.deepFreeze([
  "desenvolvimento",
  new Map([
    ["docs", devDocsKeys as any],
    ["spreadSheets", devSsKeys],
    ["formBuilders", devFmKeys],
    ["cloudStorage", devCsKeys],
    ["businessInteligence", devBiKeys],
    ["Crms", devCrmsKeys],
    ["Erps", devErpsKeys],
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
      cco: "Com que frequência você adiciona comentários sobre configurações de CI/CD nos arquivos de doc?",
      vrs: "Em que frequência você versiona a documentação junto com o código em repositórios Git?",
      col: "De que forma você permite que vários membros do time editem simultaneamente o mesmo doc?",
      cli: "Qual é o seu nível de experiência criando CLIs para que devs executem builds localmente?",
    },
    intermediate: {
      arc: "Como você registra arquitetura de pipelines (desenhos, YAML samples) em docs de referência?",
      sec: "Quais destas práticas de segurança você documenta em detalhes para suas pipelines?",
      pol: "Quais são suas ferramentas preferenciais para descrever políticas de commits, branch naming e merges em um documento de convenções?",
      ver: "Qual é o seu nível de experiência com automação de múltiplos containers?",
      aut: "Descreva livremente como você apresentaria automações básicas (hooks, triggers) em pipelines para uma equipe de desenvolvimento",
    },
    expert: {
      smk: "Você utiliza smokes ou specs em doc para QA e DevOps (ex.: BDD) e versiona junto do pipeline?",
      gen: "Como você gera documentação automatizada (ex.: swagger de microserviços) e vincula a um repositório doc?",
      ext: "De que forma você integra doc com wikis corporativas (SharePoint, Confluence) a fim de manter sincronizações?",
      adv: "Qual é seu procedimento para diagramar pipelines DevOps complexos (multi-stage, multi-cloud) e revisar periodicamente?",
      pol: "Quais destas técnicas você aplica para auditar seguindo normas de conformidade (ISO, PCI)?",
    },
  },
  "docs"
);
export const devOpsSsKeys = withFrozenLibreLabel(
  {
    beginner: {
      pip: "Você utiliza planilhas para documentar as etapas de pipeline implementadas?",
      env: "Com que frequência você registra variáveis de ambiente (ex.: URLs, keys) em uma planilha?",
      job: "De que forma planilhas participam do desenvolvimento da sua pipeline?",
      rep: "Em que frequência você gera relatórios em planilha sobre falhas e sucessos de build?",
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
      adv: "Com que frequência você gera dashboards complexos, cruzando dados de repositórios, monitoramento e falhas?",
      ver: "De que modo versiona planilhas importantes para não perder histórico?",
      aud: "Como você audita logs ou histórico de builds dentro de planilhas?",
    },
  },
  "spreadSheets"
);
export const devOpsFmKeys = withFrozenLibreLabel(
  opFmKeys,
  "formBuilders"
);
export const devOpsCsKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...csBeginnerKeys,
      nme: "Você define convenções de nome (ex.: app_v1.0.zip) para facilitar identificação de builds?",
      syn: "Qual é o seu nível de experiência com plataformas de versionamento em nuvem?",
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
      scc: "Quais destas técnicas você utiliza para aplicar caching avançado ou solutions como Artifactory/Nexus?",
      mig: "Quais destas práticas você considera essenciais nas automações para migrar grandes volumes (ex.: repositório de artefatos) para outra infraestrutura em nuvem (ex.: S3) sem quebrar links?",
    },
  },
  "cloudStorage"
);
export const devOpsBiKeys = withFrozenLibreLabel(
  {
    beginner: {
      mtr: "Como você coleta métricas simples de pipeline (tempo de build, número de falhas) e envia a dashboards BI?",
      con: "Você conecta planilhas ou logs do Jenkins/GitLab a uma ferramenta de BI (Power BI, Tableau)?",
      usu: "Em que frequência você gera visuais básicos (barras, pizza) para exibir estágios do pipeline?",
      doc: "Você documenta esses dashboards e explica para o time o que cada métrica significa?",
      ref: "De que forma você atualiza manualmente dados (refresh) e ensina a equipe a conferir?",
    },
    intermediate: {
      scp: "Você cria scripts para exportar logs e integrá-los automaticamente ao dataset do BI?",
      cal: "Como você cria colunas ou medidas intermediárias (ex.: lead time) no BI para DevOps?",
      mlt: "Você consolida múltiplas fontes (Git, Artifactory, Docker registry) num só relatório intermediário?",
      seg: "Você define segurança em nível de relatório ou dataset, evitando expor logs sensíveis?",
      das: "Em que frequência você monta dashboards com slice/dice para filtrar builds por data, branch, etc.?",
    },
    expert: {
      big: "Como você gerencia telemetria massiva (ex.: logs de contêiner, eventos de orquestrador) no BI, garantindo performance?",
      ext: "Você executa análises avançadas (Machine Learning, R/Python) dentro do BI para prever falhas?",
      apx: "De que forma integra APIs do BI (push dataset) ao seu pipeline e orquestra refresh em cada deploy?",
      adv: "Você utiliza Dashboards complexos com drill-down (ex.: clique em falha -> logs do Jenkins) e retira insights?",
      dsh: "Como você lida com a alta demanda de acessos a esse dashboard corporativo e evita lentidão?",
    },
  },
  "businessInteligence"
);
export const devOpsCrmsKeys = withFrozenLibreLabel(
  {
    beginner: {
      pip: "Como você registra demandas de clientes (ex.: pedidos de feature) no CRM e linka ao backlog DevOps?",
      col: "Você orienta a colaboração básica entre equipe de vendas e devOps, trocando info de tickets?",
      doc: "Com que frequência você cria docs simples de integração (CRM <-> pipelines) para orquestrar orçamentos?",
      upg: "Você atualiza manualmente status de negociações quando há build pronto ou demo final?",
      rep: "De que forma você gera relatórios básicos (quantidade de pedidos pendentes) para priorizar dev?",
    },
    intermediate: {
      scp: "Você cria scripts para sincronizar dados do CRM (leads) com tasks do Trello/Planner do pipeline?",
      sso: "Como você integra Single Sign-On do CRM e repositório dev, evitando credenciais duplicadas?",
      api: "Você consome APIs do CRM para acionar gatilhos (ex.: feature request) e gera issues no repositório?",
      sec: "Em que frequência você confere permissões de leitura/escrita para devs que consultam dados de clientes?",
      das: "Você monta dashboards intermediários correlacionando metas de vendas e progresso do pipeline?",
    },
    expert: {
      adv: "Como você consolida dados complexos do CRM com logs DevOps, gerando insights de tempo e custo?",
      bck: "De que modo você lida com backups e restaurações de ambientes CRM ligados a ciclo de entrega de software?",
      rls: "Você define releases conjuntas: quando uma feature atinge 'pronto' no devOps, o CRM muda o status do cliente?",
      cux: "Você implementa custom code no CRM (ex.: Apex, TOTVS) para iniciar pipeline de build? Explique.",
      hcl: "Qual sua estratégia de alta disponibilidade do CRM e notificação no Slack/Teams do devOps em caso de failover?",
    },
  },
  "Crms"
);
export const devOpsErpsKeys = withFrozenLibreLabel(
  {
    beginner: {
      int: "Como você orienta a integração básica do ERP (SAP, TOTVS) com repositórios de configs no devOps?",
      acc: "Você cria acessos mínimos (somente leitura) para devOps examinar tabelas ou configurações do ERP?",
      doc: "Em que frequência você documenta scripts de automação ABAP/TOTVS e versiona junto do pipeline?",
      env: "De que forma você organiza variáveis (url, credentials ERP) para staging e production no devOps?",
      bkp: "Você executa backups simples antes de cada atualização de pacotes do ERP para garantir rollback?",
    },
    intermediate: {
      sso: "Como você implementa Single Sign-On do ERP e configura no pipeline de automação das builds?",
      wfl: "Você cria workflows de transição no ERP que disparam eventos no devOps (ex.: webhooks)?",
      ext: "Em que frequência você estende módulos (ex.: custom ABAP) e versiona esse código no Git?",
      mig: "De que forma você lida com migrações de ambiente (desenv -> homolog -> prod) usando scripts devOps?",
      sec: "Você controla permissões avançadas (roles SAP, TOTVS) e logs de acesso para cada mudança?",
    },
    expert: {
      clt: "Como você orquestra clusters HA do ERP, definindo processos de deploy sem downtime no devOps?",
      adv: "Você integra pipelines que compilam/traduzem código do ERP (ABAP, TOTVS) em estágios automatizados?",
      pch: "Em que frequência você gerencia patches críticos do ERP e testa em um ambiente ephemeral do devOps?",
      big: "Você cruza dados massivos do ERP com contêineres, usando infra-as-code e define workflows complexos?",
      obs: "Qual sua abordagem para observabilidade (logs, métricas) do ERP dentro de dashboards devOps (Prometheus/Grafana)?",
    },
  },
  "Erps"
);
export const devOpsPlnKeys = withFrozenLibreLabel(
  {
    beginner: {
      brd: "Como você cria quadros simples (Trello, Planner) para organizar releases e sprints?",
      usr: "Você adiciona usuários do time dev, ops e QA, definindo tarefas básicas?",
      stt: "Em que frequência você marca status (a fazer, em progresso, concluído) e revisa diariamente?",
      ann: "De que forma você anuncia mudanças de prioridade ou prazos de forma visível no board?",
      cyc: "Você define ciclos curtos (1 ou 2 semanas) para acompanhar entregas no pipeline?",
    },
    intermediate: {
      aut: "Você cria automações (ex.: mover cartão ao fechar PR, disparar notificação) no board?",
      met: "Como você mede velocidade da equipe (points, horas) e gera relatórios de sprint?",
      sec: "Você controla permissões de acesso (ex.: apenas ops pode mover cartões críticos) no board?",
      mul: "Em que frequência você integra diversos boards (ex.: microserviços) em uma visão mais ampla?",
      scp: "Você une scripts que, ao abrir um card, já cria branch no Git e pipeline inicial? (Sim/Não)",
    },
    expert: {
      adv: "Como você gerencia boards complexos, com múltiplos squads e fluxos (Scrum + Kanban) simultâneos?",
      csl: "Você consolida dados de todos boards em dashboards executivos (ex.: Power BI) para diretoria?",
      wbk: "De que forma você integra webhooks para orquestrar fluxos de dev, QA e release automation?",
      lnk: "Você faz link entre card e PR do Git: ao mover card, o PR se atualiza? Cite um exemplo.",
      tnp: "Em que frequência você aplica técnicas preditivas/IA para estimar prazos e gargalos em sprints grandes?",
    },
  },
  "planning"
);
export const devOpsAiAdKeys = withFrozenLibreLabel(
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
export const devOpsAiImgKeys = withFrozenLibreLabel(
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
export const devOpsAiVdKeys = withFrozenLibreLabel(
  {
    beginner: {
      rec: "Você utiliza IA para gravar mini tutoriais de configurações de pipeline automaticamente?",
      edb: "Como a IA auxilia na edição de vídeos básicos (ex.: corte e texto explicativo) para DevOps?",
      upl: "Você usa IA para hospedar e organizar vídeos internos para treinamento rápido?",
      frm: "De que forma a IA converte formatos de vídeo automaticamente para compatibilidade com wikis?",
      aud: "Como a IA melhora a captura de áudio em vídeos técnicos com logs?",
    },
    intermediate: {
      eff: "Você utiliza IA para inserir efeitos ou zoom que destacam partes do pipeline ou logs?",
      arc: "De que forma a IA arquiva vídeos antigos de sprints e libera espaço em servidores?",
      str: "Como a IA ajuda no streaming ao vivo de deploys e apresentações técnicas?",
      sub: "Você utiliza IA para adicionar closed captions automaticamente a vídeos técnicos?",
      rep: "Como a IA gera relatórios de visualizações e consultas em vídeos tutoriais internos?",
    },
    expert: {
      adv: "Você usa IA para gerenciar gravações multicâmera em apresentações ou eventos de DevOps?",
      cod: "Como a IA otimiza encoding avançado (bitrate, codecs) para vídeos longos e técnicos?",
      drp: "Você utiliza pipelines baseados em IA para converter e distribuir vídeos de treinamento?",
      ia_: "De que forma você integra IA para geração de legendas e análise de vídeos técnicos?",
      scp: "Como você utiliza scripts e IA para pós-processar e publicar vídeos em portais internos?",
    },
  },
  "video"
);
export const devOpsLlmKeys = withFrozenLibreLabel(
  {
    beginner: {
      ...llmBeginnerKeys,
      cmt: "Com que frequência você gera comentários de pipeline ou explicações automáticas via LLM?",
      tip: "Com que frequência você usa LLMs para gerar esboços de scripts de CI/CD ou Dockerfiles simples?",
    },
    intermediate: {
      ...llmIntermediateKeys,
      prp: "Com que frequência você elabora prompts detalhando environment, orquestrador e escalabilidade para auxílio de LLMs?",
      ctx: "Com que frequência você armazena prompts para reiterações futuras?",
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
export const devOpsAddQuestions = ObjectHelper.deepFreeze([
  "devOps",
  new Map([
    ["docs", devOpsDocsKeys as any],
    ["spreadSheets", devOpsSsKeys],
    ["formBuilders", devOpsFmKeys],
    ["cloudStorage", devOpsCsKeys],
    ["businessInteligence", devOpsBiKeys],
    ["Crms", devOpsCrmsKeys],
    ["Erps", devOpsErpsKeys],
    ["planning", devOpsPlnKeys],
    ["audio", devOpsAiAdKeys],
    ["image", devOpsAiImgKeys],
    ["video", devOpsAiVdKeys],
    ["llms", devOpsLlmKeys],
  ]),
]);
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
}> = ObjectHelper.deepFreeze({
  beginner: {
    df1: "O quanto você se considera iniciante em uso de ferramentas tecnológicas do dia a dia?",
    df2: "Com que frequência você recorre a internet (tutoriais, vídeos) para resolver dúvidas simples?",
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
      use: "Com que frequência você escreve textos simples (relatórios, anotações) em um editor de texto básico?",
      col: "Como você compartilha ou colabora em documentos com outras pessoas? (Ex.: link, e-mail)",
      exp: "Qual é seu nível de experiência em exportar documentos para PDF ou outros formatos?",
    },
    intermediate: {
      rev: "Você controla revisões (histórico de versões, comentários) quando trabalha num documento?",
      lay: "De que forma você organiza seções, sumário automático ou referências cruzadas em textos maiores?",
      cmp: "Como você lida com compatibilidade (ex.: DOCX vs. ODT) e conversões de formato ao editar?",
      mac: "Você utiliza macros ou funcionalidades automatizadas para padronizar formatação ou inserir campos?",
      per: "Qual é sua prática para proteger documentos com senha ou restrição de edição?",
    },
    expert: {
      vba: repeated.mcr,
      idx: "Você já criou índices remissivos, estilos de parágrafo avançados ou capítulos em docs complexos?",
      sec: "O quanto você manipula permissões avançadas, criptografia e controle de acesso em um editor de texto?",
      api: "Como você integra APIs ou plugins externos para enriquecer a edição (ex.: checagem gramatical)?",
      adv: "De que modo você gerencia documentos de alto volume (100+ páginas), mantendo consistência e performance?",
    },
  },
  "docs"
);
export const defSsKeys = withFrozenLibreLabel(
  {
    beginner: {
      mth: "Você realiza cálculos básicos (SOMA, MÉDIA) em planilhas para tarefas rotineiras?",
      fmt: "Como você formata células (cores, bordas) para destacar dados importantes?",
      fil: "Você sabe filtrar ou ordenar dados simples numa planilha? (Sim/Não)",
      col: "Com que frequência você compartilha planilhas para que outros possam visualizar ou editar?",
      bar: "Você cria gráficos básicos (barra, pizza) para ilustrar resultados ou tendências?",
    },
    intermediate: {
      piv: repeated.tbd,
      fml: "Você domina funções intermediárias (SE, PROCV, CONCAT) para automatizar cálculos mais complexos?",
      val: "Em que frequência você aplica validações de dados (listas suspensas, restrições de valor) nas células?",
      net: "Você integra ou importa dados externos (ex.: planilhas online, CSV) para comparar informações?",
      sec: "De que modo você protege certas abas ou intervalos contra edições indevidas?",
    },
    expert: {
      mcr: "Você cria macros ou scripts (VBA, Google Apps Script) para automatizar processos extensos?",
      dbi: "Como você conecta planilhas a bancos de dados ou APIs e atualiza os dados periodicamente?",
      prf: "Você realiza tuning ou otimização quando há muitas fórmulas e abas, evitando lentidão?",
      big: "Você manipula dados volumosos (milhares de linhas) e os consolida em dashboards avançados?",
      aud: "Qual é sua prática ao auditar ou rastrear mudanças em planilhas grandes (logs, versões anteriores)?",
    },
  },
  "spreadSheets"
);
export const defFmKeys = withFrozenLibreLabel(
  {
    beginner: {
      cre: "Você cria formulários básicos (Google Forms, etc.) para coletar informações simples?",
      cmp: "Como você define campos múltipla escolha ou abertas em seus formulários?",
      shr: "De que forma você compartilha o link do formulário com os participantes (e-mail, rede social)?",
      rsp: "Com que frequência você verifica as respostas e gera algum relatório simples do que foi coletado?",
      dsg: "Você personaliza a aparência (cores, imagens) ou usa configurações padrão?",
    },
    intermediate: {
      cnd: "Você adiciona lógicas condicionais (pular certas perguntas) em formulários de complexidade média?",
      val: "Como você valida tipos de resposta (ex.: número, e-mail) para evitar dados incorretos?",
      seg: "Você cria seções ou blocos diferentes no mesmo formulário para organizar melhor as perguntas?",
      col: "Em que frequência você colabora com outras pessoas na criação e edição do mesmo form?",
      ext: "Você exporta as respostas para planilhas ou integra com outros serviços (ex.: Slack, Zapier)?",
    },
    expert: {
      scr: "Você utiliza scripts (Apps Script, webhooks) para acionar processos automáticos a partir das respostas?",
      sec: "Como você restringe o acesso (login corporativo, links protegidos) e garante privacidade dos dados?",
      mul: "Você cria formulários multi-etapas, fluxos de aprovação ou workflows encadeados (N1->N2)?",
      rep: "Você gera relatórios avançados (ex.: Data Studio, Power BI) a partir dos dados coletados?",
      adv: "Em que frequência você embeda formulários em sites internos e customiza layout/JS adicional?",
    },
  },
  "formBuilders"
);
export const defCsKeys = withFrozenLibreLabel(
  {
    beginner: {
      upl: "Como você faz upload ou download de arquivos (ex.: Drive, Dropbox) para uso pessoal ou compartilhado?",
      shr: "Você sabe compartilhar pastas com permissões básicas (visualizar, comentar, editar)?",
      syn: "Em que frequência você sincroniza pastas locais com a nuvem, evitando versões desatualizadas?",
      rec: "De que forma você restaura arquivos excluídos acidentalmente ou versões anteriores?",
      nme: "Você segue algum padrão de nomeação de arquivos para facilitar buscas ou organização?",
    },
    intermediate: {
      qta: "Você controla quotas de espaço (limites) e gerencia excedentes em pastas de compartilhamento?",
      int: "Como você integra ferramentas de terceiros (ex.: editores online, automações) ao seu armazenamento?",
      bkp: "Qual sua prática de backup automático (scripts, agendador) para não perder dados importantes?",
      sec: "Você define criptografia ou senhas em certos arquivos/pastas, mantendo logs de acesso?",
      ver: "Em que frequência você utiliza versionamento automático (snapshots, histórico) para reverter mudanças?",
    },
    expert: {
      dfs: "Como você gerencia replicações ou sync avançado em vários dispositivos/sites de armazenamento?",
      pol: "Você aplica políticas de retenção e governança (ex.: tempo de expiração) a certos arquivos confidenciais?",
      aud: "De que modo você audita acessos (logs) e controla quem fez download ou exclusão de conteúdos críticos?",
      mig: "Em que frequência você migra arquivos entre provedores (ex.: AWS S3, GDrive) e garante integridade?",
      drp: "Qual sua estratégia de disaster recovery ou HA (alta disponibilidade) em caso de falha no storage principal?",
    },
  },
  "cloudStorage"
);
export const defBiKeys = withFrozenLibreLabel(
  {
    beginner: {
      con: "Como você conecta dados simples (planilhas, CSV) a uma ferramenta de BI (ex.: Power BI, Tableau)?",
      grf: "Você gera gráficos básicos (barras, linhas) para visualizar informações de maneira inicial?",
      seg: "De que forma você filtra dados ou faz pequenas segmentações para análises rápidas?",
      col: "Em que frequência você compartilha relatórios de BI com colegas ou superiores?",
      atz: "Você atualiza manualmente os dados (refresh) ou só carrega uma única vez?",
    },
    intermediate: {
      src: "Você consolida múltiplas fontes de dados (ex.: planilha + DB) em um mesmo dashboard intermediário?",
      calc: "Como você cria campos calculados (ex.: DAX, expressões) para análises mais avançadas?",
      das: "Você configura dashboards com métricas-chave (ex.: vendas, produtividade) e organiza visuais custom?",
      seg: "Em que frequência você define segurança em nível de linha ou permissões específicas por usuário?",
      ref: "Como você lida com agendamentos de refresh, evitando que dados fiquem defasados?",
    },
    expert: {
      adv: "Você resolve problemas de performance ao lidar com grandes volumes de dados (milhões de linhas)?",
      ent: "Em que forma você integra scripts R/Python para análises estatísticas ou preditivas avançadas?",
      wrk: "Você organiza workspaces compartilhados, governança e distribuição de relatórios em larga escala?",
      big: "Como você lida com Big Data (ex.: Hadoop, Spark) e ferramentas de BI, conectando pipelines robustos?",
      aud: "De que modo você audita acesso e mudanças em dashboards, garantindo rastreabilidade e compliance?",
    },
  },
  "businessInteligence"
);
export const defCrmsKeys = withFrozenLibreLabel(
  {
    beginner: {
      cad: "Você cadastra contatos ou leads básicos em um CRM (ex.: Salesforce, HubSpot)? (Sim/Não)",
      upd: "Em que frequência você atualiza manualmente status de leads ou clientes (ex.: prospect, ativo)?",
      seg: "De que forma você segmenta clientes (região, tipo de empresa) para campanhas iniciais?",
      rep: "Você gera relatórios simples (pipeline de vendas) para entender oportunidades em aberto?",
      com: "Como você anota conversas ou negociações diretamente no registro do cliente no CRM?",
    },
    intermediate: {
      auto: "Você cria automações de envio de e-mail, mudança de status ou lembretes no CRM?",
      scp: "Como você integra o CRM a outras ferramentas (ex.: e-mail marketing, planilhas) para sincronizar dados?",
      prf: "Em que frequência você configura perfis ou grupos (ex.: time de vendas, suporte) com permissões diferentes?",
      adv: "Você gera relatórios intermediários que cruzam dados de vendas, marketing e suporte? (Sim/Não)",
      cst: "De que forma você adiciona campos personalizados para registrar informações específicas do cliente?",
    },
    expert: {
      api: "Como você consome APIs do CRM para automações avançadas ou criação de dashboards externos?",
      big: "Você lida com análises de Big Data (ex.: IA para scoring de leads) dentro do CRM?",
      per: "Em que frequência você ajusta perfis de segurança complexos (ex.: ACL por campo) e audita logs de acesso?",
      mig: "Você migra dados massivos (ex.: outro CRM -> atual) e resolve conflitos (duplicidade de leads)?",
      adv: "De que modo você combina workflows multi-etapas (financeiro, suporte) para leads corporativos complexos?",
    },
  },
  "Crms"
);
export const defErpsKeys = withFrozenLibreLabel(
  {
    beginner: {
      nav: "Como você navega por módulos básicos (financeiro, estoque) em um ERP (ex.: TOTVS, SAP)?",
      cad: "Você cadastra fornecedores, produtos ou clientes simples sem grande complexidade no ERP?",
      rep: "Em que frequência você gera relatórios iniciais (vendas, pedidos) diretamente do ERP?",
      sup: "Como você busca ajuda (ex.: manual, suporte interno) quando algo básico falha no ERP?",
      doc: "De que forma você salva ou imprime documentos fiscais (ex.: notas) gerados no ERP?",
    },
    intermediate: {
      wfl: "Você configura fluxos intermediários (aplicação de desconto, aprovação gerencial) dentro do ERP?",
      rel: "Como você elabora relatórios customizados (ex.: Crystal, TOTVS Reports) para análises específicas?",
      mig: "Em que frequência você importa dados de planilhas ou migra entre ambientes (homolog, produção)?",
      sec: "Você define permissões intermediárias (ex.: apenas compras vê x, apenas vendas vê y)?",
      int: "De que modo você integra o ERP com outras ferramentas (CRM, e-commerce) e resolve conflitos de dados?",
    },
    expert: {
      mod: "Como você lida com customizações avançadas (scripts, ABAP) em cenários grandes e críticos?",
      ha_: "Você implementa alta disponibilidade (cluster, failover) no ERP, evitando parada total?",
      idx: "Em que frequência você otimiza índices no banco do ERP para ganho de performance?",
      prc: "De que forma você orquestra processos complexos (ex.: MRP, produção) e audita logs?",
      gov: "Você controla governança, compliance (LGPD, etc.) e auditoria avançada de transações no ERP?",
    },
  },
  "Erps"
);
export const defPlnKeys = withFrozenLibreLabel(
  {
    beginner: {
      brd: "Como você cria quadros ou listas de tarefas (Trello, Planner) para organizar atividades simples?",
      sta: "Você define colunas (A fazer, Fazendo, Feito) e move cartões conforme evolui nas tarefas?",
      prz: "Com que frequência você atribui prazos e avisa os envolvidos? (Ex.: data de entrega)",
      col: "De que forma você colabora com colegas no mesmo board, trocando comentários ou menções?",
      not: "Você habilita notificações (por e-mail, app) quando algo muda no quadro?",
    },
    intermediate: {
      aut: "Você configura automações (ex.: mover cartão ao vencer prazo, enviar lembrete) no quadro?",
      rep: "Em que nível você gera relatórios ou resumos (quantidade de tarefas concluídas) para acompanhamento?",
      sec: "Você define permissões intermediárias (ex.: apenas gerentes podem fechar cartões) no board?",
      int: "Com que frequência você integra a ferramenta de planejamento com e-mail, Slack ou outro software?",
      tim: "Você controla tempo ou estimativas (story points, horas) e registra no card? (Sim/Não)",
    },
    expert: {
      adv: "Como você coordena múltiplos quadros, squads e fluxos complexos (Scrum/Kanban) simultaneamente?",
      wbh: "Você utiliza webhooks ou scripts para criar cartões automaticamente ou atualizar status?",
      dsh: "Em que frequência você monta dashboards consolidados (ex.: Power BI) para ver progresso de várias equipes?",
      apr: "Você lida com fluxos de aprovação encadeados (ex.: líder -> diretor) e notifica stakeholders externos?",
      mlb: "De que forma você utiliza insights de IA ou métricas preditivas para planejar prazos e recursos?",
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
      rec: "Como você utiliza IA para gravar vídeos curtos (ex.: tutoriais simples ou demonstrações)?",
      edb: "Você usa IA para realizar cortes automáticos em vídeos antes do compartilhamento?",
      frq: "Como a IA facilita o upload e organização de vídeos em nuvem ou redes sociais?",
      aud: "Você utiliza IA para melhorar a qualidade do áudio em vídeos explicativos?",
      frm: "Como a IA ajusta formatos e resoluções de vídeos para garantir compatibilidade?",
    },
    intermediate: {
      eff: "Você utiliza IA para adicionar efeitos ou transições automaticamente em vídeos?",
      scr: "Como a IA ajuda a gravar screencasts com integração de áudio e vídeo?",
      net: "Você usa IA para gerenciar conexões e reduzir latência durante transmissões ao vivo?",
      col: "De que forma a IA colabora na edição e revisão de vídeos em equipe?",
      ext: "Como a IA otimiza a resolução ou bitrate de vídeos sem comprometer a qualidade?",
    },
    expert: {
      adv: "Você utiliza IA para edições avançadas (multi-track, efeitos complexos) em vídeos?",
      mul: "Como a IA auxilia na integração de múltiplas câmeras e microfones em projetos de vídeo?",
      ai_: "Você usa IA para legendagem automática ou remoção de ruídos em vídeos de alta qualidade?",
      str: "De que forma a IA otimiza streaming de eventos ao vivo (ex.: webinars)?",
      scp: "Como você usa IA para orquestrar conversões em lote de vídeos com scripts?",
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
export const defaultAddQuestions = ObjectHelper.deepFreeze([
  "default",
  new Map([
    ["docs", defDocsKeys as any],
    ["spreadSheets", defSsKeys],
    ["formBuilders", defFmKeys],
    ["cloudStorage", defCsKeys],
    ["businessInteligence", defBiKeys],
    ["Crms", defCrmsKeys],
    ["Erps", defErpsKeys],
    ["planning", defPlnKeys],
    ["audio", defAiAdKeys],
    ["image", defAiImgKeys],
    ["video", defAiVdKeys],
    ["llms", defLlmKeys],
  ]),
]);
const required = true;
export const repeatedDefinitions: Readonly<{
  [K in repeatingDefinitionKeys]: FieldDescription;
}> = ObjectHelper.deepFreeze({
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
    // "Com que frequência ...?"
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
    // "De que maneira você puxa informações de bancos de dados ou APIs...?"
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
export const lib = ObjectHelper.deepFreeze(
  repeatedDefinitions.txtl
);
export const fmDefinitions: {
  [K in keyof typeof fmGeneralKeys]: FieldDescription;
} = ObjectHelper.deepFreeze({
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
    //"Quais destas técnicas você utiliza com mais frequência para analisar resultados aglomerados por diversas submissões de um formulário?"
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
    //"Quais destas ferramentas você utiliza para construção de formulários?"
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
} = ObjectHelper.deepFreeze({
  crt: repeatedDefinitions.exp,
  ...fmDefinitions,
});
export const fmIntermediateDefinitions: ROFieldRecord<
  typeof fmIntermediateKeys
> = ObjectHelper.deepFreeze({
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
> = ObjectHelper.deepFreeze({
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
  [K in complexityLabel]: KeysRecords<FormBuilderQuestionsKeys>;
}> = ObjectHelper.deepFreeze({
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
  Object.keys(dict).forEach(roleKey => {
    const roleData = dict[roleKey as keyof typeof dict];
    ["beginner", "intermediate", "expert"].forEach(
      levelKey => {
        if (!roleData[levelKey as keyof typeof roleData])
          return;
        if (
          !(
            "lib" in
            roleData[levelKey as keyof typeof roleData]
          )
        )
          roleData[levelKey as keyof typeof roleData] = {
            ...roleData[levelKey as keyof typeof roleData],
            lib,
          };
      }
    );
  });
  return ObjectHelper.deepFreeze(
    dict
  ) as EntryTypeDictionary<T>;
}
export const docEntryTypes: EntryTypeDictionary<DocsQuestionsKeys> =
  withFrozenLib({
    executivoAdministrativo: {
      beginner: {
        // eaDocsKeys.beginner
        fmt: repeatedDefinitions.exp, // "Qual é sua familiaridade com formatações simples..."
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
          // "De que maneira você integra dados de planilhas ou bancos de dados em documentos de texto?"
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
          // "Quais destas ferramentas de conversão de formatos de documentos você recomendaria para um usuário?",
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
          // "Quais ferramentas você utiliza para intervir em problemas de permissão (arquivos bloqueados, somente leitura) em rede?"
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
          // "De que maneira você descreve arquitetura de software avançada (ex.: diagramas UML) em docs e versiona?"
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
  });
export const ssEntryTypes: EntryTypeDictionary<SpreadsheetsQuestionsKeys> =
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
          // "De que maneira você insere gráficos básicos para ilustrar dados?"
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
          // "Quais destas técnicas você utiliza para manter listas de leads ou clientes...?"
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
          // "Quais destas técnicas você utiliza para manter listas de leads ou clientes...?"
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
          // "Quais destes recursos você utiliza para configurar proteções básicas de célula para evitar alterações indevidas?"
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
          // "Quais destas técnicas você utiliza para otimizar performance em planilhas extensas..."
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
          // "Quais destas técnicas você orienta a configuração de planilhas em rede local ou via ferramentas de compartilhamento (Drive, OneDrive)?"
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
          // "Quais destas técnicas você usa para evitar formatações que podem quebrar fórmulas ao abrir planilhas em versões distintas?"
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
          // "Quais destas técnicas você recomenda para fazer a conferência de dados em planilhas compartilhadas, resolvendo conflitos básicos de edição?"
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
          // "Quais destas técnicas você utiliza para intervir na criação ou troubleshooting de Tabelas Dinâmicas com múltiplas fontes de dados?"
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
          // "Quais destas técnicas você utiliza para solucionar problemas em planilhas que importam/ligam dados de outras pastas de trabalho?"
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
          // "Quais destas técnicas você usa para configurar validações e restrições (listas suspensas, intervalos bloqueados) para prevenir erros em planilhas?"
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
          // "Quais destas técnicas para depurar macros avançadas (VBA) que causam lentidão ou bloqueiam recursos compartilhados?"
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
  });
export const fmEntryTypes: EntryTypeDictionary<FormBuilderQuestionsKeys> =
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
  });
export const csDefinitions: ROFieldRecord<
  typeof csGeneralKeys
> = ObjectHelper.deepFreeze({
  //"Quais são suas formas preferenciar de habilitar o compartilhamento de arquivos em nuvem com outras colaboradores?",
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
  //"Quais destas plaformas de armazenamento em nuvem você tem preferência em utilizar?",
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
> = {
  upl: repeatedDefinitions.exp,
  ...csDefinitions,
  acc: repeatedDefinitions.yn,
};
export const csIntermediateDefinitions: ROFieldRecord<
  typeof csIntermediateKeys
> = {
  ...csDefinitions,
  ver: repeatedDefinitions.colab,
  bck: repeatedDefinitions.frq,
  sch: repeatedDefinitions.txtl,
};
export const csExpertDefinitions: ROFieldRecord<
  typeof csExpertKeys
> = {
  ...csDefinitions,
  scp: repeatedDefinitions.scp,
  sch: repeatedDefinitions.txtl,
};
export const stCsKeys: Readonly<{
  [K in complexityLabel]: { [k: string]: FieldDescription };
}> = ObjectHelper.deepFreeze({
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
    //"Quais destas técnicas você utiliza para gerenciar backups automáticos ou snapshots em storage de nuvem?"
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
    //"Quais destas técnicas você adota para lidar com prevenção e recuperação de desastres de repositórios críticos em nuvem?"
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
export const csEntryTypes: EntryTypeDictionary<CloudStorageQuestionsKeys> =
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
        //"Quais destas técnicas você adota para recuperar rapidamente documentos críticos em caso de desastre ou falha de acesso à nuvem?",
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
        //"Quais destas estratégias você adota para migrar grandes repositórios de documentos comerciais de um serviço um serviço em nuvem para outro?"
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
        //"Quais destas técnicas você utiliza para automatizar uploads e organização de assets e postagens?"
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
        //"Quais destas técnicas você utiliza para aplicar caching avançado ou solutions como Artifactory/Nexus?"
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
  });
//bi
//crms
//erps
//planning
export const aiAdDefinitions: ROFieldRecord<
  typeof aiAdGeneralKeys
> = ObjectHelper.deepFreeze({
  gen: repeatedDefinitions.exp,
  //"Quais critérios você utiliza para avaliar e determinar a qualidade dos áudios gerados pela IA?"
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
> = ObjectHelper.deepFreeze({
  set: repeatedDefinitions.yn,
  ...aiAdDefinitions,
});
export const aiAdIntermediateDefinitions: ROFieldRecord<
  typeof aiAdIntermediateKeys
> = ObjectHelper.deepFreeze({
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
> = ObjectHelper.deepFreeze({
  adv: repeatedDefinitions.frq,
  vol: repeatedDefinitions.yn,
  sec: repeatedDefinitions.sec,
  ...aiAdDefinitions,
});
export const aiAdEntryTypes: EntryTypeDictionary<AudioAiQuestionsKeys> =
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
  });
export const aiImgDefinitions: ROFieldRecord<
  typeof aiImgGeneralKeys
> = ObjectHelper.deepFreeze({
  gen: repeatedDefinitions.frq,
  //"Quais critérios você utiliza para avaliar a qualidade das imagens geradas pelas IAs?"
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
  //"Quais ferramentas você utiliza para editar e otimizar a qualidade das imagens geradas pelas IAs?"
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
  //"Quais ferramentas você converter o formato das imagens geradas por IAs?"
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
> = ObjectHelper.deepFreeze({
  set: repeatedDefinitions.yn,
  ...aiImgDefinitions,
});
export const aiImgIntermediateDefinitions: ROFieldRecord<
  typeof aiImgIntermediateKeys
> = ObjectHelper.deepFreeze({
  doc: repeatedDefinitions.frq,
  ing: repeatedDefinitions.txtl,
  ...aiImgDefinitions,
});
export const aiImgExpertDefinitions: ROFieldRecord<
  typeof aiImgExpertKeys
> = ObjectHelper.deepFreeze({
  adv: repeatedDefinitions.frq,
  vol: repeatedDefinitions.yn,
  sec: repeatedDefinitions.sec,
  ...aiImgDefinitions,
});
export const aiImgEntryTypes: EntryTypeDictionary<ImageAiQuestionsKeys> =
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
  });
export const aiVdDefinitions: ROFieldRecord<
  typeof aiVdGeneralKeys
> = ObjectHelper.deepFreeze({
  gen: repeatedDefinitions.exp,
  //"Quais critérios você utiliza para avaliar e determinar a qualidade dos vídeos gerados pela IA?"
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
> = ObjectHelper.deepFreeze({
  cnt: repeatedDefinitions.yn,
  set: repeatedDefinitions.exp,
  ...aiVdDefinitions,
});
const edt = ObjectHelper.deepFreeze({
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
> = ObjectHelper.deepFreeze({
  //"Quais as principais ferramentas que você utiliza para editar ou ajustar os vídeos gerados por IAs?"
  edt,
  doc: repeatedDefinitions.yn,
  ing: repeatedDefinitions.txtl,
  ...aiVdDefinitions,
});
export const aiVdExpertDefinitions: ROFieldRecord<
  typeof aiVdExpertKeys
> = ObjectHelper.deepFreeze({
  adv: repeatedDefinitions.frq,
  //"Quais as principais ferramentas que você utiliza para editar ou ajustar os vídeos gerados por IAs?"
  edt,
  txt: repeatedDefinitions.txts,
  ...aiVdDefinitions,
});
export const aiVdEntryTypes: EntryTypeDictionary<VideoAiQuestionsKeys> =
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
  });
export const llmDefinitions: ROFieldRecord<
  typeof llmGeneralKeys
> = ObjectHelper.deepFreeze({
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
> = ObjectHelper.deepFreeze({
  use: repeatedDefinitions.exp,
  sec: repeatedDefinitions.yn,
  ...llmDefinitions,
});
export const llmIntermediateDefinitions: ROFieldRecord<
  typeof llmIntermediateKeys
> = ObjectHelper.deepFreeze({
  ext: repeatedDefinitions.frq,
  stp: repeatedDefinitions.txtl,
  ...llmDefinitions,
});
export const llmExpertDefinitions: ROFieldRecord<
  typeof llmExpertKeys
> = ObjectHelper.deepFreeze({
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
}> = ObjectHelper.deepFreeze({
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
const stc: FieldDescription = ObjectHelper.deepFreeze({
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
  api: FieldDescription = ObjectHelper.deepFreeze({
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
export const llmEntryTypes: EntryTypeDictionary<LLMQuestionsKeys> =
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
  });
