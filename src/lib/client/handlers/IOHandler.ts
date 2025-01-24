import { entryElement, nlInp, nlTxtEl } from "@/lib/definitions/client/helpers";
import { DDDPattern, TelType } from "@/lib/definitions/foundations";
import MathHandler from "./MathHandler";
import {
  // Acronyms,
  // AcronymsDefaults,
  // friendlyRoles,
  suggestionsDict,
} from "../vars";
export default class IOHandler {
  static adjustTelCountryCode(code: string): string {
    if (code === "") return code;
    if (code.length > 4) code = code.slice(0, 4);
    return code;
  }
  static adjustTelDDD(ddd: string, increase: boolean = true): DDDPattern {
    if (ddd === "") return ddd as DDDPattern;
    ddd = ddd.trim().replace(/[^0-9]/g, "");
    if (ddd.length > 2) ddd = ddd.slice(0, 2);
    if (ddd.startsWith("1") && ddd.endsWith("0")) ddd = "11";
    else if (increase) {
      if (ddd.startsWith("2")) {
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
    } else {
      if (ddd.startsWith("2")) {
        if (ddd.endsWith("0")) ddd = "19";
        else if (ddd.endsWith("3")) ddd = "22";
        else if (ddd.endsWith("5") || ddd.endsWith("6")) ddd = "24";
        else if (ddd.endsWith("9")) ddd = "27";
      } else if (ddd.startsWith("3")) {
        if (ddd.endsWith("0")) ddd = "29";
        else if (ddd.endsWith("6")) ddd = "35";
        else if (ddd.endsWith("9")) ddd = "38";
      } else if (ddd.startsWith("4") && ddd.endsWith("0")) ddd = "39";
      else if (ddd.startsWith("5")) {
        if (ddd.endsWith("0")) ddd = "49";
        else if (ddd.endsWith("2")) ddd = "51";
        else if (MathHandler.parseNotNaN(ddd.slice(-1), 11, "int") > 5)
          ddd = "53";
      } else if (ddd.startsWith("6") && ddd.endsWith("0")) ddd = "59";
      else if (
        ddd.startsWith("7") &&
        MathHandler.parseNotNaN(ddd.slice(-1), 1, "int") % 2 === 0
      )
        ddd = (MathHandler.parseNotNaN(ddd, 11, "int") - 1).toString();
      if (ddd.startsWith("8") && ddd.endsWith("0")) ddd = "79";
      else if (ddd.startsWith("9") && ddd.endsWith("0")) ddd = "89";
    }
    return ddd as DDDPattern;
  }
  static applyNumRules(
    v: string,
    maxLength: number,
    max: number,
    type: "int" | "float" = "int"
  ): string {
    if (!v) return v;
    const ini = v;
    v = v.trim().replace(/[^0-9]*/g, "");
    if (v.length > maxLength) v = v.slice(0, maxLength);
    if (
      MathHandler.parseNotNaN(v, MathHandler.parseNotNaN(ini, 1, type), type) >
      max
    )
      v = max.toString();
    return v;
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
    const ini = telValue;
    if (type === "local") {
      if (
        ((telValue.startsWith("9") && telValue.length === 5) ||
          (!telValue.startsWith("9") && telValue.length === 4)) &&
        !/\-/g.test(telValue)
      )
        telValue += "-";
      if (
        telValue.startsWith("9") &&
        telValue.length > 5 &&
        !/\-/g.test(telValue)
      )
        telValue = `${telValue.slice(0, 5)}-${telValue.slice(5)}`;
      else if (
        !telValue.startsWith("9") &&
        telValue.length > 4 &&
        !/\-/g.test(telValue)
      )
        telValue = `${telValue.slice(0, 4)}-${telValue.slice(4)}`;
      if (telValue.startsWith("9") && telValue.length > 10)
        telValue = telValue.slice(0, 10);
      else if (!telValue.startsWith("9") && telValue.length > 9)
        telValue = telValue.slice(0, 9);
    } else if (type === "national") {
      if (telValue.length === 2) telValue += " ";
      if (
        (/\s9/g.test(telValue.slice(0, 5)) && telValue.length === 9) ||
        (!/\s9/g.test(telValue.slice(0, 5)) && telValue.length === 8)
      )
        telValue += "-";
      if (/\s9/g.test(telValue.slice(0, 5)) && telValue.length > 13)
        telValue = telValue.slice(0, 13);
      else if (!/\s9/g.test(telValue.slice(0, 5)) && telValue.length > 12)
        telValue = telValue.slice(0, 12);
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
    return ini === telValue && telValue.endsWith("-")
      ? telValue.slice(0, -1)
      : telValue;
  }
  static applyUpperCase(v: string, limit?: number): string {
    return limit ? (v.length === limit ? v.toUpperCase() : v) : v.toUpperCase();
  }
  static syncLabel(inp: entryElement | null) {
    if (!inp?.labels?.length) return;
    const relLabel =
      inp.closest(".inpDivClasses")?.querySelector("label") ??
      inp.closest("label");
    if (!relLabel) return;
    relLabel.htmlFor = inp.id;
    if (inp.dataset.idacc) {
      const cleaned = relLabel.id.replace(/_?_[0-9](?:_*$|$)/g, "");
      if (inp.dataset.nameacc)
        relLabel.id = `${cleaned}__${inp.dataset.idacc}_${inp.dataset.nameacc}`;
      else relLabel.id = `${cleaned}__${inp.dataset.idacc}`;
    }
  }
  static moveCursorFocus(el: nlTxtEl, relEl: nlTxtEl, limit?: number): void {
    if (!el || !relEl) return;
    if (
      !limit &&
      (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement)
    )
      limit = el.maxLength;
    if (!limit) return;
    el.value.length >= limit && relEl.focus();
  }
  static handleRangeSlide(el: nlInp, modulator: number = 20): void {
    if (!(el instanceof HTMLInputElement && el.type === "range")) return;
    if (el.dataset.sliding === "true") return;
    const id = el.id,
      interv = setInterval(i => {
        if (!el || !el.isConnected) el = document.getElementById(id) as nlInp;
        if (!el) {
          clearInterval(i);
          return;
        }
        let curr = MathHandler.parseNotNaN(el.value, 0, "int");
        if (curr % modulator !== 0) {
          el.dataset.sliding = "true";
          el.value = (++curr).toString();
        } else {
          el.dataset.sliding = "false";
          clearInterval(i);
        }
      }, 10);
    setTimeout(() => {
      if (!el || !el.isConnected) el = document.getElementById(id) as nlInp;
      if (!el) return;
      clearInterval(interv);
      const curr = MathHandler.parseNotNaN(el.value, 0, "int");
      if (curr % modulator !== 0) {
        const steps = [],
          diffs = [];
        for (let i = 0; i <= 100; i += modulator) steps.push(i);
        for (let s = 0; s < steps.length; s++)
          diffs.push(Math.abs(steps[s] - curr));
        el.value = Math.min(...diffs).toString();
        el.dataset.sliding = "false";
        clearInterval(interv);
      }
    }, 2000);
  }
  static selectCustomDataListSuggestions(k: string): string[] | void {
    const suggestions = suggestionsDict[k];
    if (!suggestions?.length) return;
    return suggestions;
  }
  // static selectContextualizedList(
  //   ctx: keyof typeof friendlyRoles,
  //   k: keyof typeof AcronymsDefaults
  // ): string[] | void {
  //   const ctxGrp = suggestionsGroupsMap.get(ctx);
  //   if (!ctxGrp) return;
  //   const sg = ctxGrp.get(k);
  // }
}
