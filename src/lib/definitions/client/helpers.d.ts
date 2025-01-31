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
  cmLlmsKeys,
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
  defLlmsKeys,
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
  devLlmsKeys,
  devOpsAiAdKeys,
  devOpsAiImgKeys,
  devOpsAiVdKeys,
  devOpsBiKeys,
  devOpsCrmsKeys,
  devOpsCsKeys,
  devOpsDocsKeys,
  devOpsErpsKeys,
  devOpsFmKeys,
  devOpsLlmsKeys,
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
  mktLlmsKeys,
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
  opLlmsKeys,
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
  stN1LlmsKeys,
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
  stN2LlmsKeys,
  stN2PlnKeys,
  stN2SsKeys,
} from "@/lib/client/vars";
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
export type DocsBeginnerKeys =
  | keyof typeof eaDocsKeys.beginner
  | keyof typeof fnDocsKeys.beginner
  | keyof typeof cmDocsKeys.beginner
  | keyof typeof mktDocsKeys.beginner
  | keyof typeof stN1DocsKeys.beginner
  | keyof typeof stN2DocsKeys.beginner
  | keyof typeof opDocsKeys.beginner
  | keyof typeof devDocsKeys.beginner
  | keyof typeof devOpsDocsKeys.beginner;
export type DocsIntermediateKeys =
  | keyof typeof eaDocsKeys.intermediate
  | keyof typeof fnDocsKeys.intermediate
  | keyof typeof cmDocsKeys.intermediate
  | keyof typeof mktDocsKeys.intermediate
  | keyof typeof stN1DocsKeys.intermediate
  | keyof typeof stN2DocsKeys.intermediate
  | keyof typeof opDocsKeys.intermediate
  | keyof typeof devDocsKeys.intermediate
  | keyof typeof devOpsDocsKeys.intermediate;
export type DocsExpertKeys =
  | keyof typeof eaDocsKeys.expert
  | keyof typeof fnDocsKeys.expert
  | keyof typeof cmDocsKeys.expert
  | keyof typeof mktDocsKeys.expert
  | keyof typeof stN1DocsKeys.expert
  | keyof typeof stN2DocsKeys.expert
  | keyof typeof opDocsKeys.expert
  | keyof typeof devDocsKeys.expert
  | keyof typeof devOpsDocsKeys.expert;
export type DocsQuestionsKeys =
  | DocsBeginnerKeys
  | DocsIntermediateKeys
  | DocsExpertKeys
  | "libre";
export type SpreadsheetsBeginnerKeys =
  | keyof typeof eaSsKeys.beginner
  | keyof typeof fnSsKeys.beginner
  | keyof typeof cmSsKeys.beginner
  | keyof typeof mktSsKeys.beginner
  | keyof typeof stN1SsKeys.beginner
  | keyof typeof stN2SsKeys.beginner
  | keyof typeof opSsKeys.beginner
  | keyof typeof devSsKeys.beginner
  | keyof typeof devOpsSsKeys.beginner;
export type SpreadsheetsIntermediateKeys =
  | keyof typeof eaSsKeys.intermediate
  | keyof typeof fnSsKeys.intermediate
  | keyof typeof cmSsKeys.intermediate
  | keyof typeof mktSsKeys.intermediate
  | keyof typeof stN1SsKeys.intermediate
  | keyof typeof stN2SsKeys.intermediate
  | keyof typeof opSsKeys.intermediate
  | keyof typeof devSsKeys.intermediate
  | keyof typeof devOpsSsKeys.intermediate;
export type SpreadsheetsExpertKeys =
  | keyof typeof eaSsKeys.expert
  | keyof typeof fnSsKeys.expert
  | keyof typeof cmSsKeys.expert
  | keyof typeof mktSsKeys.expert
  | keyof typeof stN1SsKeys.expert
  | keyof typeof stN2SsKeys.expert
  | keyof typeof opSsKeys.expert
  | keyof typeof devSsKeys.expert
  | keyof typeof devOpsSsKeys.expert;
export type SpreadsheetsQuestionsKeys =
  | SpreadsheetsBeginnerKeys
  | SpreadsheetsIntermediateKeys
  | SpreadsheetsExpertKeys
  | "libre";
export type FormBuildersBeginnerKeys =
  | keyof typeof eaFmKeys.beginner
  | keyof typeof fnFmKeys.beginner
  | keyof typeof cmFmKeys.beginner
  | keyof typeof mktFmKeys.beginner
  | keyof typeof stN1FmKeys.beginner
  | keyof typeof stN2FmKeys.beginner
  | keyof typeof opFmKeys.beginner
  | keyof typeof devFmKeys.beginner
  | keyof typeof devOpsFmKeys.beginner;
