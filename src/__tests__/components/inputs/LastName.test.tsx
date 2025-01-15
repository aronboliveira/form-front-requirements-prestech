/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LastName from "../../../components/inputs/LastName";

describe("LastName component", () => {
  it("renders label 'Sobrenome'", () => {
    render(<LastName />);
    expect(screen.getByLabelText("Sobrenome")).toBeInTheDocument();
  });
  it("applies uppercasing for first character or uses autoCapitalizeInputs for subsequent chars", () => {
    render(<LastName />);
    const input = screen.getByLabelText("Sobrenome") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "d" } });
    expect(input.value).toBe("D");
  });
});
