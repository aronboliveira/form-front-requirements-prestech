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
}
