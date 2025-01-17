import LoggingProcessor from "../processors/LoggingProcessor";
import DOMHandler from "./DOMHandler";

export default class LoggingHandler {
  elementId: string;
  constructor(elementId: string) {
    this.elementId = elementId;
  }
  logSubgroup() {
    const logged = DOMHandler.queryByUniqueName(this.elementId);
    if (!logged)
      return console.error(
        `No element was found for the designated identifier.`
      );
    const _case = LoggingProcessor.evaluateElementPrototype(logged);
    if (Number.isNaN(_case)) {
      //log error
      return;
    }
    switch (_case) {
      //handle by case
      default:
      //log .children
    }
  }
}
