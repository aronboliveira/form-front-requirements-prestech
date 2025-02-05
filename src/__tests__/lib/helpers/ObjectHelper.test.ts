import ObjectHelper from "../../../lib/helpers/ObjectHelper";
describe("ObjectHelper", () => {
  describe("deepFreeze", () => {
    it("should make an object completely immutable", () => {
      const obj = { a: { b: { c: 5 } } };
      const frozenObj = ObjectHelper.deepFreeze(obj);
      expect(Object.isFrozen(frozenObj)).toBe(true);
      expect(Object.isFrozen(frozenObj.a)).toBe(true);
      expect(Object.isFrozen(frozenObj.a.b)).toBe(true);
      expect(() => {
        (frozenObj as any).a.b.c = 10;
      }).toThrow();
    });
  });
  describe("makeImmutable", () => {
    it("should make all properties immutable", () => {
      const obj = {
        name: "test",
        nested: { key: "value" },
      };
      const immutableObj = ObjectHelper.makeImmutable(obj);
      expect(() => {
        (immutableObj as any).name = "changed";
      }).toThrow();
      expect(() => {
        (immutableObj as any).nested.key = "changed";
      }).toThrow();
    });
    it("should allow making objects immutable with configurable properties", () => {
      const obj = { key: "value" };
      const immutableObj = ObjectHelper.makeImmutable(
        obj,
        false
      );
      expect(
        Object.getOwnPropertyDescriptor(immutableObj, "key")
          ?.configurable
      ).toBe(false);
    });
  });
  describe("makeMutable", () => {
    it("should make all properties mutable", () => {
      const obj = ObjectHelper.deepFreeze({
        a: 1,
        nested: { b: 2 },
      });
      const mutableObj = ObjectHelper.makeMutable(obj);
      expect(() => {
        mutableObj.a = 10;
      }).not.toThrow();
      expect(() => {
        mutableObj.nested.b = 20;
      }).not.toThrow();
      expect(mutableObj.a).toBe(10);
      expect(mutableObj.nested.b).toBe(20);
    });
  });
  describe("JSONSafeStringify", () => {
    it("should stringify an object safely", () => {
      const obj = { a: 1, b: "test" };
      const jsonStr = ObjectHelper.JSONSafeStringify(obj);
      expect(jsonStr).toBe(JSON.stringify(obj));
    });
    it("should return an empty string on error", () => {
      const obj = { a: undefined, b: function () {} };
      const jsonStr = ObjectHelper.JSONSafeStringify(obj);
      expect(jsonStr).toBe("");
    });
  });
  describe("JSONSafeParse", () => {
    it("should parse a valid JSON string", () => {
      const jsonStr = '{"a":1,"b":"test"}';
      const obj = ObjectHelper.JSONSafeParse(jsonStr);
      expect(obj).toEqual({ a: 1, b: "test" });
    });
    it("should return null on parsing error", () => {
      const invalidJsonStr = "{a:1, b:test}";
      const result =
        ObjectHelper.JSONSafeParse(invalidJsonStr);
      expect(result).toBeNull();
    });
  });
});
