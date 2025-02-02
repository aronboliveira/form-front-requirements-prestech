import {
  cmAiAdKeys,
  cmAiImgKeys,
  cmAiVdKeys,
  cmBiKeys,
  cmCrmKeys,
  cmCsKeys,
  cmDocsKeys,
  cmErpKeys,
  cmFmKeys,
  cmLlmKeys,
  cmPlnKeys,
  cmSsKeys,
  defAiAdKeys,
  defAiImgKeys,
  defAiVdKeys,
  defBiKeys,
  defCrmsKeys,
  defCsQuestions,
  defDocsQuestions,
  defErpsKeys,
  defFmQuestions,
  defLlmKeys,
  defPlnKeys,
  devAiAdKeys,
  devAiImgKeys,
  devAiVdKeys,
  devBiKeys,
  devCrmsKeys,
  devCsKeys,
  devDocsKeys,
  devErpsKeys,
  devFmKeys,
  devLlmKeys,
  devOpsAiAdKeys,
  devOpsAiImgKeys,
  devOpsAiVdKeys,
  devOpsBiKeys,
  devOpsCrmsKeys,
  devOpsCsKeys,
  devOpsDocsKeys,
  devOpsErpsKeys,
  devOpsFmKeys,
  devOpsLlmKeys,
  devOpsPlnKeys,
  devOpsSsKeys,
  devPlnKeys,
  devSsKeys,
  eaAiAdKeys,
  eaAiImgKeys,
  eaAiVdKeys,
  eaBiKeys,
  eaCrmKeys,
  eaCsKeys,
  eaDocsKeys,
  eaErpKeys,
  eaFmKeys,
  eaLlmKeys,
  eaPlnKeys,
  eaSsKeys,
  executivoAdministrativoAddQuestions,
  fnAiAdKeys,
  fnAiImgKeys,
  fnAiVdKeys,
  fnBiKeys,
  fnCrmKeys,
  fnCsKeys,
  fnDocsKeys,
  fnErpKeys,
  fnFmKeys,
  fnLlmKeys,
  fnPlnKeys,
  fnSsKeys,
  mktAiAdKeys,
  mktAiImgKeys,
  mktAiVdKeys,
  mktBiKeys,
  mktCrmKeys,
  mktCsKeys,
  mktDocsKeys,
  mktErpsKeys,
  mktFmKeys,
  mktLlmKeys,
  mktPlnKeys,
  mktSsKeys,
  opAiAdKeys,
  opAiImgKeys,
  opAiVdKeys,
  opBiKeys,
  opCrmsKeys,
  opCsKeys,
  opDocsKeys,
  opErpsKeys,
  opFmKeys,
  opLlmKeys,
  opPlnKeys,
  opSsKeys,
  stN1AiAdKeys,
  stN1AiImgKeys,
  stN1AiVdKeys,
  stN1BiKeys,
  stN1CrmsKeys,
  stN1CsKeys,
  stN1DocsKeys,
  stN1ErpsKeys,
  stN1FmKeys,
  stN1LlmKeys,
  stN1PlnKeys,
  stN1SsKeys,
  stN2AiAdKeys,
  stN2AiImgKeys,
  stN2AiVdKeys,
  stN2BiKeys,
  stN2CrmsKeys,
  stN2CsKeys,
  stN2DocsKeys,
  stN2ErpsKeys,
  stN2FmKeys,
  stN2LlmKeys,
  stN2PlnKeys,
  stN2SsKeys,
} from "@/lib/client/vars";
import { complexityLabel, roleType } from "../foundations";
//primitives
export type nlStr = string | null;
export type voidish = undefined | null;
export type nlEl = Element | null;
export type queryableNode =
  | Document
  | DocumentFragment
  | Element;
export type ArrayLikeNotIterable =
  | NamedNodeMap
  | DOMStringMap
  | TouchList;
export type Int8ArrayLike =
  | Int8Array
  | Uint8Array
  | Uint8ClampedArray;
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
export type BaseIterableNotIterator =
  | BaseArray
  | SizeableIterable
  | String;
/* eslint-enable */
export type BaseIterable =
  | BaseIterableNotIterator
  | Generator;
