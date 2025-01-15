import React from "react";
import { render, screen } from "@testing-library/react";
import ButtonsBlock from "../../../../../components/bloc/fieldsets/cta/ButtonsBlock";
import "@testing-library/jest-dom";
jest.mock("../../../../../components/buttons/Submit", () => () => (
  <button data-testid='mockSubmit'>SubmitMock</button>
));
jest.mock("../../../../../components/buttons/Reset", () => () => (
  <button data-testid='mockReset'>ResetMock</button>
));
describe("ButtonsBlock", () => {
  it("renders a fieldset with Submit and Reset", () => {
    render(<ButtonsBlock />);
    const fs = screen.getByRole("group");
    expect(fs).toBeInTheDocument();
    expect(fs).toHaveAttribute("id", "ctaBtnsBlock");
    expect(screen.getByTestId("mockSubmit")).toBeInTheDocument();
    expect(screen.getByTestId("mockReset")).toBeInTheDocument();
  });
});
