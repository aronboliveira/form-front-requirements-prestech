import LoggingProcessor from "../processors/LoggingProcessor";
import DOMValidator from "../validators/DOMValidator";
import DOMHandler from "./DOMHandler";
export default class LoggingHandler {
  elementId: string;
  constructor(elementId: string) {
    this.elementId = elementId;
  }
  logSubgroup(objects: boolean = false, entriesOnly: boolean = false) {
    const logged = DOMHandler.queryByUniqueName(this.elementId);
    if (!logged)
      return console.error(
        `No element was found for the designated identifier.`
      );
    const _case = LoggingProcessor.evaluateElementPrototype(logged);
    if (Number.isNaN(_case)) {
      console.warn(`It wasn't possible to defined the prototype case.`);
      return;
    }
    const logGroupObjs = (list: Element[]) => {
        list.forEach(el => {
          console.log(DOMHandler.getIdentifier(el) || el.tagName);
          console.log({
            constructor: el.constructor.name,
            attributes: Array.from(el.attributes).reduce((ac, at) => {
              (ac as any)[at.name] = at.value;
              return ac;
            }, {}),
            properties: Object.getOwnPropertyNames(el).reduce((ac, p) => {
              try {
                (ac as any)[p] = (el as any)[p];
              } catch (e) {
                (ac as any)[p] = "Unaccessible";
              }
              return ac;
            }, {} as Record<string, any>),
          });
        });
      },
      idf = logged.id || logged.tagName;
    switch (_case) {
      case 0:
        console.groupCollapsed(idf);
        !objects
          ? entriesOnly
            ? console.log(
                Array.from((logged as HTMLFormElement).elements).filter(e =>
                  DOMValidator.isEntry(e)
                )
              )
            : console.log(Array.from((logged as HTMLFormElement).elements))
          : logGroupObjs(
              entriesOnly
                ? Array.from((logged as HTMLFormElement).elements).filter(e =>
                    DOMValidator.isEntry(e)
                  )
                : Array.from((logged as HTMLFormElement).elements)
            );
        console.groupEnd();
        break;
      case 1:
        console.groupCollapsed(idf);
        for (const e of (logged as HTMLSelectElement).options) {
          !objects
            ? console.log(e)
            : logGroupObjs(Array.from((logged as HTMLSelectElement).options));
        }
        console.groupEnd();
        break;
      case 2:
        console.groupCollapsed(idf);
        if (!(logged as HTMLInputElement).labels) {
          console.error(`No labels available`);
          break;
        }
        for (const e of (logged as HTMLInputElement).labels!) {
          !objects
            ? console.log(e)
            : logGroupObjs(Array.from((logged as HTMLInputElement).labels!));
        }
        console.groupEnd();
        break;
      case 3:
        console.groupCollapsed(idf);
        for (const e of (logged as HTMLUListElement).getElementsByTagName(
          "li"
        )) {
          !objects
            ? console.log(e)
            : logGroupObjs(
                Array.from(
                  (logged as HTMLUListElement).getElementsByTagName("li")
                )
              );
        }
        console.groupEnd();
        break;
      case 4:
        console.groupCollapsed(idf);
        for (const e of (logged as HTMLOptGroupElement).getElementsByTagName(
          "option"
        )) {
          !objects
            ? console.log(e)
            : logGroupObjs(
                Array.from([
                  ...(logged as HTMLDListElement).getElementsByTagName("dt"),
                  ...(logged as HTMLDListElement).getElementsByTagName("dd"),
                ])
              );
        }
        console.groupEnd();
        break;
      case 5:
        console.groupCollapsed(idf);
        for (const e of (logged as HTMLOptGroupElement).getElementsByTagName(
          "option"
        )) {
          !objects
            ? console.log(e)
            : logGroupObjs(
                Array.from(
                  (logged as HTMLSelectElement).getElementsByTagName("option")
                )
              );
        }
        console.groupEnd();
        break;
      default:
        console.log(logged.children);
    }
  }
}
