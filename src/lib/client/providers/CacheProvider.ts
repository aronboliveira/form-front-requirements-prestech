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
  public setup(): void {
    const allEls = Array.from(document.querySelectorAll("*"));
    this.#setupIdentifier();
    this.#setupLinks(allEls);
    if (document.body.dataset.checking === "true") return;
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
// export const providers: { [k: string]: DataProvider | voidVal } = {
//   globalDataProvider: undefined,
// };
// const clearFlags: { [k: string]: boolean } = {};
// export class DataProvider {
//   #sessionDataState: { [key: string]: any };
//   constructor(_dataSessionState: { [key: string]: any }) {
//     this.#sessionDataState = _dataSessionState;
//     addEventListener("beforeunload", () => {
//       this.#sessionDataState = {};
//       [
//         "formSched",
//         "formAddStud",
//         "formAddProf",
//         "regstPacDlg",
//         "CPFFillerDiv",
//         "formAnamGId",
//         "formOdont",
//         "formEdFis",
//       ].forEach(form => {
//         if (sessionStorage.getItem(form)) {
//           const prevPath = location.pathname;
//           setTimeout(
//             () =>
//               !location.pathname.includes(prevPath) &&
//               sessionStorage.removeItem(form),
//             1000
//           );
//         }
//       });
//     });
//   }
//   public initPersist(
//     element: HTMLElement,
//     provider: DataProvider | voidVal = providers.globalDataProvider,
//     userClass: privilege = "student"
//   ): void {
//     const checkTimer = 500;
//     provider ??= new DataProvider(element);
//     setTimeout(() => {
//       provider ??= new DataProvider(element);
//       const storageTimeout = setTimeout(() => {
//         if (!(document.getElementById(`${element.id}`) || !element)) {
//           clearTimeout(storageTimeout);
//           return;
//         }
//         clearFlags[`${element.id}`] = true;
//         this.#evaluatePersistence(element);
//         const persistInterv = setInterval(interv => {
//           if (
//             !clearFlags[`${element.id}`] ||
//             !this.#checkForm(element.id, interv)
//           )
//             setTimeout(() => {
//               clearInterval(interv);
//               return;
//             }, 200);
//           else this.#evaluatePersistence(element);
//         }, 1000);
//         if (
//           element.id === "formSched" ||
//           element.id === "formAddStud" ||
//           element.id === "formAddProf" ||
//           element.id === "regstPacDlg" ||
//           element.id === "CPFFillerDiv"
//         ) {
//           (() => {
//             try {
//               const panelSelect = document.getElementById("coordPanelSelect");
//               if (!(panelSelect instanceof HTMLSelectElement)) return;
//               let isTargPanelRendered = true;
//               const handleSessionPanelChange = (elementId: string): void => {
//                 try {
//                   const scope = document.getElementById(elementId);
//                   if (!(scope instanceof HTMLElement)) {
//                     clearInterval(persistInterv);
//                     return;
//                   }
//                   const persisters = sessionStorage.getItem(elementId);
//                   if (!persisters) return;
//                   this.#initSelectParsing(
//                     document.getElementById(elementId)!,
//                     elementId
//                   );
//                 } catch (err) {
//                   return;
//                 }
//                 !this.#checkForm(elementId)
//                   ? (isTargPanelRendered = false)
//                   : (isTargPanelRendered = true);
//                 !isTargPanelRendered &&
//                   ((): void => {
//                     panelSelect.removeEventListener("change", () =>
//                       handleSessionPanelChange(elementId)
//                     );
//                   })();
//               };
//               panelSelect.addEventListener("change", () =>
//                 handleSessionPanelChange(element.id)
//               );
//             } catch (err) {
//               return;
//             }
//           })();
//         }
//       }, checkTimer);
//       setTimeout(() => {
//         if (sessionStorage[element.id]) {
//           provider ??= new DataProvider(element);
//           provider.#parseSessionStorage(element, element.id, userClass);
//         }
//       }, checkTimer * 2);
//     }, 300);
//   }
//   #checkForm(elementId: string, storageInterval?: NodeJS.Timer): boolean {
//     if (!document.getElementById(elementId)) {
//       //@ts-ignore
//       storageInterval && clearInterval(storageInterval);
//       clearFlags[`${elementId}`] = false;
//       return false;
//     }
//     return true;
//   }
//   #evaluatePersistence(scope: queryableNode = document): {
//     [key: string]: string;
//   } {
//     if (
//       scope instanceof HTMLElement &&
//       sessionStorage.getItem(scope.id) &&
//       scope.dataset.start === "true"
//     ) {
//       this.#parseSessionStorage(scope, scope.id);
//       delete scope.dataset.start;
//     }
//     this.#sessionDataState = DataProvider.#persistSessionEntries(
//       scope as HTMLElement | Document | undefined
//     );
//     if (scope instanceof HTMLElement)
//       sessionStorage.setItem(
//         `${scope.id}`,
//         JSON.stringify(this.#sessionDataState)
//       );
//     return this.#sessionDataState;
//   }
//   static #persistSessionEntries(scope: queryableNode = document): {
//     [k: string]: string;
//   } {
//     const persisters = [
//       ...(scope?.querySelectorAll(".ssPersist") ?? []),
//       ...(scope?.querySelectorAll(".lcPersist") ?? []),
//     ];
//     const sessionData: { [key: string]: string } = {};
//     for (const persister of persisters) {
//       if (
//         (persister instanceof HTMLInputElement &&
//           !(
//             persister.type === "radio" ||
//             persister.type === "checkbox" ||
//             persister.type === "button" ||
//             persister.type === "reset" ||
//             persister.type === "submit"
//           )) ||
//         persister instanceof HTMLTextAreaElement ||
//         persister instanceof HTMLSelectElement
//       )
//         sessionData[`${persister.id || persister.name}`] = persister.value;
//       else if (
//         persister instanceof HTMLInputElement &&
//         (persister.type === "radio" || persister.type === "checkbox")
//       )
//         sessionData[`${persister.id || persister.name}`] =
//           persister.checked.toString();
//       else if (persister instanceof HTMLElement) {
//         sessionData[
//           `${
//             persister.id ||
//             (persister instanceof HTMLSlotElement && persister.name)
//           }`
//         ] = persister.innerHTML;
//       }
//     }
//     return sessionData;
//   }
//   #parseSessionStorage(
//     scope: queryableNode = document,
//     scopeRef: string,
//     userClass: string = "student"
//   ): void {
//     const persisters =
//       sessionStorage.getItem(scopeRef) ||
//       JSON.stringify(this.#sessionDataState);
//     if (persisters) {
//       Object.entries(JSON.parse(persisters)).forEach(entry => {
//         const fetchedEl =
//           scope?.querySelector(`#${entry[0]}`) ||
//           document.querySelector(`#${entry[0]}`);
//         if (
//           (fetchedEl instanceof HTMLInputElement &&
//             !(
//               fetchedEl.type === "radio" ||
//               fetchedEl.type === "checkbox" ||
//               fetchedEl.type === "button" ||
//               fetchedEl.type === "reset" ||
//               fetchedEl.type === "submit"
//             )) ||
//           fetchedEl instanceof HTMLTextAreaElement ||
//           fetchedEl instanceof HTMLSelectElement
//         ) {
//           fetchedEl.value = entry[1] as string;
//         } else if (
//           fetchedEl instanceof HTMLInputElement &&
//           (fetchedEl.type === "radio" || fetchedEl.type === "checkbox")
//         ) {
//           entry[1] === "true" || entry[1] === true
//             ? (fetchedEl.checked = true)
//             : (fetchedEl.checked = false);
//         } else if (fetchedEl instanceof HTMLElement) {
//           fetchedEl.innerHTML = entry[1] as string;
//           const monthSelector = document.getElementById("monthSelector");
//           (monthSelector instanceof HTMLSelectElement ||
//             monthSelector instanceof HTMLInputElement) &&
//             userClass &&
//             handleScheduleChange(
//               monthSelector,
//               document.getElementById("tbSchedule"),
//               userClass,
//               panelFormsVariables.isAutoFillMonthOn
//             );
//         }
//       });
//     }
//   }
//   #initSelectParsing(scope: queryableNode = document, scopeRef: string): void {
//     const persisters = sessionStorage.getItem(scopeRef);
//     if (persisters) {
//       Object.entries(JSON.parse(persisters)).forEach(entry => {
//         const fetchedEl =
//           scope?.querySelector(`#${entry[0]}`) ||
//           document.querySelector(`#${entry[0]}`);
//         if (
//           (fetchedEl instanceof HTMLInputElement &&
//             !(
//               fetchedEl.type === "radio" ||
//               fetchedEl.type === "checkbox" ||
//               fetchedEl.type === "button" ||
//               fetchedEl.type === "reset" ||
//               fetchedEl.type === "submit"
//             )) ||
//           fetchedEl instanceof HTMLTextAreaElement ||
//           fetchedEl instanceof HTMLSelectElement
//         ) {
//           fetchedEl.value = entry[1] as string;
//         } else if (
//           fetchedEl instanceof HTMLInputElement &&
//           (fetchedEl.type === "radio" || fetchedEl.type === "checkbox")
//         ) {
//           entry[1] === "true" || entry[1] === true
//             ? (fetchedEl.checked = true)
//             : (fetchedEl.checked = false);
//         } else if (fetchedEl instanceof HTMLElement) {
//           fetchedEl.innerHTML = entry[1] as string;
//           if (fetchedEl.classList.contains("consSlot")) {
//             const aptBtn = fetchedEl.querySelector(".appointmentBtn");
//             if (aptBtn) {
//               aptBtn.addEventListener("click", ev =>
//                 handleAptBtnClick(ev as MouseEvent, user.userClass)
//               );
//             }
//             const user = localStorage.getItem("activeUser")
//               ? JSON.parse(localStorage.getItem("activeUser")!)
//               : defUser;
//             if (
//               user.userClass === "coordenador" ||
//               user.userClass === "supervisor"
//             ) {
//               const eraser = fetchedEl.querySelector(".btn-close");
//               if (eraser) {
//                 eraser.addEventListener("click", () => {
//                   const relCel = eraser.closest("slot");
//                   if (
//                     relCel instanceof HTMLElement &&
//                     eraser instanceof HTMLElement
//                   )
//                     replaceBtnSlot(
//                       relCel.querySelector("[id*=appointmentBtn]"),
//                       relCel
//                     );
//                 });
//               }
//               const dayCheck = fetchedEl.querySelector(".apptCheck");
//               if (dayCheck) {
//                 dayCheck.addEventListener("change", () => {
//                   if (
//                     dayCheck instanceof HTMLInputElement &&
//                     (dayCheck.type === "checkbox" || dayCheck.type === "radio")
//                   )
//                     checkConfirmApt(dayCheck);
//                 });
//                 verifyAptCheck(dayCheck);
//               }
//             }
//           }
//         }
//       });
//     }
//   }
// }
