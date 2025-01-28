import React from "react";
import { render, screen } from "@testing-library/react";
import IntermediateSpreadSheets from "../../../../../../../components/bloc/fieldsets/ranged/inc/spreadSheets/IntermediateSpreadSheets";
describe("IntermediateSpreadSheets", () => {
  const mockProps = {
    prefix: "spreadsheet",
    sufix: "intermediate",
    questions: [
      ["q1", "How to create pivot tables?"],
      ["q2", "What are spreadsheet formulas?"],
    ],
    additional: <p>Intermediate spreadsheet techniques</p>,
  };
  it("renders the fieldset with the correct id", () => {
    render(<IntermediateSpreadSheets {...mockProps} />);
    const fieldset = screen.getByRole("group", {
      name: /fs__spreadsheet__intermediate/i,
    });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("id", "fs__spreadsheet__intermediate");
  });
  it("renders the correct number of questions", () => {
    render(<IntermediateSpreadSheets {...mockProps} />);
    const questions = screen.getAllByText(/How/i);
    expect(questions.length).toBe(mockProps.questions.length);
  });
  it("renders additional content", () => {
    render(<IntermediateSpreadSheets {...mockProps} />);
    const additionalContent = screen.getByText(
      "Intermediate spreadsheet techniques"
    );
    expect(additionalContent).toBeInTheDocument();
  });
});
