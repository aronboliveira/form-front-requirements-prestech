/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import LocalizedTelFs from "../../../../../components/bloc/fieldsets/etc/LocalizedTelFs";
import "@testing-library/jest-dom";
describe("LocalizedTelFs component", () => {
  it("renders TelCountryCode, DDD, and Tel inputs", () => {
    render(<LocalizedTelFs />);
    expect(screen.getByLabelText("Código")).toBeInTheDocument();
    expect(screen.getByLabelText("DDD")).toBeInTheDocument();
    expect(screen.getByLabelText("Telefone")).toBeInTheDocument();
  });
  it("uses the default label if none is provided", () => {
    render(<LocalizedTelFs />);
    expect(screen.getByText("Telefone")).toBeInTheDocument();
  });
  it("accepts and renders a custom label", () => {
    render(<LocalizedTelFs label='Contato' />);
    expect(screen.getByText("Contato")).toBeInTheDocument();
  });
});
