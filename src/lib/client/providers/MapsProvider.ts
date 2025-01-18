import { Provider, roleType } from "@/lib/definitions/foundations";
export default class MapsProvider implements Provider {
  #maps: Map<any, Map<any, any>>;
  constructor(_maps: Map<any, Map<any, any>>) {
    this.#maps = _maps;
  }
  public setup(): MapsProvider {
    for (const map of this.#maps.entries()) {
      if (!map?.length) continue;
      const [k] = map,
        rel = this.#maps.get(k);
      if (!rel) continue;
      this.#questionsDefaultSetup(rel);
    }
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
