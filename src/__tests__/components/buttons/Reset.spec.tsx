import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Reset from "../../../components/buttons/Reset";
import promptToast from "../../../components/bloc/toasts/PromptToast";
import "@testing-library/jest-dom";
jest.mock("../../../components/bloc/toasts/PromptToast", jest.fn);
describe("Reset component", () => {
  afterEach(jest.clearAllMocks);
  it("renders a button with text 'Resetar'", () => {
    render(<Reset form={undefined} />);
    expect(screen.getByText(/Resetar/i)).toBeInTheDocument();
  });
  it("calls promptToast on click", async () => {
    (promptToast as jest.Mock).mockResolvedValue("Y");
    const fakeForm = {
      reset: jest.fn(),
    } as any;
    render(<Reset form={fakeForm} />);
    const btn = screen.getByRole("button", { name: /Resetar/i });
    fireEvent.click(btn);
    expect(promptToast).toHaveBeenCalled();
    await Promise.resolve();
    expect(fakeForm.reset).toHaveBeenCalled();
  });
  it("does not reset the form if the user does not type 'Y'", async () => {
    (promptToast as jest.Mock).mockResolvedValue("N");
    const fakeForm = {
      reset: jest.fn(),
    } as any;
    render(<Reset form={fakeForm} />);
    const btn = screen.getByRole("button", { name: /Resetar/i });
    fireEvent.click(btn);
    await Promise.resolve();
    expect(fakeForm.reset).not.toHaveBeenCalled();
  });
});