export type DOMIterable =
  | NodeList
  | HTMLCollection
  | DOMStringList
  | CSSRuleList
  | StyleSheetList;
export type IterableNotIterator =
  | BaseIterableNotIterator
  | DOMIterable;
export type SpecialHTMLCollection =
  | HTMLFormControlsCollection
  | HTMLOptionsCollection;
export type SpecialNodeList = RadioNodeList;
export type SpecialDOMCollection =
  | SpecialHTMLCollection
  | SpecialNodeList;
export type IterableIterator = Generator;
export type ArrayLike =
  | ArrayLikeNotIterable
  | IterableNotIterator
  | IterableIterator;
export type ForEachable =
  | BaseArray
  | SizeableIterable
  | DOMIterable;
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
export type List<T> =
  | Array<T>
  | NodeListOf<T>
  | HTMLCollectionOf<T>;
export interface ContextualizedTel {
  ctx: React.Context<ITelCtx> | undefined;
}
export type nlRef<T> = React.RefObject<T> | null;
export type nlElRef = nlRef<nlEl>;
export type nlRDispatch<T> = React.Dispatch<
  React.SetStateAction<T>
> | null;
export type genericElement =
  | HTMLDivElement
  | HTMLSpanElement;
export type inputLikeElement =
  | HTMLInputElement
  | HTMLTextAreaElement;
export type entryElement =
  | inputLikeElement
  | HTMLSelectElement;
export type disableableElement =
  | entryElement
  | HTMLButtonElement;
export type pressableElement =
  | HTMLButtonElement
  | HTMLInputElement;
export type imageLikeElement =
  | HTMLImageElement
  | HTMLInputElement;
export type listElement =
  | HTMLUListElement
  | HTMLOListElement
  | HTMLMenuElement;
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
export type EntryInputType =
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "search"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";
export type InputType =
  | "button"
  | "hidden"
  | "image"
  | "reset"
  | "submit"
  | EntryInputType;
export type SelectTypes = "one" | "multiple";
export type EntryTypes =
  | EntryInputType
  | SelectTypes
  | "textarea";
export type VerboseEntryTypes =
  | EntryInputType
  | "select-one"
  | "select-multiple"
  | "textarea";
export interface DefaultFieldDescription {
  type: VerboseEntryTypes;
  required?: boolean;
}
export interface TextFieldDescription
  extends DefaultFieldDescription {
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  spellCheck?: boolean;
  writingSuggestions?: boolean;
}
export interface OptionFieldDescription
  extends DefaultFieldDescription {
  options?: string[];
}
export type roleDefined = Exclude<roleType, "undefined">;
export type ROStringRecord = Readonly<
  Record<string, string>
>;
export type FieldDescription =
  | TextFieldDescription
  | OptionFieldDescription;
export type KeysRecords<T extends string> = Partial<
  Record<T, FieldDescription>
>;
export type EntryTypeDictionary<T> = Readonly<{
  [K in roleDefined]: {
    [L in complexityLabel]: KeysRecords<T>;
  };
}>;
export type ROFieldRecord<T extends object> = Readonly<{
  [K in keyof T]: FieldDescription;
}>;
export interface EntryElementsDict<G, T> {
  [K in Exclude<roleType, "undefined">]: {
    [L in complexityLabel]: {
      [G in addQuestionsKey]: Partial<
        Record<SpreadsheetsQuestionsKeys, T>
      >;
    };
  };
}
export type StrKey<T> = keyof T & string;
export type DocsBeginnerKeys =
  | StrKey<typeof eaDocsKeys.beginner>
  | StrKey<typeof fnDocsKeys.beginner>
  | StrKey<typeof cmDocsKeys.beginner>
  | StrKey<typeof mktDocsKeys.beginner>
  | StrKey<typeof stN1DocsKeys.beginner>
  | StrKey<typeof stN2DocsKeys.beginner>
  | StrKey<typeof opDocsKeys.beginner>
  | StrKey<typeof devDocsKeys.beginner>
  | StrKey<typeof devOpsDocsKeys.beginner>;
