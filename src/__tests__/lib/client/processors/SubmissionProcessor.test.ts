import SubmissionProcessor from "../../../../lib/client/processors/SubmissionProcessor";
import DOMValidator from "../../../../lib/client/validators/DOMValidator";
import DOMHandler from "../../../../lib/client/handlers/DOMHandler";
import MathHandler from "../../../../lib/client/handlers/MathHandler";
jest.mock("../path/to/DOMValidator", () => ({
  isDefaultEntry: jest.fn(),
  isDefaultWritableInput: jest.fn(),
}));
jest.mock("../path/to/DOMHandler", () => ({
  verifyValidity: jest.fn(),
  extractValue: jest.fn(),
  getIdentifier: jest.fn(),
}));
jest.mock("../path/to/MathHandler", () => ({
  hexToDecimal: jest.fn(),
  parseNotNaN: jest.fn(),
}));
jest.mock("../path/to/StyleHandler", () => ({
  pulseColor: jest.fn(),
}));
jest.mock("react-hot-toast", () => ({
  toast: {
    error: jest.fn(),
  },
}));
describe("SubmissionProcessor", () => {
  let processor: SubmissionProcessor;
  beforeEach(() => {
    processor = new SubmissionProcessor();
    jest.clearAllMocks();
  });
  describe("constructor", () => {
    it("creates a singleton instance", () => {
      const instance1 = new SubmissionProcessor();
      const instance2 = new SubmissionProcessor();
      expect(instance1).toBe(instance2);
    });
  });
  describe("process()", () => {
    it("returns 1 if #evaluateDefaultEntry() returns true", () => {
      (DOMValidator.isDefaultEntry as unknown as jest.Mock).mockReturnValue(
        true
      );
      jest
        .spyOn<any, any>(processor, "#evaluateDefaulEntry")
        .mockReturnValue(true);
      const result = processor.process(document.createElement("input"));
      expect(result).toBe(1);
    });
    it("returns 0 if #evaluateDefaultEntry() returns false", () => {
      (DOMValidator.isDefaultEntry as unknown as jest.Mock).mockReturnValue(
        true
      );
      jest
        .spyOn<any, any>(processor, "#evaluateDefaulEntry")
        .mockReturnValue(false);
      const result = processor.process(document.createElement("input"));
      expect(result).toBe(0);
    });
    it("returns 1 if #evaluateCustomEntry() returns true", () => {
      (DOMValidator.isDefaultEntry as unknown as jest.Mock).mockReturnValue(
        false
      );
      jest
        .spyOn<any, any>(processor, "#evaluateCustomEntry")
        .mockReturnValue(true);
      const result = processor.process(document.createElement("div"));
      expect(result).toBe(1);
    });
    it("returns -1 for unsupported elements", () => {
      (DOMValidator.isDefaultEntry as unknown as jest.Mock).mockReturnValue(
        false
      );
      jest
        .spyOn<any, any>(processor, "#evaluateCustomEntry")
        .mockReturnValue(undefined);
      const result = processor.process(document.createElement("span"));
      expect(result).toBe(-1);
    });
  });
  describe("#evaluateDefaultEntry()", () => {
    it("calls #evaluateDefaultInput() for input elements", () => {
      const input = document.createElement("input");
      jest
        .spyOn<any, any>(processor, "#evaluateDefaultInput")
        .mockReturnValue(true);
      expect(processor["#evaluateDefaultInput"]).toHaveBeenCalledWith(input);
    });
    it("calls #evaluateSelect() for select elements", () => {
      const select = document.createElement("select");
      jest.spyOn<any, any>(processor, "#evaluateSelect").mockReturnValue(true);
      expect(processor["#evaluateSelect"]).toHaveBeenCalledWith(select);
    });
    it("calls #evaluateTextArea() for textarea elements", () => {
      const textarea = document.createElement("textarea");
      jest
        .spyOn<any, any>(processor, "#evaluateTextArea")
        .mockReturnValue(true);
      expect(processor["#evaluateTextArea"]).toHaveBeenCalledWith(textarea);
    });
  });
  describe("#evaluateDefaultInput()", () => {
    it("handles checkbox inputs", () => {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      jest
        .spyOn<any, any>(processor, "#evaluateCheckable")
        .mockReturnValue(true);
      expect(processor["#evaluateCheckable"]).toHaveBeenCalledWith(checkbox);
    });
    it("calls DOMHandler.verifyValidity for writable inputs", () => {
      const input = document.createElement("input");
      (
        DOMValidator.isDefaultWritableInput as unknown as jest.Mock
      ).mockReturnValue(true);
      (DOMHandler.verifyValidity as jest.Mock).mockReturnValue(true);
      expect(DOMHandler.verifyValidity).toHaveBeenCalledWith(input);
    });
    it("handles color inputs with min and max validation", () => {
      const colorInput = document.createElement("input");
      colorInput.type = "color";
      colorInput.dataset.min = "#000000";
      colorInput.dataset.max = "#FFFFFF";
      (MathHandler.hexToDecimal as jest.Mock).mockImplementation(hex => {
        return hex === "#000000" ? 0 : 16777215;
      });
      expect(MathHandler.hexToDecimal).toHaveBeenCalledWith("#000000");
      expect(MathHandler.hexToDecimal).toHaveBeenCalledWith("#FFFFFF");
    });
  });
  describe("#evaluateFileInput()", () => {
    it("validates file input constraints", () => {
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.dataset.maxfiles = "2";
      Object.defineProperty(fileInput, "files", {
        value: [new File([], "file1.txt"), new File([], "file2.txt")],
      });
      (MathHandler.parseNotNaN as jest.Mock).mockReturnValue(2);
      expect(MathHandler.parseNotNaN).toHaveBeenCalledWith("2", 1, "int");
    });
  });
  describe("#evaluateCustomEntry()", () => {
    it("validates custom entries with dataset constraints", () => {
      const customEl = document.createElement("div");
      customEl.dataset.minlength = "5";
      (DOMHandler.extractValue as jest.Mock).mockReturnValue("12345");
      (MathHandler.parseNotNaN as jest.Mock).mockReturnValue(5);
      expect(DOMHandler.extractValue).toHaveBeenCalledWith(customEl);
      expect(MathHandler.parseNotNaN).toHaveBeenCalledWith("5", 0, "int");
    });
  });
});
