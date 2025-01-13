import { List, entryElement, voidish } from "@/lib/definitions/client/helpers";
import AccessibilityHandler from "../handlers/AccessibilityHandler";
import DOMValidator from "../validators/DOMValidator";
import IOHandler from "../handlers/IOHandler";
import AccessibilityValidator from "../validators/AccessibilityValidator";
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
      this.applyRole(el);
      this.applyAriaLabel(el);
      this.applyAriaDescription(el);
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
    !el.classList.contains("customRole") &&
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
      ].some(r => !DOMValidator.isGeneric(el) && r === el.role) ||
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
        }).some(([k, v]) => k === el.tagName.toLowerCase() && v === el.role) ||
        (el instanceof HTMLInputElement &&
          ((el.type === "text" && el.role === "textbox") ||
            (el.type === "number" && el.role === "spinbutton") ||
            (el.type === "search" && el.role === "searchbox") ||
            (el.type === "image" && el.role === "img") ||
            el.type === el.role))) &&
      el.removeAttribute("role");
  }
  applyAriaLabel(el: Element): void {
    if (
      !(DOMValidator.isDisableable(el) || el instanceof HTMLImageElement) ||
      el.ariaLabel
    )
      return;
    const uiLibraryClasses = {
        bootstrap: [
          "btn",
          "btn-primary",
          "btn-secondary",
          "btn-tertiary",
          "btn-warning",
        ],
        materialUI: ["MuiButton-root", "MuiIconButton-root"],
        others: ["btn-icon", "icon-button", "icon-only"],
      },
      findAndAssignLabeler = (el: HTMLElement): HTMLElement | voidish => {
        if (!el.dataset.labeler) return;
        const labeler =
          el.parentElement?.querySelector(`#${el.dataset.labeler}`) ||
          el.parentElement?.parentElement?.querySelector(
            `#${el.dataset.labeler}`
          ) ||
          document.getElementById(el.dataset.labeler);
        if (!labeler) return;
        el.setAttribute(
          `aria-labelledby`,
          labeler instanceof HTMLElement
            ? labeler.dataset.friendlyname || labeler.id
            : labeler.id
        );
        if (labeler instanceof HTMLElement) el.ariaLabel = labeler.innerText;
      },
      assignOwn = (el: HTMLElement): void => {
        el.dataset.labeler = el.dataset.friendlyname || "this";
        el.setAttribute(`aria-labelledby`, el.dataset.labeler);
        el.ariaLabel =
          el instanceof HTMLImageElement
            ? el.alt
            : DOMValidator.isCustomImage(el)
            ? el.dataset.alt || el.innerText
            : (el as HTMLElement).innerText;
      };
    let isDefaultEntry = DOMValidator.isDefaultEntry(el);
    if (isDefaultEntry) {
      IOHandler.syncLabel(el as entryElement);
      const id = el.id;
      setTimeout(() => {
        if (!el || !el.isConnected) el = document.getElementById(id) as any;
        if (!el || !(el as entryElement)?.labels) return;
        const labeler = (el as entryElement).labels![0];
        el.setAttribute(
          `aria-labelledby`,
          labeler.dataset.friendlyname || labeler.id
        );
        el.ariaLabel = labeler.innerText;
      }, 500);
    } else if (DOMValidator.isButton(el)) {
      const useClass = (): boolean => {
        let inferredLabel;
        if (
          DOMValidator.hasAnyClass(el, [
            ...uiLibraryClasses.bootstrap,
            ...uiLibraryClasses.materialUI,
            ...uiLibraryClasses.others,
          ])
        ) {
          if (el.textContent?.trim()) inferredLabel = el.textContent.trim();
        }
        el.querySelectorAll("*").forEach(child => {
          const cl = child.classList;
          if (
            cl.contains("fa-search") ||
            cl.contains("btn-search") ||
            child.textContent === "search"
          )
            inferredLabel = "Search";
          else if (
            cl.contains("fa-close") ||
            cl.contains("btn-close") ||
            child.textContent === "close"
          )
            inferredLabel = "Close";
          else if (
            cl.contains("fa-plus") ||
            cl.contains("btn-plus") ||
            child.textContent === "add"
          )
            inferredLabel = "Add";
          else if (
            cl.contains("fa-minus") ||
            cl.contains("btn-minus") ||
            child.textContent === "remove"
          )
            inferredLabel = "Remove";
        });
        if (inferredLabel) el.setAttribute("aria-label", inferredLabel);
        return inferredLabel ? true : false;
      };
      if (el.dataset.label)
        !findAndAssignLabeler(el) && !useClass() && assignOwn(el);
      else !useClass() && assignOwn(el);
      const id = el.id;
      setTimeout(() => {
        if (!el || !el.isConnected) el = document.getElementById(id) as any;
        if (!el) return;
        this.#assignControlled(el);
      }, 500);
    } else if (DOMValidator.isImage(el)) {
      const assignFig = (el: HTMLElement): boolean => {
          const fig = el.closest("figure");
          if (!fig) return false;
          const capt = el.closest("figcaption");
          el.ariaLabel = capt ? capt.innerText : fig.innerText;
          el.setAttribute(
            `aria-labelledby`,
            capt
              ? capt.dataset.friendlyname || capt.id
              : fig.dataset.friendlyname || fig.id
          );
          return true;
        },
        fig = (el as HTMLElement).closest("figure");
      if ((el as HTMLElement).dataset.labeler)
        !findAndAssignLabeler(el as HTMLElement) &&
          !assignFig(el as HTMLImageElement) &&
          assignOwn(el as HTMLElement);
      else if (fig)
        !assignFig(el as HTMLImageElement) && assignOwn(el as HTMLElement);
      else assignOwn(el as HTMLElement);
    } else if (DOMValidator.isTable(el)) {
      const capt = (el as HTMLElement).querySelector("caption");
      if (capt) {
        (el as HTMLElement).ariaLabel = capt.innerText;
        (el as HTMLElement).setAttribute(
          "aria-labelledby",
          capt.dataset.friendlyname || capt.id
        );
      }
    } else if (AccessibilityValidator.isAriaLabelable(el))
      !findAndAssignLabeler(el) && assignOwn(el as HTMLElement);
  }
  applyAriaDescription(el: Element): void {
    if (
      !(DOMValidator.isDisableable(el) || el instanceof HTMLImageElement) ||
      (el as any)[`aria-describedby`]
    )
      return;
    let isDefaultEntry = DOMValidator.isDefaultEntry(el);
    const findAndAssignDescriptor = (
        el: HTMLElement
      ): HTMLElement | voidish => {
        let descriptor;
        if (!el.dataset.descriptor) {
          const labeler = (el as any)[`aria-labelledby`] || el.dataset.labeler;
          if (isDefaultEntry && (el as entryElement).labels) {
            const label = (
              (el as entryElement).labels as NodeListOf<HTMLLabelElement>
            )[0];
            el.dataset.descriptor = label.dataset.friendlyname || label.id;
            descriptor = label;
          } else if (labeler)
            el.dataset.descriptor = labeler.dataset.friendlyname || labeler.id;
          if (!el.dataset.descriptor) return;
        }
        if (!descriptor)
          descriptor =
            el.parentElement?.querySelector(`#${el.dataset.descriptor}`) ||
            el.parentElement?.parentElement?.querySelector(
              `#${el.dataset.descriptor}`
            ) ||
            document.getElementById(el.dataset.descriptor);
        if (!descriptor) return;
        el.setAttribute(
          `aria-describedby`,
          descriptor instanceof HTMLElement
            ? descriptor.dataset.friendlyname || descriptor.id
            : descriptor.id
        );
      },
      assignOwn = (el: HTMLElement): void => {
        el.dataset.descriptor = el.dataset.friendlyname || "this";
        el.setAttribute(`aria-describedby`, el.dataset.descriptor);
      };
    if (isDefaultEntry || DOMValidator.isButton(el)) {
      el.dataset.descriptor
        ? !findAndAssignDescriptor(el) && assignOwn(el)
        : assignOwn(el);
    } else if (DOMValidator.isImage(el)) {
      const assignFig = (el: HTMLElement): boolean => {
          const fig = el.closest("figure");
          if (!fig) return false;
          const capt = el.closest("figcaption");
          el.setAttribute(
            `aria-describedby`,
            capt
              ? capt.dataset.friendlyname || capt.id
              : fig.dataset.friendlyname || fig.id
          );
          return true;
        },
        fig = (el as HTMLElement).closest("figure");
      if ((el as HTMLElement).dataset.descriptor)
        !findAndAssignDescriptor(el as HTMLElement) &&
          !assignFig(el as HTMLImageElement) &&
          assignOwn(el as HTMLElement);
      else if (fig)
        !assignFig(el as HTMLImageElement) && assignOwn(el as HTMLElement);
      else assignOwn(el as HTMLElement);
    } else if (AccessibilityValidator.isAriaDescribleable(el))
      !findAndAssignDescriptor(el) && assignOwn(el as HTMLElement);
  }
  applyRole(el: Element): void {
    if (el.role) return;
    const isGeneric = DOMValidator.isGeneric(el),
      lowTag = el.tagName.toLowerCase(),
      isSectGeneric = isGeneric || lowTag === "section",
      cl = el.classList,
      assignListbox = (list: HTMLElement): void => {
        if (list.classList.contains("listbox") && list.role !== "listbox")
          setRole(list, "listbox");
        [...list.querySelectorAll("*")].forEach(c => {
          if (
            !(c instanceof HTMLOptionElement) &&
            !c.classList.contains("option") &&
            ![...c.querySelectorAll("*")].length &&
            (c instanceof HTMLLIElement || DOMValidator.isGeneric(el)) &&
            c.innerHTML
          )
            c.classList.add("option");
        });
      };
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
          el.setAttribute("aria-live", "assertive");
        }
      }
    } else if (
      el instanceof HTMLInputElement &&
      el.type !== "search" &&
      (cl.contains("search") || cl.contains("searchbox"))
    ) {
    } else if (el instanceof HTMLElement && el.contentEditable === "true") {
      if (!(el instanceof HTMLInputElement)) {
        if (!DOMValidator.isDefaultEntry(el)) {
          if (cl.contains("textbox") && !cl.contains("combobox")) {
            setRole(el, "textbox");
          } else if (cl.contains("combobox") || el.role === "combobox") {
            if (
              (cl.contains("combobox") ||
                ([...el.children].some(
                  c => c.role === "listbox" || c instanceof HTMLUListElement
                ) &&
                  [...el.children].some(
                    c =>
                      c.role === "textbox" ||
                      DOMValidator.isDefaultWritableInput(el)
                  ))) &&
              el.role !== "combobox"
            )
              setRole(el, "combobox");
            el.querySelectorAll('[class*="group"]').forEach(g =>
              g.setAttribute("role", "group")
            );
            el.ariaExpanded = el.autofocus ? "true" : "false";
            const owned = el.parentElement?.querySelector(
              `#${(el as any)[`ariaOwns`]}`
            );
            owned instanceof HTMLElement && assignListbox(owned);
          }
          if (
            (cl.contains("search") && DOMValidator.isEntry(el)) ||
            cl.contains("searchbox")
          )
            setRole(el, "searchbox");
        }
      }
    } else if (
      (DOMValidator.isPressable(el) || DOMValidator.isCheckable(el)) &&
      (cl.contains("toggle") || cl.contains("switch"))
    ) {
      this.#assignControlled(el);
      if (
        (el.ariaChecked === "true" || el.ariaChecked === "false") &&
        !(el as any)[`ariaControls`] &&
        !(el as any)[`ariaOwns`]
      )
        setRole(el, "switch");
    } else if (isSectGeneric || el instanceof HTMLFieldSetElement) {
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
      AccessibilityValidator.canBeListbox(el) &&
      (cl.contains("listbox") || el.role === "listbox")
    ) {
      if (cl.contains("listbox") && el.role !== "listbox")
        setRole(el, "listbox");
      [...el.querySelectorAll("*")].forEach(c => {
        if (
          !c.classList.contains("option") &&
          ![...c.querySelectorAll("*")].length &&
          c instanceof Element &&
          c.innerHTML
        )
          c.classList.add("option");
      });
    } else if (
      isSectGeneric ||
      lowTag === "nav" ||
      lowTag === "aside" ||
      lowTag === "dialog"
    ) {
      const tip = el.querySelector('[class*="tip"]');
      if (cl.contains("toolbar")) setRole(el, "toolbar");
      else if (
        cl.contains("tree") ||
        cl.contains("graph") ||
        cl.contains("directory") ||
        cl.contains("directories")
      ) {
        setRole(el, "tree");
        [...el.children].forEach(
          c => !c.classList.contains("branch") && c.classList.add("branch")
        );
        el.querySelectorAll('[class*="branch"]').forEach(branch =>
          branch.setAttribute("role", "treeitem")
        );
        [...el.querySelectorAll("*")].forEach(c => {
          const els = [...c.querySelectorAll("*")];
          !c.classList.contains("branch") &&
            !c.classList.contains("group") &&
            els.length &&
            !els.some(cc => cc.classList.contains("branch")) &&
            c.classList.add("group");
        });
        el.querySelectorAll('[class*="group"]').forEach(g =>
          g.setAttribute("role", "group")
        );
      } else if (
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
      else if (cl.contains("feed")) {
        setRole(el, "feed");
        el.ariaLive = "polite";
      } else if (cl.contains("log") || cl.contains("chat")) {
        setRole(el, "log");
        el.setAttribute("aria-relevant", "additions");
        [...el.querySelectorAll("*")]
          .filter(
            el =>
              DOMValidator.isDefaultWritableInput(el) || el.role === "textbox"
          )
          .forEach(tb => {
            if (!tb.ariaLabel)
              tb.setAttribute(
                "aria-label",
                /pt\-/g.test(navigator.language) ? "Escreva aqui" : "Type here"
              );
            !tb.classList.contains("single") &&
              tb.setAttribute("aria-multiline", "true");
          });
      }
      if (isGeneric) {
        if (cl.contains("cell") || cl.contains("td") || cl.contains("th"))
          setRole(el, "cell");
        else if (cl.contains("menu")) {
          [...el.querySelectorAll("*")].forEach(c => {
            if (
              c.classList.contains("menuitemcheckbox") ||
              c.role === "checkbox" ||
              (c instanceof HTMLInputElement && c.type === "checkbox")
            ) {
              c.role = "menuitemcheckbox";
              if (!(c instanceof HTMLInputElement) && !c.ariaChecked)
                c.ariaChecked =
                  c instanceof HTMLElement && c.dataset.checked
                    ? c.dataset.checked || "false"
                    : "false";
            } else if (
              c.classList.contains("menuitemradio") ||
              c.role === "radio" ||
              (c instanceof HTMLInputElement && c.type === "radio")
            ) {
              c.role = "menuitemradio";
              if (!(c instanceof HTMLInputElement) && !c.ariaChecked)
                c.ariaChecked =
                  c instanceof HTMLElement && c.dataset.checked
                    ? c.dataset.checked || "false"
                    : "false";
            } else if (
              !c.querySelectorAll("*").length &&
              c instanceof Element &&
              c.innerHTML
            )
              c.role = "menuitem";
          });
        } else if (cl.contains("menuitemcheckbox") && cl.contains("checkbox"))
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
            "list",
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
            "tablist",
            "table",
            "timer",
          ].forEach(r => cl.contains(r) && setRole(el, r));
        }
      }
    }
  }
  #assignControlled = (e: Element): void => {
    const controlledId = (e as any)[`ariaControls`];
    if (controlledId) {
      const controlled = document.getElementById(controlledId);
      if (!controlled) return;
      if (controlled.role === "tabpanel") setRole(e, "tab");
      else if (
        ["menu", "listbox", "tree", "grid", "dialog"].some(
          r => r === controlled.role
        )
      ) {
        e.ariaHasPopup = controlled.role;
      }
    }
  };
  get elements(): Array<Element> {
    return this.#elements;
  }
}
