import { List } from "@/lib/definitions/client/helpers";
import AccessibilityHandler from "../handlers/AccessibilityHandler";
import DOMValidator from "../validators/DOMValidator";
export const setRole = (el: Element, v: string): void => {
  el.setAttribute("role", v);
};
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
      if (!this.isAccessibleRich(el) && !this.isRedundant(el)) continue;
      this.applyRoleAndTitle(el);
      this.applyAriaLabel(el);
      this.clearRedundant(el);
      el instanceof HTMLElement && AccessibilityHandler.trackAriaState(el);
    }
  }
  isAccessibleRich(el: Element): boolean {
    return el instanceof HTMLHtmlElement ||
      el instanceof HTMLHeadElement ||
      el instanceof HTMLMetaElement ||
      el instanceof HTMLLinkElement ||
      el instanceof HTMLScriptElement ||
      el.tagName === "NOSCRIPT" ||
      el instanceof HTMLBaseElement ||
      el instanceof HTMLStyleElement ||
      (el.parentElement && el.parentElement instanceof HTMLHeadElement) ||
      el.classList.contains("watcher")
      ? false
      : true;
  }
  isRedundant(el: Element): boolean {
    const tag = el.tagName.toLowerCase();
    return [
      "header",
      "main",
      "footer",
      "nav",
      "aside",
      "section",
      "form",
      "button",
      "img",
      "table",
      "article",
    ].some(t => t === tag);
  }
  clearRedundant(el: Element): void {
    ([
      "article",
      "cell",
      "columnheader",
      "definition",
      "directory",
      "document",
      "figure",
      "group",
      "heading",
      "img",
      "list",
      "listitem",
      "meter",
      "row",
      "rowgroup",
      "rowheader",
      "separator",
      "table",
      "term",
      "button",
      "checkbox",
      "gridcell",
      "link",
      "menuitem",
      "menuitemcheckbox",
      "menuitemradio",
      "option",
      "progressbar",
      "radio",
      "textbox",
      "grid",
      "listbox",
      "radiogroup",
      "banner",
      "complementary",
      "contentinfo",
      "navigation",
      "region",
      "search",
    ].some(
      r =>
        !(
          (el instanceof HTMLDivElement || el instanceof HTMLSpanElement) &&
          el.classList.contains("customRole")
        ) && r === el.role
    ) ||
      Object.entries({
        nav: "navigation",
        main: "main",
        footer: "contentinfo",
        header: "banner",
        section: "region",
        article: "article",
        aside: "complementary",
        form: "form",
        button: "button",
        img: "img",
        table: "table",
      }).some(([k, v]) => k === el.tagName.toLowerCase() && v === el.role)) &&
      el.removeAttribute("role");
  }
  applyAriaLabel(el: Element): void {}
  applyRoleAndTitle(el: Element): void {
    const isGeneric = DOMValidator.isGeneric(el),
      lowTag = el.tagName.toLowerCase(),
      isSectGeneric = isGeneric || lowTag === "section",
      cl = el.classList;
    if (el.hasChildNodes()) {
      if (el instanceof SVGSVGElement) setRole(el, "img");
      else if (el instanceof HTMLElement) {
        if (cl.contains("app") || cl.contains("application"))
          setRole(el, "application");
        else if (
          cl.contains("alert") ||
          cl.contains("warning") ||
          cl.contains("alertdialog")
        ) {
          const cps = getComputedStyle(el);
          el instanceof HTMLDialogElement ||
          cl.contains("modal") ||
          cl.contains("modal-dialog") ||
          cps.float !== "" ||
          cps.position === "fixed"
            ? setRole(el, "alertdialog")
            : setRole(el, "alert");
        }
      }
    } else if (el instanceof HTMLElement && el.contentEditable) {
      if (!(el instanceof HTMLInputElement)) {
        if (!DOMValidator.isDefaultEntry(el)) {
          if (cl.contains("textbox") && !cl.contains("combobox"))
            setRole(el, "textbox");
        }
        if (cl.contains("search") || cl.contains("searchbox"))
          setRole(el, "searchbox");
      }
    } else if (
      DOMValidator.isPressable(el) &&
      (cl.contains("toggle") || cl.contains("switch"))
    )
      setRole(el, "switch");
    else if (isSectGeneric || el instanceof HTMLFieldSetElement) {
      const desc = [...el.querySelectorAll("*")];
      if (
        desc.some(
          d =>
            (d instanceof HTMLInputElement && d.type === "radio") ||
            (DOMValidator.isGeneric(d) && d.role === "radio")
        ) &&
        (cl.contains("radiogroup") ||
          (desc.length &&
            ![el, ...el.querySelectorAll("*")].some(
              el => el.role === "radiogroup"
            )))
      )
        setRole(el, "radiogroup");
    } else if (
      (isGeneric ||
        el instanceof HTMLParagraphElement ||
        lowTag === "blockquote" ||
        lowTag === "cite") &&
      cl.contains("note")
    )
      setRole(el, "note");
    else if (
      (isSectGeneric || el instanceof HTMLFormElement) &&
      cl.contains("search")
    )
      setRole(el, "search");
    else if (
      isSectGeneric ||
      lowTag === "nav" ||
      lowTag === "aside" ||
      lowTag === "dialog"
    ) {
      const tip = el.querySelector('[class*="tip"]');
      if (cl.contains("toolbar")) setRole(el, "toolbar");
      else if (cl.contains("tree")) setRole(el, "tree");
      else if (
        cl.contains("tooltip") ||
        (tip &&
          [...el.querySelectorAll("*")].some(c =>
            c.classList.contains("tooltip")
          ))
      )
        setRole(el, "tooltip");
    } else if (isSectGeneric && cl.contains("customRole")) {
      if (cl.contains("banner") || cl.contains("header")) setRole(el, "banner");
      else if (cl.contains("columnheader") || cl.contains("thead"))
        setRole(el, "columnheader");
      else if (cl.contains("complementary") || cl.contains("aside"))
        setRole(el, "complementary");
      else if (cl.contains("contentinfo") || cl.contains("footer"))
        setRole(el, "contentinfo");
      else if (cl.contains("dfn") || cl.contains("definition"))
        setRole(el, "definition");
      else if (el.hasChildNodes() && cl.contains("document"))
        setRole(el, "document");
      else if (cl.contains("feed")) setRole(el, "feed");
      if (isGeneric) {
        if (cl.contains("cell") || cl.contains("td") || cl.contains("th"))
          setRole(el, "cell");
        else if (cl.contains("menuitemcheckbox") && cl.contains("checkbox"))
          setRole(el, "menuitemcheckbox");
        else if (cl.contains("menuitemradio") && cl.contains("radio"))
          setRole(el, "menuitemradio");
        else {
          [
            "article",
            "button",
            "checkbox",
            "dialog",
            "figure",
            "heading",
            "img",
            "link",
            "listitem",
            "main",
            "mark",
            "math",
            "meter",
            "navigation",
            "option",
            "presentation",
            "progressbar",
            "radio",
            "row",
            "rowgroup",
            "rowheader",
            "scrollbar",
            "separator",
            "status",
            "suggestion",
            "table",
            "timer",
          ].forEach(r => cl.contains(r) && setRole(el, r));
        }
      }
    }
  }
  get elements(): Array<Element> {
    return this.#elements;
  }
}
