import React from "react";
import { render, screen } from "@testing-library/react";
import BeginnerSpreadSheets from "../../../../../../../components/bloc/fieldsets/ranged/inc/spreadSheets/BeginnerSpreadSheets";
import "@testing-library/jest-dom";
describe("BeginnerSpreadSheets", () => {
  const mockProps: {
    prefix: string;
    sufix: string;
    questions: [string, string][];
    additional: React.JSX.Element;
  } = {
    prefix: "spreadsheet",
    sufix: "beginner",
    questions: [
      ["q1", "What is a spreadsheet?"],
      ["q2", "How to create a simple spreadsheet?"],
    ],
    additional: <p>Beginner spreadsheet tips</p>,
  };
  it("renders the fieldset with the correct id", () => {
    render(<BeginnerSpreadSheets {...mockProps} />);
    const fieldset = screen.getByRole("group", {
      name: /fs__spreadsheet__beginner/i,
    });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("id", "fs__spreadsheet__beginner");
  });
  it("renders the correct number of questions", () => {
    render(<BeginnerSpreadSheets {...mockProps} />);
    const questions = screen.getAllByText(/What/i);
    expect(questions.length).toBe(mockProps.questions.length);
  });
  it("renders additional content", () => {
    render(<BeginnerSpreadSheets {...mockProps} />);
    const additionalContent = screen.getByText("Beginner spreadsheet tips");
    expect(additionalContent).toBeInTheDocument();
  });
});
