import React from "react";
import { render, screen } from "@testing-library/react";
import BeginnerBusinessInteligence from "../../../../../../../components/bloc/fieldsets/ranged/inc/businessInteligence/BeginnerBusinessInteligence";
describe("BeginnerBusinessInteligence", () => {
  const mockProps = {
    prefix: "bi",
    sufix: "beginner",
    questions: [
      ["q1", "What is your BI platform?"],
      ["q2", "What kind of data do you analyze?"],
    ],
    additional: <p>Additional content</p>,
  };
  it("renders the fieldset with the correct id", () => {
    render(<BeginnerBusinessInteligence {...mockProps} />);
    const fieldset = screen.getByRole("group", { name: /bi__beginner/i });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("id", "fs__bi__beginner");
  });
  it("renders the correct number of questions", () => {
    render(<BeginnerBusinessInteligence {...mockProps} />);
    const questions = screen.getAllByRole("textbox");
    expect(questions.length).toBe(mockProps.questions.length);
  });
  it("renders additional content", () => {
    render(<BeginnerBusinessInteligence {...mockProps} />);
    const additionalContent = screen.getByText("Additional content");
    expect(additionalContent).toBeInTheDocument();
  });
});
