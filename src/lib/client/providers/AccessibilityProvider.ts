import { List } from "@/lib/definitions/client/helpers";
import { Provider } from "@/lib/definitions/foundations";
export default class AccessibilityProvider {
  #elements: Array<Element>;
  constructor(_elements: List<Element>) {
    this.#elements = (() => {
      return [
        ...(!Array.isArray(_elements) ? Array.from(_elements) : _elements),
      ].filter(el => el instanceof Element);
    })();
  }
  setup(): void {
    if (!this.#elements.length) return;
    for (let i = 0; i < this.#elements.length; i++) {
      const el = this.#elements[i];
      if (!AccessibilityProvider.isAccessibleRich(el)) continue;
      //if...
      this.applyAriaLabels();
      //if...
      this.applyRoleAndTitle();
    }
  }
  static isAccessibleRich(el: Element): boolean {
    return true;
  }
  applyAriaLabels(): void {}
  applyRoleAndTitle(): void {}
  get elements(): Array<Element> {
    return this.#elements;
  }
}