export type FormBuilderIntermediateKeys =
  | keyof typeof eaFmKeys.intermediate
  | keyof typeof fnFmKeys.intermediate
  | keyof typeof cmFmKeys.intermediate
  | keyof typeof mktFmKeys.intermediate
  | keyof typeof stN1FmKeys.intermediate
  | keyof typeof stN2FmKeys.intermediate
  | keyof typeof opFmKeys.intermediate
  | keyof typeof devFmKeys.intermediate
  | keyof typeof devOpsFmKeys.intermediate;
export type FormBuilderExpertKeys =
  | keyof typeof eaFmKeys.expert
  | keyof typeof fnFmKeys.expert
  | keyof typeof cmFmKeys.expert
  | keyof typeof mktFmKeys.expert
  | keyof typeof stN1FmKeys.expert
  | keyof typeof stN2FmKeys.expert
  | keyof typeof opFmKeys.expert
  | keyof typeof devFmKeys.expert
  | keyof typeof devOpsFmKeys.expert;
export type FormBuilderQuestionsKeys =
  | FormBuildersBeginnerKeys
  | FormBuilderIntermediateKeys
  | FormBuilderExpertKeys
  | "libre";
export type CloudStorageBeginnerKeys =
  | keyof typeof eaCsKeys.beginner
  | keyof typeof fnCsKeys.beginner
  | keyof typeof cmCsKeys.beginner
  | keyof typeof mktCsKeys.beginner
  | keyof typeof stN1CsKeys.beginner
  | keyof typeof stN2CsKeys.beginner
  | keyof typeof opCsKeys.beginner
  | keyof typeof devCsKeys.beginner
  | keyof typeof devOpsCsKeys.beginner;
export type CloudStorageIntermediateKeys =
  | keyof typeof eaCsKeys.intermediate
  | keyof typeof fnCsKeys.intermediate
  | keyof typeof cmCsKeys.intermediate
  | keyof typeof mktCsKeys.intermediate
  | keyof typeof stN1CsKeys.intermediate
  | keyof typeof stN2CsKeys.intermediate
  | keyof typeof opCsKeys.intermediate
  | keyof typeof devCsKeys.intermediate
  | keyof typeof devOpsCsKeys.intermediate;
export type CloudStorageExpertKeys =
  | keyof typeof eaCsKeys.expert
  | keyof typeof fnCsKeys.expert
  | keyof typeof cmCsKeys.expert
  | keyof typeof mktCsKeys.expert
  | keyof typeof stN1CsKeys.expert
  | keyof typeof stN2CsKeys.expert
  | keyof typeof opCsKeys.expert
  | keyof typeof devCsKeys.expert
  | keyof typeof devOpsCsKeys.expert;
export type CloudStorageQuestionsKeys =
  | CloudStorageBeginnerKeys
  | CloudStorageIntermediateKeys
  | CloudStorageExpertKeys
  | "libre";
export type BiBeginnerKeys =
  | keyof typeof eaBiKeys.beginner
  | keyof typeof fnBiKeys.beginner
  | keyof typeof cmBiKeys.beginner
  | keyof typeof mktBiKeys.beginner
  | keyof typeof stN1BiKeys.beginner
  | keyof typeof stN2BiKeys.beginner
  | keyof typeof opBiKeys.beginner
  | keyof typeof devBiKeys.beginner
  | keyof typeof devOpsBiKeys.beginner
  | keyof typeof defBiKeys.beginner;
export type BiIntermediateKeys =
  | keyof typeof eaBiKeys.intermediate
  | keyof typeof fnBiKeys.intermediate
  | keyof typeof cmBiKeys.intermediate
  | keyof typeof mktBiKeys.intermediate
  | keyof typeof stN1BiKeys.intermediate
  | keyof typeof stN2BiKeys.intermediate
  | keyof typeof opBiKeys.intermediate
  | keyof typeof devCsKeys.intermediate
  | keyof typeof devOpsBiKeys.intermediate
  | keyof typeof defBiKeys.intermediate;
export type BiExpertKeys =
  | keyof typeof eaBiKeys.expert
  | keyof typeof fnBiKeys.expert
  | keyof typeof cmBiKeys.expert
  | keyof typeof mktBiKeys.expert
  | keyof typeof stN1BiKeys.expert
  | keyof typeof stN2BiKeys.expert
  | keyof typeof opBiKeys.expert
  | keyof typeof devCsKeys.expert
  | keyof typeof devOpsBiKeys.expert
  | keyof typeof defBiKeys.expert;
