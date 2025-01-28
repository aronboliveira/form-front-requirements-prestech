import React from "react";
import { render, screen } from "@testing-library/react";
import Llms from "../../../../../../components/bloc/fieldsets/ranged/ai/Llms";
describe("Llms", () => {
  it("should render the correct component based on levelTitle", () => {
    const props = { lvl: 5, id: "testLlms", controller: "testController" };
    render(<Llms {...props} />);
    const fieldset = screen.getByRole("group", { name: /testllms/i });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("data-controlledby", "testController");
  });
  it("should display ExpertLlms when levelTitle is 'expert'", () => {
    const props = { lvl: 5, id: "testLlms", controller: "testController" };
    render(<Llms {...props} />);
    const expertComponent = screen.getByText(/expert/i);
    expect(expertComponent).toBeInTheDocument();
  });
});
