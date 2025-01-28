/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Range from "../../../components/inputs/Range";
import StyleHandler from "../../../lib/client/handlers/StyleHandler";
import MathHandler from "../../../lib/client/handlers/MathHandler";
describe("Range Component", () => {
  const mockProps = {
    id: "businessInteligence",
    label: "Complexity Level",
  };
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("renders the component with initial values", () => {
    const { getByLabelText, getByText } = render(<Range {...mockProps} />);
    expect(getByLabelText("Complexity Level")).toBeInTheDocument();
    expect(getByText("0")).toBeInTheDocument();
    expect(getByText("5")).toBeInTheDocument();
  });
  test("updates context level on range input change", () => {
    const { getByLabelText } = render(<Range {...mockProps} />);
    const rangeInput = getByLabelText("Complexity Level");
    fireEvent.change(rangeInput, { target: { value: "40" } });
    expect(MathHandler.parseNotNaN).toHaveBeenCalledWith("40", 0, "int");
    expect(StyleHandler.updatePseudos).toHaveBeenCalledWith(
      expect.objectContaining({ value: "orangeBasic" })
    );
  });
  test("renders the correct context component based on level", () => {
    const { getByLabelText, rerender } = render(<Range {...mockProps} />);
    const rangeInput = getByLabelText("Complexity Level");
    fireEvent.change(rangeInput, { target: { value: "80" } });
    rerender(<Range {...mockProps} />);
    expect(StyleHandler.updatePseudos).toHaveBeenCalledWith(
      expect.objectContaining({ value: "greenMid" })
    );
  });
  test("calls handleRelUpdate when related element changes", () => {
    const { getByLabelText } = render(<Range {...mockProps} />);
    const rangeInput = getByLabelText("Complexity Level");
    fireEvent.change(rangeInput, { target: { value: "20" } });
    expect(StyleHandler.updatePseudos).toHaveBeenCalled();
  });
  test("applies pseudo-element rules for range input", () => {
    const { getByLabelText } = render(<Range {...mockProps} />);
    const rangeInput = getByLabelText("Complexity Level");
    fireEvent.change(rangeInput, { target: { value: "100" } });
    expect(StyleHandler.defineRangeThumbPseudoElement).toHaveBeenCalled();
    expect(StyleHandler.replaceCssRule).toHaveBeenCalledWith(
      expect.anything(),
      expect.any(Number),
      expect.any(String),
      true
    );
  });
});
