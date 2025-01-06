/**
 *@jest-environment jsdom
 */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Range from "../../../components/inputs/Range";
import IOHandler from "../../../lib/client/handlers/IOHandler";
import StyleHandler from "../../../lib/client/handlers/StyleHandler";
jest.mock("../../../lib/client/handlers/IOHandler", () => ({
  __esModule: true,
  default: {
    ...jest.requireActual("../../../lib/client/handlers/IOHandler"),
    handleRangeSlide: jest.fn(),
  },
}));
describe("Range input component", () => {
  afterEach(jest.clearAllMocks);
  it("renders label and range input", () => {
    render(<Range label='Select Value' id='testRange' required={false} />);
    expect(screen.getByText("Select Value")).toBeInTheDocument();
    const rangeInput = screen.getByRole("slider") as HTMLInputElement;
    expect(rangeInput).toHaveAttribute("type", "range");
    expect(rangeInput).toHaveAttribute("id", "testRange");
  });
  it("sets initial value to '0' and has data-slideable='true' after mount", () => {
    render(<Range label='Test Range' id='rangeId' />);
    const rangeInput = screen.getByRole("slider", {
      name: /test range/i,
    }) as HTMLInputElement;
    expect(rangeInput.value).toBe("0");
    expect(rangeInput.dataset.slideable).toBe("true");
  });
  it("calls IOHandler.handleRangeSlide on input change event", () => {
    const { getByRole } = render(<Range label='Range' id='rangeTest' />);
    const rangeInput = getByRole("slider", {
      name: /range/i,
    }) as HTMLInputElement;
    fireEvent.change(rangeInput, { target: { value: "10" } });
    expect(IOHandler.handleRangeSlide).toHaveBeenCalledTimes(1);
    expect(IOHandler.handleRangeSlide).toHaveBeenCalledWith(rangeInput);
  });
  it("displays min=0, max=100 and a text showing 0.05 * 100 => 5", () => {
    render(<Range label='Test Range' />);
    expect(screen.getByText("0")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });
  it("updates pseudo styles when value changes", () => {
    render(<Range label='Test Range' id='rangeTest' />);
    const input = screen.getByRole("slider") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "40" } });
    expect(StyleHandler.updatePseudos).toHaveBeenCalledWith({
      idf: ".form-range#rangeTest",
      pseudo: "::-webkit-slider-thumb",
      prop: "background-color",
      value: "#ffa500",
    });
  });
});
