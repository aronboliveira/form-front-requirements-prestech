import { IUserRequirementFormEntity } from "@/lib/definitions/server/interfaces/entities";
export class UserRequirementFormEntity implements IUserRequirementFormEntity {
  nomeCompleto = "";
  email = "";
  cargo = "";
  setor = "";
  experienciaFerramentas = 0;
  familiaridadeLLM = "";
  interesseAprendizadoLLM = "";
  consentimento = false;
  outrasConsideracoes = "";
}
