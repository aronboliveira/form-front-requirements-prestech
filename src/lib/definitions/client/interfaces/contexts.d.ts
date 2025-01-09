import { nlElRef, nlRDispatch, roleType } from "../../foundations";
export interface ITelCtx {
  required: boolean;
  label:
    | "prim"
    | "sec"
    | "unique"
    | "Telefone Primário"
    | "Telefone Secundário"
    | "Telefone";
}
export interface IFormCtx {
  role: roleType;
  setRole: nlRDispatch<roleType>;
}
