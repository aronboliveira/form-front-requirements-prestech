import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddTextArea from "../../../../../../../components/bloc/fieldsets/ranged/inc/foundation/AddTextArea";
describe("AddTextArea", () => {
  it("should render a textarea element with the correct attributes", () => {
    render(<AddTextArea id='textarea' name='testTextarea' />);
    const textarea = screen.getByRole("textbox");
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveAttribute("id", "textarea");
    expect(textarea).toHaveAttribute("name", "testTextarea");
  });
  it("should update the value on change", () => {
    render(
      <AddTextArea id='textarea' name='testTextarea' ini='Initial text' />
    );
    const textarea = screen.getByRole("textbox");
    fireEvent.change(textarea, { target: { value: "Updated text" } });
    expect((textarea as HTMLTextAreaElement).value).toBe("Updated text");
  });
});
