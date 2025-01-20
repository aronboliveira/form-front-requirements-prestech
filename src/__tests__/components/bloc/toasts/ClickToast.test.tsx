import { render, screen, fireEvent } from "@testing-library/react";
import { toast } from "react-hot-toast";
import clickToast from "../../../../components/bloc/toasts/ClickToast";
import DOMValidator from "../../../../lib/client/validators/DOMValidator";
jest.mock("react-hot-toast", () => ({
  toast: jest.fn(),
  dismiss: jest.fn(),
  error: jest.fn(),
}));
jest.mock("@/lib/client/validators/DOMValidator", () => ({
  isButton: jest.fn(),
}));
describe("clickToast", () => {
  beforeEach(jest.clearAllMocks);
  it("renders the toast with the correct message", () => {
    const message = "Are you sure?";
    clickToast(message);
    expect(toast).toHaveBeenCalledWith(
      expect.any(Function),
      expect.objectContaining({
        duration: Infinity,
        position: "top-center",
      })
    );
    const renderToast = (toast as unknown as jest.Mock).mock.calls[0][0];
    render(renderToast({ id: "mock-toast-id" }));
    expect(screen.getByText(message)).toBeInTheDocument();
    expect(screen.getByText(/No/)).toBeInTheDocument();
    expect(screen.getByText(/Yes/)).toBeInTheDocument();
  });
  it("resolves false when the No button is clicked", async () => {
    const message = "Are you sure?";
    const promise = clickToast(message);
    const renderToast = (toast as unknown as jest.Mock).mock.calls[0][0];
    render(renderToast({ id: "mock-toast-id" }));
    fireEvent.click(screen.getByText(/No/));
    const result = await promise;
    expect(result).toBe(false);
    expect(toast.dismiss).toHaveBeenCalledWith("mock-toast-id");
  });
  it("resolves true when the Yes button is clicked", async () => {
    (DOMValidator.isButton as unknown as jest.Mock).mockReturnValue(true);
    const message = "Are you sure?";
    const promise = clickToast(message);
    const renderToast = (toast as unknown as jest.Mock).mock.calls[0][0];
    render(renderToast({ id: "mock-toast-id" }));
    fireEvent.click(screen.getByText(/Yes/));
    const result = await promise;
    expect(result).toBe(true);
    expect(toast.dismiss).toHaveBeenCalledWith("mock-toast-id");
  });
  it("shows an error if an untrusted event occurs", () => {
    (DOMValidator.isButton as unknown as jest.Mock).mockReturnValue(false);
    const message = "Are you sure?";
    clickToast(message);
    const renderToast = (toast as unknown as jest.Mock).mock.calls[0][0];
    render(renderToast({ id: "mock-toast-id" }));
    fireEvent.click(screen.getByText(/Yes/));
    expect(toast.error).toHaveBeenCalledWith(
      expect.stringMatching(/Event not validated!|Evento não validado!/)
    );
  });
});
