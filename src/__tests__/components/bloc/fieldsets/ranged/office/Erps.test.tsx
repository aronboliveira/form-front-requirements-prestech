import React from "react";
import { render, screen } from "@testing-library/react";
import Erps from "../../../../../../components/bloc/fieldsets/ranged/office/Erps";
describe("Erps", () => {
  const props = { lvl: 4, id: "erpsTest", controller: "testController" };
  it("renders the correct fieldset with attributes", () => {
    render(<Erps {...props} />);
    const fieldset = screen.getByRole("group", { name: /erps/i });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("data-controlledby", "testController");
  });
  it("renders ExpertErps for 'expert' level", () => {
    render(<Erps {...props} />);
    const expertComponent = screen.getByText(/expert/i);
    expect(expertComponent).toBeInTheDocument();
  });
});
