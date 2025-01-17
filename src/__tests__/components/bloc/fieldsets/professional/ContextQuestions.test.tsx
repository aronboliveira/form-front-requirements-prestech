import React from "react";
import { render, screen } from "@testing-library/react";
import ContextualQuestions from "../../../../../components/bloc/fieldsets/professional/ContextualQuestions";
import { FormCtx } from "../../../../../components/forms/RequirementForm";
import "@testing-library/jest-dom";
jest.mock("@/components/inputs/contextual/ContextualText", () => () => (
  <div data-testid='mockContextualText'>Mocked ContextualText</div>
));
describe("ContextualQuestions component", () => {
  const mockContext = { role: "marketing" };
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <FormCtx.Provider value={mockContext as any}>{children}</FormCtx.Provider>
  );
  it("renders two fieldsets for the Tasks and Platforms groups", () => {
    render(<ContextualQuestions />, { wrapper });
    const fieldsets = screen.getAllByRole("group");
    expect(fieldsets).toHaveLength(2);
    const mocks = screen.getAllByTestId("mockContextualText");
    expect(mocks).toHaveLength(8);
  });
  it("uses the context role to build the fieldset IDs", () => {
    render(<ContextualQuestions />, { wrapper });
    const tasksEl = document.getElementById("fsTasksMarketing");
    const platformsEl = document.getElementById("fsPlatformsMarketing");
    expect(tasksEl).toBeInTheDocument();
    expect(platformsEl).toBeInTheDocument();
  });
});
