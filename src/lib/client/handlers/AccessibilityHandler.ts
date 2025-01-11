import { inputLikeElement } from "@/lib/definitions/client/helpers";
import DOMValidator from "../validators/DOMValidator";

export default class AccessibilityHandler {
  static trackAriaState(el: HTMLElement, def: boolean = false): void {
    if (el.dataset.trackingaria !== "true") {
      el.dataset.trackingaria = "true";
      if (DOMValidator.isCustomDisableable(el)) {
        this.handleStaticAttrs(el);
        if (DOMValidator.isCustomCheckable(el)) {
          el.dataset.checked = def.toString();
          this.handleCheckState(el);
        } else if (DOMValidator.isCustomPressable(el)) {
          (el as HTMLElement).dataset.pressed = def.toString();
          this.handlePressState(el);
        }
      }
    }
  }
  static handleInput(el: inputLikeElement): void {}
  static handleSelect(el: HTMLSelectElement): void {}
  static handleCheckState(el: Element): void {
    el.addEventListener("mouseup", ev => {
      if (
        ev.currentTarget instanceof HTMLElement &&
        DOMValidator.isCustomCheckable(ev.currentTarget) &&
        ev.currentTarget.dataset.checked
      )
        ev.currentTarget.dataset.checked === "true"
          ? ev.currentTarget.setAttribute("aria-checked", "true")
          : ev.currentTarget.setAttribute("aria-checked", "false");
    });
  }
  static handlePressState(el: HTMLElement): void {
    const checkClick = (ev: Event): boolean =>
      ev instanceof MouseEvent &&
      ev.currentTarget &&
      DOMValidator.isCustomPressable(ev.currentTarget) &&
      ev.button === 0
        ? true
        : false;
    el.addEventListener(
      "mousedown",
      ev =>
        checkClick(ev) &&
        (ev.currentTarget as HTMLElement).setAttribute("aria-pressed", "true")
    );
    el.addEventListener(
      "mouseup",
      ev =>
        checkClick(ev) &&
        (ev.currentTarget as HTMLElement).setAttribute("aria-pressed", "false")
    );
  }
  static handleStaticAttrs(el: HTMLElement): void {
    const id = el.id,
      updateAria = (): void => {
        const el = document.getElementById(id);
        if (!(el && DOMValidator.isCustomEntry(el))) return;
        el.dataset.required === "true"
          ? el.setAttribute("aria-required", "true")
          : el.setAttribute("aria-required", "false");
        el.dataset.disabled === "true"
          ? el.setAttribute("aria-disabled", "true")
          : el.setAttribute("aria-disabled", "false");
      };
    updateAria();
    setInterval(updateAria, 2000);
  }
}
