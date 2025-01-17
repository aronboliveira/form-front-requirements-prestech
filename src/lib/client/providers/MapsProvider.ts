import { Provider, roleType } from "@/lib/definitions/foundations";
import { borderColors, fontColors } from "../vars";
import DOMHandler from "../handlers/DOMHandler";
export default class MapsProvider implements Provider {
  #maps: Map<any, Map<any, any>>;
  constructor(_maps: Map<any, Map<any, any>>) {
    this.#maps = _maps;
  }
  public setup(): this {
    for (const map of this.#maps.entries()) {
      if (!map?.length) continue;
      const [k] = map,
        rel = this.#maps.get(k);
      if (!rel) continue;
      this.#questionsDefaultSetup(rel);
    }
    const els = document.body.querySelectorAll("*");
    for (let i = 0; i < els.length; i++) {
      const el = els[i],
        id = DOMHandler.getIdentifier(el);
      if (!id) continue;
      borderColors[id] = getComputedStyle(el).borderColor;
      fontColors[id] = getComputedStyle(el).color;
    }
    const cycle = (): void => {
      const els = document.body.querySelectorAll("*");
      for (let i = 0; i < els.length; i++) {
        const el = els[i],
          id = DOMHandler.getIdentifier(el);
        if (!id || (el instanceof HTMLElement && el.dataset.pulsing === "true"))
          continue;
        if (!borderColors[id])
          borderColors[id] = getComputedStyle(el).borderColor;
        if (!fontColors[id]) fontColors[id] = getComputedStyle(el).color;
      }
    };
    setInterval(cycle, 2000);
    return this;
  }
  #questionsDefaultSetup(
    map: Map<Omit<roleType | "default", "undefined">, string>
  ): void {
    const def = map.get("default");
    if (!def) return;
    for (const innerMap of map.entries()) {
      const [sk, sv] = innerMap;
      if (sk === "default") continue;
      !sv && map.set(sk, def);
    }
  }
  get maps(): Map<any, Map<any, any>> {
    return this.#maps;
  }
}
