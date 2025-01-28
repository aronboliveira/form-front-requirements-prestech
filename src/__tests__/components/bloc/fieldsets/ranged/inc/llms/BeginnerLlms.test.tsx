import React from "react";
import { render, screen } from "@testing-library/react";
import BeginnerLlms from "../../../../../../../components/bloc/fieldsets/ranged/inc/llms/BeginnerLlms";
describe("BeginnerLlms", () => {
  const mockProps = {
    prefix: "llms",
    sufix: "beginner",
    questions: [
      ["q1", "What is a language model?"],
      ["q2", "How does an LLM generate text?"],
    ],
    additional: <p>LLMs beginner content</p>,
  };
  it("renders the fieldset with the correct id", () => {
    render(<BeginnerLlms {...mockProps} />);
    const fieldset = screen.getByRole("group", {
      name: /fs__llms__beginner/i,
    });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("id", "fs__llms__beginner");
  });
  it("renders the correct number of questions", () => {
    render(<BeginnerLlms {...mockProps} />);
    const questions = screen.getAllByText(/What/i);
    expect(questions.length).toBe(mockProps.questions.length);
  });
  it("renders additional content", () => {
    render(<BeginnerLlms {...mockProps} />);
    const additionalContent = screen.getByText("LLMs beginner content");
    expect(additionalContent).toBeInTheDocument();
  });
});
