import { DDDPattern, TelType } from "@/lib/definitions/helpers";
import MathHandler from "./MathHandler";
export default class IOHandler {
  static adjustTelCountryCode(code: string): string {
    if (code === "") return code;
    code = code.trim().replace(/^[0-9\+]/g, "");
    if (!code.startsWith("+")) code = `+${code}`;
    if (code.length > 4) code = code.slice(0, 4);
    return code;
  }
  static adjustTelDDD(ddd: string): DDDPattern {
    if (ddd === "") return ddd as DDDPattern;
    ddd = ddd.trim().replace(/[^0-9]/g, "");
    if (ddd.length > 2) ddd = ddd.slice(0, 2);
    if (ddd.startsWith("1") && ddd.endsWith("0")) ddd = "11";
    else if (ddd.startsWith("2")) {
      if (ddd.endsWith("0")) ddd = "21";
      else if (ddd.endsWith("3")) ddd = "24";
      else if (ddd.endsWith("5") || ddd.endsWith("6")) ddd = "27";
      else if (ddd.endsWith("9")) ddd = "31";
    } else if (ddd.startsWith("3")) {
      if (ddd.endsWith("0")) ddd = "31";
      else if (ddd.endsWith("6")) ddd = "37";
      else if (ddd.endsWith("9")) ddd = "41";
    } else if (ddd.startsWith("4") && ddd.endsWith("0")) ddd = "41";
    else if (ddd.startsWith("5")) {
      if (ddd.endsWith("0")) ddd = "51";
      else if (ddd.endsWith("2")) ddd = "53";
      else if (MathHandler.parseNotNaN(ddd.slice(-1), 11, "int") > 5)
        ddd = "61";
    } else if (ddd.startsWith("6") && ddd.endsWith("0")) ddd = "61";
    else if (
      ddd.startsWith("7") &&
      MathHandler.parseNotNaN(ddd.slice(-1), 1, "int") % 2 === 0
    )
      ddd = (MathHandler.parseNotNaN(ddd, 11, "int") + 1).toString();
    if (ddd.startsWith("8") && ddd.endsWith("0")) ddd = "81";
    else if (ddd.startsWith("9") && ddd.endsWith("0")) ddd = "91";
    return ddd as DDDPattern;
  }
  static applyAgeContrainst(age: string): string {
    if (age === "") return age;
    const iniAge = age;
    age = age.trim().replace(/[^0-9]*/g, "");
    if (age.length > 3) age = age.slice(0, 3);
    if (
      MathHandler.parseNotNaN(
        age,
        MathHandler.parseNotNaN(iniAge, 1, "int"),
        "int"
      ) > 127
    )
      age = "127";
    return age;
  }
  static applyEmailExtension(emailValue: string): string {
    if (emailValue !== "") {
      emailValue = emailValue.trim();
      if (emailValue === "@") emailValue += ".";
    } else emailValue = "@.";
    return emailValue;
  }
  static applyTelExtension(telValue: string, type: TelType): string {
    if (telValue === "") return telValue;
    telValue = telValue.trim().replaceAll(/[^0-9\-\+]/g, "");
    if (type === "local") {
      if (
        (telValue.startsWith("9") && telValue.length === 5) ||
        telValue.length === 4
      )
        telValue += "-";
    } else if (type === "national") {
      if (telValue.length === 2) telValue += " ";
      if (
        (/\s9/g.test(telValue.slice(0, 5)) && telValue.length === 9) ||
        (!/\s9/g.test(telValue.slice(0, 5)) && telValue.length === 8)
      )
        telValue += "-";
    } else if (type === "complete") {
      const countryCodeMatch = telValue.match(/^\+(\d{1,3})/);
      if (countryCodeMatch) {
        const countryCode = countryCodeMatch[1],
          indexAfterCountryCode = countryCode.length + 1;
        if (telValue.length === indexAfterCountryCode) telValue += " ";
        const areaCodeLength = countryCode === "55" ? 2 : 3;
        if (telValue.length === indexAfterCountryCode + areaCodeLength)
          telValue += " ";
        const localNumberStart = indexAfterCountryCode + areaCodeLength + 1,
          localLength = telValue.slice(localNumberStart).length;
        if (
          (localLength === 5 && telValue.charAt(localNumberStart) === "9") ||
          localLength === 4
        ) {
          telValue += "-";
        }
      } else telValue = IOHandler.applyTelExtension(telValue, "national");
    }
    return telValue;
  }
  static applyUpperCase(v: string, f: Function, limit?: number): void {
    limit ? v.length === limit && f(v.toUpperCase()) : f(v.toUpperCase());
  }
}
