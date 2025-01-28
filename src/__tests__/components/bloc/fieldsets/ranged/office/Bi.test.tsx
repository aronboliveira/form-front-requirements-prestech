import React from "react";
import { render, screen } from "@testing-library/react";
import BusinessInteligence from "../../../../../../components/bloc/fieldsets/ranged/office/Bi";
describe("BusinessInteligence", () => {
  const props = { lvl: 1, id: "biTest", controller: "testController" };
  it("renders the correct fieldset with attributes", () => {
    render(<BusinessInteligence {...props} />);
    const fieldset = screen.getByRole("group", {
      name: /businessinteligence/i,
    });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("data-controlledby", "testController");
  });
  it("renders BeginnerBusinessInteligence for 'beginner' level", () => {
    render(<BusinessInteligence {...props} />);
    const beginnerComponent = screen.getByText(/beginner/i);
    expect(beginnerComponent).toBeInTheDocument();
  });
});
