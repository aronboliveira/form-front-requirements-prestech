export default class StringHelper {
  static capitalize(v: string): string {
    if (!v?.length) return "";
    return v.length === 1
      ? v.toUpperCase()
      : `${v.charAt(0).toUpperCase()}${v.slice(1)}`;
  }
  static uncapitalize(v: string): string {
    return `${v.charAt(0).toLowerCase()}${v.slice(1)}`;
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
    if (!v?.length) return "";
    v = this.spaceToUnderscore(v);
    if (!this.isUpperCase(v.charAt(0)))
      return !this.isUpperCase(v) ? v : this.camelToSnake(v);
    return `${v.charAt(0).toUpperCase()}${v
      .slice(1)
      .replace(
        /([a-z])([A-Z])/g,
        (_, l, u) => `${l.toLowerCase()}_${u.toLowerCase()}`
      )}`;
  }
  static isUpperCase(c: string): boolean {
    if (!c?.length) return false;
    if (c.length > 1) c = c.slice(0, 1);
    return c >= "A" && c <= "Z";
  }
  static spaceToUnderscore(v: string, double: boolean = true): string {
    const spaceRegex = /\s/g;
    if (!spaceRegex.test(v)) return v;
    return v.replace(spaceRegex, double ? "__" : "_");
  }
  static removeDiacritical(v: string): string {
    return v.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  static removeEmojis(v: string): string {
    return v.replace(
      /[\u1F600-\u1F64F]|[\u1F300-\u1F5FF]|[\u1F680-\u1F6FF]|[\u1F900-\u1F9FF]|[\u1FA70-\u1FAFF]|[\u2600-\u26FF]|[\u2700-\u27BF]|[\u1F1E6-\u1F1FF]|[\u1F100-\u1F1FF]|[\u1FA00-\u1FA6F]|\u2640|\u2642|[\u1F3FB-\u1F3FF]/g,
      ""
    );
  }
  static slugify(v: string): string {
    return this.removeEmojis(this.removeDiacritical(v))
      .replace(/[^a-zA-Z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .toLowerCase();
  }
  static sanitizePropertyName(v: string): string {
    return (
      v
        .replace(/-/g, "_")
        .replace(/\s+/g, "__")
        /* eslint-disable */
        .replace(/[^\p{L}\p{N}\p{Pc}\p{Mn}\u200C\u200D_]/gu, "")
        .replace(/^[^a-zA-Z_\u200C\u200D]/, s => `_${s}`)
    );
    /* eslint-enable */
  }
  static unfriendlyName(v: string, pascal: boolean = false): string {
    return pascal
      ? StringHelper.capitalize(StringHelper.sanitizePropertyName(v))
      : StringHelper.uncapitalize(StringHelper.sanitizePropertyName(v));
  }
}
