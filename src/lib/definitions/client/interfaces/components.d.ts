import { TelType } from "../helpers";
import { ContextualizedTel, Identifiable } from "../../foundations";
import { ITelCtx } from "./contexts";
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
