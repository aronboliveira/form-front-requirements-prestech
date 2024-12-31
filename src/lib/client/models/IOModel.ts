import { FormControl, nlFm } from "@/lib/definitions/helpers";
import { limits } from "@/lib/vars";
export class IOModel {
  logEvent(message: string, payload: unknown): void {
    console.log(`[IOModel] ${message}`, payload);
  }
  static setConstraintPatterns(): void {
    for (const form of document.forms) {
      [
        ...form.querySelectorAll("input"),
        ...form.querySelectorAll("textarea"),
      ].forEach(inp => {
        if (
          !(
            inp instanceof HTMLInputElement ||
            inp instanceof HTMLTextAreaElement
          )
        )
          return;
        if (inp.required && inp.minLength < 1) inp.minLength = 1;
        const isMaxUndefined =
          inp.maxLength === 0 ||
          inp.maxLength === -1 ||
          inp.maxLength === Infinity;
        if (inp instanceof HTMLInputElement) {
          if (inp.type === "tel" || inp.classList.contains(".tel")) {
            const isAutoCompleteDefined = inp.autocomplete !== "",
              isPatternDefined = inp.pattern !== "";
            if (inp.classList.contains("localTel")) {
              if (isMaxUndefined) inp.maxLength = 11;
              if (!isAutoCompleteDefined) inp.autocomplete = "tel-local";
              if (!isPatternDefined) inp.pattern = "/^\\d{4,5}-?\\d{4}$/";
            } else if (inp.classList.contains("nationalTel")) {
              if (isMaxUndefined) inp.maxLength = 15;
              if (!isAutoCompleteDefined) inp.autocomplete = "tel-national";
              if (!isPatternDefined)
                inp.pattern = "/^\\d{2}\\s?\\d{4,5}-?\\d{4}$/";
            } else {
              if (isMaxUndefined) inp.maxLength = 20;
              if (!isAutoCompleteDefined) inp.autocomplete = "tel";
              if (!isPatternDefined)
                inp.pattern = "/^\\+?\\d{1,3}\\s?\\d{2}\\s?\\d{4,5}-?\\d{4}$/";
            }
          } else if (inp.classList.contains("name")) {
            const isMinDefined = inp.minLength !== 0;
            if (!isMinDefined) inp.minLength = 3;
            if (isMaxUndefined) {
              if (
                inp.classList.contains("firstName") ||
                inp.autocomplete === "given-name"
              )
                inp.maxLength = limits.tiny.MAX_UTF_16_SIGNED_SURROGATE;
              else inp.maxLength = limits.small.MAX_UTF_16_SIGNED_SURROGATE;
            }
            if (!inp.dataset.patternon || inp.dataset.patternon !== "true") {
              inp.addEventListener("input", ev => {
                const t = ev.currentTarget;
                if (
                  !(
                    t instanceof HTMLInputElement ||
                    t instanceof HTMLTextAreaElement
                  )
                )
                  return;
                if (/[0-9@#$%^&*()_+={}[\]:;"'<>,.?/\\|~`!]/.test(t.value))
                  t.dataset.invalid = "true";
                else t.dataset.invalid = "false";
              });
              inp.dataset.patternon = "true";
            }
          } else {
            if (isMaxUndefined)
              inp.maxLength = limits.small.MAX_UTF_16_SIGNED_SURROGATE;
          }
        } else {
          if (isMaxUndefined)
            inp.maxLength = limits.medium.MAX_UTF_16_SIGNED_SURROGATE;
        }
      });
    }
  }
  static setFormDataLength(form: nlFm): void {
    try {
      if (!(form instanceof HTMLFormElement))
        throw new TypeError("Could not validated form instance");
      const controls = form.elements;
      form.dataset.elements = controls.length.toString();
      form.dataset.namedElements = [...controls]
        .filter(
          el =>
            !(el instanceof HTMLLabelElement || el instanceof HTMLLegendElement)
        )
        .length.toString();
      form.dataset.listElements = [...controls]
        .filter(
          el =>
            !(
              el instanceof HTMLOptionElement ||
              el instanceof HTMLOptGroupElement ||
              el instanceof HTMLDataListElement
            )
        )
        .length.toString();
      form.dataset.inputElements = [...controls]
        .filter(
          el =>
            el instanceof HTMLInputElement ||
            el instanceof HTMLSelectElement ||
            el instanceof HTMLTextAreaElement
        )
        .length.toString();
    } catch (e) {
      console.error(
        `An error has occured setting the dataset length for the form — ${
          (e as Error).name
        }: ${(e as Error).message}`
      );
    }
  }
  static setFormControlNameSufix(el: FormControl | null): void {
    if (!el || !("name" in el)) return;
    const hasFormProp =
        el instanceof HTMLInputElement ||
        el instanceof HTMLSelectElement ||
        el instanceof HTMLTextAreaElement ||
        el instanceof HTMLButtonElement ||
        el instanceof HTMLOutputElement ||
        el instanceof HTMLFieldSetElement ||
        el instanceof HTMLObjectElement,
      isListControl =
        el instanceof HTMLOptionElement ||
        el instanceof HTMLOptGroupElement ||
        el instanceof HTMLDataListElement;
    if (
      !(hasFormProp || isListControl) ||
      (hasFormProp && !el.form) ||
      (isListControl && el instanceof HTMLElement && !el.closest("form"))
    )
      return;
    const fmName = hasFormProp
      ? el.form?.name ?? ""
      : (el as FormControl).closest("form")?.name ?? "";
    if (fmName === "") return;
    el.name += `__${fmName}`;
  }
}
