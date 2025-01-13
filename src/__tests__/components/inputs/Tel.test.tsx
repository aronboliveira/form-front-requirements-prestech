/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Tel from "../../../components/inputs/Tel";
describe("Tel component", () => {
  it("renders with default label 'Telefone'", () => {
    render(<Tel />);
    expect(screen.getByText("Telefone")).toBeInTheDocument();
  });
  it("accepts custom label and sets type to 'tel'", () => {
    render(<Tel label='Celular' required id='telMain' type='local' />);
    const labelEl = screen.getByLabelText("Celular");
    expect(labelEl).toBeInTheDocument();
    expect(labelEl).toHaveAttribute("type", "tel");
  });
  it("updates value on change", () => {
    render(<Tel />);
    const input = screen.getByLabelText("Telefone") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "2199999" } });
    expect(input.value).toBe("2199999");
  });
});
