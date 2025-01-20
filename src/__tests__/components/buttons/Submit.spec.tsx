import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Submit from "../../../components/buttons/Submit";
import DOMHandler from "../../../lib/client/handlers/DOMHandler";
import SubmissionHandler from "../../../lib/client/handlers/SubmissionHandler";
import "@testing-library/jest-dom";
jest.mock("react-hot-toast", () => ({
  toast: jest.fn(),
  success: jest.fn(),
  error: jest.fn(),
  dismiss: jest.fn(),
}));
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    prefetch: jest.fn(),
  })),
}));
jest.mock("../../../lib/client/handlers/DOMHandler", () => {
  return jest.fn().mockImplementation(() => ({
    evaluateClickMovements: jest
      .fn()
      .mockReturnValue(["Click validated", false]),
  }));
});
jest.mock("../../../lib/client/handlers/SubmissionHandler", () => ({
  construct: jest.fn(() => ({
    submit: jest.fn(() => Promise.resolve({ ok: true, cause: "" })),
  })),
}));
describe("Submit Component", () => {
  const router = useRouter();
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("renders the Submit button", () => {
    render(<Submit form='test-form' />);
    expect(screen.getByText(/Enviar/)).toBeInTheDocument();
  });
  it("prefetches the success page on mouse enter", () => {
    render(<Submit form='test-form' />);
    fireEvent.mouseEnter(screen.getByText(/Enviar/));
    expect(router.prefetch).toHaveBeenCalledWith("/success");
  });
  it("displays a success message and navigates to success page on valid submission", async () => {
    render(<Submit form='test-form' />);
    fireEvent.click(screen.getByText(/Enviar/));
    expect(toast.success).toHaveBeenCalledWith(
      expect.stringMatching(/Submissão validada|Successfuly validated/)
    );
    await Promise.resolve(); // Wait for async submit
    expect(SubmissionHandler.construct).toHaveBeenCalledWith(expect.anything());
    expect(router.push).toHaveBeenCalledWith("/success", { scroll: true });
  });
  it("displays an error message when suspicious activity is detected", () => {
    const { evaluateClickMovements } = new DOMHandler(
      new MouseEvent("click")
    ) as any;
    evaluateClickMovements.mockReturnValueOnce([
      "Suspicious click detected",
      true,
    ]);
    render(<Submit form='test-form' />);
    fireEvent.click(screen.getByText(/Enviar/));
    expect(toast.error).toHaveBeenCalledWith("Suspicious click detected");
    expect(router.push).not.toHaveBeenCalled();
  });
  it("displays an error message when submission fails", async () => {
    (SubmissionHandler.construct as jest.Mock).mockReturnValueOnce({
      submit: jest.fn(() =>
        Promise.resolve({ ok: false, cause: "Validation error" })
      ),
    });
    render(<Submit form='test-form' />);
    fireEvent.click(screen.getByText(/Enviar/));
    await Promise.resolve();
    expect(toast.error).toHaveBeenCalledWith(
      expect.stringMatching(/Validation error|Erro/)
    );
    expect(router.push).not.toHaveBeenCalled();
  });
  it("handles custom transition if setTransition is provided in the context", () => {
    const setTransitionMock = jest.fn(cb => cb());
    render(
      <Submit
        form='test-form'
        contextValue={{ setTransition: setTransitionMock }}
      />
    );
    fireEvent.click(screen.getByText(/Enviar/));
    expect(setTransitionMock).toHaveBeenCalled();
    expect(toast.success).toHaveBeenCalledWith(
      expect.stringMatching(/Submissão validada|Successfuly validated/)
    );
  });
});
