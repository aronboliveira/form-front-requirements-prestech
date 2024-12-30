export default class IOHandler {
  static applyUpperCase(
    v: string,
    f: Function,
    args: any[],
    limit?: number
  ): void {
    limit ? v.length === limit && f(...args) : f(...args);
  }
  static applyEmailExtension(emailValue: string): string {
    if (emailValue === "") emailValue = "@.";
    else if (emailValue === "@") emailValue += ".";
    return emailValue;
  }
}
