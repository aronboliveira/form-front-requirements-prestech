import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddNumericInput from "../../../../../../../components/bloc/fieldsets/ranged/inc/foundation/AddNumbericInput";
describe("AddNumericInput", () => {
  it("should render a numeric input", () => {
    render(<AddNumericInput id='number' name='numberInput' />);
    const input = screen.getByRole("spinbutton");
    expect(input).toHaveAttribute("type", "number");
  });
  it("should update the value within range", () => {
    render(<AddNumericInput id='number' name='numberInput' min={0} max={10} />);
    const input = screen.getByRole("spinbutton");
    fireEvent.change(input, { target: { value: "5" } });
    expect((input as HTMLInputElement).value).toBe("5");
  });
  it("should not update the value outside range", () => {
    render(<AddNumericInput id='number' name='numberInput' min={0} max={10} />);
    const input = screen.getByRole("spinbutton");
    fireEvent.change(input, { target: { value: "15" } });
    expect((input as HTMLInputElement).value).toBe("10");
  });
});
