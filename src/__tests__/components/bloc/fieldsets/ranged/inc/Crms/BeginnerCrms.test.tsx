import React from "react";
import { render, screen } from "@testing-library/react";
import BeginnerCrms from "../../../../../../../components/bloc/fieldsets/ranged/inc/Crms/BeginnerCrms";
describe("BeginnerCrms", () => {
  const mockProps = {
    prefix: "crm",
    sufix: "beginner",
    questions: [
      ["q1", "What CRM platform do you use?"],
      ["q2", "How do you track leads?"],
    ],
    additional: <p>Additional content</p>,
  };

  it("renders the fieldset with the correct id", () => {
    render(<BeginnerCrms {...mockProps} />);
    const fieldset = screen.getByRole("group", { name: /crm__beginner/i });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("id", "fs__crm__beginner");
  });

  it("renders the correct number of questions", () => {
    render(<BeginnerCrms {...mockProps} />);
    const questions = screen.getAllByLabelText(/What/i);
    expect(questions.length).toBe(mockProps.questions.length);
  });

  it("renders additional content", () => {
    render(<BeginnerCrms {...mockProps} />);
    const additionalContent = screen.getByText("Additional content");
    expect(additionalContent).toBeInTheDocument();
  });
});
