import DOMValidator from "../validators/DOMValidator";
export default class LoggingProcessor {
  static evaluateElementPrototype(el: Element): number {
    if (el instanceof HTMLFormElement || el instanceof HTMLFieldSetElement)
      return 0;
    if (el instanceof HTMLSelectElement) return 1;
    if (
      el instanceof HTMLInputElement ||
      el instanceof HTMLTextAreaElement ||
      el instanceof HTMLButtonElement
    )
      return 2;
    if (DOMValidator.isDefaultList(el)) return 3;
    if (el instanceof HTMLDListElement) return 4;
    if (el instanceof HTMLOptGroupElement) return 5;
    if (el instanceof Element) return -1;
    else return NaN;
  }
}
