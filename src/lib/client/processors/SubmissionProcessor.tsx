import { Processor } from "@/lib/definitions/foundations";
import DOMValidator from "../validators/DOMValidator";
import { entryElement } from "@/lib/definitions/client/helpers";
export default class SubmissionProcessor implements Processor<HTMLElement> {
  private static _instance: SubmissionProcessor;
  constructor() {
    if (!SubmissionProcessor._instance) SubmissionProcessor._instance = this;
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
    if (el instanceof HTMLInputElement) return this.#evaluateDefaultInput(el);
    else if (el instanceof HTMLSelectElement) return this.#evaluateSelect(el);
    else if (el instanceof HTMLTextAreaElement)
      return this.#evaluateTextArea(el);
    else return;
  }
  #evaluateDefaultInput(el: HTMLInputElement): boolean {
    if (el.type === "checkbox" || el.type === "radio")
      return this.#evaluateCheckable(el);
    else {
    }
    return true;
  }
  #evaluateCheckable(el: HTMLInputElement): boolean {
    return true;
  }
  #evaluateSelect(el: HTMLSelectElement): boolean {
    return true;
  }
  #evaluateTextArea(el: HTMLTextAreaElement): boolean {
    return true;
  }
  #evaluateCustomEntry(el: HTMLElement): boolean {
    return true;
  }
}
