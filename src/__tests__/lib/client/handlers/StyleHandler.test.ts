/**
 * @jest-environment jsdom
 */
import StyleHandler from "../../../../lib/client/handlers/StyleHandler";
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
});
