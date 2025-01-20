import SubmissionHandler from "../../../../lib/client/handlers/SubmissionHandler";
import SubmissionProcessor from "../../../../lib/client/processors/SubmissionProcessor";
import { toast } from "react-hot-toast";
import axios, { AxiosHeaders } from "axios";
jest.mock("../../../../lib/client/handlers/DOMHandler", () => ({
  queryByUniqueName: jest.fn(),
  extractValue: jest.fn().mockReturnValue("test-value"),
  getIdentifier: jest.fn().mockReturnValue("test-id"),
}));
jest.mock("../../../../lib/client/processors/SubmissionProcessor", () => {
  return jest.fn().mockImplementation(() => ({
    process: jest.fn().mockReturnValue(1),
  }));
});
jest.mock("react-hot-toast", () => ({
  toast: jest.fn(),
  success: jest.fn(),
  error: jest.fn(),
  dismiss: jest.fn(),
}));
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
describe("SubmissionHandler", () => {
  let mockForm: HTMLFormElement;
  let submissionHandler: SubmissionHandler;
  let mockProcessor: SubmissionProcessor;
  beforeEach(() => {
    jest.clearAllMocks();
    mockForm = document.createElement("form");
    mockForm.id = "test-form";
    mockProcessor = new SubmissionProcessor();
    submissionHandler = new SubmissionHandler(mockForm, mockProcessor);
  });
  describe("construct", () => {
    it("returns a new instance if no existing instance exists", () => {
      const instance = SubmissionHandler.construct(mockForm);
      expect(instance).toBeInstanceOf(SubmissionHandler);
    });
    it("returns the existing instance if one already exists", () => {
      const instance1 = SubmissionHandler.construct(mockForm);
      const instance2 = SubmissionHandler.construct(mockForm);
      expect(instance1).toBe(instance2);
    });
  });
  describe("canSubmit", () => {
    it("increments attempts and allows submission if attempts are within the limit", () => {
      const mockCaller = document.createElement("button");
      const result = submissionHandler.canSubmit(mockCaller);
      expect(result).toBe(true);
      expect(submissionHandler.attemps).toBe(1);
    });
    it("disables the button and shows a toast if attempts exceed the limit", () => {
      submissionHandler["#attempts"] = 4;
      const mockCaller = document.createElement("button");
      submissionHandler.canSubmit(mockCaller);
      expect(mockCaller.disabled).toBe(true);
      expect(toast).toHaveBeenCalledWith(
        expect.stringMatching(/Attempts exceeded|Tentativas excedidas/),
        { icon: "⏳" }
      );
    });
  });
  describe("submit", () => {
    it("returns an error if the form has noValidate attribute", async () => {
      mockForm.noValidate = true;
      const result = await submissionHandler.submit("sendRequirements");
      expect(result).toEqual({
        ok: false,
        cause: "Form noValidate attribute active",
      });
    });
    it("validates form elements and submits successfully via axios", async () => {
      mockedAxios.post.mockResolvedValueOnce({
        data: {},
        status: 200,
        statusText: "OK",
        headers: {},
        config: {},
      });
      const result = await submissionHandler.submit("sendRequirements");
      expect(result).toEqual({
        ok: true,
        cause: "Form correctly submitted",
      });
    });
    it("handles server errors correctly", async () => {
      mockedAxios.post.mockResolvedValueOnce({
        data: {},
        status: 500,
        statusText: "Internal Server Error",
        headers: {},
        config: {},
      });
      const result = await submissionHandler.submit("sendRequirements");
      expect(result).toEqual({
        ok: false,
        cause: "Error submitting form",
      });
    });
  });
  describe("handleResponse", () => {
    it("shows a success toast and navigates on a successful response", () => {
      const mockRouter = { push: jest.fn() };
      submissionHandler.handleResponse(
        {
          data: {},
          status: 200,
          statusText: "OK",
          headers: new AxiosHeaders({ "Content-Type": "application/json" }),
          config: {
            headers: new AxiosHeaders({ "Content-Type": "application/json" }),
          },
        },
        mockRouter
      );
      expect(toast.success).toHaveBeenCalledWith(
        "O formulário foi submetido com sucesso!"
      );
      expect(mockRouter.push).toHaveBeenCalledWith("/", { scroll: true });
    });
    it("shows an error toast on a failed response", () => {
      submissionHandler.handleResponse(
        {
          data: {},
          status: 500,
          statusText: "Internal Server Error",
          headers: new AxiosHeaders({ "Content-Type": "application/json" }),
          config: {
            headers: new AxiosHeaders({ "Content-Type": "application/json" }),
          },
        },
        {}
      );
      expect(toast.error).toHaveBeenCalledWith(
        expect.stringMatching(/unexpected error|erro inesperado/i)
      );
    });
  });
});
