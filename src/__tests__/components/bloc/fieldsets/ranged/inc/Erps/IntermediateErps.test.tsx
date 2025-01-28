import React from "react";
import { render, screen } from "@testing-library/react";
import IntermediateErps from "../../../../../../../components/bloc/fieldsets/ranged/inc/Erps/IntermediateErps";
describe("IntermediateErps", () => {
  const mockProps = {
    prefix: "erps",
    sufix: "intermediate",
    questions: [
      ["q1", "What are the core ERP modules?"],
      ["q2", "How to optimize ERP usage?"],
    ],
    additional: <p>ERP Optimization Tips</p>,
  };
  it("renders the fieldset with the correct id", () => {
    render(<IntermediateErps {...mockProps} />);
    const fieldset = screen.getByRole("group", {
      name: /fs__erps__intermediate/i,
    });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("id", "fs__erps__intermediate");
  });
  it("renders the correct number of questions", () => {
    render(<IntermediateErps {...mockProps} />);
    const questions = screen.getAllByText(/What/i);
    expect(questions.length).toBe(mockProps.questions.length);
  });
  it("renders additional content", () => {
    render(<IntermediateErps {...mockProps} />);
    const additionalContent = screen.getByText("ERP Optimization Tips");
    expect(additionalContent).toBeInTheDocument();
  });
});