export type DocsIntermediateKeys =
  | StrKey<typeof eaDocsKeys.intermediate>
  | StrKey<typeof fnDocsKeys.intermediate>
  | StrKey<typeof cmDocsKeys.intermediate>
  | StrKey<typeof mktDocsKeys.intermediate>
  | StrKey<typeof stN1DocsKeys.intermediate>
  | StrKey<typeof stN2DocsKeys.intermediate>
  | StrKey<typeof opDocsKeys.intermediate>
  | StrKey<typeof devDocsKeys.intermediate>
  | StrKey<typeof devOpsDocsKeys.intermediate>;
export type DocsExpertKeys =
  | StrKey<typeof eaDocsKeys.expert>
  | StrKey<typeof fnDocsKeys.expert>
  | StrKey<typeof cmDocsKeys.expert>
  | StrKey<typeof mktDocsKeys.expert>
  | StrKey<typeof stN1DocsKeys.expert>
  | StrKey<typeof stN2DocsKeys.expert>
  | StrKey<typeof opDocsKeys.expert>
  | StrKey<typeof devDocsKeys.expert>
  | StrKey<typeof devOpsDocsKeys.expert>;
export type DocsQuestionsKeys =
  | DocsBeginnerKeys
  | DocsIntermediateKeys
  | DocsExpertKeys
  | "libre";
export type SpreadsheetsBeginnerKeys =
  | StrKey<typeof eaSsKeys.beginner>
  | StrKey<typeof fnSsKeys.beginner>
  | StrKey<typeof cmSsKeys.beginner>
  | StrKey<typeof mktSsKeys.beginner>
  | StrKey<typeof stN1SsKeys.beginner>
  | StrKey<typeof stN2SsKeys.beginner>
  | StrKey<typeof opSsKeys.beginner>
  | StrKey<typeof devSsKeys.beginner>
  | StrKey<typeof devOpsSsKeys.beginner>;
export type SpreadsheetsIntermediateKeys =
  | StrKey<typeof eaSsKeys.intermediate>
  | StrKey<typeof fnSsKeys.intermediate>
  | StrKey<typeof cmSsKeys.intermediate>
  | StrKey<typeof mktSsKeys.intermediate>
  | StrKey<typeof stN1SsKeys.intermediate>
  | StrKey<typeof stN2SsKeys.intermediate>
  | StrKey<typeof opSsKeys.intermediate>
  | StrKey<typeof devSsKeys.intermediate>
  | StrKey<typeof devOpsSsKeys.intermediate>;
export type SpreadsheetsExpertKeys =
  | StrKey<typeof eaSsKeys.expert>
  | StrKey<typeof fnSsKeys.expert>
  | StrKey<typeof cmSsKeys.expert>
  | StrKey<typeof mktSsKeys.expert>
  | StrKey<typeof stN1SsKeys.expert>
  | StrKey<typeof stN2SsKeys.expert>
  | StrKey<typeof opSsKeys.expert>
  | StrKey<typeof devSsKeys.expert>
  | StrKey<typeof devOpsSsKeys.expert>;
export type SpreadsheetsQuestionsKeys =
  | SpreadsheetsBeginnerKeys
  | SpreadsheetsIntermediateKeys
  | SpreadsheetsExpertKeys
  | "libre";
export type FormBuildersBeginnerKeys =
  | StrKey<typeof eaFmKeys.beginner>
  | StrKey<typeof fnFmKeys.beginner>
  | StrKey<typeof cmFmKeys.beginner>
  | StrKey<typeof mktFmKeys.beginner>
  | StrKey<typeof stN1FmKeys.beginner>
  | StrKey<typeof stN2FmKeys.beginner>
  | StrKey<typeof opFmKeys.beginner>
  | StrKey<typeof devFmKeys.beginner>
  | StrKey<typeof devOpsFmKeys.beginner>;
export type FormBuilderIntermediateKeys =
  | StrKey<typeof eaFmKeys.intermediate>
  | StrKey<typeof fnFmKeys.intermediate>
  | StrKey<typeof cmFmKeys.intermediate>
  | StrKey<typeof mktFmKeys.intermediate>
  | StrKey<typeof stN1FmKeys.intermediate>
  | StrKey<typeof stN2FmKeys.intermediate>
  | StrKey<typeof opFmKeys.intermediate>
  | StrKey<typeof devFmKeys.intermediate>
  | StrKey<typeof devOpsFmKeys.intermediate>;
