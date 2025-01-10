import {
  inputLikeElement,
  pressableElement,
} from "@/lib/definitions/client/helpers";

export default class AccessibilityHandler {
  static trackAriaState(el: Element): void {}
  static handleHidden(el: Element): void {}
  static handleFormControl(el: Element): void {}
  static handleInput(el: inputLikeElement): void {}
  static handleSelect(el: HTMLSelectElement): void {}
  static handleCheckState(el: HTMLInputElement): void {}
  static handlePressState(el: pressableElement): void {}
}
