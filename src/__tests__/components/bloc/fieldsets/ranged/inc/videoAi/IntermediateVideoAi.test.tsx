import React from "react";
import { render, screen } from "@testing-library/react";
import IntermediateVideoAi from "../../../../../../../components/bloc/fieldsets/ranged/inc/videoAi/IntermediateVideoAi";
describe("IntermediateVideoAi", () => {
  const mockProps = {
    prefix: "video",
    sufix: "intermediate",
    questions: [
      ["q1", "What is the role of data in video AI?"],
      ["q2", "How to train a video AI model?"],
    ],
    additional: <p>Intermediate video AI resources</p>,
  };
  it("renders the fieldset with the correct id", () => {
    render(<IntermediateVideoAi {...mockProps} />);
    const fieldset = screen.getByRole("group", {
      name: /fs__video__intermediate/i,
    });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("id", "fs__video__intermediate");
  });
  it("renders the correct number of questions", () => {
    render(<IntermediateVideoAi {...mockProps} />);
    const questions = screen.getAllByText(/video AI/i);
    expect(questions.length).toBe(mockProps.questions.length);
  });
  it("renders additional content", () => {
    render(<IntermediateVideoAi {...mockProps} />);
    const additionalContent = screen.getByText(
      "Intermediate video AI resources"
    );
    expect(additionalContent).toBeInTheDocument();
  });
});
