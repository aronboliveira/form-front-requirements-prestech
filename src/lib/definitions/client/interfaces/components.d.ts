import { TelType, nlFm } from "../helpers";
import { ContextualizedTel, Identifiable, roleType } from "../../foundations";
import { ITelCtx } from "./contexts";
export interface FormRelated {
  form?: nlFm;
}
export interface ReactiveState<T> {
  v: T;
  d: React.Dispatch<React.SetStateAction>;
}
export interface OptInput extends Identifiable {
  required?: boolean;
  label?: string;
}
export interface TelFragmentOptInput extends OptInput {}
export interface IEmailInput extends OptInput {}
export interface ITelInput extends OptInput, Partial<ContextualizedTel> {
  type: TelType;
  ctx?: React.Context<ITelCtx>;
}
export interface ICtxTxt extends OptInput {
  role: roleType;
  topic:
    | "DailyTasks"
    | "MainTaks"
    | "MainSw"
    | "AddSw"
    | "Priority"
    | "Optimize"
    | "Challenges"
    | "Collaboration"
    | string;
  placeholder?: string;
}
