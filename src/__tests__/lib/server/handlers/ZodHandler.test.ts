import ZodHandler from "../../../../lib/server/handlers/ZodHandler";
describe("ZodHandler", () => {
  describe("String Schema Validators", () => {
    it("should validate strMin", () => {
      const schema = ZodHandler.strMin(5);
      expect(() => schema.parse("short")).toThrow();
      expect(schema.parse("longer")).toBe("longer");
    });
    it("should validate strMax", () => {
      const schema = ZodHandler.strMax(5);
      expect(() => schema.parse("too long")).toThrow();
      expect(schema.parse("short")).toBe("short");
    });
    it("should validate strMinMax", () => {
      const schema = ZodHandler.strMinMax({ min: 3, max: 6 });
      expect(() => schema.parse("xx")).toThrow();
      expect(() => schema.parse("too long")).toThrow();
      expect(schema.parse("valid")).toBe("valid");
    });
    it("should validate strMinMaxPattern", () => {
      const schema = ZodHandler.strMinMaxPattern({
        min: 3,
        max: 6,
        exp: /^[a-z]+$/,
      });
      expect(() => schema.parse("123")).toThrow();
      expect(schema.parse("abc")).toBe("abc");
    });
  });
  describe("Number Schema Validators", () => {
    it("should validate double", () => {
      const schema = ZodHandler.double();
      expect(schema.parse("3.1415")).toBeCloseTo(3.1415, 4);
      expect(() => schema.parse("invalid")).toThrow();
    });
    it("should validate doubleMin", () => {
      const schema = ZodHandler.doubleMin(10);
      expect(() => schema.parse(5)).toThrow();
      expect(schema.parse(15)).toBe(15);
    });
    it("should validate doubleMax", () => {
      const schema = ZodHandler.doubleMax(10);
      expect(() => schema.parse(15)).toThrow();
      expect(schema.parse(5)).toBe(5);
    });
    it("should validate doubleMinMax", () => {
      const schema = ZodHandler.doubleMinMax({ min: 5, max: 15 });
      expect(() => schema.parse(3)).toThrow();
      expect(() => schema.parse(20)).toThrow();
      expect(schema.parse(10)).toBe(10);
    });
  });
  describe("Date Schema Validators", () => {
    it("should validate date", () => {
      const schema = ZodHandler.date();
      expect(schema.parse(new Date())).toBeInstanceOf(Date);
    });
    it("should validate dateMin", () => {
      const schema = ZodHandler.dateMin(new Date("2023-01-01"));
      expect(() => schema.parse(new Date("2022-12-31"))).toThrow();
      expect(schema.parse(new Date("2023-01-02"))).toBeInstanceOf(Date);
    });
    it("should validate dateMax", () => {
      const schema = ZodHandler.dateMax(new Date("2023-12-31"));
      expect(() => schema.parse(new Date("2024-01-01"))).toThrow();
      expect(schema.parse(new Date("2023-12-30"))).toBeInstanceOf(Date);
    });
    it("should validate dateMinMax", () => {
      const schema = ZodHandler.dateMinMax({
        min: new Date("2023-01-01"),
        max: new Date("2023-12-31"),
      });
      expect(() => schema.parse(new Date("2022-12-31"))).toThrow();
      expect(() => schema.parse(new Date("2024-01-01"))).toThrow();
      expect(schema.parse(new Date("2023-06-15"))).toBeInstanceOf(Date);
    });
  });
  describe("Email and Phone Schema Validators", () => {
    it("should validate emailMinMax", () => {
      const schema = ZodHandler.emailMinMax({ min: 5, max: 50 });
      expect(() => schema.parse("x@x")).toThrow();
      expect(schema.parse("valid.email@example.com")).toBe(
        "valid.email@example.com"
      );
    });
    it("should validate phonePattern", () => {
      const schema = ZodHandler.phonePattern();
      expect(() => schema.parse("123-456-789")).toThrow();
      expect(schema.parse("+1234567890")).toBe("+1234567890");
    });
  });
});
