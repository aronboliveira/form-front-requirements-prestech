import React from "react";
import { render, screen } from "@testing-library/react";
import IntermediateBusinessInteligence from "../../../../../../../components/bloc/fieldsets/ranged/inc/businessInteligence/IntermediateBusinessInteligence";
describe("IntermediateBusinessInteligence", () => {
  const mockProps = {
    prefix: "bi",
    sufix: "intermediate",
    questions: [
      ["q1", "What is your primary use case for BI?"],
      ["q2", "What tools do you use for reporting?"],
    ],
    additional: <p>Additional content</p>,
  };
  it("renders the fieldset with the correct id", () => {
    render(<IntermediateBusinessInteligence {...mockProps} />);
    const fieldset = screen.getByRole("group", { name: /bi__intermediate/i });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("id", "fs__bi__intermediate");
  });
  it("renders the correct number of questions", () => {
    render(<IntermediateBusinessInteligence {...mockProps} />);
    const questions = screen.getAllByRole("textbox");
    expect(questions.length).toBe(mockProps.questions.length);
  });
  it("renders additional content", () => {
    render(<IntermediateBusinessInteligence {...mockProps} />);
    const additionalContent = screen.getByText("Additional content");
    expect(additionalContent).toBeInTheDocument();
  });
});
