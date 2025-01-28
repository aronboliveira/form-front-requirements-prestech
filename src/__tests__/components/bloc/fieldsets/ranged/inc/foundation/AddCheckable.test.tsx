import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddCheckable from "../../../../../../../components/bloc/fieldsets/ranged/inc/foundation/AddCheckable";
describe("AddCheckable", () => {
  it("should render a checkbox input", () => {
    render(<AddCheckable id='test' name='testName' type='checkbox' />);
    const input = screen.getByRole("checkbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "checkbox");
  });

  it("should update the checked state on change", () => {
    render(<AddCheckable id='test' name='testName' type='checkbox' />);
    const input = screen.getByRole("checkbox");
    fireEvent.click(input);
    expect(input).toBeChecked();
  });
});
