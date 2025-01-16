export default class MathHandler {
  static parseNotNaN(
    iniVal: string,
    def: number = 0,
    context: string = "float",
    fixed: number = 4
  ): number {
    let returnVal = 0;
    try {
      if (typeof iniVal !== "string")
        throw new Error(
          "Failed to validate argument: iniVal must be a string."
        );
      if (typeof context !== "string")
        throw new Error(
          "Failed to validate argument: context must be a string."
        );
      if (typeof def !== "number")
        throw new Error("Failed to validate argument: def must be a number.");
      if (typeof fixed !== "number")
        throw new Error("Failed to validate argument: fixed must be a number.");
      switch (context) {
        case "int":
          returnVal = parseInt(iniVal, 10) || def;
          if (
            !Number.isFinite(returnVal) ||
            Number.isNaN(returnVal) ||
            isNaN(returnVal)
          )
            returnVal = def;
          break;
        case "float":
          returnVal = parseFloat(parseFloat(iniVal).toFixed(fixed)) || def;
          if (!Number.isFinite(returnVal) || isNaN(returnVal)) returnVal = def;
          break;
        default:
          throw new Error(`Context of parsing invalid.`);
      }
      return returnVal || 0;
    } catch (e) {
      return returnVal || 0;
    }
  }
  static generateRandomKey(previous: string, limit: number = 255): string {
    let newKey = crypto.randomUUID(),
      acc = 0;
    while (newKey === previous) {
      if (acc >= limit) break;
      newKey = crypto.randomUUID();
      acc += 1;
    }
    return newKey;
  }
  static isValidHex(v: string): boolean {
    return /^#[0-9A-Fa-f]+$/g.test(v);
  }
  static hexToDecimal(v: string): number {
    if (!this.isValidHex(v)) return NaN;
    if (v.startsWith("#")) v = v.slice(1);
    return parseInt(v, 16);
  }
}
