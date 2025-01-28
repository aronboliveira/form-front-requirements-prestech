import React from "react";
import { render, screen } from "@testing-library/react";
import BeginnerVideoAi from "../../../../../../../components/bloc/fieldsets/ranged/inc/videoAi/BeginnerVideoAi";
describe("BeginnerVideoAi", () => {
  const mockProps = {
    prefix: "video",
    sufix: "beginner",
    questions: [
      ["q1", "What is video AI?"],
      ["q2", "How does video AI work?"],
    ],
    additional: <p>Beginner video AI resources</p>,
  };
  it("renders the fieldset with the correct id", () => {
    render(<BeginnerVideoAi {...mockProps} />);
    const fieldset = screen.getByRole("group", {
      name: /fs__video__beginner/i,
    });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("id", "fs__video__beginner");
  });
  it("renders the correct number of questions", () => {
    render(<BeginnerVideoAi {...mockProps} />);
    const questions = screen.getAllByText(/video AI/i);
    expect(questions.length).toBe(mockProps.questions.length);
  });
  it("renders additional content", () => {
    render(<BeginnerVideoAi {...mockProps} />);
    const additionalContent = screen.getByText("Beginner video AI resources");
    expect(additionalContent).toBeInTheDocument();
  });
});
