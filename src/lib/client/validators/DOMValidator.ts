import {
  disableableElement,
  entryElement,
  genericElement,
  inputLikeElement,
  pressableElement,
} from "@/lib/definitions/client/helpers";
export default class DOMValidator {
  static isGeneric(el: Element): el is genericElement {
    return el instanceof HTMLDivElement || el instanceof HTMLSpanElement;
  }
  static isCustomTextbox(el: EventTarget): el is HTMLElement {
    return (
      el instanceof HTMLElement &&
      el.contentEditable === "true" &&
      el.classList.contains("textbox")
    );
  }
  static isTextbox(el: EventTarget): el is inputLikeElement {
    return this.isDefaultTextbox(el) || this.isCustomTextbox(el);
  }
  static isDefaultTextbox(el: EventTarget): el is inputLikeElement {
    return (
      (el instanceof HTMLInputElement && el.type === "text") ||
      el instanceof HTMLTextAreaElement
    );
  }
  static isCustomCheckbox(el: EventTarget): el is HTMLElement {
    return (
      el instanceof HTMLElement &&
      (el.role === "checkbox" || el.classList.contains("checkbox"))
    );
  }
  static isDefaultCheckbox(el: EventTarget): el is HTMLInputElement {
    return el instanceof HTMLInputElement && el.type === "checkbox";
  }
  static isCheckbox(el: EventTarget): el is HTMLElement {
    return this.isDefaultCheckbox(el) || this.isCustomCheckbox(el);
  }
  static isCustomRadio(el: EventTarget): el is HTMLElement {
    return (
      el instanceof HTMLElement &&
      (el.role === "radio" || el.classList.contains("radio"))
    );
  }
  static isDefaultRadio(el: EventTarget): el is HTMLInputElement {
    return el instanceof HTMLInputElement && el.type === "radio";
  }
  static isRadio(el: EventTarget): el is HTMLElement {
    return this.isDefaultRadio(el) || this.isCustomRadio(el);
  }
  static isCustomButton(el: EventTarget): el is HTMLElement {
    return (
      el instanceof HTMLElement &&
      (el.role === "button" ||
        el.classList.contains("button") ||
        el.classList.contains("btn"))
    );
  }
  static isButton(el: EventTarget): el is HTMLElement {
    return this.isDefaultPressable(el) || this.isCustomButton(el);
  }
  static isCustomPressable(el: EventTarget): el is HTMLElement {
    return (
      this.isCustomButton(el) ||
      (el instanceof HTMLElement && el.classList.contains("pressable"))
    );
  }
  static isDefaultPressable(el: EventTarget): el is pressableElement {
    return (
      el instanceof HTMLButtonElement ||
      (el instanceof HTMLInputElement &&
        (el.type === "button" || el.type === "submit" || el.type === "reset"))
    );
  }
  static isPressable(el: EventTarget): el is HTMLElement {
    return this.isDefaultPressable(el) || this.isCustomPressable(el);
  }
  static isCustomCheckable(el: EventTarget): el is HTMLElement {
    return (
      this.isCustomCheckbox(el) ||
      this.isCustomRadio(el) ||
      (el instanceof HTMLElement && el.classList.contains("checkable"))
    );
  }
  static isDefaultCheckable(el: EventTarget): el is HTMLInputElement {
    return (
      el instanceof HTMLInputElement &&
      (el.type === "checkbox" || el.type === "radio")
    );
  }
  static isCheckable(el: EventTarget): el is HTMLElement {
    return this.isDefaultCheckable(el) || this.isCustomCheckable(el);
  }
  static isDefaultRequireableInput(el: EventTarget): el is HTMLInputElement {
    return (
      el instanceof HTMLInputElement &&
      !(
        el.type === "hidden" ||
        el.type === "button" ||
        el.type === "reset" ||
        el.type === "submit" ||
        el.type === "image"
      )
    );
  }
  static isCustomEntry(el: EventTarget): el is HTMLElement {
    return (
      this.isCustomCheckable(el) || this.isCustomTextbox(el)
      //TODO CUSTOM SELECT
    );
  }
  static isDefaultEntry(el: EventTarget): el is entryElement {
    return (
      this.isDefaultRequireableInput(el) ||
      el instanceof HTMLTextAreaElement ||
      el instanceof HTMLSelectElement
    );
  }
  static isEntry(el: EventTarget): el is HTMLElement {
    return this.isDefaultEntry(el) || this.isCustomEntry(el);
  }
  static isCustomDisableable(el: EventTarget): el is HTMLElement {
    return this.isCustomPressable(el) || this.isCustomEntry(el);
  }
  static isDefaultDisableable(el: EventTarget): el is disableableElement {
    return this.isDefaultPressable(el) || this.isDefaultEntry(el);
  }
  static isDisableable(el: EventTarget): el is HTMLElement {
    return this.isDefaultDisableable(el) || this.isCustomDisableable(el);
  }
}
