import React from "react";
import { render, screen } from "@testing-library/react";
import ExpertVideoAi from "../../../../../../../components/bloc/fieldsets/ranged/inc/videoAi/ExpertVideoAi";
describe("ExpertVideoAi", () => {
  const mockProps = {
    prefix: "video",
    sufix: "expert",
    questions: [
      ["q1", "What are advanced video AI techniques?"],
      ["q2", "How to optimize video AI models?"],
    ],
    additional: <p>Expert video AI resources</p>,
  };
  it("renders the fieldset with the correct id", () => {
    render(<ExpertVideoAi {...mockProps} />);
    const fieldset = screen.getByRole("group", { name: /fs__video__expert/i });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("id", "fs__video__expert");
  });
  it("renders the correct number of questions", () => {
    render(<ExpertVideoAi {...mockProps} />);
    const questions = screen.getAllByText(/video AI/i);
    expect(questions.length).toBe(mockProps.questions.length);
  });
  it("renders additional content", () => {
    render(<ExpertVideoAi {...mockProps} />);
    const additionalContent = screen.getByText("Expert video AI resources");
    expect(additionalContent).toBeInTheDocument();
  });
});
