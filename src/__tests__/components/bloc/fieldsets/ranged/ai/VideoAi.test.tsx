import React from "react";
import { render, screen } from "@testing-library/react";
import VideoAi from "../../../../../../components/bloc/fieldsets/ranged/ai/VideoAi";
describe("VideoAi", () => {
  it("should render the correct component based on levelTitle", () => {
    const props = { lvl: 4, id: "testVideoAi", controller: "testController" };
    render(<VideoAi {...props} />);
    const fieldset = screen.getByRole("group", { name: /testvideoai/i });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("data-controlledby", "testController");
  });
  it("should display ExpertVideoAi when levelTitle is 'expert'", () => {
    const props = { lvl: 5, id: "testVideoAi", controller: "testController" };
    render(<VideoAi {...props} />);
    const expertComponent = screen.getByText(/expert/i);
    expect(expertComponent).toBeInTheDocument();
  });
});