export type BiQuestionsKeys =
  | BiBeginnerKeys
  | BiIntermediateKeys
  | BiExpertKeys
  | "libre";
export type CrmBeginnerKeys =
  | keyof typeof eaCrmKeys.beginner
  | keyof typeof fnCrmKeys.beginner
  | keyof typeof cmCrmKeys.beginner
  | keyof typeof mktCrmKeys.beginner
  | keyof typeof stN1CrmsKeys.beginner
  | keyof typeof stN2CrmsKeys.beginner
  | keyof typeof opCrmsKeys.beginner
  | keyof typeof devCrmsKeys.beginner
  | keyof typeof devOpsCrmsKeys.beginner
  | keyof typeof defCrmsKeys.beginner;
export type CrmIntermediateKeys =
  | keyof typeof eaCrmKeys.intermediate
  | keyof typeof fnCrmKeys.intermediate
  | keyof typeof cmCrmKeys.intermediate
  | keyof typeof mktCrmKeys.intermediate
  | keyof typeof stN1CrmsKeys.intermediate
  | keyof typeof stN2CrmsKeys.intermediate
  | keyof typeof opBiKeys.intermediate
  | keyof typeof devCsKeys.intermediate
  | keyof typeof devOpsCrmsKeys.intermediate
  | keyof typeof defCrmsKeys.intermediate;
export type CrmExpertKeys =
  | keyof typeof eaCrmKeys.expert
  | keyof typeof fnCrmKeys.expert
  | keyof typeof cmCrmKeys.expert
  | keyof typeof mktCrmKeys.expert
  | keyof typeof stN1CrmsKeys.expert
  | keyof typeof stN2CrmsKeys.expert
  | keyof typeof opBiKeys.expert
  | keyof typeof devCsKeys.expert
  | keyof typeof devOpsCrmsKeys.expert
  | keyof typeof defCrmsKeys.expert;
export type CrmQuestionsKeys =
  | CrmBeginnerKeys
  | CrmIntermediateKeys
  | CrmExpertKeys
  | "libre";
export type ErpBeginnerKeys =
  | keyof typeof eaErpKeys.beginner
  | keyof typeof fnErpKeys.beginner
  | keyof typeof cmErpKeys.beginner
  | keyof typeof mktErpsKeys.beginner
  | keyof typeof stN1ErpsKeys.beginner
  | keyof typeof stN2ErpsKeys.beginner
  | keyof typeof opErpsKeys.beginner
  | keyof typeof devErpsKeys.beginner
  | keyof typeof devOpsErpsKeys.beginner
  | keyof typeof defErpsKeys.beginner;
export type ErpIntermediateKeys =
  | keyof typeof eaErpKeys.intermediate
  | keyof typeof fnErpKeys.intermediate
  | keyof typeof cmErpKeys.intermediate
  | keyof typeof mktErpsKeys.intermediate
  | keyof typeof stN1ErpsKeys.intermediate
  | keyof typeof stN2ErpsKeys.intermediate
  | keyof typeof opErpsKeys.intermediate
  | keyof typeof devErpsKeys.intermediate
  | keyof typeof devOpsErpsKeys.intermediate
  | keyof typeof defErpsKeys.intermediate;
export type ErpExpertKeys =
  | keyof typeof eaErpKeys.expert
  | keyof typeof fnErpKeys.expert
  | keyof typeof cmErpKeys.expert
  | keyof typeof mktErpsKeys.expert
  | keyof typeof stN1ErpsKeys.expert
  | keyof typeof stN2ErpsKeys.expert
  | keyof typeof opErpsKeys.expert
  | keyof typeof devErpsKeys.expert
  | keyof typeof devOpsErpsKeys.expert
  | keyof typeof defErpsKeys.expert;
export type ErpQuestionsKeys =
  | ErpBeginnerKeys
  | ErpIntermediateKeys
  | ErpExpertKeys
  | "libre";
export type PlanningBeginnerKeys =
  | keyof typeof eaPlnKeys.beginner
  | keyof typeof fnPlnKeys.beginner
  | keyof typeof cmPlnKeys.beginner
  | keyof typeof mktPlnKeys.beginner
  | keyof typeof stN1PlnKeys.beginner
  | keyof typeof stN2PlnKeys.beginner
  | keyof typeof opPlnKeys.beginner
  | keyof typeof devPlnKeys.beginner
  | keyof typeof devOpsPlnKeys.beginner
  | keyof typeof defPlnKeys.beginner;
