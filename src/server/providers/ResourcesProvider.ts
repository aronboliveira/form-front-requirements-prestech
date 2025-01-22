import { Provider } from "@/lib/definitions/foundations";
import { Controllers } from "@/lib/server/container";
export default class ResourcesProvider implements Provider {
  static #resources: number = 1024;
  static sharedResources: { [k: string]: number };
  constructor(_resource: 1024) {
    Object.defineProperty(this, "#resources", {
      value: _resource,
      writable: false,
      configurable: false,
    });
  }
  setup(): ResourcesProvider {
    try {
      if (!Controllers?.length)
        throw TypeError(`Failed to validate the Controllers array`);
      for (const c of Controllers) {
        let proposed =
          (ResourcesProvider.#resources / Controllers.length) * (c.prio * 0.1);
        if (!Number.isFinite(proposed)) proposed = 102;
        if (proposed > ResourcesProvider.#resources * 0.333)
          proposed = ResourcesProvider.#resources * 0.333;
        ResourcesProvider.sharedResources[c.constructor.name] = proposed;
      }
      return this;
    } catch (e) {
      console.error(
        `Error seting up provision of request resources positions:\n${
          (e as Error).message
        }`
      );
      return this;
    }
  }
}
