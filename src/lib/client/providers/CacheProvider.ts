import { nlEl } from "@/lib/definitions/client/helpers";
export default class CacheProvider {
  refCache: {
    links: Map<string, nlEl>;
  };
  constructor() {
    this.refCache = {
      links: new Map(),
    };
  }
  setup(): void {
    const allEls = Array.from(document.querySelectorAll("*"));
    try {
      for (const linked of allEls.filter(
        el =>
          el.classList.contains(".linked") &&
          el instanceof HTMLElement &&
          el.dataset.linkedto
      ))
        this.refCache.links.set(
          linked.id,
          document.getElementById(
            (linked as HTMLElement).dataset.linkto ?? "NULL"
          )
        );
    } catch (e) {
      console.error(`Error setting up Cache:\n${(e as Error).message}`);
    }
  }
  verifyLinkBinding(id: string): boolean {
    const linkedTo = this.refCache.links.get(id);
    if (
      !linkedTo ||
      (linkedTo instanceof HTMLElement && !linkedTo.isConnected)
    ) {
      const linked = document.getElementById(id);
      if (!linked) return false;
      this.refCache.links.set(
        id,
        document.getElementById(
          (linked as HTMLElement).dataset.linkto ?? "NULL"
        )
      );
    }
    return !linkedTo ? false : true;
  }
}
