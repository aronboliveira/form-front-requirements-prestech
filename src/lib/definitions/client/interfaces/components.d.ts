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
export interface SpinnerComponentProps {
  spinnerClass?: "spinner-border" | "spinner-grow";
  spinnerColor?:
    | "text-danger"
    | "text-primary"
    | "text-secondary"
    | "text-success"
    | "text-warning"
    | "text-info"
    | "text-light"
    | "text-dark"
    | "";
  message?: string;
  fs?: boolean;
}
export interface DlgProps {
  dispatch: React.Dispatch<React.SetStateAction<boolean>>;
  state: boolean;
}
