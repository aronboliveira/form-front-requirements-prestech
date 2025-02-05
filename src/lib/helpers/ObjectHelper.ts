export default class ObjectHelper {
  public static deepFreeze<T extends object>(obj: T): T {
    Object.keys(obj).forEach(
      key =>
        typeof (obj as any)[key] === "object" &&
        obj !== null &&
        !Object.isFrozen(obj) &&
        ObjectHelper.deepFreeze((obj as any)[key])
    );
    return Object.freeze(obj);
  }
  public static makeImmutable<T extends object>(
    obj: T,
    configurable = true
  ): T {
    for (const [k, v] of Object.entries(obj)) {
      try {
        const descriptor = Object.getOwnPropertyDescriptor(
          obj,
          k
        );
        if (
          !descriptor?.writable ||
          !descriptor.configurable
        )
          continue;
        if (typeof v === "object" && v !== null)
          Object.defineProperty(obj, k, {
            value: ObjectHelper.makeImmutable(v),
            writable: false,
            configurable,
          });
        else
          Object.defineProperty(obj, k, {
            value: v,
            writable: false,
            configurable,
          });
      } catch (e) {
        console.error(
          `Failed to make immutable for ${k}:${v}`
        );
      }
    }
    return obj;
  }
  public static makeMutable<T extends object>(
    obj: T,
    configurable = true
  ): T {
    for (const [k, v] of Object.entries(obj)) {
      try {
        const descriptor = Object.getOwnPropertyDescriptor(
          obj,
          k
        );
        if (!descriptor?.configurable) continue;
        if (typeof v === "object" && v !== null)
          Object.defineProperty(obj, k, {
            value: ObjectHelper.makeMutable(v),
            writable: true,
            configurable,
          });
        else
          Object.defineProperty(obj, k, {
            value: v,
            writable: true,
            configurable,
          });
      } catch (e) {
        console.log(`Failed to makeMutable for ${k}:${v}`);
      }
    }
    return obj;
  }
  public static JSONSafeStringify(data: any): string {
    try {
      return JSON.stringify(data);
    } catch (e) {
      console.error(
        `Error stringifying data:\n${(e as Error).message}`
      );
      return "";
    }
  }
  public static JSONSafeParse(data: any): any {
    try {
      return JSON.parse(data);
    } catch (e) {
      console.error(
        `Error parsing data:\n${(e as Error).message}`
      );
      return null;
    }
  }
}
export function protoName(f: any): string {
  return typeof f === "function"
    ? f.prototype.constructor.name
    : "";
}
