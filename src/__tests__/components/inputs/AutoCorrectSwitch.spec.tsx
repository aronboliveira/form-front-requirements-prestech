import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AutoCorrectSwitch from "../../../components/inputs/AutoCorrectSwitch";
import { flags } from "../../../lib/client/vars";
describe("AutoCorrectSwitch Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    flags.isAutoCorrectOn = false;
  });
  it("renders a checkbox labeled 'Correção Automática'", () => {
    render(<AutoCorrectSwitch />);
    const label = screen.getByText(/Correção Automática/i);
    expect(label).toBeInTheDocument();
    const checkbox = screen.getByRole("checkbox", {
      name: "Cálculo automático",
    });
    expect(checkbox).toBeInTheDocument();
  });
  it("has the checkbox checked by default and sets flags.isAutoCorrectOn = true", () => {
    render(<AutoCorrectSwitch />);
    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
    expect(flags.isAutoCorrectOn).toBe(true);
  });
  it("unchecks the box on user click, setting flags.isAutoCorrectOn = false", () => {
    render(<AutoCorrectSwitch />);
    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(false);
    expect(flags.isAutoCorrectOn).toBe(false);
  });
});
