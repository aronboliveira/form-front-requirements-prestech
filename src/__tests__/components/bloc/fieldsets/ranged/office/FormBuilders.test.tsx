import React from "react";
import { render, screen } from "@testing-library/react";
import FormBuilders from "../../../../../../components/bloc/fieldsets/ranged/office/FormBuilders";
describe("FormBuilders", () => {
  const props = {
    lvl: 1,
    id: "formBuildersTest",
    controller: "testController",
  };
  it("renders the correct fieldset with attributes", () => {
    render(<FormBuilders {...props} />);
    const fieldset = screen.getByRole("group", { name: /formbuilders/i });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("data-controlledby", "testController");
  });
  it("renders BeginnerFormBuilders for 'beginner' level", () => {
    render(<FormBuilders {...props} />);
    const beginnerComponent = screen.getByText(/beginner/i);
    expect(beginnerComponent).toBeInTheDocument();
  });
});
