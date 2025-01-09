import { officeTopicType, roleType } from "../definitions/foundations";
const inps = `form-control`,
  texts = `${inps} form-text-area`,
  btn = `btn`;
export const classes: {[k:string]: string} = {
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
export const CtxLabels:
Map<officeTopicType, Map<Omit<roleType | 'default', 'undefined'>, string>> = new Map([[
  'DailyTasks', new Map([[
    'executivoAdministrativo', '',
    'financeiro', '',
    'comercial', '',
    'marketing', '',
    'suporteTecnicoN1', '',
    'suporteTecnicoN2', '',
    'operatorio', '',
    'desenvolvimento', '',
    'devOps', '',
    'default', ''
  ]]),
  'MainTasks', new Map([[
    'executivoAdministrativo', '',
    'financeiro', '',
    'comercial', '',
    'marketing', '',
    'suporteTecnicoN1', '',
    'suporteTecnicoN2', '',
    'operatorio', '',
    'desenvolvimento', '',
    'devOps', '',
    'default', ''
  ]]),
  'MainSw', new Map([[
    'executivoAdministrativo', '',
    'financeiro', '',
    'comercial', '',
    'marketing', '',
    'suporteTecnicoN1', '',
    'suporteTecnicoN2', '',
    'operatorio', '',
    'desenvolvimento', '',
    'devOps', '',
    'default', ''
  ]]),
  'AddSw', new Map([[
    'executivoAdministrativo', '',
    'financeiro', '',
    'comercial', '',
    'marketing', '',
    'suporteTecnicoN1', '',
    'suporteTecnicoN2', '',
    'operatorio', '',
    'desenvolvimento', '',
    'devOps', '',
    'default', ''
  ]]),
  'Priority', new Map([[
    'executivoAdministrativo', '',
    'financeiro', '',
    'comercial', '',
    'marketing', '',
    'suporteTecnicoN1', '',
    'suporteTecnicoN2', '',
    'operatorio', '',
    'desenvolvimento', '',
    'devOps', '',
    'default', ''
  ]]),
  'Optimize', new Map([[
    'executivoAdministrativo', '',
    'financeiro', '',
    'comercial', '',
    'marketing', '',
    'suporteTecnicoN1', '',
    'suporteTecnicoN2', '',
    'operatorio', '',
    'desenvolvimento', '',
    'devOps', '',
    'default', ''
  ]]),
  'Challenges', new Map([[
    'executivoAdministrativo', '',
    'financeiro', '',
    'comercial', '',
    'marketing', '',
    'suporteTecnicoN1', '',
    'suporteTecnicoN2', '',
    'operatorio', '',
    'desenvolvimento', '',
    'devOps', '',
    'default', ''
  ]]),
  'Collaboration', new Map([[
    'executivoAdministrativo', '',
    'financeiro', '',
    'comercial', '',
    'marketing', '',
    'suporteTecnicoN1', '',
    'suporteTecnicoN2', '',
    'operatorio', '',
    'desenvolvimento', '',
    'devOps', '',
    'default', ''
  ]]),
]])