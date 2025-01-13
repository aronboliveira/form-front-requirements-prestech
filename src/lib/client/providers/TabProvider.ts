import { entryElement } from "@/lib/definitions/client/helpers";
import { Provider } from "@/lib/definitions/foundations";
export default class TabProvider implements Provider {
  #elements: Array<Element>;
  counter = 0;
  constructor(_elements: Array<Element>) {
    this.#elements = _elements;
  }
  public setup() {
    const sorted = [];
    for (const el of this.#elements)
      el instanceof HTMLDialogElement ? sorted.unshift(el) : sorted.push(el);
    for (const el of this.#elements) {
      if (el instanceof HTMLDialogElement) this.tabIndexDlg(el);
      else if (el instanceof HTMLFormElement) this.tabIndexForm(el);
    }
  }
  public tabIndexForm(fm: HTMLFormElement): void {
    const inps = [...fm.elements].filter(
      el =>
        el instanceof HTMLInputElement ||
        el instanceof HTMLTextAreaElement ||
        el instanceof HTMLSelectElement
    ) as Array<entryElement>;
    for (let i = 0; i < inps.length; i++) {
      const inp = inps[i];
      inp.tabIndex = this.counter;
      inp.dataset.tabindex = this.counter.toString();
      this.counter += 1;
    }
  }
  public tabIndexDlg(dlg: HTMLDialogElement): void {
    dlg
      .querySelectorAll("button")
      .forEach((btn, i) => (btn.tabIndex = this.counter + i));
  }
  public resetCounter(): void {
    this.counter = 0;
  }
  get elements(): Array<Element> {
    return this.#elements;
  }
}