export type FormBuilderExpertKeys =
  | StrKey<typeof eaFmKeys.expert>
  | StrKey<typeof fnFmKeys.expert>
  | StrKey<typeof cmFmKeys.expert>
  | StrKey<typeof mktFmKeys.expert>
  | StrKey<typeof stN1FmKeys.expert>
  | StrKey<typeof stN2FmKeys.expert>
  | StrKey<typeof opFmKeys.expert>
  | StrKey<typeof devFmKeys.expert>
  | StrKey<typeof devOpsFmKeys.expert>;
export type FormBuilderQuestionsKeys =
  | FormBuildersBeginnerKeys
  | FormBuilderIntermediateKeys
  | FormBuilderExpertKeys
  | "libre";
export type CloudStorageBeginnerKeys =
  | StrKey<typeof eaCsKeys.beginner>
  | StrKey<typeof fnCsKeys.beginner>
  | StrKey<typeof cmCsKeys.beginner>
  | StrKey<typeof mktCsKeys.beginner>
  | StrKey<typeof stN1CsKeys.beginner>
  | StrKey<typeof stN2CsKeys.beginner>
  | StrKey<typeof opCsKeys.beginner>
  | StrKey<typeof devCsKeys.beginner>
  | StrKey<typeof devOpsCsKeys.beginner>;
export type CloudStorageIntermediateKeys =
  | StrKey<typeof eaCsKeys.intermediate>
  | StrKey<typeof fnCsKeys.intermediate>
  | StrKey<typeof cmCsKeys.intermediate>
  | StrKey<typeof mktCsKeys.intermediate>
  | StrKey<typeof stN1CsKeys.intermediate>
  | StrKey<typeof stN2CsKeys.intermediate>
  | StrKey<typeof opCsKeys.intermediate>
  | StrKey<typeof devCsKeys.intermediate>
  | StrKey<typeof devOpsCsKeys.intermediate>;
export type CloudStorageExpertKeys =
  | StrKey<typeof eaCsKeys.expert>
  | StrKey<typeof fnCsKeys.expert>
  | StrKey<typeof cmCsKeys.expert>
  | StrKey<typeof mktCsKeys.expert>
  | StrKey<typeof stN1CsKeys.expert>
  | StrKey<typeof stN2CsKeys.expert>
  | StrKey<typeof opCsKeys.expert>
  | StrKey<typeof devCsKeys.expert>
  | StrKey<typeof devOpsCsKeys.expert>;
export type CloudStorageQuestionsKeys =
  | CloudStorageBeginnerKeys
  | CloudStorageIntermediateKeys
  | CloudStorageExpertKeys
  | "libre";
export type BiBeginnerKeys =
  | StrKey<typeof eaBiKeys.beginner>
  | StrKey<typeof fnBiKeys.beginner>
  | StrKey<typeof cmBiKeys.beginner>
  | StrKey<typeof mktBiKeys.beginner>
  | StrKey<typeof stN1BiKeys.beginner>
  | StrKey<typeof stN2BiKeys.beginner>
  | StrKey<typeof opBiKeys.beginner>
  | StrKey<typeof devBiKeys.beginner>
  | StrKey<typeof devOpsBiKeys.beginner>
  | StrKey<typeof defBiKeys.beginner>;
export type BiIntermediateKeys =
  | StrKey<typeof eaBiKeys.intermediate>
  | StrKey<typeof fnBiKeys.intermediate>
  | StrKey<typeof cmBiKeys.intermediate>
  | StrKey<typeof mktBiKeys.intermediate>
  | StrKey<typeof stN1BiKeys.intermediate>
  | StrKey<typeof stN2BiKeys.intermediate>
  | StrKey<typeof opBiKeys.intermediate>
  | StrKey<typeof devCsKeys.intermediate>
  | StrKey<typeof devOpsBiKeys.intermediate>
  | StrKey<typeof defBiKeys.intermediate>;
