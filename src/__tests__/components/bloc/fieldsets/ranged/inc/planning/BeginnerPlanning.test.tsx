import React from "react";
import { render, screen } from "@testing-library/react";
import BeginnerPlanning from "../../../../../../../components/bloc/fieldsets/ranged/inc/planning/BeginnerPlanning";
describe("BeginnerPlanning", () => {
  const mockProps = {
    prefix: "planning",
    sufix: "beginner",
    questions: [
      ["q1", "What is planning?"],
      ["q2", "Why is planning important?"],
    ],
    additional: <p>Beginner planning tips</p>,
  };
  it("renders the fieldset with the correct id", () => {
    render(<BeginnerPlanning {...mockProps} />);
    const fieldset = screen.getByRole("group", {
      name: /fs__planning__beginner/i,
    });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("id", "fs__planning__beginner");
  });
  it("renders the correct number of questions", () => {
    render(<BeginnerPlanning {...mockProps} />);
    const questions = screen.getAllByText(/What/i);
    expect(questions.length).toBe(mockProps.questions.length);
  });
  it("renders additional content", () => {
    render(<BeginnerPlanning {...mockProps} />);
    const additionalContent = screen.getByText("Beginner planning tips");
    expect(additionalContent).toBeInTheDocument();
  });
});
