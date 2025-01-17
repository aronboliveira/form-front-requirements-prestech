import React from "react";
import { render, screen } from "@testing-library/react";
import TechnologiesLists from "../../../../../components/bloc/fieldsets/professional/TechnologiesList";
import { FormCtx } from "../../../../../components/forms/RequirementForm";
import "@testing-library/jest-dom";
jest.mock("../path/to/TechCheckboxes", () => {
  return function MockTechCheckboxes(props: any) {
    return (
      <div data-testid='mockTechCheckboxes'>
        {props.apps.join(", ")} - group: {props.num}
      </div>
    );
  };
});
describe("TechnologiesLists component", () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <FormCtx.Provider value={{ role: "comercial" } as any}>
      {children}
    </FormCtx.Provider>
  );
  it("renders a fieldset for the role if not 'undefined'", () => {
    render(<TechnologiesLists />, { wrapper });
    const fs = screen.getByRole("group");
    expect(fs).toBeInTheDocument();
    const legendText = screen.getByText(/Tecnologias usadas: /i);
    expect(legendText).toBeInTheDocument();
  });
  it("renders multiple TechCheckboxes if the role is recognized", () => {
    render(<TechnologiesLists />, { wrapper });
    const mocks = screen.getAllByTestId("mockTechCheckboxes");
    expect(mocks.length).toBeGreaterThan(0);
  });
  it("hides the fieldset if role='undefined'", () => {
    const altWrapper = ({ children }: { children: React.ReactNode }) => (
      <FormCtx.Provider value={{ role: "undefined" } as any}>
        {children}
      </FormCtx.Provider>
    );
    render(<TechnologiesLists />, { wrapper: altWrapper });
    const fs = screen.getByRole("group");
    expect(fs).toHaveStyle("display: none");
  });
});
