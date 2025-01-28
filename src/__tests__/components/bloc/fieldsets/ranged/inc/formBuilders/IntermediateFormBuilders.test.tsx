import React from "react";
import { render, screen } from "@testing-library/react";
import IntermediateFormBuilders from "../../../../../../../components/bloc/fieldsets/ranged/inc/formBuilders/IntermediateFormBuilders";
describe("IntermediateFormBuilders", () => {
  const mockProps = {
    prefix: "form",
    sufix: "intermediate",
    questions: [
      ["q1", "What are advanced form templates?"],
      ["q2", "How to build responsive forms?"],
    ],
    additional: <p>Form Building Strategies</p>,
  };
  it("renders the fieldset with the correct id", () => {
    render(<IntermediateFormBuilders {...mockProps} />);
    const fieldset = screen.getByRole("group", {
      name: /fs__form__intermediate/i,
    });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("id", "fs__form__intermediate");
  });
  it("renders the correct number of questions", () => {
    render(<IntermediateFormBuilders {...mockProps} />);
    const questions = screen.getAllByText(/What/i);
    expect(questions.length).toBe(mockProps.questions.length);
  });
  it("renders additional content", () => {
    render(<IntermediateFormBuilders {...mockProps} />);
    const additionalContent = screen.getByText("Form Building Strategies");
    expect(additionalContent).toBeInTheDocument();
  });
});
