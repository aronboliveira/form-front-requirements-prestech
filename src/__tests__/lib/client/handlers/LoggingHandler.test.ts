import LoggingHandler from "../../../../lib/client/handlers/LoggingHandler";
import DOMHandler from "../../../../lib/client/handlers/DOMHandler";
import DOMValidator from "../../../../lib/client/validators/DOMValidator";
import LoggingProcessor from "../../../../lib/client/processors/LoggingProcessor";
import ArrayLikeMapper from "../../../../lib/client/mappers/ArrayLikeMapper";
const originalConsole = { ...console };
describe("LoggingHandler", () => {
  let logSpy: jest.SpyInstance,
    warnSpy: jest.SpyInstance,
    errorSpy: jest.SpyInstance,
    groupSpy: jest.SpyInstance,
    groupEndSpy: jest.SpyInstance;
  beforeAll(() => {
    logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    warnSpy = jest.spyOn(console, "warn").mockImplementation(() => {});
    errorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
    groupSpy = jest
      .spyOn(console, "groupCollapsed")
      .mockImplementation(() => {});
    groupEndSpy = jest.spyOn(console, "groupEnd").mockImplementation(() => {});
  });
  afterAll(() => {
    logSpy.mockRestore();
    warnSpy.mockRestore();
    errorSpy.mockRestore();
    groupSpy.mockRestore();
    groupEndSpy.mockRestore();
    console.log = originalConsole.log;
    console.warn = originalConsole.warn;
    console.error = originalConsole.error;
    console.groupCollapsed = originalConsole.groupCollapsed;
    console.groupEnd = originalConsole.groupEnd;
  });
  beforeEach(jest.clearAllMocks);
  it("stores the elementId in constructor", () => {
    const handler = new LoggingHandler("myElement");
    expect(handler.elementId).toBe("myElement");
  });
  describe("logSubgroup()", () => {
    let handler: LoggingHandler;
    beforeEach(() => {
      handler = new LoggingHandler("testId");
    });
    it("logs an error if element is not found", () => {
      jest.spyOn(DOMHandler, "queryByUniqueName").mockReturnValue(null);
      handler.logSubgroup();
      expect(errorSpy).toHaveBeenCalledWith(
        "No element was found for the designated identifier."
      );
    });
    it("warns if evaluateElementPrototype returns NaN", () => {
      const mockEl = document.createElement("div");
      jest.spyOn(DOMHandler, "queryByUniqueName").mockReturnValue(mockEl);
      jest
        .spyOn(LoggingProcessor, "evaluateElementPrototype")
        .mockReturnValue(NaN);
      handler.logSubgroup();
      expect(warnSpy).toHaveBeenCalledWith(
        "It wasn't possible to defined the prototype case."
      );
    });
    it("case=0 => logs form elements, optionally filtering entriesOnly or printing objects", () => {
      const mockForm = document.createElement("form");
      const elInput = document.createElement("input");
      const elButton = document.createElement("button");
      mockForm.append(elInput, elButton);
      jest.spyOn(DOMHandler, "queryByUniqueName").mockReturnValue(mockForm);
      jest
        .spyOn(LoggingProcessor, "evaluateElementPrototype")
        .mockReturnValue(0);
      jest
        .spyOn(DOMValidator, "isEntry")
        .mockImplementation((el: any) => el === elInput);
      handler.logSubgroup(false, true);
      expect(logSpy).toHaveBeenCalledWith(elInput);
    });
    it("case=1 => logs <select>.options", () => {
      const mockSel = document.createElement("select");
      const opt1 = document.createElement("option");
      const opt2 = document.createElement("option");
      mockSel.append(opt1, opt2);
      jest.spyOn(DOMHandler, "queryByUniqueName").mockReturnValue(mockSel);
      jest
        .spyOn(LoggingProcessor, "evaluateElementPrototype")
        .mockReturnValue(1);
      handler.logSubgroup(true, false, true);
      expect(groupSpy).toHaveBeenCalledWith("select");
      expect(logSpy).toHaveBeenCalledWith("Entry 1");
      expect(logSpy).toHaveBeenCalledWith("OPTION");
    });
    it("calls ArrayLikeMapper.toKeyObject for each element's attributes if objects=true", () => {
      const mockEl = document.createElement("div");
      mockEl.id = "myDiv";
      jest.spyOn(DOMHandler, "queryByUniqueName").mockReturnValue(mockEl);
      jest
        .spyOn(LoggingProcessor, "evaluateElementPrototype")
        .mockReturnValue(-1);
      jest.spyOn(DOMValidator, "isEntry").mockReturnValue(false);
      const toKeyObjSpy = jest.spyOn(ArrayLikeMapper, "toKeyObject");
      handler.logSubgroup(true);
      expect(toKeyObjSpy).toHaveBeenCalledWith(
        mockEl.attributes,
        "name",
        "value"
      );
    });
  });
});
