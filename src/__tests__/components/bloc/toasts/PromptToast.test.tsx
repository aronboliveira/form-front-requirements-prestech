import { render, screen, fireEvent } from "@testing-library/react";
import { toast } from "react-hot-toast";
import promptToast from "../../../../components/bloc/toasts/PromptToast";
jest.mock("react-hot-toast", () => ({
  toast: jest.fn(),
  dismiss: jest.fn(),
  error: jest.fn(),
}));
describe("promptToast", () => {
  it("renders the toast with the correct message and placeholder", () => {
    const message = "Enter your input:";
    const placeholder = "Type here";
    promptToast(message, placeholder);
    expect(toast).toHaveBeenCalledWith(
      expect.any(Function),
      expect.objectContaining({
        duration: Infinity,
        position: "top-center",
      })
    );
    const renderToast = (toast as unknown as jest.Mock).mock.calls[0][0];
    render(renderToast({ id: "mock-toast-id" }));
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
  });
  it("resolves the promise with input value when Enter is pressed", async () => {
    const message = "Enter your input:";
    const placeholder = "Type here";
    const userInput = "test input";
    const resultPromise = promptToast(message, placeholder);
    const renderToast = (toast as unknown as jest.Mock).mock.calls[0][0];
    render(renderToast({ id: "mock-toast-id" }));
    const input = screen.getByPlaceholderText(placeholder);
    fireEvent.change(input, { target: { value: userInput } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
    const result = await resultPromise;
    expect(result).toBe(userInput);
    expect(toast.dismiss).toHaveBeenCalledWith("mock-toast-id");
  });
  it("resolves with an empty string when Cancel button is clicked", async () => {
    const message = "Enter your input:";
    const placeholder = "Type here";
    const resultPromise = promptToast(message, placeholder);
    const renderToast = (toast as unknown as jest.Mock).mock.calls[0][0];
    render(renderToast({ id: "mock-toast-id" }));
    const cancelButton = screen.getByText(/Cancel|Cancelar/);
    fireEvent.click(cancelButton);
    const result = await resultPromise;
    expect(result).toBe("");
    expect(toast.dismiss).toHaveBeenCalledWith("mock-toast-id");
  });
  it("resolves with the input value when Submit button is clicked", async () => {
    const message = "Enter your input:";
    const placeholder = "Type here";
    const userInput = "submitted input";
    const resultPromise = promptToast(message, placeholder);
    const renderToast = (toast as unknown as jest.Mock).mock.calls[0][0];
    render(renderToast({ id: "mock-toast-id" }));
    const input = screen.getByPlaceholderText(placeholder);
    fireEvent.change(input, { target: { value: userInput } });
    const submitButton = screen.getByText(/Submit|Confirmar/);
    fireEvent.click(submitButton);
    const result = await resultPromise;
    expect(result).toBe(userInput);
    expect(toast.dismiss).toHaveBeenCalledWith("mock-toast-id");
  });
  it("shows an error toast if an untrusted input event is detected", () => {
    const message = "Enter your input:";
    const placeholder = "Type here";
    promptToast(message, placeholder);
    const renderToast = (toast as unknown as jest.Mock).mock.calls[0][0];
    render(renderToast({ id: "mock-toast-id" }));
    const input = screen.getByPlaceholderText(placeholder);
    fireEvent.input(input, { isTrusted: false });
    expect(toast.error).toHaveBeenCalledWith(
      expect.stringMatching(/Event not validated!|Evento não validado!/)
    );
  });
  it("clears input on paste and shows an error toast", () => {
    const message = "Enter your input:";
    const placeholder = "Type here";
    promptToast(message, placeholder);
    const renderToast = (toast as unknown as jest.Mock).mock.calls[0][0];
    render(renderToast({ id: "mock-toast-id" }));
    const input = screen.getByPlaceholderText(placeholder);
    fireEvent.input(input, { inputType: "insertFromPaste" });
    expect(toast.error).toHaveBeenCalledWith(
      expect.stringMatching(/You cannot paste here!|Você não pode colar aqui!/)
    );
    expect((input as HTMLInputElement).value).toBe("");
  });
});
