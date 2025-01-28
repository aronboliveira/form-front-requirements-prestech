import React from "react";
import { render, screen } from "@testing-library/react";
import IntermediateImageAi from "../../../../../../../components/bloc/fieldsets/ranged/inc/imageAi/IntermediateImageAi";
describe("IntermediateImageAi", () => {
  const mockProps = {
    prefix: "image",
    sufix: "intermediate",
    questions: [
      ["q1", "What is feature extraction in image AI?"],
      ["q2", "How to train an image classification model?"],
    ],
    additional: <p>Intermediate image AI tips</p>,
  };
  it("renders the fieldset with the correct id", () => {
    render(<IntermediateImageAi {...mockProps} />);
    const fieldset = screen.getByRole("group", {
      name: /fs__image__intermediate/i,
    });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("id", "fs__image__intermediate");
  });
  it("renders the correct number of questions", () => {
    render(<IntermediateImageAi {...mockProps} />);
    const questions = screen.getAllByText(/What/i);
    expect(questions.length).toBe(mockProps.questions.length);
  });
  it("renders additional content", () => {
    render(<IntermediateImageAi {...mockProps} />);
    const additionalContent = screen.getByText("Intermediate image AI tips");
    expect(additionalContent).toBeInTheDocument();
  });
});
