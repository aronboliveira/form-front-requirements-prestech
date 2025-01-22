export default class ObjectHelper {
  public static deepFreeze<T extends object>(obj: T): T {
    Object.keys(obj).forEach(
      key =>
        typeof (obj as any)[key] === "object" &&
        ObjectHelper.deepFreeze((obj as any)[key])
    );
    return Object.freeze(obj);
  }
}
