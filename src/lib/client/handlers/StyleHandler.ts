import { CSSDisplay, nlHtEl } from "@/lib/definitions/helpers";
import StyleValidator from "../validators/StyleValidator";
export default class StyleHandler {
  static toggleVisibility(
    element: nlHtEl,
    condition: any,
    visibleAs: CSSDisplay = "block"
  ): void {
    if (!(element instanceof HTMLElement)) return;
    if (!StyleValidator.evaluateDisplay(visibleAs))
      element.style.display = "block";
    condition ? (element.style.display = visibleAs) : "none";
  }
  static blurOnChange(el: nlHtEl, curr: number = 0.8, prev: number = 1) {
    if (!(el instanceof HTMLElement)) return;
    const cps = getComputedStyle(el);
    if (cps.transition === "") el.style.transition = "opacity 0.5s ease-in-out";
    else el.style.transition += ", opacity 0.5s ease-in-out";
    setTimeout(() => {
      if (!(el instanceof HTMLElement)) return;
      el.style.opacity = curr.toString();
    }, 50);
    setTimeout(() => {
      if (!(el instanceof HTMLElement)) return;
      el.style.opacity = prev.toString();
    }, 50);
  }
}
