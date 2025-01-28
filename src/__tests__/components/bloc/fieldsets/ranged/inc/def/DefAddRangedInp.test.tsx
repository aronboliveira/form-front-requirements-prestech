import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DefAppRangedInp from "../../../../../../../components/bloc/fieldsets/ranged/inc/def/DefAddRangedInp";
describe("DefAppRangedInp", () => {
  const mockProps = {
    id: "rangedInput",
    name: "testInput",
    additional: <p>Additional content</p>,
  };
  it("renders the input with the correct attributes", () => {
    render(<DefAppRangedInp {...mockProps} />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("id", mockProps.id);
    expect(input).toHaveAttribute("name", mockProps.name);
  });
  it("updates the value on change", () => {
    render(<DefAppRangedInp {...mockProps} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Test value" } });
    expect((input as HTMLInputElement).value).toBe("Test value");
  });
  it("renders additional content", () => {
    render(<DefAppRangedInp {...mockProps} />);
    const additionalContent = screen.getByText("Additional content");
    expect(additionalContent).toBeInTheDocument();
  });
});
