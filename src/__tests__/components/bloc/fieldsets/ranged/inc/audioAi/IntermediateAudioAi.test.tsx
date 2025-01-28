import React from "react";
import { render, screen } from "@testing-library/react";
import IntermediateAudioAi from "../../../../../../../components/bloc/fieldsets/ranged/inc/audioAi/IntermediateAudioAi";
describe("IntermediateAudioAi", () => {
  const mockProps = {
    prefix: "audio",
    sufix: "intermediate",
    questions: [
      ["q1", "What is your favorite podcast?"],
      ["q2", "What microphone do you use?"],
    ],
    additional: <p>Additional content</p>,
  };
  it("renders the fieldset with the correct id", () => {
    render(<IntermediateAudioAi {...mockProps} />);
    const fieldset = screen.getByRole("group", {
      name: /audio__intermediate/i,
    });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("id", "fs__audio__intermediate");
  });
  it("renders the correct number of questions", () => {
    render(<IntermediateAudioAi {...mockProps} />);
    const questions = screen.getAllByRole("textbox");
    expect(questions.length).toBe(mockProps.questions.length);
  });
  it("renders additional content", () => {
    render(<IntermediateAudioAi {...mockProps} />);
    const additionalContent = screen.getByText("Additional content");
    expect(additionalContent).toBeInTheDocument();
  });
});