export type PlanningIntermediateKeys =
  | keyof typeof eaPlnKeys.intermediate
  | keyof typeof fnPlnKeys.intermediate
  | keyof typeof cmPlnKeys.intermediate
  | keyof typeof mktPlnKeys.intermediate
  | keyof typeof stN1PlnKeys.intermediate
  | keyof typeof stN2PlnKeys.intermediate
  | keyof typeof opPlnKeys.intermediate
  | keyof typeof devPlnKeys.intermediate
  | keyof typeof devOpsPlnKeys.intermediate
  | keyof typeof defPlnKeys.intermediate;
export type PlanningExpertKeys =
  | keyof typeof eaPlnKeys.expert
  | keyof typeof fnPlnKeys.expert
  | keyof typeof cmPlnKeys.expert
  | keyof typeof mktPlnKeys.expert
  | keyof typeof stN1PlnKeys.expert
  | keyof typeof stN2PlnKeys.expert
  | keyof typeof opPlnKeys.expert
  | keyof typeof devPlnKeys.expert
  | keyof typeof devOpsPlnKeys.expert
  | keyof typeof defPlnKeys.expert;
export type PlanningQuestionsKeys =
  | PlanningBeginnerKeys
  | PlanningIntermediateKeys
  | PlanningExpertKeys
  | "libre";
export type AudioAiBeginnerKeys =
  | keyof typeof eaAiAdKeys.beginner
  | keyof typeof fnAiAdKeys.beginner
  | keyof typeof cmAiAdKeys.beginner
  | keyof typeof mktAiAdKeys.beginner
  | keyof typeof stN1AiAdKeys.beginner
  | keyof typeof stN2AiAdKeys.beginner
  | keyof typeof opAiAdKeys.beginner
  | keyof typeof devAiAdKeys.beginner
  | keyof typeof devOpsAiAdKeys.beginner
  | keyof typeof defAiAdKeys.beginner;
export type AudioAiIntermediateKeys =
  | keyof typeof eaAiAdKeys.intermediate
  | keyof typeof fnAiAdKeys.intermediate
  | keyof typeof cmAiAdKeys.intermediate
  | keyof typeof mktAiAdKeys.intermediate
  | keyof typeof stN1AiAdKeys.intermediate
  | keyof typeof stN2AiAdKeys.intermediate
  | keyof typeof opAiAdKeys.intermediate
  | keyof typeof devAiAdKeys.intermediate
  | keyof typeof devOpsAiAdKeys.intermediate
  | keyof typeof defPlnKeys.intermediate;
export type AudioAiExpertKeys =
  | keyof typeof eaAiAdKeys.expert
  | keyof typeof fnAiAdKeys.expert
  | keyof typeof cmAiAdKeys.expert
  | keyof typeof mktAiAdKeys.expert
  | keyof typeof stN1AiAdKeys.expert
  | keyof typeof stN2AiAdKeys.expert
  | keyof typeof opAiAdKeys.expert
  | keyof typeof devAiAdKeys.expert
  | keyof typeof devOpsAiAdKeys.expert
  | keyof typeof defPlnKeys.expert;
export type AudioAiQuestionsKeys =
  | AudioAiBeginnerKeys
  | AudioAiIntermediateKeys
  | AudioAiExpertKeys
  | "libre";
export type ImageAiBeginnerKeys =
  | keyof typeof eaAiImgKeys.beginner
  | keyof typeof fnAiImgKeys.beginner
  | keyof typeof cmAiImgKeys.beginner
  | keyof typeof mktAiImgKeys.beginner
  | keyof typeof stN1AiImgKeys.beginner
  | keyof typeof stN2AiImgKeys.beginner
  | keyof typeof opAiImgKeys.beginner
  | keyof typeof devAiImgKeys.beginner
  | keyof typeof devOpsAiImgKeys.beginner
  | keyof typeof defAiImgKeys.beginner;
export type ImageAiIntermediateKeys =
  | keyof typeof eaAiImgKeys.intermediate
  | keyof typeof fnAiImgKeys.intermediate
  | keyof typeof cmAiImgKeys.intermediate
  | keyof typeof mktAiImgKeys.intermediate
  | keyof typeof stN1AiImgKeys.intermediate
  | keyof typeof stN2AiImgKeys.intermediate
  | keyof typeof opAiImgKeys.intermediate
  | keyof typeof devAiImgKeys.intermediate
  | keyof typeof devOpsAiImgKeys.intermediate
  | keyof typeof defAiImgKeys.intermediate;
