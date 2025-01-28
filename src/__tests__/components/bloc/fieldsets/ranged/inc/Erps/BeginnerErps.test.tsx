import React from "react";
import { render, screen } from "@testing-library/react";
import BeginnerErps from "../../../../../../../components/bloc/fieldsets/ranged/inc/Erps/BeginnerErps";
describe("BeginnerErps", () => {
  const mockProps = {
    prefix: "erps",
    sufix: "beginner",
    questions: [
      ["q1", "What is ERP?"],
      ["q2", "How does ERP benefit organizations?"],
    ],
    additional: <p>Additional content</p>,
  };
  it("renders the fieldset with the correct id", () => {
    render(<BeginnerErps {...mockProps} />);
    const fieldset = screen.getByRole("group", { name: /fs__erps__beginner/i });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("id", "fs__erps__beginner");
  });
  it("renders the correct number of questions", () => {
    render(<BeginnerErps {...mockProps} />);
    const questions = screen.getAllByText(/What/i);
    expect(questions.length).toBe(mockProps.questions.length);
  });
  it("renders additional content", () => {
    render(<BeginnerErps {...mockProps} />);
    const additionalContent = screen.getByText("Additional content");
    expect(additionalContent).toBeInTheDocument();
  });
});
