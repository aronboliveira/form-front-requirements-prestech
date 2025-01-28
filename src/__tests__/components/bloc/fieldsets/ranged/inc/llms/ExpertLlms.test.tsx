import React from "react";
import { render, screen } from "@testing-library/react";
import ExpertLlms from "../../../../../../../components/bloc/fieldsets/ranged/inc/llms/ExpertLlms";
describe("ExpertLlms", () => {
  const mockProps = {
    prefix: "llms",
    sufix: "expert",
    questions: [
      ["q1", "How do transformer models work?"],
      ["q2", "What is attention mechanism in LLMs?"],
    ],
    additional: <p>LLMs advanced concepts</p>,
  };
  it("renders the fieldset with the correct id", () => {
    render(<ExpertLlms {...mockProps} />);
    const fieldset = screen.getByRole("group", {
      name: /fs__llms__expert/i,
    });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("id", "fs__llms__expert");
  });
  it("renders the correct number of questions", () => {
    render(<ExpertLlms {...mockProps} />);
    const questions = screen.getAllByText(/What/i);
    expect(questions.length).toBe(mockProps.questions.length);
  });
  it("renders additional content", () => {
    render(<ExpertLlms {...mockProps} />);
    const additionalContent = screen.getByText("LLMs advanced concepts");
    expect(additionalContent).toBeInTheDocument();
  });
});
