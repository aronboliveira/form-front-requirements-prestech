//@ts-nocheck
import {
  addQuestionsKey,
  complexityLabel,
  roleType,
} from "../definitions/foundations";
import ObjectHelper from "../helpers/ObjectHelper";
import {
  comercialAddQuestions,
  defaultAddQeustions,
  devAddQuestions,
  devOpsAddQuestions,
  executivoAdministrativoAddQuestions,
  financeiroQuestionsAddQuestions,
  marketingAddQuestions,
  operatorioAddQuestions,
  suporteTecnicoN1AddQuestions,
  suporteTecnicoN2AddQuestions,
} from "./vars";
export const addQuestionsMap: Map<
  roleType,
  Map<addQuestionsKey, { [K in complexityLabel]: { [k: string]: string } }>
> = ObjectHelper.deepFreeze(
  new Map([
    executivoAdministrativoAddQuestions,
    financeiroAddQuestions,
    comercialAddQuestions,
    marketingAddQuestions,
    suporteTecnicoN1AddQuestions,
    suporteTecnicoN2AddQuestions,
    operatorioAddQuestions,
    devAddQuestions,
    devOpsAddQuestions,
    defaultAddQeustions,
  ])
);