export type BiExpertKeys =
  | StrKey<typeof eaBiKeys.expert>
  | StrKey<typeof fnBiKeys.expert>
  | StrKey<typeof cmBiKeys.expert>
  | StrKey<typeof mktBiKeys.expert>
  | StrKey<typeof stN1BiKeys.expert>
  | StrKey<typeof stN2BiKeys.expert>
  | StrKey<typeof opBiKeys.expert>
  | StrKey<typeof devCsKeys.expert>
  | StrKey<typeof devOpsBiKeys.expert>
  | StrKey<typeof defBiKeys.expert>;
export type BiQuestionsKeys =
  | BiBeginnerKeys
  | BiIntermediateKeys
  | BiExpertKeys
  | "libre";
export type CrmBeginnerKeys =
  | StrKey<typeof eaCrmKeys.beginner>
  | StrKey<typeof fnCrmKeys.beginner>
  | StrKey<typeof cmCrmKeys.beginner>
  | StrKey<typeof mktCrmKeys.beginner>
  | StrKey<typeof stN1CrmsKeys.beginner>
  | StrKey<typeof stN2CrmsKeys.beginner>
  | StrKey<typeof opCrmsKeys.beginner>
  | StrKey<typeof devCrmsKeys.beginner>
  | StrKey<typeof devOpsCrmsKeys.beginner>
  | StrKey<typeof defCrmsKeys.beginner>;
export type CrmIntermediateKeys =
  | StrKey<typeof eaCrmKeys.intermediate>
  | StrKey<typeof fnCrmKeys.intermediate>
  | StrKey<typeof cmCrmKeys.intermediate>
  | StrKey<typeof mktCrmKeys.intermediate>
  | StrKey<typeof stN1CrmsKeys.intermediate>
  | StrKey<typeof stN2CrmsKeys.intermediate>
  | StrKey<typeof opBiKeys.intermediate>
  | StrKey<typeof devCsKeys.intermediate>
  | StrKey<typeof devOpsCrmsKeys.intermediate>
  | StrKey<typeof defCrmsKeys.intermediate>;
export type CrmExpertKeys =
  | StrKey<typeof eaCrmKeys.expert>
  | StrKey<typeof fnCrmKeys.expert>
  | StrKey<typeof cmCrmKeys.expert>
  | StrKey<typeof mktCrmKeys.expert>
  | StrKey<typeof stN1CrmsKeys.expert>
  | StrKey<typeof stN2CrmsKeys.expert>
  | StrKey<typeof opBiKeys.expert>
  | StrKey<typeof devCsKeys.expert>
  | StrKey<typeof devOpsCrmsKeys.expert>
  | StrKey<typeof defCrmsKeys.expert>;
export type CrmQuestionsKeys =
  | CrmBeginnerKeys
  | CrmIntermediateKeys
  | CrmExpertKeys
  | "libre";
export type ErpBeginnerKeys =
  | StrKey<typeof eaErpKeys.beginner>
  | StrKey<typeof fnErpKeys.beginner>
  | StrKey<typeof cmErpKeys.beginner>
  | StrKey<typeof mktErpsKeys.beginner>
  | StrKey<typeof stN1ErpsKeys.beginner>
  | StrKey<typeof stN2ErpsKeys.beginner>
  | StrKey<typeof opErpsKeys.beginner>
  | StrKey<typeof devErpsKeys.beginner>
  | StrKey<typeof devOpsErpsKeys.beginner>
  | StrKey<typeof defErpsKeys.beginner>;
export type ErpIntermediateKeys =
  | StrKey<typeof eaErpKeys.intermediate>
  | StrKey<typeof fnErpKeys.intermediate>
  | StrKey<typeof cmErpKeys.intermediate>
  | StrKey<typeof mktErpsKeys.intermediate>
  | StrKey<typeof stN1ErpsKeys.intermediate>
  | StrKey<typeof stN2ErpsKeys.intermediate>
  | StrKey<typeof opErpsKeys.intermediate>
  | StrKey<typeof devErpsKeys.intermediate>
  | StrKey<typeof devOpsErpsKeys.intermediate>
  | StrKey<typeof defErpsKeys.intermediate>;
