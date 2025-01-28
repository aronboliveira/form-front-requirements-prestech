import React from "react";
import { render, screen } from "@testing-library/react";
import ExpertAudioAi from "../../../../../../../components/bloc/fieldsets/ranged/inc/audioAi/ExpertAudioAi";
describe("ExpertAudioAi", () => {
  const mockProps = {
    prefix: "audio",
    sufix: "expert",
    questions: [
      ["q1", "What is your favorite DAW software?"],
      ["q2", "What studio equipment do you use?"],
    ],
    additional: <p>Additional content</p>,
  };
  it("renders the fieldset with the correct id", () => {
    render(<ExpertAudioAi {...mockProps} />);
    const fieldset = screen.getByRole("group", { name: /audio__expert/i });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("id", "fs__audio__expert");
  });
  it("renders the correct number of questions", () => {
    render(<ExpertAudioAi {...mockProps} />);
    const questions = screen.getAllByRole("textbox");
    expect(questions.length).toBe(mockProps.questions.length);
  });
  it("renders additional content", () => {
    render(<ExpertAudioAi {...mockProps} />);
    const additionalContent = screen.getByText("Additional content");
    expect(additionalContent).toBeInTheDocument();
  });
});
