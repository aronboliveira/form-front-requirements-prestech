import React from "react";
import { render, screen } from "@testing-library/react";
import ExpertCrms from "../../../../../../../components/bloc/fieldsets/ranged/inc/Crms/ExpertCrms";
describe("ExpertCrms", () => {
  const mockProps = {
    prefix: "crm",
    sufix: "expert",
    questions: [
      ["q1", "How do you handle enterprise-level CRM?"],
      ["q2", "What advanced analytics do you implement?"],
    ],
    additional: <p>Additional content</p>,
  };
  it("renders the fieldset with the correct id", () => {
    render(<ExpertCrms {...mockProps} />);
    const fieldset = screen.getByRole("group", { name: /crm__expert/i });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("id", "fs__crm__expert");
  });
  it("renders the correct number of questions", () => {
    render(<ExpertCrms {...mockProps} />);
    const questions = screen.getAllByLabelText(/How/i);
    expect(questions.length).toBe(mockProps.questions.length);
  });
  it("renders additional content", () => {
    render(<ExpertCrms {...mockProps} />);
    const additionalContent = screen.getByText("Additional content");
    expect(additionalContent).toBeInTheDocument();
  });
});
