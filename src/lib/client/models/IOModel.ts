import { limits } from "../vars";
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
        if (inp instanceof HTMLInputElement) {
          if (inp.type === "tel" || inp.classList.contains(".tel")) {
            inp.minLength = 8;
            if (inp.classList.contains("localTel")) {
              inp.maxLength = 11;
              inp.autocomplete = "tel-local";
              inp.pattern = "/^\\d{4,5}-?\\d{4}$/";
            } else if (inp.classList.contains("nationalTel")) {
              inp.maxLength = 15;
              inp.autocomplete = "tel-national";
              inp.pattern = "/^\\d{2}\\s?\\d{4,5}-?\\d{4}$/";
            } else {
              inp.maxLength = 20;
              inp.autocomplete = "tel";
              inp.pattern = "/^\\+?\\d{1,3}\\s?\\d{2}\\s?\\d{4,5}-?\\d{4}$/";
            }
          } else if (inp.classList.contains("name")) {
            inp.minLength = 3;
            if (
              inp.classList.contains("firstName") ||
              inp.autocomplete === "given-name"
            )
              inp.maxLength = limits.tiny.MAX_UTF_16_SIGNED_SURROGATE;
            else inp.maxLength = limits.small.MAX_UTF_16_SIGNED_SURROGATE;
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
            inp.maxLength = limits.small.MAX_UTF_16_SIGNED_SURROGATE;
          }
        } else {
          inp.maxLength = limits.medium.MAX_UTF_16_SIGNED_SURROGATE;
        }
      });
    }
  }
}
