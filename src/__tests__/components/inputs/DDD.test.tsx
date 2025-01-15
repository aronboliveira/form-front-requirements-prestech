/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DDD from "../../../components/inputs/DDD";
describe("DDD component", () => {
  it("renders label 'DDD' and default value '21'", () => {
    render(<DDD />);
    const input = screen.getByLabelText("DDD") as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.value).toBe("21");
  });
  it("updates the value on change", () => {
    render(<DDD />);
    const input = screen.getByLabelText("DDD") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "11" } });
    expect(input.value).toBe("11");
  });
});
