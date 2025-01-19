import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { toast } from "react-hot-toast";
import Submit from "../../../components/buttons/Submit";
import DOMHandler from "../../../lib/client/handlers/DOMHandler";
import SubmissionHandler from "../../../lib/client/handlers/SubmissionHandler";
import { redirect } from "next/navigation";
jest.mock("react-hot-toast", () => ({
  toast: jest.fn(),
  success: jest.fn(),
  error: jest.fn(),
}));
jest.mock("@/lib/client/handlers/DOMHandler", () => {
  return jest.fn().mockImplementation(() => ({
    evaluateClickMovements: jest
      .fn()
      .mockReturnValue(["Click validated", false]),
  }));
});
jest.mock("@/lib/client/handlers/SubmissionHandler", () => ({
  construct: jest.fn(() => ({
    submit: jest.fn(() => ({ ok: true, cause: "" })),
  })),
}));
jest.mock("next/navigation", () => ({
  redirect: jest.fn(),
}));
describe("Submit", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("renders the Submit button", () => {
    render(<Submit form='test-form' />);
    expect(screen.getByText(/Enviar/)).toBeInTheDocument();
  });
  it("displays a success message and redirects on successful submission", () => {
    const { evaluateClickMovements } = new DOMHandler(
      new MouseEvent("click")
    ) as any;
    evaluateClickMovements.mockReturnValue(["Click validated", false]);
    render(<Submit form='test-form' />);
    fireEvent.click(screen.getByText(/Enviar/));
    expect(toast.success).toHaveBeenCalledWith(
      expect.stringMatching(/validated|validada/)
    );
    expect(SubmissionHandler.construct).toHaveBeenCalledWith(expect.anything());
    expect(toast.success).toHaveBeenCalledWith(
      expect.stringMatching(/validated and submitted|validado e submetido/)
    );
    expect(redirect).toHaveBeenCalledWith("/success");
  });
  it("displays an error message when the submission fails", () => {
    const { evaluateClickMovements } = new DOMHandler(
      new MouseEvent("click")
    ) as any;
    evaluateClickMovements.mockReturnValue(["Click validated", false]);
    (SubmissionHandler.construct as jest.Mock).mockReturnValueOnce({
      submit: jest.fn(() => ({ ok: false, cause: "Validation error" })),
    });
    render(<Submit form='test-form' />);
    fireEvent.click(screen.getByText(/Enviar/));
    expect(toast.error).toHaveBeenCalledWith(
      expect.stringMatching(/Validation error|Erro/)
    );
    expect(redirect).not.toHaveBeenCalled();
  });
  it("displays an error message when suspicious activity is detected", () => {
    const { evaluateClickMovements } = new DOMHandler(
      new MouseEvent("click")
    ) as any;
    evaluateClickMovements.mockReturnValue(["Suspicious click detected", true]);
    render(<Submit form='test-form' />);
    fireEvent.click(screen.getByText(/Enviar/));
    expect(toast.error).toHaveBeenCalledWith("Suspicious click detected");
    expect(redirect).not.toHaveBeenCalled();
  });
});
