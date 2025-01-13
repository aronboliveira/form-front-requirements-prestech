import { JSDOM } from "jsdom";
import AccessibilityValidator from "../../../../lib/client/validators/AccessibilityValidator";
describe("AccessibilityValidator", () => {
  let dom: JSDOM;
  let document: Document;
  beforeEach(() => {
    dom = new JSDOM(`
      <html>
        <body>
          <div id="generic"></div>
          <img id="image" src="test.png" />
          <input id="checkbox" type="checkbox" />
          <table id="table"></table>
        </body>
      </html>
    `);
    document = dom.window.document;
  });
  describe("isAriaLabelable", () => {
    it("should return true for default disableable or anchor/image/iframe/table, etc.", () => {
      expect(
        AccessibilityValidator.isAriaLabelable(
          document.getElementById("generic")!
        )
      ).toBe(true);
      expect(
        AccessibilityValidator.isAriaLabelable(
          document.getElementById("image")!
        )
      ).toBe(true);
      expect(
        AccessibilityValidator.isAriaLabelable(
          document.getElementById("table")!
        )
      ).toBe(true);
    });
    it("should return false if the element does not match known labelable criteria", () =>
      expect(
        AccessibilityValidator.isAriaLabelable(document.createElement("meta"))
      ).toBe(false));
  });
  describe("isAriaDescribleable", () => {
    it("should return true if the element can be described, e.g. image, list, table, etc.", () => {
      expect(
        AccessibilityValidator.isAriaDescribleable(
          document.getElementById("image")!
        )
      ).toBe(true);
      expect(
        AccessibilityValidator.isAriaDescribleable(
          document.createElement("dialog")
        )
      ).toBe(true);
    });
    it("should return false if the element does not match known describable criteria", () =>
      expect(
        AccessibilityValidator.isAriaDescribleable(
          document.createElement("script")
        )
      ).toBe(false));
  });
  describe("canBeListbox", () => {
    it("should return true for DIV, UL, ASIDE, SECTION", () => {
      expect(
        AccessibilityValidator.canBeListbox(document.createElement("div"))
      ).toBe(true);
      expect(
        AccessibilityValidator.canBeListbox(document.createElement("ul"))
      ).toBe(true);
      expect(
        AccessibilityValidator.canBeListbox(document.createElement("aside"))
      ).toBe(true);
      expect(
        AccessibilityValidator.canBeListbox(document.createElement("section"))
      ).toBe(true);
    });
    it("should return false for other tags", () => {
      expect(
        AccessibilityValidator.canBeListbox(document.createElement("span"))
      ).toBe(false);
      expect(
        AccessibilityValidator.canBeListbox(document.createElement("li"))
      ).toBe(false);
    });
  });
});
