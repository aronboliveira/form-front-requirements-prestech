import { nlEl } from "../helpers";
import { ITelCtx } from "./interfaces/contexts";
export interface Identifiable {
  id?: string;
}
export interface ContextualizedTel {
  ctx: React.Context<ITelCtx> | undefined;
}
export type nlRef<T> = React.RefObject<T> | null;
export type nlElRef = nlRef<nlEl>;
export type nlRDispatch<T> = React.Dispatch<React.SetStateAction<T>> | null;
export type Role = 'executivoAdministrativo' | 'financeiro' | 'comercial' | 'marketing' | 'suporteTecnicoN1' | 'suporteTecnicoN2' | 'operatorio' | 'desenvolvimento' | 'devOps'