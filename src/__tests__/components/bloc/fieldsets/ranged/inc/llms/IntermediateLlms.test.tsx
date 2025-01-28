import React from "react";
import { render, screen } from "@testing-library/react";
import IntermediateLlms from "../../../../../../../components/bloc/fieldsets/ranged/inc/llms/IntermediateLlms";
describe("IntermediateLlms", () => {
  const mockProps = {
    prefix: "llms",
    sufix: "intermediate",
    questions: [
      ["q1", "What is fine-tuning in LLMs?"],
      ["q2", "How does LLM handle context?"],
    ],
    additional: <p>LLMs intermediate strategies</p>,
  };
  it("renders the fieldset with the correct id", () => {
    render(<IntermediateLlms {...mockProps} />);
    const fieldset = screen.getByRole("group", {
      name: /fs__llms__intermediate/i,
    });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("id", "fs__llms__intermediate");
  });
  it("renders the correct number of questions", () => {
    render(<IntermediateLlms {...mockProps} />);
    const questions = screen.getAllByText(/What/i);
    expect(questions.length).toBe(mockProps.questions.length);
  });
  it("renders additional content", () => {
    render(<IntermediateLlms {...mockProps} />);
    const additionalContent = screen.getByText("LLMs intermediate strategies");
    expect(additionalContent).toBeInTheDocument();
  });
});
