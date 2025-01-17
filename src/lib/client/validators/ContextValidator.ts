import { roleType } from "@/lib/definitions/foundations";
export default class ContextValidator {
  static isRoleType(v: string): v is roleType {
    console.log(v);
    return [
      "executivoAdministrativo",
      "financeiro",
      "comercial",
      "marketing",
      "suporteTecnicoN1",
      "suporteTecnicoN2",
      "operatorio",
      "desenvolvimento",
      "devOps",
      "undefined",
      "default",
    ].some(r => r === v);
  }
}
