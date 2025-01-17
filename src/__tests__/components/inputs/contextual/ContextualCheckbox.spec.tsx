import React from "react";
import { render, screen } from "@testing-library/react";
import ContextualCheckbox from "../../../../components/inputs/contextual/ContextualCheckbox";
import { FormCtx } from "../../../../components/forms/RequirementForm";
describe("ContextualCheckbox component", () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <FormCtx.Provider value={{ role: "suporteTecnicoN1" } as any}>
      {children}
    </FormCtx.Provider>
  );
  it("renders an input[type='checkbox'] with a label for the provided app key", () => {
    render(<ContextualCheckbox app='windowsServer' ownNum='1' />, { wrapper });
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute("id", "windowsServer");
    expect(checkbox).toHaveAttribute("name", "windows_server");
    const label = screen.getByLabelText("Windows Server");
    expect(label).toBeInTheDocument();
  });
  it("disables the checkbox if the friendly app name doesn't exist", () => {
    render(<ContextualCheckbox app='unknownApp' ownNum='2' />, { wrapper });
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeDisabled();
  });
  it("applies role-based classes", () => {
    render(<ContextualCheckbox app='linuxServer' ownNum='3' />, { wrapper });
    const containerDiv = screen.getByTestId("contextualcheckbox-container");
    const parent = document.getElementById("divTechCbSuporteTecnicoN1")!;
    expect(parent).toBeInTheDocument();
  });
});
