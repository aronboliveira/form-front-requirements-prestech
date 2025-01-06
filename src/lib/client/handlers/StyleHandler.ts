import { CSSDisplay, nlHtEl, nlStr } from "@/lib/definitions/helpers";
import StyleValidator from "../validators/StyleValidator";
import CompabilityValidator from "../validators/CompabilityValidator";
export const pseudos: Map<string, Map<string, Map<string, string>>> = new Map();
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
  static blurOnChange(el: nlHtEl, curr: number = 0.8, prev: number = 1): void {
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
  static findStyleSheet(
    styleSheetIdentifier: RegExp,
    // ruleIdentifier: RegExp,
    attr = "href"
  ): CSSStyleSheet | undefined {
    const matchedSheets = [...document.styleSheets].filter(
      s => attr in s && (s as any)[attr]
    );
    if (!matchedSheets) return;
    return matchedSheets.find(s => styleSheetIdentifier.test((s as any)[attr]));
  }
  static findCssRule(sheet: CSSStyleSheet, ruleIdentifier: RegExp): number {
    return [...sheet.cssRules].findIndex(r => ruleIdentifier.test(r.cssText));
  }
  static replaceCssRule(
    sheet: CSSStyleSheet,
    i: number,
    newRule: string,
    expand: boolean = false
  ): boolean {
    if (i < 0) return false;
    let previous;
    if (expand) previous = sheet.cssRules[i];
    sheet.deleteRule(i);
    if (expand) {
      if (!previous) return false;
      sheet.insertRule(`${previous.cssText.slice(0, -3)}; ${newRule}; }`, i);
    } else sheet.insertRule(newRule, i);
    return true;
  }
  static defineRangeThumbPseudoElement(): nlStr {
    if (CompabilityValidator.isWebkit()) return "::-webkit-slider-thumb";
    else if (CompabilityValidator.isFirefox()) return "::-moz-range-thumb";
    else if (CompabilityValidator.isExplorer()) return "::-ms-thumb";
    else return null;
  }
  static defineRangeTrackPseudoElement(): nlStr {
    if (CompabilityValidator.isWebkit())
      return "::-webkit-slider-runnable-track";
    else if (CompabilityValidator.isFirefox()) return "::-moz-range-track";
    else if (CompabilityValidator.isExplorer()) return "::-ms-track";
    else return null;
  }
  static updatePseudos({
    idf,
    pseudo,
    prop,
    value,
  }: {
    idf: string;
    pseudo: string;
    prop: string;
    value: string;
  }): void {
    const pseudoStyles = document.getElementById("pseudos");
    if (!pseudoStyles) return;
    if (!CSS.supports(prop, value)) return;
    let identified = pseudos.get(idf);
    if (!identified) {
      identified = new Map();
      pseudos.set(idf, identified);
    }
    let selector = identified.get(pseudo);
    if (!selector) {
      selector = new Map();
      identified.set(pseudo, selector);
    }
    selector.set(prop, value);
    pseudoStyles.innerText = "";
    let styles = "";
    for (const [pseudoKey, rules] of identified.entries()) {
      styles += `${idf}${pseudoKey} { `;
      for (const [ruleKey, ruleValue] of rules.entries())
        styles += `${ruleKey}: ${ruleValue}; `;
      styles += `}`;
    }
    pseudoStyles.innerText = styles;
  }
}
