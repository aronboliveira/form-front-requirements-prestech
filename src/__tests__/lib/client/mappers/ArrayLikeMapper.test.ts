import ArrayLikeMapper from "../../../../lib/client/mappers/ArrayLikeMapper";
describe("ArrayLikeMapper", () => {
  describe("setupAsArray", () => {
    it("returns the array if already an array", () => {
      const arr = [1, 2, 3];
      expect(ArrayLikeMapper.setupAsArray(arr)).toBe(arr);
    });
    it("converts Array-like to an actual array if not an array", () => {
      const nodeList = {
        0: "a",
        1: "b",
        length: 2,
      };
      const result = ArrayLikeMapper.setupAsArray(nodeList);
      expect(Array.isArray(result)).toBe(true);
      expect(result).toEqual(["a", "b"]);
    });
  });
  describe("toKeyObject", () => {
    it("maps key-value pairs from array-like to an object", () => {
      const al = [
        { name: "foo", value: 10 },
        { name: "bar", value: 20 },
      ];
      const result = ArrayLikeMapper.toKeyObject(al, "name", "value");
      expect(result).toEqual({ foo: 10, bar: 20 });
    });
    it("converts Node attributes array-like to an object", () => {
      const mockAttrs = [
        { name: "id", value: "testEl" },
        { name: "class", value: "someClass" },
      ];
      const result = ArrayLikeMapper.toKeyObject(mockAttrs, "name", "value");
      expect(result).toEqual({ id: "testEl", class: "someClass" });
    });
  });
  describe("toRecord", () => {
    it("maps an array-like of keys into the recordable object, returning the object itself", () => {
      const al = ["one", "two", "three"];
      const recordable: Record<string, any> = {
        one: 111,
        two: 222,
        three: 333,
        extra: 999,
      };
      const returned = ArrayLikeMapper.toRecord(al, recordable);
      expect(returned).toBe(recordable);
      expect(recordable.one).toBe(111);
      expect(recordable.two).toBe(222);
      expect(recordable.three).toBe(333);
      expect(recordable.extra).toBe(999);
    });
    it("handles keys not found in the recordable, though code tries a try/catch", () => {
      const al = ["missing", "found"];
      const recordable = { found: "OK" };
      const returned = ArrayLikeMapper.toRecord(al, recordable);
      expect(returned).toBe(recordable);
      expect((recordable as any).missing).toBeUndefined();
      expect(recordable.found).toBe("OK");
    });
  });
});
