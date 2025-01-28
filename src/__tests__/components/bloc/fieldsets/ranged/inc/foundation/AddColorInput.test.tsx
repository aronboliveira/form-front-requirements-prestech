import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddColorInput from "../../../../../../../components/bloc/fieldsets/ranged/inc/foundation/AddColorInput";
describe("AddColorInput", () => {
  it("should render a color input", () => {
    render(<AddColorInput id='color' name='colorName' />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("type", "color");
  });
  it("should update the value on change", () => {
    render(<AddColorInput id='color' name='colorName' />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "#ff0000" } });
    expect((input as HTMLInputElement).value).toBe("#ff0000");
  });
});
