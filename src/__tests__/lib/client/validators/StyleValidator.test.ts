import StyleValidator from "../../../../lib/client/validators/StyleValidator";
describe("StyleValidator", () => {
  it("returns true for valid display values", () => {
    expect(StyleValidator.evaluateDisplay("block")).toBe(true);
    expect(StyleValidator.evaluateDisplay("inline")).toBe(true);
    expect(StyleValidator.evaluateDisplay("flex")).toBe(true);
  });
  it("returns false for invalid display values", () =>
    expect(StyleValidator.evaluateDisplay("randomDisplay")).toBe(false));
});
