import LoggingProcessor from "../../../../lib/client/processors/LoggingProcessor";
import DOMValidator from "../../../../lib/client/validators/DOMValidator";
jest.mock("../path/to/DOMValidator", () => ({
  __esModule: true,
  default: {
    isDefaultList: jest.fn(),
  },
}));
describe("LoggingProcessor", () => {
  describe("evaluateElementPrototype()", () => {
    it("returns 0 if element is HTMLFormElement or HTMLFieldSetElement", () => {
      const form = document.createElement("form");
      expect(LoggingProcessor.evaluateElementPrototype(form)).toBe(0);
      const fieldset = document.createElement("fieldset");
      expect(LoggingProcessor.evaluateElementPrototype(fieldset)).toBe(0);
    });
    it("returns 1 if element is HTMLSelectElement", () => {
      const sel = document.createElement("select");
      expect(LoggingProcessor.evaluateElementPrototype(sel)).toBe(1);
    });
    it("returns 2 if element is an input|textarea|button", () => {
      const input = document.createElement("input");
      expect(LoggingProcessor.evaluateElementPrototype(input)).toBe(2);
      const txt = document.createElement("textarea");
      expect(LoggingProcessor.evaluateElementPrototype(txt)).toBe(2);
      const btn = document.createElement("button");
      expect(LoggingProcessor.evaluateElementPrototype(btn)).toBe(2);
    });
    it("returns 3 if DOMValidator.isDefaultList(element) is true", () => {
      (DOMValidator.isDefaultList as unknown as jest.Mock).mockReturnValue(
        true
      );
      const ul = document.createElement("ul");
      expect(LoggingProcessor.evaluateElementPrototype(ul)).toBe(3);
    });
    it("returns 4 if element is HTMLDListElement", () => {
      const dl = document.createElement("dl");
      expect(LoggingProcessor.evaluateElementPrototype(dl)).toBe(4);
    });
    it("returns 5 if element is HTMLOptGroupElement", () => {
      const optgroup = document.createElement("optgroup");
      expect(LoggingProcessor.evaluateElementPrototype(optgroup)).toBe(5);
    });
    it("returns -1 if element is an Element but not matched by the above", () => {
      (DOMValidator.isDefaultList as unknown as jest.Mock).mockReturnValue(
        false
      );
      const div = document.createElement("div");
      expect(LoggingProcessor.evaluateElementPrototype(div)).toBe(-1);
    });
    it("returns NaN if not an Element", () => {
      const notEl = {} as any;
      expect(LoggingProcessor.evaluateElementPrototype(notEl)).toBeNaN();
    });
  });
});
