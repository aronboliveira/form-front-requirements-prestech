/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import Gender from "../../../components/inputs/Gender";
describe("Gender component", () => {
  it("renders label 'Gênero' and a select", () => {
    render(<Gender />);
    expect(screen.getByLabelText("Gênero")).toBeInTheDocument();
    expect(
      screen.getByRole("combobox", { name: /gênero/i })
    ).toBeInTheDocument();
  });
  it("has several option values (feminino, masculino, nb, undefined)", () => {
    render(<Gender />);
    expect(
      screen.getByRole("option", { name: /feminino/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: /masculino/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: /não-binário/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("option", { name: /outros/i })).toBeInTheDocument();
  });
});
