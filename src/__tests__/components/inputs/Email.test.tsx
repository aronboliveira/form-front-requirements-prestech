/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Email from "../../../components/inputs/Email";
describe("Email component", () => {
  it("renders with default label 'E-mail'", () => {
    render(<Email />);
    expect(screen.getByLabelText("E-mail")).toBeInTheDocument();
  });
  it("accepts custom label if provided", () => {
    render(<Email label='E-mail Primário' id='emailPrim' required />);
    expect(screen.getByLabelText("E-mail Primário")).toBeInTheDocument();
  });
  it("updates state on change", () => {
    render(<Email />);
    const emailInput = screen.getByLabelText("E-mail") as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: "test@domain" } });
    expect(emailInput.value).toBe("test@domain");
  });
});
