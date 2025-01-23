/**
 * @jest-environment jsdom
 */
import MathHandler from "../../../../lib/client/handlers/MathHandler";
describe("MathHandler", () => {
  describe("parseNotNaN", () => {
    it("parses integer string correctly", () =>
      expect(MathHandler.parseNotNaN("42", 0, "int")).toBe(42));
    it("returns default if parsing fails", () =>
      expect(MathHandler.parseNotNaN("abc", 10, "int")).toBe(10));
    it("parses float and respects fixed decimal places", () =>
      expect(MathHandler.parseNotNaN("3.14159", 0, "float", 2)).toBe(3.14));
  });
  describe("generateRandomKey", () => {
    it("generates a UUID that is different from previous one", () => {
      const prevKey = "some-fake-uuid";
      const newKey = MathHandler.generateRandomKey(prevKey);
      expect(newKey).not.toBe(prevKey);
      expect(typeof newKey).toBe("string");
    });
  });
  describe("isValidHex", () => {
    it("returns true for valid hex strings", () => {
      expect(MathHandler.isValidHex("#FFFFFF")).toBe(true);
      expect(MathHandler.isValidHex("#000000")).toBe(true);
      expect(MathHandler.isValidHex("#123ABC")).toBe(true);
    });
    it("returns false for invalid hex strings", () => {
      expect(MathHandler.isValidHex("FFFFFF")).toBe(false);
      expect(MathHandler.isValidHex("#123ABCG")).toBe(false);
      expect(MathHandler.isValidHex("#12")).toBe(false);
      expect(MathHandler.isValidHex("")).toBe(false);
    });
  });
  describe("hexToDecimal", () => {
    it("converts valid hex strings to decimal", () => {
      expect(MathHandler.hexToDecimal("#FFFFFF")).toBe(16777215);
      expect(MathHandler.hexToDecimal("#000000")).toBe(0);
      expect(MathHandler.hexToDecimal("#123ABC")).toBe(1194684);
    });
    it("ignores the '#' character in hex strings", () => {
      expect(MathHandler.hexToDecimal("FFFFFF")).toBe(NaN);
      expect(MathHandler.hexToDecimal("#123ABC")).toBe(1194684);
    });
    it("returns NaN for invalid hex strings", () => {
      expect(MathHandler.hexToDecimal("#123ABCG")).toBeNaN();
      expect(MathHandler.hexToDecimal("12345")).toBeNaN();
      expect(MathHandler.hexToDecimal("#")).toBeNaN();
      expect(MathHandler.hexToDecimal("")).toBeNaN();
    });
  });
  describe("toNatural", () => {
    it("returns the absolute, rounded value of positive finite numbers", () => {
      expect(MathHandler.toNatural(1.2)).toBe(1);
      expect(MathHandler.toNatural(5.9)).toBe(6);
      expect(MathHandler.toNatural(10)).toBe(10);
    });
    it("returns 1 for non-positive numbers", () => {
      expect(MathHandler.toNatural(-1.2)).toBe(1);
      expect(MathHandler.toNatural(-5)).toBe(1);
      expect(MathHandler.toNatural(0)).toBe(1);
    });
    it("returns 1 for non-finite numbers", () => {
      expect(MathHandler.toNatural(Infinity)).toBe(1);
      expect(MathHandler.toNatural(-Infinity)).toBe(1);
      expect(MathHandler.toNatural(NaN)).toBe(1);
    });
  });
});
