import DOMHandler from "../../../../lib/client/handlers/DOMHandler";
import StyleHandler from "../../../../lib/client/handlers/StyleHandler";
import DOMValidator from "../../../../lib/client/validators/DOMValidator";
import { flags } from "../../../../lib/client/vars";
describe("DOMHandler", () => {
  describe("isClickOutside", () => {
    let dlgInBtn: HTMLElement;
    beforeEach(() => {
      document.body.innerHTML = `
        <div id="testDialog" style="position: absolute; left: 50px; top: 50px; width: 100px; height: 100px;">
          Dialog
        </div>
      `;
      dlgInBtn = document.getElementById("testDialog")!;
      jest.spyOn(dlgInBtn, "getBoundingClientRect").mockReturnValue({
        left: 50,
        top: 50,
        right: 150,
        bottom: 150,
        width: 100,
        height: 100,
        x: 50,
        y: 50,
        toJSON: () => undefined,
      });
    });
    afterEach(jest.restoreAllMocks);
    it("should return [false, false, false, false] if click is inside the element", () =>
      expect(
        DOMHandler.isClickOutside(
          {
            clientX: 70,
            clientY: 80,
          } as MouseEvent,
          dlgInBtn
        )
      ).toEqual([false, false, false, false]));
    it("should return [true, false, false, false] if click is left of the element", () =>
      expect(
        DOMHandler.isClickOutside(
          {
            clientX: 40,
            clientY: 80,
          } as MouseEvent,
          dlgInBtn
        )
      ).toEqual([true, false, false, false]));
    it("should return [false, true, false, false] if click is right of the element", () =>
      expect(
        DOMHandler.isClickOutside(
          {
            clientX: 160,
            clientY: 80,
          } as MouseEvent,
          dlgInBtn
        )
      ).toEqual([false, true, false, false]));
    it("should return [false, false, true, false] if click is above the element", () =>
      expect(
        DOMHandler.isClickOutside(
          {
            clientX: 70,
            clientY: 40,
          } as MouseEvent,
          dlgInBtn
        )
      ).toEqual([false, false, true, false]));
    it("should return [false, false, false, true] if click is below the element", () =>
      expect(
        DOMHandler.isClickOutside(
          {
            clientX: 70,
            clientY: 160,
          } as MouseEvent,
          dlgInBtn
        )
      ).toEqual([false, false, false, true]));
    it("should catch error and return [false, false, false, false] if dialog is removed", () =>
      expect(
        DOMHandler.isClickOutside(
          {
            clientX: 70,
            clientY: 70,
          } as MouseEvent,
          dlgInBtn
        )
      ).toEqual([false, false, false, false]));
  });
  describe("queryByUniqueName", () => {
    beforeEach(
      () =>
        (document.body.innerHTML = `
        <input name="unique" id="uniqueId" />
        <input name="duplicate" id="duplicate1" />
        <input name="duplicate" id="duplicate2" />
      `)
    );
    it("should return the unique element if the id is valid", () =>
      expect(DOMHandler.queryByUniqueName("uniqueId")).toBeInstanceOf(
        HTMLInputElement
      ));
    it("should return the single element if there is exactly one with that name", () => {
      const el = DOMHandler.queryByUniqueName("unique");
      expect(el).toBeInstanceOf(HTMLInputElement);
      expect(el?.id).toBe("uniqueId");
    });
    it("should return null if there are multiple elements with that name", () =>
      expect(DOMHandler.queryByUniqueName("duplicate")).toBeNull());
    it("should return null if there are no elements with that name", () =>
      expect(DOMHandler.queryByUniqueName("notFound")).toBeNull());
  });
  describe("getIdentifier", () => {
    it("should return el.id if present", () => {
      const el = document.createElement("div");
      el.id = "myId";
      const result = DOMHandler.getIdentifier(el);
      expect(result).toBe("myId");
    });

    it("should return el.name if no id but a name is present", () => {
      const input = document.createElement("input");
      (input as any).name = "myInput"; // TypeScript might complain, so cast to any
      const result = DOMHandler.getIdentifier(input);
      expect(result).toBe("myInput");
    });

    it("should return null if neither id nor name is present", () => {
      const el = document.createElement("div");
      const result = DOMHandler.getIdentifier(el);
      expect(result).toBeNull();
    });
  });
  describe("extractValue", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it("returns checked state if isDefaultEntry + isDefaultCheckable", () => {
      (DOMValidator.isDefaultEntry as unknown as jest.Mock).mockReturnValue(
        true
      );
      (DOMValidator.isDefaultCheckable as unknown as jest.Mock).mockReturnValue(
        true
      );

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = true;

      const result = DOMHandler.extractValue(checkbox);
      expect(result).toBe("true");
    });

    it("returns element.value if isDefaultEntry + not checkable", () => {
      (DOMValidator.isDefaultEntry as unknown as jest.Mock).mockReturnValue(
        true
      );
      (DOMValidator.isDefaultCheckable as unknown as jest.Mock).mockReturnValue(
        false
      );

      const input = document.createElement("input");
      input.value = "hello";
      const result = DOMHandler.extractValue(input);
      expect(result).toBe("hello");
    });

    it("returns dataset.checked if isCustomEntry + isCustomCheckable + el.dataset.checked", () => {
      (DOMValidator.isDefaultEntry as unknown as jest.Mock).mockReturnValue(
        false
      );
      (DOMValidator.isCustomEntry as unknown as jest.Mock).mockReturnValue(
        true
      );
      (DOMValidator.isCustomCheckable as unknown as jest.Mock).mockReturnValue(
        true
      );

      const div = document.createElement("div");
      div.dataset.checked = "false";

      const result = DOMHandler.extractValue(div);
      expect(result).toBe("false");
    });

    it("returns dataset.value if isCustomEntry + not customCheckable + dataset.value", () => {
      (DOMValidator.isDefaultEntry as unknown as jest.Mock).mockReturnValue(
        false
      );
      (DOMValidator.isCustomEntry as unknown as jest.Mock).mockReturnValue(
        true
      );
      (DOMValidator.isCustomCheckable as unknown as jest.Mock).mockReturnValue(
        false
      );

      const div = document.createElement("div");
      div.dataset.value = "some data";
      const result = DOMHandler.extractValue(div);
      expect(result).toBe("some data");
    });

    it("returns innerText if isCustomEntry + no dataset.value", () => {
      (DOMValidator.isDefaultEntry as unknown as jest.Mock).mockReturnValue(
        false
      );
      (DOMValidator.isCustomEntry as unknown as jest.Mock).mockReturnValue(
        true
      );

      const div = document.createElement("div");
      div.innerText = "my text";
      const result = DOMHandler.extractValue(div);
      expect(result).toBe("my text");
    });

    it("returns empty string if no recognized scenario", () => {
      (DOMValidator.isDefaultEntry as unknown as jest.Mock).mockReturnValue(
        false
      );
      (DOMValidator.isCustomEntry as unknown as jest.Mock).mockReturnValue(
        false
      );

      const span = document.createElement("span");
      expect(DOMHandler.extractValue(span)).toBe("");
    });
  });
  describe("isPt", () => {
    beforeEach(() => {
      flags.pt = false;
      Object.defineProperty(navigator, "language", {
        value: "en-US",
        writable: true,
      });
    });
    it("returns true if navigator.language starts with 'pt-'", () => {
      Object.defineProperty(navigator, "language", {
        value: "pt-BR",
        writable: true,
      });
      const result = DOMHandler.isPt();
      expect(result).toBe(true);
      expect(flags.pt).toBe(true);
    });
    it("returns false otherwise", () => {
      const result = DOMHandler.isPt();
      expect(result).toBe(false);
      expect(flags.pt).toBe(false);
    });
  });
  describe("verifyValidity", () => {
    let inputEl: HTMLInputElement;
    beforeEach(() => {
      jest.clearAllMocks();
      inputEl = document.createElement("input");
      inputEl.type = "text";
      inputEl.value = "some value";
      inputEl.checkValidity = jest.fn().mockReturnValue(true);
      inputEl.reportValidity = jest.fn();
    });
    it("returns true if element is valid", () => {
      const result = DOMHandler.verifyValidity(inputEl as any);
      expect(result).toBe(true);
      expect(inputEl.reportValidity).not.toHaveBeenCalled();
      expect(StyleHandler.pulseColor).not.toHaveBeenCalled();
      expect(StyleHandler.switchPlaceholder).not.toHaveBeenCalled();
    });
    it("returns false if element is invalid", () => {
      (inputEl.checkValidity as jest.Mock).mockReturnValue(false);
      const result = DOMHandler.verifyValidity(inputEl as any);
      expect(result).toBe(false);
      expect(inputEl.reportValidity).toHaveBeenCalledTimes(1);
      expect(StyleHandler.pulseColor).toHaveBeenCalledWith(inputEl);
      (
        DOMValidator.isDefaultWritableInput as unknown as jest.Mock
      ).mockReturnValue(true);
    });
    it("calls switchPlaceholder if invalid and defaultWritableInput or textarea", () => {
      (inputEl.checkValidity as unknown as jest.Mock).mockReturnValue(false);
      (
        DOMValidator.isDefaultWritableInput as unknown as jest.Mock
      ).mockReturnValue(true);
      const result = DOMHandler.verifyValidity(inputEl as any);
      expect(result).toBe(false);
      expect(StyleHandler.switchPlaceholder).toHaveBeenCalledWith(
        inputEl,
        "Invalid input"
      );
    });
    it("does not call switchPlaceholder if invalid but not a writable input/textarea", () => {
      (inputEl.checkValidity as unknown as jest.Mock).mockReturnValue(false);
      (
        DOMValidator.isDefaultWritableInput as unknown as jest.Mock
      ).mockReturnValue(false);
      DOMHandler.verifyValidity(inputEl as any);
      expect(StyleHandler.switchPlaceholder).not.toHaveBeenCalled();
    });
  });
});
