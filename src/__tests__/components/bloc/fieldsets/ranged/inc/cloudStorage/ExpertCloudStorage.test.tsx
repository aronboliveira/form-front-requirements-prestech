import React from "react";
import { render, screen } from "@testing-library/react";
import ExpertCloudStorage from "../../../../../../../components/bloc/fieldsets/ranged/inc/cloudStorage/ExpertCloudStorage";
describe("ExpertCloudStorage", () => {
  const mockProps = {
    prefix: "cloud",
    sufix: "expert",
    questions: [
      ["q1", "How do you manage large-scale cloud environments?"],
      ["q2", "What tools do you use for data security?"],
    ],
    additional: <p>Additional content</p>,
  };
  it("renders the fieldset with the correct id", () => {
    render(<ExpertCloudStorage {...mockProps} />);
    const fieldset = screen.getByRole("group", { name: /cloud__expert/i });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("id", "fs__cloud__expert");
  });
  it("renders the correct number of questions", () => {
    render(<ExpertCloudStorage {...mockProps} />);
    const questions = screen.getAllByLabelText(/How/i);
    expect(questions.length).toBe(mockProps.questions.length);
  });
  it("renders additional content", () => {
    render(<ExpertCloudStorage {...mockProps} />);
    const additionalContent = screen.getByText("Additional content");
    expect(additionalContent).toBeInTheDocument();
  });
});
