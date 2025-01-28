import React from "react";
import { render, screen } from "@testing-library/react";
import Planning from "../../../../../../components/bloc/fieldsets/ranged/office/Planning";
describe("Planning", () => {
  const mockProps = {
    lvl: "intermediate",
    id: "planningTest",
    name: "testPlanning",
    questions: [
      ["q1", "What is your planning process?"],
      ["q2", "How do you track progress?"],
    ],
  };
  it("renders the fieldset with the correct id", () => {
    render(<Planning {...mockProps} />);
    const fieldset = screen.getByRole("group", {
      name: /planning/i,
    });
    expect(fieldset).toBeInTheDocument();
  });
  it("renders the correct number of questions", () => {
    render(<Planning {...mockProps} />);
    const questions = screen.getAllByLabelText(/What/i);
    expect(questions.length).toBe(mockProps.questions.length);
  });
});
