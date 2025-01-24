//primitives
export type nlStr = string | null;
export type voidish = undefined | null;
export type nlEl = Element | null;
export type queryableNode = Document | DocumentFragment | Element;
export type ArrayLikeNotIterable = NamedNodeMap | DOMStringMap | TouchList;
export type Int8ArrayLike = Int8Array | Uint8Array | Uint8ClampedArray;
export type Int16ArrayLike = Int16Array | Uint16Array;
export type Int32ArrayLike = Int32Array | Uint32Array;
export type FloatArrayLike = Float32Array | Float64Array;
export type TypedArray =
  | Int8ArrayLike
  | Int16ArrayLike
  | Int32ArrayLike
  | FloatArrayLike;
export type BaseArray = Array | TypedArray;
export type SizeableIterable = Map | Set;
export type SettableIterable =
  | SizeableIterable
  | TypedArray; /* eslint-disable */
export type BaseIterableNotIterator = BaseArray | SizeableIterable | String;
/* eslint-enable */
export type BaseIterable = BaseIterableNotIterator | Generator;
export type DOMIterable =
  | NodeList
  | HTMLCollection
  | DOMStringList
  | CSSRuleList
  | StyleSheetList;
export type IterableNotIterator = BaseIterableNotIterator | DOMIterable;
export type SpecialHTMLCollection =
  | HTMLFormControlsCollection
  | HTMLOptionsCollection;
export type SpecialNodeList = RadioNodeList;
export type SpecialDOMCollection = SpecialHTMLCollection | SpecialNodeList;
export type IterableIterator = Generator;
export type ArrayLike =
  | ArrayLikeNotIterable
  | IterableNotIterator
  | IterableIterator;
export type ForEachable = BaseArray | SizeableIterable | DOMIterable;
export type nlQueryableNode = queryableNode | null;
export type nlHtEl = HTMLElement | null;
export type nlDiv = HTMLDivElement | null;
export type nlInp = HTMLInputElement | null;
export type nlSel = HTMLSelectElement | null;
export type nlTxtEl = nlInp | HTMLTextAreaElement;
export type nlBtn = HTMLButtonElement | null;
export type nlFm = HTMLFormElement | null;
export type nlFs = HTMLFieldSetElement | null;
export type nlDlg = HTMLDialogElement | null;
export type List<T> = Array<T> | NodeListOf<T> | HTMLCollectionOf<T>;
export interface ContextualizedTel {
  ctx: React.Context<ITelCtx> | undefined;
}
export type nlRef<T> = React.RefObject<T> | null;
export type nlElRef = nlRef<nlEl>;
export type nlRDispatch<T> = React.Dispatch<React.SetStateAction<T>> | null;
export type genericElement = HTMLDivElement | HTMLSpanElement;
export type inputLikeElement = HTMLInputElement | HTMLTextAreaElement;
export type entryElement = inputLikeElement | HTMLSelectElement;
export type disableableElement = entryElement | HTMLButtonElement;
export type pressableElement = HTMLButtonElement | HTMLInputElement;
export type imageLikeElement = HTMLImageElement | HTMLInputElement;
export type listElement = HTMLUListElement | HTMLOListElement | HTMLMenuElement;
export type FormControl =
  | entryElement
  | HTMLButtonElement
  | HTMLOutputElement
  | HTMLFieldSetElement
  | HTMLObjectElement
  | HTMLOptionElement
  | HTMLOptGroupElement
  | HTMLDataListElement;
export type rMouseEvent = MouseEvent | React.MouseEvent;
export type rKbEv = KeyboardEvent | React.KeyboardEvent;
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
export type ClassesKey =
  | "inpDivClasses"
  | "inpLabClasses"
  | "inpClasses"
  | "textClasses"
  | "contextualTextClasses"
  | "ccClasses"
  | "dddClasses"
  | "telClasses"
  | "selectClasses"
  | "btnSec"
  | "btnPrim"
  | "mainFsClasses"
  | "mainFsLegClasses"
  | "officePlatforms"
  | "officeApps"
  | "aiApps";
export type BeginnerAcronyms =
  | "org"
  | "mtg"
  | "frc"
  | "frm"
  | "dat"
  | "fam"
  | "frq"
  | "ent"
  | "tax"
  | "est"
  | "crm"
  | "con"
  | "seg"
  | "rel"
  | "sol"
  | "met"
  | "des"
  | "os_"
  | "net"
  | "rep"
  | "doc"
  | "srv"
  | "mon"
  | "exc"
  | "wrk"
  | "sch"
  | "stp"
  | "mst"
  | "git"
  | "dbg"
  | "cim"
  | "df1"
  | "df2"
  | "df3"
  | "und";
export type IntermediateAcronyms =
  | "wrk"
  | "apt"
  | "vsn"
  | "mld"
  | "sec"
  | "cnb"
  | "avc"
  | "rpd"
  | "prd"
  | "saf"
  | "mth"
  | "mul"
  | "adv"
  | "ret"
  | "col"
  | "anl"
  | "abt"
  | "eml"
  | "rtn"
  | "cfg"
  | "tkt"
  | "prb"
  | "rem"
  | "sct"
  | "vir"
  | "rtp"
  | "ext"
  | "flw"
  | "vms"
  | "alr"
  | "oop"
  | "fra"
  | "dbi"
  | "cic"
  | "tst"
  | "kub"
  | "iaa"
  | "hlg"
  | "scl"
  | "df4"
  | "df5"
  | "und";
export type ExpertAcronyms =
  | "aut"
  | "gov"
  | "dsh"
  | "lan"
  | "mfa"
  | "cmp"
  | "aud"
  | "ris"
  | "opt"
  | "seg"
  | "exc"
  | "cst"
  | "net"
  | "omc"
  | "roa"
  | "ai_"
  | "dsp"
  | "big"
  | "spt"
  | "sfc"
  | "ext"
  | "bak"
  | "sec"
  | "scl"
  | "hgh"
  | "dck"
  | "mon"
  | "prf"
  | "inv"
  | "pro"
  | "dev"
  | "drc"
  | "arc"
  | "cld"
  | "adv"
  | "hdm"
  | "can"
  | "pol"
  | "obs"
  | "df6"
  | "df7"
  | "und";
export type RoleComplexities = {
  beginner: Partial<Record<BeginnerAcronyms, any>>;
  intermediate: Partial<Record<IntermediateAcronyms, any>>;
  expert: Partial<Record<ExpertAcronyms, any>>;
};
