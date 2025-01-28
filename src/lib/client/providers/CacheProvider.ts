import { nlEl, nlHtEl } from "@/lib/definitions/client/helpers";
import { Provider } from "@/lib/definitions/foundations";
import DOMValidator from "../validators/DOMValidator";
import DOMHandler from "../handlers/DOMHandler";
import clickToast from "@/components/bloc/toasts/ClickToast";
import ObjectHelper from "@/lib/helpers/ObjectHelper";
export default class CacheProvider implements Provider {
  private static _instance: CacheProvider;
  static persisters: { [k: string]: string } = {};
  refCache: {
    links: Map<string, nlEl>;
    persisters: { [k: string]: { [k: string]: string } };
  } | null;
  readonly #element: nlHtEl;
  readonly #elementIdf: string;
  constructor(_element: HTMLElement) {
    this.refCache = !CacheProvider._instance
      ? {
          links: new Map(),
          persisters: {},
        }
      : null;
    this.#element = !CacheProvider._instance ? _element : null;
    this.#elementIdf = !CacheProvider._instance
      ? _element.id || ("name" in _element && (_element.name as string)) || ""
      : "";
  }
  public static construct(_element: HTMLElement): CacheProvider {
    if (!CacheProvider._instance)
      CacheProvider._instance = new CacheProvider(_element);
    return CacheProvider._instance;
  }
  public setup(): CacheProvider {
    const allEls = Array.from(document.querySelectorAll("*"));
    this.#setupIdentifier();
    this.#setupLinks(allEls);
    if (document.body.dataset.checking === "true") return this;
    this.#checkForPersisters().then(ok => {
      const setPersist = (): void => {
        this.#setupPersisters(
          allEls.filter(e => DOMValidator.isEntry(e)) as HTMLElement[]
        );
      };
      if (
        !ok ||
        !(
          this.#element?.id ||
          (this.#element && "name" in this.#element && this.#element.name)
        )
      ) {
        setTimeout(setPersist, 300);
      }
      if (sessionStorage.getItem("notFirstSession")) {
        clickToast(
          navigator.language.startsWith("pt-")
            ? "Cache para campos do formulário detectado. Deseja preencher?"
            : "Cache for form fields detected. Do you want to fill them?"
        ).then(y => {
          if (y) {
            this.#fillPersisters(this.idf);
            this.#fillDelayedPersisters();
          }
          setTimeout(setPersist, 300);
        });
      }
      sessionStorage.setItem("notFirstSession", "true");
    });
    document.body.dataset.checking = "true";
    return this;
  }
  #setupIdentifier(): void {
    const auto = "_automatically_identified",
      count = [...document.querySelectorAll("*")].reduce(
        (acc, el) => (el.id.startsWith(auto) ? acc++ : acc),
        0
      );
    if (!this.#element?.id && this.#element)
      this.#element.id = `${auto}_${count}`;
  }
  #setupLinks(els: Element[]): void {
    try {
      for (const linked of els.filter(
        el =>
          el.classList.contains(".linked") &&
          el instanceof HTMLElement &&
          el.dataset.linkedto
      ))
        this.refCache?.links.set(
          linked.id,
          document.getElementById(
            (linked as HTMLElement).dataset.linkto ?? "NULL"
          )
        );
    } catch (e) {
      console.error(`Error setting up Cache Links:\n${(e as Error).message}`);
    }
  }
  async #checkForPersisters(): Promise<boolean> {
    try {
      if (
        !(
          this.#element?.id ||
          (this.#element && "name" in this.#element && this.#element.name)
        )
      )
        throw new DOMException("Failed to setup identifier", "SyntaxError");
      const idf = this.#element.id || (this.#element as HTMLFormElement).name,
        persistData = sessionStorage.getItem(idf);
      if (!persistData || !Object.values(persistData).some(v => v))
        return false;
      return true;
    } catch (e) {
      console.error(
        `Error executing check for persisters:\n${(e as Error).message}`
      );
      return false;
    }
  }
  #fillPersisters(idf: string): void {
    try {
      const data = sessionStorage.getItem(idf);
      if (!data) throw new ReferenceError(`Could not find element data`);
      const parsed = Object.fromEntries<string>(
        Object.entries(JSON.parse(data)).filter<[string, string]>(
          (entry): entry is [string, string] => typeof entry[1] === "string"
        )
      );
      if (!Object.keys(parsed).length)
        throw new Error(`Parsed object has no keys`);
      const els = Object.entries(parsed);
      for (let i = 0; i < els.length; i++) {
        const id = els[i][0];
        let v = els[i][1];
        if (!id) continue;
        id === "role" && sessionStorage.setItem("role", v);
        let entry = document.getElementById(id);
        if (!entry) entry = DOMHandler.queryByUniqueName(id);
        if (!entry) continue;
        if (DOMValidator.isDefaultEntry(entry)) {
          /* eslint-disable */
          DOMValidator.isDefaultCheckable(entry)
            ? (entry.checked = v === "true")
            : (entry.value = v);
        } else if (DOMValidator.isCustomEntry(entry)) {
          if (DOMValidator.isCustomCheckable(entry) && entry.dataset.checked)
            entry.dataset.checked = v;
          else entry.dataset.value = v;
          /* eslint-ensable */
        }
      }
    } catch (e) {
      console.error(
        `Error filling persistent entries:\n${(e as Error).message}`
      );
    }
  }
  #fillDelayedPersisters(): void {
    setTimeout(() => {
      try {
        const idf = "toBeDelayed";
        const data = sessionStorage.getItem(idf);
        if (!data) throw new ReferenceError(`Could not find element data`);
        const parsed = Object.fromEntries<string>(
          Object.entries(JSON.parse(data)).filter<[string, string]>(
            (entry): entry is [string, string] => typeof entry[1] === "string"
          )
        );
        if (!Object.keys(parsed).length)
          throw new Error(`Parsed object has no keys`);
        const els = Object.entries(parsed);
        for (let i = 0; i < els.length; i++) {
          const id = els[i][0];
          let v = els[i][1];
          if (!id) continue;
          let entry = document.getElementById(id);
          if (!entry) entry = DOMHandler.queryByUniqueName(id);
          if (!entry) continue;
          if (DOMValidator.isDefaultEntry(entry)) {
            /* eslint-disable */
            DOMValidator.isDefaultCheckable(entry)
              ? (entry.checked = v === "true")
              : (entry.value = v);
          } else if (DOMValidator.isCustomEntry(entry)) {
            if (DOMValidator.isCustomCheckable(entry) && entry.dataset.checked)
              entry.dataset.checked = v;
            else entry.dataset.value = v;
            /* eslint-ensable */
          }
        }
        sessionStorage.removeItem(idf);
      } catch (e) {
        console.error(
          `Error filling persistent delayed entries:\n${(e as Error).message}`
        );
      }
    }, 2_000);
  }
  #setupPersisters(els: HTMLElement[]): void {
    if (!this.#element)
      throw new DOMException(
        "Failed to find persistence provider element",
        "HierarchyRequestError"
      );
    if (!(this.#element.id || ("name" in this.#element && this.#element.name)))
      throw new DOMException("Failed to setup identifier", "SyntaxError");
    const idf = this.#element.id || (this.#element as HTMLFormElement).name;
    for (let i = 0; i < els.length; i++) {
      const el = els[i],
        elIdf = el.id || (("name" in el ? el.name : "") as string);
      if (!elIdf) continue;
      CacheProvider.persisters[elIdf] = DOMHandler.extractValue(el);
    }
    sessionStorage.setItem(idf, JSON.stringify(CacheProvider.persisters));
    const cycle = (): void => {
      const entries: Set<[string, string]> = new Set([
          ...Object.entries(CacheProvider.persisters),
        ]),
        addEntries = [...document.querySelectorAll("*")]
          .filter(
            e =>
              DOMValidator.isEntry(e) &&
              !new Set(...entries.keys()).has(DOMHandler.getIdentifier(e) ?? "")
          )
          .map(e => [
            DOMHandler.getIdentifier(e),
            DOMValidator.isDefaultEntry(e)
              ? e.value
              : (e as HTMLElement).dataset?.value || "",
          ]) as [string, string][];
      const arrEntries = [...entries, ...addEntries].map(p => {
        const clonableId = `${p[0].slice(
            0,
            p[0].indexOf("__") || p[0].length
          )}`,
          clones = document.querySelectorAll(`#${clonableId}`);
        if (clones.length !== 1) return p;
        const el = clones[0];
        if (!el?.isConnected) return p;
        return [clonableId, p[1]];
      });
      for (let j = 0; j < arrEntries.length; j++) {
        let el = document.getElementById(arrEntries[j][0]);
        if (!el) el = DOMHandler.queryByUniqueName(arrEntries[j][0]);
        if (!el) continue;
        CacheProvider.persisters[arrEntries[j][0]] =
          DOMHandler.extractValue(el);
      }
      sessionStorage.setItem(idf, JSON.stringify(CacheProvider.persisters));
      const c = "shouldCleanUp";
      if (addEntries.length) {
        if (!sessionStorage.getItem(c)) sessionStorage.setItem(c, "true");
        setTimeout(() => {
          if (sessionStorage.getItem(c) !== "true" || !arrEntries?.length)
            return;
          const persisters = sessionStorage.getItem(idf);
          if (!persisters) return;
          const parsed = ObjectHelper.JSONSafeParse(
            persisters
          ) as typeof CacheProvider.persisters;
          if (!parsed) return;
          const toBeCleaned = [];
          for (const [id] of entries) {
            const e = DOMHandler.queryByUniqueName(id);
            if (!e) continue;
            toBeCleaned.push(id);
          }
          for (const n of toBeCleaned) {
            if (!document.getElementById(n)) delete parsed[n];
          }
          sessionStorage.setItem(idf, JSON.stringify(parsed));
          sessionStorage.removeItem(c);
        }, 5_000);
      }
      setTimeout(() => {
        const toBeDelayed = [];
        for (const [id, v] of entries) {
          const e = DOMHandler.queryByUniqueName(id);
          if (!e?.isConnected) continue;
          if (
            (e instanceof HTMLInputElement && e.type === "range") ||
            (DOMValidator.isEntry(e) && e.closest(".fsRanged"))
          ) {
            toBeDelayed.push([id, v]);
            if (
              e instanceof HTMLInputElement &&
              e.type === "range" &&
              !e.dataset.delayresolved
            )
              e.dataset.delayed = "true";
          }
        }
        sessionStorage.setItem(
          "toBeDelayed",
          JSON.stringify(Object.fromEntries(toBeDelayed))
        );
      }, 1_000);
    };
    setInterval(cycle, 1000);
  }
  public verifyLinkBinding(id: string): boolean {
    const linkedTo = this.refCache?.links.get(id);
    if (
      !linkedTo ||
      (linkedTo instanceof HTMLElement && !linkedTo.isConnected)
    ) {
      const linked = document.getElementById(id);
      if (!linked) return false;
      this.refCache?.links.set(
        id,
        document.getElementById(
          (linked as HTMLElement).dataset.linkto ?? "NULL"
        )
      );
    }
    return !linkedTo ? false : true;
  }
  get element(): nlHtEl {
    return this.#element;
  }
  get idf(): string {
    return this.#elementIdf;
  }
}
