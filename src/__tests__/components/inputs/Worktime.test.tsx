/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Worktime from "../../../components/inputs/Worktime";
describe("Worktime component", () => {
  it("renders a label about tempo de trabalho", () => {
    render(<Worktime />);
    expect(
      screen.getByLabelText("Tempo de Trabalho na Empresa (em meses)")
    ).toBeInTheDocument();
  });
  it("enforces maxLength=5", () => {
    render(<Worktime />);
    const input = screen.getByLabelText(
      "Tempo de Trabalho na Empresa (em meses)"
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "123456" } });
    expect(input.value).toBe("12345");
  });
});
