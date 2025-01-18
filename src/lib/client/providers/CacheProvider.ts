import { nlEl, nlHtEl } from "@/lib/definitions/client/helpers";
import { Provider } from "@/lib/definitions/foundations";
import DOMValidator from "../validators/DOMValidator";
import DOMHandler from "../handlers/DOMHandler";
import clickToast from "@/components/bloc/toasts/ClickToast";
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
          y && this.#fillPersisters(this.idf);
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
          DOMValidator.isDefaultCheckable(entry)
            ? (entry.checked = v === "true")
            : (entry.value = v);
        } else if (DOMValidator.isCustomEntry(entry)) {
          if (DOMValidator.isCustomCheckable(entry) && entry.dataset.checked)
            entry.dataset.checked = v;
          else entry.dataset.value = v;
        }
      }
    } catch (e) {
      console.error(
        `Error filling persistent entries:\n${(e as Error).message}`
      );
    }
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
      const entries = Object.entries(CacheProvider.persisters);
      for (let j = 0; j < entries.length; j++) {
        let el = document.getElementById(entries[j][0]);
        if (!el) el = DOMHandler.queryByUniqueName(entries[j][0]);
        if (!el) continue;
        CacheProvider.persisters[entries[j][0]] = DOMHandler.extractValue(el);
      }
      sessionStorage.setItem(idf, JSON.stringify(CacheProvider.persisters));
    };
    setInterval(cycle, 2000);
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
