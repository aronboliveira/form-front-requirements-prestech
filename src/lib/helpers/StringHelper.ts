export default class StringHelper {
  static camelToSnake(v: string): string {
    if (!v || (typeof v === "string" && !/[A-Z]/estt.test(v))) return v;
    return v.replace(/([a-z])([A-Z])/g, (_, l, u) => `${l}_${u.toUpperCase()}`);
  }
}
