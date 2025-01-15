import DOMHandler from "../../../../lib/client/handlers/DOMHandler";
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
});
