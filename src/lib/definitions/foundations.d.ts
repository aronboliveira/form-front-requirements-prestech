import { nlEl } from "./client/helpers";
import { ITelCtx } from "./client/interfaces/contexts";
export interface Identifiable {
  id?: string;
}
export interface Provider {
  setup: () => void;
}
export interface Processor<T> {
  process: (data: T) => any;
}
export interface Mapper {
  map: (data: any) => any;
}
export type roleType =
  | "executivoAdministrativo"
  | "financeiro"
  | "comercial"
  | "marketing"
  | "suporteTecnicoN1"
  | "suporteTecnicoN2"
  | "operatorio"
  | "desenvolvimento"
  | "devOps"
  | "undefined";
export type officeTopicType =
  | "DailyTasks"
  | "MainTasks"
  | "MainSw"
  | "AddSw"
  | "Priority"
  | "Optimize"
  | "Challenges"
  | "Collaboration";
export type roleQuestionsMap = Map<
  officeTopicType,
  Map<Omit<roleType | "default", "undefined">, string>
>;
export type mapLabels = "roleQuestions";
export type TelType = "local" | "national" | "complete";
//Patterns
export type PseudoNum = `${number}`;
export type DDDPattern = `${number}${number}`;
export type ValidPhonePattern =
  | `${number}${number}${number}${number}${number}${"-"}?${number}${number}${number}${number}`
  | `${DDDPattern}${" " | ""}${number}${number}${number}${number}${
      | number
      | ""}${"-"}?${number}${number}${number}${number}`
  | `${"+" | ""}${number}${number | ""}${number | ""}${" " | ""}${DDDPattern}${
      | " "
      | ""}${number}${number}${number}${number}${
      | number
      | ""}${"-"}?${number}${number}${number}${number}`;
export type HttpBaseKeys = "Accept" | "Authorization";
export type BaseValues = "application/json" | "text/plain";
export type AcceptValues = BaseValues | "text/html";
export type AuthorizationValues = `Bearer ${string}` | `Basic ${string}`;
export type UpdateHeaderKeys = HttpBaseKeys | "Content-Type";
export type ContentTypeValues = BaseValues | "multipart/form-data";
export type GetHeaderKeys = HttpBaseKeys | "Cache-Control";
export type PostHeaderKeys = UpdateHeaderKeys | "X-Requested-With";
export type OptionsHeaderKeys = HttpBaseKeys | "Allow";
export type HeaderKeyValueUnion =
  | { key: "Accept"; value: AcceptValues }
  | { key: "Authorization"; value: AuthorizationValues }
  | { key: "Cache-Control"; value: "no-cache" | "max-age=0" | string }
  | { key: "Content-Type"; value: ContentTypeValues }
  | { key: "X-Requested-With"; value: "XMLHttpRequest" | string }
  | { key: "Allow"; value: "GET,POST,PUT,DELETE" | string };
export type PostHeaders =
  | { Accept: AcceptValues }
  | { Authorization: AuthorizationValues }
  | { "Content-Type": ContentTypeValues }
  | { "X-Requested-With": string };
