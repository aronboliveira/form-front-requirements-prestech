import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddTextualInput from "../../../../../../../components/bloc/fieldsets/ranged/inc/foundation/AddTextualInput";
describe("AddTextualInput", () => {
  it("should render a text input element with the correct attributes", () => {
    render(
      <AddTextualInput
        id='textInput'
        name='testInput'
        placeholder='Type here'
      />
    );
    const input = screen.getByPlaceholderText("Type here");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("id", "textInput");
    expect(input).toHaveAttribute("name", "testInput");
  });
  it("should update the value on change", () => {
    render(
      <AddTextualInput id='textInput' name='testInput' initial='Initial text' />
    );
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Updated text" } });
    expect((input as HTMLInputElement).value).toBe("Updated text");
  });

  it("should not update with invalid email format", () => {
    render(<AddTextualInput id='emailInput' name='testEmail' type='email' />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "invalid-email" } });
    expect((input as HTMLInputElement).value).toBe("");
  });

  it("should update with valid email format", () => {
    render(<AddTextualInput id='emailInput' name='testEmail' type='email' />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test@example.com" } });
    expect((input as HTMLInputElement).value).toBe("test@example.com");
  });
});
