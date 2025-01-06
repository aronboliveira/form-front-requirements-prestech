/**
 * @jest-environment jsdom
 */
import StyleValidator from "../../../../lib/client/validators/StyleValidator";
describe("StyleValidator.scanPseudoSelectorTag", () => {
  beforeEach(() => (document.body.innerHTML = ""));
  it("creates and returns a new style element if it does not exist", () => {
    expect(document.getElementById("pseudos")).toBeNull();
    const result = StyleValidator.scanPseudoSelectorTag();
    expect(result).toBeInstanceOf(HTMLStyleElement);
    expect(result?.id).toBe("pseudos");
    expect(document.getElementById("pseudos")).toBe(result);
  });
  it("returns an existing style element if it already exists", () => {
    const existingStyle = document.createElement("style");
    existingStyle.id = "pseudos";
    document.body.appendChild(existingStyle);
    const result = StyleValidator.scanPseudoSelectorTag();
    expect(result).toBe(existingStyle);
    expect(document.getElementsByTagName("style").length).toBe(1);
  });
  it("appends the style element to the document body", () => {
    const result = StyleValidator.scanPseudoSelectorTag();
    expect(document.body.contains(result as HTMLElement)).toBe(true);
  });
  it("does not create duplicates when called multiple times", () => {
    expect(StyleValidator.scanPseudoSelectorTag()).toBe(
      StyleValidator.scanPseudoSelectorTag()
    );
    expect(document.getElementsByTagName("style").length).toBe(1);
  });
});
