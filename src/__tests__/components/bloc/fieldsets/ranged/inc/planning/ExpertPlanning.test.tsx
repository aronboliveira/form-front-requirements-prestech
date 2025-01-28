import React from "react";
import { render, screen } from "@testing-library/react";
import ExpertPlanning from "../../../../../../../components/bloc/fieldsets/ranged/inc/planning/ExpertPlanning";
describe("ExpertPlanning", () => {
  const mockProps = {
    prefix: "planning",
    sufix: "expert",
    questions: [
      ["q1", "What are advanced planning techniques?"],
      ["q2", "How to optimize complex projects?"],
    ],
    additional: <p>Expert planning resources</p>,
  };
  it("renders the fieldset with the correct id", () => {
    render(<ExpertPlanning {...mockProps} />);
    const fieldset = screen.getByRole("group", {
      name: /fs__planning__expert/i,
    });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("id", "fs__planning__expert");
  });
  it("renders the correct number of questions", () => {
    render(<ExpertPlanning {...mockProps} />);
    const questions = screen.getAllByText(/What/i);
    expect(questions.length).toBe(mockProps.questions.length);
  });
  it("renders additional content", () => {
    render(<ExpertPlanning {...mockProps} />);
    const additionalContent = screen.getByText("Expert planning resources");
    expect(additionalContent).toBeInTheDocument();
  });
});
