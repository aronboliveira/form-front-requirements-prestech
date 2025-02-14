import React from "react";
import { render, screen } from "@testing-library/react";
import Spinner from "../../../../components/bloc/transicional/Spinner";
import "@testing-library/jest-dom";
jest.mock("react-dom", () => ({
  ...jest.requireActual("react-dom"),
  createPortal: (node: React.ReactNode) => node,
}));
describe("Spinner component", () => {
  beforeEach(() => {
    document.body.innerHTML =
      '<div class="divModal"></div>';
  });
  test("renders spinner with correct classes and message", () => {
    render(
      <Spinner
        message='Loading test...'
        spinnerClass='test-spinner'
        spinnerColor='text-primary'
      />
    );
    const spinnerElement = screen.getByRole("status");
    expect(spinnerElement).toHaveClass("test-spinner");
    expect(spinnerElement).toHaveClass("text-primary");
    expect(
      screen.getByText("Loading test...")
    ).toBeInTheDocument();
  });
  test("applies fullscreen style when fs prop is true", () => {
    render(<Spinner fs={true} />);
    const spinnerElement = screen.getByRole("status");
    expect(spinnerElement).toHaveStyle("position: fixed");
  });
  test("blurs document forms on mount", () => {
    document.body.innerHTML +=
      '<form id="testForm"></form>';
    render(<Spinner />);
    const formElement = document.getElementById("testForm");
    expect(formElement).toHaveStyle("filter: blur(2px)");
  });
});
