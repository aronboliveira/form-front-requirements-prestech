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
});
