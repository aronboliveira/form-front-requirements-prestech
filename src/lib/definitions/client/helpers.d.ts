//primitives
export type nlStr = string | null;
export type voidish = undefined | null;
//Elements
export type nlEl = Element | null;
export type queryableNode = Document | DocumentFragment | Element;
export type ArrayLikeNotIterable = NamedNodeMap | DOMStringMap | TouchList; // .length and [], but no ... or for+of
export type Int8ArrayLike = Int8Array | Uint8Array | Uint8ClampedArray;
export type Int16ArrayLike = Int16Array | Uint16Array;
export type Int32ArrayLike = Int32Array | Uint32Array;
export type FloatArrayLike = Float32Array | Float64Array;
export type TypedArray =
  | Int8ArrayLike
  | Int16ArrayLike
  | Int32ArrayLike
  | FloatArrayLike;
export type BaseArray = Array | TypedArray; // sharing many Array methods
export type SizeableIterable = Map | Set; // .size
export type SettableIterable = SizeableIterable | TypedArray; // .set()
/* eslint-disable */
export type BaseIterableNotIterator = BaseArray | SizeableIterable | String;
/* eslint-enable */
export type BaseIterable = BaseIterableNotIterator | Generator; // .next(): { done: boolean, value: any }
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
export type SpecialNodeList = RadioNodeList; // .value()
export type SpecialDOMCollection = SpecialHTMLCollection | SpecialNodeList;
export type IterableIterator = Generator; // .next() returns own object
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
