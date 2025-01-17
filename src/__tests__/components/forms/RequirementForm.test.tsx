/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import RequirementForm from "../../../components/forms/RequirementForm";
import "@testing-library/jest-dom";
describe("RequirementForm component", () => {
  it("renders the form with ID 'requirementsForm'", () => {
    render(<RequirementForm />);
    expect(screen.getByRole("form")).toHaveAttribute("id", "requirementsForm");
  });
  it("renders personal data inputs", () => {
    render(<RequirementForm />);
    expect(screen.getByLabelText("Primeiro Nome")).toBeInTheDocument();
    expect(screen.getByLabelText("Sobrenome")).toBeInTheDocument();
    expect(screen.getByLabelText("Idade")).toBeInTheDocument();
    expect(screen.getByLabelText("Gênero")).toBeInTheDocument();
  });
  it("renders two email inputs and two tel fieldsets", () => {
    render(<RequirementForm />);
    expect(screen.getByLabelText("E-mail Primário")).toBeInTheDocument();
    expect(screen.getByLabelText("E-mail Secundário")).toBeInTheDocument();
    expect(screen.getByText(/Telefone Primário/i)).toBeInTheDocument();
    expect(screen.getByText(/Telefone Secundário/i)).toBeInTheDocument();
  });
  it("renders the role and worktime fields", () => {
    render(<RequirementForm />);
    expect(screen.getByLabelText("Cargo na Empresa")).toBeInTheDocument();
    expect(
      screen.getByLabelText("Tempo de Trabalho na Empresa (em meses)")
    ).toBeInTheDocument();
  });
  it("renders the ButtonsBlock with Submit and Reset", () => {
    render(<RequirementForm />);
    expect(screen.getByRole("button", { name: /enviar/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /resetar/i })
    ).toBeInTheDocument();
  });
});
