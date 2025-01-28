import React from "react";
import { render, screen } from "@testing-library/react";
import IntermediateCloudStorage from "../../../../../../../components/bloc/fieldsets/ranged/inc/cloudStorage/IntermediateCloudStorage";
describe("IntermediateCloudStorage", () => {
  const mockProps = {
    prefix: "cloud",
    sufix: "intermediate",
    questions: [
      ["q1", "What is your preferred cloud storage provider?"],
      ["q2", "What are your synchronization methods?"],
    ],
    additional: <p>Additional content</p>,
  };
  it("renders the fieldset with the correct id", () => {
    render(<IntermediateCloudStorage {...mockProps} />);
    const fieldset = screen.getByRole("group", {
      name: /cloud__intermediate/i,
    });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("id", "fs__cloud__intermediate");
  });
  it("renders the correct number of questions", () => {
    render(<IntermediateCloudStorage {...mockProps} />);
    const questions = screen.getAllByLabelText(/What/i);
    expect(questions.length).toBe(mockProps.questions.length);
  });
  it("renders additional content", () => {
    render(<IntermediateCloudStorage {...mockProps} />);
    const additionalContent = screen.getByText("Additional content");
    expect(additionalContent).toBeInTheDocument();
  });
});
