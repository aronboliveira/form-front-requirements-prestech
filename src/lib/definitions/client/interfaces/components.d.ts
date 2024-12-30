import { TelType } from "../../helpers";
export interface OptInput {
  required?: boolean;
}
export interface IEmailInput extends OptInput {}
export interface ITelInput extends OptInput {
  type: TelType;
}
