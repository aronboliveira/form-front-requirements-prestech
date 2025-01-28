import React from "react";
import { render, screen } from "@testing-library/react";
import ImageAi from "../../../../../../components/bloc/fieldsets/ranged/ai/ImageAi";
describe("ImageAi", () => {
  it("should render the correct component based on levelTitle", () => {
    const props = { lvl: 2, id: "testImageAi", controller: "testController" };
    render(<ImageAi {...props} />);
    const fieldset = screen.getByRole("group", { name: /testimageai/i });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("data-controlledby", "testController");
  });
  it("should display IntermediateImageAi when levelTitle is 'intermediate'", () => {
    const props = { lvl: 3, id: "testImageAi", controller: "testController" };
    render(<ImageAi {...props} />);
    const intermediateComponent = screen.getByText(/intermediate/i);
    expect(intermediateComponent).toBeInTheDocument();
  });
});
