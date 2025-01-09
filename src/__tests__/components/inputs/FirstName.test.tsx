/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FirstName from "../../../components/inputs/FirstName";
describe("FirstName component", () => {
  it("renders label 'Primeiro Nome'", () => {
    render(<FirstName />);
    expect(screen.getByLabelText("Primeiro Nome")).toBeInTheDocument();
  });
  it("applies uppercasing on first character", () => {
    render(<FirstName />);
    const input = screen.getByLabelText("Primeiro Nome") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "john" } });
    expect(input.value).toBe("John");
  });
});
