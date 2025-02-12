import { nlTxtEl } from "@/lib/definitions/client/helpers";
import StringHelper from "@/lib/helpers/StringHelper";
export function shouldRemainLowercase(w: string): boolean {
  const lw = w.toLowerCase().trim();
  return /^d[aeiou']s\s*$/.test(lw) ||
    (lw.startsWith("d") && w.length < 4)
    ? true
    : false;
}
export function autoCapitalizeInputs(
  textEl: nlTxtEl,
  isAutocorrectOn: boolean = true
): string {
  try {
    if (!textEl) return "";
    const text = textEl.value;
    if (!isAutocorrectOn) return text;
    return text
      .replace(
        /[^a-zA-ZÁÀÂÄÃÉÈÊËÍÌÎÏÓÒÔÖÕÚÙÛÜÇÑáàâäãéèêëíìîïóòôöõúùûüçñ\u0600-\u06FF\u4E00-\u9FFF\u3040-\u30FF\uAC00-\uD7AF\u0400-\u04FF\s\'-]/g,
        ""
      )
      .replace(/\s{2,}/g, " ")
      .replace(/\-{2,}/g, "-")
      .replace(/\'{2,}/g, "'")
      .split(/\s+/)
      .map((w, i) => {
        if (!w) return w;
        const firstChar = w.charAt(0).toUpperCase();
        if (i === 0) {
          return w.length === 1
            ? firstChar
            : `${firstChar}${w.slice(1).toLowerCase()}`;
        }
        if (shouldRemainLowercase(w))
          return w.toLowerCase();
        return `${firstChar}${w.slice(1).toLowerCase()}`;
      })
      .join(" ");
  } catch (e) {
    return StringHelper.capitalize(textEl?.value || "");
  }
}
