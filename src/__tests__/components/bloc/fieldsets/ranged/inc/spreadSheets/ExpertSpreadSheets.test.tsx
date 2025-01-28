import React from "react";
import { render, screen } from "@testing-library/react";
import ExpertSpreadSheets from "../../../../../../../components/bloc/fieldsets/ranged/inc/spreadSheets/ExpertSpreadSheets";
describe("ExpertSpreadSheets", () => {
  const mockProps = {
    prefix: "spreadsheet",
    sufix: "expert",
    questions: [
      ["q1", "What are advanced spreadsheet techniques?"],
      ["q2", "How to use macros in spreadsheets?"],
    ],
    additional: <p>Expert spreadsheet guides</p>,
  };
  it("renders the fieldset with the correct id", () => {
    render(<ExpertSpreadSheets {...mockProps} />);
    const fieldset = screen.getByRole("group", {
      name: /fs__spreadsheet__expert/i,
    });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("id", "fs__spreadsheet__expert");
  });
  it("renders the correct number of questions", () => {
    render(<ExpertSpreadSheets {...mockProps} />);
    const questions = screen.getAllByText(/What/i);
    expect(questions.length).toBe(mockProps.questions.length);
  });
  it("renders additional content", () => {
    render(<ExpertSpreadSheets {...mockProps} />);
    const additionalContent = screen.getByText("Expert spreadsheet guides");
    expect(additionalContent).toBeInTheDocument();
  });
});
