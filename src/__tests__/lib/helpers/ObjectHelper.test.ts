import ObjectHelper from "../../../lib/helpers/ObjectHelper";
describe("ObjectHelper", () => {
  it("deepFreeze should freeze objects and nested objects", () => {
    const obj = { a: { b: 1 } };
    const frozenObj = ObjectHelper.deepFreeze(obj);
    expect(() => {
      (frozenObj as any).a.b = 2;
    }).toThrow(TypeError);
    expect(Object.isFrozen(frozenObj)).toBe(true);
    expect(Object.isFrozen(frozenObj.a)).toBe(true);
  });
  it("JSONSafeStringify should stringify valid objects", () => {
    const obj = { key: "value" };
    const result = ObjectHelper.JSONSafeStringify(obj);
    expect(result).toBe(JSON.stringify(obj));
  });
  it("JSONSafeStringify should return an empty string on error", () => {
    const circularObj: any = {};
    circularObj.self = circularObj;
    const result = ObjectHelper.JSONSafeStringify(circularObj);
    expect(result).toBe("");
  });
});
