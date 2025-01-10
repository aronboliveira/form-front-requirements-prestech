/**
 * @jest-environment jsdom
 */
import IOHandler from "../../../../lib/client/handlers/IOHandler";
describe("IOHandler", () => {
  describe("adjustTelCountryCode", () => {
    it("returns empty string if provided empty string", () =>
      expect(IOHandler.adjustTelCountryCode("")).toBe(""));
    it("trims code length to 4", () =>
      expect(IOHandler.adjustTelCountryCode("+551234")).toBe("+5512"));
  });
  describe("adjustTelDDD", () => {
    it("returns empty if input is empty", () =>
      expect(IOHandler.adjustTelDDD("")).toBe(""));
    it("limits DDD length to 2", () =>
      expect(IOHandler.adjustTelDDD("1234")).toBe("12"));
    it("applies 'increase' logic", () =>
      expect(IOHandler.adjustTelDDD("20", true)).toBe("21"));
    it("applies 'decrease' logic when increase=false", () =>
      expect(IOHandler.adjustTelDDD("23", false)).toBe("22"));
  });
  describe("applyNumRules", () => {
    it("removes non-digits", () =>
      expect(IOHandler.applyNumRules("12a3", 3, 999, "int")).toBe("123"));
    it("limits length according to maxLength", () =>
      expect(IOHandler.applyNumRules("12345", 3, 999, "int")).toBe("123"));
    it("does not exceed max numeric value", () =>
      expect(IOHandler.applyNumRules("201", 5, 200, "int")).toBe("200"));
  });
  describe("applyEmailExtension", () => {
    it("returns '@.' if empty string given", () =>
      expect(IOHandler.applyEmailExtension("")).toBe("@."));
    it("adds '.' if '@' is alone", () =>
      expect(IOHandler.applyEmailExtension("@")).toBe("@."));
    it("trims input value", () =>
      expect(IOHandler.applyEmailExtension("  test@example  ")).toBe(
        "test@example"
      ));
  });
  describe("applyTelExtension", () => {
    it("returns empty if no telValue provided", () =>
      expect(IOHandler.applyTelExtension("", "local")).toBe(""));
    it("handles 'local' format insert dash", () =>
      expect(IOHandler.applyTelExtension("99999", "local")).toBe("99999-"));
    it("handles 'national' format insert dash/spaces", () =>
      expect(IOHandler.applyTelExtension("2199999", "national")).toBe(
        "21 99999-"
      ));
    it("handles 'complete' format with +55 area code logic", () =>
      expect(IOHandler.applyTelExtension("+55 21 99999", "complete")).toBe(
        "+55 21 99999-"
      ));
  });
  describe("applyUpperCase", () => {
    it("uppercase entire string if no limit is provided", () =>
      expect(IOHandler.applyUpperCase("hello")).toBe("HELLO"));
    it("only uppercase if string length equals `limit`", () => {
      expect(IOHandler.applyUpperCase("abc", 3)).toBe("ABC");
      expect(IOHandler.applyUpperCase("ab", 3)).toBe("ab");
    });
  });
  describe("syncLabel", () => {
    it("does nothing if no labels or no element", () => {
      const el = document.createElement("input");
      IOHandler.syncLabel(el);
      expect(el.labels?.length).toBe(0);
    });
    it("sets label htmlFor matching input.id", () => {
      const el = document.createElement("input");
      el.id = "my-input";
      const label = document.createElement("label");
      label.htmlFor = "my-input";
      document.body.appendChild(el);
      document.body.appendChild(label);
      IOHandler.syncLabel(el);
      expect(label.htmlFor).toBe("my-input");
    });
  });
  describe("moveCursorFocus", () => {
    it("focuses on relEl if el has reached limit", () => {
      const el = document.createElement("input");
      el.value = "AB";
      el.maxLength = 2;
      const relEl = document.createElement("input");
      document.body.append(el, relEl);
      relEl.focus = jest.fn();
      IOHandler.moveCursorFocus(el, relEl);
      expect(relEl.focus).toHaveBeenCalled();
    });
  });
  describe("handleRangeSlide", () => {
    beforeAll(jest.useFakeTimers);
    afterAll(jest.useRealTimers);
    it("does nothing element is not an input of type range", () => {
      const input = document.createElement("input");
      input.type = "text";
      IOHandler.handleRangeSlide(input);
      expect(input.dataset.sliding).toBeUndefined();
    });
    it("increments the value until it is multiple of 'modulator'", () => {
      const input = document.createElement("input");
      input.type = "range";
      input.id = "rangeTest";
      input.value = "42";
      document.body.appendChild(input);
      IOHandler.handleRangeSlide(input, 10);
      jest.advanceTimersByTime(100);
      expect(parseInt(input.value, 10)).toBe(50);
      expect(input.dataset.sliding).toBe("false");
      document.body.removeChild(input);
    });
    it("after 2 seconds, it snaps the value to the nearest multiple if still not a perfect multiple", () => {
      const input = document.createElement("input");
      input.type = "range";
      input.id = "rangeTest2";
      input.value = "21";
      document.body.appendChild(input);
      IOHandler.handleRangeSlide(input);
      jest.advanceTimersByTime(50);
      jest.advanceTimersByTime(2000);
      expect(parseInt(input.value, 10)).toBe(20);
      expect(input.dataset.sliding).toBe("false");
      document.body.removeChild(input);
    });
  });
});
