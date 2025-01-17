/**
 * @file TechCheckboxes.spec.tsx
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import TechCheckboxes from "../../../../../components/bloc/fieldsets/professional/TechCheckboxes";
import { FormCtx } from "../../../../../components/forms/RequirementForm";
jest.mock("@/components/inputs/contextual/ContextualCheckbox", () => {
  return function MockCheckbox(props: any) {
    return (
      <div data-testid='mockContextualCheckbox'>
        {props.app} - {props.ownNum}
      </div>
    );
  };
});
describe("TechCheckboxes component", () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <FormCtx.Provider value={{ role: "financeiro" } as any}>
      {children}
    </FormCtx.Provider>
  );
  it("renders a fieldset with the provided apps as child checkboxes", () => {
    const testApps = ["msExcel", "netSuite", "tableau"];
    render(<TechCheckboxes apps={testApps} num='1' />, { wrapper });
    const fs = screen.getByRole("group");
    expect(fs).toBeInTheDocument();
    const mocks = screen.getAllByTestId("mockContextualCheckbox");
    expect(mocks).toHaveLength(testApps.length);
  });
  it("applies role-based and num-based classes/IDs", () => {
    render(<TechCheckboxes apps={["foo"]} num='2' />, { wrapper });
    const fs = screen.getByRole("group");
    expect(fs).toHaveAttribute("data-groupnum", "2");
    expect(fs).toHaveClass("fsSubTechCbfinanceiro");
  });
});
