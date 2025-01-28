import React from "react";
import { render, screen } from "@testing-library/react";
import BeginnerDef from "../../../../../../../components/bloc/fieldsets/ranged/inc/def/BeginnerDef";
describe("BeginnerDef", () => {
  const mockProps = {
    prefix: "def",
    sufix: "beginner",
    questions: [
      ["q1", "What is your beginner definition?"],
      ["q2", "How do you manage learning?"],
    ],
    additional: <p>Additional content</p>,
  };
  it("renders the fieldset with the correct id", () => {
    render(<BeginnerDef {...mockProps} />);
    const fieldset = screen.getByRole("group", { name: /def__beginner/i });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("id", "fs__def__beginner");
  });
  it("renders the correct number of questions", () => {
    render(<BeginnerDef {...mockProps} />);
    const questions = screen.getAllByLabelText(/Whast/i);
    expect(questions.length).toBe(mockProps.questions.length);
  });
  it("renders additional content", () => {
    render(<BeginnerDef {...mockProps} />);
    const additionalContent = screen.getByText("Additional content");
    expect(additionalContent).toBeInTheDocument();
  });
});
