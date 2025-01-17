import { Processor } from "@/lib/definitions/foundations";
import DOMValidator from "../validators/DOMValidator";
import { entryElement } from "@/lib/definitions/client/helpers";
import MathHandler from "../handlers/MathHandler";
import StyleHandler from "../handlers/StyleHandler";
import DOMHandler from "../handlers/DOMHandler";
import { toast } from "react-hot-toast";
import { flags } from "../vars";
export default class SubmissionProcessor implements Processor<HTMLElement> {
  private static _instance: SubmissionProcessor;
  constructor() {
    if (!SubmissionProcessor._instance) SubmissionProcessor._instance = this;
  }
  public construct(): SubmissionProcessor {
    return SubmissionProcessor._instance
      ? SubmissionProcessor._instance
      : new SubmissionProcessor();
  }
  public process(el: HTMLElement): number {
    if (DOMValidator.isDefaultEntry(el)) {
      const res = this.#evaluateDefaulEntry(el);
      if (typeof res !== "boolean") return -1;
      else return res ? 1 : 0;
    } else {
      const res = this.#evaluateCustomEntry(el);
      if (typeof res !== "boolean") return -1;
      else return res ? 1 : 0;
    }
  }
  #evaluateDefaulEntry(el: entryElement): boolean | void {
    if (el instanceof HTMLInputElement) {
      const res = this.#evaluateDefaultInput(el);
      if (typeof res !== "boolean") return;
      else return res;
    } else if (el instanceof HTMLSelectElement) return this.#evaluateSelect(el);
    else if (el instanceof HTMLTextAreaElement)
      return this.#evaluateTextArea(el);
    else return;
  }
  #evaluateDefaultInput(el: HTMLInputElement): boolean | void {
    if (el.type === "checkbox" || el.type === "radio")
      return this.#evaluateCheckable(el);
    else if (DOMValidator.isDefaultWritableInput(el))
      return DOMHandler.verifyValidity(el);
    else if ((el as HTMLInputElement).type === "color") {
      const max = (el as HTMLInputElement).dataset.max,
        min = (el as HTMLInputElement).dataset.min,
        id = DOMHandler.getIdentifier(el),
        handleInvalidity = (el: HTMLElement): void => {
          el.dataset.invalid = "true";
          el.setAttribute("aria-invalid", "true");
          StyleHandler.pulseColor(el);
          setTimeout(() => {
            if (!id) return;
            const el = document.getElementById(id);
            if (!el) return;
            el.removeAttribute("dataset-invalid");
            el.removeAttribute("aria-invalid");
          }, 4000);
        };
      if (max) {
        const decMax = MathHandler.hexToDecimal(max),
          decV = MathHandler.hexToDecimal((el as HTMLInputElement).value);
        if (!Number.isFinite(decMax)) return true;
        if (!Number.isFinite(decV) || decV > decMax) {
          (el as HTMLInputElement).required && handleInvalidity(el);
          return false;
        }
      }
      if (min) {
        const decMin = MathHandler.hexToDecimal(min),
          decV = MathHandler.hexToDecimal((el as HTMLInputElement).value);
        if (!Number.isFinite(decMin)) return true;
        if (!Number.isFinite(decV) || decV < decMin) {
          (el as HTMLInputElement).required && handleInvalidity(el);
          return false;
        }
      }
      return true;
    } else if ((el as HTMLInputElement).type === "file") {
      const res = this.#evaluateFileInput(el);
      if (typeof res !== "boolean") return;
      else return res;
    }
    return;
  }
  #evaluateFileInput(el: HTMLInputElement): boolean | void {
    const { dataset: ds } = el;
    const friendlyname =
      el.dataset.friendlyname ||
      el.labels?.[0]?.innerText ||
      el.name ||
      el.id ||
      el.tagName;
    if (el.type !== "file") return;
    if (
      ds.minfiles &&
      (!el.files ||
        (el.files &&
          el.files.length < MathHandler.parseNotNaN(ds.minfiles, 1, "int")))
    ) {
      toast.error(
        flags.pt
          ? `Elemento de upload de arquivos ${friendlyname} recebeu menos arquivos do que esperado`
          : `Element for uploading files ${friendlyname} received less files than expected`
      );
    }
    if (ds.maxfiles) {
      if (!el.files) return;
      if (el.files.length > MathHandler.parseNotNaN(ds.maxfiles, 1, "int"))
        return false;
    }
    if (el.files) {
      for (let i = 0; i < el.files.length; i++) {
        const f = el.files[i];
        if (ds.maxsize) {
          const maxSize = MathHandler.parseNotNaN(ds.maxsize, 1048576, "int"); // default 1MB
          if (f.size > maxSize) {
            toast.error(
              flags.pt
                ? `Arquivo de índice ${i} para ${friendlyname} maior do que o aceito`
                : `File of index ${i} for ${friendlyname} larger than what is accepted`
            );
            return false;
          }
        }
        if (ds.minsize) {
          const minSize = MathHandler.parseNotNaN(ds.minsize, 1, "int");
          if (f.size < minSize) {
            toast.error(
              flags.pt
                ? `Arquivo de índice ${i} para ${friendlyname} menor do que o aceito`
                : `File of index ${i} for ${friendlyname} smaller than what is accepted`
            );
            return false;
          }
        }
        if (ds.accept) {
          const exts = ds.accept.split(",").map(s => s.trim().toLowerCase()),
            mime = f.type.toLowerCase();
          if (
            !exts.some(
              ext => `.${f.name.split(".").pop()?.toLowerCase()}` === ext
            ) ||
            exts.some(ext => mime === ext)
          )
            return false;
        }
      }
    }
    return DOMHandler.verifyValidity(el);
  }
  #evaluateCheckable(el: HTMLInputElement): boolean | void {
    if (el.type == "checkbox") return el.checked;
    else if (el.type === "radio") {
      //TODO
      //handle radiogroup
    } else return;
  }
  #evaluateSelect(el: HTMLSelectElement): boolean {
    if (el.multiple) {
      const { dataset: ds } = el,
        selected = [...el.options].filter(e => e.selected);
      if (
        ds.minoptions &&
        MathHandler.parseNotNaN(ds.minoptions, 0, "int") > selected.length
      )
        return false;
      if (
        ds.maxoptions &&
        MathHandler.parseNotNaN(ds.maxoptions, el.options.length - 1, "int") <
          selected.length
      )
        return false;
    }
    if (el.dataset.notaccepted) {
      const res = el.dataset.notaccepted
        .split(",")
        .map(v => v.trim())
        .some(v => v === el.value);
      if (!res) StyleHandler.pulseColor(el);
      return res;
    }
    return true;
  }
  #evaluateTextArea(el: HTMLTextAreaElement): boolean {
    return DOMHandler.verifyValidity(el);
  }
  #evaluateCustomEntry(el: HTMLElement): boolean {
    const { dataset } = el,
      value = DOMHandler.extractValue(el);
    if (
      dataset.minlength &&
      value.length < MathHandler.parseNotNaN(dataset.minlength, 0, "int")
    )
      return false;
    if (
      dataset.maxlength &&
      value.length > MathHandler.parseNotNaN(dataset.maxlength, 0, "int")
    )
      return false;
    if (
      dataset.min &&
      MathHandler.parseNotNaN(value, 0, "float") <
        MathHandler.parseNotNaN(dataset.min, 0, "float")
    )
      return false;
    if (
      dataset.max &&
      MathHandler.parseNotNaN(value, 0, "float") >
        MathHandler.parseNotNaN(dataset.max, 0, "float")
    )
      return false;
    if (dataset.pattern && !new RegExp(dataset.pattern).test(value))
      return false;
    if (dataset.checked && (!value || value === "false")) return false;
    if (el.dataset.notaccepted)
      return el.dataset.notaccepted
        .split(",")
        .map(v => v.trim())
        .some(v => v === value);
    return true;
  }
}
