import SubmissionHandler from "../../../../lib/client/handlers/SubmissionHandler";
import toast from "react-hot-toast";
import DOMValidator from "../../../../lib/client/validators/DOMValidator";
import DOMHandler from "../../../../lib/client/handlers/DOMHandler";
describe("construct", () => {
  it("returns an existing instance if present, otherwise creates a new one", () => {
    const form = document.createElement("form");
    const first = SubmissionHandler.construct(form);
    const second = SubmissionHandler.construct(form);
    expect(first).toBeInstanceOf(SubmissionHandler);
    expect(second).toBe(first);
  });
});
describe("SubmissionHandler instance methods", () => {
  let handler: any;
  let formEl: HTMLFormElement;
  beforeEach(() => {
    formEl = document.createElement("form");
    handler = new SubmissionHandler(formEl, undefined);
    jest.clearAllMocks();
  });
  describe("canSubmit", () => {
    it("returns true if attempts <= 4", () => {
      const el = document.createElement("button");
      expect(handler.canSubmit(el)).toBe(true);
      expect(handler.canSubmit(el)).toBe(true);
      expect(handler.canSubmit(el)).toBe(true);
      expect(handler.canSubmit(el)).toBe(true);
    });
    it("returns false + disables caller if attempts > 4", () => {
      const el = document.createElement("button");
      for (let i = 0; i < 4; i++) {
        expect(handler.canSubmit(el)).toBe(true);
      }
      expect(handler.canSubmit(el)).toBe(false);
      expect(el.disabled).toBe(true);
      expect(toast).toHaveBeenCalled();
    });
  });
  describe("submit", () => {
    it("returns { ok: false, cause: 'Form noValidate ...' } if form.noValidate = true", () => {
      formEl.noValidate = true;
      const result = handler.submit("/api");
      expect(result.ok).toBe(false);
      expect(result.cause).toMatch(/noValidate/);
    });
    it("fails if required entries are missing", () => {
      const spyScan = jest.spyOn(handler, "scan").mockReturnValue({
        successful: [],
        failed: [
          Object.assign(document.createElement("input"), { required: true }),
        ],
        successfulCustom: [],
        failedCustom: [],
      });
      const result = handler.submit("/api");
      expect(result.ok).toBe(false);
      expect(result.cause).toMatch(/Failed to validate/);
      spyScan.mockRestore();
    });
    it("submits if scan is successful, calls #sendToServerWithAxios or #fetchToServer", () => {
      const spyScan = jest.spyOn(handler, "scan").mockReturnValue({
        successful: [document.createElement("input")],
        failed: [],
        successfulCustom: [],
        failedCustom: [],
      });
      (handler as any)["#sendToServerWithAxios"] = jest.fn();
      (handler as any)["#fetchToServer"] = jest.fn();
      const result = handler.submit("/api", true);
      expect((handler as any)["#sendToServerWithAxios"]).toHaveBeenCalled();
      expect(result.ok).toBe(true);
      handler.submit("/api", false);
      expect((handler as any)["#fetchToServer"]).toHaveBeenCalled();
      spyScan.mockRestore();
    });
  });
  describe("scan", () => {
    it("returns splitted arrays of successful/failed for default/custom entries", () => {
      const input1 = document.createElement("input");
      input1.id = "input1";
      const input2 = document.createElement("input");
      input2.id = "input2";
      const customDiv = document.createElement("div");
      customDiv.classList.add("customRole");
      (DOMValidator.isDefaultEntry as unknown as jest.Mock).mockReturnValueOnce(
        true
      );
      (DOMValidator.isDefaultEntry as unknown as jest.Mock).mockReturnValueOnce(
        true
      );
      (DOMValidator.isDefaultEntry as unknown as jest.Mock).mockReturnValueOnce(
        false
      );
      (DOMValidator.isCustomEntry as unknown as jest.Mock).mockReturnValueOnce(
        false
      );
      (DOMValidator.isCustomEntry as unknown as jest.Mock).mockReturnValueOnce(
        false
      );
      (DOMValidator.isCustomEntry as unknown as jest.Mock).mockReturnValueOnce(
        true
      );
      formEl.appendChild(input1);
      formEl.appendChild(input2);
      formEl.appendChild(customDiv);
      handler["#processor"] = {
        process: jest
          .fn()
          .mockReturnValueOnce(1)
          .mockReturnValueOnce(0)
          .mockReturnValueOnce(3),
      };
      const result = handler.scan();
      expect(result.successful).toHaveLength(1);
      expect(result.failed).toHaveLength(1);
      expect(result.successfulCustom).toHaveLength(1);
      expect(result.failedCustom).toHaveLength(0);
    });
  });
  describe("#setForm", () => {
    it("returns true if #form is set and connected", () => {
      expect((handler as any)["#setForm"]()).toBe(true);
    });
    it("tries to query by unique name if #form is not set or not connected", () => {
      (handler as any)["#form"] = null;
      const spyQuery = jest
        .spyOn(DOMHandler, "queryByUniqueName")
        .mockReturnValue(formEl);
      const result = (handler as any)["#setForm"]();
      expect(result).toBe(true);
      expect(spyQuery).toHaveBeenCalled();
    });
  });
});
