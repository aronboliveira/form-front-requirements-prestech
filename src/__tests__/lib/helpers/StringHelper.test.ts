import StringHelper from "../../../lib/helpers/StringHelper";
describe("StringHelper", () => {
  describe("camelToSnake", () => {
    it("returns the original if the input is empty or undefined", () => {
      expect(StringHelper.camelToSnake("")).toBe("");
      expect(StringHelper.camelToSnake(undefined as any)).toBeUndefined();
    });
    it("returns the same string if no uppercase letters exist", () =>
      expect(StringHelper.camelToSnake("test")).toBe("test"));
    it("converts Camel Case to Snake Case", () =>
      expect(StringHelper.camelToSnake("camelCaseString")).toBe(
        "camel_case_string"
      ));
  });
});
