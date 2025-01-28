import React from "react";
import { render, screen } from "@testing-library/react";
import IntermediatePlanning from "../../../../../../../components/bloc/fieldsets/ranged/inc/planning/IntermediatePlanning";
describe("IntermediatePlanning", () => {
  const mockProps = {
    prefix: "planning",
    sufix: "intermediate",
    questions: [
      ["q1", "What is strategic planning?"],
      ["q2", "How to create achievable goals?"],
    ],
    additional: <p>Intermediate planning strategies</p>,
  };
  it("renders the fieldset with the correct id", () => {
    render(<IntermediatePlanning {...mockProps} />);
    const fieldset = screen.getByRole("group", {
      name: /fs__planning__intermediate/i,
    });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("id", "fs__planning__intermediate");
  });
  it("renders the correct number of questions", () => {
    render(<IntermediatePlanning {...mockProps} />);
    const questions = screen.getAllByText(/What/i);
    expect(questions.length).toBe(mockProps.questions.length);
  });
  it("renders additional content", () => {
    render(<IntermediatePlanning {...mockProps} />);
    const additionalContent = screen.getByText(
      "Intermediate planning strategies"
    );
    expect(additionalContent).toBeInTheDocument();
  });
});
