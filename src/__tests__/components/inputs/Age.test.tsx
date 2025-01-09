/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Age from "../../../components/inputs/Age";
describe("Age component", () => {
  it("renders the label 'Idade' and an input", () => {
    render(<Age />);
    expect(screen.getByLabelText("Idade")).toBeInTheDocument();
  });
  it("accepts numeric input and enforces maxLength=3", () => {
    render(<Age />);
    const input = screen.getByLabelText("Idade") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "1234" } });
    expect(input.value).toBe("123");
  });
});
