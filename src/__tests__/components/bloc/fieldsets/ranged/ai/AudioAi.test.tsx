import React from "react";
import { render, screen } from "@testing-library/react";
import AudioAi from "../../../../../../components/bloc/fieldsets/ranged/ai/AudioAi";
describe("AudioAi", () => {
  it("should render the correct component based on levelTitle", () => {
    const props = { lvl: 1, id: "testAudioAi", controller: "testController" };
    render(<AudioAi {...props} />);
    const fieldset = screen.getByRole("group", { name: /testaudioai/i });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("data-controlledby", "testController");
  });
  it("should display BeginnerAudioAi when levelTitle is 'beginner'", () => {
    const props = { lvl: 1, id: "testAudioAi", controller: "testController" };
    render(<AudioAi {...props} />);
    const beginnerComponent = screen.getByText(/beginner/i);
    expect(beginnerComponent).toBeInTheDocument();
  });
});
