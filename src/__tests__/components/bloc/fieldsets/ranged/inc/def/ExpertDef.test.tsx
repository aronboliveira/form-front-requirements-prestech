import React from "react";
import { render, screen } from "@testing-library/react";
import ExpertDef from "../../../../../../../components/bloc/fieldsets/ranged/inc/def/ExpertDef";
describe("ExpertDef", () => {
  const mockProps = {
    prefix: "def",
    sufix: "expert",
    questions: [
      ["q1", "What is your expertise?"],
      ["q2", "How do you manage expert-level tasks?"],
    ],
    additional: <p>Additional content</p>,
  };
  it("renders the fieldset with the correct id", () => {
    render(<ExpertDef {...mockProps} />);
    const fieldset = screen.getByRole("group", { name: /def__expert/i });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("id", "fs__def__expert");
  });
  it("renders the correct number of questions", () => {
    render(<ExpertDef {...mockProps} />);
    const questions = screen.getAllByLabelText(/What/i);
    expect(questions.length).toBe(mockProps.questions.length);
  });
  it("renders additional content", () => {
    render(<ExpertDef {...mockProps} />);
    const additionalContent = screen.getByText("Additional content");
    expect(additionalContent).toBeInTheDocument();
  });
});
