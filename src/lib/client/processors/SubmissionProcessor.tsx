import { Processor } from "@/lib/definitions/foundations";
import DOMValidator from "../validators/DOMValidator";
import { entryElement } from "@/lib/definitions/client/helpers";
import MathHandler from "../handlers/MathHandler";
export default class SubmissionProcessor implements Processor<HTMLElement> {
  private static _instance: SubmissionProcessor;
  constructor() {
    if (!SubmissionProcessor._instance) SubmissionProcessor._instance = this;
  }
  public construct(): SubmissionProcessor {
    return SubmissionProcessor._instance
      ? SubmissionProcessor._instance
      : new SubmissionProcessor();
  }
  public process(el: HTMLElement): number {
    if (DOMValidator.isDefaultEntry(el)) {
      const res = this.#evaluateDefaulEntry(el);
      if (typeof res !== "boolean") return -1;
      else return res ? 1 : 0;
    } else {
      const res = this.#evaluateCustomEntry(el);
      if (typeof res !== "boolean") return -1;
      else return res ? 1 : 0;
    }
  }
  #evaluateDefaulEntry(el: entryElement): boolean | void {
    if (el instanceof HTMLInputElement) {
      const res = this.#evaluateDefaultInput(el);
      if (typeof res !== "boolean") return;
      else return res;
    } else if (el instanceof HTMLSelectElement) return this.#evaluateSelect(el);
    else if (el instanceof HTMLTextAreaElement)
      return this.#evaluateTextArea(el);
    else return;
  }
  #evaluateDefaultInput(el: HTMLInputElement): boolean | void {
    if (el.type === "checkbox" || el.type === "radio")
      return this.#evaluateCheckable(el);
    else if (DOMValidator.isDefaultWritableInput(el)) {
      if (!el.checkValidity()) {
        el.reportValidity();
        //display invalidity as placeholder and border
        //set temporary placeholder in DOMHandler
        //set temporary border in StyleHandler
        return false;
      }
      return true;
    } else if ((el as HTMLInputElement).type === "color") {
      const max = (el as HTMLInputElement).dataset.max,
        min = (el as HTMLInputElement).dataset.min;
      if (max) {
        //display invalidity as border
        const decMax = MathHandler.hexToDecimal(max),
          decV = MathHandler.hexToDecimal((el as HTMLInputElement).value);
        if (!Number.isFinite(decMax)) return true;
        if (!Number.isFinite(decV) || decV > decMax) return false;
      }
      if (min) {
        //display invalidity as border
        const decMin = MathHandler.hexToDecimal(min),
          decV = MathHandler.hexToDecimal((el as HTMLInputElement).value);
        if (!Number.isFinite(decMin)) return true;
        if (!Number.isFinite(decV) || decV < decMin) return false;
      }
      return true;
    }
    return;
  }
  #evaluateCheckable(el: HTMLInputElement): boolean | void {
    if (el.type == "checkbox") return el.checked;
    else if (el.type === "radio") {
    } else return;
  }
  #evaluateSelect(el: HTMLSelectElement): boolean {
    //display invalidity as border
    //handle multiple
    if (el.dataset.notaccepted)
      return el.dataset.notaccepted
        .split(",")
        .map(v => v.trim())
        .some(v => v === el.value);
    return true;
  }
  #evaluateTextArea(el: HTMLTextAreaElement): boolean {
    if (!el.checkValidity()) {
      el.reportValidity();
      //display invalidity as placeholder and border
      return false;
    }
    return true;
  }
  #evaluateCustomEntry(el: HTMLElement): boolean {
    return true;
  }
}
