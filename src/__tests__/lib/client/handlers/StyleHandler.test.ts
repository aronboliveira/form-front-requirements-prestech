/**
 * @jest-environment jsdom
 */
import StyleHandler from "../../../../lib/client/handlers/StyleHandler";
import "@testing-library/jest-dom";
import { borderColors } from "../../../../lib/client/vars";
import DOMValidator from "../../../../lib/client/validators/DOMValidator";
describe("StyleHandler", () => {
  let element: HTMLElement, mockSheet: CSSStyleSheet;
  beforeEach(() => document.body.appendChild(document.createElement("div")));
  afterEach(() => document.body.removeChild(element));
  describe("toggleVisibility", () => {
    it("sets display to 'block' if condition is true", () => {
      StyleHandler.toggleVisibility(element, true, "block");
      expect(element.style.display).toBe("block");
    });
    it("leaves display as '' (or 'none') if condition is false", () => {
      StyleHandler.toggleVisibility(element, false, "block");
      expect(element.style.display).toBe("");
    });
  });
  describe("blurOnChange", () => {
    jest.useFakeTimers();
    it("transitions opacity to 0.8 then back to 1", () => {
      StyleHandler.blurOnChange(element, 0.8, 1);
      expect(element.style.transition).toMatch(/opacity 0.5s ease-in-out/);
      jest.advanceTimersByTime(50);
      expect(element.style.opacity).toBe("0.8");
      jest.advanceTimersByTime(50);
      expect(element.style.opacity).toBe("1");
    });
  });
  beforeEach(() => {
    document.head.innerHTML = `<style id="test-style"></style>`;
    mockSheet = document.styleSheets[0];
  });
  it("finds a stylesheet by identifier", () =>
    expect(StyleHandler.findStyleSheet(/test-style/)).toBe(mockSheet));
  it("returns undefined if stylesheet not found", () =>
    expect(StyleHandler.findStyleSheet(/non-existent/)).toBeUndefined());
  it("finds a CSS rule index by identifier", () => {
    mockSheet.insertRule(".test { color: red; }", 0);
    expect(StyleHandler.findCssRule(mockSheet, /color: red/)).toBe(0);
  });
  it("returns -1 if CSS rule is not found", () =>
    expect(StyleHandler.findCssRule(mockSheet, /non-existent-rule/)).toBe(-1));
  it("replaces a CSS rule with a new rule", () => {
    mockSheet.insertRule(".test { color: red; }", 0);
    expect(
      StyleHandler.replaceCssRule(mockSheet, 0, "color: blue;", false)
    ).toBe(true);
    expect(mockSheet.cssRules[0].cssText).toContain("color: blue;");
  });
  it("expands an existing CSS rule", () => {
    mockSheet.insertRule(".test { color: red; }", 0);
    expect(
      StyleHandler.replaceCssRule(mockSheet, 0, "font-size: 16px;", true)
    ).toBe(true);
    expect(mockSheet.cssRules[0].cssText).toContain("color: red;");
    expect(mockSheet.cssRules[0].cssText).toContain("font-size: 16px;");
  });
  it("does not replace a rule if index is invalid", () =>
    expect(
      StyleHandler.replaceCssRule(mockSheet, -1, "color: blue;", false)
    ).toBe(false));
  it("defines range thumb pseudo-element", () =>
    expect(StyleHandler.defineRangeThumbPseudoElement()).toMatch(
      /(::-webkit-slider-thumb|::-moz-range-thumb|::-ms-thumb)/
    ));
  it("defines range track pseudo-element", () =>
    expect(StyleHandler.defineRangeTrackPseudoElement()).toMatch(
      /(::-webkit-slider-runnable-track|::-moz-range-track|::-ms-track)/
    ));
  it("updates pseudo styles", () => {
    const styleTag = document.createElement("style");
    styleTag.id = "pseudos";
    document.body.appendChild(styleTag);
    StyleHandler.updatePseudos({
      idf: ".test",
      pseudo: "::before",
      prop: "color",
      value: "red",
    });
    expect(styleTag.textContent).toContain(".test::before { color: red; }");
  });
  it("does not update pseudos if CSS property is unsupported", () => {
    StyleHandler.updatePseudos({
      idf: ".test",
      pseudo: "::before",
      prop: "invalid-property",
      value: "red",
    });
    expect(document.getElementById("pseudos")?.textContent).not.toContain(
      "invalid-property"
    );
  });
  describe("pulseColor()", () => {
    it("does nothing if el is not HTMLElement", () => {
      StyleHandler.pulseColor(null as any);
    });
    it("pulses border if context='both' or 'border'", () => {
      const el = document.createElement("div");
      jest.useFakeTimers();
      StyleHandler.pulseColor(el, "blue", "border");
      jest.advanceTimersByTime(250);
      expect(el.style.borderColor).toBe("blue");
      jest.advanceTimersByTime(750);
      expect(el.style.borderColor).toBe("rgb(222, 226, 230)");
      jest.useRealTimers();
    });
    it("pulses font if context='both' or 'font'", () => {
      const el = document.createElement("div");
      jest.useFakeTimers();
      StyleHandler.pulseColor(el, "green", "font");
      jest.advanceTimersByTime(250);
      expect(el.style.color).toBe("green");
      jest.advanceTimersByTime(750);
      expect(el.style.color).toBe("rgb(33, 37, 41)");
      jest.useRealTimers();
    });
  });
  describe("switchPlaceholder()", () => {
    beforeEach(() => {
      StyleHandler.placeholderCounter = 0.7;
      jest.clearAllMocks();
    });
    it("updates placeholder, adds style with new color, then reverts after 3.5s", () => {
      jest.useFakeTimers();
      const input = document.createElement("input");
      input.placeholder = "old placeholder";
      input.classList.add("someClass");
      input.id = "myInput";
      StyleHandler.switchPlaceholder(input, "newPh", "#123");
      expect(input.placeholder).toBe("newPh");
      let styleNode = document.getElementById("placeholdersStyles");
      expect(styleNode).toBeInTheDocument();
      jest.advanceTimersByTime(3500);
      styleNode = document.getElementById("placeholdersStyles");
      expect(styleNode).toBeNull();
      expect(input.placeholder).toBe("old placeholder");
      jest.useRealTimers();
    });
    it("increments placeholderCounter and updates opacity on interval", () => {
      jest.useFakeTimers();
      const input = document.createElement("input");
      StyleHandler.switchPlaceholder(input);
      jest.advanceTimersByTime(250);
      expect(StyleHandler.placeholderCounter).toBeLessThan(0.7);
      jest.advanceTimersByTime(250);
      expect(StyleHandler.placeholderCounter).toBeLessThan(0.65);
      jest.useRealTimers();
    });
    describe("alarmBorder", () => {
      let el: HTMLInputElement;
      beforeEach(() => {
        jest.clearAllMocks();
        el = document.createElement("input");
        el.id = "someId";
        borderColors["someId"] = "#ccc";
      });
      afterEach(() => {
        delete borderColors["someId"];
      });
      it("does nothing if there's no identifier", () => {
        el.id = "";
        StyleHandler.alarmBorder(el);
        expect(el.style.borderColor).toBe("");
      });
      it("does nothing if there's no baseColor in borderColors map", () => {
        el.id = "unknownId";
        StyleHandler.alarmBorder(el);
        expect(el.style.borderColor).toBe("");
      });
      it("sets borderColor to baseColor if element is valid", () => {
        (DOMValidator.isDefaultEntry as unknown as jest.Mock).mockReturnValue(
          true
        );
        el.checkValidity = jest.fn().mockReturnValue(true);
        StyleHandler.alarmBorder(el);
        expect(el.style.borderColor).toBe("#ccc");
      });
      it("sets borderColor to alarmColor if invalid, then reverts after 2s", () => {
        jest.useFakeTimers();
        (DOMValidator.isDefaultEntry as unknown as jest.Mock).mockReturnValue(
          true
        );
        el.checkValidity = jest.fn().mockReturnValue(false);
        StyleHandler.alarmBorder(el);
        expect(el.style.borderColor).toBe("red");
        jest.advanceTimersByTime(2000);
        expect(el.style.borderColor).toBe("#ccc");
        jest.useRealTimers();
      });
      it("uses dataset.invalid === 'true' for custom entries", () => {
        (DOMValidator.isDefaultEntry as unknown as jest.Mock).mockReturnValue(
          false
        );
        (DOMValidator.isCustomEntry as unknown as jest.Mock).mockReturnValue(
          true
        );
        el.dataset.invalid = "true";
        StyleHandler.alarmBorder(el);
        expect(el.style.borderColor).toBe(StyleHandler.alarmBorder);
      });
      it("reverts to baseColor immediately if custom entry but dataset.invalid !== 'true'", () => {
        (DOMValidator.isDefaultEntry as unknown as jest.Mock).mockReturnValue(
          false
        );
        (DOMValidator.isCustomEntry as unknown as jest.Mock).mockReturnValue(
          true
        );
        el.dataset.invalid = "false";
        StyleHandler.alarmBorder(el);
        expect(el.style.borderColor).toBe("#ccc");
      });
    });
  });
});
