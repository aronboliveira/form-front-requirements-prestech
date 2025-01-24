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
export type appGroups = "Tasks" | "Platforms";
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
export const addQuestionsMap: Readonly<
  Map<
    keyof typeof friendlyRoles,
    { [K in "beginner" | "intermediate" | "expert"]: { [k: string]: any } }
  >
> = ObjectHelper.deepFreeze(
  new Map([
    [
      "executivoAdministrativo",
      {
        beginner: {
          org: "O quanto você tem familiaridade com organização de documentos básicos?",
          mtg: "Como você costuma agendar reuniões e compromissos?",
          frc: "Com que frequência você utiliza ferramentas de comunicação com colegas?",
          frm: "De que forma você cria ou preenche formulários administrativos simples?",
          dat: "Como você registra datas ou prazos em suas tarefas diárias?",
          // Possible UI comments:
          // org -> radio group: ['Nunca organizei', 'Organizo pouco', 'Sou organizado', 'Tenho práticas consolidadas']
          // mtg -> possible select: ['Google Calendar', 'Outlook', 'Manual', 'Outro']
          // frc -> radio group: ['Várias vezes ao dia', '1 vez por dia', '1 vez por semana', 'Raramente']
        },
        intermediate: {
          wrk: "De que modo você integra diferentes ferramentas de trabalho colaborativo (por exemplo, compartilhamento de documentos e atribuição de tarefas)?",
          apt: "Como você gerencia atribuições para a equipe e segue o progresso de cada tarefa?",
          vsn: "O quanto você tem familiaridade com controle de versões de documentos e fluxos de aprovação?",
          mld: "Qual é sua prática ao consolidar dados de múltiplas fontes (planilhas, BI) para relatórios administrativos?",
          sec: "Como você lida com a segurança e confidencialidade de informações administrativas?",
          // Comments:
          // wrk -> free text or select multiple
          // apt -> possible radio: ['Planilha única', 'Software de tarefas', 'Não utilizo nada específico']
          // vsn -> free text or numeric scale (1-5) of comfort
        },
        expert: {
          aut: "De que forma você automatiza processos administrativos usando scripts ou integrações complexas?",
          gov: "Como você implementa práticas de governança de dados em documentos e fluxos administrativos?",
          dsh: "Que tipo de painéis e indicadores você configura para acompanhar KPIs do setor?",
          lan: "Como você lida com implantação de soluções em larga escala (várias equipes/setores) para processos administrativos?",
          mfa: "O quanto você tem familiaridade com multi-fator de autenticação ou criptografia em documentos críticos?",
          // Comments:
          // mfa -> yes/no or radio group with detail if needed
          // dsh -> free text describing the approach or multiple choice with advanced BI tools
        },
      },
    ],
    [
      "financeiro",
      {
        beginner: {
          fam: "O quanto você tem familiaridade com planilhas financeiras simples (ex.: registrar despesas e receitas)?",
          frq: "Com que frequência você utiliza relatórios ou extratos financeiros no dia a dia?",
          ent: "Como você insere dados de forma manual ou automática nos sistemas financeiros básicos?",
          tax: "Qual é seu entendimento sobre impostos básicos (ISS, ICMS, etc.)?",
          est: "Como você faz estimativas iniciais de custos ou orçamentos?",
        },
        intermediate: {
          cnb: "De que forma você realiza conciliação bancária ou conferência de pagamentos?",
          avc: "O quanto você domina fórmulas intermediárias (ex.: TIR, VPL) para análises financeiras?",
          rpd: "Como você cruza dados de diferentes módulos (contas a pagar, vendas) em relatórios de nível intermediário?",
          prd: "Com que frequência você projeta cenários de vendas ou despesas com base em dados prévios?",
          saf: "Como você armazena e protege informações sensíveis (ex.: transações, dados contábeis)?",
        },
        expert: {
          aut: "Que estratégias de automação (scripts, macros avançadas) você implementa em análises financeiras?",
          gov: "Como você aplica governança e compliance (LGPD, etc.) em processos financeiros complexos?",
          cmp: "Quais modelos computacionais ou estatísticos você utiliza para projeções de longo prazo?",
          aud: "O quanto você está envolvido em auditorias externas ou internas e como conduz esse processo?",
          ris: "Como você monitora riscos financeiros (variação cambial, inadimplência) de forma proativa?",
          // Comments:
          // fam -> radio scale
          // avc -> numeric scale 1-5 for comfort, or select items
        },
      },
    ],
    [
      "comercial",
      {
        beginner: {
          crm: "O quanto você tem familiaridade com plataformas de CRM para registrar leads e oportunidades?",
          con: "Com que frequência você contata clientes ou prospects via ferramentas digitais?",
          seg: "Como você segmenta o público-alvo (região, tamanho, etc.) em suas atividades comerciais básicas?",
          rel: "De que forma você gera relatórios simples de vendas ou pipeline inicial?",
          sol: "Como você organiza solicitações de clientes (e-mail, sistema de tickets, etc.)?",
        },
        intermediate: {
          mth: "Quais métodos você utiliza para pontuar leads e priorizar contatos?",
          mul: "Com que frequência você gerencia campanhas multicanais (e-mail, redes sociais) e integra com dados de vendas?",
          adv: "O quanto você domina relatórios mais avançados no CRM (ex.: forecast, funil detalhado)?",
          ret: "Como você executa estratégias de retenção e pós-venda (descontos, follow-up, etc.)?",
          col: "De que modo você coordena ou compartilha informações com outras áreas (ex.: marketing, financeiro)?",
        },
        expert: {
          opt: "Como você otimiza funis de vendas usando automações complexas (ex.: gatilhos, integrações com chatbots)?",
          seg: "O quanto você utiliza dados de Big Data ou IA para segmentar clientes em alto nível?",
          exc: "Com que frequência você revê estratégias comerciais para realinhar metas e forecast de vendas?",
          cst: "De que forma você personaliza plataformas de CRM (API, scripts) para adequar-se a processos específicos?",
          net: "Como você cria networking e parcerias (afiliados, canais) integrados diretamente ao CRM?",
          // Comments:
          // seg -> radio scale
          // cst -> free text describing approach
        },
      },
    ],
    [
      "marketing",
      {
        beginner: {
          fam: "O quanto você tem familiaridade com configuração de anúncios simples (Google Ads, Facebook Ads)?",
          frq: "Com que frequência você planeja ou executa postagens em redes sociais?",
          met: "Quais métricas básicas (cliques, impressões) você costuma acompanhar ao lançar campanhas?",
          seg: "Como você seleciona públicos iniciais para as campanhas?",
          des: "De que forma você gera materiais visuais ou textuais para as campanhas (ex.: design simples)?",
        },
        intermediate: {
          anl: "O quanto você domina análises de tráfego (Google Analytics) para otimizar páginas ou anúncios?",
          abt: "Como você realiza testes A/B em campanhas de marketing?",
          eml: "Com que frequência você configura automação de e-mail marketing e nutrição de leads?",
          mul: "Como você gerencia múltiplas campanhas em simultâneo e acompanha cada uma?",
          rtn: "Descreva brevemente seu método de remarketing ou retargeting nas campanhas intermediárias:",
        },
        expert: {
          omc: "O quanto você integra estratégias omnichannel (on-line/off-line) e unifica relatórios de desempenho?",
          roa: "Como você monitora ROAS (Return on Ad Spend) em grandes campanhas e toma decisões estratégicas?",
          ai_: "De que forma você utiliza IA ou algoritmos de recomendação para segmentar público de maneira avançada?",
          dsp: "Como você aborda compra de mídia programática (DSP) para ampliação de alcance?",
          big: "Com que frequência você cruza dados de múltiplas fontes (CRM, BI) para planejar campanhas complexas?",
          // Comments:
          // ai_ -> short free text
          // dsp -> free text or yes/no
        },
      },
    ],
    [
      "suporteTecnicoN1",
      {
        beginner: {
          os_: "O quanto você tem familiaridade com sistemas operacionais (Windows, macOS) para suporte inicial?",
          frq: "Com que frequência você atende chamados de suporte simples (impressoras, e-mail, etc.)?",
          net: "Como você configura aspectos básicos de rede (Wi-Fi, IP, etc.)?",
          rep: "Que tipo de relatórios de incidência você preenche após resolver problemas?",
          doc: "De que forma você segue procedimentos ou tutoriais para solucionar dúvidas comuns?",
        },
        intermediate: {
          cfg: "Como você lida com configurações de software e permissões em nível de departamento?",
          tkt: "O quanto você utiliza sistemas de ticket ou help desk (Zendesk, ServiceNow) para gerenciar chamados?",
          prb: "Com que frequência você conduz diagnósticos avançados (logs, eventos) em problemas de hardware/OS?",
          rem: "Qual é sua experiência configurando acesso remoto para suporte (RDP, VNC, etc.)?",
          sec: "De que modo você orienta usuários sobre segurança e melhores práticas (senhas, antivírus)?",
        },
        expert: {
          spt: "Como você administra monitoramento contínuo de dispositivos (Zabbix, Nagios) para prevenção de falhas?",
          sfc: "O quanto você integra soluções de suporte com AD avançado (Group Policy) ou scripts de automação?",
          ext: "Com que frequência você lida com escalonamento de chamados críticos e coordena múltiplas equipes?",
          bak: "De que forma você implementa práticas de backup e recuperação no dia a dia de suporte?",
          sec: "Como você lida com incidentes de segurança avançados (ransomware, invasões)?",
          // Comments:
          // sfc -> yes/no or short text about approach
          // sec -> free text
        },
      },
    ],
    [
      "suporteTecnicoN2",
      {
        beginner: {
          srv: "O quanto você compreende servidores (Windows Server, Linux) em um nível básico de suporte?",
          net: "Como você ajuda na configuração inicial de roteadores, switches e firewall em nível simples?",
          mon: "Que ferramentas de monitoramento básicas (ping, tracert) você utiliza para diagnosticar problemas?",
          exc: "Com que frequência você lida com configurações iniciais de e-mail corporativo (Exchange, etc.)?",
          doc: "De que modo você atualiza documentação ou base de conhecimento para a equipe N1?",
        },
        intermediate: {
          sct: "Como você cria ou mantém scripts (PowerShell, Bash) para tarefas de manutenção?",
          adv: "O quanto você domina configurações avançadas de AD (políticas, permissões complexas)?",
          vir: "Você lida com ambientes virtuais (VMware, VirtualBox) e snapshots de máquinas?",
          sec: "De que forma você aplica regras de firewall ou políticas de segurança (Fortinet, Cisco)?",
          rtp: "Qual sua experiência resolvendo problemas de rede em camadas mais profundas (roteamento, VLAN)?",
        },
        expert: {
          scl: "Com que frequência você coordena soluções de escalonamento para problemas críticos (SLA curto)?",
          hgh: "Como você implementa alta disponibilidade (cluster, load balancing) em servidores ou serviços?",
          dck: "De que modo você integra contêineres (Docker, Kubernetes) no ambiente de suporte N2?",
          mon: "Qual é sua abordagem em monitoramento avançado (Zabbix, Nagios) para alertas pró-ativos?",
          prf: "Você executa tunning de performance (SQL, sistemas) ou investiga gargalos complexos?",
          // Comments:
          // dck -> yes/no or short text
        },
      },
    ],
    [
      "operatorio",
      {
        beginner: {
          wrk: "O quanto você conhece as rotinas de operações (ex.: TOTVS, SAP ECC) em nível básico?",
          sch: "Com que frequência você realiza agendamentos de processos (batch, backups) na operação diária?",
          stp: "Como você segue procedimentos operacionais padrão ao lidar com incidentes comuns?",
          doc: "De que forma você registra logs de operação ou relatórios de turno?",
          mst: "Quais ferramentas de monitoramento simples você utiliza para checar saúde de sistemas operacionais?",
        },
        intermediate: {
          ext: "O quanto você domina extração de dados de sistemas operacionais para relatórios, integrando com bancos de dados?",
          flw: "Como você cria fluxos de trabalho ou pipelines de operação (ex.: Jenkins, scripts) para automação?",
          vms: "Qual sua experiência em gerenciar máquinas virtuais, containers ou orquestradores no ambiente de produção?",
          alr: "De que modo você configura alertas ou gatilhos para prevenir incidentes operacionais?",
          sec: "Como você verifica conformidade de segurança (permissões, acessos) em rotinas de operação?",
        },
        expert: {
          scl: "Você lida com escalabilidade e balanceamento de carga em sistemas críticos? Descreva brevemente:",
          inv: "Com que frequência você faz investigações profundas de problemas de performance (logs avançados)?",
          pro: "Como você projeta estratégias de contingência e redundância em operações de grande porte?",
          dev: "De que forma você colabora com equipes de desenvolvimento para implantar mudanças no ambiente?",
          drc: "Como você implementa disaster recovery e testes de failover em nível avançado?",
        },
      },
    ],
    [
      "desenvolvimento",
      {
        beginner: {
          fam: "O quanto você tem familiaridade com uma linguagem de programação (ex.: JavaScript, Python)?",
          frq: "Com que frequência você realiza pequenas correções ou melhorias em código existente?",
          git: "Como você utiliza controle de versão (Git) para gerenciar alterações simples?",
          dbg: "Quais técnicas básicas de depuração (debug) você domina?",
          doc: "De que forma você mantém documentação mínima do que está desenvolvendo?",
        },
        intermediate: {
          oop: "O quanto você domina conceitos de programação orientada a objetos ou funções em projetos intermediários?",
          fra: "Com que frequência você trabalha em frameworks ou bibliotecas (ex.: React, Django)?",
          dbi: "Como você integra bancos de dados (SQL ou NoSQL) aos seus projetos de forma robusta?",
          cic: "Você configura pipelines de CI/CD (ex.: GitLab, Jenkins) para automatizar builds e testes?",
          tst: "Quais técnicas de testes (unitários, integração) você aplica para garantir qualidade de código?",
        },
        expert: {
          arc: "Como você define arquitetura de sistemas (ex.: microserviços, monolitos) para projetos complexos?",
          scl: "De que modo você lida com escalabilidade e performance em aplicações grandes?",
          sec: "O quanto você prioriza segurança (ex.: OWASP, encriptação) no desenvolvimento de aplicações?",
          dev: "Com que frequência você cria ou mantém libs próprias (NPM packages, PyPI, etc.) para reuso interno?",
          cld: "De que forma você realiza deploy em nuvens (AWS, Azure) e gerencia infraestrutura como código?",
          // Comments:
          // arc -> free text
          // sec -> radio scale
        },
      },
    ],
    [
      "devOps",
      {
        beginner: {
          fam: "O quanto você tem familiaridade com containers (Docker) ou versionamento (Git)?",
          frq: "Com que frequência você configura ambientes de teste ou staging antes de produção?",
          cim: "Como você define pipelines básicos de CI/CD (ex.: GitHub Actions) em pequenos projetos?",
          doc: "De que forma você registra configurações de ambiente para manter consistência?",
          mon: "Como você realiza monitoramento simples (logs, alertas) em ambiente devOps inicial?",
        },
        intermediate: {
          kub: "O quanto você domina orquestradores como Kubernetes para implementar microsserviços?",
          iaa: "Como você usa infraestrutura como código (Terraform, Ansible) para gerenciar recursos?",
          sec: "De que forma você trata segurança e compliance no pipeline (Ex.: scans, lint) de DevOps?",
          hlg: "Qual é seu método para lidar com logs e troubleshooting em ambientes de deploy frequente?",
          scl: "Como você gerencia escalabilidade automática (autoscaling) em nuvens ou data centers?",
        },
        expert: {
          adv: "Com que frequência você cria pipelines complexos de CI/CD com validações avançadas (testes de performance, qualidade, etc.)?",
          hdm: "Como você gerencia múltiplos ambientes híbridos (on-premise + cloud) com DevOps integrado?",
          can: "Qual sua abordagem de deploys de alto nível (blue/green, canary) e rollback automatizado?",
          pol: "De que forma você mantém políticas de governança (controle de acesso, segredos) em pipelines?",
          obs: "Como você integra observabilidade (metrics, tracing, logs) para diagnósticos em larga escala?",
        },
      },
    ],
    [
      "default",
      {
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
      },
    ],
    [
      "undefined",
      {
        beginner: {
          und: "Não há cargo definido. Como você avalia seu uso geral de tecnologias em nível básico?",
        },
        intermediate: {
          und: "Não há cargo definido. Qual sua experiência intermediária integrando ferramentas para resolver problemas?",
        },
        expert: {
          und: "Não há cargo definido. Você consegue lidar com projetos complexos de TI e automação avançada?",
        },
      },
    ],
  ])
);
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
