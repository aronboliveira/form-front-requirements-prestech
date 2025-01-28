import React from "react";
import { render, screen } from "@testing-library/react";
import IntermediateDocs from "../../../../../../../components/bloc/fieldsets/ranged/inc/docs/IntermediateDocs";
describe("IntermediateDocs", () => {
  const mockProps = {
    prefix: "docs",
    sufix: "intermediate",
    questions: [
      ["q1", "What documentation tools do you use?"],
      ["q2", "How do you organize intermediate tasks?"],
    ],
    additional: <p>Additional content</p>,
  };
  it("renders the fieldset with the correct id", () => {
    render(<IntermediateDocs {...mockProps} />);
    const fieldset = screen.getByRole("group", { name: /docs__intermediate/i });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("id", "fs__docs__intermediate");
  });
  it("renders the correct number of questions", () => {
    render(<IntermediateDocs {...mockProps} />);
    const questions = screen.getAllByLabelText(/What/i);
    expect(questions.length).toBe(mockProps.questions.length);
  });
  it("renders additional content", () => {
    render(<IntermediateDocs {...mockProps} />);
    const additionalContent = screen.getByText("Additional content");
    expect(additionalContent).toBeInTheDocument();
  });
});
