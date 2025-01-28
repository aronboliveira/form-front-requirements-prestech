import React from "react";
import { render, screen } from "@testing-library/react";
import Crms from "../../../../../../components/bloc/fieldsets/ranged/office/Crms";
describe("Crms", () => {
  const props = { lvl: 2, id: "crmsTest", controller: "testController" };
  it("renders the correct fieldset with attributes", () => {
    render(<Crms {...props} />);
    const fieldset = screen.getByRole("group", { name: /crms/i });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("data-controlledby", "testController");
  });
  it("renders IntermediateCrms for 'intermediate' level", () => {
    render(<Crms {...props} />);
    const intermediateComponent = screen.getByText(/intermediate/i);
    expect(intermediateComponent).toBeInTheDocument();
  });
});
