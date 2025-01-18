import ArrayLikeMapper from "../mappers/ArrayLikeMapper";
import LoggingProcessor from "../processors/LoggingProcessor";
import DOMValidator from "../validators/DOMValidator";
import DOMHandler from "./DOMHandler";
export default class LoggingHandler {
  elementId: string;
  constructor(elementId: string) {
    this.elementId = elementId;
  }
  logSubgroup(
    objects: boolean = false,
    entriesOnly: boolean = false,
    showProperties: boolean = false
  ) {
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
    const idf = logged.id || logged.tagName,
      logGroupObjs = (list: Element[]) => {
        list.forEach((el, i, arr) => {
          console.log(`Entry ${i + 1}`);
          console.log(DOMHandler.getIdentifier(el) || el.tagName);
          console.log(`Constructor: ${el.constructor.name}`);
          console.log(
            `Attributes: ${JSON.stringify(
              ArrayLikeMapper.toKeyObject(el.attributes, "name", "value")
            )}`
          );
          showProperties &&
            console.log(
              `Properties: ${ArrayLikeMapper.toRecord(
                Object.getOwnPropertyNames(el),
                el
              )}`
            );
          if (i === arr.length - 1) {
            console.log("Final Array");
            console.log(arr);
          }
          console.log("------------");
        });
      },
      logGroup = (e: any, i: number, arr: any[]) => {
        console.log(`Entry ${i + 1}`);
        console.log(e);
        if (i === arr.length - 1) {
          console.log("Final Array");
          console.log(arr);
        }
        console.log("------------");
      };
    function processElements<T extends Element>(
      idf: string,
      elements: Iterable<T>,
      objects: boolean,
      logGroupObjs: (elements: T[]) => void
    ) {
      console.groupCollapsed(idf);
      const elementsArray = Array.from(elements);
      if (objects) logGroupObjs(elementsArray);
      else for (const element of elementsArray) console.log(element);
      console.groupEnd();
    }
    switch (_case) {
      case 0:
        console.groupCollapsed(idf);
        !objects
          ? entriesOnly
            ? Array.from((logged as HTMLFormElement).elements)
                .filter(e => DOMValidator.isEntry(e))
                .forEach((e, i, arr) => logGroup(e, i, arr))
            : Array.from((logged as HTMLFormElement).elements).forEach(
                (e, i, arr) => logGroup(e, i, arr)
              )
          : logGroupObjs(
              entriesOnly
                ? Array.from((logged as HTMLFormElement).elements).filter(e =>
                    DOMValidator.isEntry(e)
                  )
                : Array.from((logged as HTMLFormElement).elements)
            );
        console.groupEnd();
        break;
      case 1: {
        const elements = (logged as HTMLSelectElement).options;
        processElements(idf, elements, objects, logGroupObjs);
        break;
      }
      case 2: {
        const labels = (logged as HTMLInputElement).labels;
        if (!labels) {
          console.groupCollapsed(idf);
          console.error(`No labels available`);
          console.groupEnd();
          break;
        }
        processElements(idf, labels, objects, logGroupObjs);
        break;
      }
      case 3: {
        const elements = (logged as HTMLUListElement).getElementsByTagName(
          "li"
        );
        processElements(idf, elements, objects, logGroupObjs);
        break;
      }
      case 4: {
        const dtElements = (logged as HTMLDListElement).getElementsByTagName(
          "dt"
        );
        const ddElements = (logged as HTMLDListElement).getElementsByTagName(
          "dd"
        );
        const combinedElements = Array.from([...dtElements, ...ddElements]);
        processElements(idf, combinedElements, objects, logGroupObjs);
        break;
      }
      case 5: {
        const elements = (logged as HTMLOptGroupElement).getElementsByTagName(
          "option"
        );
        processElements(idf, elements, objects, logGroupObjs);
        break;
      }
      default:
        console.groupCollapsed(idf);
        !objects
          ? entriesOnly
            ? Array.from((logged as Element).children)
                .filter(e => DOMValidator.isEntry(e))
                .forEach((e, i, arr) => logGroup(e, i, arr))
            : Array.from((logged as Element).children).forEach((e, i, arr) =>
                logGroup(e, i, arr)
              )
          : logGroupObjs(
              entriesOnly
                ? Array.from((logged as Element).children).filter(e =>
                    DOMValidator.isEntry(e)
                  )
                : Array.from((logged as Element).children)
            );
        console.groupEnd();
        break;
    }
  }
}
