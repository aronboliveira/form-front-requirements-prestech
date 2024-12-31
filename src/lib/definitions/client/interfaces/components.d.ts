import { TelType } from "../../helpers";
export interface OptInput {
  required?: boolean;
  label?: string;
}
export interface IEmailInput extends OptInput {}
export interface ITelInput extends OptInput {
  type: TelType;
}
