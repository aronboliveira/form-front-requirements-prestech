export default class ObjectHelper {
  public static deepFreeze<T extends object>(obj: T): T {
    Object.keys(obj).forEach(
      key =>
        typeof (obj as any)[key] === "object" &&
        ObjectHelper.deepFreeze((obj as any)[key])
    );
    return Object.freeze(obj);
  }
  public static JSONSafeStringify(data: any): string {
    try {
      return JSON.stringify(data);
    } catch (e) {
      console.error(`Error stringifying data:\n${(e as Error).message}`);
      return "";
    }
  }
  public static JSONSafeParse(data: any): any {
    try {
      return JSON.parse(data);
    } catch (e) {
      console.error(`Error parsing data:\n${(e as Error).message}`);
      return null;
    }
  }
}
