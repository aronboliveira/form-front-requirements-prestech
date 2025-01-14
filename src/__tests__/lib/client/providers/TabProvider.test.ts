/**
 * @jest-environment jsdom
 */

import TabProvider from "../../../../lib/client/providers/TabProvider";
describe("TabProvider", () => {
  let mockElements: Array<Element>;
  beforeEach(() => {
    document.body.innerHTML = `
      <form id="form1">
        <input type="text" />
        <textarea></textarea>
        <select></select>
      </form>
      <dialog id="dialog1">
        <button>Button 1</button>
        <button>Button 2</button>
      </dialog>
    `;
    mockElements = [
      document.getElementById("form1") as HTMLFormElement,
      document.getElementById("dialog1") as HTMLDialogElement,
    ];
  });
  it("should initialize with provided elements", () =>
    expect(new TabProvider(mockElements).elements).toBe(mockElements));
  it("should set tab indices for form elements", () => {
    const form = document.getElementById("form1") as HTMLFormElement;
    new TabProvider(mockElements).tabIndexForm(form);
    const inputs = form.elements;
    expect((inputs[0] as HTMLInputElement).tabIndex).toBe(0);
    expect((inputs[1] as HTMLTextAreaElement).tabIndex).toBe(1);
    expect((inputs[2] as HTMLSelectElement).tabIndex).toBe(2);
  });
  it("should set tab indices for dialog buttons", () => {
    const dialog = document.getElementById("dialog1") as HTMLDialogElement;
    const provider = new TabProvider(mockElements);
    provider.resetCounter();
    provider.tabIndexDlg(dialog);
    const buttons = dialog.querySelectorAll("button");
    expect(buttons[0].tabIndex).toBe(0);
    expect(buttons[1].tabIndex).toBe(1);
  });
  it("should call appropriate methods during setup", () => {
    const provider = new TabProvider(mockElements);
    jest.spyOn(provider, "tabIndexForm");
    jest.spyOn(provider, "tabIndexDlg");
    provider.setup();
    expect(provider.tabIndexForm).toHaveBeenCalledTimes(1);
    expect(provider.tabIndexDlg).toHaveBeenCalledTimes(1);
  });
  it("should reset counter to 0", () => {
    const provider = new TabProvider(mockElements);
    provider.counter = 5;
    provider.resetCounter();
    expect(provider.counter).toBe(0);
  });
  it("should sort elements so dialogs appear first", () => {
    new TabProvider(mockElements).setup();
    expect(
      (
        document.getElementById("dialog1") as HTMLDialogElement
      ).querySelectorAll("button")[0].tabIndex
    ).toBeLessThan(
      (
        (document.getElementById("form1") as HTMLFormElement)
          .elements[0] as HTMLInputElement
      ).tabIndex
    );
  });
});
