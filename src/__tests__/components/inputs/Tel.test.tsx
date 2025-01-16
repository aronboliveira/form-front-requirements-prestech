import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Tel from "../../../components/inputs/Tel";
import IOHandler from "../../../lib/client/handlers/IOHandler";
import StyleHandler from "../../../lib/client/handlers/StyleHandler";
import "@testing-library/jest-dom";
jest.mock("@/lib/client/handlers/IOHandler", () => ({
  __esModule: true,
  default: {
    applyTelExtension: jest.fn(),
    syncLabel: jest.fn(),
  },
}));
jest.mock("@/lib/client/handlers/StyleHandler", () => ({
  __esModule: true,
  default: {
    blurOnChange: jest.fn(),
  },
}));
describe("Tel Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("renders with a default label 'Telefone' if none is provided", () => {
    render(<Tel />);
    expect(screen.getByText("Telefone")).toBeInTheDocument();
  });
  it("renders the provided label when passed as a prop", () => {
    render(<Tel label='Phone Number' />);
    expect(screen.getByText("Phone Number")).toBeInTheDocument();
  });
  it("sets `required` to true if required prop is passed", () => {
    render(<Tel required />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    expect(input.required).toBe(true);
  });
  it("sets autoComplete attribute based on the `type` prop", () => {
    const { rerender } = render(<Tel type='local' />);
    let input = screen.getByRole("textbox") as HTMLInputElement;
    expect(input.getAttribute("autocomplete")).toBe("tel-local");
    rerender(<Tel type='national' />);
    input = screen.getByRole("textbox") as HTMLInputElement;
    expect(input.getAttribute("autocomplete")).toBe("tel-national");
    rerender(<Tel type='complete' />);
    input = screen.getByRole("textbox") as HTMLInputElement;
    expect(input.getAttribute("autocomplete")).toBe("tel");
  });
  it("calls IOHandler.syncLabel on value change (triggering useEffect)", () => {
    (IOHandler.applyTelExtension as jest.Mock).mockReturnValue("1234");
    render(<Tel type='local' />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "1234" } });
    expect(IOHandler.applyTelExtension).toHaveBeenCalledWith("1234", "local");
    expect(IOHandler.syncLabel).toHaveBeenCalledTimes(1);
  });
  it("calls StyleHandler.blurOnChange if input value ends with '-' or ' '", () => {
    render(<Tel />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "1234-" } });
    expect(StyleHandler.blurOnChange).toHaveBeenCalledTimes(1);
  });
});
