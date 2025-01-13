import DOMValidator from "./DOMValidator";
export default class AccessibilityValidator {
  static isAriaLabelable(el: EventTarget): boolean {
    return (
      DOMValidator.isDefaultDisableable(el) ||
      el instanceof HTMLAnchorElement ||
      el instanceof HTMLImageElement ||
      el instanceof HTMLIFrameElement ||
      el instanceof HTMLFieldSetElement ||
      el instanceof HTMLTableElement ||
      DOMValidator.isGeneric(el as any) ||
      el instanceof SVGElement
    );
  }
  static isAriaDescribleable(el: EventTarget): boolean {
    return (
      DOMValidator.isDefaultDisableable(el) ||
      el instanceof HTMLImageElement ||
      el instanceof HTMLOListElement ||
      el instanceof HTMLUListElement ||
      el instanceof HTMLLIElement ||
      el instanceof HTMLTableCellElement ||
      el instanceof HTMLDialogElement ||
      el instanceof HTMLVideoElement ||
      el instanceof HTMLAudioElement ||
      DOMValidator.isGeneric(el as any) ||
      el instanceof SVGElement
    );
  }
  static canBeListbox(el: Element): boolean {
    return (
      el instanceof HTMLDivElement ||
      el instanceof HTMLUListElement ||
      el.tagName.toLowerCase() === "aside" ||
      el.tagName.toLowerCase() === "section"
    );
  }
}
