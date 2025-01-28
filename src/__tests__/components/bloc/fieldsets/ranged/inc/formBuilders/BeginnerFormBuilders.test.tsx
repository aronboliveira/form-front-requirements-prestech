import React from "react";
import { render, screen } from "@testing-library/react";
import BeginnerFormBuilders from "../../../../../../../components/bloc/fieldsets/ranged/inc/formBuilders/BeginnerFormBuilders";
describe("BeginnerFormBuilders", () => {
  const mockProps = {
    prefix: "form",
    sufix: "beginner",
    questions: [
      ["q1", "What is a form builder?"],
      ["q2", "How do you create a simple form?"],
    ],
    additional: <p>Form Building Tips</p>,
  };
  it("renders the fieldset with the correct id", () => {
    render(<BeginnerFormBuilders {...mockProps} />);
    const fieldset = screen.getByRole("group", {
      name: /fs__form__beginner/i,
    });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("id", "fs__form__beginner");
  });
  it("renders the correct number of questions", () => {
    render(<BeginnerFormBuilders {...mockProps} />);
    const questions = screen.getAllByText(/What/i);
    expect(questions.length).toBe(mockProps.questions.length);
  });
  it("renders additional content", () => {
    render(<BeginnerFormBuilders {...mockProps} />);
    const additionalContent = screen.getByText("Form Building Tips");
    expect(additionalContent).toBeInTheDocument();
  });
});
