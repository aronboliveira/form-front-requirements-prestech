import React from "react";
import { render, screen } from "@testing-library/react";
import ExpertFormBuilders from "../../../../../../../components/bloc/fieldsets/ranged/inc/formBuilders/ExpertFormBuilders";
describe("ExpertFormBuilders", () => {
  const mockProps = {
    prefix: "form",
    sufix: "expert",
    questions: [
      ["q1", "What is advanced form validation?"],
      ["q2", "How to implement custom form logic?"],
    ],
    additional: <p>Advanced Form Tips</p>,
  };
  it("renders the fieldset with the correct id", () => {
    render(<ExpertFormBuilders {...mockProps} />);
    const fieldset = screen.getByRole("group", {
      name: /fs__form__expert/i,
    });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("id", "fs__form__expert");
  });
  it("renders the correct number of questions", () => {
    render(<ExpertFormBuilders {...mockProps} />);
    const questions = screen.getAllByText(/What/i);
    expect(questions.length).toBe(mockProps.questions.length);
  });
  it("renders additional content", () => {
    render(<ExpertFormBuilders {...mockProps} />);
    const additionalContent = screen.getByText("Advanced Form Tips");
    expect(additionalContent).toBeInTheDocument();
  });
});
