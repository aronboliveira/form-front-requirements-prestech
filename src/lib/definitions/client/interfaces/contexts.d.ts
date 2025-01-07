import { nlElRef } from "../foundations";

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
  role: string;
  setRole: React.Dispatch<React.SetStateAction<string>>;
}
