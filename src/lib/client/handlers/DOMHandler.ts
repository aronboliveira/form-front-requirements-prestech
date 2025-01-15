import { nlHtEl } from "@/lib/definitions/client/helpers";

export default class DOMHandler {
  static isClickOutside(
    event: MouseEvent | React.MouseEvent,
    dlgInBtn: Element
  ): boolean[] {
    try {
      if (!document.querySelector(`#${dlgInBtn.id}` || "dialog"))
        throw new Error(`Modal for outside click not in screen anymore.`);
      const rect = dlgInBtn.getBoundingClientRect(),
        { clientX, clientY } = event;
      return [
        clientX < rect.left,
        clientX > rect.right,
        clientY < rect.top,
        clientY > rect.bottom,
      ];
    } catch (e) {
      return [false, false, false, false];
    }
  }
  static queryByUniqueName(idf: string): nlHtEl {
    const names = document.getElementsByName(idf);
    if (names.length === 1) return names[0];
    else return null;
  }
}