export type ErpExpertKeys =
  | StrKey<typeof eaErpKeys.expert>
  | StrKey<typeof fnErpKeys.expert>
  | StrKey<typeof cmErpKeys.expert>
  | StrKey<typeof mktErpsKeys.expert>
  | StrKey<typeof stN1ErpsKeys.expert>
  | StrKey<typeof stN2ErpsKeys.expert>
  | StrKey<typeof opErpsKeys.expert>
  | StrKey<typeof devErpsKeys.expert>
  | StrKey<typeof devOpsErpsKeys.expert>
  | StrKey<typeof defErpsKeys.expert>;
export type ErpQuestionsKeys =
  | ErpBeginnerKeys
  | ErpIntermediateKeys
  | ErpExpertKeys
  | "libre";
export type PlanningBeginnerKeys =
  | StrKey<typeof eaPlnKeys.beginner>
  | StrKey<typeof fnPlnKeys.beginner>
  | StrKey<typeof cmPlnKeys.beginner>
  | StrKey<typeof mktPlnKeys.beginner>
  | StrKey<typeof stN1PlnKeys.beginner>
  | StrKey<typeof stN2PlnKeys.beginner>
  | StrKey<typeof opPlnKeys.beginner>
  | StrKey<typeof devPlnKeys.beginner>
  | StrKey<typeof devOpsPlnKeys.beginner>
  | StrKey<typeof defPlnKeys.beginner>;
export type PlanningIntermediateKeys =
  | StrKey<typeof eaPlnKeys.intermediate>
  | StrKey<typeof fnPlnKeys.intermediate>
  | StrKey<typeof cmPlnKeys.intermediate>
  | StrKey<typeof mktPlnKeys.intermediate>
  | StrKey<typeof stN1PlnKeys.intermediate>
  | StrKey<typeof stN2PlnKeys.intermediate>
  | StrKey<typeof opPlnKeys.intermediate>
  | StrKey<typeof devPlnKeys.intermediate>
  | StrKey<typeof devOpsPlnKeys.intermediate>
  | StrKey<typeof defPlnKeys.intermediate>;
export type PlanningExpertKeys =
  | StrKey<typeof eaPlnKeys.expert>
  | StrKey<typeof fnPlnKeys.expert>
  | StrKey<typeof cmPlnKeys.expert>
  | StrKey<typeof mktPlnKeys.expert>
  | StrKey<typeof stN1PlnKeys.expert>
  | StrKey<typeof stN2PlnKeys.expert>
  | StrKey<typeof opPlnKeys.expert>
  | StrKey<typeof devPlnKeys.expert>
  | StrKey<typeof devOpsPlnKeys.expert>
  | StrKey<typeof defPlnKeys.expert>;
export type PlanningQuestionsKeys =
  | PlanningBeginnerKeys
  | PlanningIntermediateKeys
  | PlanningExpertKeys
  | "libre";
export type AudioAiBeginnerKeys =
  | StrKey<typeof eaAiAdKeys.beginner>
  | StrKey<typeof fnAiAdKeys.beginner>
  | StrKey<typeof cmAiAdKeys.beginner>
  | StrKey<typeof mktAiAdKeys.beginner>
  | StrKey<typeof stN1AiAdKeys.beginner>
  | StrKey<typeof stN2AiAdKeys.beginner>
  | StrKey<typeof opAiAdKeys.beginner>
  | StrKey<typeof devAiAdKeys.beginner>
  | StrKey<typeof devOpsAiAdKeys.beginner>
  | StrKey<typeof defAiAdKeys.beginner>;
export type AudioAiIntermediateKeys =
  | StrKey<typeof eaAiAdKeys.intermediate>
  | StrKey<typeof fnAiAdKeys.intermediate>
  | StrKey<typeof cmAiAdKeys.intermediate>
  | StrKey<typeof mktAiAdKeys.intermediate>
  | StrKey<typeof stN1AiAdKeys.intermediate>
  | StrKey<typeof stN2AiAdKeys.intermediate>
  | StrKey<typeof opAiAdKeys.intermediate>
  | StrKey<typeof devAiAdKeys.intermediate>
  | StrKey<typeof devOpsAiAdKeys.intermediate>
  | StrKey<typeof defPlnKeys.intermediate>;
