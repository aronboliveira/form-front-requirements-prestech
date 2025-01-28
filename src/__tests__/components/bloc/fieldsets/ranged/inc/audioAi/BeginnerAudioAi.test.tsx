import React from "react";
import { render, screen } from "@testing-library/react";
import BeginnerAudioAi from "../../../../../../../components/bloc/fieldsets/ranged/inc/audioAi/BeginnerAudioAi";
describe("BeginnerAudioAi", () => {
  const mockProps = {
    prefix: "audio",
    sufix: "beginner",
    questions: [
      ["q1", "What is your favorite song?"],
      ["q2", "What audio software do you use?"],
    ],
    additional: <p>Additional content</p>,
  };
  it("renders the fieldset with the correct id", () => {
    render(<BeginnerAudioAi {...mockProps} />);
    const fieldset = screen.getByRole("group", { name: /audio__beginner/i });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("id", "fs__audio__beginner");
  });
  it("renders the correct number of questions", () => {
    render(<BeginnerAudioAi {...mockProps} />);
    const questions = screen.getAllByRole("textbox");
    expect(questions.length).toBe(mockProps.questions.length);
  });
  it("renders additional content", () => {
    render(<BeginnerAudioAi {...mockProps} />);
    const additionalContent = screen.getByText("Additional content");
    expect(additionalContent).toBeInTheDocument();
  });
});
