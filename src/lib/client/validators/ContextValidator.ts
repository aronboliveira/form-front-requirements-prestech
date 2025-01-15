import { roleType } from "@/lib/definitions/foundations";
export default class ContextValidator {
  static isRoleType(v: string): v is roleType {
    return [
      "Executivo | Administrativo",
      "Financeiro",
      "Comercial",
      "Marketing",
      "Suporte TecnicoN1",
      "Suporte TecnicoN2",
      "Operatório",
      "Desenvolvimento",
      "DevOps",
      "Outros",
    ].some(r => r === v);
  }
}
