import React from "react";
import { render, screen } from "@testing-library/react";
import ExpertImageAi from "../../../../../../../components/bloc/fieldsets/ranged/inc/imageAi/ExpertImageAi";
describe("ExpertImageAi", () => {
  const mockProps = {
    prefix: "image",
    sufix: "expert",
    questions: [
      ["q1", "What are advanced image AI techniques?"],
      ["q2", "How to optimize image AI models?"],
    ],
    additional: <p>Advanced image AI details</p>,
  };
  it("renders the fieldset with the correct id", () => {
    render(<ExpertImageAi {...mockProps} />);
    const fieldset = screen.getByRole("group", {
      name: /fs__image__expert/i,
    });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("id", "fs__image__expert");
  });
  it("renders the correct number of questions", () => {
    render(<ExpertImageAi {...mockProps} />);
    const questions = screen.getAllByText(/What/i);
    expect(questions.length).toBe(mockProps.questions.length);
  });
  it("renders additional content", () => {
    render(<ExpertImageAi {...mockProps} />);
    const additionalContent = screen.getByText("Advanced image AI details");
    expect(additionalContent).toBeInTheDocument();
  });
});
