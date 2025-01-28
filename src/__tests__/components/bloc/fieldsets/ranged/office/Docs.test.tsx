import React from "react";
import { render, screen } from "@testing-library/react";
import Docs from "../../../../../../components/bloc/fieldsets/ranged/office/Docs";
describe("Docs", () => {
  const props = { lvl: 3, id: "docsTest", controller: "testController" };
  it("renders the correct fieldset with attributes", () => {
    render(<Docs {...props} />);
    const fieldset = screen.getByRole("group", { name: /docs/i });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("data-controlledby", "testController");
  });
  it("renders ExpertDocs for 'expert' level", () => {
    render(<Docs {...props} />);
    const expertComponent = screen.getByText(/expert/i);
    expect(expertComponent).toBeInTheDocument();
  });
});
