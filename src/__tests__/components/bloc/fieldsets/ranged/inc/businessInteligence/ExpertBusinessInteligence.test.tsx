import React from "react";
import { render, screen } from "@testing-library/react";
import ExpertBusinessInteligence from "../../../../../../../components/bloc/fieldsets/ranged/inc/businessInteligence/ExpertBusinessInteligence";
describe("ExpertBusinessInteligence", () => {
  const mockProps = {
    prefix: "bi",
    sufix: "expert",
    questions: [
      ["q1", "What predictive models do you use?"],
      ["q2", "How do you handle large datasets?"],
    ],
    additional: <p>Additional content</p>,
  };
  it("renders the fieldset with the correct id", () => {
    render(<ExpertBusinessInteligence {...mockProps} />);
    const fieldset = screen.getByRole("group", { name: /bi__expert/i });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("id", "fs__bi__expert");
  });
  it("renders the correct number of questions", () => {
    render(<ExpertBusinessInteligence {...mockProps} />);
    const questions = screen.getAllByRole("textbox");
    expect(questions.length).toBe(mockProps.questions.length);
  });
  it("renders additional content", () => {
    render(<ExpertBusinessInteligence {...mockProps} />);
    const additionalContent = screen.getByText("Additional content");
    expect(additionalContent).toBeInTheDocument();
  });
});
