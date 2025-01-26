import { ClassesKey } from "../definitions/client/helpers";
import {
  AiBlocks,
  OfficeBlocks,
  RangeCtxComponentNames,
  addQuestionsKey,
  roleQuestionsMap,
  roleType,
  techAppKey,
} from "../definitions/foundations";
import ObjectHelper from "../helpers/ObjectHelper";
//direct attributes and styles
const inps = `form-control`,
  texts = `${inps} form-text-area`,
  btn = `btn`,
  officeRangeds = `fsRanged fsOffice`;
export const classes: Readonly<Record<ClassesKey, string>> = Object.seal({
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
export const groupedApps: Readonly<Record<roleType, Array<techAppKey[]>>> =
  ObjectHelper.deepFreeze({
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
  ])
);
// Suggestions for autocomplete
export const suggestionsDict: { [k: string]: string[] } = {};
export const suggestionsGroupsMap: Readonly<
  Map<keyof typeof friendlyRoles, Map<keyof typeof AcronymsDefaults, string[]>>
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
          ["Google Workspace", "Microsoft Teams", "Zoom", "Trello", "Asana"],
        ],
        ["as", ["DocuSign", "Jira", "Tableau", "Notion", "ClickUp"]],
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
          ["SAP", "Totvs", "QuickBooks", "Oracle Financials", "Conta Azul"],
        ],
        ["as", ["FreshBooks", "NetSuite", "Wave", "GnuCash", "Budgeto"]],
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
          ["Salesforce", "HubSpot", "Pipedrive", "Zoho CRM", "RD Station"],
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
          ["Google Analytics", "HubSpot", "Canva", "Hootsuite", "SEMRush"],
        ],
        [
          "as",
          ["Mailchimp", "Buffer", "Adobe Photoshop", "Trello", "Monday.com"],
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
        ["ms", ["Splunk", "Nagios", "Zabbix", "New Relic", "Dynatrace"]],
        [
          "as",
          ["Datadog", "Prometheus", "SolarWinds", "PagerDuty", "OpsGenie"],
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
        ["ms", ["GitHub", "GitLab", "Jenkins", "SonarQube", "VS Code"]],
        [
          "as",
          ["Bitbucket", "CircleCI", "Eclipse", "NetBeans", "IntelliJ IDEA"],
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
        ["ms", ["Docker", "Kubernetes", "AWS", "Azure DevOps", "Terraform"]],
        [
          "as",
          ["Google Cloud Platform", "Ansible", "Puppet", "Chef", "Datadog"],
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
export const appGroupsDict: Record<RangeCtxComponentNames, addQuestionsKey> =
  ObjectHelper.deepFreeze({
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
export const eaDocKeys = ObjectHelper.deepFreeze({
  beginner: {
    fmt: "Qual é sua familiaridade com formatações simples (negrito, itálico, cabeçalho)?",
    cbb: "Como você utiliza comentários ou revisões em documentos colaborativos?",
    frq: "Com que frequência você compartilha documentos para edição com colegas?",
    tmp: "De que forma você aproveita modelos (templates) prontos para criar documentos básicos?",
    rdo: "O quanto você prefere responder com radio groups ou seleções rápidas?",
    exp: "O quanto você é familizariado com exportações em diferentes formatos, como .pdf ou .txt?",
    prt: "Qual sua experiência em configurar documentos para impressão?",
    spl: "Como você separa seções ou capítulos em documentos longos?",
    edt: "Você edita documentos colaborativos online ou offline?",
    syn: "De que forma você sincroniza documentos em diferentes dispositivos?",
  },
  intermediate: {
    tpl: "Como você cria sumários automáticos ou referências cruzadas em documentos extensos?",
    rev: "De que maneira você controla alterações e histórico de versões para múltiplos revisores?",
    mac: "Você utiliza macros ou automações para padronizar relatórios?",
    sgn: "Qual é sua experiência em assinar documentos digitalmente?",
    stt: "Que tipo de estratégia e ferramentas você utiliza para formatação do layout de edição?",
    idx: "Qual é a sua familaridade gerando índices remissivos automaticamente?",
    fmt: "De que maneira você utiliza estilos personalizados para padronizar relatórios?",
    crt: "Com que frequência você edita documentos colaborativos com permissões restritas por usuário?",
    exp: "Qual sua experiência em exportar documentos com configurações avançadas (marcas d’água, proteção)?",
    api: "Você já integrou editores de texto com APIs externas (ex.: para preenchimento automático)?",
  },
  expqert: {
    vba: "Como você desenvolve scripts VBA ou similares para automatizar processos complexos no editor de texto?",
    sec: "O quanto você lida com permissões avançadas, criptografia ou restrições de edição?",
    stl: "Descreva como você gerencia estilos de parágrafo, índice remissivo e formatação de layout altamente customizada.",
    big: "Com que frequência você integra editores de texto a sistemas externos (APIs, bancos de dados)?",
    adv: "Que técnicas avançadas (campos dinâmicos, mala direta) você utiliza em documentos corporativos?",
    mlc: "Você já aplicou aprendizado de máquina para gerar ou analisar texto automaticamente?",
    int: "Como você utiliza integração com plataformas como SharePoint ou OneDrive para gerenciamento de documentos?",
    tem: "Você gerencia templates corporativos com restrições para diferentes departamentos?",
    dig: "De que forma você implementa processos de assinatura digital ou certificação de documentos?",
    rpt: "Qual sua experiência em gerar relatórios analíticos automatizados com base em texto estruturado?",
  },
});
export const eaSsKeys = ObjectHelper.deepFreeze({
  beginner: {
    sum: "Qual é sua familiaridade com funções básicas (SOMA, MÉDIA) e formatação de células?",
    frq: "Com que frequência você configura planilhas para controle de dados simples?",
    col: "Como você colore ou categoriza células para destacar informações importantes?",
    spr: "Você prefere responder perguntas por meio de seletores (radio, select) ou textos longos?",
    fil: "De que modo você filtra ou classifica dados de forma simples?",
    frz: "Como você congela linhas ou colunas em planilhas?",
    fmt: "Você já utilizou formatação condicional em planilhas simples?",
    cpy: "Qual sua experiência com copiar/colar fórmulas e preservar referências absolutas?",
    ins: "De que maneira você insere gráficos básicos para ilustrar dados?",
    shs: "Você trabalha frequentemente com abas múltiplas em planilhas?",
  },
  intermediate: {
    piv: "Como você utiliza tabelas dinâmicas para analisar grandes quantidades de dados?",
    adv: "Você integra dados de outras fontes (CSV, BD) na planilha? (Sim / Não)",
    prc: "Em que frequência você cria fórmulas intermediárias (SE, PROCV, CONCAT) para automação?",
    cht: "Que tipos de gráficos você costuma gerar para visualização?",
    col: "Como você colabora com outros usuários simultaneamente (co-edit, proteções)?",
    tbl: "Você já criou tabelas formatadas para facilitar análises e filtros?",
    spl: "Como você divide dados em colunas separadas (Texto para Colunas)?",
    lnk: "Qual sua experiência em vincular células entre diferentes planilhas?",
    imp: "Você já importou dados de fontes online para análises em tempo real?",
    aud: "De que forma você audita ou depura fórmulas para corrigir erros?",
  },
  expert: {
    mcr: "Que estratégias de macros (VBA, AppScript) você utiliza para automatizar tarefas repetitivas?",
    big: "Com que frequência você se integra a BI ou dashboards externos (Power BI, Data Studio)?",
    arr: "De que forma você trabalha com fórmulas matriciais ou funções avançadas (ÍNDICE, CORRESP)?",
    dbi: "Descreva como você conecta planilhas a bancos de dados SQL ou APIs, se aplicável.",
    prf: "Você faz tuning de performance em planilhas com dezenas de abas e fórmulas complexas?",
    sch: "Você já utilizou scripts para agendar atualizações automáticas de dados?",
    mlc: "Como você aplica aprendizado de máquina para prever ou categorizar dados?",
    api: "De que forma você utiliza APIs para buscar ou enviar dados automaticamente?",
    adv: "Que práticas avançadas você utiliza para validar e limpar grandes volumes de dados?",
    rpt: "Como você cria relatórios interativos integrando gráficos e controles (ex.: slicers)?",
  },
});
export const eaFmKeys = ObjectHelper.deepFreeze({
  beginner: {
    crt: "Qual é sua experiência básica em criar formulários para coleta de dados simples?",
    tpl: "Você já utilizou templates prontos para formular pesquisas ou questionários?",
    slc: "Como você escolhe entre perguntas de múltipla escolha, texto ou classificações?",
    rsp: "Com que frequência você coleta respostas para análises simples?",
    emb: "Você já incorporou formulários em sites ou plataformas externas?",
  },
  intermediate: {
    aut: "Como você configura automações para envio de notificações ou respostas?",
    exp: "Qual sua experiência em exportar respostas para planilhas ou sistemas externos?",
    api: "Você já integrou formulários a APIs para coleta ou envio de dados?",
    val: "De que forma você aplica validações para garantir respostas corretas (ex.: regex)?",
    rpt: "Como você gera relatórios com base nas respostas coletadas?",
  },
  expert: {
    adv: "Quais práticas avançadas você utiliza para integrar formulários a CRMs ou bancos de dados?",
    cus: "Qual é a sua familiaridade na edição customizada de formulários com HTML, CSS ou JavaScript?",
    sec: "Que medidas de segurança você implementa para proteger dados sensíveis?",
    mlc: "De que maneira você aplica inteligência artificial para análise de respostas?",
    dsh: "Como você conecta formulários a dashboards para relatórios em tempo real?",
  },
});
export const eaCsKeys = ObjectHelper.deepFreeze({
  beginner: {
    upl: "Qual é sua experiência em enviar arquivos para armazenamento em nuvem?",
    org: "Como você organiza pastas e arquivos para facilitar o acesso?",
    shr: "De que forma você compartilha arquivos com outras pessoas?",
    acc: "Você já configurou permissões básicas (somente leitura, edição) para arquivos?",
    syn: "Com que frequência você sincroniza arquivos entre dispositivos?",
  },
  intermediate: {
    ver: "Como você lida com controle de versões para evitar perda de dados?",
    bck: "Você já configurou backups automáticos para pastas ou arquivos importantes?",
    api: "Qual sua experiência em acessar serviços de nuvem por meio de APIs?",
    sec: "De que forma você implementa autenticação em dois fatores para proteger seus dados?",
    sch: "Como você configura políticas de armazenamento para garantir conformidade (ex.: LGPD)?",
  },
  expert: {
    int: "Como você integra armazenamento em nuvem a sistemas corporativos ou CRMs?",
    big: "De que maneira você lida com grandes volumes de dados e distribuição eficiente?",
    adv: "Quais práticas avançadas você utiliza para otimizar custos e desempenho na nuvem?",
    mig: "Você já migrou grandes volumes de dados entre provedores de nuvem?",
    rpt: "Como você monitora e gera relatórios sobre uso de armazenamento?",
  },
});
export const eaBiKeys = ObjectHelper.deepFreeze({
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
});
export const eaCrmKeys = ObjectHelper.deepFreeze({
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
});
export const eaErpKeys = ObjectHelper.deepFreeze({
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
});
export const eaPlnKeys = ObjectHelper.deepFreeze({
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
});
export const eaAiAdKeys = ObjectHelper.deepFreeze({
  beginner: {
    rec: "Em que situações você utiliza ferramentas de IA generativa (ex.: clonagem de voz) para criar áudios simples ou recados?",
    mic: "Você ajusta a configuração do microfone ao usar soluções de síntese de voz ou clonagem vocal?",
    fmt: "Como você converte formatos de áudio (ex.: WAV -> MP3) quando a IA gera o arquivo e precisa compartilhar?",
    ply: "De que forma você reproduz e avalia a qualidade de áudios gerados pela IA antes de distribuí-los?",
    shr: "Você compartilha áudios sintetizados pela IA? Quais plataformas ou políticas de acesso costuma usar?",
  },
  intermediate: {
    dsp: "Como você aplica filtros ou efeitos (ex.: redução de ruído) após a IA criar ou modificar um áudio?",
    net: "Você encontra problemas de latência ou rede ao enviar/receber áudios gerados por IA em serviços online?",
    mix: "Em que frequência você mescla faixas de áudio humano com conteúdo de voz ou música gerada por IA?",
    stp: "Você documenta o passo a passo (drivers, plugins) para configurar e utilizar soluções de IA na criação de áudio?",
    adv: "Como você soluciona problemas de entonação ou timing quando várias faixas geradas por IA são combinadas em um único projeto?",
  },
  expert: {
    enc: "Como você protege e criptografa áudios confidenciais gerados por IA (ex.: reuniões executivas sintetizadas)?",
    api: "Em que nível você integra APIs avançadas de TTS ou clonagem de voz em seus fluxos de trabalho administrativos?",
    dsp: "Você customiza parâmetros de DSP (equalização, compressão) para adequar áudios de IA a padrões corporativos?",
    adv: "Com que frequência você configura placas de som dedicadas ou setups profissionais para otimizar a geração de áudio via IA?",
    big: "Você manipula lotes extensos de áudios gerados por IA (ex.: podcasts sintéticos) e gera insights ou relatórios automáticos?",
  },
});
export const eaAiImgKeys = ObjectHelper.deepFreeze({
  beginner: {
    vie: "Como você gera e organiza imagens criadas por IA (ex.: Midjourney, DALL·E) em pastas ou galerias simples?",
    edc: "Você faz edições breves (recortar, girar) após a IA gerar a imagem, usando ferramentas básicas (Paint, Preview)?",
    cpt: "Com que frequência você solicita capturas de tela ou referências para a IA aprimorar o resultado visual?",
    cmp: "Você converte formatos (ex.: PNG -> JPG) depois que a IA produz a imagem, para otimizar tamanho ou qualidade?",
    shr: "De que modo você compartilha imagens geradas por IA com colegas (links, anexos) e controla a distribuição?",
  },
  intermediate: {
    lay: "Você lida com camadas (layers) ao ajustar detalhes em editores intermediários (GIMP) de uma imagem criada por IA?",
    cor: "Como você faz correções de cor ou iluminação em imagens geradas por IA, mantendo consistência visual?",
    net: "Em que frequência você hospeda criações de IA em plataformas colaborativas (ex.: Drive, Imgur) para feedback?",
    ret: "Você faz retoques (ex.: remover imperfeições) em criações da IA, unindo o trabalho humano + geração automática?",
    sec: "Qual sua prática para ocultar dados sensíveis (blur) ou metadados de imagens geradas por IA antes de compartilhar?",
  },
  expert: {
    ani: "Como você gera animações curtas (ex.: GIFs ou vídeos) a partir de sequências de imagens criadas por IA?",
    spt: "Você organiza sprites ou atlases de elementos (ex.: ícones gerados) para uso em aplicativos corporativos?",
    prf: "Em que frequência você otimiza imagens de alta resolução criadas por IA para sites ou sistemas exigentes?",
    cad: "Como você lida com IA para gerar vetores (SVG) ou elementos CAD e integrá-los a fluxos corporativos?",
    big: "Você automatiza lotes massivos de geração/edição usando scripts (ex.: ImageMagick) e IA, gerando relatórios de volume?",
  },
});
export const eaAiVdKeys = ObjectHelper.deepFreeze({
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
});
export const eaLlmKeys = ObjectHelper.deepFreeze({
  beginner: {
    use: "Você já utilizou chatbots de IA (ChatGPT, etc.) para perguntas gerais ou explicações simples?",
    lan: "Em que idioma você costuma conversar com a IA e se sente confortável (PT/EN)?",
    val: "Como você verifica se a resposta gerada pela IA não contém erros graves ou omissões?",
    sec: "Você evita colocar dados sensíveis (senhas, PII) em prompts? (Sim/Não)",
    col: "De que forma você compartilha a resposta da IA com colegas ou registra no seu workflow?",
  },
  intermediate: {
    sys: "Você utiliza prompts com mensagens de sistema ou persona para guiar respostas da IA?",
    stp: "Como você elabora prompts em etapas (chain-of-thought) para obter maior precisão?",
    cor: "Em que frequência você corrige a IA apontando erros e melhorando o prompt subsequente?",
    scp: "Você integra a IA em scripts ou miniaplicativos (ex.: API calls) para automatizar tarefas?",
    ext: "Você faz extração de trechos relevantes (summary) e registra em algum local de conhecimento?",
  },
  expert: {
    fin: "Como você lida com fine-tuning ou custom instructions em modelos mais avançados (ex.: LLaMA)?",
    aud: "Você registra logs de prompts/respostas em sistemas e revisa para compliance ou melhoria?",
    int: "Em que forma você integra a IA a pipelines automáticos (ex.: gera rascunhos, sugere relatórios)?",
    adv: "Você manipula prompts extensos ou refinados para respostas muito específicas ou técnicas?",
    pol: "Qual sua política para governança (LGPD, compliance) e exclusão de dados sensíveis enviados à IA?",
  },
});
export const executivoAdministrativoAddQuestions = ObjectHelper.deepFreeze([
  "executivoAdministrativo",
  new Map([
    ["docs", eaDocKeys as any],
    ["spreadSheet", eaSsKeys],
    ["formBuilder", eaFmKeys],
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
export const fnDocKeys = ObjectHelper.deepFreeze({
  beginner: {
    frm: "Como você elabora documentos financeiros simples (propostas, orçamentos) e formata texto básico?",
    ref: "De que forma você insere referências internas ou notas explicativas em documentos?",
    rev: "Com que frequência você revisa contratos ou relatórios de texto para ver se há erros de digitação ou valores trocados?",
    upg: "Você já atualizou versões de documentos financeiros de um mês para outro? (ex.: relatório de fechamento)",
    cmt: "Como você adiciona comentários para o time de finanças em relatórios ou documentos?",
  },
  intermediate: {
    stl: "Qual é sua prática para padronizar estilos (cabeçalho, corpo, rodapé) em relatórios financeiros intermediários?",
    trc: "Como você controla versões quando várias pessoas revisam o mesmo documento simultaneamente?",
    ass: "Você já configurou assinatura digital em relatórios financeiros? Como?",
    dbl: "De que maneira você integra dados de planilhas ou bancos de dados em documentos de texto?",
    alt: "Você faz uso de texto alternativo ou marcações adicionais para facilitar auditorias? (Sim/Não)",
  },
  expert: {
    mac: "Você utiliza macros ou scripts avançados (VBA, Python) para gerar relatórios financeiros automaticamente?",
    cmp: "Como você compara documentos de versões diferentes para identificar mudanças? (ex.: diferenças de datas, valores)",
    rpt: "De que forma você cria relatórios consolidados extensos (ex.: de desempenho financeiro anual) com sumário, índice e seções detalhadas?",
    seg: "Você implementa permissões avançadas ou encriptação para relatórios confidenciais?",
    apx: "Como você gerencia anexos ou apêndices em documentos de fechamento contábil e fiscal complexos?",
  },
});
export const fnSsKeys = ObjectHelper.deepFreeze({
  beginner: {
    sum: "Qual é sua familiaridade com funções financeiras básicas (ex.: SOMA, MÉDIA, SOMASE)?",
    frq: "Com que frequência você configura planilhas para registrar receitas e despesas?",
    col: "Como você marca células com cores para diferenciar gastos fixos de variáveis?",
    cat: "De que modo você categoriza transações (alimentação, transporte, etc.) de forma simples?",
    fil: "Como você utiliza filtros básicos para visualizar apenas certos períodos ou tipos de despesas?",
  },
  intermediate: {
    tab: "Você costuma criar Tabelas Dinâmicas para análise de custos ou receitas mensais/anuais?",
    adv: "Como você integra planilhas financeiras a outras fontes de dados, como extratos bancários (CSV)?",
    dev: "Em que frequência você usa fórmulas intermediárias (PROCV, SE, TIR) para simulações financeiras?",
    cht: "Que tipos de gráficos (pizza, barras) você gera para ilustrar resultados financeiros?",
    val: "Como você valida dados de entrada (ex.: datas, valores > 0) para evitar erros em análises financeiras?",
  },
  expert: {
    mcr: "Quais macros ou scripts avançados você desenvolve para automatizar consolidação de múltiplas abas?",
    big: "Com que frequência você exporta dados para BI ou ferramentas de previsão de fluxo de caixa?",
    arr: "Você domina fórmulas matriciais (ex.: ÍNDICE e CORRESP para localizar valores complexos)?",
    dbi: "De que forma você conecta planilhas a bancos de dados ou APIs para buscar cotações ou indicadores?",
    aud: "Como você audita fórmulas e checa consistência de resultados em planilhas de grande porte?",
  },
});
export const fnFmKeys = ObjectHelper.deepFreeze({
  beginner: {
    cre: "Como você cria formulários básicos para solicitar dados financeiros (ex.: reembolso)?",
    rls: "Você já definiu regras simples para aceitar apenas números ou datas em campos de formulário?",
    sec: "Como você protege formulários simples com permissões de edição ou senha?",
    eml: "De que forma você envia o link ou o arquivo de formulário para o time financeiro?",
    rep: "Você costuma gerar relatórios básicos de respostas (ex.: planilha com valores de cada reembolso)?",
  },
  intermediate: {
    log: "Você utiliza lógicas condicionais (ex.: mostrar campo extra se for despesas > R$1000) em formulários?",
    ntf: "Como você configura notificações automáticas para cada envio de formulário, por exemplo, via e-mail?",
    val: "Você valida campos para garantir que sejam valores numéricos corretos (ex.: pontos decimais) ou datas?",
    api: "Em que frequência você integra formulários a sistemas de finanças ou ERP via APIs?",
    fwd: "Como você encaminha automaticamente as respostas para o responsável contábil ou fiscal?",
  },
  expert: {
    adv: "Quais técnicas avançadas (ex.: scripts, CSS custom) você utiliza para criar formulários financeiros profissionais?",
    aut: "De que modo você automatiza o processamento das respostas em relatórios finais (ex.: planilhas pivotadas)?",
    sec: "Como você lida com confidencialidade de informações (RG, CPF, dados bancários) em formulários de reembolso?",
    e2e: "Você já criou fluxos de aprovação de formulário (ex.: envio -> aprovação do gestor -> encaminhamento ao financeiro)?",
    dsh: "Como você conecta esses formulários a dashboards financeiros em tempo real (ex.: Google Data Studio)?",
  },
});
export const fnCsKeys = ObjectHelper.deepFreeze({
  beginner: {
    upl: "Qual é sua experiência em enviar relatórios e documentos financeiros para armazenamento em nuvem?",
    org: "Como você organiza pastas de extratos, demonstrações e notas fiscais para facilitar a busca?",
    shr: "De que forma você compartilha arquivos de planilhas e relatórios com colegas de finanças?",
    prm: "Você já configurou permissões básicas (visualizar, editar) para colaboradores financeiros?",
    syn: "Em que frequência você sincroniza seus arquivos financeiros entre dispositivos para acesso rápido?",
  },
  intermediate: {
    ver: "Como você utiliza versionamento de arquivos importantes (ex.: balanço trimestral) para evitar sobrescritas?",
    bkp: "Você configura backups automáticos para garantir que relatórios antigos não sejam perdidos?",
    int: "De que forma você integra serviços de nuvem com softwares contábeis ou ERPs?",
    sec: "Qual sua prática em encriptar ou proteger pastas que contêm dados de clientes ou transações sensíveis?",
    log: "Você audita logs de acesso para saber quem baixou ou alterou relatórios importantes?",
  },
  expert: {
    mch: "Como você lida com grandes volumes de documentos fiscais, notas e relatórios de múltiplos anos?",
    cln: "Você já implementou limpeza ou arquivamento automático de arquivos antigos para economizar espaço?",
    cdc: "Que políticas de compliance (ex.: LGPD) você segue no armazenamento de informações financeiras?",
    mid: "Você integra dados financeiros armazenados na nuvem a mecanismos de BI ou machine learning?",
    drs: "Como você recupera rapidamente documentos críticos em caso de desastre ou falha de acesso à nuvem?",
  },
});
export const fnBiKeys = ObjectHelper.deepFreeze({
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
});
export const fnCrmKeys = ObjectHelper.deepFreeze({
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
});
export const fnErpKeys = ObjectHelper.deepFreeze({
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
});
export const fnPlnKeys = ObjectHelper.deepFreeze({
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
});
export const fnAiAdKeys = ObjectHelper.deepFreeze({
  beginner: {
    trn: "Qual é sua experiência básica em transformar texto em áudio (TTS) para relatórios ou comunicados financeiros?",
    gen: "Você gera áudios simples para atualização de status das finanças? (Sim/Não)",
    cln: "Já viu processos de voice cloning? É algo que você considera útil para treinamentos contábeis?",
    spd: "Como você ajusta velocidade ou entonação para áudios explicativos sobre indicadores econômicos?",
    exm: "Você costuma exemplificar fluxos financeiros em áudios curtos para colegas menos experientes?",
  },
  intermediate: {
    ent: "Você utiliza entonação customizada ou pronúncia específica para termos contábeis/fiscais em áudios?",
    wfl: "De que modo você insere áudios explicativos em fluxos de trabalho (ex.: enviar áudio junto de um relatório)?",
    edi: "Você edita ou corta trechos de áudio para adequar informações ao contexto financeiro?",
    tdb: "Em que frequência você armazena áudios junto a documentos ou planilhas, para referência futura?",
    mul: "Como você lida com múltiplos locutores em um único áudio (ex.: reuniões gravadas)?",
  },
  expert: {
    sec: "Você criptografa áudios confidenciais (ex.: consultoria financeira) ou usa assinaturas digitais de áudio?",
    scr: "De que forma você utiliza scripts avançados para gerar áudio dinâmico a partir de dados (ex.: cotações)?",
    adv: "Você já aplicou IA de voz para narrar relatórios financeiros extensos?",
    api: "Como você integra APIs de TTS ou voice cloning com sistemas financeiros?",
    lst: "Descreva algum caso em que áudios avançados auxiliaram a tomada de decisão executiva no financeiro.",
  },
});
export const fnAiImgKeys = ObjectHelper.deepFreeze({
  beginner: {
    add: "Você insere imagens simples (gráficos exportados) em relatórios financeiros?",
    edi: "Qual sua experiência em editar imagens para destacar resultados (ex.: setas, destaques coloridos)?",
    tmb: "Você gera miniaturas de gráficos ou planilhas para uso em apresentações curtas?",
    ext: "Já extraiu dados de imagens (ex.: OCR de notas fiscais) de forma básica?",
    cmp: "Como você compara imagens de relatórios de um mês para outro? (Visualmente, ou outra técnica?)",
  },
  intermediate: {
    chl: "Você cria colagens de gráficos e tabelas (ex.: mosaic) para gerar relatórios visuais?",
    tgo: "Você já aplicou técnicas de anotação em imagens (ex.: destacar linhas em um print de planilha)?",
    ocr: "Em que frequência você utiliza OCR para extrair texto de documentos impressos (ex.: notas, faturas)?",
    pub: "Como você publica imagens de resultados contábeis em sites ou intranets?",
    pkg: "Você utiliza pacotes ou softwares intermediários (Photoshop, GIMP) para adequar imagens de relatórios?",
  },
  expert: {
    mlc: "Você já usou IA para reconhecer padrões em imagens de documentos financeiros?",
    adv: "Como você integra extração de dados de imagens com planilhas ou ERPs (ex.: ID de fatura)?",
    sec: "De que forma você protege imagens sensíveis (ex.: prints de dados bancários) contra acessos indevidos?",
    dsp: "Você gera apresentações detalhadas unindo várias imagens de dashboards e comparativos?",
    dif: "Descreva como você detecta diferenças em duas imagens de relatórios (ex.: highlight de alterações).",
  },
});
export const fnAiVdKeys = ObjectHelper.deepFreeze({
  beginner: {
    tut: "Você produz tutoriais em vídeo sobre processos financeiros simples (ex.: cadastro de notas)?",
    rec: "Com que frequência você grava a tela para explicar planilhas ou relatórios aos colegas?",
    edi: "Qual sua experiência em editar vídeos breves (cortar, adicionar legendas) para fins contábeis?",
    shw: "De que forma você mostra gráficos e dashboards em apresentações de vídeo?",
    sld: "Você costuma converter slides de resultados financeiros em vídeo para fácil consumo?",
  },
  intermediate: {
    anl: "Você já criou animações ou transições para explicar tendências de dados financeiros?",
    tts: "Como você insere narração (voz humana ou TTS) para guiar o espectador em relatórios mais complexos?",
    eda: "Você edita trilhas sonoras ou efeitos para dinamizar apresentações de finanças?",
    sub: "Qual é sua prática para adicionar legendas automáticas, inclusive termos contábeis, aos vídeos?",
    mlc: "Você utiliza IA de vídeo para gerar vídeos instrutivos a partir de roteiros de relatórios?",
  },
  expert: {
    brd: "Como você produz board recordings longos e dinâmicos (ex.: fluxos de caixa anual) com narração?",
    int: "De que modo você integra plataformas de vídeo com dashboards interativos em tempo real?",
    scn: "Você já fez ‘cenários virtuais’ ou substituição de fundo (greenscreen) em apresentações financeiras?",
    adv: "Que práticas avançadas utiliza para criar vídeos complexos (transições 3D, sobreposição de dados) ligados a planilhas?",
    sec: "Como você protege vídeos confidenciais (ex.: contendo dados de faturamento) contra acesso indevido?",
  },
});
export const fnLlmKeys = ObjectHelper.deepFreeze({
  beginner: {
    chat: "Você já utilizou chatbots (ex.: ChatGPT) para tirar dúvidas sobre linguagem de vendas ou copiar termos comerciais?",
    cor: "Com que frequência você pede correções ou reformulações de e-mails de prospecção para IA?",
    gnr: "Você gera rascunhos de discursos ou pitches comerciais usando modelos de linguagem?",
    sum: "Você utiliza IA para resumir relatórios longos de pipeline ou reuniões de vendas?",
    tip: "Como você trata dados de clientes (nome, informações) quando usa LLMs, evitando expor detalhes confidenciais?",
  },
  intermediate: {
    nlp: "Você já analisou feedback de clientes (ex.: reviews, e-mails) usando processamento de linguagem natural?",
    prc: "De que maneira você cria prompts elaborados para a IA auxiliar em scripts de vendas?",
    exc: "Você já pediu para IA gerar planilhas exemplares ou relatórios de funil automaticamente?",
    doc: "Com que frequência você integra a IA para criação e padronização de documentos de propostas?",
    pol: "Como você controla políticas de privacidade ao inserir dados de prospects no prompt?",
  },
  expert: {
    fin: "Você já usou LLMs para prever vendas, estimar taxa de conversão ou analisar tendências do mercado?",
    api: "Como você conecta APIs de IA a sistemas de CRM ou plataformas de e-mail marketing?",
    adv: "Você treinou modelos específicos com dados de negociações passadas para orientação de pricing?",
    aud: "De que forma você revisa e valida as respostas da IA, evitando sugestões comerciais inviáveis ou ilegais?",
    sec: "Qual é sua prática de segurança (criptografia, limpeza de dados) ao enviar informações estratégicas para IA?",
  },
});
export const financeiroAddQuestions = ObjectHelper.deepFreeze([
  "financeiro",
  new Map([
    ["docs", fnDocKeys as any],
    ["spreadSheet", fnSsKeys],
    ["formBuilder", fnFmKeys],
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
export const cmDocsKeys = ObjectHelper.deepFreeze({
  beginner: {
    rfp: "Como você elabora propostas comerciais simples (ex.: orçamentos, RFP) e formata o texto?",
    cpl: "Com que frequência você compila dados de vendas ou contatos em documentos textuais?",
    lbl: "Você utiliza marcadores, tabelas ou seções para organizar informações de leads e produtos?",
    sig: "Você já inseriu assinaturas digitais ou eletrônicas em contratos comerciais básicos?",
    hst: "De que forma você mantém histórico de versões de ofertas enviadas a clientes?",
  },
  intermediate: {
    ref: "Como você faz referência cruzada entre cláusulas em documentos de proposta (ex.: anexo, condição especial)?",
    rev: "De que modo você controla comentários e revisões quando vários vendedores atualizam o mesmo arquivo?",
    mac: "Você utiliza macros ou scripts para preencher automaticamente dados de clientes em contratos?",
    sty: "Qual sua prática para padronizar estilos e layout em documentos de ofertas comerciais?",
    adv: "Você já exporta esses documentos para PDFs com senhas ou permissões restritas?",
  },
  expert: {
    api: "De que forma você integra editores de texto a sistemas comerciais (ex.: CRM) para geração automática de contratos?",
    cnd: "Como você lida com campos dinâmicos e mala direta para dezenas de clientes simultaneamente?",
    sec: "O quanto você aplica criptografia ou permissões avançadas em documentos de alto valor (grandes contratos)?",
    cmp: "Você faz comparação de versões para destacar alterações críticas em propostas?",
    mlc: "Já aplicou IA para redigir ou revisar cláusulas de documentos complexos (com várias condições)?",
  },
});
export const cmSsKeys = ObjectHelper.deepFreeze({
  beginner: {
    lis: "Como você mantém listas de leads ou clientes em planilhas simples?",
    pro: "Você usa planilhas para projeções básicas de vendas mensais?",
    seg: "Como você segmenta clientes (ex.: região, setor) usando filtros básicos?",
    col: "De que modo você realça linhas ou colunas importantes (ex.: cliente prioritário)?",
    sum: "Você aplica SOMA, MÉDIA para ver resultados gerais de vendas em uma planilha?",
  },
  intermediate: {
    piv: "Qual sua experiência em criar Tabelas Dinâmicas para análise de pipeline e funil de vendas?",
    adv: "Você integra planilhas com CRM ou outras fontes para atualizar dados de vendas (Sim/Não)?",
    for: "Com que frequência você utiliza fórmulas intermediárias (PROCV, SE, SOMASE) para acompanhamento de metas?",
    cht: "Que gráficos você gera para ilustrar desempenho comercial ou comparação de metas?",
    col: "Como você colabora com outros vendedores ou gerentes numa única planilha, sem sobrescrever dados?",
  },
  expert: {
    mac: "Você desenvolve macros ou scripts para automatizar consolidação de vários relatórios de vendas?",
    big: "Em que frequência você envia dados para ferramentas de BI ou recebe deles?",
    seg: "Você cria segmentações avançadas e dashboards usando planilhas?",
    dbi: "De que maneira você puxa informações de bancos de dados ou APIs (ex.: taxas de câmbio, cotações)?",
    cmp: "Como você compara previsões e resultados reais em planilhas complexas, envolvendo vários times?",
  },
});
export const cmFmKeys = ObjectHelper.deepFreeze({
  beginner: {
    cre: "Como você cria formulários básicos para coleta de leads ou feedback de clientes?",
    rls: "Você definiu regras simples para aceitar apenas e-mails ou telefone em campos de formulário?",
    cst: "Com que frequência você personaliza questões (texto, múltipla escolha) para cadastros de clientes?",
    est: "Você exporta resultados para uma planilha ou CSV para análise posterior?",
    shr: "De que modo você compartilha o link do formulário com prospects ou clientes?",
  },
  intermediate: {
    lgi: "Você aplica lógica condicional (ex.: pergunta extra se cliente diz ‘Sim’ para interesse em produto X)?",
    ntf: "Como você configura notificações automáticas quando alguém preenche um formulário (e-mail/WhatsApp)?",
    seg: "Você filtra ou segmenta as respostas por fonte (rede social, site oficial)?",
    val: "Que tipo de validação você aplica a campos (ex.: formato de telefone, CNPJ)?",
    rep: "Como você gera relatórios intermediários com as respostas, integrando a CRM ou planilhas?",
  },
  expert: {
    adv: "Quais técnicas avançadas (scripts, embed custom) você utiliza para formulários de vendas complexas?",
    api: "Você já integrou formulários a APIs de CRM, disparando leads automaticamente para vendedores?",
    scy: "Como você garante segurança e compliance (LGPD) no armazenamento das respostas?",
    atn: "Você cria automações que disparam alertas ou tarefas no CRM quando um lead se cadastra?",
    dash: "De que forma você conecta esses formulários a dashboards para ver conversão em tempo real?",
  },
});
export const cmCsKeys = ObjectHelper.deepFreeze({
  beginner: {
    upl: "Qual é sua experiência em enviar documentos comerciais (propostas, relatórios) para armazenamento em nuvem?",
    org: "Como você estrutura pastas para cada cliente ou grupo de clientes?",
    shr: "De que maneira você compartilha arquivos de preços ou catálogos com leads?",
    prm: "Você configura permissões básicas (visualização, comentário) para outras equipes?",
    syn: "Com que frequência você sincroniza pastas entre dispositivos para mostrar arquivos a clientes?",
  },
  intermediate: {
    ver: "Como você gerencia versões de arquivos (ex.: proposta v1, v2) sem sobrescrever acidentalmente?",
    bck: "Você faz backups automáticos de documentos comerciais importantes?",
    int: "De que forma você integra o armazenamento em nuvem com plataformas como Slack ou Teams?",
    sec: "Você encripta ou protege relatórios confidenciais (ex.: listas de preços especiais)?",
    log: "Você audita logs de acesso para saber quem baixou ou alterou arquivos com informações de vendas?",
  },
  expert: {
    mch: "Como você gerencia grandes catálogos de produtos ou propostas para centenas de clientes em nuvem?",
    cln: "Você implementa limpeza ou arquivamento automático de documentos antigos ou desatualizados?",
    cdc: "Quais políticas de compliance você segue para dados de clientes (ex.: RGPD, LGPD)?",
    mig: "Você já migrou grandes repositórios de documentos comerciais de um serviço de nuvem para outro?",
    inc: "De que forma você incrementa a produtividade por meio de integrações avançadas (API, scripts de sync)?",
  },
});
export const cmBiKeys = ObjectHelper.deepFreeze({
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
});
export const cmCrmKeys = ObjectHelper.deepFreeze({
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
});
export const cmErpKeys = ObjectHelper.deepFreeze({
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
});
export const cmPlnKeys = ObjectHelper.deepFreeze({
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
});
export const cmAiAdKeys = ObjectHelper.deepFreeze({
  beginner: {
    trn: "Qual é sua experiência em converter texto comercial (scripts de venda) em áudio para treinamento?",
    gen: "Você gera áudios para atualizações rápidas de campanhas ou promoções? (Sim/Não)",
    adv: "Você já explicou tabela de preços ou condições especiais via gravação de áudio?",
    spd: "Como você ajusta velocidade ou tom para áudios de anúncio de produto?",
    exm: "Você usa exemplos práticos em áudios para orientar vendedores iniciantes?",
  },
  intermediate: {
    ent: "Você personaliza entonação ou pronúncia para nomes de produtos ou termos em inglês?",
    wfl: "Como você integra áudios a fluxos de venda (ex.: enviar áudio automático quando lead avança de fase)?",
    edi: "Com que frequência você edita áudios para remover ruídos, ajustar volume, ou inserir vinhetas?",
    tdb: "Você mantém uma base de áudios com scripts padronizados para vendedores usarem?",
    mul: "Você gerencia vários locutores em um único áudio para simular diálogo comercial?",
  },
  expert: {
    sec: "Você cifra ou protege áudios que contêm informações sensíveis de preços ou estratégias?",
    scr: "De que modo você gera áudios dinâmicos (ex.: TTS com dados de promoções) via scripts?",
    adv: "Você já aplicou IA de voz para narrar catálogos de produtos ou e-books comerciais inteiros?",
    api: "Como você integra APIs de TTS ou voice cloning ao CRM ou ao site de e-commerce?",
    lst: "Descreva alguma situação em que áudios avançados impulsionaram treinamentos ou vendas complexas.",
  },
});
export const cmAiImgKeys = ObjectHelper.deepFreeze({
  beginner: {
    add: "Você inclui imagens (logos, banners) em propostas ou materiais de venda de forma simples?",
    edi: "Qual sua experiência em editar imagens para catálogos de produtos (ex.: recorte, ajuste de cor)?",
    tmb: "Você gera miniaturas de imagens para apresentações rápidas?",
    ext: "Já utilizou OCR para extrair dados de catálogos impressos ou cartões de visita?",
    cmp: "Como você compara versões de banners ou panfletos promocionais (antes/depois)?",
  },
  intermediate: {
    chl: "Você compõe montagens de várias imagens (ex.: produtos diferentes) para apresentações?",
    tgo: "Já inseriu anotações ou destaque visual em screenshots (ex.: destacar features)?",
    ocr: "Com que frequência usa OCR para digitalizar catálogos físicos e integrá-los ao CRM?",
    pub: "De que forma você publica imagens de promoções ou comparativos em intranets ou sites?",
    pkg: "Você domina alguma ferramenta intermediária (Photoshop, GIMP) para ajustar detalhes de design?",
  },
  expert: {
    mlc: "Você usa IA para classificar ou etiquetar imagens de produtos automaticamente?",
    adv: "Como você integra extração de dados de imagens a sistemas comerciais (ex.: ID do produto no ERP)?",
    sec: "Quais medidas de segurança você adota para não divulgar imagens sensíveis (preços confidenciais)?",
    dsp: "Você gera apresentações detalhadas ou catálogos com dezenas de imagens explicativas?",
    dif: "Existe algum método avançado que você utiliza para detecção de alterações visuais em duas versões de anúncios?",
  },
});
export const cmAiVdKeys = ObjectHelper.deepFreeze({
  beginner: {
    tut: "Você cria vídeos curtos para apresentar promoções ou ofertas a clientes?",
    rec: "Com que frequência você grava tutoriais (screen capture) mostrando plataformas de vendas ou CRM?",
    edi: "Qual sua experiência em editar vídeos para corrigir falhas, adicionar legendas ou trilha?",
    shw: "Você exibe gráficos ou dashboards de vendas em apresentações de vídeo?",
    sld: "Você converte slides de estratégias comerciais em vídeos para envio rápido ao time?",
  },
  intermediate: {
    anl: "Você faz animações para explicar roadmap de vendas ou pipeline a clientes ou parceiros?",
    tts: "Como você insere narração (TTS ou humana) para guiar espectadores em relatórios de metas?",
    eda: "Você costuma adicionar trilha sonora ou efeitos para destacar pontos importantes em vídeos de treinamento?",
    sub: "Você gera legendas automáticas, mesmo contendo termos específicos do comercial?",
    mlc: "Você já utiliza IA de vídeo para criar tutoriais a partir de roteiros de vendas complexos?",
  },
  expert: {
    brd: "Como você produz gravações de reuniões estratégicas, adicionando pós-edição para highlights comerciais?",
    int: "De que forma você integra plataformas de vídeo com dashboards ao vivo (streaming de dados de vendas)?",
    scn: "Você aplica chroma key (fundo verde) para criar cenários virtuais em apresentações a grandes clientes?",
    adv: "Quais práticas avançadas de edição (transições 3D, sobreposições de dados) você usa para vídeos de alta complexidade?",
    sec: "Como você restringe acesso a vídeos sigilosos (ex.: contendo margens e estratégias) apenas a quem precisa?",
  },
});
export const cmLlmsKeys = ObjectHelper.deepFreeze({
  beginner: {
    chat: "Você já utilizou chatbots (ex.: ChatGPT) para tirar dúvidas sobre linguagem de vendas ou copiar termos comerciais?",
    cor: "Com que frequência você pede correções ou reformulações de e-mails de prospecção para IA?",
    gnr: "Você gera rascunhos de discursos ou pitches comerciais usando modelos de linguagem?",
    sum: "Você utiliza IA para resumir relatórios longos de pipeline ou reuniões de vendas?",
    tip: "Como você trata dados de clientes (nome, informações) quando usa LLMs, evitando expor detalhes confidenciais?",
  },
  intermediate: {
    nlp: "Você já analisou feedback de clientes (ex.: reviews, e-mails) usando processamento de linguagem natural?",
    prc: "De que maneira você cria prompts elaborados para a IA auxiliar em scripts de vendas?",
    exc: "Você já pediu para IA gerar planilhas exemplares ou relatórios de funil automaticamente?",
    doc: "Com que frequência você integra a IA para criação e padronização de documentos de propostas?",
    pol: "Como você controla políticas de privacidade ao inserir dados de prospects no prompt?",
  },
  expert: {
    fin: "Você já usou LLMs para prever vendas, estimar taxa de conversão ou analisar tendências do mercado?",
    api: "Como você conecta APIs de IA a sistemas de CRM ou plataformas de e-mail marketing?",
    adv: "Você treinou modelos específicos com dados de negociações passadas para orientação de pricing?",
    aud: "De que forma você revisa e valida as respostas da IA, evitando sugestões comerciais inviáveis ou ilegais?",
    sec: "Qual é sua prática de segurança (criptografia, limpeza de dados) ao enviar informações estratégicas para IA?",
  },
});
export const comercialAddQuestions = ObjectHelper.deepFreeze([
  "comercial",
  new Map([
    ["docs", cmDocsKeys as any],
    ["spreadSheet", cmSsKeys],
    ["formBuilder", cmFmKeys],
    ["cloudStorage", cmCsKeys],
    ["businessInteligence", cmBiKeys],
    ["Crms", cmCrmKeys],
    ["Erps", cmErpKeys],
    ["planning", cmPlnKeys],
    ["audio", cmAiAdKeys],
    ["image", cmAiImgKeys],
    ["video", cmAiVdKeys],
    ["llms", cmLlmsKeys],
  ]),
]);
export const mktDocsKeys = ObjectHelper.deepFreeze({
  beginner: {
    mch: "Como você redige materiais de marketing básicos (flyers, comunicados) com formatação simples?",
    chk: "Você utiliza checklists para revisar ortografia, imagens e coerência nos textos de marketing?",
    pln: "Com que frequência você planeja conteúdo textual (ex.: posts) e compila num doc colaborativo?",
    cmd: "De que modo você adiciona comentários para equipe aprovar ou ajustar slogans e copy?",
    ext: "Você exporta esses documentos para PDF ou outros formatos para distribuição?",
  },
  intermediate: {
    mac: "Você criou macros ou modelos padronizados (layout, sumário) para relatórios de campanha?",
    rev: "De que forma você gerencia revisões vindas de gestores, designers e redatores ao mesmo tempo?",
    stl: "Você padroniza estilos (ex.: heading para títulos, citação para depoimentos) em documentos de marketing?",
    mlt: "Você já usou mala direta (ex.: para e-mails de campanha em massa)?",
    doc: "Como você vincula partes do texto a dados externos (ex.: planilhas de resultados)?",
  },
  expert: {
    adv: "Você integra editores de texto com plataformas de marketing (Mailchimp, HubSpot) via API?",
    sec: "Que nível de restrição ou criptografia você aplica a documentos com estratégias ou orçamentos?",
    ver: "Como você compara duas versões de um mesmo material (ex.: V1 e V2 de estratégia de campanha)?",
    col: "Você gerencia múltiplas equipes (social media, redatores, designers) editando o mesmo doc?",
    idx: "Em materiais extensos (ex.: e-book), como você constrói sumários, índices e referências cruzadas?",
  },
});
export const mktSsKeys = ObjectHelper.deepFreeze({
  beginner: {
    lis: "Como você organiza listas de leads ou segmentos de público em planilhas simples?",
    gcl: "Você registra gastos de campanhas (ex.: Google Ads) em planilhas para acompanhar budget básico?",
    cmp: "De que forma você compara métricas (cliques, impressões) manualmente em células?",
    fil: "Você utiliza filtros e cores para separar dados de diferentes campanhas ou datas?",
    sum: "Qual é sua experiência com SOMA, MÉDIA para analisar resultados iniciais?",
  },
  intermediate: {
    piv: "Você usa Tabelas Dinâmicas para ver performance por canal (ex.: Facebook, Instagram)?",
    adv: "Como você integra a planilha com outras fontes (CSV exportado de plataformas de ads)?",
    frq: "Você faz fórmulas para calcular CPC (custo por clique), CPA (custo por aquisição) e CTR (taxa de cliques)?",
    cht: "Que gráficos você gera para mostrar crescimento de engajamento ou leads?",
    col: "Como você colabora com a equipe (ex.: cada um edita uma aba) evitando conflitos?",
  },
  expert: {
    mcr: "Você desenvolve macros para consolidar dados de múltiplas campanhas em uma aba principal?",
    big: "Em que frequência você exporta resultados para ferramentas de BI (ex.: Data Studio, Power BI)?",
    arr: "Como você utiliza funções avançadas (ÍNDICE, CORRESP) para cruzar resultados de diversos relatórios?",
    dbi: "Você conecta planilhas a bancos de dados (ex.: MySQL, BigQuery) para analisar performance de marketing?",
    prf: "De que forma você faz tuning em planilhas gigantes (milhares de linhas de keywords)?",
  },
});
export const mktFmKeys = ObjectHelper.deepFreeze({
  beginner: {
    crt: "Como você cria formulários de cadastro para potenciais leads de marketing?",
    rls: "Você impõe regras simples (ex.: e-mail válido) para evitar dados incorretos?",
    seg: "De que modo você classifica ou segmenta as respostas (ex.: interesse no produto A/B)?",
    lnk: "Você compartilha o link do formulário em redes sociais ou e-mail marketing?",
    rep: "Como você gera relatórios básicos das respostas e envia para o time de marketing?",
  },
  intermediate: {
    lgc: "Você configura lógicas condicionais (ex.: pergunta adicional se responder ‘Sim’ para algo)?",
    ntf: "Como você envia notificações automáticas para o time quando um lead responde?",
    api: "Você integra esses formulários diretamente com plataformas de automação de marketing?",
    seg: "Qual é sua prática para segmentar resultados (ex.: leads quentes, frios) depois do envio?",
    val: "Você valida campos (ex.: número de telefone, CEP) para manter qualidade de dados?",
  },
  expert: {
    adv: "Quais técnicas avançadas (scripts, personalização de layout) você usa para formular perguntas atraentes?",
    int: "De que forma você conecta respostas a CRMs ou planilhas com macros automáticas?",
    sec: "Como você protege dados sensíveis (ex.: dados demográficos, preferências do usuário) no envio?",
    atn: "Você dispara fluxos de automação (ex.: enviar e-mail de agradecimento) dependendo da resposta?",
    dash: "Você já criou dashboards em tempo real mostrando quantos leads chegaram via formulários?",
  },
});
export const mktCsKeys = ObjectHelper.deepFreeze({
  beginner: {
    upl: "Você armazena arquivos de campanhas (imagens, vídeos) em nuvem? (Sim/Não)",
    org: "Como você organiza pastas por campanhas, datas ou equipes?",
    shr: "De que forma você compartilha pastas de ativos de marketing com designers ou redatores?",
    prm: "Você controla permissões básicas (ex.: só leitura) para evitar edições não autorizadas?",
    syn: "Com que frequência você mantém sincronizado o material de marketing em múltiplos dispositivos?",
  },
  intermediate: {
    ver: "Você versiona arquivos para acompanhar evoluções de um mesmo banner ou vídeo?",
    bck: "Você realiza backups automáticos dos materiais mais antigos, evitando perda de histórico?",
    int: "Como você integra ferramentas de nuvem (Drive, Dropbox) com sistemas de agendamento de posts ou ADS?",
    sec: "Você encripta ou protege arquivos confidenciais (ex.: estratégias, orçamentos) na nuvem?",
    log: "Você audita ou verifica quem baixou ou editou arquivos específicos de campanhas?",
  },
  expert: {
    mch: "Você gerencia volumes grandes de assets (ex.: centenas de imagens, versões de vídeo) na nuvem?",
    opt: "Quais otimizações faz para baixar rápido arquivos grandes (ex.: compressão, CDN)?",
    adv: "Como você automatiza uploads e organização de assets via scripts ou APIs?",
    mig: "Já realizou migrações de uma plataforma de nuvem para outra, preservando histórico e permissões?",
    rep: "Você gera relatórios de uso de assets (quem usa, quantas vezes) e integra com BI?",
  },
});
export const mktBiKeys = ObjectHelper.deepFreeze({
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
});
export const mktCrmKeys = ObjectHelper.deepFreeze({
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
});
export const mktErpsKeys = ObjectHelper.deepFreeze({
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
});
export const mktPlnKeys = ObjectHelper.deepFreeze({
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
});
export const mktAiAdKeys = ObjectHelper.deepFreeze({
  beginner: {
    trn: "Você cria áudios com scripts de marketing (ex.: jingles, anúncios falados) de forma simples?",
    gen: "Com que frequência você envia áudios para clientes ou prospects via WhatsApp ou outro canal?",
    adv: "Você comenta pontos-chave de uma campanha em áudio para repassar à equipe rapidamente?",
    spd: "Como você ajusta velocidade/tono ao gravar anúncios ou explicações de promoções?",
    exm: "Você tem exemplos de uso de áudio para persuasão de leads ou instruções internas?",
  },
  intermediate: {
    ent: "Você personaliza entonação (voz animada, formal) dependendo do tipo de campanha?",
    edi: "Qual sua experiência editando áudios (cortar trechos, inserir música de fundo)?",
    wfl: "Você automatiza disparos de áudios em chatbots ou fluxos de nutrição de leads?",
    mul: "Já criou áudios com diferentes locutores para encenações de venda ou dramatização de oferta?",
    doc: "Como você armazena e documenta diferentes versões de áudios para usar em campanhas futuras?",
  },
  expert: {
    sec: "Você encripta ou protege áudios com informações sensíveis (ex.: estratégias de campanha)?",
    scr: "Você gera áudios dinâmicos (TTS) com dados reais (ex.: nome do cliente, oferta especial)?",
    adv: "De que maneira a IA de voz pode ajudar a criar locuções para vídeos ou anúncios?",
    api: "Como você integra APIs de geração de áudio a plataformas de marketing (ex.: e-mail, redes)?",
    cmp: "Já comparou resultados de campanhas com áudio vs. sem áudio? Alguma métrica de impacto?",
  },
});
export const mktAiImgKeys = ObjectHelper.deepFreeze({
  beginner: {
    add: "Você insere imagens simples (ex.: logos, banners) em e-mails ou posts de marketing?",
    edi: "Qual sua experiência em editar imagens para redes sociais (cortar, redimensionar)?",
    tmb: "Você gera miniaturas de posts ou stories para planejamento visual?",
    ext: "Você já usou OCR para extrair texto de flyers ou panfletos impressos?",
    cmp: "Como você compara diferentes versões de um mesmo banner (A/B) para decidir qual usar?",
  },
  intermediate: {
    chl: "Você compõe montagens de múltiplas imagens (ex.: mosaico) para campanhas maiores?",
    tgo: "De que maneira você realça trechos de screenshots (ex.: marcações, setas) para tutoriais?",
    ocr: "Com que frequência você converte imagens com texto (ex.: PDF escaneado) para edição posterior?",
    pub: "Você publica imagens ou infográficos em sites usando CMS integrado?",
    pkg: "Você usa ferramentas intermediárias (ex.: Canva, Photoshop) para adequar arte final?",
  },
  expert: {
    mlc: "Você utiliza IA para analisar imagens de campanhas, detectando objetos ou emoções do público?",
    adv: "Como você integra extração de dados de imagens (ex.: logotipos detectados) em relatórios de brand awareness?",
    sec: "Quais medidas de segurança aplica para não vazar imagens estratégicas (ex.: produto não lançado)?",
    dsp: "Você gera painéis com várias imagens de resultados antes/depois, comprovando eficácia da campanha?",
    dif: "Existe alguma técnica avançada para detectar diferenças sutis em posts de marketing entre versões?",
  },
});
export const mktAiVdKeys = ObjectHelper.deepFreeze({
  beginner: {
    edt: "O quanto você tem familiaridade com ferramentas simples de edição de vídeo (ex.: cortar, redimensionar)?",
    upv: "Com que frequência você faz upload de vídeos em plataformas como YouTube ou redes sociais?",
    tem: "Você utiliza templates pré-fabricados para criar vídeos promocionais? (Sim/Não)",
    sub: "Qual sua experiência em adicionar legendas básicas em vídeos?",
    frm: "De que forma você ajusta formatos de vídeo para diferentes plataformas (ex.: 16:9, 1:1, stories)?",
  },
  intermediate: {
    eff: "Como você aplica efeitos visuais ou transições para melhorar a qualidade do vídeo?",
    aud: "Descreva sua experiência em sincronizar trilhas de áudio com vídeos promocionais.",
    pla: "Com que frequência você desenvolve vídeos com base em um planejamento de campanhas?",
    cpt: "O quanto você utiliza técnicas de storytelling para engajar seu público em vídeos de marketing?",
    ani: "Você integra animações ou gráficos avançados nos vídeos? (Sim/Não)",
  },
  expert: {
    adv: "De que forma você integra vídeos a estratégias omnichannel (ex.: anúncios, landing pages, e-mails)?",
    ana: "Como você utiliza ferramentas de análise para medir a performance de vídeos (ex.: taxa de retenção)?",
    api: "Descreva como você usa APIs para automatizar processos relacionados à publicação de vídeos.",
    _3dv: "Você já trabalhou com vídeos em 3D ou tecnologias avançadas de realidade aumentada? (Sim/Não)",
    adt: "De que modo você utiliza personalização dinâmica em vídeos (ex.: incluir o nome do usuário)?",
  },
});
export const mktLlmsKeys = ObjectHelper.deepFreeze({
  beginner: {
    chat: "Você já utilizou chatbots (ex.: ChatGPT) para gerar ideias de slogans ou chamadas de marketing?",
    cor: "Com que frequência você pede reformulações de texto publicitário para IA?",
    gnr: "Você gera rascunhos de posts ou e-mails de divulgação usando modelos de linguagem?",
    sum: "Você utiliza IA para resumir resultados de campanhas longas?",
    tip: "Como você evita expor dados sensíveis (ex.: ROI exato, nomes de clientes) em prompts de IA?",
  },
  intermediate: {
    nlp: "Você analisa sentimentos em feedback de clientes ou reviews usando NLP?",
    prc: "De que forma você cria prompts detalhados para a IA gerar copies mais assertivas?",
    exc: "Você já pediu para IA criar planilhas de budget ou simular projeções de campanha?",
    doc: "Qual é sua rotina de integrar IA na produção de documentos (ex.: relatórios de performance)?",
    pol: "Você segue alguma política de segurança ao enviar dados de leads para um modelo de linguagem?",
  },
  expert: {
    fin: "Você aplica IA para prever engajamento ou taxa de conversão em anúncios?",
    api: "Como você integra APIs de LLM para automatizar criação de conteúdo ou chatbots de marketing?",
    adv: "Já treinou modelos com histórico de campanhas, gerando sugestões personalizadas de copy?",
    aud: "De que forma você audita as respostas de IA para evitar incoerências ou violações de marca?",
    sec: "Qual sua prática de criptografia ou sanitização de dados antes de enviar prompts com informações estratégicas?",
  },
});
export const marketingAddQuestions = ObjectHelper.deepFreeze([
  "marketing",
  new Map([
    ["docs", mktDocsKeys as any],
    ["spreadSheet", mktSsKeys],
    ["formBuilder", mktFmKeys],
    ["cloudStorage", mktCsKeys],
    ["businessInteligence", mktBiKeys],
    ["Crms", mktCrmKeys],
    ["Erps", mktErpsKeys],
    ["planning", mktPlnKeys],
    ["audio", mktAiAdKeys],
    ["image", mktAiImgKeys],
    ["video", mktAiVdKeys],
    ["llms", mktLlmsKeys],
  ]),
]);
export const stN1DocKeys = ObjectHelper.deepFreeze({
  beginner: {
    fmt: "Como você orienta usuários sobre formatações básicas (negrito, itálico) em editores de texto?",
    syn: "De que forma você ensina a sincronizar documentos na nuvem ou em rede local?",
    cpt: "Com que frequência você auxilia na compatibilidade de arquivos entre diferentes versões do software?",
    tmp: "Você recomenda modelos prontos para usuários inexperientes em edição de texto? (Sim/Não)",
    col: "Como você demonstra a colaboração simultânea (multiusuário) em um mesmo documento?",
  },
  intermediate: {
    mac: "Em que nível você utiliza macros ou automações simples para padronizar documentos?",
    rev: "Que estratégias você adota para controlar revisões e histórico de versões com equipes maiores?",
    sec: "Como você lida com a proteção de documentos via senhas ou restrição de edição?",
    stl: "Você auxilia na configuração de estilos de texto (títulos, cabeçalhos) e sumários automáticos?",
    prb: "Qual é sua abordagem ao diagnosticar problemas intermediários de layout ou formatação avançada?",
  },
  expert: {
    scr: "Como você cria ou mantém scripts (VBA, por exemplo) para automatizar tarefas complexas em documentos?",
    cpy: "Você gerencia integrações com outras ferramentas (ex.: software de conferência)? Explique um caso.",
    idx: "Como você instrui usuários a criarem índices remissivos ou seções avançadas em documentos extensos?",
    adv: "De que forma você soluciona conflitos de permissões avançadas e restrições de edição em rede?",
    dbi: "Com que frequência você integra documentos a bancos de dados ou APIs (ex.: mail merge massivo)?",
  },
});
export const stN1SsKeys = ObjectHelper.deepFreeze({
  beginner: {
    sum: "Como você auxilia usuários na criação de funções básicas (SOMA, MÉDIA) em planilhas?",
    frm: "Em que nível você explica a formatação de células (cores, bordas) para destacar dados?",
    fil: "De que forma você ensina a filtrar ou classificar dados de modo simples?",
    cbt: "Você costuma configurar proteções básicas de célula para evitar alterações indevidas? (Sim/Não)",
    con: "Como você orienta a colaboração simultânea em uma planilha (ex.: várias pessoas editando)?",
  },
  intermediate: {
    piv: "Qual é sua abordagem para ajudar usuários a criarem tabelas dinâmicas de complexidade média?",
    fml: "Como você instrui sobre funções intermediárias (SE, PROCV) para automação de cálculos?",
    cht: "Que tipos de gráficos você recomenda para análises em planilhas de nível intermediário?",
    val: "Você configura validações de dados (listas, restrições) para evitar entradas incorretas?",
    net: "De que forma você gerencia possíveis conflitos de versão ao trabalhar via rede ou nuvem?",
  },
  expert: {
    mcr: "Como você soluciona problemas avançados de macros (VBA/AppScript) e automatizações grandes?",
    sec: "Qual sua experiência em configurar permissões avançadas em planilhas compartilhadas (ex.: range locking)?",
    prf: "O que você faz para otimizar performance em planilhas extensas com dezenas de abas e fórmulas aninhadas?",
    idx: "Você integra planilhas com sistemas externos (ex.: consultas SQL, scripts Python)? Explique brevemente.",
    aud: "De que forma você efetua auditoria em planilhas complexas para rastrear erros ou mudanças não autorizadas?",
  },
});
export const stN1FmKeys = ObjectHelper.deepFreeze({
  beginner: {
    frm: "Como você auxilia usuários a criar formulários básicos em ferramentas (Google Forms, etc.)?",
    val: "Você orienta sobre validação simples de dados (ex.: campos obrigatórios)? (Sim/Não)",
    lay: "De que forma você ajuda na disposição (layout) de perguntas para melhor legibilidade?",
    cmm: "Com que frequência você orienta sobre como adicionar comentários ou instruções para o preenchimento?",
    shp: "Você explica como compartilhar o formulário (link público, restrição a e-mails)?",
  },
  intermediate: {
    cnd: "Como você ensina lógica condicional (pular perguntas) em formulários de complexidade média?",
    seg: "De que modo você instrui sobre segmentar seções para diferentes contextos dentro do mesmo formulário?",
    aut: "Você configura notificações automáticas (e-mail) ao receber novas respostas?",
    rdx: "Qual sua prática ao configurar opções de resposta em formato de seletores (radio, checkboxes) avançados?",
    ext: "Você integra dados do formulário a planilhas ou sistemas externos (ex.: Integromat/Zapier)?",
  },
  expert: {
    scr: "De que forma você utiliza scripts (ex.: Apps Script) para customizar comportamentos e validações no formulário?",
    sec: "Como você lida com permissões avançadas, definindo acessos restritos a determinados usuários/grupos?",
    mul: "Você auxilia a criar formulários multi-etapas ou fluxos de aprovação (N1 -> N2)? Explique brevemente.",
    rep: "Qual é sua experiência em gerar relatórios avançados a partir dos dados coletados via formulário?",
    man: "Como você gerencia revisões e versões do mesmo formulário ao longo do tempo?",
  },
});
export const stN1CsKeys = ObjectHelper.deepFreeze({
  beginner: {
    upl: "De que modo você ajuda usuários a fazer upload/download de arquivos em plataformas na nuvem?",
    syn: "Qual sua orientação para sincronizar pastas locais com o armazenamento remoto (Drive, Dropbox)?",
    sdr: "Você ensina a compartilhar pastas com permissões básicas (somente leitura, edição)?",
    rec: "Com que frequência você recupera arquivos excluídos ou versões antigas para usuários?",
    nav: "Como você instrui a navegação organizada em estruturas de pastas, evitando bagunça?",
  },
  intermediate: {
    ext: "Você configura integrações com aplicativos externos (ex.: editores online, fluxos de trabalho)?",
    adv: "Como você orienta sobre permissões avançadas (compartilhar somente link, restrições de domínio)?",
    bck: "De que forma você gerencia backups automáticos ou snapshots em storage de nuvem?",
    prf: "Qual sua abordagem para resolver problemas de performance (sincronização lenta, conflito de versão)?",
    sec: "Como você garante que os arquivos confidenciais estão protegidos (criptografia, logs de acesso)?",
  },
  expert: {
    api: "Descreva como você integra APIs para gerenciar arquivos (upload/download) automaticamente.",
    pol: "De que modo você aplica políticas de retenção de dados e governança em ambientes corporativos?",
    aud: "Como você realiza auditorias avançadas (rastros de acesso, histórico) em volumes grandes de arquivos?",
    mlt: "Você lida com múltiplas contas ou provedores (Google, OneDrive, Amazon S3)? Explique um caso.",
    drp: "Em que frequência você define estratégias de disaster recovery para storage crítico?",
  },
});
export const stN1BiKeys = ObjectHelper.deepFreeze({
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
});
export const stN1CrmsKeys = ObjectHelper.deepFreeze({
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
});
export const stN1ErpsKeys = ObjectHelper.deepFreeze({
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
});
export const stN1PlnKeys = ObjectHelper.deepFreeze({
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
});
export const stN1AiAdKeys = ObjectHelper.deepFreeze({
  beginner: {
    rec: "Como você orienta usuários sobre captura e gravação de áudio simples (ex.: microfone, celulares)?",
    tts: "Você ajuda na configuração de TTS (text-to-speech) para usuários com necessidades específicas?",
    syn: "Em que frequência você ajusta sincronização de áudio básico em apresentações ou vídeos?",
    cmt: "De que forma você orienta sobre editar cortes simples (remover trechos) de áudio?",
    dev: "Você lida com drivers de áudio (instalação, troubleshooting) para problemas iniciais?",
  },
  intermediate: {
    eff: "Como você auxilia na aplicação de efeitos intermediários (limpeza de ruído, equalização) em áudios?",
    plg: "Você recomenda plugins ou softwares especializados (Audacity, etc.) para edições mais avançadas?",
    str: "De que modo você configura streaming interno de áudio (reuniões, calls) para usuários?",
    arr: "Você já integrou áudio TTS com scripts ou macros para automação? (Sim/Não)",
    mix: "Como você gerencia mixagem de múltiplas faixas ou vozes em um mesmo projeto de suporte?",
  },
  expert: {
    adv: "Qual sua experiência em troubleshooting avançado (latência, sample rate) em placas de som profissionais?",
    api: "Você integra APIs de IA de áudio (ex.: ElevenLabs) para geração ou manipulação de vozes personalizadas?",
    dsp: "De que forma você ensina configurações avançadas de DSP (processamento digital de sinais)?",
    sec: "Você lida com criptografia ou proteção de stream para transmissões de áudio sensíveis?",
    hrd: "Em que frequência você assessora hardware especializado (microfones de estúdio, mixers) em suporte N1?",
  },
});
export const stN1AiImgKeys = ObjectHelper.deepFreeze({
  beginner: {
    vie: "Como você instrui usuários a visualizar e organizar imagens (ex.: formatos PNG, JPG)?",
    edb: "Você orienta recorte e redimensionamento básicos de imagens em ferramentas simples?",
    con: "Com que frequência você resolve problemas de conversão de formato (ex.: BMP -> PNG)?",
    upl: "De que modo você ajuda no upload de imagens para plataformas internas ou nuvem?",
    cat: "Você recomenda categorização (pastas, tags) para grande volume de imagens?",
  },
  intermediate: {
    fix: "Que técnicas intermediárias de correção (brilho, contraste) você ensina em editores de imagem?",
    lay: "Você lida com camadas e objetos (ex.: GIMP, Paint.NET) em nível intermediário?",
    com: "Como você orienta a compactação de imagens para reduzir tamanho sem perder muita qualidade?",
    col: "Você configura perfis de cor (sRGB, CMYK) quando necessário? (Sim/Não)",
    inc: "Em que frequência você soluciona inconsistências de drivers (ex.: impressoras vs. formatos de cor)?",
  },
  expert: {
    psd: "Você auxilia em formatos avançados (PSD) ou integrações com editores profissionais (Photoshop)?",
    spt: "Como você orienta scripts de automação para lotes de imagens (renomear, aplicar filtros)?",
    vsn: "De que forma você lida com versionamento de imagens em um repositório compartilhado?",
    ret: "Você executa ou ajuda em técnicas avançadas (ex.: retoque, remoção de fundo) em N1 ou transfere a outro nível?",
    cat: "Qual sua abordagem para catalogar grandes bibliotecas de imagens, com metadados e busca avançada?",
  },
});
export const stN1AiVdKeys = ObjectHelper.deepFreeze({
  beginner: {
    rec: "Como você instrui usuários a capturar vídeos básicos (ex.: webcam, celular) para suporte inicial?",
    edt: "Você ensina edição simples (cortar trechos, inserir texto) em ferramentas gratuitas? (Sim/Não)",
    frm: "Com que frequência você ajusta formatos (MP4, MOV) ou define resoluções (720p, 1080p) para usuários?",
    upl: "De que modo você auxilia no upload de vídeos a plataformas internas ou externas?",
    cap: "Como você orienta a inserção de legendas simples para acessibilidade?",
  },
  intermediate: {
    eff: "Você aplica ou configura efeitos/intermediário (transições, correção de cor) para vídeos de tutoriais?",
    aud: "Como você sincroniza áudio e vídeo quando há atrasos ou descompasso?",
    mul: "Você gerencia múltiplas faixas (ex.: overlay de instruções) em editores como Filmora, Camtasia?",
    ctt: "Em que frequência você ajuda a criar conteúdo de treinamento em vídeo para usuários?",
    sec: "Como você protege vídeos com acesso restrito (links privados, senhas)?",
  },
  expert: {
    adv: "De que modo você gerencia edições complexas (multicâmera, chroma key) em suporte N1 ou transfere a outro nível?",
    str: "Você configura streaming ao vivo (ex.: transmissões corporativas) e soluciona problemas de latência?",
    api: "Como você integra plataformas de vídeo (YouTube API, Vimeo) a sistemas internos de help desk?",
    enc: "Você lida com configurações avançadas de encode (bitrate, codecs) para alta qualidade vs. tamanho menor?",
    mlv: "Em que frequência você adota IA para legendagem automática ou análise de conteúdo em vídeo?",
  },
});
export const stN1LlmsKeys = ObjectHelper.deepFreeze({
  beginner: {
    qna: "Como você orienta usuários a consultarem chatbots básicos (ex.: ChatGPT) para dúvidas pontuais?",
    lan: "Você auxilia na escolha de linguagem (PT-BR, EN) para melhores resultados em LLMs básicos?",
    fil: "Em que frequência você ensina a filtrar respostas ou avaliar se o conteúdo é confiável?",
    cty: "Você lembra usuários sobre citar fontes ou verificar a citação do LLM? (Sim/Não)",
    mem: "De que forma você explica a limitação de contexto (token limit) em chats longos?",
  },
  intermediate: {
    sys: "Como você utiliza prompts com mensagens de sistema ou persona para guiar respostas intermediárias?",
    stp: "Você instrui sobre prompt chaining ou passos a passos para LLMs um pouco mais avançados?",
    cor: "Qual sua abordagem para corrigir outputs incorretos ou reorientar o LLM? (ex.: re-prompt)",
    api: "Você integra APIs de LLM (ex.: GPT) a pequenos scripts ou apps para tarefas N1? (Sim/Não)",
    seg: "Como você lida com confidencialidade ou segurança de dados sensíveis ao usar LLMs?",
  },
  expert: {
    ftn: "Você já orienta fine-tuning ou custom LLM em ambientes corporativos? Explique um caso.",
    pri: "O quanto você prioriza segurança e compliance (LGPD, etc.) em prompts ou dados sensíveis?",
    cbt: "Você cria chatbots avançados integrados ao ERP/CRM? Em que frequência no N1?",
    eva: "Como você avalia a qualidade das respostas e faz logging das interações para auditoria?",
    prg: "Você integra LLM com pipelines DevOps (CI/CD) ou workflows de alto nível? Descreva brevemente.",
  },
});
export const suporteTecnicoN1AddQuestions = ObjectHelper.deepFreeze([
  "suporteTecnicoN1",
  new Map([
    ["docs", stN1DocKeys as any],
    ["spreadSheet", stN1SsKeys],
    ["formBuilder", stN1FmKeys],
    ["cloudStorage", stN1CsKeys],
    ["businessInteligence", stN1BiKeys],
    ["Crms", stN1CrmsKeys],
    ["Erps", stN1ErpsKeys],
    ["planning", stN1PlnKeys],
    ["audio", stN1AiAdKeys],
    ["image", stN1AiImgKeys],
    ["video", stN1AiVdKeys],
    ["llms", stN1LlmsKeys],
  ]),
]);
export const stN2DocsKeys = ObjectHelper.deepFreeze({
  beginner: {
    syn: "Como você auxilia na sincronização de arquivos .doc entre servidores ou ferramentas na nuvem?",
    cmp: "Você orienta sobre compatibilidade de versões (DOCX vs. versões antigas) em um nível básico?",
    plg: "Com que frequência você instala ou configura plugins básicos de formatação para usuários?",
    pmt: "Você consegue intervir em problemas de permissão (arquivos bloqueados, somente leitura) em rede?",
    ori: "Que orientações básicas você dá quando o documento é corrompido ou não abre corretamente?",
  },
  intermediate: {
    mac: "De que forma você implementa macros intermediárias (VBA, scripts) para customizações em DOC?",
    lay: "Como você soluciona problemas de layout avançado (sumário, seções) quando afeta o fluxo do documento?",
    col: "Você gerencia permissões de colaboração (rastreamento de alterações, edições simultâneas) em ambientes corporativos?",
    idx: "Como você orienta a criação de índices remissivos ou referências cruzadas para documentos extensos?",
    adv: "Qual sua abordagem para logs ou trilhas de auditoria em edição de documentos compartilhados?",
  },
  expert: {
    vba: "Como você desenvolve e mantém rotinas VBA complexas para automação de processos de texto?",
    enc: "Em que nível você lida com criptografia avançada de documentos e permissões de usuários distintos?",
    srv: "Descreva como você configura servidores de documentos (ex.: SharePoint) para edição simultânea sem conflito.",
    api: "Você integra APIs ou complementos externos (ex.: Scripts com Python) para manipular documentos massivamente?",
    mig: "Qual sua estratégia ao migrar docs de um sistema legado (ex.: Lotus) para plataformas atuais, mantendo formatação?",
  },
});
export const stN2SsKeys = ObjectHelper.deepFreeze({
  beginner: {
    net: "Como você orienta a configuração de planilhas em rede local ou via ferramentas de compartilhamento (Drive, OneDrive)?",
    fmz: "Você ajusta formatações que podem quebrar fórmulas ao abrir planilhas em versões distintas?",
    cft: "Como você faz conferência de dados em planilhas compartilhadas, resolvendo conflitos básicos de edição?",
    csd: "Em que frequência você lida com consultas simples (ex.: importação CSV) para dados de planilha?",
    bak: "Qual a prática recomendada para backups diários de planilhas importantes em N2?",
  },
  intermediate: {
    piv: "Você intervém na criação ou troubleshooting de Tabelas Dinâmicas com múltiplas fontes de dados?",
    lnk: "Como você soluciona problemas em planilhas que importam/ligam dados de outras pastas de trabalho?",
    val: "Você configura validações e restrições (listas suspensas, intervalos bloqueados) para prevenir erros?",
    scp: "De que forma você utiliza scripts (Apps Script, macros intermediárias) para integrações pontuais?",
    rep: "Como você gera relatórios semestrais ou consolida planilhas vindas de diferentes setores (ex.: contábil, vendas)?",
  },
  expert: {
    arr: "Você trabalha com funções matriciais avançadas (ex.: MATRIZDINAMICA, FÓRMULAS aninhadas complexas)?",
    sec: "Qual é sua prática ao configurar segurança (proteção de intervalos, permissões de usuário) em grandes planilhas de rede?",
    mcr: "Como você depura macros avançadas (VBA) que causam lentidão ou bloqueiam recursos compartilhados?",
    big: "Com que frequência você conecta planilhas a bancos de dados corporativos via ODBC/SQL e soluciona problemas de acesso?",
    par: "Descreva um caso em que você realizou tuning de performance em planilhas gigantes (milhares de linhas ou abas).",
  },
});
export const stN2FmKeys = ObjectHelper.deepFreeze({
  beginner: {
    bug: "Como você identifica bugs básicos (ex.: perguntas sumindo) em formulários corporativos?",
    pmt: "Você ajusta permissões para visualizar/responder formulários internos ou externos?",
    vrf: "Em que nível você verifica validações simples (ex.: campos obrigatórios) para evitar entradas inválidas?",
    lay: "Você orienta sobre layout amigável (ex.: divisão de seções) para formulários de captura de dados?",
    shl: "Como você ensina a compartilhar o link do formulário ou incorporá-lo em páginas internas?",
  },
  intermediate: {
    cnd: "Você cria lógicas condicionais (ex.: pular perguntas, exibir se...) para formulários moderadamente complexos?",
    rls: "Como você define regras de envio (ex.: e-mail automatic) ao receber respostas específicas?",
    cfg: "Você integra o formulário com planilhas ou CRMs, resolvendo problemas de mapeamento de campos?",
    scp: "De que forma você adiciona scripts (Apps Script, etc.) para validar formatos ou dados (regex)?",
    des: "Você orienta personalização intermediária (imagens, branding) sem afetar a usabilidade?",
  },
  expert: {
    api: "Como você integra APIs externas (ex.: webhooks, Slack) para notificar ou processar respostas automaticamente?",
    sec: "Você lida com criptografia de dados sensíveis (ex.: PII) em formulários de alto risco?",
    flw: "Qual sua abordagem para fluxos de aprovação encadeados (Form -> Aprovador -> N2 -> DB)?",
    mul: "De que forma você une respostas de múltiplos formulários em repositórios centrais, resolvendo conflitos?",
    adv: "Você realiza auditoria/logs de acesso, revertendo alterações em formulários extensos? Explique um caso.",
  },
});
export const stN2CsKeys = ObjectHelper.deepFreeze({
  beginner: {
    loc: "Como você lida com usuários que não conseguem mapear corretamente uma pasta de rede ou drive compartilhado?",
    sch: "Você orienta sobre busca simples (filtros, palavras-chaves) em diretórios corporativos?",
    ssl: "Com que frequência você verifica se a conexão está protegida (HTTPS/FTPS) em transferências de arquivos?",
    syn: "Como você resolve conflitos de sincronização básica (ex.: dois usuários atualizando o mesmo arquivo)?",
    rec: "De que modo você ajuda na recuperação de arquivos deletados em um período curto?",
  },
  intermediate: {
    qum: "Você lida com quotas de armazenamento intermediárias (limites de pasta/departamento) e resolve excedentes?",
    ver: "Como você orienta versionamento automático ou manual (ex.: rollback) em sistemas de nuvem?",
    col: "Qual sua abordagem para colaborar em repositórios compartilhados com estruturas complexas (subpastas profundas)?",
    int: "Você configura integrações entre storage e outras apps (ex.: CRMs, repositórios Git)?",
    sec: "Como você reforça políticas de criptografia e logs de acesso para pastas sensíveis de N2?",
  },
  expert: {
    dpl: "De que forma você lida com duplicação massiva de arquivos e planeja deduplicar em storages grandes?",
    bck: "Você implementa backups incrementais ou snapshots avançados para ambientes críticos?",
    adv: "Como você resolve conflitos em arquiteturas distribuídas (ex.: DFS) com replicação entre vários sites?",
    mlt: "Em que frequência você migra dados entre provedores (ex.: AWS S3 -> Azure Blob) e faz checks de integridade?",
    pol: "Descreva sua estratégia de governança de dados (permissões, compliance) em storages multi-região.",
  },
});
export const stN2BiKeys = ObjectHelper.deepFreeze({
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
});
export const stN2CrmsKeys = ObjectHelper.deepFreeze({
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
});
export const stN2ErpsKeys = ObjectHelper.deepFreeze({
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
});
export const stN2PlnKeys = ObjectHelper.deepFreeze({
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
});
export const stN2AiAdKeys = ObjectHelper.deepFreeze({
  beginner: {
    rec: "Como você auxilia na gravação de áudio simples (ex.: microfone ou smartphone) para suportar tickets?",
    ply: "Você resolve problemas de reprodução básica (drivers, codecs) em calls ou apps de voz?",
    cpt: "Em que frequência você ajuda a cortar e concatenar trechos de áudio para fins de tutorial?",
    spk: "Qual sua abordagem quando usuários reclamam de eco ou ruído durante reuniões de áudio online?",
    fmt: "Você converte formatos básicos de áudio (ex.: WAV, MP3) para compatibilidade?",
  },
  intermediate: {
    edg: "Como você aplica equalização, redução de ruído e efeitos intermediários em software de áudio (Audacity)?",
    mix: "Você gerencia mixagem de faixas (música + voz) em nível moderado para vídeos ou podcasts internos?",
    net: "De que modo você soluciona latência ou jitter em transmissões de áudio via rede corporativa?",
    hwd: "Você dá suporte a configurações de headsets, microfones USB, interface de áudio semi-pro? (Sim/Não)",
    stp: "Em que frequência você automatiza processos de conversão (ex.: script para normalizar volume)?",
  },
  expert: {
    dsp: "Como você lida com configurações avançadas de DSP ou placa de som em ambientes críticos (estúdio interno)?",
    bru: "Você corrige distorções e problemas graves em capturas de áudio corporativo? Cite um exemplo.",
    api: "Você integra IA de áudio (ex.: ElevenLabs) ou TTS avançado em scripts de help desk? (Sim/Não)",
    adv: "De que forma você monitora picos e clipping de áudio durante transmissões ao vivo, evitando falhas?",
    enc: "Qual é sua experiência na codificação avançada (bitrate, codecs proprietários) para streaming high-end?",
  },
});
export const stN2AiImgKeys = ObjectHelper.deepFreeze({
  beginner: {
    edc: "Como você auxilia em edições básicas (recortar, girar) no Paint, Preview ou software simples?",
    frq: "Com que frequência usuários te pedem conversão de formato (PNG <-> JPG)? E como resolve?",
    cor: "Você ajuda a ajustar brilho/contraste simples para imagens levemente escuras ou claras?",
    scn: "De que modo você instrui digitalização (scanner) e salva em pastas de rede ou cloud?",
    shr: "Você configura compartilhamento de imagens em drives ou plataformas de colaboração interna?",
  },
  intermediate: {
    lay: "Como você lida com camadas em editores um pouco mais avançados (ex.: GIMP) para correções?",
    seg: "Você ensina seleção inteligente de objetos (varinha mágica, laço poligonal) e remoção de fundo?",
    frm: "Em que frequência você atua em problemas de cor ou perfis de cor (RGB, CMYK) no contexto N2?",
    cmp: "Você faz compressão intermediária para reduzir tamanho mantendo qualidade razoável?",
    ani: "Como você ajuda em criação/animação simples (GIF) ou slide de imagens para tutoriais?",
  },
  expert: {
    adv: "Você resolve problemas de renderização avançada ou plugins complexos (Photoshop, Affinity) no nível N2?",
    ret: "Como você orienta retoque profissional (ex.: remoção de imperfeições) ou transfere a outra equipe?",
    scr: "Você automatiza processamentos de lote (via scripts) para redimensionar ou marcar d'água centenas de imagens?",
    fil: "Em que frequência você gerencia filtros complexos (foco, blur avançado) e correções de cor calibrada?",
    cat: "Qual sua abordagem para catalogar grandes bibliotecas de imagens, com metadados e busca avançada?",
  },
});
export const stN2AiVdKeys = ObjectHelper.deepFreeze({
  beginner: {
    rec: "Como você auxilia na captura de vídeo com webcam ou dispositivos móveis em casos de suporte?",
    edb: "Você oferece instruções para edição básica (corte, montagem simples) em ferramentas gratuitas?",
    upv: "De que modo você orienta upload de vídeos curtos em plataformas internas (ex.: intranet)?",
    frm: "Você converte formatos de vídeo básicos (ex.: MOV -> MP4) quando há incompatibilidades?",
    sub: "Como você adiciona legendas simples ou orienta usuários a fazê-lo em ferramentas básicas?",
  },
  intermediate: {
    fxv: "Em que nível você aplica correções intermediárias (ajuste de cor, transições) em editores como Filmora?",
    syn: "Como você sincroniza trilhas de áudio separadas (locução, música) a um vídeo tutorial?",
    net: "Você resolve latências em transmissões (ex.: streaming interno) para treinamentos em tempo real?",
    enc: "Você ensina configurações de encoding intermediário (bitrate, codecs) para garantir qualidade?",
    sec: "De que forma você protege vídeos internos (links privados, senhas) na empresa?",
  },
  expert: {
    mul: "Você gerencia projetos multicâmera com substituição de cenários (chroma key) em N2 ou repassa ao N3?",
    adv: "Como você soluciona problemas de edição complexa (ex.: travamentos, falhas de render) em software pro?",
    api: "Você integra plataformas de vídeo (ex.: API do YouTube ou Vimeo) para upload automatizado de conteúdo?",
    big: "Com que frequência você processa vídeos extensos (acima de 1h) e resolve problemas de espaço ou desempenho?",
    ai_: "Qual sua experiência na aplicação de IA (ex.: legendagem automática, reconhecimento de objetos) em vídeos corporativos?",
  },
});
export const stN2LlmsKeys = ObjectHelper.deepFreeze({
  beginner: {
    cha: "Como você esclarece a usuários básicos o funcionamento de chatbots de IA (ex.: ChatGPT) para perguntas gerais?",
    prm: "Você orienta sobre prompts curtos e claros para obter melhores respostas?",
    cpy: "De que modo você alerta sobre checagem de copy/paste e possíveis 'alucinações' da IA?",
    doc: "Com que frequência você registra em uma base de conhecimento local as boas soluções geradas pela LLM?",
    pol: "Você mantém alguma política para perguntas sensíveis ou confidenciais no chatbot? (Sim/Não)",
  },
  intermediate: {
    ctx: "Você define contextos intermediários (ex.: system messages, role playing) para guiar respostas específicas?",
    sec: "Em que nível você filtra dados sensíveis para não serem inseridos na LLM por engano?",
    col: "Como você colabora com outro time N2 para validar se as respostas da IA estão corretas tecnicamente?",
    ext: "Você integra LLMs com apps internos (via API) para automações pontuais? (Sim/Não)",
    stp: "Em que frequência você recomenda splitted prompts ou cadeias de raciocínio para maior precisão?",
  },
  expert: {
    fin: "Como você lida com fine-tuning ou custom instructions em modelos corporativos de IA?",
    cbt: "Você constrói chatbots complexos integrados a bases de conhecimento internas, resolvendo falhas de indexação?",
    mon: "De que forma você audita logs de conversas, garantindo compliance (LGPD) e excluindo dados sensíveis?",
    rlh: "Você já configura RLHF (Reinforcement Learning from Human Feedback) ou métodos equivalentes? Explique.",
    mig: "Em que frequência você migra prompts ou dados de uma LLM para outra, evitando perda de contexto?",
  },
});
export const suporteTecnicoN2AddQuestions = ObjectHelper.deepFreeze([
  "suporteTecnicoN2",
  new Map([
    ["docs", stN2DocsKeys as any],
    ["spreadSheet", stN2SsKeys],
    ["formBuilder", stN2FmKeys],
    ["cloudStorage", stN2CsKeys],
    ["businessInteligence", stN2BiKeys],
    ["Crms", stN2CrmsKeys],
    ["Erps", stN2ErpsKeys],
    ["planning", stN2PlnKeys],
    ["audio", stN2AiAdKeys],
    ["image", stN2AiImgKeys],
    ["video", stN2AiVdKeys],
    ["llms", stN2LlmsKeys],
  ]),
]);
export const opDocsKeys = ObjectHelper.deepFreeze({
  beginner: {
    net: "Como você configura as permissões básicas de rede para que os usuários acessem um editor de texto?",
    upd: "Com que frequência você atualiza softwares de edição (Office, LibreOffice) para corrigir falhas?",
    lnk: "De que modo você instala e vincula plugins ou complementos em servidores de arquivos locais?",
    prt: "Como você configura impressoras e controla spools de documentos em rede?",
    pat: "Qual sua prática para padronizar caminhos de salvamento (servidor/nuvem) e definir permissões de pasta?",
  },
  intermediate: {
    gpo: "Você aplica GPOs ou scripts avançados para automatizar configurações de editores de texto?",
    tro: "Como você soluciona problemas de lentidão ao abrir documentos via rede (latência, DNS, compartilhamentos)?",
    vrs: "Você gerencia versionamento centralizado (ex.: SharePoint) e resolve conflitos de check-in/out?",
    scr: "De que forma você monitora logs de acesso e edição para auditoria de compliance em documentos?",
    pol: "Como você define políticas de backup e snapshot para evitar perdas de dados em arquivos críticos?",
  },
  expert: {
    scc: "Você customiza instalações em larga escala (SCCM) de editores de texto? Descreva brevemente.",
    dlp: "Como você integra soluções de DLP (Data Loss Prevention) para docs sensíveis na rede corporativa?",
    dfs: "Qual sua abordagem para replicação DFS entre múltiplos sites, evitando corrupção de documentos?",
    off: "Você gerencia merges offline/online e problemas de credenciais em cenários desconectados?",
    iso: "De que forma você garante conformidade (ISO, PCI) para manipulação segura de documentos corporativos?",
  },
});
export const opSsKeys = ObjectHelper.deepFreeze({
  beginner: {
    net: "Como você habilita o acesso a planilhas compartilhadas via rede local para a equipe?",
    per: "De que forma você configura permissões de pastas compartilhadas, assegurando acesso controlado às planilhas?",
    cpy: "Você orienta criação de cópias de planilhas para backup rápido no dia a dia? (Sim/Não)",
    bkp: "Qual é sua prática de backup simples para evitar perda em planilhas armazenadas em rede?",
    col: "Com que frequência você ensina colaboração simultânea (co-edit) em Excel/Sheets via servidor ou Drive?",
  },
  intermediate: {
    sec: "Como você implementa senhas ou criptografia de arquivos e resolve falhas de abertura em rede?",
    mac: "Você soluciona macros de nível intermediário e define locais confiáveis para não bloquear conteúdo?",
    scp: "Em que forma você utiliza scripts (GPO, etc.) para instalar complementos de planilha nos computadores do setor?",
    dmp: "Você já realizou dump de dados de um BD para planilhas e gerenciou performance no processo?",
    conf: "Qual sua abordagem ao resolver conflitos de versão quando vários usuários salvam simultaneamente?",
  },
  expert: {
    adv: "Como você automatiza instalações em larga escala (SCCM) de pacotes de planilha e gerencia atualizações?",
    big: "Você integra planilhas com fontes massivas de dados (BI, data warehouse) resolvendo latência e caches?",
    log: "De que forma você audita logs de acesso ou macros para cumprir normas de compliance em planilhas críticas?",
    res: "Você gerencia restauração de planilhas corrompidas? Dê um exemplo complexo e como resolveu.",
    ref: "Como você lida com referências externas e macros avançadas, evitando loops ou travamentos na rede?",
  },
});
export const opFmKeys = ObjectHelper.deepFreeze({
  beginner: {
    dsp: "Como você disponibiliza ferramentas de formulários (Google Forms, etc.) para equipes na rede?",
    ins: "Você orienta instalação ou acesso via navegadores padronizados, ajustando firewall ou proxy?",
    csh: "Com que frequência você limpa cache/cookies para resolver falhas de carregamento de formulários?",
    net: "De que forma você lida com restrições de IP que bloqueiam envio de formulários externos?",
    brw: "Você gerencia updates de browsers e complementos (JS) para manter compatibilidade com forms online?",
  },
  intermediate: {
    sso: "Você integra Single Sign-On (AD/SAML) para acesso a formulários internos, resolvendo possíveis erros de token?",
    scp: "Como você cria scripts ou GPO para fixar páginas de formulário como atalho nas máquinas do setor?",
    sec: "Qual é sua prática para configurar SSL e evitar alertas de 'site não confiável' ao abrir formulários internos?",
    aut: "Você controla notificações automáticas por e-mail ou Slack quando um formulário é preenchido?",
    dpl: "Em que frequência você lida com duplicação de formulários e merges de resultados em planilhas centralizadas?",
  },
  expert: {
    adv: "Como você soluciona problemas avançados de roteamento (DNS, proxies) que bloqueiam formulários externos?",
    api: "Você já integrou APIs de forms com sistemas de tickets ou base de dados custom? Descreva um caso.",
    crt: "De que forma você gerencia certificados digitais para garantir segurança e compliance em formulários internos?",
    flw: "Você implementa fluxos de aprovação encadeada (chefia -> outro dept.) via webhooks e scripts?",
    drp: "Como você gerencia disaster recovery para grandes quantidades de dados coletados em formulários?",
  },
});
export const opCsKeys = ObjectHelper.deepFreeze({
  beginner: {
    mnt: "Como você monta/unmount shares de rede ou mapeia unidades para equipes na infraestrutura local?",
    prs: "Você define permissões básicas (somente leitura/escrita) em pastas no NAS ou servidor?",
    syn: "Com que frequência você orienta sincronização local-nuvem (OneDrive, Drive) para usuários?",
    rec: "Qual sua abordagem ao recuperar arquivos deletados ou versões antigas em caso de acidente?",
    drv: "Como você gerencia drivers ou softwares de backup para HDs externos na instalação local?",
  },
  intermediate: {
    qta: "Você configura quotas de espaço e resolve excedentes em storage compartilhado?",
    ver: "De que forma você lida com versionamento intermediário (snapshots) em ambiente NAS/SAN?",
    abl: "Você habilita bloc-level sync ou deduplicação para otimizar uso do disco? Explique um caso.",
    sec: "Como você controla acessos diferenciados via AD, definindo ACLs refinadas para subpastas?",
    bkp: "Com que frequência você cria rotinas automáticas de backup (scripts, agendador) e as audita?",
  },
  expert: {
    dpl: "Como você gerencia replicações DFS ou multi-site para alta disponibilidade de storage?",
    enc: "Você lida com encriptação full-disk ou volume-based, resolvendo problemas de performance?",
    aut: "De que modo você integra automação (scripts avançados) para mover/arquivar dados inativos?",
    drp: "Qual é sua estratégia de disaster recovery em cenários com storage clusterizado ou distribuído?",
    iso: "Você segue normas (ISO 27001) para logs, auditorias e retenção de dados sensíveis no storage?",
  },
});
export const opBiKeys = ObjectHelper.deepFreeze({
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
});
export const opCrmsKeys = ObjectHelper.deepFreeze({
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
});
export const opErpsKeys = ObjectHelper.deepFreeze({
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
});
export const opPlnKeys = ObjectHelper.deepFreeze({
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
});
export const opAiAdKeys = ObjectHelper.deepFreeze({
  beginner: {
    spk: "Como você configura alto-falantes ou headsets e soluciona problemas básicos de driver de áudio?",
    rec: "Você orienta gravação de áudio localmente (ex.: ferramenta nativa do OS) para relatórios de incidentes?",
    vol: "Com que frequência ajusta mix de volume do sistema para evitar eco em calls internas?",
    cde: "Você instala codecs (MP3, WMA) para permitir reprodução de arquivos de áudio no Windows?",
    lat: "Que soluções rápidas aplica quando há atraso (latência) na reprodução em rede local?",
  },
  intermediate: {
    dsp: "Você utiliza configurações intermediárias de DSP (equalização, redução de ruído) para áudios corporativos?",
    net: "Como você lida com streaming interno de áudio (reuniões) e problemas de buffering?",
    pol: "Você controla políticas de gravação (ex.: não permitir gravação local) em PCs corporativos?",
    dsk: "De que forma você distribui software de edição de áudio (Audacity) via GPO ou scripts?",
    mix: "Você auxilia na mixagem de faixas (música + voz) para vídeos de treinamento interno?",
  },
  expert: {
    adv: "Como você soluciona latência avançada em placas de som dedicadas (ASIO) ou configurações high-end?",
    api: "Você integra IA de áudio (ex.: TTS EleventLabs) a sistemas de help desk? Descreva um caso.",
    enc: "De que forma gerencia encriptação de stream de áudio para reuniões confidenciais?",
    stn: "Você configura estações avançadas (mixagem ao vivo, control surfaces) e resolve travamentos de driver?",
    ops: "Em que frequência lida com broadcasting corporativo (servidores RTMP) e gargalos de rede?",
  },
});
export const opAiImgKeys = ObjectHelper.deepFreeze({
  beginner: {
    pre: "Como você instala visualizadores básicos (ex.: IrfanView) e ajusta associações de arquivo?",
    scn: "Você soluciona problemas de scanner local vs. rede (drivers e permissões) com frequência?",
    cpy: "De que maneira orienta copiar/imprimir imagens em impressoras do servidor?",
    res: "Como você explica mudança de resolução/tamanho para relatórios simples?",
    fmt: "Você converte formatos (PNG, JPG) e resolve erros de 'arquivo não suportado' no Windows?",
  },
  intermediate: {
    lay: "Você configura editores intermediários (Paint.NET, GIMP) e lida com updates ou travamentos?",
    col: "Em que frequência ajusta perfis de cor (sRGB, CMYK) para impressões de qualidade corporativa?",
    ret: "Como você auxilia retoques ou recortes avançados (seleção de objeto) sem travar a máquina?",
    net: "Você gerencia grandes bibliotecas de imagens em pastas de rede, definindo caching ou indexação?",
    sec: "Qual sua abordagem para restringir acesso a imagens confidenciais, definindo ACLs específicas?",
  },
  expert: {
    cad: "Você integra ou gerencia softwares CAD/3D em N2, resolvendo problemas de GPU e licenciamento?",
    dsp: "Como você trata exibições avançadas (4K, monitores calibrados) para edição crítica de imagens?",
    sft: "Você patch editores high-end (Photoshop, Affinity) e resolve conflitos com outros softwares?",
    inc: "Em que frequência lida com corrupção de arquivos de imagem e descreva como resolveu?",
    cns: "Você integra computação extra (GPUs, servidores) para conversão massiva ou IA em imagens?",
  },
});
export const opAiVdKeys = ObjectHelper.deepFreeze({
  beginner: {
    ply: "Como você instala players básicos (VLC) e resolve falta de codecs em Windows para vídeos internos?",
    rec: "Você habilita gravação de tela (ex.: OBS) para usuários criarem tutoriais de instalação?",
    net: "Em que frequência surgem travamentos em streaming interno e como você soluciona gargalos de rede?",
    cat: "Como você orienta a catalogação de vídeos em pastas de rede com naming padronizado?",
    msg: "Você lida com mensagens de erro de GPU ou directX ao reproduzir vídeos de alta resolução?",
  },
  intermediate: {
    stp: "Como você configura editores intermediários (Camtasia) e gerencia atualizações ou travamentos?",
    enc: "Qual sua abordagem ao converter formatos (H.264, H.265) e bitrates para diferentes resoluções?",
    par: "De que forma você ajusta parâmetros de rede para evitar buffering em vídeos de treinamento?",
    eff: "Você auxilia a inserir efeitos (transições, legendas) sem travar a máquina do usuário?",
    aut: "Em que frequência automatiza gravações de tela para auditoria ou demonstrações na infraestrutura?",
  },
  expert: {
    srv: "Como você gerencia um servidor de streaming on-premise (Wowza) e resolve gargalos de rede em vídeo?",
    sec: "De que modo você protege vídeos confidenciais com DRM ou tokens de acesso temporários?",
    adv: "Você lida com edições multicâmera 4K em estações high-end? Explique um caso de travamento resolvido.",
    ai_: "Em que frequência integra IA de vídeo (remoção de fundo automático) e resolve falhas de compatibilidade?",
    drm: "Como você aplica restrições avançadas (ex.: proibir download) e logs em players corporativos?",
  },
});
export const opLlmsKeys = ObjectHelper.deepFreeze({
  beginner: {
    tok: "Como você lida com limites de tokens ou desconexões quando usuários usam chat GPT-like via rede restrita?",
    prox: "Você configura proxy/firewall para permitir acesso a APIs LLM, mantendo logs de segurança?",
    lgn: "Com que frequência gerencia logins ou chaves de API para usuários consultarem IA?",
    dlp: "Como você evita que dados sensíveis sejam inseridos em prompts e fiquem retidos na nuvem?",
    mon: "Você monitora quantas requisições a LLM são feitas e se há picos de uso incomuns?",
  },
  intermediate: {
    adv: "Você cria prompts intermediários e ajusta scripts (ex.: para gerar relatórios semimanualmente)?",
    gpo: "De que forma distribui configurações (certs, environment) para permitir uso de LLM local ou proxied?",
    sec: "Como você filtra dados confidenciais ou anexa disclaimers antes de enviar queries à LLM?",
    lat: "Em que frequência soluciona latência ou timeouts ao conectar a LLM externa, ajustando roteamento?",
    ext: "Você integrou LLM a sistemas de help desk ou CRMs, resolvendo problemas de autenticação e mapeamento?",
  },
  expert: {
    fin: "Qual sua experiência ao configurar instâncias self-hosted (ex.: LLaMA) e manter performance no N2?",
    iso: "Você atende normas ISO ou compliance para logging e relatórios de prompts LLM? Explique um caso.",
    sso: "De que modo implementa SSO e bloqueios de IP/region para LLM em rede corporativa?",
    aud: "Você gera logs avançados de prompts e respostas, corrigindo vazamentos de info sensível?",
    cus: "Com que frequência manipula modelos custom (fine-tuning local) e distribui para equipes especializadas?",
  },
});
export const operatorioAddQuestions = ObjectHelper.deepFreeze([
  "operatorio",
  new Map([
    ["docs", opDocsKeys as any],
    ["spreadSheet", opSsKeys],
    ["formBuilder", opFmKeys],
    ["cloudStorage", opCsKeys],
    ["businessInteligence", opBiKeys],
    ["Crms", opCrmsKeys],
    ["Erps", opErpsKeys],
    ["planning", opPlnKeys],
    ["audio", opAiAdKeys],
    ["image", opAiImgKeys],
    ["video", opAiVdKeys],
    ["llms", opLlmsKeys],
  ]),
]);
export const devDocsKeys = ObjectHelper.deepFreeze({
  beginner: {
    api: "Como você costuma documentar APIs ou funções simples diretamente no código ou em arquivos de texto?",
    pat: "Você segue algum padrão (ex.: Markdown) para registrar instruções de compilação ou uso?",
    col: "Em que frequência você colabora em tempo real no mesmo documento (Google Docs, etc.) com sua equipe?",
    ver: "Como você mantém histórico básico (versionamento) de documentos relacionados ao projeto?",
    sty: "De que forma você padroniza estilos de anotações (ex.: convenções de code style) no doc?",
  },
  intermediate: {
    rfc: "Você costuma criar RFCs (Request for Comments) ou especificações técnicas intermediárias?",
    sum: "Em que nível você gera sumários automáticos e referências cruzadas para guias técnicos maiores?",
    dev: "Você automatiza ou gera relatórios de Doxygen/JSDoc para documentação de funções/classes?",
    rev: "Como você lida com revisões colaborativas, incluindo comentários e sugestões de colegas?",
    pbl: "De que forma você publica ou disponibiliza esses documentos para equipes de QA, Ops?",
  },
  expert: {
    scp: "Você integra scripts que convertem doc em wiki/HTML/PDF automaticamente para distribuições?",
    col: "Como você mantém controle rigoroso de alterações em docs extensos (manual de arquitetura) via Git?",
    arc: "De que maneira você descreve arquitetura de software avançada (ex.: diagramas UML) em docs e versiona?",
    int: "Você faz integração com ferramentas de doc automatizada (ex.: MkDocs, Sphinx) e resolve conflitos de merge?",
    pol: "Qual sua estratégia para politicar normas de doc (ex.: doc coverage) e garantir conformidade do time?",
  },
});
export const devSsKeys = ObjectHelper.deepFreeze({
  beginner: {
    bug: "Você utiliza planilhas para rastrear bugs ou features simples, antes de migrar a um sistema de issue tracking?",
    cal: "Como você faz cálculos de estimativas (ex.: datas de entrega) em planilhas básicas?",
    chg: "Em que frequência você registra changelogs rápidos (ex.: build versions) em uma planilha colaborativa?",
    env: "Você mantém configurações de ambiente (URLs, credenciais) em planilhas ou recomenda outro local?",
    col: "De que forma você permite que a equipe modifique simultaneamente tabelas de requisitos?",
  },
  intermediate: {
    scr: "Como você cria ou mantém scripts (ex.: Google Apps Script) para automatizar relatórios sobre builds?",
    mds: "Você usa planilhas de métricas (ex.: cobertura de testes, performance) para acompanhamento intermediário?",
    con: "Com que frequência você consolida dados de múltiplos projetos numa planilha central e faz dashboards?",
    link: "Você vincula planilhas a sistemas de CI/CD ou repositórios para atualizar informações de release?",
    sec: "Como você controla permissões, evitando que informações sensíveis (ex.: keys) fiquem expostas?",
  },
  expert: {
    big: "Você manipula grandes volumes de dados (logs de build, telemetria) em planilhas e otimiza performance?",
    piv: "Como você gera tabelas dinâmicas para agrupar estatísticas de commits, bugs, etc. em software grande?",
    spt: "Você automatiza import/export de dados (CSV, JSON) com scripts avançados para planilhas?",
    ref: "De que forma você referencia macros ou integra planilhas com bancos de dados corporativos?",
    adm: "Você segue práticas de auditoria (histórico, logs) para rastrear quem alterou métricas críticas?",
  },
});
export const devFmKeys = ObjectHelper.deepFreeze({
  beginner: {
    sng: "Você cria formulários simples para coletar feedback de usuários ou sugestões do time (ex.: Google Forms)?",
    bug: "Como você disponibiliza um formulário de reporte de bugs para usuários sem acesso ao bug tracker?",
    surv: "Em que frequência você coleta opiniões sobre funcionalidades (ex.: enquetes) antes de implementar?",
    ann: "Qual sua prática para anunciar forms internos e garantir que devs respondam prontamente?",
    sec: "Você controla quem pode ver respostas ou só faz formulários públicos? (Sim/Não)",
  },
  intermediate: {
    cnd: "De que forma você aplica lógica condicional (pular perguntas) em formulários intermediários?",
    dta: "Você integra respostas do form com planilhas ou um backend para análise rápida de requisitos?",
    flw: "Como você define fluxos de aprovação (ex.: team lead -> QA -> dev) usando forms?",
    scp: "Você adiciona scripts para validações mais complexas (ex.: regex) quando devs preenchem forms de build?",
    col: "Em que frequência você consolida respostas em dashboards para tomada de decisão no roadmap?",
  },
  expert: {
    adv: "Você cria formulários avançados com criação de issues automáticas no Jira ou GitLab via webhooks?",
    doc: "De que modo você gera relatórios avançados (Power BI, Data Studio) a partir de dados do form?",
    aut: "Como você automatiza envio de e-mails e integrações (Slack, Teams) ao receber certas respostas específicas?",
    sec: "Você lida com autenticação corporativa (SSO) e níveis de permissão diferenciados nos forms?",
    cst: "Qual sua estratégia para personalizar layout, scripts e logs (ex.: páginas custom, CSS) em forms avançados?",
  },
});
export const devCsKeys = ObjectHelper.deepFreeze({
  beginner: {
    rep: "Como você organiza repositórios de código vs. pastas de documentação ou assets no seu workspace local?",
    syn: "Você auxilia colegas a sincronizar projetos via Drive, Dropbox ou repositórios Git submodules?",
    bac: "Em que frequência você salva backups manuais de projetos em nuvem para evitar perda local?",
    pro: "Como você gerencia permissões básicas em pastas compartilhadas, evitando exclusões acidentais?",
    nme: "Você define convenções de nome (ex.: app_v1.0.zip) para facilitar identificação de builds?",
  },
  intermediate: {
    lck: "De que forma você resolve conflitos de lock (ex.: múltiplos devs tentando editar o mesmo arquivo binário)?",
    ver: "Você mantém versionamento intermediário (snapshots) para assets e integra esse fluxo com devs?",
    net: "Como você lida com latência ou quedas de conexão ao acessar pastas de rede contendo builds grandes?",
    int: "Você integra scripts (CI/CD) que salvam artefatos em uma pasta de rede ou storage remoto?",
    sec: "Qual sua prática para restringir acesso a releases ou builds sensíveis em storage corporativo?",
  },
  expert: {
    scc: "Você aplica caching avançado ou solutions como Artifactory/Nexus para binários e resolve duplicações?",
    hgh: "Como você gerencia storage de alto volume (ex.: builds diários, logs extensos) e organiza rotinas de limpeza?",
    aud: "Em que frequência você audita logs de acesso, garantindo compliance e rastreabilidade dos binários?",
    dpl: "Você orquestra replicações entre diferentes sites (multirregion) para garantir alta disponibilidade?",
    mig: "Como você migra grandes volumes (ex.: repositório de artefatos) para outra infra (ex.: S3) sem quebrar links?",
  },
});
export const devBiKeys = ObjectHelper.deepFreeze({
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
});
export const devCrmsKeys = ObjectHelper.deepFreeze({
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
});
export const devErpsKeys = ObjectHelper.deepFreeze({
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
});
export const devPlnKeys = ObjectHelper.deepFreeze({
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
});
export const devAiAdKeys = ObjectHelper.deepFreeze({
  beginner: {
    rec: "Você auxilia devs a gravar áudio para demonstrações ou tutoriais básicos? Como?",
    lip: "Em que frequência surgem problemas de sincronizar áudio e tela (lip-sync) em vídeos simples?",
    cns: "Como você orienta conversões de formato (ex.: WAV -> MP3) para uso em aplicações front-end?",
    deb: "De que forma você diagnostica drivers de áudio falhos em máquinas de desenvolvimento?",
    vcl: "Você gerencia microfones e headsets para calls diárias do time dev (ex.: meet, teams)?",
  },
  intermediate: {
    mix: "Você implementa mixagem intermediária (fundo musical + locução) para vídeos de apresentação de software?",
    net: "Como você lida com latência/packet loss em reuniões de áudio com devs remotos?",
    dsp: "Você ensina redução de ruído ou equalização para melhor clareza em podcasts internos?",
    aut: "Em que frequência configura automações (ex.: scripts) para converter lotes de áudios gravados?",
    cst: "Você customiza soluções de áudio integradas a IDEs ou chats corporativos com plugins específicos?",
  },
  expert: {
    api: "Como você integra IA de áudio (ex.: TTS avançado) dentro de aplicações que o time dev constrói?",
    lat: "Você soluciona problemas avançados de latência em estações high-end (ex.: interface de áudio dedicada)?",
    adv: "Em que frequência você cria pipelines ou scripts para processar grandes volumes de áudio (ex.: logs de calls)?",
    sec: "De que modo você protege áudio confidencial (ex.: gravações de reuniões) e gerencia permissões de acesso?",
    dsp: "Você gera ou ajuda em DSP custom (ex.: libraries C++/Rust) para manipular áudio em tempo real?",
  },
});
export const devAiImgKeys = ObjectHelper.deepFreeze({
  beginner: {
    scr: "Como você captura telas (screenshots) para documentar passo a passo de softwares em desenvolvimento?",
    edb: "Você faz edições básicas (recorte, anotação) em imagens para ilustrar bugs ou features?",
    col: "Com que frequência o time dev colabora em um repositório de imagens (ícones, mocks)?",
    frt: "De que forma você orienta compressão simples (ex.: PNG vs. JPEG) para economizar espaço?",
    sth: "Você gerencia miniaturas (thumbnails) para painéis de preview em repositórios estáticos?",
  },
  intermediate: {
    lay: "Você trabalha com camadas (layers) em GIMP/Photoshop para criação de assets de UI?",
    ver: "Como você gerencia versões de imagens de interface (ex.: mockups) em repositório Git?",
    col: "Você integra design tokens (cores, tipografia) em imagens para garantir consistência visual?",
    auto: "Em que frequência você automatiza processamentos em lote (ex.: redimensionar) via scripts?",
    sec: "Como você restringe o acesso a imagens confidenciais (protótipos) no repositório?",
  },
  expert: {
    adv: "Você lida com tratamento avançado (ex.: gera sprites, atlas) para aplicações de alta performance?",
    cdp: "De que forma você configura CI/CD para builds de assets gráficos (compressão, otimização) antes do deploy?",
    dsp: "Você manipula assets 2D/3D e resolve problemas de GPU ou drivers em estações dev gráficas?",
    cad: "Em que frequência surgem imagens CAD ou complexas e como você integra isso ao workflow dev?",
    ia_: "Você já utiliza IA (ex.: Stable Diffusion) para gerar assets e valida performance e licenças no pipeline?",
  },
});
export const devAiVdKeys = ObjectHelper.deepFreeze({
  beginner: {
    rec: "Você grava vídeos curtos (ex.: screencast) para demonstrar recursos do software a colegas?",
    edt: "Como você faz edição básica (corte, texto) para tutoriais simples de instalação ou configuração?",
    pub: "Em que frequência você publica vídeos internos em wiki/drive para orientar novos devs?",
    frq: "De que forma você ajusta a qualidade/resolução ao capturar telas de IDE ou terminal?",
    mic: "Qual sua prática para gerenciar áudio + vídeo se for preciso explicar passo a passo?",
  },
  intermediate: {
    eff: "Você adiciona efeitos, zoom, highlight de cursor para destacar partes do código ou logs?",
    scr: "Como você utiliza scripts (FFmpeg etc.) para converter ou comprimir vídeos de demonstração?",
    col: "Você colabora com QA ou suporte ao gravar replays de bugs encontrados no software?",
    sub: "Em que frequência você inclui legendas ou anotações para tornar vídeos acessíveis a devs estrangeiros?",
    seg: "Você controla permissões avançadas de quem pode ver ou baixar esses vídeos internos?",
  },
  expert: {
    adv: "Você gerencia edições multicâmera para eventos de dev (ex.: hackathons, palestras internas)?",
    stp: "Como você aborda streaming ao vivo de apresentações do time dev sem travar a rede local?",
    gpu: "Em que forma você resolve problemas de GPU ou encoding pesado ao renderizar vídeos muito longos?",
    int: "Você integra plataformas de vídeo com docs ou wikis para linkar capítulos de cada feature? (Sim/Não)",
    ai_: "Em que frequência você adota IA para gerar legendas ou highlights automáticos em vídeos de treinamento de software?",
  },
});
export const devLlmsKeys = ObjectHelper.deepFreeze({
  beginner: {
    chat: "Você utiliza ChatGPT ou similares para gerar snippets de código rápido para devs iniciantes?",
    tips: "Como você orienta perguntas básicas (prompt) para obter exemplos de funções ou algoritmos?",
    doc: "Com que frequência você obtém rascunhos de documentação ou explicações para libs desconhecidas?",
    err: "De que forma você checa se as sugestões da LLM estão corretas (evitando 'alucinações')?",
    nfo: "Você registra dicas ou comandos repetitivos em uma base local (wiki) para não depender sempre da IA?",
  },
  intermediate: {
    ctx: "Você mantém algum contexto extra (ex.: system prompt) para gerar respostas alinhadas ao projeto?",
    fdb: "Como você retroalimenta a LLM (informando falhas) para melhorar dicas de refactoring no front-end?",
    int: "Em que frequência você integra a LLM em IDEs (ex.: GitHub Copilot) e resolve problemas de config?",
    sec: "Você filtra dados sensíveis (chaves, senhas) antes de pedir ajuda à LLM? Qual sua abordagem?",
    stp: "Qual sua prática para prompts em etapas (chain-of-thought) para obter instruções de build complexas?",
  },
  expert: {
    fin: "Você realiza fine-tuning ou prompt engineering avançado para modelos open-source (ex.: LLaMA) localmente?",
    mlb: "Em que frequência você avalia qualidade (test set) das respostas geradas e cria logs de acurácia?",
    api: "De que forma você integra a LLM com pipelines CI/CD, gerando code review automático ou sugestões de doc?",
    scp: "Você constrói scripts para reformatar ou reestruturar código, baseando-se em sugestões da IA?",
    adv: "Como você manipula grandes prompts ou instruções multi-arquivo em monorepos e garante performance?",
  },
});
export const devAddQuestions = ObjectHelper.deepFreeze([
  "desenvolvimento",
  new Map([
    ["docs", devDocsKeys as any],
    ["spreadSheet", devSsKeys],
    ["formBuilder", devFmKeys],
    ["cloudStorage", devCsKeys],
    ["businessInteligence", devBiKeys],
    ["Crms", devCrmsKeys],
    ["Erps", devErpsKeys],
    ["planning", devPlnKeys],
    ["audio", devAiAdKeys],
    ["image", devAiImgKeys],
    ["video", devAiVdKeys],
    ["llms", devLlmsKeys],
  ]),
]);
export const devOpsDocsKeys = ObjectHelper.deepFreeze({
  beginner: {
    sdr: "Como você documenta os passos de build ou scripts simples (Markdown, README) para que todos entendam?",
    cco: "Você adiciona comentários sobre configurações de CI/CD nos arquivos de doc? (Sim/Não)",
    vrs: "Em que frequência você versiona a documentação junto com o código em repositórios Git?",
    col: "De que forma você permite que vários membros do time editem simultaneamente o mesmo doc?",
    cli: "Você cria doc CLI (ex.: uso de scripts shell) para que devs executem builds localmente?",
  },
  intermediate: {
    arc: "Como você registra arquitetura de pipelines (desenhos, YAML samples) em docs de referência?",
    aut: "Você descreve automações (hooks, triggers) e como elas funcionam para integrantes novos?",
    sec: "De que forma você documenta práticas de segurança (senhas, tokens) no pipeline sem expor dados?",
    pol: "Você insere políticas de commits, branch naming e merges em um documento de convenções?",
    ver: "Em que frequência você atualiza doc de migração de versão (ex.: v1 -> v2) e passos de rollback?",
  },
  expert: {
    smk: "Você utiliza smokes ou specs em doc para QA e DevOps (ex.: BDD) e versiona junto do pipeline?",
    gen: "Como você gera documentação automatizada (ex.: swagger de microserviços) e vincula a um repositório doc?",
    ext: "De que forma você integra doc com wikis corporativas (SharePoint, Confluence) e mantém sincronizado?",
    adv: "Qual é seu procedimento para diagramar pipelines DevOps complexos (multi-stage, multi-cloud) e revisar periodicamente?",
    pol: "Você audita conformidade (ISO, PCI) e descreve em doc cada controle ou verificação no pipeline?",
  },
});
export const devOpsSsKeys = ObjectHelper.deepFreeze({
  beginner: {
    pip: "Como você lista as etapas básicas do pipeline (build, test, deploy) em planilhas, antes de codificar YAML?",
    env: "Você registra variáveis de ambiente (ex.: URLs, keys) em uma planilha? Qual sua frequência?",
    job: "De que modo você orienta a equipe a adicionar novas 'jobs' ou scripts no pipeline via planilha colaborativa?",
    rep: "Em que frequência você gera relatórios em planilha sobre falhas e sucessos de build?",
    acc: "Você controla acesso (só leitura ou edição) a essa planilha de fluxo DevOps? (Sim/Não)",
  },
  intermediate: {
    int: "Você integra a planilha de métricas (ex.: tempo de build) com scripts que atualizam células via API?",
    scp: "Como você realiza scripts de consolidação (ex.: planilha => arquivo de config .yml)?",
    das: "Você cria gráficos intermediários (tempo médio de build, rate de falhas) para análise do time?",
    col: "De que forma você gerencia colaboração simultânea e resolve conflitos de edição nessa planilha?",
    seg: "Você protege abas sensíveis (chaves, tokens) com senhas ou permissões mais restritas?",
  },
  expert: {
    big: "Como você lida com volumosas métricas (ex.: histórico de builds de meses/anos) e performance na planilha?",
    aut: "Você automatiza export ou import (CI/CD => planilha => CI/CD) e faz merges sem corromper dados?",
    adv: "Em que frequência você gera dashboards complexos, cruzando dados de repositórios, monitoramento e falhas?",
    ver: "De que modo versiona planilhas importantes (via script, git-crypt) para não perder histórico?",
    aud: "Você audita quem alterou scripts ou parâmetros críticos (ex.: pipeline delay) armazenados em planilha?",
  },
});
export const devOpsFmKeys = ObjectHelper.deepFreeze({
  beginner: {
    frq: "Como você cria formulários simples (ex.: Google Forms) para coletar feedback do time sobre pipeline?",
    bgs: "Você disponibiliza um form para registro de bugs ou travas no fluxo DevOps inicial?",
    usr: "De que forma você lida com permissões básicas (quem pode responder) e recebe notificações?",
    doc: "Você documenta as perguntas e possíveis respostas para padronizar esse formulário? (Sim/Não)",
    dsp: "Em que frequência você compartilha o link do form no canal do time (Slack, Teams)?",
  },
  intermediate: {
    cnd: "Você usa lógica condicional (pular perguntas) para filtrar se o usuário é dev, QA, ou infra?",
    val: "Como você valida inputs (ex.: ID do repositório, branch) em nível intermediário do form?",
    rep: "De que forma consolida as respostas em planilhas e gera relatórios para possíveis melhorias no pipeline?",
    aut: "Você dispara e-mails ou webhooks para uma pipeline de correção quando recebe uma resposta específica?",
    seg: "Você restringe o formulário a logins corporativos, garantindo logs de quem preencheu?",
  },
  expert: {
    adv: "Como você integra esse form com chatops (ex.: Slack) ou scripts que abrem issues automaticamente?",
    wfh: "Você cria fluxos de aprovação (ex.: SRE -> SecOps) encadeados a partir das respostas do form?",
    dpl: "Em que frequência você utiliza scripts para versionar as perguntas do form ou gerar docs de questionário?",
    esc: "Você escalona respostas urgentes (ex.: pipeline crítico falhando) para times específicos?",
    aud: "Como você audita logs de envios do form, garantindo conformidade e backup de respostas?",
  },
});
export const devOpsCsKeys = ObjectHelper.deepFreeze({
  beginner: {
    art: "Como você armazena artefatos gerados pelo build (ex.: pacotes .zip) em repositórios simples?",
    net: "Você configura mapeamento de drives ou compartilhamentos para que a equipe acesse os binários?",
    syn: "Com que frequência você ensina a sincronizar artefatos entre ambientes (dev -> staging)?",
    bak: "De que modo você faz backups básicos desses arquivos para evitar perda de builds antigos?",
    doc: "Você registra instruções simples de onde salvar e como nomear versões para padronizar?",
  },
  intermediate: {
    rep: "Você implementa repositórios de artefatos (ex.: Nexus, Artifactory) para gerenciar dependências?",
    acl: "Como você restringe acesso por times (ex.: dev, ops) e garante que não excluam builds vitais?",
    scp: "De que forma você usa scripts (SCP, rsync) para mover rapidamente artefatos em ambientes Docker ou VM?",
    inf: "Em que frequência você integra infra-as-code (Terraform, Ansible) para provisionar storage e fluxos?",
    ver: "Você lida com versionamento sem conflitar (ex.: v1, v2) e define convenções (semver) para pacotes?",
  },
  expert: {
    dpl: "Como você estabelece replicações em múltiplos datacenters ou region endpoints para alta disponibilidade?",
    big: "Você gerencia volumes massivos (GB/TB) de logs ou imagens de contêiner, e faz housekeeping automático?",
    enc: "De que modo você encripta e protege artefatos sensíveis (chaves, libs privadas) no storage?",
    aud: "Você rastreia quem baixou ou excluiu certo build por meio de logs e compliance?",
    sso: "Qual sua abordagem para SSO e integrações com pipelines (CI) que puxam ou empurram artefatos?",
  },
});
export const devOpsBiKeys = ObjectHelper.deepFreeze({
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
});
export const devOpsCrmsKeys = ObjectHelper.deepFreeze({
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
});
export const devOpsErpsKeys = ObjectHelper.deepFreeze({
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
});
export const devOpsPlnKeys = ObjectHelper.deepFreeze({
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
});
export const devOpsAiAdKeys = ObjectHelper.deepFreeze({
  beginner: {
    rec: "Como você grava áudios rápidos (ex.: dailies, reuniões) e armazena para análise do time devOps?",
    net: "Você ajusta configurações de áudio em calls de standup remoto (latência, eco)? (Sim/Não)",
    frq: "Em que frequência você disponibiliza replays de calls gravadas para quem não pôde comparecer?",
    doc: "Você documenta ou marca timestamps (ex.: 'em 03:25 discutimos pipeline X')? (Sim/Não)",
    mic: "Qual é sua abordagem para padronizar microfones e headsets no time, evitando problemas recorrentes?",
  },
  intermediate: {
    dsp: "Você configura equalização intermediária para filtrar ruído em reuniões críticas (ex.: PSC, R&D)?",
    cst: "Como você concatena áudios (ex.: briefings diários) em repositórios para análise posterior?",
    cpt: "Em que forma você adota scripts (FFmpeg) para cortar e unir faixas de áudio de calls longas?",
    net: "Você lida com latências ou travamentos quando há 30+ participantes numa daily ou retro? Cite um caso.",
    adv: "Você modera ou gerencia efeitos intermediários (amplificação, normalização) para manter volume uniforme?",
  },
  expert: {
    str: "Você configura streaming de áudio (ex.: Viva-voz de servidor) em pipelines? Explique um uso prático.",
    api: "Como você integra APIs de IA de áudio (TTS, STT) para fins de notificação ou logs de pipeline?",
    dsp: "De que modo você resolve problemas de DSP avançado (ex.: placa de som pro) em desktops devOps?",
    rec: "Você consolida gravações de grandes reuniões (ex.: planning trimestral) e indexa por palavra-chave?",
    mlb: "Em que frequência aplica machine learning para transcrever, filtrar e gerar insights de calls devOps?",
  },
});
export const devOpsAiImgKeys = ObjectHelper.deepFreeze({
  beginner: {
    scr: "Como você captura screenshots de logs ou telas de Jenkins e compartilha com a equipe para debug?",
    edb: "Você faz edições simples (destacar erros, anotar) em imagens de pipeline ou diagramas?",
    csh: "Com que frequência você insere imagens no wiki ou doc do pipeline para ilustrar configurações?",
    cmp: "Você comprime imagens antes de subir em repositórios, evitando inflar o código?",
    tag: "Você sugere tags (naming) para as imagens (ex.: pipeline_error.png) para fácil localização?",
  },
  intermediate: {
    lay: "Como você edita diagramas de arquitetura de containers, definindo camadas ou fluxos no DevOps?",
    net: "Você lida com compartilhamento de pastas com ícones, screenshots e diagrams de rede?",
    col: "Em que frequência você colabora em editores online (ex.: Miro, Figma) para desenhar pipeline?",
    conv: "Você converte formatos vetoriais (SVG) para PNG ou PDF para relatórios de forma controlada?",
    aut: "De que forma você automatiza geração de diagramas (ex.: PlantUML) e integra no pipeline de docs?",
  },
  expert: {
    big: "Como você manipula imagens massivas (ex.: logs visuais, diagramas grandes) e distribui via cdn interno?",
    adv: "Você integra scripts que atualizam diagramas dinamicamente conforme YAML ou code? Cite um caso.",
    sec: "De que modo você protege diagramas confidenciais (ex.: fluxos de segurança) em repositórios?",
    mig: "Em que frequência você migra ou consolida bibliotecas de ícones ou imagens do DevOps de um repositório para outro?",
    obs: "Você gera dashboards com imagens de monitoramento (ex.: snapshots de Grafana) e armazena para histórico?",
  },
});
export const devOpsAiVdKeys = ObjectHelper.deepFreeze({
  beginner: {
    rec: "Como você grava mini tutoriais de configurações de pipeline (ex.: Jenkinsfile) e compartilha com a equipe?",
    edb: "Você faz edições básicas (cortar, adicionar texto) para explicar o passo a passo no DevOps?",
    upl: "Em que frequência você hospeda esses vídeos internamente (drive, wiki) para treinamento rápido?",
    frm: "De que forma você converte formatos (ex.: MOV -> MP4) para compatibilidade com a wiki?",
    aud: "Você se preocupa em capturar áudio claro, mostrando logs no vídeo? (Sim/Não)",
  },
  intermediate: {
    eff: "Como você insere efeitos ou zoom para destacar partes do script, logs, ou resultados de pipeline?",
    arc: "Você arquiva vídeos antigos de sprints, releases, evitando ocupar espaço excessivo em servidores?",
    str: "Em que frequência você faz streaming ao vivo de deploys, demonstrando merges ou confs em tempo real?",
    sub: "Você adiciona legendas ou closed captions para acessibilidade em vídeos internos?",
    rep: "De que modo você gera relatórios de quantas visualizações/times consultaram o vídeo tutorial?",
  },
  expert: {
    adv: "Você produz vídeos multicâmera (ex.: webcam + tela) para grandes apresentações do fluxo DevOps?",
    cod: "Como você define encoding avançado (bitrate, codecs) para equilibrar qualidade e tamanho em vídeos longos?",
    drp: "Você tem pipeline que converte e distribui vídeos de training? Descreva um caso robusto.",
    ia_: "Em que frequência você utiliza IA (ex.: geração de legendas automáticas) em vídeos técnicos grandes?",
    scp: "Você orquestra scripts (FFmpeg) para pós-processar os vídeos e publicar em portais internos?",
  },
});
export const devOpsLlmsKeys = ObjectHelper.deepFreeze({
  beginner: {
    tip: "Como você usa LLM (ChatGPT, Copilot) para gerar esboços de scripts de CI/CD ou Dockerfiles simples?",
    txt: "Você costuma pedir à IA descrições curtas de processos DevOps para documentação rápida? (Sim/Não)",
    cmt: "Em que frequência você gera comentários de pipeline ou explicações automáticas via LLM?",
    dev: "De que forma você revalida se a IA não está sugerindo algo inseguro (ex.: expor secrets em logs)?",
    fdb: "Você coleta feedback do time se as sugestões da IA realmente ajudam ou criam ruído?",
  },
  intermediate: {
    prp: "Você elabora prompts intermediários, detalhando environment, orquestrador, escalabilidade ao LLM?",
    scr: "Como você automatiza script generation (bash, python) para configurações Docker/K8s e revisa segurança?",
    pol: "Em que frequência você define políticas de 'não subir senhas ou tokens' ao pedir ajuda à IA?",
    cdc: "Você integra a LLM a CD pipelines (ex.: PR auto-commit) e avalia se a modificação é segura?",
    log: "De que modo você loga as interações com a IA para auditar se algum secret vazou?",
  },
  expert: {
    adv: "Você executa instâncias self-hosted de modelos open source (Bloom, LLaMA) para sugerir config IaC?",
    cst: "Como você customiza o prompt engineering para refinar scripts de Terraform ou Ansible complexos?",
    cyc: "Em que frequência você cria loops de feedback, onde o pipeline valida e a IA refina o script?",
    sec: "De que forma você garante compliance (LGPD, HIPAA) se a IA manipular dados de infra sensíveis?",
    mae: "Você avalia a métrica de acerto (porcentagem de uso real do snippet gerado) e registra em um dashboard?",
  },
});
export const devOpsAddQuestions = ObjectHelper.deepFreeze([
  "devOps",
  new Map([
    ["docs", devOpsDocsKeys as any],
    ["spreadSheet", devOpsSsKeys],
    ["formBuilder", devOpsFmKeys],
    ["cloudStorage", devOpsCsKeys],
    ["businessInteligence", devOpsBiKeys],
    ["Crms", devOpsCrmsKeys],
    ["Erps", devOpsErpsKeys],
    ["planning", devOpsPlnKeys],
    ["audio", devOpsAiAdKeys],
    ["image", devOpsAiImgKeys],
    ["video", devOpsAiVdKeys],
    ["llms", devOpsLlmsKeys],
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
export const defDocsKeys = ObjectHelper.deepFreeze({
  beginner: {
    use: "Com que frequência você escreve textos simples (relatórios, anotações) em um editor de texto básico?",
    fmt: "Você sabe aplicar formatações essenciais (negrito, itálico, cabeçalho) em seus documentos?",
    col: "Como você compartilha ou colabora em documentos com outras pessoas? (Ex.: link, e-mail)",
    tem: "Você utiliza modelos (templates) prontos para padronizar relatórios? (Sim/Não)",
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
    idx: "Você já criou índices remissivos, estilos de parágrafo avançados ou capítulos em docs complexos?",
    sec: "O quanto você manipula permissões avançadas, criptografia e controle de acesso em um editor de texto?",
    vba: "Você desenvolve scripts/macros extensos (VBA, etc.) para automatizar fluxos em editores?",
    api: "Como você integra APIs ou plugins externos para enriquecer a edição (ex.: checagem gramatical)?",
    adv: "De que modo você gerencia documentos de alto volume (100+ páginas), mantendo consistência e performance?",
  },
});
export const defSsKeys = ObjectHelper.deepFreeze({
  beginner: {
    mth: "Você realiza cálculos básicos (SOMA, MÉDIA) em planilhas para tarefas rotineiras?",
    fmt: "Como você formata células (cores, bordas) para destacar dados importantes?",
    fil: "Você sabe filtrar ou ordenar dados simples numa planilha? (Sim/Não)",
    col: "Com que frequência você compartilha planilhas para que outros possam visualizar ou editar?",
    bar: "Você cria gráficos básicos (barra, pizza) para ilustrar resultados ou tendências?",
  },
  intermediate: {
    piv: "Como você utiliza tabelas dinâmicas para analisar grandes conjuntos de dados?",
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
});
export const defFmKeys = ObjectHelper.deepFreeze({
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
});
export const defCsKeys = ObjectHelper.deepFreeze({
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
});
export const defBiKeys = ObjectHelper.deepFreeze({
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
});
export const defCrmsKeys = ObjectHelper.deepFreeze({
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
});
export const defErpsKeys = ObjectHelper.deepFreeze({
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
});
export const defPlnKeys = ObjectHelper.deepFreeze({
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
});
export const defAiAdKeys = ObjectHelper.deepFreeze({
  beginner: {
    rec: "Você grava áudios simples (ex.: mensagens de voz) e compartilha com colegas? (Sim/Não)",
    ply: "Como você reproduz e controla volume (Windows, celular) para ouvir arquivos de áudio?",
    upf: "Com que frequência você faz upload de arquivos de áudio para a nuvem ou redes sociais?",
    ctb: "Você corta ou edita faixas básicas (remover partes silenciosas) em algum software simples?",
    dev: "De que forma você se certifica de que seus dispositivos (microfone, fones) estão funcionando?",
  },
  intermediate: {
    dsp: "Você aplica filtros intermediários (redução de ruído, normalização) em um editor (ex.: Audacity)?",
    mix: "Como você une várias faixas (ex.: música + locução) em um único arquivo de áudio?",
    ext: "Em que frequência você converte formatos (ex.: WAV -> MP3) ou ajusta bitrate para compactar?",
    net: "Você gerencia streaming de áudio (ex.: reuniões em equipe) e resolve problemas de latência?",
    sec: "Qual sua abordagem para restringir acesso a áudios gravados em ambientes corporativos?",
  },
  expert: {
    adv: "Como você lida com edições avançadas (multi-track), efeitos ou plugins profissionais em áudio?",
    api: "Você integra soluções de TTS ou IA de voz (ex.: ElevenLabs) em processos de gravação ou legendagem?",
    dsp: "De que modo você utiliza processamento digital de sinais (equalizadores, compressores) para refinar áudio?",
    aud: "Você executa auditoria ou rastreamento de quem baixou determinado arquivo de áudio crítico?",
    enc: "Em que frequência você criptografa arquivos de áudio sensíveis (chaves, chamadas confidenciais) e armazena com segurança?",
  },
});
export const defAiImgKeys = ObjectHelper.deepFreeze({
  beginner: {
    vie: "Como você visualiza imagens (PNG, JPG) e organiza pastas locais ou em nuvem?",
    red: "Você sabe reduzir tamanho (resolução) ou recortar fotos em softwares simples (Paint, etc.)?",
    shr: "Com que frequência você compartilha capturas de tela (screenshot) para explicar algo?",
    fmt: "Você converte formatos básicos (ex.: BMP -> PNG) para economizar espaço? (Sim/Não)",
    sec: "De que forma você se certifica de não compartilhar imagens com informações sensíveis?",
  },
  intermediate: {
    lay: "Você edita camadas (layers) em editores como GIMP, Paint.NET para montar composições?",
    cor: "Como você ajusta brilho, contraste ou cor (filtro) para melhorar imagens medianas?",
    net: "Em que frequência você integra ferramentas online para redimensionar ou hospedar imagens?",
    mul: "De que forma você combina várias imagens em um só arquivo (colagens, mosaicos) para relatórios?",
    ext: "Você utiliza extensões mais avançadas (ex.: SVG) e converte para PNG para uso em apresentações?",
  },
  expert: {
    adv: "Como você aplica scripts (ex.: ImageMagick) para processar lotes de imagens em larga escala?",
    ret: "Você realiza retoques complexos (remoção de fundo, blending) ou prefere passar para um designer?",
    prf: "Em que frequência você otimiza performance (tamanho, formatos) para sites ou apps que carregam muitas imagens?",
    cts: "Você emprega técnicas de compressão avançada (WebP, HEIC) em ambientes mais exigentes?",
    ia_: "De que modo você aproveita IA (ex.: Stable Diffusion) para gerar ou melhorar imagens automaticamente?",
  },
});
export const defAiVdKeys = ObjectHelper.deepFreeze({
  beginner: {
    rec: "Como você grava vídeos curtos (ex.: tela do computador, câmera do celular) para demonstrações básicas?",
    edb: "Você edita ou corta trechos simples (início/fim) antes de compartilhar o vídeo?",
    frq: "Com que frequência você hospeda vídeos em nuvem (Drive, YouTube) para acesso de amigos ou colegas?",
    aud: "Você verifica se o áudio está claro quando faz um vídeo explicativo? (Sim/Não)",
    frm: "De que forma você ajusta formatos de arquivo (MP4, MOV) para garantir compatibilidade geral?",
  },
  intermediate: {
    eff: "Você adiciona efeitos moderados (transições, legendas) em editores intermediários (ex.: Filmora)?",
    scr: "Como você grava screencasts (captura de tela + voz) para tutoriais mais detalhados?",
    net: "Em que frequência você faz streaming ao vivo (ex.: Discord, YouTube) e resolve problemas de conexão?",
    col: "De que modo você colabora com outras pessoas na edição e revisão de um mesmo vídeo?",
    ext: "Você converte resolução ou bitrate para otimizar tamanho (720p, 1080p) sem perder muita qualidade?",
  },
  expert: {
    adv: "Você manipula editores avançados (Adobe Premiere, DaVinci) com múltiplas trilhas e efeitos robustos?",
    mul: "Como você combina câmeras e microfones diferentes (multicâmera, audio mixing) em um único projeto?",
    ai_: "Em que frequência você utiliza IA para legendagem automática, melhora de resolução ou remoção de ruídos?",
    str: "Você gerencia streaming de eventos maiores (webinars, palestras) e lida com codificação complexa (H.265)?",
    scp: "De que forma você orquestra scripts (FFmpeg, HandBrake CLI) para conversão em lote e automação de fluxo?",
  },
});
export const defLlmsKeys = ObjectHelper.deepFreeze({
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
});
export const defaultAddQuestions = ObjectHelper.deepFreeze([
  "default",
  new Map([
    ["docs", defDocsKeys as any],
    ["spreadSheet", defSsKeys],
    ["formBuilder", defFmKeys],
    ["cloudStorage", defCsKeys],
    ["businessInteligence", defBiKeys],
    ["Crms", defCrmsKeys],
    ["Erps", defErpsKeys],
    ["planning", defPlnKeys],
    ["audio", defAiAdKeys],
    ["image", defAiImgKeys],
    ["video", defAiVdKeys],
    ["llms", defLlmsKeys],
  ]),
]);
