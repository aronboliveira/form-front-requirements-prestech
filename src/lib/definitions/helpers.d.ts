export type nlEl = Element | null;
export type nlHtEl = HTMLElement | null;
export type nlInp = HTMLInputElement | null;
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
export type TelType = "local" | "national" | "complete";
