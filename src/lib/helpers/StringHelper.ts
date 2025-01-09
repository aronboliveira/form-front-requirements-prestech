export default class StringHelper {
  static capitalize(v: string): string {
    if (!v?.length) return '';
    return (v.length === 1)
      ? v.toUpperCase()
      : `${v.charAt(0).toUpperCase()}${v.slice(1)}`
  }
  static camelToSnake(v: string): string {
    if (!v || (typeof v === "string" && !/[A-Z]/.test(v))) return v;
    v = this.spaceToUnderscore(v);
    return v.replace(
      /([a-z])([A-Z])/g,
      (_, l, u) => `${l.toLowerCase()}_${u.toLowerCase()}`
    );
  }
  static pascalToSnake(v: string): string {
    if (!v?.length) return '';
    v = this.spaceToUnderscore(v);
    if (!this.isUpperCase(v.charAt(0)))
      return !this.isUpperCase(v) ? v : this.camelToSnake(v);
    return `${v.charAt(0).toUpperCase()}${v.slice(1)
    .replace(/([a-z])([A-Z])/g, (_, l, u) =>
       `${l.toLowerCase()}_${u.toLowerCase()}`)}` //NOSONAR
  }
  static isUpperCase(c: string): boolean {
    if (!c?.length) return false;
    if (c.length > 1) c = c.slice(0, 1);
    return c >= 'A' && c <= 'Z'
  }
  static spaceToUnderscore(v: string, double: boolean = true): string {
    const spaceRegex = /\s/g;
    if (!spaceRegex.test(v)) return v;
    return v.replace(spaceRegex, double ? '__' : '_');
  }
}
