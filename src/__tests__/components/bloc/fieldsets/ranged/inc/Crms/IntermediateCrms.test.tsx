import React from "react";
import { render, screen } from "@testing-library/react";
import IntermediateCrms from "../../../../../../../components/bloc/fieldsets/ranged/inc/Crms/IntermediateCrms";
describe("IntermediateCrms", () => {
  const mockProps = {
    prefix: "crm",
    sufix: "intermediate",
    questions: [
      ["q1", "How do you automate customer workflows?"],
      ["q2", "What CRM integrations do you use?"],
    ],
    additional: <p>Additional content</p>,
  };
  it("renders the fieldset with the correct id", () => {
    render(<IntermediateCrms {...mockProps} />);
    const fieldset = screen.getByRole("group", {
      name: /crm__intermediate/i,
    });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("id", "fs__crm__intermediate");
  });
  it("renders the correct number of questions", () => {
    render(<IntermediateCrms {...mockProps} />);
    const questions = screen.getAllByLabelText(/How/i);
    expect(questions.length).toBe(mockProps.questions.length);
  });
  it("renders additional content", () => {
    render(<IntermediateCrms {...mockProps} />);
    const additionalContent = screen.getByText("Additional content");
    expect(additionalContent).toBeInTheDocument();
  });
});
