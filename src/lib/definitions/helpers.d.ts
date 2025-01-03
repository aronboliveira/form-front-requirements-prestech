//primitives
export type nlStr = string | null;
//Elements
export type nlEl = Element | null;
export type nlHtEl = HTMLElement | null;
export type nlInp = HTMLInputElement | null;
export type nlTxtEl = nlInp | HTMLTextAreaElement;
export type nlFm = HTMLFormElement | null;
export type FormControl =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement
  | HTMLButtonElement
  | HTMLOutputElement
  | HTMLFieldSetElement
  | HTMLObjectElement
  | HTMLOptionElement
  | HTMLOptGroupElement
  | HTMLDataListElement;
//Values
export type CSSDisplay =
  | "none"
  | "block"
  | "inline"
  | "inline-block"
  | "flex"
  | "inline-flex"
  | "grid"
  | "inline-grid"
  | "table"
  | "inline-table"
  | "table-row"
  | "table-cell"
  | "table-column"
  | "table-caption"
  | "table-row-group"
  | "table-header-group"
  | "table-footer-group"
  | "list-item"
  | "contents"
  | "ruby"
  | "ruby-base"
  | "ruby-text"
  | "ruby-base-container"
  | "ruby-text-container"
  | "initial"
  | "inherit"
  | "unset";
export type TelType = "local" | "national" | "complete";
//Patterns
export type PseudoNum = `${number}`;
export type DDDPattern = `${number}${number}`;
export type ValidPhonePattern =
  | `${number}${number}${number}${number}${number}${"-"}?${number}${number}${number}${number}`
  | `${DDDPattern}${" " | ""}${number}${number}${number}${number}${
      | number
      | ""}${"-"}?${number}${number}${number}${number}`
  | `${"+" | ""}${number}${number | ""}${number | ""}${" " | ""}${DDDPattern}${
      | " "
      | ""}${number}${number}${number}${number}${
      | number
      | ""}${"-"}?${number}${number}${number}${number}`;
