import React from "react";
import { render, screen } from "@testing-library/react";
import SpreadSheets from "../../../../../../components/bloc/fieldsets/ranged/office/SpreadSheets";
describe("SpreadSheets", () => {
  const props = {
    lvl: 5,
    id: "spreadSheetsTest",
    controller: "testController",
  };
  it("renders the correct fieldset with attributes", () => {
    render(<SpreadSheets {...props} />);
    const fieldset = screen.getByRole("group", { name: /spreadsheets/i });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("data-controlledby", "testController");
  });
  it("renders ExpertSpreadSheets for 'expert' level", () => {
    render(<SpreadSheets {...props} />);
    const expertComponent = screen.getByText(/expert/i);
    expect(expertComponent).toBeInTheDocument();
  });
});
