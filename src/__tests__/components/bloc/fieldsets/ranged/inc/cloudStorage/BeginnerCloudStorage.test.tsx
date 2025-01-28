import React from "react";
import { render, screen } from "@testing-library/react";
import BeginnerCloudStorage from "../../../../../../../components/bloc/fieldsets/ranged/inc/cloudStorage/BeginnerCloudStorage";
describe("BeginnerCloudStorage", () => {
  const mockProps = {
    prefix: "cloud",
    sufix: "beginner",
    questions: [
      ["q1", "What cloud storage do you use?"],
      ["q2", "How do you manage cloud files?"],
    ],
    additional: <p>Additional content</p>,
  };
  it("renders the fieldset with the correct id", () => {
    render(<BeginnerCloudStorage {...mockProps} />);
    const fieldset = screen.getByRole("group", { name: /cloud__beginner/i });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("id", "fs__cloud__beginner");
  });
  it("renders the correct number of questions", () => {
    render(<BeginnerCloudStorage {...mockProps} />);
    const questions = screen.getAllByLabelText(/What/i);
    expect(questions.length).toBe(mockProps.questions.length);
  });
  it("renders additional content", () => {
    render(<BeginnerCloudStorage {...mockProps} />);
    const additionalContent = screen.getByText("Additional content");
    expect(additionalContent).toBeInTheDocument();
  });
});
