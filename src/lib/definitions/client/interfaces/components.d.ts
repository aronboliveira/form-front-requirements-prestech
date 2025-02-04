import { TelType, nlFm, nlHtEl } from "../helpers";
import {
  ContextualizedTel,
  Identifiable,
  PseudoNum,
  complexityLabel,
  complexityLevel,
  roleType,
  techAppKey,
} from "../../foundations";
import { ITelCtx } from "./contexts";
import { SetStateAction } from "react";
import { Acronyms } from "@/lib/client/vars";
export interface HasChildren {
  children: React.ReactNode | string;
}
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
export interface TelFragmentOptInput extends OptInput {
  local?: TelType;
}
export interface IEmailInput extends OptInput {
  restriction?: RegExp;
}
export interface ITelInput
  extends OptInput,
    Partial<ContextualizedTel> {
  type: TelType;
  ctx?: React.Context<ITelCtx>;
}
export interface ICtxTxt extends OptInput {
  role: roleType;
  topic: Acronyms[keyof Acronyms];
  acronym: AcronymsDefaults[keyof AcronymsDefaults];
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
  id: string;
  clickable?: boolean;
  escapable?: boolean;
}
export interface CtxCbContainerProps {
  apps: techAppKey[];
  num: PseudoNum;
}
export interface CtxCbProps {
  app: techAppKey;
  ownNum: PseudoNum;
}
export interface WatcherProps {
  _case: "mainForm" | "role";
  d?: React.Dispatch<SetStateAction<any>>;
  v?: any;
}
export interface FsRangedBlock extends HasChildren {
  ref: RefObject<nlHtEl>;
  p: RangeCtxBlockProps;
  id: string;
  level: complexityLabel;
}
export interface RangeInputBlock
  extends Omit<OptInput, "id"> {
  id: rangeCtxIds;
  required?: boolean;
  label?: string;
}
export interface RangeCtxBlockProps {
  lvl: complexityLevel;
  controller: string;
}
export interface Addable {
  additional?: React.ReactNode;
}
export interface AddInputSubFieldset extends Addable {
  prefix: string;
  sufix: string;
  questions: Array<[string, string]>;
}
export interface AddInputBlock
  extends Partial<
      HTMLInputElement &
        HTMLSelectElement &
        HTMLTextAreaElement
    >,
    Addable,
    Required<Identifiable> {
  name: string;
  descendants?: React.ReactNode;
}
export interface LimitedAddInputBlock
  extends AddInputBlock {
  max?: number;
  min?: number;
}
