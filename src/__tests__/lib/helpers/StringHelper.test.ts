import StringHelper from "../../../lib/helpers/StringHelper";
describe("StringHelper", () => {
  describe("capitalize()", () => {
    it("returns empty string if input is empty or undefined", () => {
      expect(StringHelper.capitalize("")).toBe("");
      expect(StringHelper.capitalize(undefined as any)).toBe("");
    });
    it("capitalizes single character", () => {
      expect(StringHelper.capitalize("a")).toBe("A");
      expect(StringHelper.capitalize("z")).toBe("Z");
    });
    it("capitalizes the first character of a longer string", () => {
      expect(StringHelper.capitalize("hello")).toBe("Hello");
      expect(StringHelper.capitalize("multiple words")).toBe("Multiple words");
    });
  });
  describe("uncapitalize()", () => {
    it("uncapitalizes the first character of a string", () => {
      expect(StringHelper.uncapitalize("Hello")).toBe("hello");
      expect(StringHelper.uncapitalize("AbcD")).toBe("abcD");
    });
  });
  describe("camelToSnake()", () => {
    it("returns the same string if no uppercase letters are found", () => {
      expect(StringHelper.camelToSnake("simple")).toBe("simple");
    });
    it("converts camelCase to snake_case", () => {
      expect(StringHelper.camelToSnake("camelCase")).toBe("camel_case");
      expect(StringHelper.camelToSnake("longCamelCaseExample")).toBe(
        "long_camel_case_example"
      );
    });
    it("handles spaces by converting them to underscores first", () => {
      expect(StringHelper.camelToSnake("some TextHere")).toBe(
        "some__text_here"
      );
    });
    it("returns input if empty or falsy", () => {
      expect(StringHelper.camelToSnake("")).toBe("");
      expect(StringHelper.camelToSnake(undefined as any)).toBeUndefined();
    });
  });
  describe("pascalToSnake()", () => {
    it("returns empty string if input is empty or falsy", () => {
      expect(StringHelper.pascalToSnake("")).toBe("");
      expect(StringHelper.pascalToSnake(undefined as any)).toBe("");
    });
    it("converts PascalCase to Pascal_case, if first char is uppercase", () => {
      expect(StringHelper.pascalToSnake("PascalCase")).toBe("Pascal_case");
      expect(StringHelper.pascalToSnake("ExampleTestHere")).toBe(
        "Example_test_here"
      );
    });
    it("uses camelToSnake logic if first char is not uppercase or entire string is not uppercase", () => {
      expect(StringHelper.pascalToSnake("exampleTestHere")).toBe(
        "example_test_here"
      );
      expect(StringHelper.pascalToSnake("already_snake_case")).toBe(
        "already_snake_case"
      );
    });
    it("converts spaces into underscores before applying transformation", () => {
      expect(StringHelper.pascalToSnake("Pascal With Space")).toBe(
        "Pascal__with__space"
      );
    });
  });
  describe("isUpperCase()", () => {
    it("returns false if input is empty, undefined, or not a letter", () => {
      expect(StringHelper.isUpperCase("")).toBe(false);
      expect(StringHelper.isUpperCase(undefined as any)).toBe(false);
      expect(StringHelper.isUpperCase("1")).toBe(false);
      expect(StringHelper.isUpperCase("?")).toBe(false);
    });
    it("returns true if character is uppercase A-Z", () => {
      expect(StringHelper.isUpperCase("A")).toBe(true);
      expect(StringHelper.isUpperCase("Z")).toBe(true);
    });
    it("returns false if character is lowercase", () => {
      expect(StringHelper.isUpperCase("a")).toBe(false);
    });
    it("ignores extra characters if a string is longer than one character", () => {
      expect(StringHelper.isUpperCase("ABC")).toBe(true);
      expect(StringHelper.isUpperCase("abc")).toBe(false);
    });
  });
  describe("spaceToUnderscore()", () => {
    it("replaces spaces with double underscores by default", () => {
      expect(StringHelper.spaceToUnderscore("hello world")).toBe(
        "hello__world"
      );
    });
    it("replaces spaces with single underscore if double=false", () => {
      expect(StringHelper.spaceToUnderscore("hello world", false)).toBe(
        "hello_world"
      );
    });
    it("returns the same string if no spaces", () => {
      expect(StringHelper.spaceToUnderscore("noSpacesHere")).toBe(
        "noSpacesHere"
      );
    });
  });
  describe("removeDiacritical()", () => {
    it("removes diacritical marks from accented characters", () => {
      const input = "áéíóúàèìòùâêîôûçÇ";
      const output = "aeiouaeiouaeioucC";
      expect(StringHelper.removeDiacritical(input)).toBe(output);
    });
    it("does nothing to normal letters", () => {
      expect(StringHelper.removeDiacritical("abcXYZ")).toBe("abcXYZ");
    });
  });
  describe("removeEmojis()", () => {
    it("removes emojis", () => {
      const input = "Hello 🌍👋";
      const output = "Hello ";
      expect(StringHelper.removeEmojis(input)).toBe(output);
    });
    it("does nothing if no emojis are present", () => {
      expect(StringHelper.removeEmojis("Just text.")).toBe("Just text.");
    });
  });
  describe("slugify()", () => {
    it("removes diacritics, emojis, non-alphanumeric, trims hyphens, and lowercases", () => {
      const input = "Olá Mundo! 🤗 Bem-vindo 123";
      const result = StringHelper.slugify(input);
      expect(result).toBe("ola-mundo--bem-vindo-123");
    });
    it("returns empty string if everything is removed", () => {
      const input = "🤗🤗🤗!!!";
      expect(StringHelper.slugify(input)).toBe("");
    });
  });
  describe("sanitizePropertyName()", () => {
    it("replaces dashes with underscores, spaces with double underscores, removes disallowed chars", () => {
      const input = "my-prop name!@#   123";
      const output = StringHelper.sanitizePropertyName(input);
      expect(output).toBe("my_prop__name123");
    });
    it("adds underscore prefix if first char is disallowed", () => {
      const input = "1abc";
      const output = StringHelper.sanitizePropertyName(input);
      expect(output).toBe("_1abc");
    });
  });
  describe("unfriendlyName()", () => {
    it("returns sanitized name in uncapitalized form by default", () => {
      const input = "Some-Prop";
      const output = StringHelper.unfriendlyName(input);
      expect(output).toBe("some_prop");
    });
    it("returns sanitized name in capitalized form if pascal=true", () => {
      const input = "my-prop";
      const output = StringHelper.unfriendlyName(input, true);
      expect(output).toBe("My_prop");
    });
  });
});
