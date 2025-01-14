export default class DOMHandler {
  static isClickOutside(
    event: MouseEvent | React.MouseEvent,
    dlgInBtn: Element
  ): boolean[] {
    try {
      if (!document.querySelector(`#${dlgInBtn.id}` || "dialog"))
        throw new Error(`Modal for outside click not in screen anymore.`);
      const rect = dlgInBtn.getBoundingClientRect();
      const { clientX, clientY } = event;
      console.log([
        clientX < rect.left,
        clientX > rect.right,
        clientY < rect.top,
        clientY > rect.bottom,
      ]);
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
}
