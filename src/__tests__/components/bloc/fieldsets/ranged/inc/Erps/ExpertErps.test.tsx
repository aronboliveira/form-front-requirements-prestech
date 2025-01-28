import React from "react";
import { render, screen } from "@testing-library/react";
import ExpertErps from "../../../../../../../components/bloc/fieldsets/ranged/inc/Erps/ExpertErps";
describe("ExpertErps", () => {
  const mockProps = {
    prefix: "erps",
    sufix: "expert",
    questions: [
      ["q1", "What is advanced ERP integration?"],
      ["q2", "How can ERP analytics improve decision-making?"],
    ],
    additional: <p>Advanced ERP Details</p>,
  };
  it("renders the fieldset with the correct id", () => {
    render(<ExpertErps {...mockProps} />);
    const fieldset = screen.getByRole("group", { name: /fs__erps__expert/i });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("id", "fs__erps__expert");
  });
  it("renders the correct number of questions", () => {
    render(<ExpertErps {...mockProps} />);
    const questions = screen.getAllByText(/What/i);
    expect(questions.length).toBe(mockProps.questions.length);
  });
  it("renders additional content", () => {
    render(<ExpertErps {...mockProps} />);
    const additionalContent = screen.getByText("Advanced ERP Details");
    expect(additionalContent).toBeInTheDocument();
  });
});
