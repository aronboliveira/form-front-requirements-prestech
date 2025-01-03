import { TelType } from "../../helpers";
import { ContextualizedTel, Identifiable } from "../foundations";
export interface OptInput extends Identifiable {
  required?: boolean;
  label?: string;
}
export interface TelFragmentOptInput extends OptInput, ContextualizedTel {}
export interface IEmailInput extends OptInput {}
export interface ITelInput extends OptInput, Partial<ContextualizedTel> {
  type: TelType;
}
