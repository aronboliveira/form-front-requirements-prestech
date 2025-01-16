import { Processor } from "@/lib/definitions/foundations";
import DOMValidator from "../validators/DOMValidator";
import { entryElement } from "@/lib/definitions/client/helpers";
import MathHandler from "../handlers/MathHandler";
import ExceptionHandler from "../handlers/ErrorHandler";
import StyleHandler from "../handlers/StyleHandler";
import DOMHandler from "../handlers/DOMHandler";
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
        StyleHandler.pulseColor(el);
        StyleHandler.switchPlaceholder(
          el,
          ExceptionHandler.describeValidityState(el.validity)
        );
        return false;
      }
      return true;
    } else if ((el as HTMLInputElement).type === "color") {
      const max = (el as HTMLInputElement).dataset.max,
        min = (el as HTMLInputElement).dataset.min,
        id = DOMHandler.getIdentifier(el),
        handleInvalidity = (el: HTMLElement): void => {
          el.dataset.invalid = "true";
          el.setAttribute("aria-invalid", "true");
          StyleHandler.pulseColor(el);
          setTimeout(() => {
            if (!id) return;
            const el = document.getElementById(id);
            if (!el) return;
            el.removeAttribute("dataset-invalid");
            el.removeAttribute("aria-invalid");
          }, 4000);
        };
      if (max) {
        const decMax = MathHandler.hexToDecimal(max),
          decV = MathHandler.hexToDecimal((el as HTMLInputElement).value);
        if (!Number.isFinite(decMax)) return true;
        if (!Number.isFinite(decV) || decV > decMax) {
          (el as HTMLInputElement).required && handleInvalidity(el);
          return false;
        }
      }
      if (min) {
        const decMin = MathHandler.hexToDecimal(min),
          decV = MathHandler.hexToDecimal((el as HTMLInputElement).value);
        if (!Number.isFinite(decMin)) return true;
        if (!Number.isFinite(decV) || decV < decMin) {
          (el as HTMLInputElement).required && handleInvalidity(el);
          return false;
        }
      }
      return true;
    }
    return;
  }
  #evaluateCheckable(el: HTMLInputElement): boolean | void {
    if (el.type == "checkbox") return el.checked;
    else if (el.type === "radio") {
      //handle radiogroup
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
      StyleHandler.pulseColor(el);
      StyleHandler.switchPlaceholder(
        el,
        ExceptionHandler.describeValidityState(el.validity)
      );
      return false;
    }
    return true;
  }
  #evaluateCustomEntry(el: HTMLElement): boolean {
    return true;
  }
}
