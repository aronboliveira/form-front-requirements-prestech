/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TelCountryCode from "../../../components/inputs/TelCountryCode";
describe("TelCountryCode component", () => {
  it("renders a label 'Código'", () => {
    render(<TelCountryCode />);
    expect(screen.getByText("Código")).toBeInTheDocument();
  });
  it("updates state when user types in phone input", async () => {
    render(<TelCountryCode />);
    const phoneInput = screen.getByRole("textbox") as HTMLInputElement;
    await userEvent.type(phoneInput, "+55");
    expect(phoneInput.value).toContain("+55");
  });
});
