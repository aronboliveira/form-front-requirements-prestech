import React from "react";
import { render, screen } from "@testing-library/react";
import BeginnerImageAi from "../../../../../../../components/bloc/fieldsets/ranged/inc/imageAi/BeginnerImageAi";
describe("BeginnerImageAi", () => {
  const mockProps = {
    prefix: "image",
    sufix: "beginner",
    questions: [
      ["q1", "What is an image AI?"],
      ["q2", "How does image AI process data?"],
    ],
    additional: <p>Additional beginner content</p>,
  };
  it("renders the fieldset with the correct id", () => {
    render(<BeginnerImageAi {...mockProps} />);
    const fieldset = screen.getByRole("group", {
      name: /fs__image__beginner/i,
    });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("id", "fs__image__beginner");
  });
  it("renders the correct number of questions", () => {
    render(<BeginnerImageAi {...mockProps} />);
    const questions = screen.getAllByText(/What/i);
    expect(questions.length).toBe(mockProps.questions.length);
  });
  it("renders additional content", () => {
    render(<BeginnerImageAi {...mockProps} />);
    const additionalContent = screen.getByText("Additional beginner content");
    expect(additionalContent).toBeInTheDocument();
  });
});