export type AudioAiExpertKeys =
  | StrKey<typeof eaAiAdKeys.expert>
  | StrKey<typeof fnAiAdKeys.expert>
  | StrKey<typeof cmAiAdKeys.expert>
  | StrKey<typeof mktAiAdKeys.expert>
  | StrKey<typeof stN1AiAdKeys.expert>
  | StrKey<typeof stN2AiAdKeys.expert>
  | StrKey<typeof opAiAdKeys.expert>
  | StrKey<typeof devAiAdKeys.expert>
  | StrKey<typeof devOpsAiAdKeys.expert>
  | StrKey<typeof defPlnKeys.expert>;
export type AudioAiQuestionsKeys =
  | AudioAiBeginnerKeys
  | AudioAiIntermediateKeys
  | AudioAiExpertKeys
  | "libre";
export type ImageAiBeginnerKeys =
  | StrKey<typeof eaAiImgKeys.beginner>
  | StrKey<typeof fnAiImgKeys.beginner>
  | StrKey<typeof cmAiImgKeys.beginner>
  | StrKey<typeof mktAiImgKeys.beginner>
  | StrKey<typeof stN1AiImgKeys.beginner>
  | StrKey<typeof stN2AiImgKeys.beginner>
  | StrKey<typeof opAiImgKeys.beginner>
  | StrKey<typeof devAiImgKeys.beginner>
  | StrKey<typeof devOpsAiImgKeys.beginner>
  | StrKey<typeof defAiImgKeys.beginner>;
export type ImageAiIntermediateKeys =
  | StrKey<typeof eaAiImgKeys.intermediate>
  | StrKey<typeof fnAiImgKeys.intermediate>
  | StrKey<typeof cmAiImgKeys.intermediate>
  | StrKey<typeof mktAiImgKeys.intermediate>
  | StrKey<typeof stN1AiImgKeys.intermediate>
  | StrKey<typeof stN2AiImgKeys.intermediate>
  | StrKey<typeof opAiImgKeys.intermediate>
  | StrKey<typeof devAiImgKeys.intermediate>
  | StrKey<typeof devOpsAiImgKeys.intermediate>
  | StrKey<typeof defAiImgKeys.intermediate>;
export type ImageAiExpertKeys =
  | StrKey<typeof eaAiImgKeys.expert>
  | StrKey<typeof fnAiImgKeys.expert>
  | StrKey<typeof cmAiImgKeys.expert>
  | StrKey<typeof mktAiImgKeys.expert>
  | StrKey<typeof stN1AiImgKeys.expert>
  | StrKey<typeof stN2AiImgKeys.expert>
  | StrKey<typeof opAiImgKeys.expert>
  | StrKey<typeof devAiImgKeys.expert>
  | StrKey<typeof devOpsAiImgKeys.expert>
  | StrKey<typeof defAiImgKeys.expert>;
export type ImageAiQuestionsKeys =
  | ImageAiBeginnerKeys
  | ImageAiIntermediateKeys
  | ImageAiExpertKeys
  | "libre";
export type VideoAiBeginnerKeys =
  | StrKey<typeof eaAiVdKeys.beginner>
  | StrKey<typeof fnAiVdKeys.beginner>
  | StrKey<typeof cmAiVdKeys.beginner>
  | StrKey<typeof mktAiVdKeys.beginner>
  | StrKey<typeof stN1AiVdKeys.beginner>
  | StrKey<typeof stN2AiVdKeys.beginner>
  | StrKey<typeof opAiVdKeys.beginner>
  | StrKey<typeof devAiVdKeys.beginner>
  | StrKey<typeof devOpsAiVdKeys.beginner>
  | StrKey<typeof defAiVdKeys.beginner>;
