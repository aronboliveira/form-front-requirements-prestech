import { PseudoNum } from "../definitions/foundations";
export default class StringHelper {
  public static capitalize(v: string): string {
    if (!v?.length) return "";
    return v.length === 1
      ? v.toUpperCase()
      : `${v.charAt(0).toUpperCase()}${v.slice(1)}`;
  }
  public static uncapitalize(v: string): string {
    return `${v.charAt(0).toLowerCase()}${v.slice(1)}`;
  }
  public static camelToSnake(v: string): string {
    if (!v || (typeof v === "string" && !/[A-Z]/.test(v)))
      return v;
    v = this.spaceToUnderscore(v);
    return v.replace(
      /([a-z])([A-Z])/g,
      (_, l, u) => `${l.toLowerCase()}_${u.toLowerCase()}`
    );
  }
  public static pascalToSnake(v: string): string {
    if (!v?.length) return "";
    v = this.spaceToUnderscore(v);
    if (!this.isUpperCase(v.charAt(0)))
      return !this.isUpperCase(v)
        ? v
        : this.camelToSnake(v);
    return `${v.charAt(0).toUpperCase()}${v
      .slice(1)
      .replace(
        /([a-z])([A-Z])/g,
        (_, l, u) => `${l.toLowerCase()}_${u.toLowerCase()}`
      )}`;
  }
  public static isUpperCase(c: string): boolean {
    if (!c?.length) return false;
    if (c.length > 1) c = c.slice(0, 1);
    return c >= "A" && c <= "Z";
  }
  public static spaceToUnderscore(
    v: string,
    double: boolean = true
  ): string {
    const spaceRegex = /\s/g;
    if (!spaceRegex.test(v)) return v;
    return v.replace(spaceRegex, double ? "__" : "_");
  }
  public static removeDiacritical(v: string): string {
    return v
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }
  public static removeEmojis(v: string): string {
    return v.replace(
      /[\u1F600-\u1F64F]|[\u1F300-\u1F5FF]|[\u1F680-\u1F6FF]|[\u1F900-\u1F9FF]|[\u1FA70-\u1FAFF]|[\u2600-\u26FF]|[\u2700-\u27BF]|[\u1F1E6-\u1F1FF]|[\u1F100-\u1F1FF]|[\u1FA00-\u1FA6F]|\u2640|\u2642|[\u1F3FB-\u1F3FF]/g,
      ""
    );
  }
  public static slugify(
    v: string,
    lower: boolean = true
  ): string {
    return lower
      ? this.removeEmojis(this.removeDiacritical(v))
          .replace(/[^a-zA-Z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "")
      : this.removeEmojis(this.removeDiacritical(v))
          .replace(/[^a-zA-Z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "");
  }
  public static isSaneAttrName(v: string): boolean {
    return (
      /^[a-zA-Z_:]/.test(v) &&
      !/^[0-9]/.test(v) &&
      !/[\s"'<>\/=~!@#$%^&*()+=|{}[\];"\\,<>?]/g.test(v)
    );
  }
  public static sanitizePropertyName(v: string): string {
    return (
      v
        .replace(/-/g, "_")
        .replace(/\s+/g, "__")
        /* eslint-disable */
        .replace(
          /[^\p{L}\p{N}\p{Pc}\p{Mn}\u200C\u200D_]/gu,
          ""
        )
        .replace(/^[^a-zA-Z_\u200C\u200D]/, s => `_${s}`)
    );
    /* eslint-enable */
  }
  public static unfriendlyName(
    v: string,
    pascal: boolean = false
  ): string {
    return pascal
      ? StringHelper.capitalize(
          StringHelper.sanitizePropertyName(v)
        )
      : StringHelper.uncapitalize(
          StringHelper.sanitizePropertyName(v)
        );
  }
  public static padToISO(
    v: number | string,
    to: number = 2,
    using: PseudoNum = "0"
  ): string {
    return v.toString().padStart(to, using);
  }
}
