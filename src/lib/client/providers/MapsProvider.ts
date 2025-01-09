import { Provider, roleType } from "@/lib/definitions/foundations";
export default class MapsProvider implements Provider {
    constructor(public maps: Map<any, Map<any, any>>) {
        this.maps = maps;
    }
    public setup(): this {
        for (const map of this.maps.entries()) {
            if (!map?.length) continue;
            const [k] = map,
            rel = this.maps.get(k);
            if (!rel) continue;
            if (k === 'roleQuestions') this.#questionsDefaultSetup(rel);
        }
        return this;
    }
    #questionsDefaultSetup(map: Map<Omit<roleType | 'default', 'undefined'>, string>): void {
        const def = map.get('default');
        if (!def) return;
        for (const innerMap of map.entries()) {
            const [sk, sv] = innerMap;
            if (sk === 'default') continue;
            !sv && map.set(sk, def);
        }
    }
}