export type VideoAiIntermediateKeys =
  | StrKey<typeof eaAiVdKeys.intermediate>
  | StrKey<typeof fnAiVdKeys.intermediate>
  | StrKey<typeof cmAiVdKeys.intermediate>
  | StrKey<typeof mktAiVdKeys.intermediate>
  | StrKey<typeof stN1AiVdKeys.intermediate>
  | StrKey<typeof stN2AiVdKeys.intermediate>
  | StrKey<typeof opAiVdKeys.intermediate>
  | StrKey<typeof devAiAdKeys.intermediate>
  | StrKey<typeof devOpsAiVdKeys.intermediate>
  | StrKey<typeof defAiVdKeys.intermediate>;
export type VideoAiExpertKeys =
  | StrKey<typeof eaAiVdKeys.expert>
  | StrKey<typeof fnAiVdKeys.expert>
  | StrKey<typeof cmAiVdKeys.expert>
  | StrKey<typeof mktAiVdKeys.expert>
  | StrKey<typeof stN1AiVdKeys.expert>
  | StrKey<typeof stN2AiVdKeys.expert>
  | StrKey<typeof opAiVdKeys.expert>
  | StrKey<typeof devAiAdKeys.expert>
  | StrKey<typeof devOpsAiVdKeys.expert>
  | StrKey<typeof defAiVdKeys.expert>;
export type VideoAiQuestionsKeys =
  | VideoAiBeginnerKeys
  | VideoAiIntermediateKeys
  | VideoAiExpertKeys
  | "libre";
export type LLMBeginnerKeys =
  | StrKey<typeof eaLlmKeys.beginner>
  | StrKey<typeof fnLlmKeys.beginner>
  | StrKey<typeof cmLlmKeys.beginner>
  | StrKey<typeof mktLlmKeys.beginner>
  | StrKey<typeof stN1LlmKeys.beginner>
  | StrKey<typeof stN2LlmKeys.beginner>
  | StrKey<typeof opLlmKeys.beginner>
  | StrKey<typeof devLlmKeys.beginner>
  | StrKey<typeof devOpsLlmKeys.beginner>;
export type LLMIntermediateKeys =
  | StrKey<typeof eaLlmKeys.intermediate>
  | StrKey<typeof fnLlmKeys.intermediate>
  | StrKey<typeof cmLlmKeys.intermediate>
  | StrKey<typeof mktLlmKeys.intermediate>
  | StrKey<typeof stN1LlmKeys.intermediate>
  | StrKey<typeof stN2LlmKeys.intermediate>
  | StrKey<typeof opLlmKeys.intermediate>
  | StrKey<typeof devLlmKeys.intermediate>
  | StrKey<typeof devOpsLlmKeys.intermediate>;
export type LLMExpertKeys =
  | StrKey<typeof eaLlmKeys.expert>
  | StrKey<typeof fnLlmKeys.expert>
  | StrKey<typeof cmAiVdKeys.expert>
  | StrKey<typeof mktLlmKeys.expert>
  | StrKey<typeof stN1LlmKeys.expert>
  | StrKey<typeof stN2LlmKeys.expert>
  | StrKey<typeof opLlmKeys.expert>
  | StrKey<typeof devLlmKeys.expert>
  | StrKey<typeof devOpsLlmKeys.expert>;
export type LLMQuestionsKeys =
  | LLMBeginnerKeys
  | LLMIntermediateKeys
  | LLMExpertKeys
  | "libre";
export type OfficeAppsKeys =
  | DocsQuestionsKeys
  | SpreadsheetsQuestionsKeys
  | FormBuilderQuestionsKeys
  | CloudStorageQuestionsKeys;
export type OfficePlatformsKeys =
  | BiQuestionsKeys
  | CrmQuestionsKeys
  | ErpQuestionsKeys
  | PlanningQuestionsKeys;
export type AiKeys =
  | AudioAiQuestionsKeys
  | ImageAiQuestionsKeys
  | VideoAiQuestionsKeys
  | LLMQuestionsKeys;
export type QuestionsKeys =
  | OfficeAppsKeys
  | OfficePlatformsKeys
  | AiKeys;
export type RoleComplexities = {
  beginner: Partial<Record<BeginnerAcronyms, any>>;
  intermediate: Partial<Record<IntermediateAcronyms, any>>;
  expert: Partial<Record<ExpertAcronyms, any>>;
};