export type ImageAiExpertKeys =
  | keyof typeof eaAiImgKeys.expert
  | keyof typeof fnAiImgKeys.expert
  | keyof typeof cmAiImgKeys.expert
  | keyof typeof mktAiImgKeys.expert
  | keyof typeof stN1AiImgKeys.expert
  | keyof typeof stN2AiImgKeys.expert
  | keyof typeof opAiImgKeys.expert
  | keyof typeof devAiImgKeys.expert
  | keyof typeof devOpsAiImgKeys.expert
  | keyof typeof defAiImgKeys.expert;
export type ImageAiQuestionsKeys =
  | ImageAiBeginnerKeys
  | ImageAiIntermediateKeys
  | ImageAiExpertKeys
  | "libre";
export type VideoAiBeginnerKeys =
  | keyof typeof eaAiVdKeys.beginner
  | keyof typeof fnAiVdKeys.beginner
  | keyof typeof cmAiVdKeys.beginner
  | keyof typeof mktAiVdKeys.beginner
  | keyof typeof stN1AiVdKeys.beginner
  | keyof typeof stN2AiVdKeys.beginner
  | keyof typeof opAiVdKeys.beginner
  | keyof typeof devAiVdKeys.beginner
  | keyof typeof devOpsAiVdKeys.beginner
  | keyof typeof defAiVdKeys.beginner;
export type VideoAiIntermediateKeys =
  | keyof typeof eaAiVdKeys.intermediate
  | keyof typeof fnAiVdKeys.intermediate
  | keyof typeof cmAiVdKeys.intermediate
  | keyof typeof mktAiVdKeys.intermediate
  | keyof typeof stN1AiVdKeys.intermediate
  | keyof typeof stN2AiVdKeys.intermediate
  | keyof typeof opAiVdKeys.intermediate
  | keyof typeof devAiAdKeys.intermediate
  | keyof typeof devOpsAiVdKeys.intermediate
  | keyof typeof defAiVdKeys.intermediate;
export type VideoAiExpertKeys =
  | keyof typeof eaAiVdKeys.expert
  | keyof typeof fnAiVdKeys.expert
  | keyof typeof cmAiVdKeys.expert
  | keyof typeof mktAiVdKeys.expert
  | keyof typeof stN1AiVdKeys.expert
  | keyof typeof stN2AiVdKeys.expert
  | keyof typeof opAiVdKeys.expert
  | keyof typeof devAiAdKeys.expert
  | keyof typeof devOpsAiVdKeys.expert
  | keyof typeof defAiVdKeys.expert;
export type VideoAiQuestionsKeys =
  | VideoAiBeginnerKeys
  | VideoAiIntermediateKeys
  | VideoAiExpertKeys
  | "libre";
export type LLMBeginnerKeys =
  | keyof typeof eaLlmKeys.beginner
  | keyof typeof fnLlmKeys.beginner
  | keyof typeof cmLlmsKeys.beginner
  | keyof typeof mktLlmsKeys.beginner
  | keyof typeof stN1LlmsKeys.beginner
  | keyof typeof stN2LlmsKeys.beginner
  | keyof typeof opLlmsKeys.beginner
  | keyof typeof devLlmsKeys.beginner
  | keyof typeof devOpsLlmsKeys.beginner
  | keyof typeof defLlmsKeys.beginner;
export type LLMIntermediateKeys =
  | keyof typeof eaLlmKeys.intermediate
  | keyof typeof fnLlmKeys.intermediate
  | keyof typeof cmLlmsKeys.intermediate
  | keyof typeof mktLlmsKeys.intermediate
  | keyof typeof stN1LlmsKeys.intermediate
  | keyof typeof stN2LlmsKeys.intermediate
  | keyof typeof opLlmsKeys.intermediate
  | keyof typeof devLlmsKeys.intermediate
  | keyof typeof devOpsLlmsKeys.intermediate
  | keyof typeof defLlmsKeys.intermediate;
export type LLMExpertKeys =
  | keyof typeof eaLlmKeys.expert
  | keyof typeof fnLlmKeys.expert
  | keyof typeof cmAiVdKeys.expert
  | keyof typeof mktLlmsKeys.expert
  | keyof typeof stN1LlmsKeys.expert
  | keyof typeof stN2LlmsKeys.expert
  | keyof typeof opLlmsKeys.expert
  | keyof typeof devLlmsKeys.expert
  | keyof typeof devOpsLlmsKeys.expert
  | keyof typeof defLlmsKeys.expert;
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
